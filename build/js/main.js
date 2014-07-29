(function($) {

    function fixHeader() {
        var navbar = $("#menu")
        var navbarH = $("#menu").offset().top 

        $(window).scroll(function() {
            if ( $(window).scrollTop() >= navbarH && $('html').hasClass('skrollr-desktop') ) {
                navbar.addClass("fixed");
            } else {
                navbar.removeClass("fixed");
            }
        });
    }
    fixHeader();

})(jQuery);