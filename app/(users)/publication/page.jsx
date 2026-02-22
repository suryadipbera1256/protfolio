"use client";

import { useState, useEffect, useRef } from 'react';
import { profile } from '../../../data/profile';
import Image from 'next/image';
import Mermaid from '../../../components/Mermaid';
import ShapChart from '../../../components/ShapChart';

// --- 1. DATA DEFINITIONS ---
const seizureRecognitionFlow = `flowchart LR
  classDef data fill:#0f172a,stroke:#334155,color:#fff,stroke-width:2px
  classDef process fill:#1e293b,stroke:#0891b2,color:#fff,stroke-width:2px
  classDef model fill:#312e81,stroke:#6366f1,color:#fff,stroke-width:2px
  classDef eval fill:#064e3b,stroke:#10b981,color:#fff,stroke-width:2px
  classDef alert fill:#7f1d1d,stroke:#ef4444,color:#fff,stroke-width:2px
  classDef safe fill:#14532d,stroke:#22c55e,color:#fff,stroke-width:2px

  subgraph Input ["EEG Biomarker Data"]
    direction TB
    D(Raw Signal Data) --> Scale(StandardScaler)
  end
  class Input data

  subgraph Modeling ["Machine Learning"]
    direction TB
    M(Support Vector Classifier) --> K(RBF Kernel, C=10)
  end
  class Modeling model

  subgraph XAI ["Explainability"]
    direction TB
    S(SHAP Permutation Explainer) --> C(Confusion Matrix: 97.5% Acc)
  end
  class XAI process

  subgraph Output ["Prediction"]
    direction TB
    O{Seizure Detected?}
  end
  class Output eval

  Input --> Modeling --> XAI --> Output
  Output -- Yes --> Alert[Seizure Activity ⚠️]
  Output -- No --> Safe[Normal Activity ✅]

  class Alert alert
  class Safe safe
`;
const seizureShapData = [
  { feature: "EEG_Signal_Variance", importance: 4.12 },
  { feature: "High_Frequency_Band_Power", importance: 3.55 },
  { feature: "Amplitude_Peak_to_Peak", importance: 2.87 },
  { feature: "Mean_Absolute_Value", importance: 1.45 },
  { feature: "Signal_Entropy", importance: 0.98 },
];
const seizureRecognitionImages = [
  "/PIC/RICSS.jpg",
  "/PIC/seizure_step0.jpg",
  "/PIC/seizure_step1.jpg",
  "/PIC/seizure_step2.jpg",
  "/PIC/seizure_step3.jpg",
  "/PIC/seizure_step4.jpg",
  "/PIC/seizure_step5.jpg"
];
// --- 2. REUSABLE, INTERACTIVE PROJECT CARD COMPONENT ---
function ProjectCard({ title, description, link, outputImages, chartFlow, shapData }) {
  const scrollContainerRef = useRef(null);
  
  // Duplicate the images array to create a long track that doesn't run out immediately
  const displayImages = outputImages && outputImages.length > 0 
    ? [...outputImages, ...outputImages] 
    : [];

  // Auto-sliding native scroll interval
  useEffect(() => {
    if (displayImages.length <= 1) return;
    
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        // Calculate the width of one image plus the gap (gap-4 is 16px)
        const scrollAmount = container.children[0].offsetWidth + 16; 

        // If we reach the end of the scroll, smoothly slide back to the start
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Otherwise, scroll right by exactly one image
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 3000); // Automates every 3 seconds

    return () => clearInterval(interval);
  }, [displayImages.length]);

  if (!title) return null;

  return (
    <div className="group relative flex flex-col w-full mb-8 z-0 hover:z-30">
      
      {/* FRONT LAYER: Main Project Box */}
      <div className="z-20 relative bg-black border hover:border-white border-neutral-200 dark:border-neutral-800 transition duration-400 ease-in-out p-8 rounded-xl shadow-xl shadow-cyan-500/20 dark:shadow-cyan-900/30 flex flex-col">
        <h3 className="text-3xl font-bold text-gray-300 group-hover:text-cyan-300 transition-colors mb-6">{title}</h3>
        
        {/* The Multi-Image Sliding Track */}
        {displayImages.length > 0 && (
          <div 
            ref={scrollContainerRef}
            // Hides the scrollbar while keeping the functionality
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 mb-8 pb-2 w-full h-[35vh] min-h-[250px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          >
            {displayImages.map((img, idx) => (
              <div 
                key={idx} 
                // Responsive sizing: 1 image on mobile (85%), 2 on tablet (48%), 3 on desktop (31.5%)
                className="shrink-0 snap-center w-[85%] sm:w-[48%] md:w-[31.5%] h-full relative rounded-lg overflow-hidden border border-white/10 bg-neutral-900"
              >
                <Image 
                  src={img} 
                  alt={`${title} preview ${idx}`} 
                  fill 
                  className="object-cover object-center" 
                  priority={idx < 3} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
              </div>
            ))}
          </div>
        )}

        <p className="text-gray-400 text-lg leading-relaxed mb-6">{description}</p>

        <div className="flex items-center gap-2 mt-auto">
          <a href={link} target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-2 font-semibold text-lg group/link">
            View repo / demo
            <svg className="w-5 h-5 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* BACK LAYER: Slide-down Charts */}
      {(chartFlow || shapData) && (
        <div className="z-10 relative bg-neutral-950/90 backdrop-blur-sm rounded-b-xl border border-t-0 border-neutral-800/50 px-6 
                        grid grid-rows-[0fr] group-hover:grid-rows-[1fr] 
                        opacity-0 group-hover:opacity-100 
                        -translate-y-16 group-hover:-translate-y-2 
                        transition-all duration-700 ease-in-out origin-top">
          <div className="overflow-hidden">
            <div className="pt-10 pb-8 flex flex-col gap-8 w-full">
              
              {chartFlow && (
                <Mermaid 
                  title="System Architecture Flow"
                  description="Visualizing the end-to-end data and processing pipeline."
                  chart={chartFlow} 
                />
              )}
              
              {shapData && (
                <ShapChart 
                  title="Model Interpretability (SHAP)"
                  description="Analysis of feature importance impact on model predictions."
                  data={shapData} 
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- 3. MAIN PAGE STRUCTURE ---
export default function Projects() {
  return (
    // relative z-0 prevents hovering elements from going over the Navbar
    <main className="relative z-0 min-h-screen text-white bg-neutral-950">
      <section className="max-w-5xl mx-auto pt-20 pb-10 px-4">
        <div className="flex flex-col gap-y-2">
          
          {profile.publication.map((p, i) => (
            <ProjectCard 
              key={`8-${i}`} title={p.title_1} description={p.description_1} link={p.link_1} 
              outputImages={seizureRecognitionImages} chartFlow={seizureRecognitionFlow} shapData={seizureShapData}
            />
          ))}

          {profile.publication.map((p, i) => (
            <ProjectCard 
              key={`1-${i}`} title={p.title_2} description={p.description_2} link={p.link_2} 
              outputImages={seizureRecognitionImages} chartFlow={seizureRecognitionFlow} shapData={seizureShapData}
            />
          ))}

        </div>
      </section>
    </main>
  );
}