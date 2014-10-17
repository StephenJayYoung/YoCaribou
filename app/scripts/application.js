'use strict';

var Yocaribou = Ember.Application.create();

// expose Yocaribou globally
window.Yocaribou = Yocaribou;

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