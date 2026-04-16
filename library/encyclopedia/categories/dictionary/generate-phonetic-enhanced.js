const fs = require("fs");
const path = require("path");

// Directory containing your shards
const shardsDir = path.join(__dirname, "shards"); // adjust if needed

// Enhanced IPA → phonetic mapping
const ipaMap = {
  "tʃ": "ch",
  "dʒ": "j",
  "eɪ": "ay",
  "aɪ": "eye",
  "oʊ": "oh",
  "aʊ": "ow",
  "ɔɪ": "oy",
  "ɪə": "ee-uh",
  "eə": "air",
  "ʊə": "oo-uh",
  "ə": "uh",
  "ˈ": "",
  "ˌ": "",
  "æ": "a",
  "ɑ": "ah",
  "ɒ": "aw",
  "ɔ": "aw",
  "ɜ": "er",
  "ɪ": "ih",
  "i": "ee",
  "ʊ": "oo",
  "u": "oo",
  "ŋ": "ng",
  "θ": "th",
  "ð": "th",
  "ʃ": "sh",
  "ʒ": "zh",
  "r": "r",
  "l": "l",
  "b": "b",
  "d": "d",
  "f": "f",
  "g": "g",
  "ɡ": "g",
  "h": "h",
  "j": "y",
  "k": "k",
  "m": "m",
  "n": "n",
  "p": "p",
  "s": "s",
  "t": "t",
  "v": "v",
  "w": "w",
  "z": "z",
  "ʌ": "uh",
  "ɛ": "e"
};

// Convert IPA to rough phonetic spelling
function ipaToPhonetic(ipa) {
  if (!ipa) return "";
  let phonetic = ipa;

  // Sort keys by length descending to handle multi-char symbols first
  const keys = Object.keys(ipaMap).sort((a,b) => b.length - a.length);
  keys.forEach(sym => {
    const regex = new RegExp(sym, "g");
    phonetic = phonetic.replace(regex, ipaMap[sym]);
  });

  // Remove hyphens, normalize spaces
  phonetic = phonetic.replace(/[-]/g, " ").replace(/\s+/g, " ").trim();
  return phonetic;
}

// Process all JSON shards
const shardFiles = fs.readdirSync(shardsDir).filter(f => f.endsWith(".json"));

shardFiles.forEach(file => {
  const filePath = path.join(shardsDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  Object.keys(data).forEach(key => {
    const entry = data[key];

    // Ensure pronunciation object exists
    if (!entry.pronunciation || typeof entry.pronunciation !== "object") {
      entry.pronunciation = { ipa: "", phonetic: "" };
    }

    // If IPA exists, generate phonetic spelling
    if (entry.pronunciation.ipa && !entry.pronunciation.phonetic) {
      entry.pronunciation.phonetic = ipaToPhonetic(entry.pronunciation.ipa);
    }

    // If no IPA, ensure empty fields exist
    if (!entry.pronunciation.ipa) entry.pronunciation.ipa = "";
    if (!entry.pronunciation.phonetic) entry.pronunciation.phonetic = "";
  });

  // Save back to file
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  console.log(`Processed shard: ${file}`);
});

console.log("All shards updated with enhanced phonetic spellings!");
