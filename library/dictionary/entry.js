// Load the shard index
async function loadShardIndex() {
  try {
    const res = await fetch("/library/dictionary/dictionary-index.json");
    return await res.json();
  } catch (err) {
    console.error("Failed to load shard index:", err);
    return {};
  }
}

// Fetch a specific shard
async function fetchShard(url) {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (err) {
    console.error("Failed to fetch shard:", err);
    return {};
  }
}

// Render dictionary entry HTML
function renderEntryContent(entry) {
  return `
    <h2>${entry.word}</h2>
    <p><strong>Tier:</strong> ${entry.tier}</p>
    <p><strong>Part of Speech:</strong> ${entry.partOfSpeech}</p>
    <p><strong>Pronunciation:</strong> ${entry.pronunciation}</p>
    <p><strong>Definition:</strong> ${entry.definition}</p>
    ${entry.synonyms?.length ? `<p><strong>Synonyms:</strong> ${entry.synonyms.join(", ")}</p>` : ""}
    ${entry.antonyms?.length ? `<p><strong>Antonyms:</strong> ${entry.antonyms.join(", ")}</p>` : ""}
    ${entry.etymology ? `<p><strong>Etymology:</strong> ${entry.etymology}</p>` : ""}
    ${entry.examples?.length ? `<ul>${entry.examples.map(e => `<li>${e}</li>`).join("")}</ul>` : ""}
    ${entry.explanation ? `<p><strong>Explanation:</strong> ${entry.explanation}</p>` : ""}
    ${entry.audio ? `<p><button onclick="document.getElementById('${entry.word}-audio')?.play()">🔊 Hear pronunciation</button>
      <audio id="${entry.word}-audio" src="${entry.audio}"></audio></p>` : ""}
    <p><em>Updated: ${entry.updated}</em></p>
  `;
}

document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const rawWord = params.get("word");

  const entryContainer = document.getElementById("entry");

  if (!entryContainer) {
    console.error("No element with id 'entry' found on page.");
    return;
  }

  if (!rawWord) {
    entryContainer.innerHTML = "<p>No word specified.</p>";
    return;
  }

  const word = rawWord.trim().toLowerCase();

  try {
    const shardIndex = await loadShardIndex();
    const firstLetter = word[0];

    const shardUrl = shardIndex[firstLetter];
    if (!shardUrl) {
      entryContainer.innerHTML = `<p>No entry found for <strong>${word}</strong>.</p>`;
      return;
    }

    const shard = await fetchShard(shardUrl);
    console.log("Looking up word:", word, "in shard keys:", Object.keys(shard));

    const entry = shard[word];
    if (!entry) {
      entryContainer.innerHTML = `<p>No entry found for <strong>${word}</strong>.</p>`;
      return;
    }

    // Update page metadata safely
    document.title = `${entry.word} | MGU Dictionary`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", `Dictionary entry: ${entry.word} - ${entry.definition}`);
    }

    entryContainer.innerHTML = renderEntryContent(entry);

  } catch (err) {
    entryContainer.innerHTML = "<p>Error loading dictionary.</p>";
    console.error(err);
  }
});
