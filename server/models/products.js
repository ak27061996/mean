var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
	title: { type: String, required: '{PATH} is required!'},
      
      product_image: [String],

      price: { type: Number, required: '{PATH} is required!'},
      condition: { type: String, required: '{PATH} is required!'},
      attr: { type: String, required: '{PATH} is required!'},
      discount: { type: String, required: '{PATH} is required!'},
	
      cat_id: { type: mongoose.Schema.Types.ObjectId, required: '{PATH} is required!'},
	description: { type: String, required: '{PATH} is required!'},
      //product_image:{type: String},    
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

postSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  next();
});

module.exports = mongoose.model('Product', postSchema);
