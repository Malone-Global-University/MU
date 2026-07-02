// entry.js (fixed & robust)

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

// TTS fallback (word + pronunciation + definition)
function speakWord(word, pronunciation, definition = "") {
  if (!('speechSynthesis' in window)) {
    console.warn('Speech not supported in this environment.');
    return;
  }
  const parts = [String(word)];
  if (pronunciation) parts.push(`Pronounced ${pronunciation}`);
  if (definition) parts.push(`Definition: ${definition}`);
  const text = parts.join('. ');
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 0.95;
  u.pitch = 1.0;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

// Fail-safe audio play with TTS fallback
function playAudioOrTTS(entry) {
  console.log('playAudioOrTTS called for:', entry?.lemma, 'audio:', entry?.audio);
  const pronunciationText = entry.pronunciation?.phonetic || entry.pronunciation?.ipa || "";
  const def = entry.definition || entry.senses?.[0]?.definition || "";

  const url = entry.audio ? String(entry.audio).trim() : "";

  if (!url) {
    // no audio path -> TTS immediately
    speakWord(entry.lemma, pronunciationText, def);
    return;
  }

  // Try playing dynamic Audio object — fallback on error or reject
  const audio = new Audio(url);

  audio.addEventListener('canplay', () => console.log('audio canplay', url));
  audio.addEventListener('loadedmetadata', () => console.log('audio loadedmetadata', url, 'duration:', audio.duration));
  audio.addEventListener('error', (ev) => {
    console.warn('audio element error event', ev, 'audio.error:', audio.error);
    speakWord(entry.lemma, pronunciationText, def);
  });

  audio.play()
    .then(() => {
      console.log('audio.play() started for', entry.lemma, url);
    })
    .catch(err => {
      console.warn('audio.play() rejected for', entry.lemma, err);
      // fallback to TTS
      speakWord(entry.lemma, pronunciationText, def);
    });
}

// safe id helper for button
function makeId(lemma) {
  return 'play-' + String(lemma || '').toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');
}

// Render HTML (button has id only; handler attached later)
function renderEntryContent(entry) {
  const pronunciationText = entry.pronunciation?.phonetic || entry.pronunciation?.ipa || "";
  let sensesHtml = "";

  if (entry.senses?.length) {
    sensesHtml = entry.senses
      .map((sense, idx) => `
        <li>
          <strong>Sense ${idx + 1}:</strong> ${sense.definition}
          ${sense.examples?.length ? `<ul>${sense.examples.map(e => `<li>${e}</li>`).join("")}</ul>` : ""}
        </li>
      `).join("");
    sensesHtml = `<ul>${sensesHtml}</ul>`;
  } else {
    sensesHtml = `<p>${entry.definition || ''}</p>`;
  }

  const btnId = makeId(entry.lemma);

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

    <p><button id="${btnId}">🔊 Hear Pronunciation</button></p>

    <p><em>Updated: ${entry.updated}</em></p>
  `;
}

// Safe init function that runs on DOM ready (or immediately if DOM already ready)
function initEntryPage() {
  (async () => {
    try {
      const params = new URLSearchParams(window.location.search);
      const rawWord = params.get("word");

      const entryContainer = document.getElementById("entry");
      if (!entryContainer) {
        console.error("entry.js: no element with id='entry' found in DOM.");
        return;
      }

      if (!rawWord) {
        entryContainer.innerHTML = "<p>No word specified.</p>";
        return;
      }

      const query = rawWord.trim().toLowerCase();

      const shardIndex = await loadShardIndex();
      const firstLetter = query[0];
      const shardUrl = shardIndex[firstLetter];
      if (!shardUrl) {
        entryContainer.innerHTML = `<p>No entry found for <strong>${query}</strong>.</p>`;
        return;
      }

      const shard = await fetchShard(shardUrl);

      // Lookup by lemma (case-insensitive)
      let entry = shard[query] || Object.values(shard).find(e => String(e.lemma).toLowerCase() === query);

      if (!entry) {
        entry = Object.values(shard).find(e => e.variants?.some(v => v.toLowerCase() === query));
      }

      if (!entry) {
        entryContainer.innerHTML = `<p>No entry found for <strong>${query}</strong>.</p>`;
        return;
      }

      // update metadata safely
      document.title = `${entry.lemma} | MGU Dictionary`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) metaDescription.setAttribute("content", `Dictionary entry: ${entry.lemma} - ${entry.definition || entry.senses?.[0]?.definition || ""}`);

      // render
      entryContainer.innerHTML = renderEntryContent(entry);

      // attach handler now (use exact id from makeId)
      const btnId = makeId(entry.lemma);
      console.log('rendered entry', entry.lemma, 'button id:', btnId);
      const btn = document.getElementById(btnId);
      if (btn) {
        btn.addEventListener('click', () => playAudioOrTTS(entry));
        console.log('Attached play handler for', entry.lemma);
      } else {
        console.warn('No play button found for', entry.lemma, 'expected id:', btnId);
      }

    } catch (err) {
      const entryContainer = document.getElementById("entry");
      if (entryContainer) entryContainer.innerHTML = "<p>Error loading dictionary.</p>";
      console.error('initEntryPage error:', err);
    }
  })();
}

// run init on DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEntryPage);
} else {
  initEntryPage();
}