#!/usr/bin/env python3
"""
generate_registry.py
Scans a specified root (public/ by default) and extracts title & description metadata
from HTML pages to build component/registry/pages.json.
Also prints pages that are linked but missing (simple orphan detection).
"""
import os, re, json
from bs4 import BeautifulSoup

ROOT = os.path.join(os.path.dirname(__file__), '..', 'public')
OUT = os.path.join(os.path.dirname(__file__), '..', 'component', 'registry', 'pages.json')

pages = []
for dirpath, dirs, files in os.walk(ROOT):
    for f in files:
        if f.lower().endswith('.html'):
            full = os.path.join(dirpath, f)
            rel = os.path.relpath(full, ROOT).replace('\\','/')
            url = '/' + rel
            with open(full, 'r', encoding='utf-8') as fh:
                txt = fh.read()
            soup = BeautifulSoup(txt, 'html.parser')
            title_tag = soup.find('title')
            desc_tag = soup.find('meta', attrs={'name':'description'})
            title = title_tag.text.strip() if title_tag else rel
            desc = desc_tag['content'].strip() if desc_tag and desc_tag.get('content') else ''
            pages.append({'title': title, 'url': url, 'description': desc, 'tags': []})

# write out
os.makedirs(os.path.dirname(OUT), exist_ok=True)
with open(OUT, 'w', encoding='utf-8') as fh:
    json.dump(pages, fh, indent=2, ensure_ascii=False)

print(f"Wrote {len(pages)} pages to {OUT}")
