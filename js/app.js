$(document).ready(function(){
    $(window).on('scroll', function(){
        var scroll = $(window).scrollTop();
        if(scroll>=50){
            $(".sticky").addClass("stickyadd")
        }else{
            $(".sticky").removeClass("stickyadd")
        }
    });

    var typed = new Typed(".element", {
        strings: ["Paul Kolk","a Developer","Blockchain addicted","a positive person"],
        smartBackspace:true,
        typeSpeed:100,
        backSpeed:100,
        loop:true,
        loopCount:Infinity,
        startDelay:1000
    });



    var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function() {
                var p = document.querySelectorAll('.progress-bar');
                p[0].setAttribute("style", "width:60%;transition:1s all");
                p[1].setAttribute("style", "width:60%;transition:1.7s all");
                p[2].setAttribute("style", "width:40%;transition:2.3s all");
                p[3].setAttribute("style", "width:50%;transition:2.9s all");
                p[4].setAttribute("style", "width:65%;transition:3.5s all");
                p[5].setAttribute("style", "width:80%;transition:4.3s all");
                p[6].setAttribute("style", "width:10%;transition:5.5s all");
        },
        offset:'90%'
      });



})

