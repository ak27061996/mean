var Type = require('../models/types');

// Posts API
module.exports = function(apiRouter){
	// get all posts
	apiRouter.get('/types', function(req, res){
		Type.find({}, function(err, posts){
			if (err) res.send(err);
			res.json(posts);
		});
	});


	// add a post
	apiRouter.post('/types', function(req, res){
		//console.log(req);
		var post = new Type();
		post.user_type = req.body.user_type;
		post.description = req.body.description;
 		post.save(function(err, post){

			if(err) res.send(err);
				res.json(post);
			})
	});

	// get a single post
	apiRouter.get('/posts/:id', function(req, res){
		Type.findById(req.params.id, function(err, post){
			if (err) res.send(err);

			res.json(post);
		});
	});
        // get a single post
	apiRouter.post('/parmalt', function(req, res){
        console.log(req.body.path); console.log("==parmal_t");
		Type.findOne({'_id':req.body.path}, function(err, post){
			if (err) return res.send(err);
                console.log(post);
			res.json(post);
		});
	});
//        

	// update a post
	apiRouter.post('/get_t', function(req, res){
                console.log(req.body.id);console.log("=body.id");
	         Type.findById({'_id':req.body.id}, function(err, post){
			    if(err) res.send(err);
		        post.user_type = req.body.user_type;
                post.description = req.body.description;
               // post.simage = req.body.simage;
                //post.himage = req.body.himage;
                //post.paramal = req.body.paramal;
                //post.metadescription = req.body.metadescription;
               // post.metakeywords = req.body.metakeywords;
			    post.save(function(err){
				if(err) res.send(err);
				res.json({ message: 'Post updated!' });
			});
		});
	});
	// delete a post
	apiRouter.post('/deletetype', function(req, res){
		Type.remove({
			_id: req.body.id
		}, function(err, post){
			if(err) res.send(err);
			res.json({ message: 'Post deleted!' });
		})
	});
}








