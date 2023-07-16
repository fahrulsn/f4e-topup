const navLeft = document.querySelector(".nav_left");
document.querySelector("#hamburg").onclick = () => {
  navLeft.classList.toggle("active");
};

const hamburg = document.querySelector("#hamburg");
document.addEventListener("click", (e) => {
  if (!hamburg.contains(e.target) && !navLeft.contains(e.target)) {
    navLeft.classList.remove("active");
  }
});

const searchBox = document.querySelector(".search-box");

document.querySelector(".search-icon").onclick = () => {
  searchBox.classList.toggle("active");
};
console.log(searchBox);
