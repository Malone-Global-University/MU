document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const word = params.get("word"); // Example: entry.html?word=convivial

  if (!word) {
    document.getElementById("entry").innerHTML = "<p>No word specified.</p>";
    return;
  }

  try {
    const response = await fetch("/library/dictionary/dictionary.json");
    const data = await response.json();

    if (!data[word]) {
      document.getElementById("entry").innerHTML = `<p>No entry found for <strong>${word}</strong>.</p>`;
      return;
    }

    const entry = data[word];
    document.title = `${entry.word} | MGU Dictionary`;
    document.querySelector('meta[name="description"]').setAttribute("content", `dictionary entry: ${entry.word} - ${entry.definition}`);

    // Breadcrumbs
    document.getElementById("breadcrumbs").innerHTML = `
      <a href="/library/dictionary">Dictionary</a> › 
      <a href="/library/dictionary/${entry.word[0].toLowerCase()}">${entry.word[0].toUpperCase()}</a> › 
      ${entry.word}
    `;

    // Entry Content
    document.getElementById("entry").innerHTML = `
      <h2>${entry.word}</h2>
      <p><strong>Part of Speech:</strong> ${entry.partOfSpeech}</p>
      <p><strong>Pronunciation:</strong> ${entry.pronunciation}</p>
      <p><strong>Definition:</strong> ${entry.definition}</p>
      <p><strong>Synonyms:</strong> ${entry.synonyms.join(", ")}</p>
      <p><strong>Antonyms:</strong> ${entry.antonyms.join(", ")}</p>
      <p><strong>Etymology:</strong> ${entry.etymology}</p>
      <p><strong>Examples:</strong></p>
      <ul>${entry.examples.map(e => `<li>${e}</li>`).join("")}</ul>
      <p><strong>Explanation:</strong> ${entry.explanation}</p>
      ${entry.audio ? `
        <p><button onclick="document.getElementById('${entry.word}-audio').play()">🔊 Hear pronunciation</button>
        <audio id="${entry.word}-audio" src="${entry.audio}"></audio></p>` : ""}
      <p><em>Updated: ${entry.updated}</em></p>
    `;
  } catch (err) {
    document.getElementById("entry").innerHTML = "<p>Error loading dictionary.</p>";
    console.error(err);
  }
});
