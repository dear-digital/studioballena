$('.navbar-toggler').click(function() {
  $('.mobile-nav').addClass('open');
  $('body').addClass('no-scroll');
});

$('.mobile-nav-close').click(function() {
  $('.mobile-nav').removeClass('open');
  $('body').removeClass('no-scroll');
});

$(document).ready(function () {
  if(window.location.href.indexOf("") > -1) {
    $(".header-link").removeClass("page-selected");
    $(".header-link").each(function() {
      if($(this).text() == "home") {
      	$(this).addClass("page-selected");
      }
   });
  }

  if(window.location.href.indexOf("product") > -1) {
    $(".header-link").removeClass("page-selected");
    $(".header-link").each(function() {
      if($(this).text() == "product") {
      	$(this).addClass("page-selected");
      }
   });
  }

  if(window.location.href.indexOf("food") > -1) {
    $(".header-link").removeClass("page-selected");
    $(".header-link").each(function() {
      if($(this).text() == "food") {
      	$(this).addClass("page-selected");
      }
   });
  }

  if(window.location.href.indexOf("architectural") > -1) {
    $(".header-link").removeClass("page-selected");
    $(".header-link").each(function() {
      if($(this).text() == "architectural") {
      	$(this).addClass("page-selected");
      }
   });
  }

  if(window.location.href.indexOf("industrial") > -1) {
    $(".header-link").removeClass("page-selected");
    $(".header-link").each(function() {
      if($(this).text() == "industrial") {
      	$(this).addClass("page-selected");
      }
   });
  }

  if(window.location.href.indexOf("drone") > -1) {
    $(".header-link").removeClass("page-selected");
    $(".header-link").each(function() {
      if($(this).text() == "drone") {
      	$(this).addClass("page-selected");
      }
   });
  }

  if(window.location.href.indexOf("contact") > -1) {
    $(".header-link").removeClass("page-selected");
    $(".header-link").each(function() {
      if(($(this).text() == "contact") || ($(this).text() == "contacteer ons")) {
      	$(this).addClass("button-selected");
      }
   });
  }

  if(window.location.href.indexOf("over") > -1) {
    $(".header-link").removeClass("page-selected");
    $(".header-link").each(function() {
      if($(this).text() == "Over") {
      	$(this).addClass("page-selected");
      }
   });
  }

  if(window.location.href.indexOf("diensten") > -1) {
    $(".header-link").removeClass("page-selected");
    $(".header-link").each(function() {
      if($(this).text() == "Diensten") {
      	$(this).addClass("page-selected");
      }
   });
  }

  if(window.location.href.indexOf("klanten") > -1) {
    $(".header-link").removeClass("page-selected");
    $(".header-link").each(function() {
      if($(this).text() == "Klanten") {
      	$(this).addClass("page-selected");
      }
   });
  }

  if(window.location.href.indexOf("blog") > -1) {
    $(".header-link").removeClass("page-selected");
    $(".header-link").each(function() {
      if($(this).text() == "Blog") {
      	$(this).addClass("page-selected");
      }
   });
  }
});

$('#play').on('click', function(e) {
	e.preventDefault();
	$("#player")[0].src += "?autoplay=1";
	$('#player').show();
	$('#video-cover').hide();
	$('#play').hide();
});
