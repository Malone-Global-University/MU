import os,re,csv,json
from datetime import date
from difflib import SequenceMatcher
from collections import defaultdict

BASE_URL="https://maloneuniversity.org"
SITE_ROOT="."
TERMS_FILE="glossary_source/terms.csv"

TODAY=date.today().isoformat()

# ======================
# UTILITIES
# ======================

def title(slug):
    return " ".join(w.capitalize() for w in slug.split("-"))

def similarity(a,b):
    return SequenceMatcher(None,a,b).ratio()

# ======================
# STEP 1 — LOAD TERMS
# ======================

terms={}
if os.path.exists(TERMS_FILE):

    with open(TERMS_FILE,encoding="utf-8") as f:
        reader=csv.DictReader(f)
        for row in reader:
            slug=row["slug"].strip()
            rel=row.get("related","")
            terms[slug]=[r.strip() for r in rel.split("|") if r.strip()]

# ======================
# STEP 2 — GENERATE GLOSSARY PAGES
# ======================

OUT="generated/"
os.makedirs(OUT,exist_ok=True)

def build_page(slug,rels):

    T=title(slug)
    url=f"{BASE_URL}/glossary/{slug}.html"

    rel_html="".join(
        f'<li><a href="{r}.html">{title(r)}</a></li>'
        for r in rels
    )

    return f"""
<!DOCTYPE html>
<html>
<head>
<title>{T}</title>
<meta name="description" content="Definition of {T}">
<link rel="canonical" href="{url}">
</head>
<body>

<h1>{T}</h1>

<h2>Definition</h2>
<p>WRITE_DEFINITION</p>

<h2>Related</h2>
<ul>{rel_html}</ul>

</body>
</html>
"""

for slug,rels in terms.items():
    with open(OUT+slug+".html","w",encoding="utf-8") as f:
        f.write(build_page(slug,rels))

# ======================
# STEP 3 — FULL SITE SCAN
# ======================

pages=[]
links=defaultdict(list)
title_map={}
definitions={}

href=re.compile(r'href="([^"]+)"')
title_tag=re.compile(r"<title>(.*?)</title>",re.I)
h1=re.compile(r"<h1>(.*?)</h1>",re.I)

for root,dirs,files in os.walk(SITE_ROOT):
    for file in files:

        if not file.endswith(".html"): continue

        path=os.path.join(root,file)

        try:
            html=open(path,encoding="utf-8",errors="ignore").read()
        except:
            continue

        pages.append(path)

        # collect links
        for l in href.findall(html):
            if ".html" in l:
                links[path].append(l)

        # collect title
        t=title_tag.search(html)
        if t:
            title_map[path]=t.group(1)

        # collect definition block
        if "<h2>Definition" in html:
            definitions[path]=html[:2000]

# ======================
# STEP 4 — ORPHAN DETECTION
# ======================

linked=set()

for src in links:
    for l in links[src]:
        linked.add(l)

orphans=[p for p in pages if os.path.basename(p) not in linked]

if orphans:
    print("\nORPHAN PAGES:")
    for o in orphans[:20]:
        print(" ",o)

# ======================
# STEP 5 — SEMANTIC DUPLICATE DETECTION
# ======================

keys=list(title_map.keys())

for i in range(len(keys)):
    for j in range(i+1,len(keys)):

        a=title_map[keys[i]]
        b=title_map[keys[j]]

        if similarity(a,b)>0.92:
            print("\n⚠ VERY SIMILAR TITLES")
            print(a,"<>",b)

# ======================
# STEP 6 — BUILD GLOBAL SEARCH INDEX
# ======================

search=[{
"path":p,
"title":title_map.get(p,"")
} for p in pages]

with open("search_index.json","w") as f:
    json.dump(search,f,indent=2)

# ======================
# STEP 7 — BUILD GLOBAL SITEMAP
# ======================

with open("sitemap.xml","w") as f:

    f.write('<?xml version="1.0"?>\n<urlset>\n')

    for p in pages:
        rel=p.replace("\\","/")
        rel=rel.replace("./","")
        f.write(f"<url><loc>{BASE_URL}/{rel}</loc></url>\n")

    f.write("</urlset>")

print("\nSOVEREIGN OS BUILD COMPLETE")
print("Pages:",len(pages))