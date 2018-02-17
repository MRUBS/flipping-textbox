/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Common Scripts
Project:    Vesto-Minimal Portfolio Template
Author:     Syed Mehdi Hasan
Author URI: http://hmehdi.com/
 
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++ Table of contents +++++++++
		1. Page-loader 
		2. Sticky
		3. WOW
		4. Parallax
		5. Counter bars
		6. OwlCarousel
		7. Progress bars
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
$(function () {
	'use strict'; // use strict to start
/* ---------------------------------------------
    page-loader 
 --------------------------------------------- */		
$(window).on('load', function() {
	$('#page-loader').delay().fadeOut('slow').remove();
});
/* ---------------------------------------------
    Sticky 
 --------------------------------------------- */
$(window).on('scroll',function () {
	var windowSize = $(window).width();
	if (windowSize > 1000 && $(this).scrollTop() > 1) {
		$('header').addClass("sticky");
	}
	else {
		$('header').removeClass("sticky");
	}
});
/* ---------------------------------------------
    WOW 
 --------------------------------------------- */	
$(document).ready(function(){
	new WOW().init();
});
/* ---------------------------------------------
    Parallax
 --------------------------------------------- */
if (($(window).width() >= 767)) {	
	$('#banner-section').parallax("50%", .5);
	$('#call-section').parallax("50%", .5);
	$('#fun-fact-section').parallax(.5);
	$('#testimonial-section').parallax(.5);
	$('#subscribe-section').parallax(.5);
	$('#footer-section').parallax(.5);
	$('#page-title-section').parallax(.5);
}
/* ---------------------------------------------
    Counter bars
 --------------------------------------------- */	
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
/* ---------------------------------------------
    counter bars
 --------------------------------------------- */
	$(window).on('load',function() {
		var worksfilters = $('.filters li'),
			worksitem = $('#isotope-grid');	
		if (worksfilters != 'undefined'){		
			worksitem.isotope({			
				itemSelector : '.grid-item',
				layoutMode: 'fitRows',
				 masonry: {
				columnWidth: '.grid-item'
			  }
			});				
		worksfilters.on('click', function(){		
		worksfilters.removeClass('active');
		$(this).addClass('active');	
		var selector = $(this).attr('data-filter');
		worksitem.isotope({ filter: selector });	
		return false;		
		});
	   }
	});
/* ---------------------------------------------
    OwlCarousel
 --------------------------------------------- */
	$('.custom1').owlCarousel({
		//animateOut: 'slideOutDown',
		//animateIn: 'flipInX',
		items: 1,
		margin: 30,
		stagePadding: 30,
		smartSpeed: 450,
		pagination: true,
		loop:true,
		autoHeight:true
	});
/* ---------------------------------------------
    Progress bars
 --------------------------------------------- */
	$(window).on('scroll', function () {    
		var progressBar = $(".progress-bar");
		progressBar.each(function(indx){
			var bottom_of_object = 
			$(this).offset().top + $(this).outerHeight();
			var bottom_of_window = 
			$(window).scrollTop() + $(window).height();
			if(bottom_of_window > bottom_of_object) {
			$(this).css("width", $(this).attr("aria-valuenow") + "%");
			 }
		});
	 });
	
});