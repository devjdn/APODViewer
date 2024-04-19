window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 75) {
    document.querySelector("header").style.height = "75px"
    document.querySelector(".header-content").style.flexDirection = "row";
    document.querySelector(".header-content").style.justifyContent = "space-between";
    document.querySelector("h1").style.fontSize = "1.5em";
    document.querySelector(".title-description-wrapper").style.display = "none";

  } else {
    document.querySelector("header").style.height = "300px";
    document.querySelector(".header-content").style.flexDirection = "column";
    document.querySelector("h1").style.fontSize = "3.5em";
    document.querySelector(".title-description-wrapper").style.display = "block";
  }
}