'use strict';

var Yocaribou = Ember.Application.create();

// expose Yocaribou globally
window.Yocaribou = Yocaribou;

//router and controller for Cheeseburger file
Yocaribou.Router.map(function() {
	this.route('cheeseburger', {path:'/cheeseburger'})
	this.route('API', {path:'/API'})
});

Yocaribou.CheeseburgerRoute = Ember.Route.extend({
	model: function(){
		return {stuff: 'Can I haz a cheeseburger?'}
	}
});

Yocaribou.CheeseburgerController = Ember.ObjectController.extend({
	cheeseburgerPicture: 'http://sonicmenu.s3.amazonaws.com/2651348868959.13122.png'
});


//router for Foursquare API

Yocaribou.APIRoute = Ember.Route.extend({
	model: function(){
		// use a different url, manipulate the data
	  var url: "https://api.foursquare.com/v2/venues/explore",
    return Ember.$.ajax({
      type: 'GET',
      url: url,
      dataType: 'JSON'
    })





