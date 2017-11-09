var mongoose = require('mongoose'),
    passportLocalMongoose = require('passport-local-mongoose');


 var ChatSchema = new mongoose.Schema({
  //room: String,
  nickname: String,
  message: String,
  updated_at: { type: Date, default: Date.now },
});
//module.exports = mongoose.model('Chat', ChatSchema);   

//schema for User

var UserSchema = new mongoose.Schema({
  //room: String,
  ID: String,
  message: [ChatSchema],
//  updated_at: { type: Date, default: Date.now },
});

var User = new mongoose.Schema({
	email: {
		type: String, 
		required: '{PATH} is required!'
	},

    //message:[ChatSchema],
     msg_against:[{ID:String,message:[ChatSchema]}],
	firstname:{type:String, required:'{PATH} is required!'},
	lastname:{type:String, required:'{PATH} is required!'},
//	password:{type:String, required:'{PATH} is required!'},
	dob:{type:String,required:'{PATH} is required!'},
	role:{type:String,required:'{PATH} is required!'},
	status:{type:Boolean,required:'{PATH} is required!'},
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now } 

});

User.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = mongoose.model('User', User);
//module.exports = mongoose.model('Chat', ChatSchema);
