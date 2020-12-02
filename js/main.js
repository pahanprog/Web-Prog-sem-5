const mobileMenu = document.querySelector(".mobile_menu");
const burger = document.querySelector("header .burger");

function toggleMenu() {
  mobileMenu.classList.toggle("active");
  burger.classList.toggle("active");
  if (mobileMenu.className.includes("active")) {
    document.querySelector("body").style.overflowY = "hidden";
  } else {
    document.querySelector("body").style.overflowY = "unset";
  }
}

function dropdown(it) {
  it.closest(".switcher").classList.toggle("open");
}

function getUserCount() {
  const userCount = Math.floor(Math.random() * (900 - 100)) + 100;
  const counter1 = document.querySelector('.header_options .count')
  const counter2 = document.querySelector(".mobile_menu .count");

  counter1.innerHTML = `000${userCount}`
  counter2.innerHTML = `000${userCount}`;
}

document.addEventListener("DOMContentLoaded", () => {
  getUserCount();
});

document.addEventListener("click", (e) => {
  if (
    !(
      e.target == document.querySelector(".switcher .title") ||
      e.target == document.querySelector("#sel-lang") ||
      e.target == document.querySelector(".switcher .arrow")
    )
  ) {
    document.querySelector(".mobile_menu .switcher").classList.remove("open");
    document.querySelector(".header_options .switcher").classList.remove("open");
  }
});

function headerDropdow(it) {
  it.classList.toggle('active')
  document.querySelector('header .header_options').classList.toggle('active')
}
