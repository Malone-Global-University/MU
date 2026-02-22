import csv
import os
import json
from datetime import date
from collections import defaultdict

# ==========================
# CONFIG
# ==========================

BASE_URL = "https://maloneuniversity.org/department/corporate-science/economics-101/glossary/"
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
TERMS_FILE = os.path.join(BASE_DIR, "data", "glossary-source", "terms.csv")
DIST_DIR = os.path.join(BASE_DIR, "dist")

os.makedirs(DIST_DIR, exist_ok=True)

# Windows-safe date
today_obj = date.today()
TODAY = f"{today_obj.month}/{today_obj.day}/{today_obj.year}"

# ==========================
# UTILITIES
# ==========================

def slug_to_title(slug):
    return " ".join(word.capitalize() for word in slug.split("-"))

# ==========================
# LOAD TERMS
# ==========================

terms = {}
duplicates = set()

if not os.path.exists(TERMS_FILE):
    print("ERROR: terms.csv not found at:", TERMS_FILE)
    exit()

with open(TERMS_FILE, encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        slug = row["slug"].strip()

        if slug in terms:
            duplicates.add(slug)

        related = row.get("related", "")
        related_list = [r.strip() for r in related.split("|") if r.strip()]

        terms[slug] = related_list

if duplicates:
    print("Duplicate slugs detected:")
    for d in duplicates:
        print("  ", d)
    exit()

# ==========================
# BIDIRECTIONAL LINKING
# ==========================

for slug, rels in list(terms.items()):
    for r in rels:
        if r in terms and slug not in terms[r]:
            terms[r].append(slug)

# ==========================
# PAGE GENERATOR
# ==========================

def build_page(slug, related_terms):

    title = slug_to_title(slug)
    url = BASE_URL + slug + ".html"

    related_html = ""
    for r in sorted(set(related_terms)):
        related_html += f'<li><a href="{r}.html">{slug_to_title(r)}</a></li>\n'

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<title>{title} | Economics Glossary | Malone Global University</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Definition of {title} in economics.">
<link rel="canonical" href="{url}">

<meta property="og:title" content="{title} | Economics Glossary">
<meta property="og:type" content="article">
<meta property="og:url" content="{url}">

<link rel="stylesheet" href="/component/css/main.css">

<script type="application/ld+json">
{{
"@context":"https://schema.org",
"@type":"DefinedTerm",
"name":"{title}",
"inDefinedTermSet":"{BASE_URL}"
}}
</script>

</head>

<body>

<section class="hero">
<h1>{title}</h1>
<p>Economics Glossary – Malone Global University</p>
</section>

<main>
<section>

<h2>Definition</h2>
<p>WRITE_DEFINITION</p>

<h2>Why It Matters</h2>
<p>WRITE_IMPORTANCE</p>

<h2>Example</h2>
<p>WRITE_EXAMPLE</p>

<h2>Related Terms</h2>
<ul>
{related_html}
</ul>

</section>
</main>

<footer>
<p>&copy; 2026 Malone Global University</p>
<p>Uploaded: {TODAY} - Updated: {TODAY}</p>
</footer>

</body>
</html>
"""

# ==========================
# GENERATE PAGES
# ==========================

for slug, rels in terms.items():
    output_path = os.path.join(DIST_DIR, slug + ".html")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(build_page(slug, rels))

# ==========================
# BUILD A-Z INDEX
# ==========================

letters = defaultdict(list)

for slug in terms:
    letters[slug[0].upper()].append(slug)

index_html = "<h1>Economics Glossary</h1>\n"

for letter in sorted(letters):
    index_html += f"<h2>{letter}</h2>\n<ul>\n"
    for slug in sorted(letters[letter]):
        index_html += f'<li><a href="{slug}.html">{slug_to_title(slug)}</a></li>\n'
    index_html += "</ul>\n"

with open(os.path.join(DIST_DIR, "index.html"), "w", encoding="utf-8") as f:
    f.write(index_html)

# ==========================
# BUILD SITEMAP
# ==========================

with open(os.path.join(DIST_DIR, "sitemap.xml"), "w", encoding="utf-8") as f:
    f.write('<?xml version="1.0" encoding="UTF-8"?>\n')
    f.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n')

    for slug in terms:
        f.write(f"<url><loc>{BASE_URL}{slug}.html</loc></url>\n")

    f.write("</urlset>")

# ==========================
# SEARCH INDEX
# ==========================

search_index = [
    {"slug": slug, "title": slug_to_title(slug)}
    for slug in terms
]

with open(os.path.join(DIST_DIR, "search.json"), "w", encoding="utf-8") as f:
    json.dump(search_index, f, indent=2)

print("\nAUTOPILOT BUILD COMPLETE")
print("Pages generated:", len(terms))
print("Output directory:", DIST_DIR)