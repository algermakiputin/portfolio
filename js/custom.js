
function initialize() {
    
    
    var started = 0;
    var lastScroll = 0;
    var top = $("#divider").offset().top - window.innerHeight;

    $(window).scroll(function(event) {
      
      var win = $(window).scrollTop();
      
      if (top < win && started === 0) {
        started = 1;
        counter();
      }

      
      if (win < lastScroll && win !== 0) {
        $(".navbar").addClass('navbar-fixed-top');
        if (lastScroll > 700) {
          $('#totop').show();
        }else {
          $("#totop").hide();  
        }
      }
      else   {
        $(".navbar").removeClass('navbar-fixed-top');
        $("#totop").hide();  
      }

      lastScroll = win;

      
    })

    $("#totop").click(function() {
        $('body,html').animate({
          scrollTop: 0
        }, 800);
        return false;
    })
  
}

function counter(top,win,started) {
 
  
  $('#line-code').animationCounter({
    start:0,
    end:12750,
    delay: 60,
    step: 210
  })

  $('#cup-coffee').animationCounter({
    start:0,
    end:899,
    delay: 60,
    step: 20
  })

  $('#nighter').animationCounter({
    start:0,
    end:355,
    delay: 60,
    step:10
  })
    
}


// Flexslider
$(function(){
  /* FlexSlider */
  $('.flexslider').flexslider({
      animation: "fade",
      directionNav: false
  });

  new WOW().init();

  // Magnific Pop up for Portfolio section
  $('.portfolio-container').magnificPopup({
    delegate: '.portfolio-popup', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: false
    }    
  });

 
});

// isotope
jQuery(document).ready(function($){

  if ( $('.iso-box-wrapper').length > 0 ) { 

      var $container  = $('.iso-box-wrapper'), 
        $imgs     = $('.iso-box img');

      $container.imagesLoaded(function () {

        $container.isotope({
        layoutMode: 'fitRows',
        itemSelector: '.iso-box'
        });

        $imgs.load(function(){
          $container.isotope('reLayout');
        })

      });

      //filter items on button click
      $('.filter-wrapper li a').click(function(){

          var $this = $(this), filterValue = $this.attr('data-filter');

      $container.isotope({ 
        filter: filterValue,
        animationOptions: { 
            duration: 750, 
            easing: 'linear', 
            queue: false, 
        }                
      });             

      // don't proceed if already selected 
      if ( $this.hasClass('selected') ) { 
        return false; 
      }

      var filter_wrapper = $this.closest('.filter-wrapper');
      filter_wrapper.find('.selected').removeClass('selected');
      $this.addClass('selected');

        return false;
      }); 

  }

});

// Hide mobile menu after clicking on a link
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

//jQuery for page scrolling feature - requires jQuery Easing plugin
 