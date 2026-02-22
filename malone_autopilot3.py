import csv
import json
import os
import re
from datetime import date

# -----------------------------
# CONFIGURATION
# -----------------------------
INPUT_FILE = "data/glossary-source/glossary-terms.json"
OUTPUT_DIR = "glossary-pages"

os.makedirs(OUTPUT_DIR, exist_ok=True)

# -----------------------------
# HELPER FUNCTIONS
# -----------------------------
def slugify(text):
    text = text.lower().strip()
    text = re.sub(r"[^\w\s-]", "", text)
    text = re.sub(r"[\s_]+", "-", text)
    text = re.sub(r"-{2,}", "-", text)
    return text.strip("-")


def build_html(slug, term_name, department_name, course_name,
               term_definition, why_it_matters, term_example,
               related_terms=None, upload_date=None, update_date=None):

    if related_terms is None:
        related_terms = []

    # Windows-safe date formatting
    today = date.today()
    today_str = f"{today.month}/{today.day}/{today.year}"

    upload_date = upload_date or today_str
    update_date = update_date or today_str

    glossary_home_url = "/department/corporate-science/economics-101/glossary/"
    canonical_url = f"https://maloneuniversity.org{glossary_home_url}{slug}.html"
    department_home_url = "/department/corporate-science/home"
    course_url = department_home_url

    # Safe related terms rendering
    related_terms_html = ""
    if isinstance(related_terms, list):
        items = []
        for item in related_terms:
            if isinstance(item, dict):
                name = item.get("name", "")
                url = item.get("url", "#")
                items.append(
                    f'        <li><a href="{url}">{name}</a></li>'
                )
        related_terms_html = "\n".join(items)

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
</head>
<body id="top">

<section class="hero">
  <h1>{term_name}</h1>
  <p>{department_name} Glossary – Malone Global University</p>
</section>

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
<p>&copy; {today.year} Malone Global University.</p>
<p>Uploaded: {upload_date} - Updated: {update_date}</p>
</footer>

</body>
</html>
"""
    return html_template


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
            if isinstance(data, dict) and "terms" in data:
                terms = data["terms"]
            else:
                terms = data
    else:
        raise ValueError("Unsupported input file format. Use CSV or JSON.")

    for term in terms:

        term_name = term.get("term_name")
        if not term_name:
            print("Skipping entry with missing term_name")
            continue

        slug = term.get("slug") or slugify(term_name)
        department_name = term.get("department_name", "Economics")
        course_name = term.get("course_name", "Economics 101")
        term_definition = term.get("term_definition", "")
        why_it_matters = term.get("why_it_matters", "")
        term_example = term.get("term_example", "")
        related_terms = term.get("related_terms", [])

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


# -----------------------------
# RUN SCRIPT
# -----------------------------
if __name__ == "__main__":
    generate_pages(INPUT_FILE)