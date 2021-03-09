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
    });
    $(".slider-calc").owlCarousel({
        items: 1,
        loop: false,
    });
    $(".slider-calc__text").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        dotsEach: true,
    });
    $(".slider-transport").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        dotsEach: true,
    });

    var owl = $('.slider-body');
    owl.owlCarousel();
    $('.customNextBtn').click(function() {
       owl.trigger('next.owl.carousel');
   })
    $('.customPrevBtn').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    })
    var owltransport = $('.slider-transport');
    owltransport.owlCarousel();
    $('.customNextBtn-transport').click(function() {
       owltransport.trigger('next.owl.carousel');
   })
    $('.customPrevBtn-transport').click(function() {
        owltransport.trigger('prev.owl.carousel', [300]);
    })
});

$( document ).ready(function() {
    $(".details__img-left").click(function() {        
        $('.container-details__add').addClass("details-click");
        $('.details__wrapper-top').addClass("details-click__add");
    })
});
$( document ).ready(function() {
    $(".details__img-right").click(function() {        
        $('.container-details__add').addClass("details-click");
        $('.details__wrapper-bottom').addClass("details-click__add");
    })
});
$( document ).ready(function() {
    $(".details-close__btn").click(function() {        
        $('.container-details__add').removeClass("details-click");
        $('.details__wrapper-top').removeClass("details-click__add");
        $('.details__wrapper-bottom').removeClass("details-click__add");
    })
});
$( document ).ready(function() {
    $(".header__btn-default").click(function() {        
        $('.header').addClass("header-popup");
    })
});
$( document ).ready(function() {
    $(".header__close-btn").click(function() {        
        $('.header').removeClass("header-popup");
    })
});
$( document ).ready(function() {
    $(".btn-close__menu").click(function() {        
        $('.header').removeClass("header-popup");
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
