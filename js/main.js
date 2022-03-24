

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

    var model = document.getElementById('simpleModel');
    var modelBtn = document.getElementById('modelBtn');
    var closeBtn = document.getElementsByClassName('closeBtn')[0];

    //Listen for open click
    modelBtn.addEventListener('click', openModel);

    //Listen for close click
    closeBtn.addEventListener('click', closeModel);

    //Listen for Outside click
    window.addEventListener('click', outsideClick);


    //function to open model
    function openModel(){
        model.style.display = 'block';
    }


    //function to close model
    function closeModel(){
        model.style.display = 'none';
    }

    //function to close model if outside click
    function outsideClick(e){
        if(e.target == model){
            model.style.display = 'none';
        }
    }

    