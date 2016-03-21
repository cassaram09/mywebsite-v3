$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

$('.nav-item').click(function() {
$('.button_container').toggleClass('active');
   $('#overlay').toggleClass('open');

  });