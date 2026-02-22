import csv
import json
import os
import re
from datetime import date
import html

# -----------------------------
# CONFIGURATION
# -----------------------------
INPUT_FILE = "data/glossary-source/glossary-terms.json"
OUTPUT_DIR = "glossary-pages"
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
  <meta name="description" content="Definition of {{TERM_NAME}} in {{DEPARTMENT_NAME}}. {{SHORT_DESCRIPTION}}">

  <!-- ========== CANONICAL URL ========== -->
  <link rel="canonical" href="{{CANONICAL_URL}}">

  <!-- ========== OPEN GRAPH ========== -->
  <meta property="og:title" content="{{TERM_NAME}} | {{DEPARTMENT_NAME}} Glossary">
  <meta property="og:description" content="{{SHORT_DESCRIPTION}}">
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
      {"@type":"ListItem","position":3,"name":"{{DEPARTMENT_CATEGORY}}","item":"{{DEPARTMENT_CATEGORY_URL}}"},
      {"@type":"ListItem","position":4,"name":"{{COURSE_NAME}}","item":"{{COURSE_URL}}"},
      {"@type":"ListItem","position":5,"name":"Glossary","item":"{{GLOSSARY_HOME_URL}}"},
      {"@type":"ListItem","position":6,"name":"{{TERM_NAME}}","item":"{{TERM_PAGE_URL}}"}
    ]
  }
  </script>

  <!-- ========== STRUCTURED DATA: DEFINED TERM ========== -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": "{{TERM_NAME}}",
    "description": "{{TERM_DESCRIPTION}}",
    "inDefinedTermSet": "{{GLOSSARY_HOME_URL}}"
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
    <a href="{{DEPARTMENT_HOME_URL}}">{{DEPARTMENT_NAME}}</a>
    <a href="{{COURSE_URL}}">{{COURSE_NAME}}</a>
    <a href="{{GLOSSARY_HOME_URL}}">Glossary</a>
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
        <a class="btn" href="{{GLOSSARY_HOME_URL}}">Back to Glossary</a>
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
    <p>Uploaded: {{UPLOAD_DATE}} - Updated: {{UPDATE_DATE}}</p>
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


def render_related_terms(template, related_terms):
    pattern = re.search(r"{{#RELATED_TERMS}}(.*?){{/RELATED_TERMS}}", template, re.DOTALL)
    if not pattern:
        return template

    block = pattern.group(1)
    rendered = ""

    for item in related_terms:
        name = html.escape(item.get("name", ""))
        url = item.get("url", "#")
        temp = block.replace("{{NAME}}", name).replace("{{URL}}", url)
        rendered += temp

    return template.replace(pattern.group(0), rendered)


def render_template(context, related_terms):
    output = HTML_TEMPLATE

    # Replace simple placeholders
    for key, value in context.items():
        output = output.replace(f"{{{{{key}}}}}", value)

    # Render related terms block
    output = render_related_terms(output, related_terms)

    return output


# -----------------------------
# INPUT PROCESSING
# -----------------------------
def generate_pages(input_file):

    ext = os.path.splitext(input_file)[1].lower()

    if ext == ".csv":
        with open(input_file, newline="", encoding="utf-8") as f:
            reader = csv.DictReader(f)
            terms = list(reader)
    elif ext == ".json":
        with open(input_file, encoding="utf-8") as f:
            data = json.load(f)
            terms = data["terms"] if isinstance(data, dict) and "terms" in data else data
    else:
        raise ValueError("Unsupported file format.")

    today = date.today()
    today_str = f"{today.month}/{today.day}/{today.year}"

    for term in terms:

        term_name = term.get("term_name")
        if not term_name:
            continue

        slug = term.get("slug") or slugify(term_name)

        department_name = term.get("department_name", "Economics")
        department_category = term.get("department_category", "Corporate Science")
        course_name = term.get("course_name", "Economics 101")

        glossary_home = "/department/corporate-science/economics-101/glossary/"
        department_home = "/department/corporate-science/home"
        course_url = department_home

        canonical_url = f"{BASE_URL}{glossary_home}{slug}.html"

        related_terms = term.get("related_terms", [])

        context = {
            "TERM_NAME": html.escape(term_name),
            "DEPARTMENT_NAME": html.escape(department_name),
            "DEPARTMENT_CATEGORY": html.escape(department_category),
            "DEPARTMENT_CATEGORY_URL": department_home,
            "COURSE_NAME": html.escape(course_name),
            "COURSE_URL": course_url,
            "GLOSSARY_HOME_URL": glossary_home,
            "TERM_PAGE_URL": canonical_url,
            "TERM_DEFINITION": html.escape(term.get("term_definition", "")),
            "TERM_DESCRIPTION": html.escape(term.get("term_definition", "")),
            "SHORT_DESCRIPTION": html.escape(term.get("term_definition", "")[:150]),
            "WHY_IT_MATTERS": html.escape(term.get("why_it_matters", "")),
            "TERM_EXAMPLE": html.escape(term.get("term_example", "")),
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


if __name__ == "__main__":
    generate_pages(INPUT_FILE)