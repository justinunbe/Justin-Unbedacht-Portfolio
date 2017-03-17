


$(document).ready(function() {



// variables
    var $header_top = $('.header-top');
    var $nav = $('nav');
    var playVideo = document.getElementById('quenchua-video');
    var flappyGo = document.getElementById('flappy-video');
    var appleGo = document.getElementById('apple-video');
    var portfolioGo = document.getElementById('porfolio-video');
    var quenchuaCounter = 1;
    var flappyCounter = 1;
    var appleCounter = 1;
    var portfolioCounter = 1;






//  Functions

    setTimeout(function(){
        console.log("hit");
        $(".full-background").fadeOut(2000);
      }, 5000);

    $(window).unload(function() {
        quenchuaCounter = 1;
        flappyCounter = 1;
        appleCounter = 1;
        console.log("goodbye");
        var portfolioCounter = 1;
    });



    function playMovie() {
        if (quenchuaCounter === 1) {
            playVideo.play();
            quenchuaCounter = 2;
            console.log("should be playing quenchua");
        }
    }


    function playAppleMovie() {
        if (appleCounter === 1) {
            appleGo.play();
            appleCounter = 2;
            console.log("should be playing apple");
        }
    }



    function playMovieFlappy() {
        if (flappyCounter === 1) {
            flappyGo.play();
            flappyCounter = 2;
            console.log("should be playing flappy");
        }
    }

    function playMoviePortfolio() {
        if (portfolioCounter === 1) {
            portfolioGo.play();
            portfolioCounter = 2;
            console.log("should be playing portfolio");
        }
    }



    $('.slick-slider').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1500
    });

    function topPosition () {
      var position = $(document).scrollTop();
      console.log(position);
    }

    $(document).scroll(function(){
      var position = $(document).scrollTop();

      if (position > 450 && position < 550) {
        playAppleMovie();
        console.log("Playing Apple");
      }
      else if(position > 850 && position < 950) {
        playMovie();
        console.log("Playing Quenchua");
      }
      else if (position > 1250 && position < 1350) {
        playMovieFlappy();
        console.log("playing Flappy");
      }
      else if (position > 1650 && position < 1750) {
        playMoviePortfolio();
        console.log("playing portfolio");
      }

      topPosition();
});
}); //.ready function
