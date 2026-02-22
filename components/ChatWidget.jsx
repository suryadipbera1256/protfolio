"use client"

import { useState, useEffect } from "react";
import clsx from "clsx";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hey! I'm a digital version of Suryadip. Ask me anything about his work, mindset, or achievements!" }
  ]);
  const [input, setInput] = useState("");
  const [showPopup, setShowPopup] = useState(true);

  // 1. Define your custom suggested prompts here
  const suggestedPrompts = [
    "What are your Data Science & Python skills?",
    "Tell me about the FactoryGuard AI project",
    "Walk me through the TrendScout project"
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  // 2. Updated sendMessage to accept text directly from the buttons
  async function sendMessage(suggestedText) {
    const textToSend = typeof suggestedText === 'string' ? suggestedText : input;
    if (!textToSend.trim()) return;
    
    // 1. Add User message AND blank Assistant message
    setMessages(prev => [
      ...prev, 
      { role: "user", content: textToSend },
      { role: "assistant", content: "" }
    ]);
    
    if (typeof suggestedText !== 'string') setInput(""); 

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend })
      });

      if (!res.ok) throw new Error("Network response was not ok");

      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n").filter(line => line.trim() !== "");
          
          for (const line of lines) {
            if (line.includes("[DONE]")) return; 
            
            if (line.startsWith("data:")) {
              try {
                const data = JSON.parse(line.replace(/^data:\s*/, ""));
                const token = data.choices[0]?.delta?.content || "";
                
                // ---------------------------------------------------------
                // THE FIX: Spread the object so React Strict Mode doesn't 
                // double-count the letters!
                // ---------------------------------------------------------
                setMessages(prev => {
                  const newMessages = [...prev];
                  const lastIndex = newMessages.length - 1;
                  
                  newMessages[lastIndex] = {
                    ...newMessages[lastIndex],
                    content: newMessages[lastIndex].content + token
                  };
                  
                  return newMessages;
                });
              } catch (e) {
                // Ignore incomplete chunks
              }
            }
          }
        }
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      setMessages(prev => {
        const newMessages = [...prev];
        const lastIndex = newMessages.length - 1;
        newMessages[lastIndex] = {
          ...newMessages[lastIndex],
          content: "Sorry, I lost my connection. Please try again."
        };
        return newMessages;
      });
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      sendMessage();
    }
  };

  return (
    <>
      {showPopup && (
        <div className="fixed bottom-20 right-6 bg-white text-black px-4 py-2 rounded-lg shadow-lg z-50">
          Hey! I'm a digital version of Suryadip. Ask me anything...
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg z-50"
      >
        🤖
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 w-80 h-[60vh] bg-brand-base text-white rounded-xl shadow-xl p-4 z-50 flex flex-col">
          
          <div className="flex-1 overflow-y-auto space-y-3 mb-2 pr-2">
            {messages.map((m, i) => (
              <div key={i} className={clsx(
                "p-2 rounded-lg text-sm w-fit max-w-[85%]", 
                m.role === "user" ? "bg-indigo-600 ml-auto" : "bg-white/10"
              )}>
                {m.content}
              </div>
            ))}
          </div>

          {/* 3. The Suggested Prompts UI - Only renders if there is exactly 1 message (the greeting) */}
          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {suggestedPrompts.map((prompt, i) => (
                <button 
                  key={i}
                  onClick={() => sendMessage(prompt)}
                  className="text-xs bg-indigo-500/20 hover:bg-indigo-500/40 border border-indigo-400/30 text-indigo-100 px-3 py-1.5 rounded-full text-left transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          <div className="mt-auto flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown} 
              className="flex-1 px-3 py-2 text-sm rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-indigo-400"
              placeholder="Ask something..."
            />
            <button onClick={() => sendMessage()} className="px-4 py-2 text-sm bg-indigo-500 rounded-lg hover:bg-indigo-600 transition-colors">
              Send
            </button>
          </div>

        </div>
      )}
    </>
  );
}