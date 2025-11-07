"use client"

import { useState, useEffect } from "react";
import clsx from "clsx";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi, I’m Suryadip’s assistant. Ask me anything about his work, mindset, or achievements!" }
  ]);
  const [input, setInput] = useState("");
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  async function sendMessage() {
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    const res = await fetch("app/(user)/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });
    const data = await res.json();
    setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
  }

  return (
    <>
      {showPopup && (
        <div className="fixed bottom-20 right-6 bg-white text-black px-4 py-2 rounded-lg shadow-lg z-50">
          Hi, I’m Suryadip’s assistant. Ask me anything!
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg z-50"
      >
        💬
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 w-80 h-[60vh] bg-brand-base text-white rounded-xl shadow-xl p-4 z-50 flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-2">
            {messages.map((m, i) => (
              <div key={i} className={clsx("p-2 rounded", m.role === "user" ? "bg-indigo-600 ml-auto" : "bg-white/10")}>
                {m.content}
              </div>
            ))}
          </div>
          <div className="mt-2 flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              className="flex-1 px-2 py-1 rounded bg-white/10 border border-white/20"
              placeholder="Ask something..."
            />
            <button onClick={sendMessage} className="px-3 py-1 bg-indigo-500 rounded hover:bg-indigo-600">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}