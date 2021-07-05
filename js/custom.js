var container = document.querySelector('.filter-gallery');//filter-gallery filter row or parent class
      var mixer = mixitup(container, {
         selectors:{
            control: '[data-mixitup-control]'
        }
    });

//owl carousel script
$(document).ready(function(){
    // use wow plugin
    new WOW().init();

    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive:{
            0:{
                items:2,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:false
            }
        }
    });
    // navbar class mantain
    $('.navbar-nav a').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active')
    });
    $('.go-top').click(function(){
        $('html, body').animate({
            scrollTop: 60
        });
    });
    // go top icons
    $('.go-top').hide();//default hide.
    $(window).scroll(function(){
        var sumon = $(window).scrollTop();//widdows scrolling maseaurment
        if (sumon > 500){
            $('.go-top').fadeIn();//instead of hide nedd to use fadeOut for smoothness
        }
        else{
            $('.go-top').fadeOut();//instead of show need to use fadeIn for smoothness
        }
        if(sumon > 100){
            $('body').addClass('navfixed');
        }
        else{
            $('body').removeClass('navfixed')
        }
    });
    //Search bar 
    $('.fa-search').click(function(){
        $('.search-box div').toggleClass('search-hide');
    });
    // click section activation
    $('.navbar-nav a[href^="#"]').click(function(itsdefaulte){
        itsdefaulte.preventdefaulte();

        var target= this.hash;
        $('html, body').animate({
            scrollTop: $(target).offset().top - 75
        }, 500);

    });
});

