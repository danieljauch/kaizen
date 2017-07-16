$(document).ready(function () {
  if (checkLogin) $('body').removeClass('not-logged-in');
  checkScroll();
  $('.mobile-menu-toggle').click(function () {
    $('.menu').toggleClass('open');
  });
  $(document).scroll(function () {
    checkScroll();
  });
  $('.login-form .submit-btn').click(function (e) {
    e.preventDefault();
    if ($('#un').val() == "Kibba") {
      document.cookie = "username=true; path=/";
    }
  });
});

var checkLogin = function () {
  var cookies = document.cookie.split(';'),
    cookie;
  for (var i in cookies) {
    cookie = cookies[i].split('=');
    if (cookie[0] == "username" && cookie[1] == "true") return true;
  }
};
function checkScroll() {
  if ($(window).scrollTop() >= 86) {
    $('.site-header').addClass('low');
  } else {
    $('.site-header').removeClass('low');
  }
}
