/*
 * jGoogleStaticMaps (for JQuery)
 * Version: 0.1.3
 * @requires JQuery v1.2 or later
 * @homepage https://github.com/guivinicius/jGoogleStaticMaps
 *
 * Licensed under the MIT:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright Forever Guilherme Moreira
 */
(function( $ ){	
  $.fn.googleStaticMap = function( options ) {
	
	// Default Google API URL
	var API_URL = "http://maps.google.com/maps/api/staticmap?";
	
	// Cleaning the element.
  	this.empty();

	// Default settings.
	var settings = {
		center    : '',
		zoom      : '14',
		size      : '500x500',
		format    : 'JPEG',
		maptype   : 'roadmap',
		language  : 'en',
		markers   : '',
		sensor    : false
	};
	
	// Getting all the possible values
	var lat 	 = this.attr("lat");
	var lng 	 = this.attr("lng");
	var location = this.attr("location");
	var width    = this.width();
	var height	 = this.height();
	
	if ( options ) {
		var center  = options.center;
		var markers = options.markers;
		var size	= options.size;
	};
	
	// Verifying if has at least one of the localization parameters.
	if ( (lat && lng) || (location) || (center) || (markers) ){
		
		// Merging options into settings.
		if ( options ) {
			$.extend( settings, options );
		}
		// Define the map size from the element width and height.
		if ( !size ) {
			if ( (width != 0) && (height != 0) ){ settings.size = width+"x"+height };	
		}		
		
		if ( (settings.center == "") && (settings.markers == "") ) {
			if ( (lat && lng) ) {
				settings.markers = lat+","+lng;
				settings.center  = lat+","+lng;
			} else if ( location ) {
				settings.markers = location;
				settings.center  = location;
			}	
		}
		
		settings.markers = settings.markers.replace(" ", "+");
		settings.center = settings.center.replace(" ", "+");	
		
	} else {
		return this.html("Hey I need parameters!!! Read the documentation.");
	}
	
	this.html(function() {        	
		
		var arr = new Array();
		var cont = 0
		$.each(settings, function(k, v) {
			arr[cont] = (k+"="+v);
			cont++;
		});
		var string = arr.join('&');
	
		var URL = API_URL + string;
		var image_tag = "<img src=\""+URL+"\">";
	
		return image_tag;
				
	});
	
  };
})( jQuery );