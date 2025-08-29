 document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const resultsList = document.getElementById("results");

  let terms = [];

  // Load search index
  fetch("search.json")
    .then(res => res.json())
    .then(data => {
      terms = data;
    });

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    resultsList.innerHTML = "";

    if (!query) return;

    const matches = terms.filter(term =>
      term.title.toLowerCase().includes(query) ||
      term.category.toLowerCase().includes(query) ||
      term.content.toLowerCase().includes(query)
    );

    matches.forEach(match => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${match.url}">${match.title}</a> (${match.category})`;
      resultsList.appendChild(li);
    });
  });
});
