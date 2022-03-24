

$(document).ready(function() {
     /*------------------ Navbar Shrink ---------------------- */
     $(window).on("scroll",function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink");
        }
        else{
            $(".navbar").removeClass("navbar-shrink");
        }
     });


     /*------------------ Modal Popup ---------------------- */
     

     
     
     
     /*------------------ Navbar Collapse ---------------------- */
     $(".nav-link").on("click", function(){
         $(".navbar-collapse").collapse("hide");
     });
    
     /*------------------ Video Popup ---------------------- */
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function(){
        if($(".video-popup").hasClass("open")){
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src","");
        }
        else{
            $(".video-popup").addClass("open");
            if($("#player-1").attr("src")==''){
              $("#player-1").attr("src",videoSrc);
            }
        }
    });
});


     
    
    /*------------------ Model Popup ---------------------- */

    