(function( $ ){
  $.fn.googleStaticMap = function( options ) {
  	
	// Default Google API URL
	var API_URL = "http://maps.google.com/maps/api/staticmap?";

	// Default settings.
    var settings = {
		'center'    : '-23.507,-47.455',
		'zoom'      : '14',
		'size'      : '500x400',
		'format'    : 'JPEG',
		'maptype'   : 'roadmap',
		'language'  : 'en',
		'markers'   : '-23.507,-47.455',
		// 'path'      : 'top', TODO
		// 'visible'   : 'top', TODO
		// 'style'     : 'top', TODO
		'sensor'    : false
	};
	
	this.html(function() {        
		
	    if ( options ) { 
	      $.extend( settings, options );
	    }
	
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