1. Doctype Declaration
<!DOCTYPE html>


Tells the browser which version of HTML is being used (HTML5 in this case).

Always goes at the very top of the file.

2. <html> Element
<html lang="en">
  ...
</html>


The root element of the HTML document.

The lang attribute specifies the language of the page (helps accessibility and SEO).

3. <head> Section
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
</head>


Contains metadata and settings that do not display directly on the page.
Common elements inside <head>:

<meta charset="UTF-8"> → Character encoding

<title> → The page title that appears in the browser tab

<meta name="viewport" content="width=device-width, initial-scale=1.0"> → Responsive design

<link> → External stylesheets

<script> → External or inline scripts

4. <body> Section
<body>
  <h1>Welcome!</h1>
  <p>This is a basic HTML page.</p>
</body>


Contains all the content that is displayed on the webpage: text, images, videos, buttons, etc.

Everything visible to the user lives inside <body>.

5. Optional: Comments
<!-- This is a comment -->


Can be placed anywhere in the document for notes or explanations.

Not displayed in the browser.

✅ Minimal Complete HTML Example
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Page</title>
</head>
<body>
  <h1>Hello, world!</h1>
  <p>This is a basic HTML document.</p>
</body>
</html>