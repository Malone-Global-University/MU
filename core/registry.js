import { registerComponent } from "/core/componentRegistry.js"

/* =========================
   HEADER
========================= */

function header(data) {
  const mount = document.getElementById("headerMount")
  if (!mount || !data) return

  const navItems = (data.nav || []).map(item =>
    `<li><a href="${item.href}">${item.label}</a></li>`
  ).join("")

  mount.innerHTML = `
    <header class="site-header">
      <div class="logo-container">
        <a href="/">
          <img src="${data.logo}" alt="Logo" class="logo-img">
        </a>
        <span class="school-name">${data.brand}</span>
      </div>

      <nav aria-label="Main Navigation">
        <ul class="nav-menu">
          ${navItems}
          <li>
            <button id="theme-toggle">Theme</button>
          </li>
        </ul>
      </nav>
    </header>
  `
}

registerComponent("header", header)


/* =========================
   HERO
========================= */

function hero(data) {
  const mount = document.getElementById("heroMount")
  if (!mount || !data) return

  mount.innerHTML = `
    <section class="hero">
      <h1>${data.title}</h1>
      <p>${data.description}</p>
    </section>
  `
}

registerComponent("hero", hero)


/* =========================
   BREADCRUMB
========================= */

function breadcrumb(data) {
  const mount = document.getElementById("breadcrumbMount")
  if (!mount || !Array.isArray(data)) return

  const trail = data.map((item, index) => {
    if (item.href) {
      return `<a href="${item.href}">${item.label}</a>`
    }
    return `<span>${item.label}</span>`
  }).join(" / ")

  mount.innerHTML = `
    <nav class="breadcrumb" aria-label="Breadcrumb">
      ${trail}
    </nav>
  `
}

registerComponent("breadcrumb", breadcrumb)


/* =========================
   INDEX (PRIMARY CONTENT)
========================= */

function index(data) {
  const mount = document.getElementById("indexMount")
  if (!mount || !data) return

  const items = (data.items || []).map(item => `
    <li>
      <a href="${item.href}">
        <h3>${item.title}</h3>
      </a>
      <p>${item.description}</p>
    </li>
  `).join("")

  mount.innerHTML = `
    <section class="directory">
      <h2>${data.title}</h2>
      <ul class="link-list">
        ${items}
      </ul>
    </section>
  `
}

registerComponent("index", index)


/* =========================
   BOTTOM NAV
========================= */

function bottomNav(data) {
  const mount = document.getElementById("bottomNavMount")
  if (!mount || !data) return

  mount.innerHTML = `
    <section class="bottom-nav">
      ${data.previous ? `<a href="${data.previous}">Previous</a>` : ""}
      ${data.next ? `<a href="${data.next}">Next</a>` : ""}
    </section>
  `
}

registerComponent("bottomNav", bottomNav)


/* =========================
   FOOTER
========================= */

function footer(data) {
  const mount = document.getElementById("footerMount")
  if (!mount || !data) return

  mount.innerHTML = `
    <footer>
      <p>${data.text || ""}</p>
      <p>Updated: ${data.updated || ""}</p>
    </footer>
  `
}

registerComponent("footer", footer)