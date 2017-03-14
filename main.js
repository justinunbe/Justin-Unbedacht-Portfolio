
// variables


$(document).ready(function(){


var $header_top = $('.header-top');
var $nav = $('nav');
var playVideo = document.getElementById('quenchua-video');
var flappyGo =document.getElementById('flappy-video');
var quenchuaCounter = 1;
var flappyCounter = 1;

$( window ).unload(function() {
  quenchuaCounter = 1;
  flappyCounter = 1;
  console.log("goodbye");
});


function playMovie () {
  if (quenchuaCounter === 1) {
    playVideo.play();
    quenchuaCounter = 2;
    console.log("should be playing");
  }
  console.log("quenchuaCounterhit", quenchuaCounter);
}

function playMovieFlappy () {
  if (flappyCounter === 1) {
    flappyGo.play();
    flappyCounter = 2;
    console.log("should be playing flappy");
  }
  console.log("flappyCounterhit", flappyCounter);
}


// toggle menu
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});

// fullpage customization
$('#fullpage').fullpage({
  sectionsColor: ['gray', 'white', 'white', 'white', 'white'],
  sectionSelector: '.vertical-scrolling',
  slideSelector: '.horizontal-scrolling',
  navigation: false,
  slidesNavigation: false,
  controlArrows: false,
  verticalCentered: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection'],
  menu: '#menu',

  afterLoad: function(anchorLink, index) {
    $header_top.css('background', 'rgba(0, 47, 77, .3)');
    $nav.css('background', 'rgba(0, 47, 77, .25)');
    console.log("afterLoad", index);
    if (index == 5) {
        $('#fp-nav').hide();
      }

    if(index === 2){
      playMovieFlappy();
    }
  },

  onLeave: function(index, nextIndex, direction) {
    console.log("onLeave", index);
    if(index == 5) {
      $('#fp-nav').show();
    }
  },

  afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {

    console.log("afterSlideLoad", index, "slideIndex", slideIndex);
    if(anchorLink == 'secondSection' && slideIndex === 1) {
      $.fn.fullpage.setAllowScrolling(false, 'up');
      $header_top.css('background', 'transparent');
      $nav.css('background', 'transparent');
      $(this).css('background', 'white');

      playMovie();

    }

    if(anchorLink === 'secondSection' && slideIndex === 0) {
      console.log("flappy movie");


    }

  },

  onSlideLeave: function( anchorLink, index, slideIndex, direction) {
    console.log("onSlideLeave", index, "slideIndex", slideIndex);
    if(index == 2 && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(true, 'up');
      $header_top.css('background', 'rgba(0, 47, 77, .3)');
      $nav.css('background', 'rgba(0, 47, 77, .25)');
      console.log("yay");
    }
  }
});


$(document).ready(function(){
      $('.slick-slider').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1500
      });
    });
 });       //.ready function
