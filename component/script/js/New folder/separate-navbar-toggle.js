const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  navToggle.classList.toggle("active");
});

navToggle.addEventListener("keypress", (e) => {
  if(e.key === "Enter" || e.key === " ") {
    navLinks.classList.toggle("show");
    navToggle.classList.toggle("active");
  }
});
