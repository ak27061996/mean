       var express = require('express'),
        path = require('path'),
        User = require('./models/user'),
        Category = require('./models/categories'),
         Type = require('./models/types'),
        Product = require('./models/products'),
        Page = require('./models/pages'),
        Order = require('./models/orders'),
        nodemailer = require('nodemailer');

        var dotenv = require('dotenv'); 
        dotenv.load();

        aws = require('aws-sdk'),
        multer = require('multer'),
        multerS3 = require('multer-s3'),
        dateNow = Date.now(),

        rootPath = path.normalize(__dirname + '/../'),
        apiRouter = express.Router(),
        sm = require('sitemap'),
        router = express.Router();


        //*********************


//        var nodemailer = require('nodemailer');
/*
          var transporter = nodemailer.createTransport({
          service: 'gmail',
        auth: {
              user: 'akc13568@gmail.com',
                pass: 'chaurasiya68'
            }
        })*/
          //var dotenv = require('dotenv'); 

          //dotenv.load(); //load environment variables from .env into ENV (process.env).

          //var sendgrid_username   = process.env.SENDGRID_USERNAME;
          //var sendgrid_password   = process.env.SENDGRID_PASSWORD;

         // var sendgrid   = require('sendgrid')(sendgrid_username, sendgrid_password);
       // var email = new sendgrid.Email();

//**********************************
        aws.config.update({
    secretAccessKey: 'X56Bws/kRhgh3DieAlQlR5d3rGk5kIal7QDRNQGQi1h',
    accessKeyId: 'AKIAI7LghghgSYS5YVXUBOBPA'
});

var s3 = new aws.S3({endpoint: 'https://s3.eu-central-1.amazonaws.com',
    region: 'eu-central-1',
    signatureVersion: 'v4',
    ACL: 'public-read'
});

var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'slugimage',
        key: function(req, file, cb) {
            //console.log(file);
            var flname = file.originalname;
            cb(null, 'blogimage/' + dateNow + '' + flname); //use Date.now() for unique file keys
        }
    })
});

module.exports = function(app, passport) {
    app.use('/api', apiRouter);
    app.use('/', router);
    // API routes
 
    require('./api/users')(apiRouter);
    require('./api/categories')(apiRouter);
    require('./api/types')(apiRouter);
    require('./api/products')(apiRouter);  
    require('./api/pages')(apiRouter); 
   require('./api/orders')(apiRouter);


    router.get('/', function(req, res) {
        res.render('index');
    });
    // admin route
    router.get('/admin', function(req, res) {
        res.render('admin/login');
    });
    // router.get('/admin/register', function(req, res) {
    //     res.render('admin/register');
    // });
    router.get('/admin/dashboard', isAdmin, function(req, res) {
               //console.log(req.user);
        res.render('admin/dashboard', {user: req.user});
    });
    router.post('/register', function(req, res) {
        // passport-local-mongoose: Convenience method to register a new user instance with a given password. Checks if username is unique
        User.register(new User({
            email: req.body.email
        }), req.body.password, function(err, user) {
            if (err) {
                console.error(err);
                return;
            }
            // log the user in after it is created
            passport.authenticate('local')(req, res, function() {
                console.log('authenticated by passport');
                res.redirect('/admin/dashboard');
            });
        });
    });
    router.post('/login', passport.authenticate('local'), function(req, res) {
        res.redirect('/admin/dashboard');
    });
     ///sitemap
    router.get('/sitemap.xml', function(req, res) {
        Post.find({}, 'paramal', function(err, mongourls)
        {
            //console.log(mongourls);
            var pageUrls=[];
            if (mongourls) {
                for (var i = 0; i < 2; i++) {
                    var obj = {url: "/" + mongourls[i].paramal, changefreq: 'daily', priority: 0.9};
                    
                    pageUrls.push(obj);
                }
            }
            var sitemap = sm.createSitemap({
                hostname: 'https://readyourlessons.com',
                cacheTime: 600000, // 600 sec - cache purge period 
                urls: pageUrls
            });
            sitemap.toXML(function(err, xml) {
                if (err) {
                    return res.status(500).end();
                }
                res.header('Content-Type', 'application/xml');
                res.send(xml);
            });
        });
    });
    
     router.get('/sitemap1.xml', function(req, res) {
        Post.find({}, 'paramal', function(err, mongourls)
        {
            //console.log(mongourls);
            var pageUrls=[];
            if (mongourls) {
                for (var i = 0; i < mongourls.length; i++) {
                    var obj = {url: "/" + mongourls[i].paramal, changefreq: 'daily', priority: 0.9};
                    
                    pageUrls.push(obj);
                }
            }
            var sitemap = sm.createSitemap({
                hostname: 'https://readyourlessons.com',
                cacheTime: 600000, // 600 sec - cache purge period 
                urls: pageUrls
            });
            sitemap.toXML(function(err, xml) {
                if (err) {
                    return res.status(500).end();
                }
                res.header('Content-Type', 'application/xml');
                res.send(xml);
            });
        });
    });
    
      router.get('/about',function(req, res) {
        res.render('home/about');
    });
    
     router.get('/contact',function(req, res) {
        res.render('home/contact');
    });
    

      router.get('/blog',function(req, res) {
        res.render('home/blog')
     });
     router.get('/clients',function(req, res) {
         Client.find({},function(err,posts){
             if(err) { return res.send(err)}
             console.log('fghhgffgh')
            // console.log(posts)
             res.render('home/clients',{clients:posts});
         })
        // res.render('home/clients');
    });
    
     router.get('/careers',function(req, res) {
        res.render('home/careers');
    });
    
    router.get('/howwework',function(req, res) {
        res.render('home/howwework');
    });
    
     router.get('/clients',function(req, res) {
        res.render('home/clients');
    });
    
    router.get('/testimonials',function(req, res) {
        res.render('home/testimonials');
    });
    
     router.get('/visionandmission',function(req, res) {
        res.render('home/visionandmission');
    });
    
      router.get('/whyfutureworktechnologies',function(req, res) {
        res.render('home/whyfutureworktechnologies');
    });
    
    router.get('/privacypolicy',function(req, res) {
        res.render('home/privacypolicy');
    });
    router.get('/termandconditions',function(req, res) {
        res.render('home/termandconditions');
    });
    router.get('/faq',function(req, res) {
        res.render('home/faq');
    });
        
      router.get('/admin/dashboard', isAdmin, function(req, res) {
        res.render('admin/dashboard', {user: req.user});
    });
    router.get('/404', function(req, res) {
        res.render('404');
    });

    app.use(function(req, res, next) {
        res.status(404);
        res.render('404');
        return;
    });
};
function isAdmin(req, res, next) {
	 console.log("Admin=");  console.log(req.user.email);
     console.log(req.user.id);
    if (req.isAuthenticated() /*&& req.user.email === 'admin@admin.com'*/) {
        console.log('cool you are an admin, carry on your way');
        next();
    } else {
        console.log('You are not an admin');
        res.redirect('/admin');
    }
}
