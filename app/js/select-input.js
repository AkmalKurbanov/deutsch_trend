$('.select').on('click', function() {
  $(this).toggleClass('open')
});
$('.select__dropdown-option').on('click', function() {
  $(this).attr('data-option')
  $(this).parents('.select').find('.select__selected input').val($(this).attr('data-option'))
  $(this).parents('.select').find('.select__selected span').text($(this).attr('data-option'))
  console.log($(this).attr('data-option'))
});


$('.show-pass').on('click', function(){
  $(this).hide();
  $(this).parents('.input').find('.hide-pass').css('display', 'flex')
  $(this).parents('.input').find('input').attr('type','text')
});
$('.hide-pass').on('click', function(){
  $(this).hide();
  $(this).parents('.input').find('.show-pass').css('display', 'flex')
  $(this).parents('.input').find('input').attr('type','password')
});

$('.input').on('click', function(){
  $(this).find('input').focus()
})