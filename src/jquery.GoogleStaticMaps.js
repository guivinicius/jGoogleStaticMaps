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
	
	// Cleaning the element.
  	this.empty();
	
	// Default Google API URL
	var API_URL = "http://maps.google.com/maps/api/staticmap?";
	
	// Default settings.
	var settings = {
		center    : '',
		zoom      : '14',
		size      : '500x500',
		format    : 'JPEG',
		maptype   : 'roadmap',
		language  : 'en',
		markers   : '',
		// 'path'      : 'top', TODO
		// 'visible'   : 'top', TODO
		// 'style'     : 'top', TODO
		sensor    : false
	};
	
	if ( options ) { 
		$.extend( settings, options );
		settings.markers = settings.markers.replace(" ", "+");
		settings.center = settings.center.replace(" ", "+"); 
	} else if ( (this.attr('location') != null) || ((this.attr('lat') != null) && (this.attr('lng') != null)) ) {
		if  (this.attr('location') != "") {
			location = this.attr('location');
			location = location.replace(" ","+");				
		} else {
			location = this.attr('lat')+","+this.attr('lng');		
		}		
	} else {
		return this.html("Hey I need a location!!! Read the documentation.");
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