
$(document).ready(function () {

    $('.eye1, .eye3, .eye4').click(function () {
        $('.modal').removeClass('none');

    })
    $('.modal-close').click(function () {
        $('.modal').addClass('none');
    })


    $('.eye1').click(function () {
        $(this).addClass('none');

    })
    $('.eye3').click(function () {
        $(this).addClass('none');

    })
    $('.eye4').click(function () {
        $(this).addClass('none');

    })
    $('.e6').click(function () {
        $(this).addClass('none');

    })


    $('.eye2, .eye6').click(function () {
        $('.modal2').removeClass('none');
    })
    $('.modal-close').click(function () {
        $('.modal2').addClass('none');
    })
});


