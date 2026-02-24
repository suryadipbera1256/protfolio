"use client";

import React, { useEffect, useState } from 'react';
import mermaid from 'mermaid';

// Move initialization completely outside the component so it only runs once
mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
});

export default function Mermaid({ title, description, chart }) {
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    if (!chart) return;
    
    let isMounted = true;

    const renderDiagram = async () => {
      try {
        // THE FIX: We generate a 100% unique ID on every single render pass.
        // This stops Mermaid from crashing during Next.js Strict Mode double-renders!
        const uniqueId = `mermaid-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
        
        // Render the SVG using the safe unique ID
        const { svg } = await mermaid.render(uniqueId, chart);
        
        // Only update the screen if the component is still open
        if (isMounted) {
          setSvgContent(svg);
        }
      } catch (err) {
        console.error("Mermaid completely failed to render. Check your syntax!", err);
      }
    };

    renderDiagram();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [chart]);

  // If there's no chart data, don't show the box at all
  if (!chart) return null;

  return (
    <div className="bg-[#0a0a0a] border border-[#1f1f1f] p-6 md:p-8 rounded-3xl w-full flex flex-col gap-4">
      <div>
        {title && <h2 className="text-xl md:text-2xl font-semibold text-[#f4f4f5] tracking-tight">{title}</h2>}
        {description && <p className="text-sm md:text-base font-medium text-[#888888] mt-2">{description}</p>}
      </div>
      
      {/* Safely inject the rendered SVG with CSS to ensure it scales correctly */}
      {svgContent ? (
        <div 
          className="flex justify-center w-full overflow-x-auto mt-4 [&>svg]:max-w-full [&>svg]:h-auto drop-shadow-[0_0_15px_rgba(6,182,212,0.1)]"
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      ) : (
        <div className="flex items-center justify-center py-10 w-full">
            <span className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></span>
            <span className="ml-3 text-[#888888] font-medium text-sm animate-pulse">Rendering Architecture...</span>
        </div>
      )}
    </div>
  );
}