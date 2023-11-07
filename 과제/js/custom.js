$(function () {
    $('.VisualSlide').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        pauseOnHover: false,
        pauseOnActive: false,
    });

    $('.totop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 800)
    });

    $(window).on('scroll', function () {
        const sct = $(window).scrollTop();
        if (sct > 300) {
            $('.totop').addClass('on');
            $('.Header').addClass('on');
        } else {
            $('.totop').removeClass('on');
            $('.Header').removeClass('on');
        }
    });


})