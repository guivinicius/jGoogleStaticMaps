// Some global vars
url = "http://maps.google.com/maps/api/staticmap?";
msg = "Hey I need parameters!!! Read the documentation.";

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
		params = "center=Sorocaba&zoom=14&size=500x500&format=JPEG&maptype=roadmap&language=en&markers=Sorocaba&sensor=false";
		equals($("#map img").attr('src'), url + params);
	});
	
	test('Passing no Parameters', function() {
		$("#map").googleStaticMap();
		equals($("#map").html(), msg, "it should send a polite msg to the user.");
	});
	
	test('Passing only size parameter', function() {
		$("#map").googleStaticMap({size:'300x300'});
		equals($("#map").html(), msg, "it should send a polite msg to the user.");
	});

	test('Passing only the location parameter as Lat and Lng', function() {
		$("#map").googleStaticMap({'center':latlng, 'markers':latlng});
		params = "center=-23.507,-47.455&zoom=14&size=500x500&format=JPEG&maptype=roadmap&language=en&markers=-23.507,-47.455&sensor=false";
		equals($("#map img").attr('src'), url + params);
	});
	
	test('Passing only the location parameter as address', function() {
		$("#map").googleStaticMap({'center':address, 'markers':address});
		params = "center=Sorocaba&zoom=14&size=500x500&format=JPEG&maptype=roadmap&language=en&markers=Sorocaba&sensor=false";
		equals($("#map img").attr('src'), url + params);
	});
	
	test('Passing location and size', function() {
		$("#map").googleStaticMap({'center':'Dublin', 'markers':'Trinity College,Dublin', 'size' : '700x700'});
		params = "center=Dublin&zoom=14&size=700x700&format=JPEG&maptype=roadmap&language=en&markers=Trinity+College,Dublin&sensor=false";
		equals($("#map img").attr('src'), url + params, "it should center in Dublin and put a Marker on Trinity College.");	  
	});	

module('Div #map-with-style', {
	setup: function() {
		latlng = "-23.507,-47.455";
		address = "Sorocaba";
	}
});

	test('Passing all Parameters', function() {
		$("#map-with-style").googleStaticMap({
			'center'    : 'Sorocaba',
			'zoom'      : '14',
			'size'      : '500x500',
			'format'    : 'JPEG',
			'maptype'   : 'roadmap',
			'language'  : 'en',
			'markers'   : 'Sorocaba',
			'sensor'    : false
		});
		params = "center=Sorocaba&zoom=14&size=500x500&format=JPEG&maptype=roadmap&language=en&markers=Sorocaba&sensor=false";
		equals($("#map-with-style img").attr('src'), url + params);
	});

	test('Passing no Parameters', function() {
		$("#map-with-style").googleStaticMap();
		equals($("#map-with-style").html(), msg, "it should send a polite msg to the user.");
	});
	
	test('Passing only size parameter', function() {
		$("#map-with-style").googleStaticMap({size:'345x300'});
		params = "center="+latlng+"&zoom=14&size=345x300&format=JPEG&maptype=roadmap&language=en&markers="+latlng+"&sensor=false";
		equals($("#map-with-style").html(), msg, "it should send a polite msg to the user.");
	});
	
	test('Passing only the Lat and Lng parameter to center and marker', function() {
		$("#map-with-style").googleStaticMap({'center':latlng, 'markers':latlng});
		params = "center=-23.507,-47.455&zoom=14&size=245x345&format=JPEG&maptype=roadmap&language=en&markers=-23.507,-47.455&sensor=false";
		equals($("#map-with-style img").width(), 245);
		equals($("#map-with-style img").height(), 345);
		equals($("#map-with-style img").attr('src'), url + params);
	});
	
	test('Passing only the location parameter as address', function() {
		$("#map-with-style").googleStaticMap({'center':address, 'markers':address});
		params = "center=Sorocaba&zoom=14&size=245x345&format=JPEG&maptype=roadmap&language=en&markers=Sorocaba&sensor=false";
		equals($("#map-with-style img").width(), 245, 'it should have width == 245px');
		equals($("#map-with-style img").height(), 345, 'it should have height == 345px');
		equals($("#map-with-style img").attr('src'), url + params);
	});
	
	test('Passing location and size', function() {
		$("#map-with-style").googleStaticMap({'center':'Dublin', 'markers':'Trinity College,Dublin', 'size' : '700x700'});
		params = "center=Dublin&zoom=14&size=700x700&format=JPEG&maptype=roadmap&language=en&markers=Trinity+College,Dublin&sensor=false";
		equals($("#map-with-style img").width(), 640, 'it should have width == 640px');
		equals($("#map-with-style img").height(), 640, 'it should have height == 640px');
		equals($("#map-with-style img").attr('src'), url + params, "it should center in Dublin and put a Marker on Trinity College.");	  
	});

module('Div #map-with-latlng', {
	setup: function() {
		latlng = "-23.55,-46.64";
	}
});
	test('Passing all Parameters', function() {
		$("#map-with-latlng").googleStaticMap({
			'center'    : 'Sorocaba',
			'zoom'      : '14',
			'size'      : '500x500',
			'format'    : 'JPEG',
			'maptype'   : 'roadmap',
			'language'  : 'en',
			'markers'   : 'Sorocaba',
			'sensor'    : false
		});
		params = "center=Sorocaba&zoom=14&size=500x500&format=JPEG&maptype=roadmap&language=en&markers=Sorocaba&sensor=false";
		equals($("#map-with-latlng img").attr('src'), url + params);
	});
	
	test('Passing no Parameters', function() {
		$("#map-with-latlng").googleStaticMap();
		params = "center="+latlng+"&zoom=14&size=500x500&format=JPEG&maptype=roadmap&language=en&markers="+latlng+"&sensor=false";
		equals($("#map-with-latlng img").width(), 500, 'it should have width == 500px');
		equals($("#map-with-latlng img").height(), 500, 'it should have height == 500px');
		equals($("#map-with-latlng img").attr('src'), url + params, "it should center in Sao Paulo and put a marker on it.");
	});
	
	test('Passing only size parameter', function() {
		$("#map-with-latlng").googleStaticMap({size:'345x300'});
		params = "center="+latlng+"&zoom=14&size=345x300&format=JPEG&maptype=roadmap&language=en&markers="+latlng+"&sensor=false";
		equals($("#map-with-latlng img").width(), 345, 'it should have width == 345px');
		equals($("#map-with-latlng img").height(), 300, 'it should have height == 300px');
		equals($("#map-with-latlng img").attr('src'), url + params, "it should center in Sao Paulo and put a marker on it.");
	});
	
module('Div #map-with-location', {
	setup: function() {
		loc = "Boituva";
	}
});

	test('Passing all Parameters', function() {
		$("#map-with-location").googleStaticMap({
			'center'    : 'Sorocaba',
			'zoom'      : '14',
			'size'      : '500x500',
			'format'    : 'JPEG',
			'maptype'   : 'roadmap',
			'language'  : 'en',
			'markers'   : 'Sorocaba',
			'sensor'    : false
		});
		params = "center=Sorocaba&zoom=14&size=500x500&format=JPEG&maptype=roadmap&language=en&markers=Sorocaba&sensor=false";
		equals($("#map-with-location img").attr('src'), url + params);
	});

	test('Passing no Parameters', function() {
		$("#map-with-location").googleStaticMap();
		params = "center="+loc+"&zoom=14&size=500x500&format=JPEG&maptype=roadmap&language=en&markers="+loc+"&sensor=false";
		equals($("#map-with-location img").width(), 500, 'it should have width == 500px');
		equals($("#map-with-location img").height(), 500, 'it should have height == 500px');
		equals($("#map-with-location img").attr('src'), url + params, "it should center in Boituva and put a marker on it.");
	});

	test('Passing only size parameter', function() {
		$("#map-with-location").googleStaticMap({size:'345x300'});
		params = "center="+loc+"&zoom=14&size=345x300&format=JPEG&maptype=roadmap&language=en&markers="+loc+"&sensor=false";
		equals($("#map-with-location img").width(), 345, 'it should have width == 345px');
		equals($("#map-with-location img").height(), 300, 'it should have height == 300px');
		equals($("#map-with-location img").attr('src'), url + params, "it should center in Boituva and put a marker on it.");
	});

module('Div #map-with-both location and lat and lng attributes.', {
	setup: function() {
		latlng = "-22.28,-48.12";
		loc = "Brotas";
	}
});

	test('Passing all Parameters', function() {
		$("#map-with-both").googleStaticMap({
			'center'    : 'Sorocaba',
			'zoom'      : '14',
			'size'      : '500x500',
			'format'    : 'JPEG',
			'maptype'   : 'roadmap',
			'language'  : 'en',
			'markers'   : 'Sorocaba',
			'sensor'    : false
		});
		params = "center=Sorocaba&zoom=14&size=500x500&format=JPEG&maptype=roadmap&language=en&markers=Sorocaba&sensor=false";
		equals($("#map-with-both img").attr('src'), url + params);
	});

	test('Passing no Parameters', function() {
		$("#map-with-both").googleStaticMap();
		params = "center="+latlng+"&zoom=14&size=500x500&format=JPEG&maptype=roadmap&language=en&markers="+latlng+"&sensor=false";
		equals($("#map-with-both img").width(), 500, 'it should have width == 500px');
		equals($("#map-with-both img").height(), 500, 'it should have height == 500px');
		equals($("#map-with-both img").attr('src'), url + params, "it should use the lat and lng attributes.");
	});

	test('Passing only size parameter', function() {
		$("#map-with-both").googleStaticMap({size:'345x300'});
		params = "center="+latlng+"&zoom=14&size=345x300&format=JPEG&maptype=roadmap&language=en&markers="+latlng+"&sensor=false";
		equals($("#map-with-both img").width(), 345, 'it should have width == 345px');
		equals($("#map-with-both img").height(), 300, 'it should have height == 300px');
		equals($("#map-with-both img").attr('src'), url + params, "it should use the lat and lng attributes.");
	});
