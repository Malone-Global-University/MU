import os,re,csv,json
from datetime import date

SITE_ROOT="."
BASE_URL="https://maloneuniversity.org"

TODAY=date.today().isoformat()

# ===============================
# HTML SCAN ENGINE
# ===============================

pages=[]
broken_links=[]
titles=set()
canonicals=set()

link_pattern=re.compile(r'href="([^"]+)"')
title_pattern=re.compile(r"<title>(.*?)</title>",re.I)
canon_pattern=re.compile(r'rel="canonical".*?href="([^"]+)"',re.I)
h1_pattern=re.compile(r"<h1",re.I)


for root,dirs,files in os.walk(SITE_ROOT):

    for f in files:

        if not f.endswith(".html"):
            continue

        path=os.path.join(root,f)

        with open(path,encoding="utf-8",errors="ignore") as file:
            html=file.read()

        pages.append(path)

        # -------- title check
        t=title_pattern.search(html)
        if not t:
            print("⚠ Missing title:",path)
        else:
            if t.group(1) in titles:
                print("⚠ Duplicate title:",t.group(1))
            titles.add(t.group(1))

        # -------- canonical check
        c=canon_pattern.search(html)
        if not c:
            print("⚠ Missing canonical:",path)
        else:
            if c.group(1) in canonicals:
                print("⚠ Duplicate canonical:",c.group(1))
            canonicals.add(c.group(1))

        # -------- h1 check
        if not h1_pattern.search(html):
            print("⚠ Missing H1:",path)

        # -------- broken links
        for link in link_pattern.findall(html):

            if link.startswith("http"): 
                continue

            if link.startswith("#"): 
                continue

            full=os.path.join(root,link)

            if ".html" in link and not os.path.exists(full):
                broken_links.append((path,link))


# ===============================
# REPORT BROKEN LINKS
# ===============================

if broken_links:
    print("\nBROKEN LINKS:")
    for p,l in broken_links:
        print(" ",p,"->",l)


# ===============================
# GLOBAL SITEMAP BUILD
# ===============================

urls=[]

for p in pages:

    rel=p.replace("\\","/").replace("./","")

    if rel.startswith("/"):
        rel=rel[1:]

    urls.append(f"<url><loc>{BASE_URL}/{rel}</loc></url>")


with open("sitemap.xml","w") as f:

    f.write("""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
""")

    for u in urls:
        f.write(u+"\n")

    f.write("</urlset>")


# ===============================
# GLOBAL PAGE DATABASE
# ===============================

db=[{"path":p} for p in pages]

with open("site_index.json","w") as f:
    json.dump(db,f,indent=2)


print("\nGODMODE SCAN COMPLETE")
print("Pages scanned:",len(pages))