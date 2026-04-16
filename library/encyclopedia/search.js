document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const resultsList = document.getElementById("results");

  let terms = [];

  fetch("/library/encyclopedia/search.json")
    .then(res => res.json())
    .then(data => {
      terms = data;
    });

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();
    resultsList.innerHTML = "";

    if (!query) return;

    const matches = terms.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.domain.toLowerCase().includes(query) ||
      item.tags.join(" ").toLowerCase().includes(query) ||
      item.content.toLowerCase().includes(query)
    );

    matches.slice(0, 20).forEach(match => {
      const li = document.createElement("li");

      li.innerHTML = `
        <a href="${match.url}">${match.title}</a>
        <small>(${match.domain})</small>
        <p>${match.summary}</p>
      `;

      resultsList.appendChild(li);
    });
  });
});