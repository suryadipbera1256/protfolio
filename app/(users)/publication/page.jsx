"use client";

import { useState, useEffect } from 'react';
import { profile } from '../../../data/profile';
import Image from 'next/image';
import Mermaid from '../../../components/Mermaid';
import ShapChart from '../../../components/ShapChart';

// --- CUSTOM ZERO-LAYOUT-SHIFT TYPEWRITER EFFECT (STRICT-MODE SAFE) ---
function Typewriter({ text, delay = 0, speed = 30, showCursor = false, start = true }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!start) return;
    let i = 0;
    let interval;
    
    const timeout = setTimeout(() => {
      setIsTyping(true);
      interval = setInterval(() => {
        setDisplayedText(text.substring(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay, speed, start]);

  return (
    <span className="relative inline-block w-full text-left">
      <span className="invisible">{text}</span>
      <span className="absolute top-0 left-0 w-full h-full text-inherit">
        {displayedText}
        {showCursor && isTyping && (
          <span className="border-r-2 border-cyan-400 animate-pulse ml-[2px] opacity-80"></span>
        )}
      </span>
    </span>
  );
}

// --- 1. PUBLICATION DATA DEFINITIONS (BULLETPROOF MERMAID SYNTAX) ---

const seizureRecognitionFlow = `flowchart LR
  classDef data fill:#0f172a,stroke:#334155,color:#fff,stroke-width:2px
  classDef process fill:#1e293b,stroke:#0891b2,color:#fff,stroke-width:2px
  classDef model fill:#312e81,stroke:#6366f1,color:#fff,stroke-width:2px
  classDef eval fill:#064e3b,stroke:#10b981,color:#fff,stroke-width:2px
  classDef alert fill:#7f1d1d,stroke:#ef4444,color:#fff,stroke-width:2px
  classDef safe fill:#14532d,stroke:#22c55e,color:#fff,stroke-width:2px

  subgraph Input ["EEG Biomarker Data"]
    direction TB
    D["Raw Signal Data"] --> Scale["StandardScaler"]
  end
  class Input data

  subgraph Modeling ["Machine Learning"]
    direction TB
    M["Support Vector Classifier"] --> K["RBF Kernel C=10"]
  end
  class Modeling model

  subgraph XAI ["Explainability"]
    direction TB
    S["SHAP Permutation Explainer"] --> C["Confusion Matrix 97.5% Acc"]
  end
  class XAI process

  subgraph Output ["Prediction"]
    direction TB
    O{"Seizure Detected?"}
  end
  class Output eval

  Input --> Modeling --> XAI --> Output
  Output -- "Yes" --> Alert["Seizure Activity"]
  Output -- "No" --> Safe["Normal Activity"]
`;

const seizureShapData = [
  { feature: "EEG_Signal_Variance", importance: 4.12 },
  { feature: "High_Frequency_Band_Power", importance: 3.55 },
  { feature: "Amplitude_Peak_to_Peak", importance: 2.87 },
  { feature: "Mean_Absolute_Value", importance: 1.45 },
  { feature: "Signal_Entropy", importance: 0.98 },
];

const seizureRecognitionImages = [
  "/PIC/seizure_step0.jpg",
  "/PIC/seizure_step1.jpg",
  "/PIC/seizure_step2.jpg",
  "/PIC/seizure_step3.jpg",
  "/PIC/seizure_step4.jpg",
  "/PIC/seizure_step5.jpg"
];

const asdPredictionFlow = `flowchart LR
  classDef data fill:#0f172a,stroke:#334155,color:#fff,stroke-width:2px
  classDef process fill:#1e293b,stroke:#0891b2,color:#fff,stroke-width:2px
  classDef model fill:#312e81,stroke:#6366f1,color:#fff,stroke-width:2px
  classDef eval fill:#064e3b,stroke:#10b981,color:#fff,stroke-width:2px
  classDef alert fill:#0f766e,stroke:#22d3ee,color:#fff,stroke-width:2px
  classDef safe fill:#334155,stroke:#94a3b8,color:#fff,stroke-width:2px

  subgraph Input ["Behavioral & Demographic Data"]
    direction TB
    D["AQ-10 Screening Data"] --> Preprocess["Data Cleaning & Encoding"]
  end
  class Input data

  subgraph Modeling ["Machine Learning Pipeline"]
    direction TB
    Ensemble["Ensemble Classifier"] --> CrossVal["Stratified Cross-Validation"]
  end
  class Modeling model

  subgraph XAI ["Interpretability"]
    direction TB
    SHAP["SHAP Feature Importance"] --> Analysis["Behavioral Trait Analysis"]
  end
  class XAI process

  subgraph Output ["Screening Result"]
    direction TB
    O{"Likelihood of ASD Traits?"}
  end
  class Output eval

  Input --> Modeling --> XAI --> Output
  Output -- "High" --> ASD["ASD Traits Identified"]
  Output -- "Low" --> Neurotypical["Neurotypical Traits"]
`;

const asdShapData = [
  { feature: "Social Communication Score", importance: 4.85 },
  { feature: "Routine / Repetitive Behavior Index", importance: 3.62 },
  { feature: "Sensory Sensitivity Level", importance: 2.95 },
  { feature: "Attention to Detail / Hyperfocus", importance: 1.85 },
  { feature: "Empathy / Theory of Mind Quotient", importance: 1.25 },
];

const asdImages = [
    "/PIC/asd1.jpg", "/PIC/asd2.jpg", "/PIC/asd3.jpg", "/PIC/asd4.jpg", "/PIC/asd5.jpg",
];


// --- 2. REUSABLE, INTERACTIVE PROJECT CARD COMPONENT ---
function ProjectCard({ title, description, link, outputImages, chartFlow, shapData, index = 0 }) {
  const [showCharts, setShowCharts] = useState(false);

  if (!title) return null;

  return (
    <div 
      className="relative flex flex-col w-full mb-10 z-0 animate-fade-in-up"
      style={{ animationFillMode: 'both', animationDelay: `${index * 150}ms` }}
    >
      {/* FULLY ANIMATED MAIN CARD (Lifts up and glows on hover) */}
      <div className="z-20 relative bg-[#0a0a0a] border border-[#1f1f1f] hover:border-cyan-400/40 rounded-[1.5rem] p-6 md:p-8 flex flex-col overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] transition-all duration-500 hover:-translate-y-2 group/card">
        
        {/* Animated Glass Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-all duration-700 ease-in-out scale-110 group-hover/card:scale-100"
             style={{ background: 'radial-gradient(circle at 50% -20%, rgba(6,182,212,0.12), transparent 70%)' }} 
        />

        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-[1.15] text-[#f4f4f5] group-hover/card:text-cyan-400 transition-colors mb-4">
            {title}
          </h3>
          
          {outputImages && outputImages.length > 0 && (
            <div className="w-full overflow-hidden mb-5 pb-2 rounded-xl relative border border-[#1f1f1f]/50 bg-[#050505]">
              <div className="flex w-max animate-carousel hover:[animation-play-state:paused] gap-4">
                <div className="flex gap-4 pr-4">
                  {outputImages.map((img, idx) => (
                    <div key={`set1-${idx}`} className="shrink-0 w-[280px] sm:w-[320px] md:w-[360px] h-[180px] relative rounded-lg overflow-hidden bg-[#050505]">
                      <Image src={img} alt={`${title} preview ${idx}`} fill className="object-cover object-center transition-transform duration-700 ease-in-out hover:scale-105" priority={idx < 3} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 pr-4">
                  {outputImages.map((img, idx) => (
                    <div key={`set2-${idx}`} className="shrink-0 w-[280px] sm:w-[320px] md:w-[360px] h-[180px] relative rounded-lg overflow-hidden bg-[#050505]">
                      <Image src={img} alt={`${title} duplicate ${idx}`} fill className="object-cover object-center transition-transform duration-700 ease-in-out hover:scale-105" priority={false} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <p className="text-base md:text-lg text-[#888888] font-medium leading-relaxed mb-6">
            {description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-5 border-t border-[#1a1a1a]">
            {/* Animated Link Button */}
            <a href={link} target="_blank" rel="noreferrer" className="group/link flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#262626] flex items-center justify-center bg-[#050505] group-hover/link:bg-cyan-400/10 group-hover/link:border-cyan-400 group-hover/link:-translate-y-1 transition-all duration-300 group-hover/link:shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                <svg className="w-4 h-4 text-[#888888] group-hover/link:text-cyan-400 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
              <span className="text-[#888888] group-hover/link:text-cyan-400 text-sm font-medium transition-colors tracking-wide">
                View Research Paper
              </span>
            </a>

            {/* Animated Toggle Button */}
            {(chartFlow || shapData) && (
              <button 
                onClick={() => setShowCharts(!showCharts)}
                className="group/btn flex items-center gap-3"
              >
                <span className={`text-sm font-medium transition-colors tracking-wide ${showCharts ? 'text-cyan-400' : 'text-[#888888] group-hover/btn:text-cyan-400'}`}>
                  {showCharts ? 'Hide Architecture' : 'View Architecture'}
                </span>
                <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${showCharts ? 'bg-cyan-400/10 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)]' : 'bg-[#050505] border-[#262626] group-hover/btn:-translate-y-1 group-hover/btn:bg-cyan-400/10 group-hover/btn:border-cyan-400'}`}>
                  <svg className={`w-4 h-4 transition-transform duration-300 ${showCharts ? 'text-cyan-400 rotate-180' : 'text-[#888888] group-hover/btn:text-cyan-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Expandable Chart Section */}
      {(chartFlow || shapData) && showCharts && (
        <div className="z-10 relative bg-[#050505] rounded-b-[1.5rem] border border-[#1f1f1f] border-t-0 px-6 py-8 -mt-4 pt-10 shadow-lg animate-fade-in-up">
          <div className="flex flex-col gap-8 w-full">
            {chartFlow && (<Mermaid title="Research Architecture" description="Visualizing the end-to-end data and processing pipeline." chart={chartFlow} />)}
            {shapData && (<ShapChart title="Model Interpretability (SHAP)" description="Analysis of feature importance impact on predictions." data={shapData} />)}
          </div>
        </div>
      )}
    </div>
  );
}

// --- 3. MAIN PAGE STRUCTURE ---
export default function Publications() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Map the profile data to our robust publications list
  const PUBLICATIONS_LIST = profile.publication.flatMap((p, i) => {
    const list = [];
    if (p.title_1) list.push({
      id: `pub1-${i}`,
      shortName: 'EEG Seizure Detection',
      title: p.title_1,
      desc: p.description_1,
      link: p.link_1,
      imgs: seizureRecognitionImages,
      flow: seizureRecognitionFlow,
      shap: seizureShapData
    });
    // EXPLICIT ASD TITLE ADDED HERE
    if (p.title_2) list.push({
      id: `pub2-${i}`,
      shortName: 'ASD ML Prediction',
      title: "Autism Spectrum Disorder (ASD) Prediction using Machine Learning",
      desc: p.description_2 || "A behavioral and demographic data-driven machine learning approach to predicting traits associated with Autism Spectrum Disorder.",
      link: p.link_2,
      imgs: asdImages,
      flow: asdPredictionFlow,
      shap: asdShapData
    });
    return list;
  });

  const [activePubId, setActivePubId] = useState(PUBLICATIONS_LIST[0]?.id || null);
  const activePubItem = PUBLICATIONS_LIST.find(p => p.id === activePubId);

  return (
    <main className="relative z-0 min-h-screen bg-[#050505] text-[#f4f4f5]">
      <div className="max-w-[85rem] mx-auto px-6 md:px-12 lg:px-16 pt-32 pb-32">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative items-start">
          
          {/* Animated Sidebar */}
          <aside className={`w-full lg:w-64 flex-shrink-0 lg:sticky lg:top-32 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 z-20 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] transition-all duration-1000 ease-out transform ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            {PUBLICATIONS_LIST.map((pub, index) => (
              <div 
                key={pub.id}
                className={`transition-all duration-700 ease-out transform ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => setActivePubId(pub.id)}
                  className={`group w-full flex items-center justify-between px-5 py-4 text-left transition-all duration-300 rounded-2xl relative overflow-hidden flex-shrink-0 ${
                    activePubId === pub.id ? 'text-cyan-400 font-bold' : 'text-[#888888] font-medium hover:text-[#f4f4f5] hover:bg-[#141414]'
                  }`}
                >
                  {activePubId === pub.id && (
                    <div className="absolute inset-0 bg-cyan-400/5 border border-cyan-400/20 rounded-2xl shadow-[inset_0_0_15px_rgba(6,182,212,0.1)]"></div>
                  )}
                  
                  <span className={`relative z-10 transition-transform duration-300 whitespace-nowrap ${
                    activePubId === pub.id ? 'translate-x-2' : 'group-hover:translate-x-2'
                  }`}>
                    {pub.shortName}
                  </span>

                  <svg className={`hidden lg:block w-4 h-4 relative z-10 transition-all duration-300 ${
                    activePubId === pub.id ? 'opacity-100 translate-x-0 text-cyan-400' : 'opacity-0 -translate-x-4'
                  }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </aside>

          {/* Animated Right Content */}
          <div className={`flex-1 w-full min-w-0 lg:max-w-4xl transition-all duration-1000 ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '300ms' }}>
            {activePubItem && (
              <div key={activePubItem.id} className="animate-fade-in-up">
                
                <div className="mb-10 border-b border-[#1f1f1f] pb-6">
                  
                  <div className="mb-5">
                    <h1 className="inline-block px-4 py-2 bg-[#141414] border border-[#262626] rounded-full text-cyan-400 text-sm md:text-base font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                      <Typewriter 
                        text={`${activePubItem.shortName} Paper`} 
                        delay={100} 
                        speed={25} 
                        showCursor={true} 
                      />
                    </h1>
                  </div>
                  
                  <p className="text-base md:text-lg text-[#888888] font-medium leading-relaxed max-w-3xl min-h-[3rem]">
                    <Typewriter 
                      text={activePubItem.title} 
                      delay={100 + ((activePubItem.shortName.length + 6) * 25) + 150} 
                      speed={15} 
                      showCursor={false} 
                    />
                  </p>

                </div>

                <div className="flex flex-col gap-y-4">
                  <ProjectCard 
                    index={0}
                    title={activePubItem.title} 
                    description={activePubItem.desc} 
                    link={activePubItem.link} 
                    outputImages={activePubItem.imgs} 
                    chartFlow={activePubItem.flow} 
                    shapData={activePubItem.shap} 
                  />
                </div>

              </div>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}