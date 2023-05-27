var headerHeight = $('#header').outerHeight() / 1.5;

$(window).scroll(function () {
  var sticky = $('.header--sticky'),
    scroll = $(window).scrollTop();
  if (scroll >= headerHeight) {
    sticky.addClass('sticky-on');
  }
  else sticky.removeClass('sticky-on');
});