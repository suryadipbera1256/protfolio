"use client";

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

// --- 2. PREMIUM UNIFIED CARD COMPONENT ---
function ProjectCard({ title, description, link, outputImages, chartFlow, shapData }) {
  if (!title) return null;

  return (
    <div className="group relative flex flex-col w-full mb-8 z-0 hover:z-30">
      
      {/* FRONT LAYER: Main Box with Cyan Glow */}
      <div className="z-20 relative bg-[#0a0a0a] border border-[#1f1f1f] hover:border-cyan-400/60 transition-all duration-500 ease-in-out p-8 rounded-3xl shadow-none hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] flex flex-col overflow-hidden group/card">
        <h3 className="text-3xl font-bold text-[#f4f4f5] group-hover/card:text-cyan-400 transition-colors mb-6 z-10">{title}</h3>
        
        {/* Continuous Pure CSS Marquee Track */}
        {outputImages && outputImages.length > 0 && (
          <div className="w-full overflow-hidden mb-8 pb-2 rounded-xl relative z-10">
            <div className="flex w-max animate-carousel hover:[animation-play-state:paused] gap-4">
              <div className="flex gap-4 pr-4">
                {outputImages.map((img, idx) => (
                  <div key={`set1-${idx}`} className="shrink-0 w-[280px] sm:w-[320px] md:w-[360px] h-[250px] relative rounded-lg overflow-hidden border border-[#1f1f1f] bg-[#050505]">
                    <Image src={img} alt={`${title} preview ${idx}`} fill className="object-cover object-center" priority={idx < 3} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 pr-4">
                {outputImages.map((img, idx) => (
                  <div key={`set2-${idx}`} className="shrink-0 w-[280px] sm:w-[320px] md:w-[360px] h-[250px] relative rounded-lg overflow-hidden border border-[#1f1f1f] bg-[#050505]">
                    <Image src={img} alt={`${title} duplicate ${idx}`} fill className="object-cover object-center" priority={false} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <p className="text-[#a1a1aa] text-lg leading-relaxed mb-6 z-10">{description}</p>

        {/* View Button with Arrow Animation */}
        <a href={link} target="_blank" rel="noreferrer" className="group/link flex items-center gap-4 mt-auto pt-6 border-t border-[#1a1a1a] z-10 w-max">
          <div className="w-10 h-10 rounded-full border border-[#262626] flex items-center justify-center bg-[#050505] group-hover/link:bg-cyan-400/10 group-hover/link:border-cyan-400 transition-all duration-300 group-hover/link:shadow-[0_0_10px_rgba(6,182,212,0.3)]">
            <svg className="w-4 h-4 text-[#888888] group-hover/link:text-cyan-400 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
          <span className="text-[#888888] group-hover/link:text-cyan-400 text-sm font-medium transition-colors duration-300 tracking-wide">
            View Paper / Link
          </span>
        </a>
      </div>

      {/* BACK LAYER: Slide-down Charts */}
      {(chartFlow || shapData) && (
        <div className="z-10 relative bg-[#050505]/95 backdrop-blur-sm rounded-b-3xl border border-t-0 border-[#1f1f1f] px-6 grid grid-rows-[0fr] group-hover:grid-rows-[1fr] opacity-0 group-hover:opacity-100 -translate-y-16 group-hover:-translate-y-2 transition-all duration-700 ease-in-out origin-top">
          <div className="overflow-hidden">
            <div className="pt-10 pb-8 flex flex-col gap-8 w-full">
              {chartFlow && (<Mermaid title="System Architecture Flow" description="Visualizing the end-to-end data and processing pipeline." chart={chartFlow} />)}
              {shapData && (<ShapChart title="Model Interpretability (SHAP)" description="Analysis of feature importance impact on model predictions." data={shapData} />)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- 3. MAIN PAGE STRUCTURE ---
export default function Publications() {
  return (
    // Updated background to perfectly match the Home page (#050505)
    <main className="relative z-0 min-h-screen overflow-x-hidden bg-[#050505] text-[#f4f4f5] pt-32 pb-16">
      <section className="max-w-5xl mx-auto px-4">
        
        {/* Page Title */}
        <div className="mb-12 pl-2">
          <div className="mb-6">
          <h2 className="inline-block px-4 py-2 bg-[#141414] border border-[#262626] rounded-full text-cyan-400 text-xs md:text-sm font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            Publications
          </h2>
        </div>
          <p className="text-[#888888] font-medium text-lg">
            My academic research, presentations, and published papers.
          </p>
        </div>

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