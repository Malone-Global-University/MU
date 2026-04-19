import argparse
from pathlib import Path


def process(root: Path, target: str, dry_run: bool):
    stats = {"scanned": 0, "renamed": 0, "skipped": 0}

    for path in root.rglob("*"):
        if not path.is_file():
            continue

        stats["scanned"] += 1

        if path.name == target:
            dir_path = path.parent
            index_path = dir_path / "index.html"

            # HARD GUARD: skip if index already exists
            if index_path.exists():
                stats["skipped"] += 1
                print(f"[skip] index exists: {dir_path}")
                continue

            if not dry_run:
                path.rename(index_path)

            stats["renamed"] += 1
            print(f"[rename] {path} → {index_path}")

    return stats


def main():
    parser = argparse.ArgumentParser(description="Rename home.html to index.html (safe skip mode)")
    parser.add_argument("root", help="Root directory")
    parser.add_argument("--target", default="home.html")
    parser.add_argument("--dry-run", action="store_true")

    args = parser.parse_args()

    root = Path(args.root)

    print("\nStarting operation...")
    print(f"Root: {root}")
    print(f"Target: {args.target}")
    print(f"Mode: {'DRY RUN' if args.dry_run else 'LIVE'}\n")

    stats = process(root, args.target, args.dry_run)

    print("\n--- Summary ---")
    print(stats)


if __name__ == "__main__":
    main()