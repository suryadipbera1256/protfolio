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

// --- 1. DATA DEFINITIONS ---
const factoryGuardFlow = `flowchart LR
  classDef factory fill:#0f172a,stroke:#334155,color:#fff,stroke-width:2px
  classDef process fill:#1e293b,stroke:#0891b2,color:#fff,stroke-width:2px
  classDef model fill:#312e81,stroke:#6366f1,color:#fff,stroke-width:2px
  classDef app fill:#064e3b,stroke:#10b981,color:#fff,stroke-width:2px
  classDef alert fill:#7f1d1d,stroke:#ef4444,color:#fff,stroke-width:2px
  classDef safe fill:#14532d,stroke:#22c55e,color:#fff,stroke-width:2px

  subgraph IoT ["Sensors"]
    S(Temp, Pressure, Vib)
  end
  class IoT factory

  subgraph Pipeline ["Data Pipeline"]
    P1(Interpolate & Roll Mean) --> P2(SMOTE)
  end
  class Pipeline process

  subgraph Engine ["ML Engine"]
    M1[(XGBoost)] --- M2{SHAP}
  end
  class Engine model

  subgraph Deploy ["Deployment"]
    D(Flask UI & API)
  end
  class Deploy app

  IoT --> Pipeline --> Engine --> Deploy
  Deploy --> T{Prob >= 50%?}
  T -- Yes --> Danger[CRITICAL RISK]
  T -- No --> Safe[Healthy]

  class Danger alert
  class Safe safe
`;
const factoryGuardShapData = [
  { feature: "Temperature_roll_mean", importance: 2.47 },
  { feature: "Vibration_roll_mean", importance: 1.00 },
  { feature: "Pressure_roll_mean", importance: 1.00 },
  { feature: "Vibration", importance: 0.48 },
  { feature: "Pressure", importance: 0.32 },
];
const factoryGuardImages = [
    "/PIC/iot1.jpg", "/PIC/iot2.jpg", "/PIC/iot3.jpg", "/PIC/iot4.jpg",
    "/PIC/iot5.jpg", "/PIC/iot6.jpg", "/PIC/iot7.jpg", "/PIC/iot8.jpg",
];

const lungCancerFlow = `flowchart LR
  classDef data fill:#0f172a,stroke:#334155,color:#fff,stroke-width:2px
  classDef cnn fill:#312e81,stroke:#6366f1,color:#fff,stroke-width:2px
  classDef dense fill:#1e293b,stroke:#0891b2,color:#fff,stroke-width:2px
  classDef output fill:#064e3b,stroke:#10b981,color:#fff,stroke-width:2px
  classDef alert fill:#7f1d1d,stroke:#ef4444,color:#fff,stroke-width:2px
  classDef safe fill:#14532d,stroke:#22c55e,color:#fff,stroke-width:2px

  subgraph Input ["Image Pipeline"]
    direction TB
    I(Raw Medical Scans) --> P(Resize & Normalize)
    P --> A(Data Augmentation)
  end
  class Input data

  subgraph FeatureExtraction ["Transfer Learning"]
    direction TB
    Base(Inception V3 Base) --> Freeze(Freeze Core Weights)
    Freeze --> Extract(Extract Spatial Features)
  end
  class FeatureExtraction cnn

  subgraph Classification ["Custom Top Layers"]
    direction TB
    F(Global Average Pooling) --> D1(Dense Layer + Dropout)
    D1 --> D2(Softmax / Sigmoid)
  end
  class Classification dense

  subgraph Results ["Diagnosis Output"]
    direction TB
    O{Malignancy Prob >= Threshold?}
  end
  class Results output

  Input --> FeatureExtraction --> Classification --> Results
  Results -- Yes --> Malignant[Malignant Detected]
  Results -- No --> Benign[Benign / Normal]

  class Malignant alert
  class Benign safe
`;
const lungCancerShapData = [
  { feature: "Inception_Mixed_7c (High-level Texture)", importance: 3.42 },
  { feature: "Inception_Mixed_6a (Spatial Contours)", importance: 2.15 },
  { feature: "Conv2d_4a_3x3 (Edge Detection)", importance: 1.28 },
  { feature: "Nodule Spiculation Area (Grad-CAM)", importance: 0.95 },
  { feature: "Pleural Retraction Zone", importance: 0.64 },
];
const lungCancerImages = [
    "/PIC/lcd1.jpg", "/PIC/lcd2.jpg", "/PIC/lcd3.jpg", 
    "/PIC/lcd4.jpg", "/PIC/lcd5.jpg", "/PIC/lcd6.jpg",
];

// --- UPDATED TRENDSCOUT FLOWCHART ---
const trendScoutFlow = `flowchart LR
  classDef source fill:#0f172a,stroke:#334155,color:#fff,stroke-width:2px
  classDef crawler fill:#1e293b,stroke:#0891b2,color:#fff,stroke-width:2px
  classDef parser fill:#312e81,stroke:#6366f1,color:#fff,stroke-width:2px
  classDef storage fill:#064e3b,stroke:#10b981,color:#fff,stroke-width:2px

  subgraph Target ["🌐 E-Commerce Target"]
    W(Myntra Website\\nDynamic SPA)
  end
  class Target source

  subgraph ScrapingEngine ["Selenium Crawler & Anti-Bot"]
    direction TB
    S(Init WebDriver\\nCustom User-Agent) --> Wait(Explicit Waits)
    Wait --> DOM(Simulated Scrolling\\nTrigger Lazy Loading)
  end
  class ScrapingEngine crawler

  subgraph Parser ["Data Parsing Pipeline"]
    direction TB
    HTML(Fetch 'product-base' Elements) --> Extract(Extract Brands, Names, Links & Prices)
  end
  class Parser parser

  subgraph Output ["💾 Intelligence Storage"]
    DF(Pandas DataFrame) --> CSV[(myntra_lipsticks.csv)]
  end
  class Output storage

  Target --> ScrapingEngine --> Parser --> Output
`;
const trendScoutImages = [
    "/PIC/ts1.jpg", "/PIC/ts2.jpg", "/PIC/ts3.jpg", "/PIC/ts4.jpg", "/PIC/ts5.jpg",
];

// --- UPDATED PERSONAL CARE LLM POC FLOWCHART ---
const liliAiFlow = `flowchart LR
  classDef frontend fill:#0f172a,stroke:#334155,color:#fff,stroke-width:2px
  classDef backend fill:#1e293b,stroke:#0891b2,color:#fff,stroke-width:2px
  classDef ai fill:#312e81,stroke:#6366f1,color:#fff,stroke-width:2px
  classDef db fill:#064e3b,stroke:#10b981,color:#fff,stroke-width:2px

  subgraph UI ["🖥️ User Interface"]
    S(Streamlit Web App)
  end
  class UI frontend

  subgraph Backend ["⚙️ App Logic & Guardrails"]
    direction TB
    Input(User Query) --> Guard{Rule Check:\\nReturns/Offers?}
    Guard -- Pass --> Context[Inject Product Data\\nfrom JSON]
    Context --> Prompt(Format System Instructions)
  end
  class Backend backend

  subgraph LLM ["🧠 AI Engine"]
    Llama(Groq API:\\nLlama-3.3-70b)
  end
  class LLM ai

  subgraph DB ["💾 Audit Logging"]
    PG[(PostgreSQL Database\\nSession History)]
  end
  class DB db

  UI --> Input
  Prompt --> Llama
  Llama --> Response(AI Response)
  Response --> UI
  Guard -- Triggered --> Handoff[Human Support Handoff]
  Handoff --> UI
  UI -. Logs Interaction .-> PG
`;
const liliAiImages = [
    "/PIC/la1.jpg", "/PIC/la2.jpg", "/PIC/la3.jpg", "/PIC/la4.jpg", "/PIC/la5.jpg",
];

const taxiTipFlow = `flowchart LR
  classDef data fill:#0f172a,stroke:#334155,color:#fff,stroke-width:2px
  classDef process fill:#1e293b,stroke:#0891b2,color:#fff,stroke-width:2px
  classDef model fill:#312e81,stroke:#6366f1,color:#fff,stroke-width:2px
  classDef eval fill:#064e3b,stroke:#10b981,color:#fff,stroke-width:2px
  classDef alert fill:#7f1d1d,stroke:#ef4444,color:#fff,stroke-width:2px
  classDef safe fill:#14532d,stroke:#22c55e,color:#fff,stroke-width:2px

  subgraph Input ["🚕 Input Data"]
    direction TB
    D(NYC Yellow Taxi Trip Data) --> Filter(Filter Credit Card Payments)
  end
  class Input data

  subgraph FeatureEngineering ["Data Pipeline"]
    direction TB
    F1(Calculate Trip Duration) --> F2(Create Rush Hour Flags)
  end
  class FeatureEngineering process

  subgraph Modeling ["Machine Learning"]
    direction TB
    M1(Random Forest Classifier) --- M2(XGBoost Classifier)
  end
  class Modeling model

  subgraph Evaluation ["Evaluation & Output"]
    direction TB
    E(F1, Precision, Recall) --> O{Tip >= 20%?}
  end
  class Evaluation eval

  Input --> FeatureEngineering --> Modeling --> Evaluation
  Evaluation -- Yes --> Generous[Generous Tip ]
  Evaluation -- No --> Standard[Standard Tip ]
`;
const taxiTipShapData = [
  { feature: "fare_amount", importance: 4.85 },
  { feature: "trip_duration", importance: 3.12 },
  { feature: "trip_distance", importance: 2.84 },
  { feature: "VendorID", importance: 1.15 },
  { feature: "rush_hour_flag", importance: 0.72 },
];
const taxiTipImages = [
    "/PIC/tt1.jpg", "/PIC/tt2.jpg", "/PIC/tt3.jpg", "/PIC/tt4.jpg", "/PIC/tt5.jpg",
];

const hrAttritionFlow = `flowchart LR
  classDef data fill:#0f172a,stroke:#334155,color:#fff,stroke-width:2px
  classDef process fill:#1e293b,stroke:#0891b2,color:#fff,stroke-width:2px
  classDef model fill:#312e81,stroke:#6366f1,color:#fff,stroke-width:2px
  classDef eval fill:#064e3b,stroke:#10b981,color:#fff,stroke-width:2px
  classDef alert fill:#7f1d1d,stroke:#ef4444,color:#fff,stroke-width:2px
  classDef safe fill:#14532d,stroke:#22c55e,color:#fff,stroke-width:2px

  subgraph Input ["HR Data"]
    direction TB
    D(HR Capstone Dataset) --> Filter(Clean & Format Data)
  end
  class Input data
  subgraph FeatureEngineering [" Data Pipeline"]
    direction TB
    F1(Feature Engineering) --> F2(Encode Categoricals)
  end
  class FeatureEngineering process
  subgraph Modeling [" Machine Learning"]
    direction TB
    M1(Random Forest 1) --- M2(Random Forest 2)
  end
  class Modeling model
  subgraph Evaluation ["Prediction"]
    direction TB
    E(Evaluate: AUC, Precision, Recall) --> O{Attrition Risk?}
  end
  class Evaluation eval
  Input --> FeatureEngineering --> Modeling --> Evaluation
  Evaluation -- High --> Leave[Likely to Leave ]
  Evaluation -- Low --> Stay[Likely to Stay ]
`;
const hrAttritionShapData = [
  { feature: "satisfaction_level", importance: 0.35 },
  { feature: "time_spend_company", importance: 0.18 },
  { feature: "number_project", importance: 0.15 },
  { feature: "average_montly_hours", importance: 0.12 },
  { feature: "last_evaluation", importance: 0.08 },
];
const hrAttritionImages = [
    "/PIC/hr1.jpg", "/PIC/hr2.jpg", "/PIC/hr3.jpg", "/PIC/hr4.jpg", "/PIC/hr5.jpg"
];

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
  Output -- Yes --> Alert[Seizure Activity ]
  Output -- No --> Safe[Normal Activity ]
`;
const seizureShapData = [
  { feature: "EEG_Signal_Variance", importance: 4.12 },
  { feature: "High_Frequency_Band_Power", importance: 3.55 },
  { feature: "Amplitude_Peak_to_Peak", importance: 2.87 },
  { feature: "Mean_Absolute_Value", importance: 1.45 },
  { feature: "Signal_Entropy", importance: 0.98 },
];
const seizureRecognitionImages = [
    "/PIC/seizure_step0.jpg", "/PIC/seizure_step1.jpg", "/PIC/seizure_step2.jpg",
    "/PIC/seizure_step3.jpg", "/PIC/seizure_step4.jpg", "/PIC/seizure_step5.jpg"
];

const abTestingFlow = `flowchart LR
  classDef data fill:#0f172a,stroke:#334155,color:#fff,stroke-width:2px
  classDef process fill:#1e293b,stroke:#0891b2,color:#fff,stroke-width:2px
  classDef model fill:#312e81,stroke:#6366f1,color:#fff,stroke-width:2px
  classDef eval fill:#064e3b,stroke:#10b981,color:#fff,stroke-width:2px
  classDef alert fill:#7f1d1d,stroke:#ef4444,color:#fff,stroke-width:2px
  classDef safe fill:#14532d,stroke:#22c55e,color:#fff,stroke-width:2px

  subgraph Input ["E-Commerce Traffic"]
    direction TB
    D(User Sessions) --> Split(Split: Control vs Treatment)
  end
  class Input data

  subgraph Processing ["Data Pipeline"]
    direction TB
    Clean(Clean & Filter Data) --> EDA(Exploratory Analysis)
  end
  class Processing process

  subgraph Analysis ["Statistical Testing"]
    direction TB
    Hypothesis(Define Null & Alt) --> ZTest(Z-Test / Chi-Square)
  end
  class Analysis model

  subgraph Output ["Business Strategy"]
    direction TB
    PVal{P-Value < 0.05?}
  end
  class Output eval

  Input --> Processing --> Analysis --> Output
  Output -- Yes --> Winner[Deploy New Feature 🚀]
  Output -- No --> Keep[Keep Old Version 🛑]
`;
const abTestingImages = [
    "/PIC/abtest_step1.jpg", "/PIC/abtest_step2.jpg", "/PIC/abtest_step3.jpg",
    "/PIC/abtest_step4.jpg", "/PIC/abtest_step5.jpg"
];


// --- 2. REUSABLE, INTERACTIVE PROJECT CARD COMPONENT ---
function ProjectCard({ title, description, link, outputImages, chartFlow, shapData, index = 0 }) {
  if (!title) return null;

  return (
    <div 
      className="group relative flex flex-col w-full mb-8 z-0 hover:z-30 animate-fade-in-up"
      style={{ animationFillMode: 'both', animationDelay: `${index * 150}ms` }}
    >
      <div className="z-20 relative bg-[#0a0a0a] border border-[#1f1f1f] rounded-[1.5rem] p-6 md:p-8 flex flex-col overflow-hidden group/card shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)] hover:border-cyan-400/40 transition-all duration-700 hover:-translate-y-1.5">
        
        <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-all duration-700 ease-in-out group-hover/card:scale-125"
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
                      <Image src={img} alt={`${title} preview ${idx}`} fill className="object-cover object-center group-hover/card:scale-105 transition-transform duration-700 ease-in-out" priority={idx < 3} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 pr-4">
                  {outputImages.map((img, idx) => (
                    <div key={`set2-${idx}`} className="shrink-0 w-[280px] sm:w-[320px] md:w-[360px] h-[180px] relative rounded-lg overflow-hidden bg-[#050505]">
                      <Image src={img} alt={`${title} duplicate ${idx}`} fill className="object-cover object-center group-hover/card:scale-105 transition-transform duration-700 ease-in-out" priority={false} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <p className="text-base md:text-lg text-[#888888] font-medium leading-relaxed mb-5">
            {description}
          </p>

          <a href={link} target="_blank" rel="noreferrer" className="group/link flex items-center gap-4 mt-auto pt-4 border-t border-[#1a1a1a] w-max">
            <div className="w-10 h-10 rounded-full border border-[#262626] flex items-center justify-center bg-[#050505] group-hover/link:bg-cyan-400/10 group-hover/link:border-cyan-400 transition-all duration-300 group-hover/link:shadow-[0_0_10px_rgba(6,182,212,0.3)]">
              <svg className="w-4 h-4 text-[#888888] group-hover/link:text-cyan-400 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
            <span className="text-[#888888] group-hover/link:text-cyan-400 text-sm font-medium transition-colors duration-300 tracking-wide">
              View repo / demo
            </span>
          </a>
        </div>
      </div>

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
export default function Projects() {
  const [activeCat, setActiveCat] = useState('Data Science');
  
  // STATE: Page Load Animation Lock
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const CATEGORIES = [
    {
      id: 'Data Science',
      title: 'Data Science',
      desc: 'Exploring hidden patterns, statistical analysis, and predictive modeling from structured datasets.'
    },
    {
      id: 'Artificial Intelligence',
      title: 'Artificial Intelligence',
      desc: 'Advanced deep learning, computer vision, and neural networks solving complex real-world problems.'
    },
    {
      id: 'Web Scraping',
      title: 'Web Scraping',
      desc: 'Automated data extraction, parsing, and intelligence gathering from dynamic web environments.'
    },
    {
      id: 'Automation',
      title: 'Automation',
      desc: 'Streamlining workflows, building intelligent agents, and automating complex business processes.'
    }
  ];

  const allProjects = profile.projects.flatMap(p => [
    { id: 'factory', cat: 'Artificial Intelligence', title: p.title_8, desc: p.description_8, link: p.link_8, imgs: factoryGuardImages, flow: factoryGuardFlow, shap: factoryGuardShapData },
    { id: 'lung', cat: 'Artificial Intelligence', title: p.title_1, desc: p.description_1, link: p.link_1, imgs: lungCancerImages, flow: lungCancerFlow, shap: lungCancerShapData },
    { id: 'lili', cat: 'Automation', title: p.title_9, desc: p.description_9, link: p.link_9, imgs: liliAiImages, flow: liliAiFlow, shap: null },
    { id: 'trend', cat: 'Web Scraping', title: p.title_12, desc: p.description_12, link: p.link_12, imgs: trendScoutImages, flow: trendScoutFlow, shap: null },
    { id: 'taxi', cat: 'Data Science', title: p.title_10, desc: p.description_10, link: p.link_10, imgs: taxiTipImages, flow: taxiTipFlow, shap: taxiTipShapData },
    { id: 'hr', cat: 'Data Science', title: p.title_11, desc: p.description_11, link: p.link_11, imgs: hrAttritionImages, flow: hrAttritionFlow, shap: hrAttritionShapData },
    { id: 'seizure', cat: 'Data Science', title: p.title_3, desc: p.description_3, link: p.link_3, imgs: seizureRecognitionImages, flow: seizureRecognitionFlow, shap: seizureShapData },
    { id: 'abtest', cat: 'Data Science', title: p.title_13, desc: p.description_13, link: p.link_13, imgs: abTestingImages, flow: abTestingFlow, shap: null }
  ]);

  const filteredProjects = allProjects.filter(project => project.cat === activeCat);
  const activeCategoryData = CATEGORIES.find(c => c.id === activeCat);

  return (
    <main className="relative z-0 min-h-screen bg-[#050505] text-[#f4f4f5]">
      <div className="max-w-[85rem] mx-auto px-6 md:px-12 lg:px-16 pt-32 pb-32">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative items-start">
          
          {/* ANIMATED SIDEBAR (Slides in from left) */}
          <aside className={`w-full lg:w-64 flex-shrink-0 lg:sticky lg:top-32 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 z-20 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] transition-all duration-1000 ease-out transform ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            {CATEGORIES.map((cat, index) => (
              // WRAPPER: Staggered entrance delay completely separated from hover speed
              <div 
                key={cat.id}
                className={`transition-all duration-700 ease-out transform ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => setActiveCat(cat.id)}
                  className={`group w-full flex items-center justify-between px-5 py-4 text-left transition-all duration-300 rounded-2xl relative overflow-hidden flex-shrink-0 ${
                    activeCat === cat.id ? 'text-cyan-400 font-bold' : 'text-[#888888] font-medium hover:text-[#f4f4f5] hover:bg-[#141414]'
                  }`}
                >
                  {activeCat === cat.id && (
                    <div className="absolute inset-0 bg-cyan-400/5 border border-cyan-400/20 rounded-2xl shadow-[inset_0_0_15px_rgba(6,182,212,0.1)]"></div>
                  )}
                  
                  <span className={`relative z-10 transition-transform duration-300 whitespace-nowrap ${
                    activeCat === cat.id ? 'translate-x-2' : 'group-hover:translate-x-2'
                  }`}>
                    {cat.title}
                  </span>

                  <svg className={`hidden lg:block w-4 h-4 relative z-10 transition-all duration-300 ${
                    activeCat === cat.id ? 'opacity-100 translate-x-0 text-cyan-400' : 'opacity-0 -translate-x-4'
                  }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </aside>

          {/* ANIMATED RIGHT CONTENT (Slides up from bottom) */}
          <div className={`flex-1 w-full min-w-0 lg:max-w-4xl transition-all duration-1000 ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '300ms' }}>
            <div key={activeCat} className="animate-fade-in-up">
              
              <div className="mb-10 border-b border-[#1f1f1f] pb-6">
                <div className="mb-5">
                  <h1 className="inline-block px-4 py-2 bg-[#141414] border border-[#262626] rounded-full text-cyan-400 text-sm md:text-base font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                    <Typewriter 
                      text={`${activeCategoryData.title} Projects`} 
                      delay={100} 
                      speed={25} 
                      showCursor={true} 
                    />
                  </h1>
                </div>
                
                <p className="text-base md:text-lg text-[#888888] font-medium leading-relaxed max-w-3xl min-h-[3rem]">
                  <Typewriter 
                    text={activeCategoryData.desc} 
                    delay={100 + ((activeCategoryData.title.length + 9) * 25) + 150} 
                    speed={15} 
                    showCursor={false} 
                  />
                </p>
              </div>

              <div className="flex flex-col gap-y-4">
                {filteredProjects.map((project, index) => (
                  <ProjectCard 
                    key={project.id} 
                    index={index}
                    title={project.title} 
                    description={project.desc} 
                    link={project.link} 
                    outputImages={project.imgs} 
                    chartFlow={project.flow} 
                    shapData={project.shap} 
                  />
                ))}
                
                {filteredProjects.length === 0 && (
                  <div className="w-full py-20 flex flex-col items-center justify-center border border-dashed border-[#262626] rounded-3xl bg-[#0a0a0a]">
                     <p className="text-[#888888] font-medium">New projects coming soon...</p>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}