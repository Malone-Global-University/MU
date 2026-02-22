import csv
from datetime import date
import os

# -----------------------------
# CONFIGURATION
# -----------------------------
GLOSSARY_CSV = "glossary_terms.csv"  # CSV file path
OUTPUT_DIR = "glossary_pages"        # Directory to save HTML pages

# Ensure output directory exists
os.makedirs(OUTPUT_DIR, exist_ok=True)

# -----------------------------
# HTML TEMPLATE FUNCTION
# -----------------------------
def build_html(slug, term_name, department_name, course_name,
               term_definition, why_it_matters, term_example,
               related_terms=None, upload_date=None, update_date=None):

    if related_terms is None:
        related_terms = []

    today_str = date.today().strftime("%-m/%-d/%Y")
    upload_date = upload_date or today_str
    update_date = update_date or today_str

    glossary_home_url = f"/department/corporate-science/economics-101/glossary/"
    canonical_url = f"https://maloneuniversity.org{glossary_home_url}{slug}.html"
    department_home_url = "/department/corporate-science/economics-101/home"
    course_url = department_home_url  # adjust if course URL differs

    related_terms_html = "\n".join(
        [f'        <li><a href="{url}">{name}</a></li>' for name, url in related_terms]
    )

    html_template = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <title>{term_name} | {department_name} Glossary | Malone Global University</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Definition of {term_name} in {department_name}. {term_definition[:150]}">
  <link rel="canonical" href="{canonical_url}">
  <meta property="og:title" content="{term_name} | {department_name} Glossary">
  <meta property="og:description" content="{term_definition[:150]}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="{canonical_url}">
  <meta property="og:image" content="/image/global/logo.png">
  <link rel="stylesheet" href="/component/css/main.css">
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {{"@type":"ListItem","position":1,"name":"Home","item":"/"}},
      {{"@type":"ListItem","position":2,"name":"Department","item":"/department/directory"}},
      {{"@type":"ListItem","position":3,"name":"{department_name}","item":"/department/corporate-science/home"}},
      {{"@type":"ListItem","position":4,"name":"{course_name}","item":"{course_url}"}},
      {{"@type":"ListItem","position":5,"name":"Glossary","item":"{glossary_home_url}"}},
      {{"@type":"ListItem","position":6,"name":"{term_name}","item":"{canonical_url}"}}
    ]
  }}
  </script>
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": "{term_name}",
    "description": "{term_definition}",
    "inDefinedTermSet": "{glossary_home_url}"
  }}
  </script>
</head>
<body id="top">
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
  <h1>{term_name}</h1>
  <p>{department_name} Glossary – Malone Global University</p>
</section>

<nav class="breadcrumb">
  <a href="/">Home</a>
  <a href="{department_home_url}">{department_name}</a>
  <a href="{course_url}">{course_name}</a>
  <a href="{glossary_home_url}">Glossary</a>
  <span>{term_name}</span>
</nav>

<main>
<section>
  <h2>Definition</h2>
  <p>{term_definition}</p>

  <h2>Why It Matters</h2>
  <p>{why_it_matters}</p>

  <h2>Example</h2>
  <p>{term_example}</p>

  <h2>Related Terms</h2>
  <ul>
{related_terms_html}
  </ul>

  <section>
    <a class="btn" href="{glossary_home_url}">Back to Glossary</a>
  </section>
</section>
</main>

<footer>
<p>&copy; {date.today().year} Malone Global University. Building the future, on our own terms.</p>
<p>
  <a href="https://twitter.com/MaloneGlobal" target="_blank" rel="noopener noreferrer">Twitter</a> |
  <a href="https://facebook.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer">Facebook</a> |
  <a href="https://instagram.com/maloneglobaluniversity" target="_blank" rel="noopener noreferrer">Instagram</a> |
  <a href="/terms.html">Terms</a> |
  <a href="/contact.html">Contact</a>
</p>
<p>Uploaded: {upload_date} - Updated: {update_date}</p>
</footer>

<script src="/component/script/js/main.js"></script>
</body>
</html>
"""
    return html_template

# -----------------------------
# CSV PROCESSING
# -----------------------------
def generate_pages_from_csv(csv_file):
    with open(csv_file, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            slug = row["slug"]
            term_name = row["term_name"]
            department_name = row.get("department_name", "Economics")
            course_name = row.get("course_name", "Economics 101")
            term_definition = row.get("term_definition", "")
            why_it_matters = row.get("why_it_matters", "")
            term_example = row.get("term_example", "")
            
            # Related terms stored as "name|url;name2|url2"
            related_terms_raw = row.get("related_terms", "")
            related_terms = []
            if related_terms_raw:
                for pair in related_terms_raw.split(";"):
                    name, url = pair.split("|")
                    related_terms.append((name.strip(), url.strip()))

            html_content = build_html(
                slug=slug,
                term_name=term_name,
                department_name=department_name,
                course_name=course_name,
                term_definition=term_definition,
                why_it_matters=why_it_matters,
                term_example=term_example,
                related_terms=related_terms
            )

            output_file = os.path.join(OUTPUT_DIR, f"{slug}.html")
            with open(output_file, "w", encoding="utf-8") as out:
                out.write(html_content)
            print(f"Generated {output_file}")

if __name__ == "__main__":
    generate_pages_from_csv(GLOSSARY_CSV)