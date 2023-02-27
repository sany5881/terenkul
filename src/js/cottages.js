(function ($) {

    $(function () {
        $('.mark').hover(
            function() {
                var id = $(this).attr('data-id');
                $('.cottage_' + id).css('display','block');
                $(this).addClass('active');

            }, function() {
                var id = $(this).attr('data-id');
                $(this).removeClass('active');

                setTimeout(function(){
                    if ($('.mark_' + id).hasClass('active') != true) {
                        $('.cottage_' + id).css('display','none');
                    }
                }, 50);
            }
        );

        $('.cottage').hover(
            function() {
                var id = $(this).attr('data-id');
                $('.mark_' + id).addClass('active');

            }, function() {
                var id = $(this).attr('data-id');
                $('.mark_' + id).removeClass('active');

                setTimeout(function(){
                    if ($('.mark_' + id).hasClass('active') != true) {
                        $('.cottage_' + id).css('display','none');
                    }
                }, 50);
            }
        );
    });
    

})(jQuery, this);