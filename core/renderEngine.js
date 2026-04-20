import { getComponent } from "/core/componentRegistry.js"
import "/core/registry.js"

function getRoutePath() {
  const path = window.location.pathname
  return path.endsWith("/") ? path + "home" : path
}

async function loadPageData(route) {
  const pages = await fetch("/api/pages/index.json").then(r => r.json())

  const page = pages.find(p => p.path === route)

  if (!page) throw new Error("Page not found")

  return await fetch(page.file).then(r => r.json())
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