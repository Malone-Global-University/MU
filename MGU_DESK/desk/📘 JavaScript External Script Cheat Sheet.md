## JavaScript External Script Cheat Sheet 📘
1. Ways to Include JavaScript

A. Inline

<script>
  console.log("Hello World");
</script>


B. External (Relative Path)

<script src="scripts/main.js"></script>


Loads file relative to this HTML file’s folder.
⚠️ Can break if HTML is in a different subfolder.

C. External (Root-Relative Path)

<script src="/scripts/main.js"></script>


Loads file from the site root, no matter where the HTML is located.
✅ Safest for sites with many folders.

D. With defer

<script src="/scripts/main.js" defer></script>


Downloads immediately, runs after DOM is parsed.

Equivalent to putting <script> at the very bottom of <body>.

2. Best Practices

✅ Place scripts just before </body>, OR use defer.

✅ Always test with a minimal script first:

console.log("Script loaded ✅");


✅ If accessing DOM (getElementById etc.), script must run after elements exist.

3. Debugging Checklist

Open Dev Tools (F12 → Console + Network).

404 Not Found → path problem.

“null” / “undefined” → timing or wrong selector.

Check Path.

scripts/... = relative to current file.

/scripts/... = always from root.

Check Timing.

Add defer or move script to bottom.

Confirm Load.

console.log("My script is running!");

4. Minimal Demo

index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JS External Demo</title>
  <script src="/scripts/demo.js" defer></script>
</head>
<body>
  <h1>Hello Students</h1>
  <button id="btn">Click Me</button>
</body>
</html>


scripts/demo.js

console.log("demo.js loaded ✅");

document.getElementById("btn").addEventListener("click", () => {
  alert("Button works!");
});

5. Golden Rule 🏅

Almost every script problem = Path or Timing.

Path → fix with / (root-relative) or ../ (relative).

Timing → fix with defer or move script down.