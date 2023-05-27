import Swiper from "swiper/bundle";
var swiper = new Swiper(".instagram-feed-js", {  
  spaceBetween: 25,
  speed: 2500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
      autoplay: false
    },
  }

});

var swiper = new Swiper(".blog-slider", {  
  speed: 2500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    460: {
      spaceBetween: 15,
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      spaceBetween: 15,
      slidesPerView: 3,
    },
    1200: {
      spaceBetween: 40,
      slidesPerView: 3,
    },
  }

});







$('.about__slide1').on('click', function () {
  $(this).parent().addClass('about-position1')
  $(this).parent().removeClass('about-position4')
});

$('.about__slide2').on('click', function () {
  $(this).parent().removeClass('about-position1')
  $(this).parent().addClass('about-position2')
});

$('.about__slide3').on('click', function () {
  $(this).parent().removeClass('about-position2')
  $(this).parent().addClass('about-position3')
});

$('.about__slide4').on('click', function () {
  $(this).parent().removeClass('about-position3')
  $(this).parent().addClass('about-position4')
});





