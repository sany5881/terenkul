(function ($, root, undefined) {
    $(function () {
        'use strict';


        $('.booking__button').click(function(){
            //$('#booking-form-phone').fadeIn();
            $('#booking-form-phone').css('display','block');
            $('#input-cottage').val('<?php echo get_the_title(); ?>');
        });

        var isInsideForm = false;
        var bookIsGone = false;

        $('#booking-form').mouseover(function(){
            isInsideForm = true;
        });

        $('#booking-form').mouseout(function(){
            isInsideForm = false;
        });

        $('#booking-form').submit(function(e){
            e.preventDefault();
            if (bookIsGone == false) {
                //$.post($(this).attr('action'), $(this).serialize());
                $('#booking_hide').css('display','none');
                $('#booking_show').css('display','block');
                $('#booking_hide_row').css('display','none');
                $('#booking_thanks').html('Спасибо за заказ!');
                $('.button_thanks').css('display','block');
                $('#thanks_div').css('margin','auto');
                $('#thanks_div').css('padding-right','0');
                $('#thanks_button').html('Закрыть');
                bookIsGone = true;
                $('.button_thanks').click(function(){
                    //$('#booking-form-phone').fadeOut();
                    $('#booking-form-phone').css('display','none');
                });
            }
        });

        $('#booking-form-phone').click(function(){
            if (isInsideForm == false) {
                //$('#booking-form-phone').fadeOut();
                $('#booking-form-phone').css('display','none');
            }
        });

        $('#close-icon').click(function(){
                //$('#booking-form-phone').fadeOut();
                $('#booking-form-phone').css('display','none');
        });

    });
})(jQuery, this);