const fs = require("fs");
const path = require("path");

// Directory containing your shards
const shardsDir = path.join(__dirname, "shards"); // adjust if needed

const shardFiles = fs.readdirSync(shardsDir).filter(f => f.endsWith(".json"));

shardFiles.forEach(file => {
  const filePath = path.join(shardsDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  Object.keys(data).forEach(key => {
    const entry = data[key];

    // If pronunciation is a string, convert to object
    if (entry.pronunciation && typeof entry.pronunciation === "string") {
      entry.pronunciation = {
        ipa: entry.pronunciation,
        phonetic: "" // empty for now, you can fill later
      };
    }

    // If pronunciation is missing entirely, create empty object
    if (!entry.pronunciation) {
      entry.pronunciation = { ipa: "", phonetic: "" };
    }
  });

  // Save back to file
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  console.log(`Updated pronunciation format: ${file}`);
});

console.log("All shards updated with pronunciation objects!");
