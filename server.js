// Packages
var express = require('express');
var app = express();
var dotenv = require('dotenv').config({silent: true});
var ig = require('instagram-node').instagram();

// Setup
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

ig.use({
	access_token: process.env.TOKEN
});

// Routes
app.get('/', function(req, res) {
	ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {
		res.render('pages/index', {elements: medias});
	});
});

// Starting Server
app.listen(5000);
console.log('App started!');