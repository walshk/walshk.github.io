var didScroll;
var lastScrollTop = 0;
var delta = 5;

var position = $(window).scrollTop(); // should start at 0

$(window).scroll(function(event) {
	didScroll = true;
});


setInterval(function() {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 250);

function hasScrolled() {

	//console.log($('.container1').outerHeight());


	var scroll = $(window).scrollTop();	
	//console.log(scroll);

	if(scroll > 800){
		//console.log(scroll);

		if (scroll > position) {
			// scrolled downwards
			$('.top-bar')
				.removeClass('nav-show')
				.addClass('nav-hide');

	  	} 
	  	else {
	    	// scrolled upwards
	    	$('.top-bar')
	    		.removeClass('nav-hide')
	    		.addClass('nav-show');

	  	}
	  	
	  	position = scroll;
	}

}