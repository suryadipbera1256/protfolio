export function splitText(text, chunkSize = 500, overlap = 100) {
  const chunks = [];
  let i = 0;

  // 1. Safety check to ensure valid chunk sizes
  if (chunkSize <= 0 || overlap >= chunkSize) {
    console.warn("Invalid chunkSize or overlap. Using safe defaults.");
    chunkSize = 500;
    overlap = 100;
  }

  // 2. Ensure text is a valid string
  if (!text || typeof text !== "string") {
    return [];
  }

  // 3. The splitting logic
  while (i < text.length) {
    const end = Math.min(i + chunkSize, text.length);
    chunks.push(text.slice(i, end));
    
    // 4. THE FIX: If we have reached the end of the text, stop the loop!
    if (end >= text.length) {
      break; 
    }
    
    // Move i forward, applying the overlap
    i = end - overlap;
  }

  return chunks;
}