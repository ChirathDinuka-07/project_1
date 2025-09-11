
$(document).ready(function(){

	// Mobile menu
	$('.mobile-menu-icon').click(function(){
		$('.templatemo-nav').slideToggle();
	});

	$( window ).resize(function() {
		if($( window ).width() > 767) {
			$('.templatemo-nav').show();
		} else {
			$('.templatemo-nav').hide();
		}
	});

  // http://stackoverflow.com/questions/2851663/how-do-i-simulate-a-hover-with-a-touch-in-touch-enabled-browsers
  $('body').bind('touchstart', function() {});

});


   let index = 0;
    const slides = document.getElementById("slides");
    const total = slides.children.length;
    const slideWidth = 600; // must match CSS width

    function moveSlide(step) {
      index = (index + step + total) % total;
      slides.style.transform = `translateX(${-index * slideWidth}px)`;
    }
 