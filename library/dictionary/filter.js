/**
 * /library/dictionary/entry.js
 * Handles rendering dictionary entries from JSON.
 * Supports tier-based filtering and dynamic page generation.
 */

// Example usage:
// loadEntries('data/c.json', 'GRE'); // Load GRE-tier words from c.json

/**
 * Fetch JSON data for a given letter file
 * @param {string} filePath - Path to JSON file
 * @returns {Promise<Object>} - Parsed JSON object
 */
export async function fetchEntries(filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`Failed to fetch ${filePath}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return {};
  }
}

/**
 * Render a single dictionary entry
 * @param {Object} entry - Word entry object
 * @returns {HTMLElement} - DOM element for the word
 */
export function renderEntry(entry) {
  const container = document.createElement('div');
  container.classList.add('dictionary-entry');

  container.innerHTML = `
    <h2 class="word">${entry.word}</h2>
    <p class="pronunciation">${entry.pronunciation || ''}</p>
    <p class="part-of-speech">${entry.partOfSpeech || ''}</p>
    <p class="definition">${entry.definition}</p>
    ${entry.synonyms?.length ? `<p class="synonyms"><strong>Synonyms:</strong> ${entry.synonyms.join(', ')}</p>` : ''}
    ${entry.antonyms?.length ? `<p class="antonyms"><strong>Antonyms:</strong> ${entry.antonyms.join(', ')}</p>` : ''}
    <p class="tier"><strong>Tier:</strong> ${entry.tier}</p>
  `;

  return container;
}

/**
 * Load and render all entries from a JSON file
 * @param {string} filePath - Path to JSON file
 * @param {string|null} tierFilter - Optional tier filter ("SAT", "GRE", "Rare/Literary")
 * @param {HTMLElement} targetContainer - DOM container to append entries
 */
export async function loadEntries(filePath, tierFilter = null, targetContainer) {
  const entries = await fetchEntries(filePath);

  Object.values(entries)
    .filter(entry => !tierFilter || entry.tier === tierFilter)
    .forEach(entry => {
      const entryEl = renderEntry(entry);
      targetContainer.appendChild(entryEl);
    });
}
