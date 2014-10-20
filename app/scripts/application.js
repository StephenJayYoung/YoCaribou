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
		var data = {
			near: 'Portland, OR', // TODO: how to change this to work from something on the page?
			section: 'food',
			venuePhotos: '1',

			// required stuffs
			v: '20141002',
			client_id: 'THF0PIAQPEPL3UJZJGVVXKL5S1FM4P54MGZARXUFJ1ZGBENP',
			client_secret: 'PAY5FKCOQB4NI0CSL5XDXNL1AOA2CA2CWTACTYILINBMK4S0'
		};
	  var url = "https://api.foursquare.com/v2/venues/explore";
    return Ember.$.ajax({
      type: 'GET',
      url: url,
      data: data,
      dataType: 'JSON'
    })
    .then(function(data) {
     // var url = data.response.groups[0].items[0].venue.photos.groups[0].items[0].prefix;
     //  console.log(data);
     //  console.log(data.response);
     //  console.log(data.response.groups[0]);
     //  console.log(data.response.groups[0].items);
	    // console.log(data.response.groups[0].items[0]);
	   	// console.log(data.response.groups[0].items[0].venue);
	   	// console.log(data.response.groups[0].items[0].venue.photos);
	   	// console.log(data.response.groups[0].items[0].venue.photos.groups[0]);
	   	// console.log(data.response.groups[0].items[0].venue.photos.groups[0].items[0].prefix;
	   	
	   	var photoInfo = data.response.groups[0].items[0].venue.photos.groups[0].items[0];
	  	var prefix = photoInfo.prefix;
	  	var suffix = photoInfo.suffix;
	  	var size = "300x300";
	  	var url = prefix + size + suffix;


      //console log the path, get a url, make sure that url works, set that path equal to url, it will show up in browser
      // TODO: this should be something from data
      // var url = 'https://www.google.com/images/srpr/logo11w.png';
      return {photoURL: url};
    });
	}
});




