function checkLogin(){var e=document.cookie.split(";");for(var o in e)if("username=true"==e[o]||" username=true"==e[o])return!0}function checkScroll(){$(window).scrollTop()>=86?$(".site-header").addClass("low"):$(".site-header").removeClass("low")}function submitLogin(){document.cookie="username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;","Kibba"==$("#pw").val()?(document.cookie="username=true; path=/",checkLogin()&&$("body").removeClass("not-logged-in")):($(".login-form .feedback").addClass("open"),$(".login-form input").addClass("nope"),setTimeout(function(){$(".login-form input").removeClass("nope")},500))}$(document).ready(function(){checkLogin()&&$("body").removeClass("not-logged-in"),checkScroll(),window.sr=ScrollReveal();var e={origin:"top",distance:"2rem",delay:100,duration:500,easing:"cubic-bezier(.5, .08, .24, 1)",scale:1};sr.reveal(".front-flex-wrapper",e,100),sr.reveal(".page-content-item",e,100),$(".image-list a").colorbox({maxWidth:"100%"}),$(".mobile-menu-toggle").click(function(){$(".menu").toggleClass("open")}),$(document).scroll(function(){checkScroll()}),$(".accordion-toggle-btn").click(function(){$(this).parents(".accordion").hasClass("open")?$(".accordion").removeClass("open"):($(".accordion").removeClass("open"),$(this).parents(".accordion").addClass("open"))}),$(".login-form .submit-btn").click(function(e){e.preventDefault(),submitLogin()}),$(".login-form #pw").keypress(function(e){13==e.which&&(e.preventDefault(),submitLogin())})});