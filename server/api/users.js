var User = require('../models/user');

//fwork242@gmail.com:testing123



var copyFile = require('quickly-copy-file');
var uuid = require('node-uuid'),
    multiparty = require('multiparty'),
    fs = require('fs');
var nodemailer = require('nodemailer');

module.exports = function(apiRouter,passport) {

//post for email send******************************************************************************************;

   apiRouter.post('/emails', function(req, res) {

   var transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
              user: 'fwork242@gmail.com',
              pass: 'testing123'}  });
   var mailOptions = {
  from: 'fwork242@gmail.com',
  to: req.body.email,//'akchaurasiya27061996@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'};

   transporter.sendMail(mailOptions, function(error, info){
     if (error) {
       console.log(error);
       } else {
       console.log('Email sent: ' + info.response);
      } });
   });

    // get all posts
    apiRouter.get('/users', function(req, res) {
        User.find({}, function(err, users) {
            if (err)
                res.send(err);

            res.json(users);
        });
    });
    // add a post
    apiRouter.post('/users', function(req, res) {

        User.register(new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            dob: req.body.dob,
            status: req.body.status,
            role: req.body.role,
            email: req.body.email,
            //msg_against:{ID=re,m};
        }), req.body.password, function(err, user) {
            if (err) {
                console.error(err.message);
                res.send(err.message);
            } else {
                res.send("You have successfully added user");
            }

        });
    });
      apiRouter.post('/users/home', function(req, res) {

        User.register(new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            dob: req.body.dob,
            status: 0,
            role:"user",
            email: req.body.email
        }), req.body.password, function(err, user) {
            if (err) {
                console.error(err.message);
                res.send(err.message);
            } else {
                res.send("You have successfully registered!");
            }

        });
    });

   apiRouter.post('/users/login', function(req, res) {
         passport.authenticate('local')(req, res, function() {
                res.json(req.user);
              //console.log(req.user)
                   // res.send("You have successfully login");
            });
    });
    // get a single post
    apiRouter.post('/edituser', function(req, res) {
        User.findById({'_id': req.body.path}, function(err, user) {
            if (err)
                res.send(err);

            res.json(user);
        });
    });
      
    // update a post
    apiRouter.post('/editusrID', function(req, res) {
        //console.log(req.body);
        User.findById({'_id': req.body.id}, function(err, user) {
            if (err)
                res.send(err);
            user.firstname = req.body.firstname;
            user.lastname = req.body.lastname;
            user.dob = req.body.dob;
            user.role = req.body.role;
            user.status = req.body.status;
            user.save(function(err) {
                if (err)
                    res.send(err);
                res.json('User updated!');
            })

        });
    });

    // delete a user
    apiRouter.post('/deleteuser', function(req, res) {
        User.remove({
            _id: req.body.id
        }, function(err, user) {
            if (err)
                res.send(err);
            res.json({message: 'User deleted!'});
        })
    });

    //chatting for user

    apiRouter.post('/chats',function(req,res){

            User.findById({'_id': req.body.id}, function(err,user) {
             if (err)
                    res.send(err);
                var ind=-1;
                    //  user.message.push({nickname:req.body.name,message: req.body.msg});
                for(var i=0 ;i<user.msg_against.length;i++){
                    if(user.msg_against[i].ID==req.body.curr_id){
                        ind=i;break;
                    }
                }
                if(ind == -1){
                    //console.log(req.body.name + '.......'+ req.body.msg);
                user.msg_against.push({ID:req.body.curr_id,message:({nickname:req.body.name , message:req.body.msg})});
                }
               else{
                 console.log(user.msg_against[ind].message); 
                  user.msg_against[ind].message.push({nickname:req.body.name , message: req.body.msg});
                }
                //user.msg_against[req.body.index].message.push({nickname:req.body.name,message: req.body.msg});     
                //user.msg_against[req.body.index].ID=req.body.curr_id;
                //addding in second end user 
                User.findById({'_id': req.body.curr_id}, function(err,user1) {
                    if (err)
                    res.send(err);
                        var ind=-1;
                    //  user.message.push({nickname:req.body.name,message: req.body.msg});
                    for(var i=0 ;i<user1.msg_against.length;i++){
                        if(user1.msg_against[i].ID==req.body.id){
                                ind=i;
                                break;
                        }
                    }
                    if(ind == -1){
                        user1.msg_against.push({ID:req.body.id,message:({nickname:req.body.name,message:req.body.msg})});
                    }
                    else
                        user1.msg_against[ind].message.push({nickname:req.body.name,message: req.body.msg});

                    user1.save(function(err) {
                            if (err)
                            res.send(err);
                    });

                });

            

                user.save(function(err) {
                    if (err)
                    res.send(err);

                    /*User.find({}, function(err, users) {
                    if (err)
                    res.send(err);
                    res.json(users);
                    });*/

                    //res.json('sent!');
                });
            });
        });




 apiRouter.post('/upload_image', function(req, res) {
    
    var form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {
        console.log(fields);
        console.log(fields._id);
        console.log(fields.curr_id);
        var file = files.file[0];
        var contentType = file.headers['content-type'];
        var extension = file.path.substring(file.path.lastIndexOf('.'));

        var imageName = uuid.v4() + extension;
        var destPath = fields.upload_dir + imageName;

        console.log("destPath");
        console.log(destPath);


        var headers = {
        'x-amz-acl': 'public-read',
        'Content-Length': file.size,
        'Content-Type': contentType
        };
          
        copyFile(file.path, destPath, function(error) {
          if (error){
            console.log("error in file uploading..");
            console.error(error);
            }
                User.findById({'_id': fields.curr_id}, function(err, user) {
                    if (err)
                        res.send(err);
                            
                    var ind=-1;
                    for(var i=0 ;i<user.msg_against.length;i++){
                        if(user.msg_against[i].ID==fields._id){
                            ind=i;break;
                        }
                    }
                    if(ind == -1){
                    
                    user.msg_against.push({ID:fields._id,message:({nickname:fields.name , message:imageName})});
                    }
                    else{
                        console.log(user.msg_against[ind].message); 
                        user.msg_against[ind].message.push({nickname:fields.name , message: imageName});
                    }
                        //product.product_image.push(imageName) 
                    
                    user.save(function(err) {
                        if (err)
                            res.send(err);

                        if(fields.action == 'update')
                        res.json("You have successfully send image");
                        else                        
                        res.json("You have successfully added image");
                    });
                    
                });


                User.findById({'_id': fields._id}, function(err, user1) {
                    if (err)
                        res.send(err);
                    
                    var ind=-1;
                    for(var i=0 ;i<user1.msg_against.length;i++){
                        if(user1.msg_against[i].ID==fields.curr_id){
                            ind=i;break;
                        }
                    }
                 if(ind == -1){
                    //console.log(req.body.name + '.......'+ req.body.msg);
                    user1.msg_against.push({ID:fields.curr_id,message:({nickname:fields.name , message:imageName})});
                    }
                    else{
                        console.log(user1.msg_against[ind].message); 
                        user1.msg_against[ind].message.push({nickname:fields.name , message: imageName});
                    }
                        //product.product_image.push(imageName) 
                    
                    user1.save(function(err) {
                        if (err)
                            res.send(err);

                        if(fields.action == 'update')
                        res.json("You have successfully send image");
                        else                        
                        res.json("You have successfully added image");
                    });
                    // return destPath;
                     console.log('File was copied!');
                });
        });

            console.log("fields : ");
            console.log(fields._id);


         User.findById({'_id': fields.curr_id}, function(err, user) {
               if (err)
                res.send(err);    
                var ind=-1;
                console.log(user);
                for(var i=0 ;i<user.msg_against.length;i++){
                    if(user.msg_against[i].ID==fields._id){
                        ind=i;break;
                    }}
                
                if(ind == -1){
                 user.msg_against.push({ID:fields._id,message:({nickname:fields.name , message:imageName})});
                }

                else{
                 console.log(user.msg_against[ind].message); 
                  user.msg_against[ind].message.push({nickname:fields.name , message: imageName});
                } 
                    
                user.save(function(err) {
                    if (err)
                        res.send(err);
                });
                    
        });


        User.findById({'_id': fields._id}, function(err, user1) {
                    if (err)
                        res.send(err);
                    
                    
                    //*********************my code for array insert ********************************
                       var ind=-1;
                    //  user.message.push({nickname:req.body.name,message: req.body.msg});
                    for(var i=0 ;i<user1.msg_against.length;i++){
                        if(user1.msg_against[i].ID==fields.curr_id){
                            ind=i;break;
                        }
                    }
                    if(ind == -1){
                        user1.msg_against.push({ID:fields._id,message:({nickname:fields.name , message:imageName})});
                    }
                    else{
                        console.log(user1.msg_against[ind].message); 
                        user1.msg_against[ind].message.push({nickname:fields.name , message: imageName});
                    }
                        //product.product_image.push(imageName) 
                    
                    user1.save(function(err) {
                        if (err)
                            res.send(err);

                        if(fields.action == 'update')
                        res.json("You have successfully send image");
                        else                        
                        res.json("You have successfully added image");
                    });
                    // return destPath;
                    console.log('File was copied!');
         });
                 console.log("outside yes image saved..");

});
});

};