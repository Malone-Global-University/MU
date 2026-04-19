import { renderPage } from "/core/renderEngine.js"

let currentPath = null
let currentData = null

async function loadFileTree() {
  const res = await fetch("/api/pages")
  const files = await res.json()

  const panel = document.getElementById("filePanel")

  panel.innerHTML = files.map(f =>
    `<div class="file" data-path="${f.path}">
      ${f.name}
    </div>`
  ).join("")

  document.querySelectorAll(".file").forEach(el => {
    el.onclick = () => openFile(el.dataset.path)
  })
}

async function openFile(path) {
  currentPath = path

  const res = await fetch(path)
  currentData = await res.json()

  renderEditor(currentData)
  renderPreview()
}

function renderEditor(data) {
  const panel = document.getElementById("editorPanel")

  panel.innerHTML = ""

  for (const key in data) {
    const wrapper = document.createElement("div")

    const label = document.createElement("label")
    label.textContent = key

    const input = document.createElement("textarea")
    input.value = JSON.stringify(data[key], null, 2)

    input.oninput = () => {
      try {
        currentData[key] = JSON.parse(input.value)
        renderPreview()
      } catch {}
    }

    wrapper.appendChild(label)
    wrapper.appendChild(input)

    panel.appendChild(wrapper)
  }
}

function renderPreview() {
  const frame = document.getElementById("previewFrame")

  // SET FLAG BEFORE PAGE LOADS
  frame.onload = () => {
    const win = frame.contentWindow

    win.renderPage(currentData)
  }

  // inject preview flag BEFORE scripts run
  frame.src = "/core/page.html?preview=true"
}

async function save() {
  await fetch("/api/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      path: currentPath,
      data: currentData
    })
  })
}

document.addEventListener("keydown", e => {
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault()
    save()
  }
})

loadFileTree()