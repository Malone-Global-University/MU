const fs = require("fs");
const path = require("path");

// Directory containing your shards
const shardsDir = path.join(__dirname, "shards"); // adjust if needed

// Default values
const DEFAULT_DIFFICULTY = "College";
const DEFAULT_PRONUNCIATION = { ipa: "", phonetic: "" };

const shardFiles = fs.readdirSync(shardsDir).filter(f => f.endsWith(".json"));

shardFiles.forEach(file => {
  const filePath = path.join(shardsDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  Object.keys(data).forEach(key => {
    const entry = data[key];

    // Add lemma if missing
    if (!entry.lemma) entry.lemma = key;

    // Add difficulty if missing
    if (!entry.difficulty) entry.difficulty = DEFAULT_DIFFICULTY;

    // Add pronunciation object if missing
    if (!entry.pronunciation) entry.pronunciation = { ...DEFAULT_PRONUNCIATION };

    // Convert definition to senses array if senses is missing
    if (!entry.senses && entry.definition) {
      entry.senses = [
        {
          definition: entry.definition,
          examples: entry.examples || []
        }
      ];
      delete entry.definition; // remove old top-level definition
      delete entry.examples;   // remove old top-level examples (now inside senses)
    }
  });

  // Save back to file
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  console.log(`Upgraded shard with multi-sense support: ${file}`);
});

console.log("All shards upgraded successfully with senses!");