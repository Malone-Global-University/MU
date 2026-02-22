import os, re, csv, json, hashlib, shutil
from datetime import date
from collections import defaultdict

SRC="src"
DIST="dist"
TERMS="src/glossary_source/terms.csv"
BASE_URL="https://maloneuniversity.org"

os.makedirs(DIST,exist_ok=True)

# ===============================
# HASH SYSTEM (incremental build)
# ===============================

HASH_FILE=".buildhash"

def filehash(path):
    return hashlib.md5(open(path,'rb').read()).hexdigest()

oldhash={}
if os.path.exists(HASH_FILE):
    oldhash=json.load(open(HASH_FILE))

newhash={}

def changed(path):
    h=filehash(path)
    newhash[path]=h
    return oldhash.get(path)!=h

# ===============================
# TITLE UTIL
# ===============================

def title(slug):
    return " ".join(w.capitalize() for w in slug.split("-"))

# ===============================
# GLOSSARY BUILD
# ===============================

terms={}

if os.path.exists(TERMS):
    with open(TERMS,encoding="utf-8") as f:
        for r in csv.DictReader(f):
            slug=r["slug"].strip()
            rel=r.get("related","")
            terms[slug]=[x.strip() for x in rel.split("|") if x.strip()]

gloss_dir=f"{DIST}/glossary"
os.makedirs(gloss_dir,exist_ok=True)

for slug,rels in terms.items():

    outfile=f"{gloss_dir}/{slug}.html"

    # incremental skip
    if os.path.exists(outfile) and not changed(TERMS):
        continue

    rel_html="".join(
        f'<li><a href="{r}.html">{title(r)}</a></li>'
        for r in rels
    )

    html=f"""
<!DOCTYPE html>
<html>
<head>
<title>{title(slug)}</title>
<meta name="description" content="Definition of {title(slug)}">
<link rel="canonical" href="{BASE_URL}/glossary/{slug}.html">
</head>
<body>

<h1>{title(slug)}</h1>

<h2>Definition</h2>
<p>WRITE_DEFINITION</p>

<h2>Related</h2>
<ul>{rel_html}</ul>

</body>
</html>
"""

    open(outfile,"w",encoding="utf-8").write(html)

# ===============================
# COPY + PROCESS STATIC PAGES
# ===============================

link=re.compile(r'href="([^"]+\.html)"')

all_pages=[]
incoming=defaultdict(list)

for root,dirs,files in os.walk(SRC):

    for f in files:

        if not f.endswith(".html"): 
            continue

        src=os.path.join(root,f)

        rel=src[len(SRC):].lstrip("/\\")
        dst=os.path.join(DIST,rel)

        os.makedirs(os.path.dirname(dst),exist_ok=True)

        shutil.copy2(src,dst)

        html=open(dst,encoding="utf-8",errors="ignore").read()

        for L in link.findall(html):
            incoming[L].append(rel)

        all_pages.append(rel)

# ===============================
# BROKEN LINK REWRITE SUGGESTIONS
# ===============================

missing=[]

for page in all_pages:

    full=f"{DIST}/{page}"

    html=open(full,encoding="utf-8",errors="ignore").read()

    for L in link.findall(html):

        target=os.path.join(DIST,L)

        if not os.path.exists(target):
            missing.append((page,L))

if missing:
    print("\nBROKEN LINKS FOUND:")
    for m in missing[:20]:
        print(" ",m)

# ===============================
# BUILD SEARCH INDEX
# ===============================

title_tag=re.compile(r"<title>(.*?)</title>",re.I)

search=[]

for root,dirs,files in os.walk(DIST):
    for f in files:

        if not f.endswith(".html"): continue

        path=os.path.join(root,f)

        html=open(path,encoding="utf-8",errors="ignore").read()

        t=title_tag.search(html)

        rel=path[len(DIST):].replace("\\","/")

        search.append({
            "url":rel,
            "title":t.group(1) if t else ""
        })

open(f"{DIST}/search.json","w").write(json.dumps(search,indent=2))

# ===============================
# BUILD SITEMAP
# ===============================

with open(f"{DIST}/sitemap.xml","w") as f:

    f.write("<urlset>\n")

    for s in search:
        f.write(f"<url><loc>{BASE_URL}{s['url']}</loc></url>\n")

    f.write("</urlset>")

# ===============================
# SAVE HASHES
# ===============================

json.dump(newhash,open(HASH_FILE,"w"))

print("\nDEPLOYMENT BUILD COMPLETE")
print("Total pages:",len(search))