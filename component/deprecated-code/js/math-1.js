// Configure MathJax BEFORE loading the library
window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)']],     // \( ... \) for inline math
    displayMath: [['\\[', '\\]']],    // \[ ... \] for block math
    processEscapes: true
  },
  svg: { fontCache: 'global' }
};

// Helper: typeset new content
function renderMath(element = document.body) {
  if (window.MathJax && window.MathJax.typesetPromise) {
    return window.MathJax.typesetPromise([element])
      .then(() => console.log("✅ MathJax re-typeset:", element))
      .catch((err) => console.error("❌ MathJax typeset failed:", err));
  }
  return Promise.resolve();
}

// Dynamically load MathJax from CDN
(function() {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";

  script.onload = () => {
    console.log("✅ MathJax loaded from CDN");
    renderMath(); // initial render

    // Watch for new nodes being added to the DOM
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // ELEMENT_NODE
            renderMath(node);
          }
        });
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  };

  document.head.appendChild(script);
})();
