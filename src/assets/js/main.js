!(function ($) {
    "use strict";

    // Preloader
    $(window).on('load', function () {
        if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function () {
                $(this).remove();
            });
        }
    });

    // carousel
    function owlInfinity() {
        $(".infinity-carousel").owlCarousel({
            // loop: !0,
            // nav: true,
            // dots: !1,
            // loop: true,
            // margin: 10,
            nav: true,
            margin: 26,
            responsive: {
                0: { items: 1.25 },
                600: { items: 2.15 },
                768: { items: 2.25 },
                900: { items: 2.5 },
                1024: { items: 3 },
                1100: { items: 3 },
                1200: { items: 3.15 },
                1350: { items: 3.25 },
                1500: { items: 4 },
            },
        });
    }

    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            once: true
        });
    }

    $(window).on('load', function () {
        aos_init();
        owlInfinity();
    });

})(jQuery);
