$('.calcleft__input-item').change(function () {
	var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));

	$(this).css('background-image',
		'-webkit-gradient(linear, left top, right top, '
		+ 'color-stop(' + val + ', #FDCA40), '
		+ 'color-stop(' + val + ', #C5C5C5)'
		+ ')'
		);
});

$(document).ready(function(){
	$(".slider-body").owlCarousel({
		items: 1,
		loop: true,
	  // autoplay: true,
	  // autoplayTimeout: 2000
    // nav: true
});

	$(".btn__nav").on("click", function() {
		var target = $(this).data("target");
		$(target).toggleClass("nav__list--open");
	});

	var owl = $('.owl-carousel');
	owl.owlCarousel();
// Go to the next item
$('.customNextBtn').click(function() {
	owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})



});



$( document ).ready(function() {
    $(".getmoney__btn-default").click(function() {        
        $('.getmoney__form').addClass("popup__click");
        })
});
$( document ).ready(function() {
    $(".getmoney__close-btn").click(function() {        
        $('.getmoney__form').removeClass("popup__click");
        })
});

$( document ).ready(function() {
    $(".coop__btn-default").click(function() {        
        $('.coop__form').addClass("popup__click");
        })
});
$( document ).ready(function() {
    $(".coop__close-btn").click(function() {        
        $('.coop__form').removeClass("popup__click");
        })
});
