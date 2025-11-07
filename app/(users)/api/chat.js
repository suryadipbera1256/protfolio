import { retrieveRelevant } from "../../lib/rag";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { message } = req.body;
  const context = retrieveRelevant(message);

  const prompt = `
You are Suryadip’s personal assistant. Use only the context below.
If unsure, say "I don't have that information yet."

Context:
${context}

User: ${message}
Assistant:
`;

  const response = await fetch("https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.HF_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ inputs: prompt, parameters: { max_new_tokens: 300 } })
  });

  const data = await response.json();
  const reply = Array.isArray(data) ? data[0]?.generated_text || "..." : data.generated_text || "...";
  res.status(200).json({ reply: reply.split("Assistant:").pop().trim() });
  console.log("HF response:", data); // Add this
}