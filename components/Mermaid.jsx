"use client"; // Must be a client component

import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import React from "react";
// Initialize mermaid with default settings
mermaid.initialize({
  startOnLoad: false,
  theme: 'dark', // You can change this to 'default', 'forest', etc.
  securityLevel: 'loose',
});

export default function Mermaid({ chart }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Only run if the container exists
    if (containerRef.current) {
      // Clear previous content to avoid repeated rendering
      containerRef.current.innerHTML = chart;
      
      // Use mermaid.run to render specific nodes (v10+ best practice)
      mermaid.run({
        nodes: [containerRef.current],
      }).catch(err => console.error("Mermaid render error:", err));
    }
  }, [chart]);

  return (
    <div 
      ref={containerRef} 
      className="mermaid flex justify-center p-4 bg-white/5 rounded-xl border border-white/10 my-6"
    >
      {chart}
    </div>
  );
}