import os
import json
from datetime import datetime, timezone

# === CONFIG ===
ROOT_DIR = r"C:\mgu"  # Change if needed
VERSION_FILE = os.path.join(ROOT_DIR, "data", "version", "site_version.json")
CHANGELOG_FILE = os.path.join(ROOT_DIR, "docs", "CHANGELOG.md")

# === FOLDERS TO SKIP (relative names only) ===
SKIP_FOLDERS = {
    "node_modules", "assets", "screenshots",
    "__pycache__", ".git", ".idea", ".vscode",
    ".bin", "dist", "temp", "crap"
}

# === PROMPT FOR DESCRIPTION ===
change_note = input("Enter change description: ").strip()
if not change_note:
    change_note = "Automated index regeneration & version update"

# === 1. INDEX GENERATOR (Non-destructive) ===
def generate_index_html(path):
    index_path = os.path.join(path, "index.html")

    # Don't overwrite existing index.html
    if os.path.exists(index_path):
        return  

    items = sorted(os.listdir(path))
    html_content = [
        "<!DOCTYPE html>",
        "<html>",
        "<head><meta charset='UTF-8'><title>Index</title></head>",
        f"<body><h1>Index of {os.path.relpath(path, ROOT_DIR)}</h1><ul>"
    ]

    for item in items:
        if item == "index.html":
            continue
        item_path = os.path.join(path, item)
        if os.path.isdir(item_path):
            html_content.append(f"<li><a href='{item}/'>{item}/</a></li>")
        else:
            html_content.append(f"<li><a href='{item}'>{item}</a></li>")

    html_content.extend(["</ul></body>", "</html>"])

    with open(index_path, "w", encoding="utf-8") as f:
        f.write("\n".join(html_content))

# === 2. WALK FOLDERS AND GENERATE INDEXES ===
for root, dirs, files in os.walk(ROOT_DIR):
    dirs[:] = [d for d in dirs if d not in SKIP_FOLDERS]  # skip listed folders
    generate_index_html(root)

# === 3. UPDATE VERSION FILE ===
now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
version_str = datetime.now(timezone.utc).strftime("%Y.%m.%d")

version_data = {
    "version": version_str,
    "last_updated": now,
    "changes": change_note
}

os.makedirs(os.path.dirname(VERSION_FILE), exist_ok=True)
with open(VERSION_FILE, "w", encoding="utf-8") as vf:
    json.dump(version_data, vf, indent=4)

# === 4. APPEND TO CHANGELOG ===
os.makedirs(os.path.dirname(CHANGELOG_FILE), exist_ok=True)
with open(CHANGELOG_FILE, "a", encoding="utf-8") as cf:
    cf.write(f"\n## [{version_str}]\n- {change_note} ({now})\n")

print("✅ Non-destructive index generation complete, version updated, and changelog appended.")
