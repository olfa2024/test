$(function () {
    var header = $("header");
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 40) {
        header.addClass("scrolled");
      } else {
        header.removeClass("scrolled");
      }
    });
  });
