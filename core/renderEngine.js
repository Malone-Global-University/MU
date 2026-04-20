import { getComponent } from "/core/componentRegistry.js"
import "/core/registry.js"

function getRoutePath() {
  const path = window.location.pathname
  return path.endsWith("/") ? path + "home" : path
}

// renderEngine.js

async function loadPageData(pageId) {
  try {
    const response = await fetch(`/api/pages/${pageId}`);
    if (!response.ok) {
      // Throw a specific error if the page is missing (404)
      if (response.status === 404) throw new Error("Page not found");
      throw new Error("Server error");
    }
    return await response.json();
  } catch (err) {
    console.error("Render engine error:", err);
    // Optionally redirect to a 404 UI instead of crashing the boot process
    return null; 
  }
}

function setMeta(meta) {
  if (!meta) return

  document.title = meta.title || ""

  const desc = document.querySelector("meta[name='description']")
  if (desc) desc.setAttribute("content", meta.description || "")

  const canon = document.querySelector("link[rel='canonical']")
  if (canon) canon.setAttribute("href", meta.canonical || "")
}

function render(name, data) {
  const fn = getComponent(name)
  if (!fn) return
  fn(data)
}

async function boot() {
  try {
    const route = getRoutePath()
    const page = await loadPageData(route)

    setMeta(page.meta)

    render("header", page.header)
    render("hero", page.hero)
    render("breadcrumb", page.breadcrumb)
    render("index", page.index)
    render("sections", page.sections)
    render("bottomNav", page.navigation)
    render("footer", page.footer)
  } catch (err) {
    console.error("Render engine error:", err)
  }
}

const isPreview = window.location.search.includes("preview=true")

if (!isPreview) {
  boot()
}

export function renderPage(page) {
  setMeta(page.meta)

  render("header", page.header)
  render("hero", page.hero)
  render("breadcrumb", page.breadcrumb)
  render("index", page.index)
  render("bottomNav", page.navigation)
  render("footer", page.footer)
}