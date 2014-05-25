var skrollr = skrollr.init();

$(document).ready(function(){


	// At least 900px on body.
	var minwidth = 900;

	// body onload
	if ($(window).width() <= minwidth) {
		$('body').addClass('tooshort');
	} else {
		$('body').removeClass('tooshort');
	}

	// Do the same on window resize.
	$(window).resize(function(){
		if ($(window).width() <= minwidth) {
			$('body').addClass('tooshort');
		} else {
			$('body').removeClass('tooshort');
		}
	});
});
