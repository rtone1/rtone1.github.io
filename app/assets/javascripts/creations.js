$(document).ready(function(){

    $('.hamIcon').click(function(){
      $( 'ul' ).slideToggle(200);
    });

    $(window).resize(function(){
      if (screen.width > 700) {
        $('ul').removeAttr('style');
      }

    });

















}); // end of document.ready
