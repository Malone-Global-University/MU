const express = require("express")
const path = require("path")
const fs = require("fs")

const app = express()
const base = path.join(__dirname, "..")

// ======================
// STATIC FILES
// ======================

app.use(express.static(path.join(base, "public")))
app.use("/core", express.static(path.join(base, "core")))

// ======================
// ROUTE → JSON MAPPING
// ======================

function resolveRouteToFile(routePath) {
  const parts = routePath.split("/").filter(Boolean)
  const fileName = parts[parts.length - 1] || "home"
  return path.join(base, "data", `${fileName}.json`)
}

// ✅ FIX: Use RegExp route instead of broken wildcard syntax
app.get(/^\/api\/pages\/(.*)/, (req, res) => {
  const routePath = req.params[0] || ""

  const filePath = resolveRouteToFile(routePath)

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "Page not found" })
  }

  const json = fs.readFileSync(filePath, "utf-8")
  res.setHeader("Content-Type", "application/json")
  res.send(json)
})

// ======================
// SPA FALLBACK
// ======================

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(base, "public", "page.html"))
})

// ======================
// START SERVER
// ======================

app.listen(8000, () => {
  console.log("Running on http://localhost:8000")
})