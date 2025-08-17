Perfect! Let’s extend your component-based workflow to lesson content. The idea is to turn each section/article of a lesson into separate components that can be loaded into a skeleton page. This makes your lessons fully modular and easy to maintain.



1\. Skeleton Lesson Page (lesson2.html)

<!DOCTYPE html>

<html lang="en">

<head>

&nbsp; <meta charset="UTF-8" />

&nbsp; <meta name="viewport" content="width=device-width, initial-scale=1.0" />

&nbsp; <title>Lesson 2: Information Architecture | Malone University</title>

&nbsp; <link rel="icon" href="images/favicon.ico" type="image/x-icon" />

&nbsp; <link rel="stylesheet" href="components/css/theme.css">

</head>

<body>



&nbsp; <!-- Navbar / Hero -->

&nbsp; <div id="navbar-placeholder"></div>

&nbsp; <div id="hero-placeholder"></div>



&nbsp; <main>

&nbsp;   <!-- Lesson Sections -->

&nbsp;   <div id="lesson-intro"></div>

&nbsp;   <div id="lesson-key-concepts"></div>

&nbsp;   <div id="lesson-diagrams"></div>

&nbsp;   <div id="lesson-exercises"></div>

&nbsp;   <div id="lesson-summary"></div>

&nbsp; </main>



&nbsp; <!-- Footer -->

&nbsp; <div id="footer-placeholder"></div>



&nbsp; <!-- Theme toggle -->

&nbsp; <script src="components/js/theme-toggle.js"></script>



&nbsp; <!-- Load Lesson Components -->

&nbsp; <script>

&nbsp;   async function loadComponent(id, path) {

&nbsp;     const res = await fetch(path);

&nbsp;     const html = await res.text();

&nbsp;     document.getElementById(id).innerHTML = html;

&nbsp;   }



&nbsp;   // Core components

&nbsp;   loadComponent('navbar-placeholder', 'components/navbar.html');

&nbsp;   loadComponent('hero-placeholder', 'components/hero.html');

&nbsp;   loadComponent('footer-placeholder', 'components/footer.html');



&nbsp;   // Lesson components

&nbsp;   loadComponent('lesson-intro', 'components/lesson2/intro.html');

&nbsp;   loadComponent('lesson-key-concepts', 'components/lesson2/key-concepts.html');

&nbsp;   loadComponent('lesson-diagrams', 'components/lesson2/diagrams.html');

&nbsp;   loadComponent('lesson-exercises', 'components/lesson2/exercises.html');

&nbsp;   loadComponent('lesson-summary', 'components/lesson2/summary.html');

&nbsp; </script>

</body>

</html>





This skeleton page is lightweight. Each lesson section is now a separate component file.



2\. Lesson Component Files



Save these under components/lesson2/:



intro.html

<section id="introduction">

&nbsp; <h2>Introduction</h2>

&nbsp; <p>Have you ever gotten lost on a website? This usually happens when the <strong>information architecture (IA)</strong> is weak. IA is the way content is organized, structured, and labeled so users can find what they need.</p>

</section>



key-concepts.html

<section id="key-concepts">

&nbsp; <h2>Key Concepts</h2>



&nbsp; <article id="mental-models">

&nbsp;   <h3>Mental Models</h3>

&nbsp;   <p>Users build an internal mental map of your site. If your design matches their expectations, they succeed. Keep your structure logical, consistent, and predictable.</p>

&nbsp; </article>



&nbsp; <article id="browsing">

&nbsp;   <h3>Browsing</h3>

&nbsp;   <p>Balance <strong>depth</strong> (too many clicks) and <strong>breadth</strong> (too many options). Follow the <em>Goldilocks principle</em>: not too deep, not too shallow.</p>

&nbsp; </article>



&nbsp; <article id="search">

&nbsp;   <h3>Search</h3>

&nbsp;   <p>Large sites need search to help users find specific or rare content, especially in the “long tail” of less popular pages.</p>

&nbsp; </article>



&nbsp; <article id="structures">

&nbsp;   <h3>Structures</h3>

&nbsp;   <ul>

&nbsp;     <li><strong>Sequences (Linear):</strong> Step-by-step flow, ideal for lessons.</li>

&nbsp;     <li><strong>Hierarchies (Trees):</strong> Home → Category → Subcategory → Page.</li>

&nbsp;     <li><strong>Webs (Associative):</strong> Cross-links for free-flow exploration.</li>

&nbsp;   </ul>

&nbsp; </article>



&nbsp; <article id="blending-structures">

&nbsp;   <h3>Blending Structures</h3>

&nbsp;   <p>Clear structure gives users freedom to explore without getting lost.</p>

&nbsp; </article>

</section>



diagrams.html

<section id="diagrams">

&nbsp; <h2>Visual Diagrams</h2>

&nbsp; <ul>

&nbsp;   <li><strong>Tree Diagram:</strong> Home → Science → Biology → Cells <em>(diagram placeholder)</em></li>

&nbsp;   <li><strong>Linear Flow:</strong> Lesson 1 → Lesson 2 → Lesson 3 <em>(diagram placeholder)</em></li>

&nbsp;   <li><strong>Web Map:</strong> Biology ↔ Chemistry ↔ Physics <em>(diagram placeholder)</em></li>

&nbsp; </ul>

</section>



exercises.html

<section id="exercises">

&nbsp; <h2>Exercises</h2>



&nbsp; <article id="exercise-a">

&nbsp;   <h3>Exercise A: Spot the Problem</h3>

&nbsp;   <p>Provide a messy site map. Ask students: <em>“What would confuse a user?”</em></p>

&nbsp; </article>



&nbsp; <article id="exercise-b">

&nbsp;   <h3>Exercise B: Redesign Challenge</h3>

&nbsp;   <p>Students restructure the messy map into a cleaner hierarchy. Bonus: Add a sequence path and cross-links for enrichment.</p>

&nbsp; </article>

</section>



summary.html

<section id="summary">

&nbsp; <h2>Summary Principles</h2>

&nbsp; <ul>

&nbsp;   <li>Keep structure logical and predictable.</li>

&nbsp;   <li>Balance menu depth and breadth.</li>

&nbsp;   <li>Add search for large sites.</li>

&nbsp;   <li>Use hierarchy as backbone, sequence for lessons, webs for enrichment.</li>

&nbsp; </ul>

&nbsp; <p>Remember: Users rarely follow your structure perfectly—they jump around, so clarity is key.</p>

</section>





✅ Resulting System:



Navbar, hero, footer, and theme toggle are shared global components.



Each lesson is fully modular, with separate components for intro, concepts, diagrams, exercises, and summary.



Updating a component automatically updates all pages that use it.

