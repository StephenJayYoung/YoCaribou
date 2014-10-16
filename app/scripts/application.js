'use strict';

var Yocaribou = Ember.Application.create();

// expose Yocaribou globally
window.Yocaribou = Yocaribou;

var data = {
		near: near,
		section: 'food',
		venuePhotos: '1',

		v: '20141002',
		client_id: 'THF0PIAQPEPL3UJZJGVVXKL5S1FM4P54MGZARXUFJ1ZGBENP',
		client_secret: 'PAY5FKCOQB4NI0CSL5XDXNL1AOA2CA2CWTACTYILINBMK4S0'
	};

	$.ajax({
		type: "GET",
	  url: "https://api.foursquare.com/v2/venues/explore",
	  data: data,
	  dataType: "json",
//use something different than success (which will work better w/ ember)