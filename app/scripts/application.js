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
      console.log(data);

      // TODO: that return statement is bogus!
      return { imageURL: 'some URL' };
      // var photoArray = data.photos.photo
      // var arrayOfPhotoURLs = [];
      // _.forEach(photoArray, function(photo) {
      //   var photoURL = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
      //   arrayOfPhotoURLs.push({ photoURL: photoURL });
      // });
      // return arrayOfPhotoURLs;
    });
        //use .then (promise based thing)
	}
});




