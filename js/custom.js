// google map
var map = '';
var center;

function initialize() {

    $("body").niceScroll({
        cursorcolor: "#93ca3a",
        cursorwidth: "12px",
        zindex: "999",
        background: "#eee",
        scrollspeed: 40,
        mousescrollstep: 30
    });
    var started = 0;
    var lastScroll = 0;
    var top = $("#divider").offset().top - window.innerHeight;
    var width = $(document).width();
    if (width < 780) {
        $(".navbar").addClass('navbar-fixed-top');
    }
    $(window).scroll(function(event) {

        if (width > 980) {
            var win = $(window).scrollTop();

            if (top < win && started === 0) {
              started = 1;
              counter();
            }

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
        }


    })

    $("#totop").click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    })

}

function counter(top, win, started) {


    $('#line-code').animationCounter({
        start: 0,
        end: 32750,
        delay: 60,
        step: 210
    })

    $('#cup-coffee').animationCounter({
        start: 0,
        end: 1899,
        delay: 60,
        step: 20
    })

    $('#nighter').animationCounter({
        start: 0,
        end: 755,
        delay: 60,
        step: 10
    })

}



function loadGoogleMap() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
    document.body.appendChild(script);
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
    loadGoogleMap();
});

// isotope
jQuery(document).ready(function($) {

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