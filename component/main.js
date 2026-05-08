(function() {
  const root = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");
  const navLinks = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");

  // load saved theme or default to dark
  const saved = localStorage.getItem("theme-preference") || "dark";
  setTheme(saved);

  toggleBtn.addEventListener("click", () => {
    const current = localStorage.getItem("theme-preference") || "dark";
    const next = current === "dark" ? "light" : "dark";
    setTheme(next);
  });

  function setTheme(mode) {
    root.classList.remove("light", "dark");
    root.classList.add(mode);
    localStorage.setItem("theme-preference", mode);
    updateIcon(mode);
    toggleBtn.setAttribute("aria-pressed", mode === "dark");
  }

  function updateIcon(mode) {
    toggleBtn.textContent = mode === "light" ? "☀️" : "🌙";
  }

  // ------------------------------
  // MOBILE NAV + HAMBURGER ANIMATION
  // ------------------------------
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    navToggle.classList.toggle("active");   // <-- ADDED
  });

  navToggle.addEventListener("keypress", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      navLinks.classList.toggle("show");
      navToggle.classList.toggle("active"); // <-- ADDED
    }
  });
})();


function titleCaseSlug(slug) {
  const specialNames = {
    "mgu": "MGU",
    "k-12": "K-12",
    "html": "HTML",
    "css": "CSS",
    "js": "JavaScript",
    "ai": "AI",
    "pdf": "PDF",
    "docx": "DOCX",
    "ode": "ODE",
    "pde": "PDE"
  };

  if (specialNames[slug]) return specialNames[slug];

  return slug
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, char => char.toUpperCase());
}

function buildBreadcrumbs() {
  const breadcrumb = document.getElementById("breadcrumb");
  if (!breadcrumb) return;

  const parts = window.location.pathname
    .split("/")
    .filter(Boolean)
    .filter(part => part !== "index.html");

  let path = "/";

  const items = [`<li><a href="/">Home</a></li>`];

  parts.forEach((part, index) => {
    path += part + "/";
    const name = titleCaseSlug(part);
    const isLast = index === parts.length - 1;

    if (isLast) {
      items.push(`<li aria-current="page">${name}</li>`);
    } else {
      items.push(`<li><a href="${path}">${name}</a></li>`);
    }
  });

  breadcrumb.innerHTML = `<ol>${items.join("")}</ol>`;
}

document.addEventListener("DOMContentLoaded", buildBreadcrumbs);