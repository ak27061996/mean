var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
	title: { type: String, required: '{PATH} is required!'},
	design: { type: String, required: '{PATH} is required!'},
	description: { type: String, required: '{PATH} is required!'},
   //   product_image:{type: String},    
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

postSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  next();
});

module.exports = mongoose.model('Page', postSchema);
