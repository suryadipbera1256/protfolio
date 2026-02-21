"use client";

import React from "react";

export default function ShapChart() {
  // Replace this with your actual imported JSON data later
const shapData = [
    { feature: "Temperature_roll_mean", importance: 2.477489948272705},
    { feature: "Vibration_roll_mean", importance: 1.00245201587677},
    { feature: "Pressure_roll_mean", importance: 1.00245201587677},
    { feature: "Vibration", importance: 0.4880492687225342 },
    { feature: "Pressure", importance: 0.32502293586730957 },
    { feature: "Temperature", importance: 0.14670076966285706 },
    ];
const maxImportance = Math.max(...shapData.map(d => d.importance));

  // Find max value to scale the bars properly
return (
    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl my-6">
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