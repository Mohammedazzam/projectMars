var menuList = document.getElementById("menuList");
menuList.style.maxHeight="0px"
function togglemenu(){
    if(menuList.style.maxHeight=="0px"){
        menuList.style.maxHeight="140px";
    }
    else{
        menuList.style.maxHeight="0px";
    }
}


// new WOW().init();
$(function () {

    "use strict";

        // scroll To section from i 

        $('nav ul li a,.header .go i').click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#' + $(this).data('goto')).offset().top
            }, 1000);
            
        });


            
        // scroll top
        $(window).scroll(function (e) {

            // console.log(e);

            var scrolltop = $('.scroll-top');
            if ($(window).scrollTop() > 500) {
                if (scrolltop.is(':hidden')) {
                    scrolltop.fadeIn(400);
                }
            } else {
                scrolltop.fadeOut(400);
            }
            
        });
        
        $('.scroll-top').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
        });


});


