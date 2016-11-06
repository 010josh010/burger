/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	burger.all(function (data) {
		var hbsObject = { burger: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function (req, res) {
	burger.create(['name'], [req.body.name], function () {
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function (req, res) { 
	let id = req.params.id; 
	let condition = 'id = ' + id; 
	let value = req.body.eaten; 
	
	console.log('condition', condition);

	burger.update({ eaten: value }, condition, function () {
		res.redirect('/burgers');
	});
});

router.delete('/burgers/delete/:id?' , (req, res) => {
	
	let id = req.params.id; 

	let condition = 'id = ' + id; 

	console.log('condiition' ,condition); 

	burger.delete(id , condition, function() {
		res.redirect('/burgers'); 
	}); 


})

module.exports = router;
