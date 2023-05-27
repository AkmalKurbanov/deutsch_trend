$(".courses-section__wrap").each(function (index) {
  if ($(this).children().length < 3) {
    $(this).addClass('jcc')
  }
});