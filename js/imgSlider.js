const slider = document.querySelector(".img_slider");
const imgCount =
  document.querySelectorAll(".img_slider .img_wrapper").length - 1;
const actions = document.querySelector(".img_slider_wrapper .actions");
var imgIndex = 0;

function imgSliderArrowClick(it) {
  if (it.className.includes("left")) {
    if (imgIndex == 0) {
      imgIndex = 2;
    } else {
      imgIndex--;
    }
  } else {
    if (imgIndex == 2) {
      imgIndex = 0;
    } else {
      imgIndex++;
    }
  }

  slider.style.transform = `translateX(-${imgIndex * 100}%)`;
}

slider.addEventListener("click", () => {
  toggleFullscreen();
});

actions.addEventListener("click", () => {
  toggleFullscreen();
});

function toggleFullscreen() {
  slider.parentElement.classList.toggle("fullscreen");
  if (document.querySelector("body").style.overflow == "hidden") {
    document.querySelector("body").style.overflow = "unset";
  } else {
    document.querySelector("body").style.overflow = "hidden";
  }
}
