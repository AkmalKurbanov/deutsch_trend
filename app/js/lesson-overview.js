$('.trigger-drop-wrap').on('click', function () {
  $(this).parent().find('.course-overview__lesson-materials, .course-overview__lesson').slideToggle();
  $(this).find('.trigger-arrow').toggleClass('open');
});