!(function ($) {
    "use strict";

    // carousel
    function courseInfinity() {
        $(".course-home-carousel").owlCarousel({
            // loop: !0,
            // nav: true,
            // dots: !1,
            // loop: true,
            // margin: 10,
            nav: false,
            margin: 15,
            responsive: {
                0: { items: 1.25 },
                460: { items: 2.15 },
                576: { items: 2.5 },
                690: { items: 3.15 },
                768: { items: 3.15 },
                900: { items: 4.15 }
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
        courseInfinity();
    });

})(jQuery);
