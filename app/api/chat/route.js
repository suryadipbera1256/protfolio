import { NextResponse } from "next/server";
import { retrieveRelevant } from "../../../lib/rag"; 

// Tell Vercel this is a dynamic route, never cache it!
export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const body = await request.json();
    const { message } = body;
    const context = retrieveRelevant(message);

    // FIX: Using the direct Model endpoint instead of the generic router
    const response = await fetch("https://api-inference.huggingface.co/models/Qwen/Qwen2.5-7B-Instruct/v1/chat/completions", {
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
        stream: true 
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("HuggingFace Error:", errorText); // This will show up in Vercel Logs!
      return NextResponse.json({ error: `API Error: ${response.status}` }, { status: 500 });
    }

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