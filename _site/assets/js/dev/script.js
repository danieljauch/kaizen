$(document).ready(function () {
  if (checkLogin()) $('body').removeClass('not-logged-in');
  checkScroll();
  window.sr = ScrollReveal();
  var revealSettings = {
    origin: 'top',
    distance: '2rem',
    delay: 100,
    duration: 500,
    easing: 'cubic-bezier(.5, .08, .24, 1)',
    scale: 1
  };
  sr.reveal('.front-flex-wrapper', revealSettings, 100);
  sr.reveal('.page-content-item', revealSettings, 100);
  $('.image-list a').colorbox({
    maxWidth: '100%'
  });
  $('.mobile-menu-toggle').click(function () {
    $('.menu').toggleClass('open');
  });
  $(document).scroll(function () {
    checkScroll();
  });
  $('.accordion-toggle-btn').click(function () {
    if ($(this).parents('.accordion').hasClass('open')) {
      $('.accordion').removeClass('open');
    } else {
      $('.accordion').removeClass('open');
      $(this).parents('.accordion').addClass('open');
    }
  });
  $('.login-form .submit-btn').click(function (e) {
    e.preventDefault();
    submitLogin();
  });
  $('.login-form #pw').keypress(function (e) {
    if (e.which == 13) {
      e.preventDefault();
      submitLogin();
    }
  });
  $('.grabber').click(function (e) {
    e.preventDefault();
    $('.overlay').addClass('open');
  });
  $('.overlay .close').click(function (e) {
    e.preventDefault();
    $('.overlay').removeClass('open');
  });
  $('.overlay').click(function () {
    $(this).removeClass('open');
  });
});

function checkLogin () {
  var cookies = document.cookie.split(';');
  for (var i in cookies) {
    if (cookies[i] == "username=true" || cookies[i] == " username=true") return true;
  }
};
function checkScroll() {
  if ($(window).scrollTop() >= 86) $('.site-header').addClass('low');
  else $('.site-header').removeClass('low');
}
function submitLogin() {
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  if ($('#pw').val() == "Kibba") {
    document.cookie = "username=true; path=/";
    if (checkLogin()) $('body').removeClass('not-logged-in');
  } else {
    $('.login-form .feedback').addClass('open');
    $('.login-form input').addClass('nope');
    setTimeout(function () {
      $('.login-form input').removeClass('nope');
    }, 500);
  }
}
