function checkScroll(){$(window).scrollTop()>=86?$(".site-header").addClass("low"):$(".site-header").removeClass("low")}$(document).ready(function(){checkScroll(),$(".mobile-menu-toggle").click(function(){$(".menu").toggleClass("open")}),$(document).scroll(function(){checkScroll()})});