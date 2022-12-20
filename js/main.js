$(document).ready(function () {
    /*Portfolio*/
    $('.portfolio__button[filter="wd"]').click(function () {
        if ($(this).attr('val') == 'off') {
            $('.portfolio__button').attr('val', 'off');
            $('.portfolio__button').removeClass('focused');
            $(this).attr('val', 'on');
            $(this).addClass('focused');
            $('.filter > div').hide(300);
            $('.filter > div[filter="wd"]').show(300);
        };
    });
    $('.portfolio__button[filter="ud"]').click(function () {
        if ($(this).attr('val') == 'off') {
            $('.portfolio__button').attr('val', 'off');
            $('.portfolio__button').removeClass('focused');
            $(this).attr('val', 'on');
            $(this).addClass('focused');
            $('.filter > div').hide(300);
            $('.filter > div[filter="ud"]').show(300);
        };
    });
    $('.portfolio__button[filter="moc"]').click(function () {
        if ($(this).attr('val') == 'off') {
            $('.portfolio__button').attr('val', 'off');
            $('.portfolio__button').removeClass('focused');
            $(this).attr('val', 'on');
            $(this).addClass('focused');
            $('.filter > div').hide(300);
            $('.filter > div[filter="moc"]').show(300);
        };
    });
    $('.portfolio__button[filter="all"]').click(function () {
        if ($(this).attr('val') == 'off') {
            $('.portfolio__button').attr('val', 'off');
            $('.portfolio__button').removeClass('focused');
            $(this).attr('val', 'on');
            $(this).addClass('focused');
            $('.filter > div').show(300);
        };
    });
    /*Slider*/
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        dotsClass: 'dots-style',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0)
            $('#toTop').fadeIn();
        else
            $('#toTop').fadeOut();
    });
    $('#toTop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 300);
    });
    /*Menu*/
    $('.menu-icon').click(function () {
        $('nav').slideToggle(500);
        $('ul.menu').css({
            'display': 'flex',
            'flex-direction': 'column'
        });
    });
});