$(document).ready(function () {
  checkScroll();
  $('.mobile-menu-toggle').click(function () {
    $('.menu').toggleClass('open');
  });
  $(document).scroll(function () {
    checkScroll();
  });
});

function checkScroll() {
  if ($(window).scrollTop() >= 86) {
    $('.site-header').addClass('low');
  } else {
    $('.site-header').removeClass('low');
  }
}
