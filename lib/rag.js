import { splitText } from "./split";
// 1. Directly import the JSON file so the bundler includes it
import suryadipData from "../data/suryadip.json";

export function retrieveRelevant(query) {
  // 2. Convert the JSON object to a string so your text splitter can read it
  const raw = JSON.stringify(suryadipData);
  
  const chunks = splitText(raw);
  const scored = chunks
    .map(chunk => ({
      chunk,
      score: query.split(" ").reduce((acc, word) => acc + (chunk.toLowerCase().includes(word.toLowerCase()) ? 1 : 0), 0)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(c => c.chunk);
    
  return scored.join("\n\n");
}