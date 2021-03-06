(function ($) {
    $.fn.mainMenu = function(){
        $(".burger-btn").click(function(){
           if ( $(this).hasClass('active')){
               $(this).removeClass('active');
               $(".main-menu").css({right: "-100%"})
           } 
            else{
                 $(this).addClass('active');
                 $(".main-menu").css({right: "0"})
            }
        });
        $("#fullpage").click(function(){
             $(".burger-btn").removeClass('active');
            $(".main-menu").css({right: "-100%"})
        });
    }
    
})(jQuery);



$(document).ready(function() {
         
    $('#fullpage').fullpage({
    sectionsColor: ['#000', '#eee', '#000', 'whitesmoke', '#ccddff'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    menu: '#menu',
    scrollingSpeed: 1000
    });
    $(".burger-btn").mainMenu();
       
       $(".gal-box").click(function(){
          var imgSel = $(this).find("img").attr("src");
           console.log(imgSel);
           $(".img-box").attr("src", imgSel);
       });
       
       
    });
    
    // init controller
    var controller = new ScrollMagic.Controller();
   
    // build scene and set duration to window height
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger"})
    .setClassToggle(".featured", "slideUp")
    .addTo(controller);
    
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger"})
    .setClassToggle(".content", "slideDown")
    .addTo(controller);
    
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger2"})
    .setClassToggle(".about-container", "slideLeft")
    .addTo(controller);
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger2"})
    .setClassToggle(".pic-container", "slideRight")
    .addTo(controller);
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger2"})
    .setClassToggle(".about-wel", "slideRight")
    .addTo(controller);