document.addEventListener("DOMContentLoaded", () => {
  fetch("/component/html/navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      const navToggle = document.getElementById("nav-toggle");
      const navMain = document.getElementById("nav-main");
      const themeToggle = document.getElementById("theme-toggle");

      navToggle.addEventListener("click", () => {
        navMain.classList.toggle("open");
      });

      themeToggle.addEventListener("click", () => {
        const isDark = document.documentElement.getAttribute("data-theme") === "dark";
        document.documentElement.setAttribute("data-theme", isDark ? "light" : "dark");
        themeToggle.setAttribute("aria-pressed", String(!isDark));
      });
    })
    .catch(err => console.error("Navbar load failed:", err));
});
