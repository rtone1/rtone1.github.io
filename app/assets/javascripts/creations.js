$(document).ready(function(){
  $('.me').hide();
  $('.contact').hide();
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

      parallax();

      var scroll = $(document).scrollTop();
      if (scroll >= 60) {
          $('header').addClass('shadow');
      } else {
          $('header').removeClass('shadow');
      }

      if (scroll > 100){
        $('.aboutME').fadeOut('slow');
      } else {
        $('.aboutME').fadeIn('slow');
      }

      if (scroll > 1700){
        parallaxME();
        $('.me').fadeIn(1000);
        $('.contact').fadeIn(1000);
        if (scroll > 2073){
          $('.contact').removeAttr('style');
          $('.me').removeAttr('style');
        }
      } else {
        $('.me').fadeOut('slow');
        $('.contact').fadeOut('slow');
      }



    });
// parallax scroll ==================================



     function parallax(){
       var scrolled = $(document).scrollTop() - 110;
       $('#container3').css('top', - scrolled / 2) + 'px';
     }


     function parallaxME(){

          var scrolledY = $(document).scrollTop() - 1950;
          var scrolledY2 = $(document).scrollTop() - 2050;
          $('.me').css('right', + scrolledY) +'px';
          $('.contact').css('left', + scrolledY2) +'px';

      };

// mail function ===============================================================





}); // end of document.ready
