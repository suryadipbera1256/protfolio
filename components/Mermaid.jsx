"use client";

import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
});

export default function Mermaid({ title, description, chart }) {
  const [svgContent, setSvgContent] = useState('');
  // Generates a random, unique ID for every single diagram on the page
  const idRef = useRef(`mermaid-${Math.random().toString(36).substring(2, 9)}`);

  useEffect(() => {
    if (!chart) return;
    
    const renderDiagram = async () => {
      try {
        // This is the safest way to render Mermaid in React
        const { svg } = await mermaid.render(idRef.current, chart);
        setSvgContent(svg);
      } catch (err) {
        console.error("Mermaid syntax error:", err);
      }
    };

    renderDiagram();
  }, [chart]);

  return (
    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl w-full flex flex-col gap-4">
      <div>
        {title && <h2 className="text-xl font-bold text-white">{title}</h2>}
        {description && <p className="text-sm text-gray-400 mt-1">{description}</p>}
      </div>
      
      {/* Safely inject the rendered SVG */}
      <div 
        className="flex justify-center w-full overflow-x-auto mt-2"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    </div>
  );
}