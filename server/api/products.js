


var Product = require('../models/products');
var Category = require('../models/categories');


var copyFile = require('quickly-copy-file');
var uuid = require('node-uuid'),
    multiparty = require('multiparty'),
    fs = require('fs');

// Posts API
module.exports = function(apiRouter){
	// get all posts
	apiRouter.get('/products', function(req, res){
		Product.find({}, function(err, posts){
			if (err) res.send(err);
			res.json(posts);
		});
	});


	// add a post
	apiRouter.post('/products', function(req, res){
		var post = new Product();
		post.title = req.body.title;
 //console.log(req);console.log("dadsf");
		post.price = req.body.price;
		post.attr = req.body.attr;
		post.discount = req.body.discount;
		post.condition = req.body.condition; 
       
		post.cat_id = req.body.cat_id;
    post.subcat = req.body.subcat;
		post.description = req.body.description;
 		post.save(function(err, post){
			console.log("image error="); console.log(post);
      if(err) res.send(err);
				res.json(post.id);
			})
	});

	// get a single post
	apiRouter.get('/posts/:id', function(req, res){
		Product.findById(req.params.id, function(err, post){
			if (err) res.send(err);

			res.json(post);
		});
	});
        // get a single post
	apiRouter.post('/parmalprod', function(req, res){
        console.log(req.body.path)
		Product.findOne({'_id':req.body.path}, function(err, post){
			if (err) return res.send(err);
console.log(post)
			res.json(post);
		});
	});
//        

	// update a post
	apiRouter.post('/get_prod', function(req, res){
                //console.log(req.body);
				Product.findById({'_id':req.body.id}, function(err, post){
			if(err) res.send(err);
			post.title = req.body.title;
		
		post.price = req.body.price;
		post.condition = req.body.condition;
		post.attr = req.body.attr;
		post.discount = req.body.discount;
		
                post.description = req.body.description;
                post.simage = req.body.simage;
                post.himage = req.body.himage;
                post.paramal = req.body.paramal;
                post.metadescription = req.body.metadescription;
                post.metakeywords = req.body.metakeywords;
			post.save(function(err){
				if(err) res.send(err);
				//res.json({ message: 'Post updated!' });
                        res.json(post._id);

			})
		});
	});
	// delete a post
	apiRouter.post('/deleteproduct', function(req, res){
		Product.remove({
			_id: req.body.id
		}, function(err, post){
			if(err) res.send(err);
			res.json({ message: 'Post deleted!' });
		})
	});


//my get function

apiRouter.get('/get_cat', function(req, res){
	Category.find({}, function(err, post){
		if (err) res.send(err);

		res.json(post);
	});

});


  apiRouter.post('/upload_product_image', function(req, res) {
    
    var form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {
    console.log(fields);

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
          if (error)
          {
            console.log("error in file uploading..");
            console.error(error);
          }
                Product.findById({'_id': fields._id}, function(err, product) {
                    if (err)
                        res.send(err);
                    //product.product_image = imageName;
                    
                    
                    
                    
                    //*********************my code for array insert ********************************
                        product.product_image.push(imageName);
                    console.log("u r in  copy");
             //           console.log(product.product_image[0]);     
                //    product.product_image.insertOne(imageName,function(err,res){
			//        if(err) throw err;
                    //      consoole.log("inserted in to array");		
               
			//});   
               //*****************************************  
                    
                    product.save(function(err) {
                        if (err)
                            res.send(err);

                        if(fields.action == 'update')
                        res.json("You have successfully updated the product");
                        else                        
                        res.json("You have successfully added the product");
                    })
                    
                });
          // return destPath;
          console.log('File was copied!');
        });

console.log("product id : ");
console.log(fields._id);


        Product.findById({'_id': fields._id}, function(err, product) {
            if (err)
                res.send(err);

            console.log(imageName);
            console.log( product.product_image.length);
           
            //product.product_image = imageName;


        //***********code for array***********
           product.product_image.push(imageName); 
           //product.arr_image.insertOne(imageName,function(err){if(err) res.send(err);});
            
     //  *******************************


            product.save(function(err) {
                if (err)
                    res.send(err);

           
                console.log("yes image saved..");
                 // alert("yes updated !!!");   
                if(fields.action == 'update')
                res.send("You have successfully updated the product");
                else
                res.send("You have successfully added the product");
            })          
        });
        console.log("outside yes image saved..");

    });
  });

};



