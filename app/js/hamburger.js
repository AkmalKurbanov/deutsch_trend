$('.hamburger').on('click', function() {
  $('.hamburger').toggleClass('open');
  $('.menu').toggleClass('open');
  $('.wrapper').toggleClass('translateX');
  $('body').toggleClass('no-scroll');
  $('.header').toggleClass('modified');
});