let menuBtn = document.querySelector(".fa-bars")
let mobNav = document.querySelector(".mobNav")
let closeBtn = document.querySelector(".fa-close");
let overlay = document.getElementById("overlay");



menuBtn.onclick = () => {
mobNav.classList.add("active")
overlay.classList.add("active")
};

closeBtn.onclick = () => {
    mobNav.classList.remove("active")
    overlay.classList.remove("active")
};

window.addEventListener("resize", () => {
  if (window.innerWidth > 600) {
    mobNav.classList.remove("active");
    overlay.classList.remove("active")
  }
});

