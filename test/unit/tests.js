url = "http://maps.google.com/maps/api/staticmap?";

module('Div #map without attributes and styles.', {
  setup: function() {
	latlng = "-23.507,-47.455";
	address = "Sorocaba";
  }
});
	test('Passing all Parameters', function() {
		$("#map").googleStaticMap({
			'center'    : 'Sorocaba',
			'zoom'      : '14',
			'size'      : '500x500',
			'format'    : 'JPEG',
			'maptype'   : 'roadmap',
			'language'  : 'en',
			'markers'   : 'Sorocaba',
			'sensor'    : false
		});
		equals($("#map img").attr('src'), url + "center=Sorocaba&zoom=14&size=500x500&format=JPEG&maptype=roadmap&language=en&markers=Sorocaba&sensor=false");
	});
	test('Passing no Parameters', function() {
		$("#map").googleStaticMap();
		equals($("#map").html(), "Hey I need a location!!! Read the documentation.", "it should send a polite msg to the user.");
	});

	test('Passing only the location parameter as Lat and Lng', function() {
		$("#map").googleStaticMap({'center':latlng, 'markers':latlng});
		equals($("#map img").attr('src'), url + "center=-23.507,-47.455&zoom=14&size=500x500&format=JPEG&maptype=roadmap&language=en&markers=-23.507,-47.455&sensor=false");
	});
	
	test('Passing only the location parameter as address', function() {
		$("#map").googleStaticMap({'center':address, 'markers':address});
		equals($("#map img").attr('src'), url + "center=Sorocaba&zoom=14&size=500x500&format=JPEG&maptype=roadmap&language=en&markers=Sorocaba&sensor=false");
	});
	
	test('Passing location and size', function() {
		$("#map").googleStaticMap({'center':'Dublin', 'markers':'Trinity College,Dublin', 'size' : '700x700'});
		equals($("#map img").attr('src'), url+"center=Dublin&zoom=14&size=700x700&format=JPEG&maptype=roadmap&language=en&markers=Trinity+College,Dublin&sensor=false", "it should center in Dublin and put a Marker on Trinity College.");	  
	});
	

module('Div #map-with-style but no attributes.', {
	setup: function() {
		$("#map-with-style").googleStaticMap();
	}
});

module('Div #map-with-latlnt but no location attribute.', {
	setup: function() {
		$("#map-with-latlnt").googleStaticMap();
	}
});

module('Div #map-with-location but no lat and lng attributes.', {
	setup: function() {
		$("#map-with-location").googleStaticMap();
	}
});

module('Div #map-with-both location and lat and lng attributes.', {
	setup: function() {
		$("#map-with-both").googleStaticMap();
	}
});
