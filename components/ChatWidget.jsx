"use client"

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import clsx from "clsx";

// --- CUSTOM SVG ROBOT AVATAR ---
const RobotAvatar = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]">
    {/* Glowing Aura */}
    <circle cx="50" cy="50" r="45" fill="url(#aiGlow)" opacity="0.4" className="animate-pulse" style={{ animationDuration: '3s' }} />
    
    {/* Main Head */}
    <rect x="25" y="30" width="50" height="44" rx="18" fill="#0f172a" stroke="#22d3ee" strokeWidth="2.5" />
    
    {/* Glass Visor */}
    <rect x="30" y="42" width="40" height="18" rx="8" fill="#1e293b" stroke="#0ea5e9" strokeWidth="1" opacity="0.8" />
    
    {/* Animated Blinking Eyes */}
    <circle cx="42" cy="51" r="3.5" fill="#22d3ee" className="animate-[pulse_1.5s_infinite]" />
    <circle cx="58" cy="51" r="3.5" fill="#22d3ee" className="animate-[pulse_1.5s_infinite]" style={{ animationDelay: "0.3s" }} />
    
    {/* Earpieces / Antennas */}
    <path d="M 25 51 L 18 51 M 75 51 L 82 51" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" />
    <circle cx="16" cy="51" r="3" fill="#22d3ee" />
    <circle cx="84" cy="51" r="3" fill="#22d3ee" />

    <defs>
      <radialGradient id="aiGlow">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
  </svg>
);

export default function ChatWidget() {
  // STATE: Hydration fix to prevent browser extension crashes
  const [isMounted, setIsMounted] = useState(false);
  
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hey! I'm a digital version of Suryadip. Ask me anything about his work, mindset, or achievements!" }
  ]);
  const [input, setInput] = useState("");
  const [showPopup, setShowPopup] = useState(true);
  const messagesEndRef = useRef(null);

  const suggestedPrompts = [
    "What are your Data Science & Python skills?",
    "Tell me about the FactoryGuard AI project",
    "Walk me through the TrendScout project"
  ];

  // Auto-hide the waving greeting after 8 seconds & Mount the component safely
  useEffect(() => {
    setIsMounted(true); // Mounts client-side to avoid Hydration errors
    const timer = setTimeout(() => setShowPopup(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  // Smooth Auto-scroll to the newest message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  async function sendMessage(suggestedText) {
    const textToSend = typeof suggestedText === 'string' ? suggestedText : input;
    if (!textToSend.trim()) return;
    
    setMessages(prev => [
      ...prev, 
      { role: "user", content: textToSend },
      { role: "assistant", content: "" } // Empty string ready for stream
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
                
                // Bulletproof state update for strict-mode streaming
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

  // If the browser hasn't mounted the component yet, render nothing to avoid hydration mismatches
  if (!isMounted) return null;

  return (
    <>
      {/* CSS for Waving Hand Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes wave {
          0% { transform: rotate(0.0deg) }
          10% { transform: rotate(14.0deg) }
          20% { transform: rotate(-8.0deg) }
          30% { transform: rotate(14.0deg) }
          40% { transform: rotate(-4.0deg) }
          50% { transform: rotate(10.0deg) }
          60% { transform: rotate(0.0deg) }
          100% { transform: rotate(0.0deg) }
        }
        .wave-hand {
          animation: wave 2.5s infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      {/* --- WAVING GREETING POPUP --- */}
      {showPopup && !open && (
        <div 
          onClick={() => { setOpen(true); setShowPopup(false); }}
          className="fixed bottom-28 right-6 bg-[#050505]/90 backdrop-blur-2xl border border-cyan-500/30 text-[#f4f4f5] pl-3 pr-6 py-3 rounded-[2rem] rounded-br-md shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(6,182,212,0.2)] z-50 flex items-center gap-4 cursor-pointer transition-all duration-500 animate-fade-in-up hover:scale-105 group"
        >
          {/* Avatar & Waving Hand */}
          <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-cyan-950/50 border border-cyan-400/30 shadow-[inset_0_0_15px_rgba(6,182,212,0.2)]">
            <RobotAvatar />
            <span className="absolute -top-2 -right-2 text-[22px] wave-hand drop-shadow-md">👋</span>
          </div>

          <div className="flex flex-col">
            <span className="text-cyan-400 text-[10px] font-extrabold uppercase tracking-widest mb-0.5">DiGi SURYA</span>
            <span className="text-sm font-medium leading-snug">Hi! I'm here to help.<br/>Ask me anything!</span>
          </div>
        </div>
      )}

      {/* --- FLOATING CIRCLE BUTTON --- */}
      <button
        onClick={() => { setOpen(!open); setShowPopup(false); }}
        className={clsx(
          "fixed bottom-6 right-6 w-16 h-16 rounded-full bg-[#050505] border-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center transition-all duration-500 z-50 overflow-hidden group",
          open ? "border-[#333] rotate-180 scale-90 shadow-none" : "border-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.7)] hover:scale-110"
        )}
      >
        {!open && <span className="absolute inset-0 w-full h-full bg-cyan-500/10 animate-pulse pointer-events-none"></span>}
        
        {open ? (
          // Close 'X' Icon
          <svg className="w-7 h-7 text-[#888888] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // AI Robot Avatar
          <div className="w-11 h-11 group-hover:scale-110 transition-transform duration-500">
            <RobotAvatar />
          </div>
        )}
      </button>

      {/* --- EXIM-LEVEL CHAT WINDOW --- */}
      <div className={clsx(
        "fixed right-6 bottom-28 w-[380px] h-[600px] max-h-[75vh] z-40 transition-all duration-500 origin-bottom-right flex flex-col",
        open ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-10 pointer-events-none"
      )}>
        <div className="w-full h-full bg-[#050505]/85 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(6,182,212,0.15)] flex flex-col overflow-hidden relative">
          
          {/* Subtle Top Glow inside the box */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>

          {/* 1. Glassy Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-b from-cyan-950/20 to-transparent border-b border-[#1f1f1f]">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-cyan-500/30 flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                  <div className="w-7 h-7"><RobotAvatar /></div>
               </div>
               <div>
                  <h3 className="text-sm font-bold text-[#f4f4f5] tracking-wide">DiGi SURYA</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Online</span>
                  </div>
               </div>
            </div>
            
            <button onClick={() => setOpen(false)} className="w-8 h-8 rounded-full bg-[#141414] border border-[#262626] flex items-center justify-center text-[#888888] hover:text-white hover:border-cyan-400 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
            </button>
          </div>

          {/* 2. Messages Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} className={clsx(
                "p-3.5 text-[13px] md:text-sm w-fit max-w-[85%] leading-relaxed shadow-sm", 
                m.role === "user" 
                  ? "bg-gradient-to-br from-cyan-600 to-cyan-500 text-white ml-auto rounded-[1.5rem] rounded-tr-sm shadow-[0_5px_15px_rgba(6,182,212,0.2)]" 
                  : "bg-[#141414] border border-[#262626] text-[#e4e4e7] rounded-[1.5rem] rounded-tl-sm"
              )}>
                {m.content || <span className="animate-pulse">Thinking...</span>}
              </div>
            ))}
            
            {/* Suggested Prompts (Only show at the beginning) */}
            {messages.length === 1 && (
              <div className="flex flex-col gap-2 mt-6 animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
                <span className="text-[10px] uppercase text-[#666] tracking-widest font-bold ml-2">Suggested Topics</span>
                <div className="flex flex-col gap-2">
                  {suggestedPrompts.map((prompt, i) => (
                    <button 
                      key={i}
                      onClick={() => sendMessage(prompt)}
                      className="text-left text-xs bg-[#0a0a0a] border border-[#1f1f1f] hover:border-cyan-400/50 text-[#a1a1aa] hover:text-cyan-400 px-4 py-3 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-[0_5px_15px_rgba(6,182,212,0.1)] hover:-translate-y-0.5"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Auto-scroll target */}
            <div ref={messagesEndRef} />
          </div>

          {/* 3. Sleek Floating Input Footer */}
          <div className="p-4 bg-gradient-to-t from-[#050505] to-transparent">
            <div className="relative flex items-center w-full">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown} 
                className="w-full bg-[#141414]/90 backdrop-blur-md border border-[#262626] focus:border-cyan-400 text-[#f4f4f5] text-sm rounded-full pl-5 pr-12 py-3.5 outline-none transition-all duration-300 placeholder:text-[#555] shadow-inner"
                placeholder="Message AI Assistant..."
              />
              <button 
                onClick={() => sendMessage()} 
                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-cyan-600 hover:bg-cyan-400 flex items-center justify-center text-white transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:scale-105"
              >
                <svg className="w-4 h-4 translate-x-[1px] -translate-y-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}