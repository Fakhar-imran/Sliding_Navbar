let menuBtn = document.querySelector(".fa-bars")
let mobNav = document.querySelector(".mobNav")
let closeBtn = document.querySelector(".fa-close");



menuBtn.onclick = () => {
mobNav.classList.add("active")
};

closeBtn.onclick = () => {
    mobNav.classList.remove("active")
};

window.addEventListener("resize", () => {
  if (window.innerWidth > 600) {
    mobNav.classList.remove("active");
  }
});

