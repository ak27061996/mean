var Category = require('../models/categories');

// Posts API
module.exports = function(apiRouter){
	// get all posts
	apiRouter.get('/categories', function(req, res){
		Category.find({}, function(err, posts){
			if (err) res.send(err);
			res.json(posts);
		});
	});


	// add a post
	apiRouter.post('/categories', function(req, res){
		var post = new Category();
		console.log(req);console.log("=req");
		post.title = req.body.title;
		post.slug = req.body.slug;
		post.description = req.body.description;
//********************************************************************
		for(var i=0;i<req.body.subcat.length;i++){
			post.subcat.push(req.body.subcat[i]);
		}
		//post.subcat=req.body.subcat;
        //console.log(post.subcat);



//****************************************************************



 		post.save(function(err, post){
			if(err) res.send(err);
				res.json(post);
			})
	});

	// get a single post
	apiRouter.get('/posts/:id', function(req, res){
		Post.findById(req.params.id, function(err, post){
			if (err) res.send(err);

			res.json(post);
		});
	});
        // get a single post
	apiRouter.post('/parmal_cat', function(req, res){
        console.log(req.body.path)
		Category.findOne({'_id':req.body.path}, function(err, post){
			if (err) return res.send(err);
console.log(post)
			res.json(post);
		});
	});
//        

	// update a post
	apiRouter.post('/get_Cat', function(req, res){
                //console.log(req.body);
		Category.findById({'_id':req.body.id}, function(err, post){
			if(err) res.send(err);
		post.title = req.body.title;
                post.description = req.body.description;
                post.simage = req.body.simage;
                post.himage = req.body.himage;
                post.paramal = req.body.paramal;
                post.metadescription = req.body.metadescription;
                post.metakeywords = req.body.metakeywords;
			post.save(function(err){
				if(err) res.send(err);
				res.json({ message: 'Post updated!' });
			})
		});
	});
	// delete a post
	apiRouter.post('/deletecategory', function(req, res){
		Category.remove({
			_id: req.body.id
		}, function(err, post){
			if(err) res.send(err);
			res.json({ message: 'Post deleted!' });
		})
	});
};








