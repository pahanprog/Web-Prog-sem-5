var sideBar;
var windowH;

document.addEventListener("DOMContentLoaded", () => {
  sideBar = document.querySelector(".side_menu");
  windowH = document.querySelector("html").offsetHeight;
});

window.addEventListener("scroll", () => {
  moveSideBar();
});

function moveSideBar() {
  var yPos = window.pageYOffset;
  if (yPos <= 0) {
    yPos = 0;
  }
  sideBar.style.transform = `translateY(${yPos - 10}px)`;
}

window.onresize = () => {
  windowH = document.querySelector("html").offsetHeight;
};
