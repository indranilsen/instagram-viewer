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
		ig.user(medias[0].user.id, function(error, userInfo, rem, lim) {
			res.render('pages/index', {
				elements: medias, 
				name: userInfo.full_name,
				username: userInfo.username,
				bio: userInfo.bio,
				website: userInfo.website,
				pic: userInfo.profile_picture,
				posts: userInfo.counts.media,
				followers: userInfo.counts.followed_by,
				following: userInfo.counts.follows,
				id: userInfo.id
			}); 
		});
		// res.render('pages/index', {
		// 	elements: medias, 
		// 	name: userInfo.full_name,
		// 	username: userInfo.username,
		// 	bio: userInfo.bio,
		// 	website: userInfo.website,
		// 	pic: userInfo.profile_picture,
		// 	posts: userInfo.counts.media,
		// 	followers: userInfo.counts.followed_by,
		// 	following: userInfo.counts.follows,
		// 	id: userInfo.id;
		// });
	});
});

// Starting Server
app.listen(5000);
console.log('App started! ... Listening on port 5000');