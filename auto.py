import json
import os
import re
from datetime import date
import html

# -----------------------------
# CONFIGURATION
# -----------------------------
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

INPUT_FILE = os.path.join(
    BASE_DIR,
    "data",
    "glossary-source",
    "glossary-terms.json"
)

OUTPUT_DIR = os.path.join(BASE_DIR, "glossary-pages")
BASE_URL = "https://maloneuniversity.org"

os.makedirs(OUTPUT_DIR, exist_ok=True)

# -----------------------------
# TEMPLATE
# -----------------------------
HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
  <!-- ========== BASIC PAGE SETTINGS ========== -->
  <title>{{TERM_NAME}} | {{DEPARTMENT_NAME}} Glossary | Malone Global University</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- ========== SEO META DESCRIPTION ========== -->
  <meta name="description" content="Malone Global University Department of Economics Glossary definition entry of {{TERM_NAME}}.">

  <!-- ========== CANONICAL URL ========== -->
  <link rel="canonical" href="{{CANONICAL_URL}}">

  <!-- ========== OPEN GRAPH ========== -->
  <meta property="og:title" content="{{TERM_NAME}} | {{DEPARTMENT_NAME}} Glossary">
  <meta property="og:description" content="Malone Global University Department of Economics Glossary definition entry of {{TERM_NAME}}.">
  <meta property="og:type" content="article">
  <meta property="og:url" content="{{CANONICAL_URL}}">
  <meta property="og:image" content="/image/global/logo.png">

  <link rel="stylesheet" href="/component/css/main.css">

  <!-- ========== STRUCTURED DATA: BREADCRUMBS ========== -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type":"ListItem","position":1,"name":"Home","item":"/"},
      {"@type":"ListItem","position":2,"name":"Department","item":"/department/directory"},
      {"@type":"ListItem","position":3,"name":"Corporate Science","item":"/department/corporate-science/home"},
      {"@type":"ListItem","position":4,"name":"Economics 101","item":"/department/corporate-science/economics-101/home"},
      {"@type":"ListItem","position":5,"name":"Glossary","item":"/department/corporate-science/economics-101/glossary/home"},
      {"@type":"ListItem","position":6,"name":"{{TERM_NAME}}","item":"{{CANONICAL_URL}}"}
    ]
  }
  </script>

  <!-- ========== STRUCTURED DATA: DEFINED TERM ========== -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": "{{TERM_NAME}}",
    "description": "Malone Global University Department of Economics Glossary definition entry of {{TERM_NAME}}.",
    "inDefinedTermSet": "https://maloneuniversity.org/department/corporate-science/economics-101/glossary/"
  }
  </script>
</head>

<body id="top">

  <!-- ========== HEADER ========== -->
  <header class="site-header">
    <div class="logo-container">
      <a href="/"><img src="/image/global/logo.png" alt="Malone Global University Logo" class="logo-img"></a>
      <span class="school-name">Malone Global University</span>
    </div>

    <nav aria-label="Main Navigation">
      <ul class="nav-menu" id="nav-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/mission">Mission</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/community/resources">Community</a></li>
        <li><a href="/library/directory">Library</a></li>
        <li><a href="/department/directory">Department</a></li>
        <li><a href="/community/devblog/update">DevBlog</a></li>
        <li><button id="theme-toggle" title="Toggle theme" aria-pressed="false">🌙</button></li>
      </ul>
    </nav>

    <div class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" role="button" tabindex="0">
      <span></span><span></span><span></span>
    </div>
  </header>

  <section class="hero">
    <h1>{{TERM_NAME}}</h1>
    <p>{{DEPARTMENT_NAME}} Glossary – Malone Global University</p>
  </section>

  <!-- ========== BREADCRUMB NAVIGATION ========== -->
  <nav class="breadcrumb">
       <a href="/">Home</a>
    <a href="/department/directory">Department</a>
    <a href="/department/corporate-science/home">Corporate Science</a>
    <a href="/department/corporate-science/economics-101/home">Economics</a>
    <a href="/department/corporate-science/economics-101/glossary/">Glossary</a>
    <span>{{TERM_NAME}}</span>
  </nav>

  <main>
    <section>
      <h2>Definition</h2>
      <p>{{TERM_DEFINITION}}</p>

      <h2>Why It Matters</h2>
      <p>{{WHY_IT_MATTERS}}</p>

      <h2>Example</h2>
      <p>{{TERM_EXAMPLE}}</p>

      <h2>Related Terms</h2>
      <ul>
        {{#RELATED_TERMS}}
        <li><a href="{{URL}}">{{NAME}}</a></li>
        {{/RELATED_TERMS}}
      </ul>

      <section>
        <a class="btn" href="./home">Back to Glossary</a>
      </section>
    </section>
  </main>

  <!-- ========== FOOTER ========== -->
  <footer>
    <p>&copy; {{CURRENT_YEAR}} Malone Global University. Building the future, on our own terms.</p>
    <p>
      <a href="https://twitter.com/MaloneGlobal" target="_blank" rel="noopener noreferrer">Twitter</a> |
      <a href="https://facebook.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer">Facebook</a> |
      <a href="https://instagram.com/maloneglobaluniversity" target="_blank" rel="noopener noreferrer">Instagram</a> |
      <a href="/terms.html">Terms</a> |
      <a href="/contact.html">Contact</a>
    </p>
    <p>Uploaded: 2/21/2026 - Updated: {{UPDATE_DATE}}</p>
  </footer>

<script src="/component/script/js/main.js"></script>
</body>
</html>
"""


# -----------------------------
# HELPERS
# -----------------------------

def slugify(text):
    text = text.lower().strip()
    text = re.sub(r"[^\w\s-]", "", text)
    text = re.sub(r"[\s_]+", "-", text)
    text = re.sub(r"-{2,}", "-", text)
    return text.strip("-")


def format_term_name(slug):
    words = slug.split("-")
    formatted = []

    for w in words:
        if w.isupper():
            formatted.append(w)
        else:
            formatted.append(w.capitalize())

    return " ".join(formatted)


def build_related_links(raw_related, glossary_home):
    related_links = []

    for slug in raw_related:
        clean_slug = slug.strip()

        related_links.append({
            "name": format_term_name(clean_slug),
            "url": f"{glossary_home}{clean_slug}.html"
        })

    return related_links


def render_related_terms(template, related_terms):
    pattern = re.search(r"{{#RELATED_TERMS}}(.*?){{/RELATED_TERMS}}", template, re.DOTALL)
    if not pattern:
        return template

    block = pattern.group(1)
    rendered = ""

    for item in related_terms:
        temp = block.replace("{{NAME}}", html.escape(item["name"]))
        temp = temp.replace("{{URL}}", item["url"])
        rendered += temp

    return template.replace(pattern.group(0), rendered)


def render_template(context, related_terms):
    output = HTML_TEMPLATE

    for key, value in context.items():
        output = output.replace(f"{{{{{key}}}}}", value)

    output = render_related_terms(output, related_terms)

    return output


# -----------------------------
# GENERATOR
# -----------------------------
def generate_pages():

    if not os.path.exists(INPUT_FILE):
        print("ERROR: JSON file not found at:", INPUT_FILE)
        return

    with open(INPUT_FILE, encoding="utf-8") as f:
        data = json.load(f)

    terms = data["terms"] if isinstance(data, dict) and "terms" in data else data

    today = date.today()
    today_str = f"{today.month}/{today.day}/{today.year}"

    glossary_home = "/department/corporate-science/economics-101/glossary/"
    department_name_default = "Economics"

    for term in terms:

        term_name = term.get("term_name")
        if not term_name:
            continue

        slug = term.get("slug") or slugify(term_name)

        department_name = term.get("department_name", department_name_default)

        canonical_url = f"{BASE_URL}{glossary_home}{slug}.html"

        # Transform related_terms → link objects
        raw_related = term.get("related_terms", [])
        related_terms = build_related_links(raw_related, glossary_home)

        context = {
            "TERM_NAME": html.escape(term_name),
            "DEPARTMENT_NAME": html.escape(department_name),
            "TERM_DEFINITION": html.escape(term.get("term_definition", "")),
            "WHY_IT_MATTERS": html.escape(term.get("why_it_matters", "")),
            "TERM_EXAMPLE": html.escape(term.get("term_example", "")),
            "SHORT_DESCRIPTION": html.escape(term.get("term_definition", "")),
            "CANONICAL_URL": canonical_url,
            "CURRENT_YEAR": str(today.year),
            "UPLOAD_DATE": term.get("upload_date", today_str),
            "UPDATE_DATE": term.get("update_date", today_str),
        }

        html_content = render_template(context, related_terms)

        output_file = os.path.join(OUTPUT_DIR, f"{slug}.html")

        with open(output_file, "w", encoding="utf-8") as f:
            f.write(html_content)

        print(f"Generated {output_file}")


# -----------------------------
# ENTRY POINT
# -----------------------------
if __name__ == "__main__":
    generate_pages()