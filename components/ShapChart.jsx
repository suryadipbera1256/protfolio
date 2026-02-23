"use client";

import React from "react";

export default function ShapChart({ title, description, data }) {
  // Return nothing if no data is provided
  if (!data || data.length === 0) return null;

  const maxImportance = Math.max(...data.map(d => d.importance));

  return (
    // Updated container background to match the premium dark theme
    <div className="bg-[#0a0a0a] border border-[#1f1f1f] p-6 md:p-8 rounded-3xl w-full flex flex-col gap-4">
      
      {/* Dynamic Headline and Description */}
      <div>
        {/* MATCHING HOME PAGE TITLE TEXT */}
        {title && <h2 className="text-xl md:text-2xl font-semibold text-[#f4f4f5] tracking-tight">{title}</h2>}
        {/* MATCHING HOME PAGE DESCRIPTION TEXT */}
        {description && <p className="text-sm md:text-base font-medium text-[#888888] mt-2">{description}</p>}
      </div>

      {/* Chart Bars */}
      <div className="space-y-5 mt-4">
        {data.map((item, index) => {
          const widthPercent = (item.importance / maxImportance) * 100;

          return (
            <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              
              {/* Feature Name */}
              <div className="w-full sm:w-1/3 text-sm md:text-base font-medium text-[#f4f4f5] truncate">
                {item.feature}
              </div>
              
              {/* Bar and Value */}
              <div className="w-full sm:w-2/3 flex items-center gap-4">
                <div className="flex-1 h-3 bg-[#1a1a1a] border border-[#262626] rounded-full overflow-hidden relative">
                  <div 
                    className="h-full bg-cyan-400 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                    style={{ width: `${widthPercent}%` }}
                  />
                </div>
                <div className="w-14 text-xs md:text-sm text-cyan-400 font-mono text-right font-semibold">
                  +{item.importance.toFixed(2)}
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}