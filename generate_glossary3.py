import csv, os, json
from datetime import date
from collections import defaultdict

BASE_URL="https://maloneuniversity.org/department/corporate-science/economics-101/glossary/"
OUT="output/"
os.makedirs(OUT,exist_ok=True)

TODAY=date.today().strftime("%-m/%-d/%Y")


# ========= CORE UTILITIES =========

def title(slug):
    return " ".join(w.capitalize() for w in slug.split("-"))

def auto_definition(slug):
    T=title(slug)
    return f"{T} is an important concept in economics. This page provides a working academic definition, explanation, and contextual usage for institutional learning. Replace this text with your official definition."

# ========= BUILD PAGE =========

def build_page(slug, related):

    T=title(slug)
    url=BASE_URL+slug+".html"

    rel_html=""
    for r in sorted(set(related)):
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
<meta property="og:type" content="article">
<meta property="og:url" content="{url}">

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
<p>{auto_definition(slug)}</p>

<h2>Why It Matters</h2>
<p>Explain why this concept matters in economic systems.</p>

<h2>Example</h2>
<p>Provide a real-world or theoretical example.</p>

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


# ========= LOAD TERMS =========

terms={}
missing=set()

with open("terms.csv",encoding="utf-8") as f:
    reader=csv.DictReader(f)
    for row in reader:
        slug=row["slug"].strip()
        rel=row["related"].split("|") if row["related"] else []
        terms[slug]=[r.strip() for r in rel if r.strip()]


# ========= AUTO-BIDIRECTIONAL LINKING =========

for s,rels in list(terms.items()):
    for r in rels:
        if r not in terms:
            missing.add(r)
        else:
            if s not in terms[r]:
                terms[r].append(s)


# ========= GENERATE ALL PAGES =========

for slug,rel in terms.items():

    html=build_page(slug,rel)

    with open(OUT+slug+".html","w",encoding="utf-8") as f:
        f.write(html)


# ========= BUILD A-Z INDEX =========

letters=defaultdict(list)

for s in terms:
    letters[s[0].upper()].append(s)

index_html="<h1>Economics Glossary</h1>"

for L in sorted(letters):

    index_html+=f"<h2>{L}</h2><ul>"
    for s in sorted(letters[L]):
        index_html+=f'<li><a href="{s}.html">{title(s)}</a></li>'
    index_html+="</ul>"

with open(OUT+"index.html","w") as f:
    f.write(index_html)


# ========= SITEMAP =========

urls="\n".join(
    f"<url><loc>{BASE_URL+s+'.html'}</loc></url>"
    for s in terms
)

with open(OUT+"sitemap.xml","w") as f:
    f.write(f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{urls}
</urlset>""")


# ========= SEARCH DATABASE =========

search=[{"slug":s,"title":title(s)} for s in terms]

with open(OUT+"search.json","w") as f:
    json.dump(search,f,indent=2)


# ========= WARNINGS =========

if missing:
    print("\\nWARNING: Missing related terms:")
    for m in missing:
        print("  ",m)

print("\\nAUTOPILOT BUILD COMPLETE")