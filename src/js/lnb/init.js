(function ($, window, document, undefined) {

    'use strict';


    window.LNB = {


        tag: 'L N B',

        settings: {},

        modules: {},



        init: function() {

            console.log(this.tag);

            // initialize all modules
            for (var module in this.modules) {
                this.modules[module].init();
            }


            // add smooth scroll
            this.utils.smooth_scroll();


            // konami /* play sound effect */
            var easter_egg = new Konami(this.utils.konami);


            // ----------------------------------------
            // setup the page-header sliders
            var $homepage_slider = $('.homepage-slider-container');
            if ($homepage_slider.length) {

                $homepage_slider.slick({
                    autoplay: true,
                    autoplaySpeed: 5000,
                    arrows: false,
                    cssEase: 'ease-out',
                    dots: true,
                    mobileFirst: true,
                    pauseOnHover: false,
                    pauseOnDotsHover: true,
                    speed: 500,
                    swipe: false
                });

                $homepage_slider.find('.slick-dots').appendTo('.slideshow-nav');
            }



        },



        utils: {

            drupal_test: function () {
                var drupal_land = false;
                // recon to see if we're in Drupal-land
                if (typeof Drupal !== 'undefined') {
                    drupal_land = true;
                }

                return drupal_land;
            },

            smooth_scroll: function () {
                // smooth scroll - original source below
                // http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links
                $('a[href*=#]:not([href=#])').click(function() {

                    // edit 1 - prevent a bug where this code conflicts with
                    // Foundation's tab js to cause jankiness
                    if ($(this).parent().hasClass('tab-title')) return;

                    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                        if (target.length) {
                            $('html,body').animate({
                                scrollTop: target.offset().top
                            }, 1000);

                            return false;
                        }
                    }
                });
            },

            konami: function () {

                // file urls
                var howlerjs_url = 'js/vendor/howler.min.js';
                var mp3s = [
                    'misc/internet.mp3',
                    'misc/mario.mp3',
                    'misc/seinfeld.mp3'
                ];
                // file paths are different for Drupal
                if (LNB.settings.in_drupal_environment) {
                    for (var i = 0; i < mp3s.length; i++) {
                        mp3s[i] = LNB.settings.drupal_theme_path + mp3s[i];
                    }
                    howlerjs_url = LNB.settings.drupal_theme_path + howlerjs_url;
                }

                // load Howler
                if (window.Howl === undefined) {
                    $.ajax({
                        url: howlerjs_url,
                        dataType: 'script',
                        success: function () {
                            LNB.sound = new Howl({
                                urls: [mp3s[Math.floor(Math.random() * 3)]]
                            }).play();
                        }
                    });

                } else {
                    // play new sound. stop other one
                    LNB.sound.unload();
                    LNB.sound = new Howl({
                        urls: [mp3s[Math.floor(Math.random() * 3)]]
                    }).play();

                }

            }
        }

    };



    // initialize the things
    $(document).ready(function () {
        $(document).foundation();
        LNB.init();
    });

}($ || jQuery, window, window.document));
