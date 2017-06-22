angular.module("app").controller("mainCtrl", function($scope){
var vm = this;

// variables
    var $header_top = $('.header-top');
    var $nav = $('nav');
    var playVideo = document.getElementById('quenchua-video');
    var flappyGo = document.getElementById('flappy-video');
    var appleGo = document.getElementById('apple-video');
    var portfolioGo = document.getElementById('porfolio-video');
    var woolyGo = document.getElementById('wooly-video');
    var quenchuaCounter = 1;
    var flappyCounter = 1;
    var appleCounter = 1;
    var portfolioCounter = 1;
    var woolyCounter = 1;



//  Functions


//hide and show names for github, resume, and linkedIn.
$(".linked-in-container").hover(function(){
    $('.linked-in-hide-show').show();
},function(){
    $('.linked-in-hide-show').hide();
});

$(".github-container").hover(function(){
    $('.github-hide-show').show();
},function(){
    $('.github-hide-show').hide();
});

$(".resume-container").hover(function(){
    $('.resume-hide-show').show();
},function(){
    $('.resume-hide-show').hide();
});


//Jump to Projects, About me, and Contact.
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

    setTimeout(function(){
        console.log("hit");
        $(".full-background").fadeOut(2000);
      }, 7000);

    $(window).unload(function() {
        quenchuaCounter = 1;
        flappyCounter = 1;
        appleCounter = 1;
        portfolioCounter = 1;
        woolyCounter = 1;
        console.log("goodbye");
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

    function playMovieWooly() {
        if (woolyCounter === 1) {
            woolyGo.play();
             woolyCounter = 2;
            console.log("should be playing wooly");
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
        playMovieWooly();
        console.log("Playing Wooly");
      }
      else if(position > 850 && position < 950) {
        playAppleMovie();
        console.log("Playing Apple");
      }
      else if(position > 1300 && position < 1400) {
        playMovie();
        console.log("Playing Quenchua");
      }
      else if (position > 1650 && position < 1750) {
        playMoviePortfolio();
        console.log("playing portfolio");
      }
      else if (position > 2050 && position < 2150) {
        playMovieFlappy();
        console.log("playing Flappy");
      }


      topPosition();
});


//end of controller
});
