"use client";

import React from "react";

export default function ShapChart({ title, description, data }) {
  // Return nothing if no data is provided
  if (!data || data.length === 0) return null;

  const maxImportance = Math.max(...data.map(d => d.importance));

  return (
    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl w-full flex flex-col gap-4">
      {/* Dynamic Headline and Description */}
      <div>
        {title && <h2 className="text-xl font-bold text-white">{title}</h2>}
        {description && <p className="text-sm text-gray-400 mt-1">{description}</p>}
      </div>

      {/* Chart Bars */}
      <div className="space-y-4 mt-2">
        {data.map((item, index) => {
          const widthPercent = (item.importance / maxImportance) * 100;

          return (
            <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="w-full sm:w-1/3 text-sm font-medium text-gray-300 truncate">
                {item.feature}
              </div>
              
              <div className="w-full sm:w-2/3 flex items-center gap-3">
                <div className="flex-1 h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-cyan-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${widthPercent}%` }}
                  />
                </div>
                <div className="w-12 text-xs text-cyan-300 font-mono text-right">
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