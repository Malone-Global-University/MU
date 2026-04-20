import express from "express"
import fs from "fs"
import path from "path"

const app = express()

const ROOT = path.resolve()
const PAGES_DIR = path.join(ROOT, "data/pages")

app.use(express.json())

/**
 * Recursively scan directory for JSON pages
 */
function scanPages(dir, baseUrl = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  let pages = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      pages = pages.concat(scanPages(fullPath, baseUrl + "/" + entry.name))
    }

    if (entry.isFile() && entry.name.endsWith(".json")) {
      const routeName = entry.name.replace(".json", "")

      const route = (baseUrl + "/" + routeName).replaceAll("\\", "/")

      pages.push({
        name: routeName,
        path: route,
        file: "/data/pages" + route + ".json"
      })
    }
  }

  return pages
}

/**
 * API endpoint: auto-generated page registry
 */
app.get("/api/pages", (req, res) => {
  try {
    const pages = scanPages(PAGES_DIR)
    res.json(pages)
  } catch (err) {
    res.status(500).json({ error: "Failed to scan pages" })
  }
})

/**
 * Optional: serve static project root
 */
app.use(express.static(ROOT))

const PORT = 8000
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`)
})