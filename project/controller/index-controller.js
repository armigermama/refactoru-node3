
/*
 * GET home page.
 */

var userModel = require('../models/index-model.js');

exports.index = function(req, res){
	console.log('userModel.findAll', userModel.findAll());
	res.render('index', { title: 'Buck Wild', users: userModel.findAll() });
};