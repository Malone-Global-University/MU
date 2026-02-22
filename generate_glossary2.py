import csv, os, json
from datetime import date

BASE_URL="https://maloneuniversity.org/department/corporate-science/economics-101/glossary/"
OUT="output/"
os.makedirs(OUT,exist_ok=True)

TODAY=date.today().strftime("%-m/%-d/%Y")

def title(slug):
    return " ".join(w.capitalize() for w in slug.split("-"))

def build_page(slug,defn,imp,ex,related):

    T=title(slug)
    url=BASE_URL+slug+".html"

    rel_html=""
    for r in related:
        if r.strip():
            rel_html+=f'<li><a href="{r}.html">{title(r)}</a></li>\n'

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<title>{T} | Economics Glossary | Malone Global University</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Definition of {T} in economics.">
<link rel="canonical" href="{url}">
<meta property="og:title" content="{T} | Economics Glossary">
<meta property="og:url" content="{url}">
<meta property="og:type" content="article">
<link rel="stylesheet" href="/component/css/main.css">

<script type="application/ld+json">
{{
"@context":"https://schema.org",
"@type":"DefinedTerm",
"name":"{T}",
"inDefinedTermSet":"{BASE_URL}"
}}
</script>
</head>

<body>

<section class="hero">
<h1>{T}</h1>
<p>Economics Glossary – Malone Global University</p>
</section>

<main><section>

<h2>Definition</h2>
<p>{defn or "WRITE_DEFINITION"}</p>

<h2>Why It Matters</h2>
<p>{imp or "WRITE_IMPORTANCE"}</p>

<h2>Example</h2>
<p>{ex or "WRITE_EXAMPLE"}</p>

<h2>Related Terms</h2>
<ul>
{rel_html}
</ul>

</section></main>

<footer>
<p>&copy; Malone Global University</p>
<p>Uploaded: {TODAY} - Updated: {TODAY}</p>
</footer>

</body></html>
"""

def build_index(slugs):
    links=sorted(slugs)
    items="\n".join(
        f'<li><a href="{s}.html">{title(s)}</a></li>' for s in links
    )

    return f"""<h1>Economics Glossary</h1>
<ul>
{items}
</ul>
"""

def build_sitemap(slugs):
    urls="\n".join(
        f"<url><loc>{BASE_URL+s+'.html'}</loc></url>"
        for s in slugs
    )

    return f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{urls}
</urlset>"""


# ========= RUN =========

slugs=[]
db=[]

with open("terms.csv",newline="",encoding="utf-8") as f:
    reader=csv.DictReader(f)

    for row in reader:

        slug=row["slug"].strip()

        if slug in slugs:
            raise Exception("Duplicate slug:"+slug)

        slugs.append(slug)

        related=row["related"].split("|") if row["related"] else []

        html=build_page(
            slug,
            row["definition"],
            row["importance"],
            row["example"],
            related
        )

        with open(OUT+slug+".html","w",encoding="utf-8") as o:
            o.write(html)

        db.append({"slug":slug,"title":title(slug)})


# build index
with open(OUT+"index.html","w") as f:
    f.write(build_index(slugs))

# build sitemap
with open(OUT+"sitemap.xml","w") as f:
    f.write(build_sitemap(slugs))

# save database
with open(OUT+"glossary.json","w") as f:
    json.dump(db,f,indent=2)

print("Glossary build complete.")