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
new WOW().init();

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

        $(document).ready(function() {
            $('#fullpage').fullpage();
        });

            // $('#Path_7015').attr('transform','translate(341.55, 1665.03)');
        

});

// scrolling
// const section = document.querySelector('section');
// const content = document.querySelector('.main__content');
// let spin_val = 0;
// window.addEventListener('mousewheel', function(e){
//     if( e.deltaY > 0){
//         spin_val += 1;
//     }else{
//         spin_val -= 1;
//     }
//     scroll_content(spin_val);
// });

// function scroll_content(count){
//     // content.setAttribute('style', '\
//     // -webkit-transform: translateY(-'+count*100+'vh);\
//     // -ms-transform: translateY(-'+count*100+'vh);\
//     // -o-transform: translateY(-'+count*100+'vh);\
//     // transform: translateY(-'+count*100+'vh);\
//     // ');
//     // console.log(count);
// }