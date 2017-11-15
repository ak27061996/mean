var path = require('path'),
	rootPath = path.normalize(__dirname + '/../../');
	
module.exports = {
	development: {
		rootPath: rootPath,
		db: 'mongodb://anil:ani3214@ds113835.mlab.com:13835/anil',
		port: process.env.PORT || 3000
	},
	production: {
		rootPath: rootPath,
		db: 'mongodb://testfwrk:testfwrk@ds147842.mlab.com:47842/fwrk' || 'you can add a mongolab uri here ($ heroku config | grep MONGOLAB_URI)',
		port: process.env.PORT || 80
	}
};