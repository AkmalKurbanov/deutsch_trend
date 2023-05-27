$('.list .btn').on('click', function(e) {
  e.preventDefault();
  $(this).find('svg path.line1').toggle();
  $(this).find('.show').toggle(); 
  $(this).find('.hide').toggle(); 
  $(this).next().toggle();
});


$('.course-overview__lesson-item').on('click', function(e) {
  $(this).addClass('active').find('.course-overview__lesson-list').slideDown();
  $('.course-overview__lesson-item').not(this).removeClass('active').find('.course-overview__lesson-list').slideUp();
});

$('.course-overview__lesson-item.active').find('.course-overview__lesson-list').slideDown();



