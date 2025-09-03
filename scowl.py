#!/usr/bin/env python3
"""
make_a_words_1000.py

Downloads a comprehensive English wordlist (dwyl/english-words words_alpha.txt),
extracts the first 1000 unique lemmas that start with 'a' in alphabetical order,
writes a_words_1000.txt and packages it into a_words_1000.zip.

Usage:
    python make_a_words_1000.py
"""
import sys
import os
import zipfile

try:
    import requests
except ImportError:
    print("This script requires the 'requests' package. Install with:\n  pip install requests")
    sys.exit(1)

RAW_URL = "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt"
OUT_DIR = os.path.abspath(".")
TXT_NAME = "a_words_1000.txt"
ZIP_NAME = "a_words_1000.zip"

def download_wordlist(url):
    print(f"Downloading wordlist from {url} ...")
    r = requests.get(url, stream=True, timeout=60)
    r.raise_for_status()
    for chunk in r.iter_lines(decode_unicode=True):
        if chunk is None:
            continue
        yield chunk.strip()

def main():
    words = []
    try:
        for w in download_wordlist(RAW_URL):
            if not w:
                continue
            lw = w.lower()
            # Only alphabetic words (no digits/punctuation) and start with 'a'
            if lw[0] == 'a' and lw.isalpha():
                words.append(lw)
    except Exception as e:
        print("Download or parsing failed:", e)
        print("If this fails, you can also manually download the file from GitHub:")
        print("https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt")
        sys.exit(1)

    # Unique, sorted
    unique_sorted = sorted(set(words))
    if len(unique_sorted) < 1000:
        print(f"Warning: only found {len(unique_sorted)} 'a' words in source. Consider another source (SCOWL/ENABLE).")
    # Take first 1000
    selected = unique_sorted[:1000]

    # Write txt
    txt_path = os.path.join(OUT_DIR, TXT_NAME)
    with open(txt_path, "w", encoding="utf-8") as f:
        for w in selected:
            f.write(w + "\n")
    print(f"Wrote {len(selected)} words to {txt_path}")

    # Zip file
    zip_path = os.path.join(OUT_DIR, ZIP_NAME)
    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zf:
        zf.write(txt_path, TXT_NAME)
    print(f"Packaged into {zip_path}")

if __name__ == "__main__":
    main()
