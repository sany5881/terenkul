$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrows/left.png"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrows/right.png"></button>',
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true
                }
              },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false
              }
            }
          ]
    });
  });