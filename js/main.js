
//MENU
$(document).ready(function () {
  $(".icon-menu").click(function (event) {
    $(".icon-menu, .menu__body").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
//SLIDER
$(document).ready(function () {
   $('.slider__body').slick({
      arrows: false,
      dots: true,
      adaptiveHeight: true,
      slidersToShow: 1,
      
   });
});

/*
{
      //autoplay: true,
      //infinite: false,
      dots: true,
      arrows: false,
      accessibility: false,
      slidersToShow: 1,
      autoplaySpeed: 3000,
      adaptiveHeight: true,
      nextArrow: '<button type="button" class="slick-next"></button>',
      prevArrow: '<button type="button" class="slick-prev"></button>',
      responsive: [{
         breakpoint: 768,
         settings: {}
      }]
   }
*/ 
