// entry.js

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

// TTS fallback
function speakWord(word, pronunciation) {
  if (!('speechSynthesis' in window)) {
    alert('Speech not supported on this device.');
    return;
  }
  const text = pronunciation ? `${word}. Pronounced ${pronunciation}.` : word;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.9;
  utterance.pitch = 1.1;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

// Play audio if exists, else fallback to TTS
function playAudioOrTTS(entry) {
  const pronunciationText = entry.pronunciation?.phonetic || entry.pronunciation?.ipa || "";

  if (entry.audio && entry.audio.trim() !== "") {
    const audio = new Audio(entry.audio);
    audio.play()
      .catch(() => {
        // Audio failed to play (404 or unsupported) → fallback TTS
        speakWord(entry.lemma, pronunciationText);
      });
  } else {
    // No audio file → TTS immediately
    speakWord(entry.lemma, pronunciationText);
  }
}

// Render dictionary entry
function renderEntryContent(entry) {
  const pronunciationText = entry.pronunciation?.phonetic || entry.pronunciation?.ipa || "";

  // Render senses
  let sensesHtml = "";
  if (entry.senses?.length) {
    sensesHtml = entry.senses.map((sense, idx) => `
      <li>
        <strong>Sense ${idx + 1}:</strong> ${sense.definition}
        ${sense.examples?.length ? `<ul>${sense.examples.map(e => `<li>${e}</li>`).join("")}</ul>` : ""}
      </li>
    `).join("");
    sensesHtml = `<ul>${sensesHtml}</ul>`;
  } else {
    sensesHtml = `<p>${entry.definition}</p>`;
  }

  // Always use a single button calling the JS function
  return `
    <h2>${entry.lemma}</h2>
    ${entry.variants?.length ? `<p><strong>Variants:</strong> ${entry.variants.join(", ")}</p>` : ""}
    <p><strong>Tier:</strong> ${entry.tier}</p>
    <p><strong>Difficulty:</strong> ${entry.difficulty || "N/A"}</p>
    <p><strong>Part of Speech:</strong> ${entry.partOfSpeech || "N/A"}</p>
    ${pronunciationText ? `<p><strong>Pronunciation:</strong> ${pronunciationText}</p>` : ""}
    ${sensesHtml}
    ${entry.synonyms?.length ? `<p><strong>Synonyms:</strong> ${entry.synonyms.join(", ")}</p>` : ""}
    ${entry.antonyms?.length ? `<p><strong>Antonyms:</strong> ${entry.antonyms.join(", ")}</p>` : ""}
    ${entry.etymology ? `<p><strong>Etymology:</strong> ${entry.etymology}</p>` : ""}
    ${entry.explanation ? `<p><strong>Explanation:</strong> ${entry.explanation}</p>` : ""}
    <p>
      <button onclick='playAudioOrTTS(${JSON.stringify(entry)})'>
        🔊 Hear Pronunciation
      </button>
    </p>
    <p><em>Updated: ${entry.updated}</em></p>
  `;
}

// Main
document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const rawWord = params.get("word");

  const entryContainer = document.getElementById("entry");
  if (!entryContainer) return console.error("No element with id 'entry' found on page.");
  if (!rawWord) return entryContainer.innerHTML = "<p>No word specified.</p>";

  const query = rawWord.trim().toLowerCase();

  try {
    const shardIndex = await loadShardIndex();
    const firstLetter = query[0];
    const shardUrl = shardIndex[firstLetter];
    if (!shardUrl) return entryContainer.innerHTML = `<p>No entry found for <strong>${query}</strong>.</p>`;

    const shard = await fetchShard(shardUrl);

    // Lookup by lemma
    let entry = shard[query] || Object.values(shard).find(e => e.lemma.toLowerCase() === query);

    // Check variants if not found
    if (!entry) {
      entry = Object.values(shard).find(e => e.variants?.some(v => v.toLowerCase() === query));
    }

    if (!entry) return entryContainer.innerHTML = `<p>No entry found for <strong>${query}</strong>.</p>`;

    // Update metadata
    document.title = `${entry.lemma} | MGU Dictionary`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", `Dictionary entry: ${entry.lemma} - ${entry.definition || entry.senses?.[0]?.definition}`);
    }

    entryContainer.innerHTML = renderEntryContent(entry);

  } catch (err) {
    entryContainer.innerHTML = "<p>Error loading dictionary.</p>";
    console.error(err);
  }
});