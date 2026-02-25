import { NextResponse } from "next/server";
import { retrieveRelevant } from "../../../lib/rag"; 

export async function POST(request) {
  try {
    const body = await request.json();
    const { message } = body;
    const context = retrieveRelevant(message);

    const response = await fetch("https://router.huggingface.co/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HF_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        model: "Qwen/Qwen2.5-7B-Instruct", 
        messages: [
          { role: "system", content: "You are Suryadip’s personal assistant. Use only the provided context. If unsure, say 'I don't have that information yet.'" },
          { role: "user", content: `Context:\n${context}\n\nUser Question: ${message}` }
        ],
        max_tokens: 300,
        stream: true // Streaming is turned ON
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ error: `API Error: ${response.status}` }, { status: 500 });
    }

    // THE FIX: We removed the `await response.json()` code here.
    // Instead, we instantly return the live stream directly to your ChatWidget!
    return new Response(response.body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    });

  } catch (error) {
    console.error("Error in chat route:", error);
    return NextResponse.json({ error: "Failed to fetch response" }, { status: 500 });
  }
}