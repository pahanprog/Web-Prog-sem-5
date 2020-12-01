var slider, timeout;
var offset;
var moving = false;

document.addEventListener("DOMContentLoaded", () => {
  slider = document.querySelector(".slide-wrapper");
  timeout = setTimeout(autoSlide, 5000);
});

function autoSlide(left = false) {
  moving = true;
  if (left) {
    var prev = slider.querySelector('.item:last-child')
    var current = slider.querySelector('.item.current')

    prev.classList.remove('next')
    prev.classList.add('current')

    prev.remove();

    slider.insertBefore(prev, slider.firstChild);

    offset = getRelativePos(current);
    slider.style.transition = "0s";
    slider.style.transform = `translate3d(-${offset.left - 15}px,0px,0px)`;
    setTimeout(() => {
        slider.style.transition = "1s";
        slider.style.transform = `translate3d(0px,0px,0px)`;
      }, 100);

    current.classList.replace('current','next')

    setTimeout(() => {
        moving = false;
      }, 1000);
  } else {
    setTimeout(flipPage, 1000);
    var next = slider.querySelector(".item.next");
    var current = slider.querySelector(".item.current");
    offset = getRelativePos(next);
    slider.style.transform = `translate3d(-${offset.left - 15}px,0px,0px)`;
    current.classList.replace("current", "prev");
    next.classList.replace("next", "current");

    var newNext = getNextSibling(next, ".item");
    newNext.classList.add("next");
  }
  timeout = setTimeout(autoSlide, 5000);
}

function getRelativePos(elm) {
  var pPos = elm.parentNode.getBoundingClientRect(),
    cPos = elm.getBoundingClientRect(),
    pos = {};

  (pos.top = cPos.top - pPos.top + elm.parentNode.scrollTop),
    (pos.right = cPos.right - pPos.right),
    (pos.bottom = cPos.bottom - pPos.bottom),
    (pos.left = cPos.left - pPos.left);

  return pos;
}

function getNextSibling(elem, selector) {
  var sibling = elem.nextElementSibling;

  while (sibling) {
    if (sibling.matches(selector)) return sibling;
    sibling = sibling.nextElementSibling;
  }
}

function flipPage() {
    var prev = document.querySelector(".slide-wrapper .item.prev");
    prev.classList.remove("prev");

    prev.remove();

    slider.style.transition = "0s";
    slider.appendChild(prev);

    slider.style.transform = `translate3d(0px,0px,0px)`;

    setTimeout(() => {
      slider.style.transition = "1s";
      moving = false;
    }, 100);
}

function arrowClick(it) {
  if (moving) {
    return;
  }
  if (it.className.includes("left")) {
    clearTimeout(timeout);
    autoSlide(true);
  } else if (it.className.includes("right")) {
    clearTimeout(timeout);
    autoSlide();
  }
}