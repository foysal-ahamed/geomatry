$(document).ready(function($) {
  $('.mainmenu').on('click', 'li', function() {
    $('.mainmenu li').removeClass('active');
    $(this).addClass('active');
  });
  $(".js-modal-btn").modalVideo();
});
