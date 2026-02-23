"use client";

import { useState, useEffect, useRef } from 'react';
import { profile } from '../../../data/profile';
import Image from 'next/image';
import Mermaid from '../../../components/Mermaid';
import ShapChart from '../../../components/ShapChart';

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
    "/PIC/iot1.jpg",
    "/PIC/iot2.jpg",
    "/PIC/iot3.jpg",
    "/PIC/iot4.jpg",
    "/PIC/iot5.jpg",
    "/PIC/iot6.jpg",
    "/PIC/iot7.jpg",
    "/PIC/iot8.jpg",
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
    "/PIC/lcd1.jpg",
    "/PIC/lcd2.jpg",
    "/PIC/lcd3.jpg",
    "/PIC/lcd4.jpg",
    "/PIC/lcd5.jpg",
    "/PIC/lcd6.jpg",
];

const trendScoutFlow = `flowchart LR
  classDef source fill:#0f172a,stroke:#334155,color:#fff,stroke-width:2px
  classDef crawler fill:#1e293b,stroke:#0891b2,color:#fff,stroke-width:2px
  classDef parser fill:#312e81,stroke:#6366f1,color:#fff,stroke-width:2px
  classDef storage fill:#064e3b,stroke:#10b981,color:#fff,stroke-width:2px

  subgraph Target ["🌐 E-Commerce Target"]
    W(Myntra Website)
  end
  class Target source

  subgraph ScrapingEngine ["Selenium Crawler"]
    direction TB
    S(Init WebDriver) --> DOM(Scroll & Load Dynamic DOM)
  end
  class ScrapingEngine crawler

  subgraph Parser ["Data Parsing"]
    direction TB
    HTML(Fetch HTML Source) --> Extract(Extract Brands, Prices, & Ratings)
  end
  class Parser parser

  subgraph Output ["💾 Intelligence Storage"]
    CSV[(myntra_lipsticks.csv)]
  end
  class Output storage

  Target --> ScrapingEngine --> Parser --> Output
`;
const trendScoutImages = [
    "/PIC/ts1.jpg",
    "/PIC/ts2.jpg",
    "/PIC/ts3.jpg",
    "/PIC/ts4.jpg",
    "/PIC/ts5.jpg",
];

const liliAiFlow = `flowchart LR
  classDef frontend fill:#0f172a,stroke:#334155,color:#fff,stroke-width:2px
  classDef backend fill:#1e293b,stroke:#0891b2,color:#fff,stroke-width:2px
  classDef ai fill:#312e81,stroke:#6366f1,color:#fff,stroke-width:2px
  classDef db fill:#064e3b,stroke:#10b981,color:#fff,stroke-width:2px
  classDef alert fill:#7f1d1d,stroke:#ef4444,color:#fff,stroke-width:2px

  subgraph UI ["Frontend"]
    S(Streamlit App)
  end
  class UI frontend

  subgraph Backend ["⚙️ App Logic & Guardrails"]
    direction TB
    KB[(products.json)] -. Context .-> Prompt(System Instructions)
    Guard{Check Rule:<br/>Returns/Offers?}
  end
  class Backend backend

  subgraph LLM ["AI Engine"]
    Llama(Groq API:<br/>Llama-3.3-70b)
  end
  class LLM ai

  subgraph DB ["Audit Logging"]
    PG[(PostgreSQL)]
  end
  class DB db

  %% Execution Flow
  UI --> Guard
  Guard -- Pass --> Prompt
  Prompt --> Llama
  Llama --> UI

  %% Guardrail Trigger
  Guard -- Triggered --> Handoff[Support Handoff<br/>Response]
  Handoff --> UI

  %% Logging Flow
  UI -. Log Session .-> PG

  class Handoff alert
`;
const liliAiImages = [
    "/PIC/la1.jpg",
    "/PIC/la2.jpg",
    "/PIC/la3.jpg",
    "/PIC/la4.jpg",
    "/PIC/la5.jpg",
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

  class Generous safe
  class Standard alert
`;

const taxiTipShapData = [
  { feature: "fare_amount", importance: 4.85 },
  { feature: "trip_duration", importance: 3.12 },
  { feature: "trip_distance", importance: 2.84 },
  { feature: "VendorID", importance: 1.15 },
  { feature: "rush_hour_flag", importance: 0.72 },
];
const taxiTipImages = [
    "/PIC/tt1.jpg",
    "/PIC/tt2.jpg",
    "/PIC/tt3.jpg",
    "/PIC/tt4.jpg",
    "/PIC/tt5.jpg",
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
  class Leave alert
  class Stay safe
`;
const hrAttritionShapData = [
  { feature: "satisfaction_level", importance: 0.35 },
  { feature: "time_spend_company", importance: 0.18 },
  { feature: "number_project", importance: 0.15 },
  { feature: "average_montly_hours", importance: 0.12 },
  { feature: "last_evaluation", importance: 0.08 },
];
const hrAttritionImages = [
    "/PIC/hr1.jpg",
    "/PIC/hr2.jpg",
    "/PIC/hr3.jpg",
    "/PIC/hr4.jpg",
    "/PIC/hr5.jpg"
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
    "/PIC/seizure_step0.jpg",
    "/PIC/seizure_step1.jpg",
    "/PIC/seizure_step2.jpg",
    "/PIC/seizure_step3.jpg",
    "/PIC/seizure_step4.jpg",
    "/PIC/seizure_step5.jpg"
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

  class Winner safe
  class Keep alert
`;
const abTestingImages = [
    "/PIC/abtest_step1.jpg",
    "/PIC/abtest_step2.jpg",
    "/PIC/abtest_step3.jpg",
    "/PIC/abtest_step4.jpg",
    "/PIC/abtest_step5.jpg"
];


// --- 2. REUSABLE, INTERACTIVE PROJECT CARD COMPONENT ---
function ProjectCard({ title, description, link, outputImages, chartFlow, shapData }) {
  if (!title) return null;

  return (
    <div className="group relative flex flex-col w-full mb-8 z-0 hover:z-30">
      
      {/* FRONT LAYER: Main Project Box */}
      <div className="z-20 relative bg-black border hover:border-white border-neutral-200 dark:border-neutral-800 transition duration-400 ease-in-out p-8 rounded-xl shadow-xl shadow-cyan-500/20 dark:shadow-cyan-900/30 flex flex-col overflow-hidden">
        <h3 className="text-3xl font-bold text-gray-300 group-hover:text-cyan-300 transition-colors mb-6 z-10">{title}</h3>
        
        {/* The Continuous Pure CSS Marquee Image Track */}
        {outputImages && outputImages.length > 0 && (
          <div className="w-full overflow-hidden mb-8 pb-2 rounded-xl relative z-10">
            <div className="flex w-max animate-carousel hover:[animation-play-state:paused] gap-4">
              
              {/* SET 1: First batch of images */}
              <div className="flex gap-4 pr-4">
                {outputImages.map((img, idx) => (
                  <div 
                    key={`set1-${idx}`} 
                    className="shrink-0 w-[280px] sm:w-[320px] md:w-[360px] h-[250px] relative rounded-lg overflow-hidden border border-white/10 bg-neutral-900"
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

              {/* SET 2: Duplicated batch. This creates the seamless looping illusion! */}
              <div className="flex gap-4 pr-4">
                {outputImages.map((img, idx) => (
                  <div 
                    key={`set2-${idx}`} 
                    className="shrink-0 w-[280px] sm:w-[320px] md:w-[360px] h-[250px] relative rounded-lg overflow-hidden border border-white/10 bg-neutral-900"
                  >
                    <Image 
                      src={img} 
                      alt={`${title} duplicate preview ${idx}`} 
                      fill 
                      className="object-cover object-center" 
                      priority={false} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}

        <p className="text-gray-400 text-lg leading-relaxed mb-6 z-10">{description}</p>

        {/* --- UPDATED MINIMALIST BUTTON --- */}
        <a 
          href={link} 
          target="_blank" 
          rel="noreferrer" 
          className="group/link flex items-center gap-4 mt-auto pt-6 border-t border-[#1a1a1a] z-10"
        >
          {/* Circular Icon Button */}
          <div className="w-10 h-10 rounded-full border border-[#262626] flex items-center justify-center bg-[#050505] group-hover/link:bg-[#f4f4f5] group-hover/link:border-[#f4f4f5] transition-all duration-300">
            <svg 
              className="w-4 h-4 text-[#888888] group-hover/link:text-black transition-colors" 
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
          {/* Text that lights up on hover */}
          <span className="text-[#888888] group-hover/link:text-[#f4f4f5] text-sm font-medium transition-colors tracking-wide">
            View repo / demo
          </span>
        </a>
        {/* --------------------------------- */}

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
          
          {profile.projects.map((p, i) => (
            <ProjectCard 
              key={`8-${i}`} title={p.title_8} description={p.description_8} link={p.link_8} 
              outputImages={factoryGuardImages} chartFlow={factoryGuardFlow} shapData={factoryGuardShapData}
            />
          ))}
          {profile.projects.map((p, i) => (
            <ProjectCard 
              key={`1-${i}`} title={p.title_1} description={p.description_1} link={p.link_1} 
              outputImages={lungCancerImages} chartFlow={lungCancerFlow } shapData={lungCancerShapData}
            />
          ))}
          {profile.projects.map((p, i) => (
            <ProjectCard 
              key={`1-${i}`} title={p.title_9} description={p.description_9} link={p.link_9} 
              outputImages={liliAiImages} chartFlow={liliAiFlow }
            />
          ))}
          {profile.projects.map((p, i) => (
            <ProjectCard 
              key={`1-${i}`} title={p.title_12} description={p.description_12} link={p.link_12} 
              outputImages={trendScoutImages} chartFlow={trendScoutFlow } 
            />
          ))}
          {profile.projects.map((p, i) => (
            <ProjectCard 
              key={`1-${i}`} title={p.title_10} description={p.description_10} link={p.link_10} 
              outputImages={taxiTipImages} chartFlow={taxiTipFlow } shapData={taxiTipShapData}
            />
          ))}
          {profile.projects.map((p, i) => (
            <ProjectCard 
              key={`1-${i}`} title={p.title_11} description={p.description_11} link={p.link_11} 
              outputImages={hrAttritionImages} chartFlow={hrAttritionFlow } shapData={hrAttritionShapData}
            />
          ))}
          {profile.projects.map((p, i) => (
            <ProjectCard 
              key={`3-${i}`} title={p.title_3} description={p.description_3} link={p.link_3} 
              outputImages={seizureRecognitionImages} chartFlow={seizureRecognitionFlow} shapData={seizureShapData}
            />
          ))}
          {profile.projects.map((p, i) => (
            <ProjectCard 
              key={`4-${i}`} title={p.title_13} description={p.description_13} link={p.link_13} 
              outputImages={abTestingImages} chartFlow={abTestingFlow}
            />
          ))}
          {/* 
          {profile.projects.map((p, i) => (
            <ProjectCard 
              key={`4-${i}`} title={p.title_4} description={p.description_4} link={p.link_4} 
              outputImages={placeholderImages} chartFlow={factoryGuardFlow} shapData={factoryGuardShapData}
            />
          ))}

          {profile.projects.map((p, i) => (
            <ProjectCard 
              key={`5-${i}`} title={p.title_5} description={p.description_5} link={p.link_5} 
              outputImages={placeholderImages} chartFlow={factoryGuardFlow} shapData={factoryGuardShapData}
            />
          ))}

          {profile.projects.map((p, i) => (
            <ProjectCard 
              key={`6-${i}`} title={p.title_6} description={p.description_6} link={p.link_6} 
              outputImages={placeholderImages} chartFlow={factoryGuardFlow} shapData={factoryGuardShapData}
            />
          ))}

          {profile.projects.map((p, i) => (
            <ProjectCard 
              key={`2-${i}`} title={p.title_2} description={p.description_2} link={p.link_2}
              outputImages={placeholderImages} chartFlow={factoryGuardFlow} shapData={factoryGuardShapData}
            />
          ))}

          {profile.projects.map((p, i) => (
            <ProjectCard 
              key={`7-${i}`} title={p.title_7} description={p.description_7} link={p.link_7} 
              outputImages={placeholderImages} chartFlow={factoryGuardFlow} shapData={factoryGuardShapData}
            />
          ))} */}

        </div>
      </section>
    </main>
  );
}