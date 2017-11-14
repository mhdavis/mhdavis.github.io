(function($){
  $(function(){

  	//smoothly transition between sections in a page
  	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: target.offset().top
	            }, 1000);
	            return false;
	        }
	    }
	});

  	//Sticky Navigation js
	var navOffset = $("nav").offset().top

	//placeholder in order to maintain navbar width
	$('nav').wrap('<div class="nav-placeholder"></div>');
	$('.nav-placeholder').height($('nav').outerHeight());

	$(window).scroll(function () {
		var scrollPos = $(window).scrollTop();
		if (scrollPos >= navOffset) {
			$("nav").addClass('fixed');
		} else {
			$("nav").removeClass('fixed');
		}
	});
	//Side Nav
	$(".button-collapse").sideNav();

	//Initialize Carousel
	$('.carousel.carousel-slider').carousel({full_width: true});

	//Autoresizes Textarea
	$('#textarea1').val('');
	$('#textarea1').trigger('autoresize');
  
  }); // end of document ready
})(jQuery); // end of jQuery name space