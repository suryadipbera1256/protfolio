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
    // Updated container background to match the premium dark theme
    <div className="bg-[#0a0a0a] border border-[#1f1f1f] p-6 md:p-8 rounded-3xl w-full flex flex-col gap-4">
      <div>
        {/* MATCHING HOME PAGE TITLE TEXT */}
        {title && <h2 className="text-xl md:text-2xl font-semibold text-[#f4f4f5] tracking-tight">{title}</h2>}
        {/* MATCHING HOME PAGE DESCRIPTION TEXT */}
        {description && <p className="text-sm md:text-base font-medium text-[#888888] mt-2">{description}</p>}
      </div>
      
      {/* Safely inject the rendered SVG */}
      <div 
        className="flex justify-center w-full overflow-x-auto mt-4 [&>svg]:max-w-full"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    </div>
  );
}