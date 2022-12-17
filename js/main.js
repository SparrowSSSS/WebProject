$(document).ready(function () {
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
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        dotsClass: 'dots-style'
      });
});