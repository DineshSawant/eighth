$(function() {
    var winH = $(window).height();
    var winW = $(window).width();
    $('.banners').css('height', winH - $('.navbar').outerHeight());
    $("#banner-carousal").owlCarousel({
        items: 1,
        nav: true,
        navText: ['<span><i class="fa fa-angle-left" aria-hidden="true"></i></span>', '<span><i class="fa fa-angle-right" aria-hidden="true"></i></span>'],
        dots: true,
        center: true,
    });
    $("#logos-carousal").owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 5
            },
            1000: {
                items: 8
            }
        },
        navText: ['<span><i class="fa fa-angle-left" aria-hidden="true"></i></span>', '<span><i class="fa fa-angle-right" aria-hidden="true"></i></span>'],
        dots: false,
    });

    $('.accordian-head').on('click', function() {

        $('.accordian').slideUp();
        $('.accordian-head span i').removeClass('fa-minus').addClass('fa-plus');
        // console.log($(this).next('.accordian').is(':hidden'));
        if ($(this).next('.accordian').is(':hidden') == true) {
            $(this).next('.accordian').slideDown('100');
            $(this).find('span').children('i').addClass('fa-minus');
        }
    });
});