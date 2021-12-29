$(document).ready(function() {
    $('#Modalform').modal({
        backdrop: false
    })
});

$('#nav_button a').click(function(){
    $(this).toggleClass('open');
    $('#main-menu').toggleClass('open');
});

$('.theme-switch').click(function(){
    $(this).toggleClass('active');
    $('body').toggleClass('light');
});

$('#modal').click(function(){
    $('#Modalform').modal('toggle')
});

$('.modal-nav-login').click(function(){
    $('.modal-nav-login').addClass('active');
    $('.modal-nav-sign-up').removeClass('active');
    $('#modal-login').show();
    $('#modal-sign-up').hide();
});

$('.modal-nav-sign-up').click(function(){
    $('.modal-nav-sign-up').addClass('active');
    $('.modal-nav-login').removeClass('active');
    $('#modal-sign-up').show();
    $('#modal-login').hide();
});

$(document).ready(function() {
    var featuredslider = $('.featured-slider');
    featuredslider.on('initialized.owl.carousel translate.owl.carousel', function(e){
        idx = e.item.index;
        $('.featured-slider .owl-item.big').removeClass('big');
        $('.featured-slider .owl-item.medium').removeClass('medium');
        $('.featured-slider .owl-item').eq(idx).addClass('big');
        $('.featured-slider .owl-item').eq(idx-1).addClass('medium');
        $('.featured-slider .owl-item').eq(idx+1).addClass('medium');
    });
    featuredslider.owlCarousel({
        center: true,
        margin: -200,
        stagePadding: 0,
        items: 5,
        loop:true,
        autoplay: false,
        lazyLoad:true,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        dots: false,
        touchDrag: false,
        pullDrag: false,
        mouseDrag: false,
    });
});

$(document).ready(function() {
    var achievementslider = $('.achievement-slider');
    achievementslider.owlCarousel({
        center: true,
        margin: 0,
        stagePadding: 0,
        items: 1,
        loop: true,
        autoplay: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        dots: false,
    });
});

$(document).ready(function() {
    var gamerslider = $('.gamer-slider');
    gamerslider.owlCarousel({
        center: false,
        margin: 20,
        stagePadding: 0,
        items: 4,
        loop: false,
        autoplay: false,
        nav: false,
        dots: false,
        responsiveRefreshRate: 10,
        responsive : {
            768 : {
                items: 6,
            },
            992 : {
                items: 8,
                margin: -100,
            }
        }
    });
    $('.gamer-nav').click(function() {
        gamerslider.trigger('next.owl.carousel');
    })
});

$(document).ready(function() {
    $(function () { objectFitImages() });
});	