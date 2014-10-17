'use strict';

var Yocaribou = Ember.Application.create();

// expose Yocaribou globally
window.Yocaribou = Yocaribou;

Yocaribou.Router.map(function() {
	this.route('cheeseburger', {path:'/cheeseburger'})
});

Yocaribou.CheeseburgerRoute = Ember.Route.extend({
	model: function(){
		return {stuff: 'this is a cheeseburger'}
	}
});

Yocaribou.CheeseburgerController = Ember.ObjectController.extend({
	moreStuff: 'more cheeseburgers',
	evenMoreStuff: function() {
		return 'the last cheeseburger in the world';
	}.property()
})







// var near = $('#target input').val();
// var data = {
// 		near: near,
// 		section: 'food',
// 		venuePhotos: '1',

// 		v: '20141002',
// 		client_id: 'THF0PIAQPEPL3UJZJGVVXKL5S1FM4P54MGZARXUFJ1ZGBENP',
// 		client_secret: 'PAY5FKCOQB4NI0CSL5XDXNL1AOA2CA2CWTACTYILINBMK4S0'
// 	};

// var url = "https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=98a80bf27f25bb1381e9bea26b6282e5&per_page=500&format=json&nojsoncallback=1";

// App.IndexRoute = Ember.Route.extend({
//   model: function() {
//     return Ember.$.ajax({
//       type: 'GET',
//       url: url,
//       dataType: 'JSON'
//     })