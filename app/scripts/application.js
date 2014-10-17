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
		var url = "https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=98a80bf27f25bb1381e9bea26b6282e5&per_page=500&format=json&nojsoncallback=1";
    return Ember.$.ajax({
      type: 'GET',
      url: url,
      dataType: 'JSON'
    })
    .then(function(data) {
      console.log(data);
      var photoArray = data.photos.photo
      var arrayOfPhotoURLs = [];
      photoArray.forEach(function(photo) {
        var photoURL = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
        arrayOfPhotoURLs.push({ photoURL: photoURL });
      });
      return arrayOfPhotoURLs;
    });
	}
});




