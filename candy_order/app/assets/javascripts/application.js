// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require activestorage
//= require cocoon
//= require_tree .
//= require bootstrap-sprockets



$(window).bind('scroll', function () {
  previousTop: 0;
  var currentTop = $(window).scrollTop();
  if (currentTop < this.previousTop ) {
    $('header').addClass('visible');
  } else {
      $('header').removeClass('visible');
  }
  this.previousTop = currentTop;
});


$(function() {
  $('.a').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: 'linear'
  });
});


$(function(){
  $('.global-nav li a').each(function(){
    var target = $(this).attr('href');
    if(location.href.match(target)) {
      $(this).parent().addClass('current');
    } else {
      $(this).parent().removeClass('current');
    }
  });
});
