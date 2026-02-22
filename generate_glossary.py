from datetime import date

# ========= CONFIG =========

BASE_URL = "https://maloneuniversity.org/department/corporate-science/economics-101/glossary/"
OUTPUT_FOLDER = "./"   # change if needed


# ========= UTILITIES =========

def slug_to_title(slug: str) -> str:
    return " ".join(word.capitalize() for word in slug.split("-"))

def today():
    return date.today().strftime("%-m/%-d/%Y")


# ========= HTML BUILDER =========

def build_html(slug):

    title = slug_to_title(slug)
    url = BASE_URL + slug + ".html"
    today_date = today()

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>

<title>{title} | Economics Glossary | Malone Global University</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<meta name="description" content="Definition of {title} in economics.">

<link rel="canonical" href="{url}">

<meta property="og:title" content="{title} | Economics Glossary">
<meta property="og:description" content="Definition and explanation of the {title} in economics.">
<meta property="og:type" content="article">
<meta property="og:url" content="{url}">
<meta property="og:image" content="https://maloneuniversity.org/image/global/logo.png">

<link rel="stylesheet" href="/component/css/main.css">


<script type="application/ld+json">
{{
"@context": "https://schema.org",
"@type": "DefinedTerm",
"name": "{title}",
"description": "Definition of {title}.",
"inDefinedTermSet": "{BASE_URL}"
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
<p>WRITE_DEFINITION_HERE</p>

<h2>Why It Matters</hh2>
<p>WRITE_IMPORTANCE_HERE</p>

<h2>Example</h2>
<p>WRITE_EXAMPLE_HERE</p>

<h2>Related Terms</h2>
<ul>
<li><a href="related-term.html">Related Term</a></li>
</ul>

</section>

</main>

<footer>
<p>&copy; 2026 Malone Global University</p>
<p>Uploaded: {today_date} - Updated: {today_date}</p>
</footer>

</body>
</html>
"""

    return html


# ========= MAIN =========

if __name__ == "__main__":

    slug = input("Enter glossary slug (example: commercial-bank): ").strip()

    html = build_html(slug)

    filename = OUTPUT_FOLDER + slug + ".html"

    with open(filename, "w", encoding="utf-8") as f:
        f.write(html)

    print("Created:", filename)