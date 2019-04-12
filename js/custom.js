// google map
var map = '';
var center;

function initialize() {


}

function counter(elem, start, end,speed, increment = 0) {
    var start = parseInt(start);
    var end = parseInt(end);
    
    var interval = setInterval(function() {
        elem.text(start)
        start++;

        if (increment)
            start += increment;

        if (start > end) {
            elem.text(end);
            clearInterval(interval);
        }
    }, speed);



}

// Flexslider
$(function() {
    /* FlexSlider */
    $('.flexslider').flexslider({
        animation: "fade",
        directionNav: false
    });

    new WOW().init();

    // Magnific Pop up for Portfolio section
    $('.portfolio-thumb').each(function() {
        $(this).magnificPopup({
            delegate: '.portfolio-popup', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    })

    $('.video').each(function() {
        $(this).magnificPopup({
            type: 'iframe',


            iframe: {
                patterns: {
                    dailymotion: {

                        index: 'dailymotion.com',

                        id: function(url) {
                            var m = url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
                            if (m !== null) {
                                if (m[4] !== undefined) {

                                    return m[4];
                                }
                                return m[2];
                            }
                            return null;
                        },

                        src: 'https://www.dailymotion.com/embed/video/%id%'

                    }
                }
            }
        })


    });
 
});

// isotope
jQuery(document).ready(function($) {

    var started = 0;
    var lastScroll = 0;
    var counted = 0;
    var top = $("#divider").offset().top - window.innerHeight;
    var width = $(document).width();
   
 
    if (width > 600) {
        $("body").niceScroll({
            cursorcolor: "#93ca3a",
            cursorwidth: "12px",
            zindex: "999",
            background: "#eee"
        });
    }
  
    
    $(window).scroll(function(event) {
        var countOffset = $(".counts").offset().top - 700;
        var win = $(window).scrollTop();

        if (win >= countOffset && !counted) {
            counter($("#line-code"), 0, 73520, 5, 50);
            counter($("#cup-coffee"), 0, 723, 5);
            counter($("#nighter"), 0, 421, 5);
            counted = 1;
        }

        if (win == 0) {
            $("#top-header").removeClass('top-header-noheight');
            $("#top-header").addClass('top-header-withheight'); 
        }else {
            $("#top-header").removeClass('top-header-withheight'); 
            $("#top-header").addClass('top-header-noheight');
        }

        if (width > 980) {
            if (win < lastScroll && win !== 0) {
              $(".navbar").addClass('navbar-fixed-top');
              if (lastScroll > 700) {
                  $('#totop').show();
              } else {
                  $("#totop").hide();
              }

            } else {

              $(".navbar").css('opacity', '0');
              $(".navbar").removeClass('navbar-fixed-top');
              
              
              $("#totop").hide();
              if (win === 0) {
                  $(".navbar").css('opacity', '1');
              }
            }

            lastScroll = win;
        }else {
            if ($(window).scrollTop() > 100 && width < 780) {
             
                    $(".navbar").addClass('navbar-fixed-top');
               
            }else {
                $(".navbar").removeClass('navbar-fixed-top');
            }
        }


    })

    $("#totop").click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    })
    if ($('.iso-box-wrapper').length > 0) {

        var $container = $('.iso-box-wrapper'),
            $imgs = $('.iso-box img');

        $container.imagesLoaded(function() {

            $container.isotope({
                layoutMode: 'fitRows',
                itemSelector: '.iso-box'
            });

            $imgs.load(function() {
                $container.isotope('reLayout');
            })

        });

        //filter items on button click
        $('.filter-wrapper li a').click(function() {

            var $this = $(this),
                filterValue = $this.attr('data-filter');

            $container.isotope({
                filter: filterValue,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });

            // don't proceed if already selected 
            if ($this.hasClass('selected')) {
                return false;
            }

            var filter_wrapper = $this.closest('.filter-wrapper');
            filter_wrapper.find('.selected').removeClass('selected');
            $this.addClass('selected');

            return false;
        });

    }

    $(".bg-loader").hide();
});

// Hide mobile menu after clicking on a link
$('.navbar-collapse a.smoothScroll').click(function() {
    $(".navbar-collapse").collapse('hide');
});

//jQuery for page scrolling feature - requires jQuery Easing plugin