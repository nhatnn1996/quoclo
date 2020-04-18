jQuery(document).ready(function($) {
    $(".main-menu").flmenu();
    $('.dns_gsliders').owlCarousel({
        loop: true,
        margin: 4,
        autoplay: true,
        nav: true,
        items: 5,
        dots: false,
        slideSpeed: 1000,
        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            768: { items: 3 },
            1024: { items: 4 }
        },
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    });

    $('.news_homesliders').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        nav: true,
        items: 5,
        dots: false,
        slideSpeed: 1000,
        responsive: {
            0: { items: 1 },
            520: { items: 2 },
            768: { items: 3 }
        },
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    });

    $('.gallery_slider').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        nav: true,
        items: 1,
        dots: false,
        slideSpeed: 1000,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    });

    if ($('.home .click-scroll a').length > 0) {
        $('.home .click-scroll a').click(function(event) {
            /* Act on the event */
            var elm = $(this).attr('href');
            var res = elm.replace("/", "");
            $('html, body').animate({
                scrollTop: $(res).offset().top - 50,
            }, 1000);
            return false;
        });
    }

    $('#navbar .search a').click(function(event) {
        /* Act on the event */
        $(this).next().slideToggle();
        return false;

    });

    // Back to top
    if ($('#wrap-back-to-top').length) {
        var scrollTrigger = 150,
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#wrap-back-to-top').addClass('show');
                } else {
                    $('#wrap-back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('#wrap-back-to-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 1000);
        });
    }

    var htop = $('#header').offset().top;
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 150) {
            $('#header').addClass('fixed-header');
            $('body').css('padding-top', $('#header').height() + 30);
        } else {
            $('#header').removeClass('fixed-header');
            $('body').css('padding-top', 0);
        }
    });

    if ($("#preloader").length > 0) {
        $(window).on('load', function() {
            //Preloader
            $("#preloader").fadeOut("500");
        });
    }




  
    jQuery('.is_masonry').isotope({
      itemSelector: '.msritems',
    });
    jQuery(window).load(function($){
        jQuery('.is_masonry').isotope({
          itemSelector: '.msritems',
        });
    }); 
    jQuery(window).resize(function($){
        jQuery('.is_masonry').isotope({
          itemSelector: '.msritems',
        });
    });
 
 

    new WOW().init();
});



/************* DNS Post Share ***********/
(function($) {
    /**
     * jQuery function to prevent default anchor event and take the href * and the title to make a share popup
     * @param  {[object]} e           [Mouse event]
     * @param  {[integer]} intWidth   [Popup width defalut 500]
     * @param  {[integer]} intHeight  [Popup height defalut 400]
     * @param  {[boolean]} blnResize  [Is popup resizeabel default true]
     */
    $.fn.dns_share_post = function(e, intWidth, intHeight, blnResize) {
        e.preventDefault();
        intWidth = intWidth || '500';
        intHeight = intHeight || '400';
        strResize = (blnResize ? 'yes' : 'no');
        var strTitle = ((typeof this.attr('title') !== 'undefined') ? this.attr('title') : 'Social Share'),
            strParam = 'width=' + intWidth + ',height=' + intHeight + ',resizable=' + strResize,
            objWindow = window.open(this.attr('href'), strTitle, strParam).focus();
    }

    $(document).ready(function($) {
        $('.dns_social_list a').on("click", function(e) {
            $(this).dns_share_post(e);
        });
    });
}(jQuery));