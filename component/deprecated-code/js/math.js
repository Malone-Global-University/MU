// Configure MathJax BEFORE loading the library
window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)']],     // \( ... \) for inline math
    displayMath: [['\\[', '\\]']],    // \[ ... \] for block math
    processEscapes: true
  },
  svg: { fontCache: 'global' }
};

// Dynamically load MathJax from CDN
(function() {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
  
  // Optional: when MathJax is fully loaded
  script.onload = () => {
    console.log("✅ MathJax loaded");
    // Trigger typesetting of any math already on the page
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise()
        .then(() => console.log("✅ MathJax initial typeset complete"))
        .catch((err) => console.error("❌ MathJax typeset failed:", err));
    }
  };

  document.head.appendChild(script);
})();
