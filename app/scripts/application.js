'use strict';

var Yocaribou = Ember.Application.create();

// expose Yocaribou globally
window.Yocaribou = Yocaribou;

//router and controller for Cheeseburger file
Yocaribou.Router.map(function() {
	this.route('cheeseburger', {path:'/cheeseburger'})
});

Yocaribou.CheeseburgerRoute = Ember.Route.extend({
	model: function(){
		return {stuff: 'Can I haz a cheeseburger?'}
	}
});

Yocaribou.CheeseburgerController = Ember.ObjectController.extend({
	cheeseburgerPicture: 'http://sonicmenu.s3.amazonaws.com/2651348868959.13122.png'
});


//router and controller for Foursquare API
Yocaribou.Router.map(function() {
	this.route('API', {path:'/API'})
});

Yocaribou.APIRoute = Ember.Route.extend({
	model: function(){
		return {stuffs: 'Does this show the FSquare API?'}
	}
});

Yocaribou.APIController = Ember.ObjectController.extend({
//enter the ajax API stuff here
});



