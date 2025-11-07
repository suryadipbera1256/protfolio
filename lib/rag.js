import fs from "fs";
import path from "path";
import { splitText } from "./split";

export function retrieveRelevant(query) {
  const filePath = path.join(process.cwd(), "data", "suryadip.json");
  const raw = fs.readFileSync(filePath, "utf-8");
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