// Packages
var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();


// Setup
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

// Routes
app.get('/', function(req, res) {
	res.render('pages/index');
});

// Starting Server
app.listen(5000);
console.log('App started!');