
$(function() {
  $('.tab_btn').click(function() {

    $('.tab_btn').removeClass('is-active-btn');
    $('.tab-item').removeClass('is-active-item');
    $($(this).addClass('is-active-btn'));
    $($(this).attr('href')).addClass('is-active-item');
  });
});