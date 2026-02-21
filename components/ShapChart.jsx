"use client";

import React from "react";

export default function ShapChart() {
  // Replace this with your actual imported JSON data later
  const shapData = [
    { feature: "Sensor 11 (Static Pressure)", importance: 2.45 },
    { feature: "Sensor 14 (Core Speed)", importance: 1.82 },
    { feature: "Sensor 09 (Physical Fan Speed)", importance: 1.34 },
    { feature: "Operating Cycle", importance: 0.95 },
    { feature: "Sensor 04 (Total Temperature)", importance: 0.62 },
    { feature: "Sensor 15 (Bypass Ratio)", importance: 0.41 },
  ];

  // Find max value to scale the bars properly
  const maxImportance = Math.max(...shapData.map(d => d.importance));

  return (
    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl my-6">
      <h3 className="text-xl font-bold text-white mb-2">Feature Importance (SHAP Values)</h3>
      <p className="text-sm text-gray-400 mb-6">
        Global interpretability showing which sensor readings have the highest impact on Remaining Useful Life (RUL) predictions.
      </p>

      <div className="space-y-4">
        {shapData.map((item, index) => {
          // Calculate percentage width for the bar
          const widthPercent = (item.importance / maxImportance) * 100;

          return (
            <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              {/* Feature Name */}
              <div className="w-full sm:w-1/3 text-sm font-medium text-gray-300 truncate">
                {item.feature}
              </div>
              
              {/* Bar and Value */}
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