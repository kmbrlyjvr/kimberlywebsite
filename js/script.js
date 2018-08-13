(function($){
  $(document).ready(function(){
    $('.slide_list').css('width',500 * $('.slide_list li').length);


//Stopping several Animations from starting at the same time
var isAnimating = false;

//To the right
  $('.next').on('click', function(){
    // Sperrvariable; If a Animation is starting, stopping it
    if(isAnimating) return;
    //To block other retrieval, isAnimating set on true
    isAnimating = true;
    //Start Animation
    $('.slide_list').animate({
      left: -400
    },500, function(){
      //After Animation (set left on 0 and hack element)
      //First li in DOM hack on the back
      $('.slide_list li').last().after(
          $('.slide_list li').first()
      )
      $('.slide_list').css('left', 0);
      //Sperrvariable set on false again to start new animations again
      isAnimating = false;
    });
  });

    //To the left
    $('.prev').on('click', function(){
      //If a Animation is rolling, do nothing
      if(isAnimating) return;
      //isAnimating set to true to block other retrievals
      isAnimating = true;
      //In this direction the last li should first move to the front
      $('.slide_list li').first().before($('.slide_list li').last());
      //Set left to -400 to slide the first element in
      $('.slide_list').css('left', -500);
      //Start animation
      $('.slide_list').animate({
        left: 0
      },500, function(){
        //Sperrvariable; set to false again to start new animations again
        isAnimating = false;
      });
    });

    //Autoplay
    var h = null;
    $('#autoplay_left').on('change', function(){
      clearInterval(h);
      if($(this).is(':checked')){
        h = setInterval(function(){
          $('.prev').trigger('click');
        }, 1000);
      }
    });
    $('#autoplay_off').on('change', function(){
      if($(this).is(':checked')){
        clearInterval(h);
      }
    });
    $('#autoplay_right').on('change', function(){
      clearInterval(h);
      if($(this).is(':checked')) {
        h = setInterval(function(){
          $('.next').trigger('click');
        }, 1000);
      }
    });

  });
})(jQuery);
