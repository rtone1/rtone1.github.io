$(document).ready(function(){

// responsive nav ===================
    $('.hamIcon').click(function(){
      $( 'ul' ).slideToggle(200);
    });

    $(window).resize(function(){
      if (screen.width > 700) {
        $('ul').removeAttr('style');
      }

    });
// add shadow to nav ================
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 60) {
          $('header').addClass('shadow');
      } else {
          $('header').removeClass('shadow');
      }

      if (scroll > 100){
        $('.container1').fadeOut(200);
      } else {
        $('.container1').fadeIn(300);
      }

    });













}); // end of document.ready
