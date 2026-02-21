import { profile } from '../../../data/profile';
import Image from 'next/image';
import Mermaid from '../../../components/Mermaid';
import ShapChart from '../../../components/ShapChart';

// 1. Stable Flowchart Syntax (Guaranteed to work without syntax errors)
const factoryGuardFlow = `flowchart LR
  %% Styling
  classDef factory fill:#0f172a,stroke:#334155,color:#fff,stroke-width:2px
  classDef process fill:#1e293b,stroke:#0891b2,color:#fff,stroke-width:2px
  classDef model fill:#312e81,stroke:#6366f1,color:#fff,stroke-width:2px
  classDef app fill:#064e3b,stroke:#10b981,color:#fff,stroke-width:2px
  classDef alert fill:#7f1d1d,stroke:#ef4444,color:#fff,stroke-width:2px
  classDef safe fill:#14532d,stroke:#22c55e,color:#fff,stroke-width:2px

  subgraph IoT ["🏭 Sensors"]
    S(Temp, Pressure, Vib)
  end
  class IoT factory

  subgraph Pipeline ["⚙️ Data Pipeline"]
    direction TB
    P1(Interpolate & Roll Mean) --> P2(SMOTE)
  end
  class Pipeline process

  subgraph Engine ["🧠 ML Engine"]
    direction TB
    M1[(XGBoost)] --- M2{SHAP}
  end
  class Engine model

  subgraph Deploy ["💻 Deployment"]
    D(Flask UI & API)
  end
  class Deploy app

  %% Flow
  IoT --> Pipeline --> Engine --> Deploy
  Deploy --> T{Prob >= 50%?}
  T -- Yes --> Danger[CRITICAL RISK]
  T -- No --> Safe[Healthy ✅]

  class Danger alert
  class Safe safe
`;
  
export default function Projects() {
  return (
    <main className="min-h-screen text-white">
      <section className="max-w-4xl mx-auto py-20 px-4">
        <h1 className="text-3xl font-bold text-cyan-300">Projects</h1>
        {profile.projects.map((p, i) => (
            <div key={i} className="p-4 rounded-lg bg-black border hover:border-white relative border-neutral-200 dark:border-neutral-800 transition duration-400 ease-in-out hover:-translate-y-1 hover:scale-100 transition-colors duration-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
              <h3 className="text-2xl font-semibold text-gray-400">{p.title_2}</h3>
              <p className="text-gray-500 mt-2">{p.description_2}</p>
              <div className="flex items-center gap-1">
                <a href={p.link_2} target="_blank" rel="noreferrer" className="mt-4 text-cyan-300 hover:text-cyan-600 inline-block">View repo / demo</a>
                <svg className=" mt-5 w-[20px] h-[20px] text-cyan-300 dark:text-cyan-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M19 12H5m14 0-4 4m4-4-4-4" />
                </svg>
              </div>
            </div>
          ))}

        {/* --- MLOPS ARCHITECTURE DIAGRAM --- */}
        <div className="mt-5 mb-5">
          
          {/* THE FIX: Both charts now share the exact same width (w-full) and spacing */}
          <div className="w-full flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-white  ml-4">MLOps Architecture: FactoryGuard AI</h2>
          <p className="text-gray-400  ml-4">
            This interactive diagram illustrates the end-to-end automated pipeline for my predictive 
            maintenance system, showcasing data flow from raw sensor inputs to explainable model monitoring.
          </p>
            <Mermaid chart={factoryGuardFlow} />
          <h3 className="text-xl font-bold text-white mb-2">Feature Importance (SHAP Values)</h3>
      <p className="text-sm text-gray-400 mb-6">
        Global interpretability showing which sensor readings have the highest impact on Remaining Useful Life (RUL) predictions.
      </p>
            <ShapChart/>
          </div>
        </div>

        {/* --- PROJECT GRID --- */}
        <div className="grid md:grid-cols-2 gap-6 mt-6 ">
          {profile.projects.map((p, i) => (
            <div key={i} className="p-6 rounded-lg bg-black border hover:border-white relative border-neutral-200 dark:border-neutral-800 transition duration-400 ease-in-out hover:-translate-y-1 hover:scale-100 transition-colors duration-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
              <h3 className="text-2xl font-semibold text-gray-400">{p.title_1}</h3>
              <p className="text-gray-500 mt-2">{p.description_1}</p>
              <div className="flex items-center gap-1">
                <a href={p.link_1} target="_blank" rel="noreferrer" className="mt-4 text-cyan-300 hover:text-cyan-600 inline-block">View repo / demo</a>
                <svg className=" mt-5 w-[20px] h-[20px] text-cyan-300 dark:text-cyan-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M19 12H5m14 0-4 4m4-4-4-4" />
                </svg>
              </div>
            </div>
          ))}

          {profile.projects.map((p, i) => (
            <div key={i} className="p-6 rounded-lg bg-black border hover:border-white relative border-neutral-200 dark:border-neutral-800 transition duration-400 ease-in-out hover:-translate-y-1 hover:scale-100 transition-colors duration-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
              <h3 className="text-2xl font-semibold text-gray-400">{p.title_3}</h3>
              <p className="text-gray-500 mt-2">{p.description_3}</p>
              <div className="flex items-center gap-1">
                <a href={p.link_3} target="_blank" rel="noreferrer" className="mt-4 text-cyan-300 hover:text-cyan-600 inline-block">View repo / demo</a>
                <svg className=" mt-5 w-[20px] h-[20px] text-cyan-300 dark:text-cyan-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M19 12H5m14 0-4 4m4-4-4-4" />
                </svg>
              </div>
            </div>
          ))}

          {profile.projects.map((p, i) => (
            <div key={i} className="p-6 rounded-lg bg-black border hover:border-white relative border-neutral-200 dark:border-neutral-800 transition duration-400 ease-in-out hover:-translate-y-1 hover:scale-100 transition-colors duration-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
              <h3 className="text-2xl font-semibold text-gray-400">{p.title_4}</h3>
              <p className="text-gray-500 mt-2">{p.description_4}</p>
              <div className="flex items-center gap-1">
                <a href={p.link_4} target="_blank" rel="noreferrer" className="mt-4 text-cyan-300 hover:text-cyan-600 inline-block">View repo / demo</a>
                <svg className=" mt-5 w-[20px] h-[20px] text-cyan-300 dark:text-cyan-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M19 12H5m14 0-4 4m4-4-4-4" />
                </svg>
              </div>
            </div>
          ))}

          {profile.projects.map((p, i) => (
            <div key={i} className="p-6 rounded-lg bg-black border hover:border-white relative border-neutral-200 dark:border-neutral-800 transition duration-400 ease-in-out hover:-translate-y-1 hover:scale-100 transition-colors duration-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
              <h3 className="text-2xl font-semibold text-gray-400">{p.title_5}</h3>
              <p className="text-gray-500 mt-2">{p.description_5}</p>
              <div className="flex items-center gap-1">
                <a href={p.link_5} target="_blank" rel="noreferrer" className="mt-4 text-cyan-300 hover:text-cyan-600 inline-block">View repo / demo</a>
                <svg className=" mt-5 w-[20px] h-[20px] text-cyan-300 dark:text-cyan-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M19 12H5m14 0-4 4m4-4-4-4" />
                </svg>
              </div>
            </div>
          ))}

          {profile.projects.map((p, i) => (
            <div key={i} className="p-6 rounded-lg bg-black border hover:border-white relative border-neutral-200 dark:border-neutral-800 transition duration-400 ease-in-out hover:-translate-y-1 hover:scale-100 transition-colors duration-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
              <h3 className="text-2xl font-semibold text-gray-400">{p.title_6}</h3>
              <p className="text-gray-500 mt-2">{p.description_6}</p>
              <div className="flex items-center gap-1">
                <a href={p.link_6} target="_blank" rel="noreferrer" className="mt-4 text-cyan-300 hover:text-cyan-600 inline-block">View repo / demo</a>
                <svg className=" mt-5 w-[20px] h-[20px] text-cyan-300 dark:text-cyan-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M19 12H5m14 0-4 4m4-4-4-4" />
                </svg>
              </div>
            </div>
          ))}

          {profile.projects.map((p, i) => (
            <div key={i} className="p-6 rounded-lg bg-black border hover:border-white relative border-neutral-200 dark:border-neutral-800 transition duration-400 ease-in-out hover:-translate-y-1 hover:scale-100 transition-colors duration-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
              <h3 className="text-2xl font-semibold text-gray-400">{p.title_7}</h3>
              <p className="text-gray-500 mt-2">{p.description_7}</p>
              <div className="flex items-center gap-1">
                <a href={p.link_7} target="_blank" rel="noreferrer" className="mt-4 text-cyan-300 hover:text-cyan-600 inline-block">View repo / demo</a>
                <svg className=" mt-5 w-[20px] h-[20px] text-cyan-300 dark:text-cyan-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M19 12H5m14 0-4 4m4-4-4-4" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CAROUSEL SECTION --- */}
      <div className="w-full overflow-x-auto pb-6 pt-1">
        <ul className="flex animate-carousel gap-4">
          <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[900px] flex-none md:w-1/5 ">
            <div className="relative h-full w-full" href="https://drive.google.com/drive/folders/1Fj6_huXZ4KI5SkF_wHcXdwqxXMSMS1b2">
              <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-white dark:bg-black relative border-neutral-200 dark:border-neutral-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
                <Image 
                  alt="Acme Rainbow Sticker" 
                  loading="lazy" 
                  decoding="async" 
                  data-nimg="fill" 
                  className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" 
                  style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} 
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" 
                  srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w" 
                  src="/PIC/project_1.png"
                  width={50}
                  height={50}
                />
                <div className="absolute bottom-0 left-0 flex w-full px-8 pb-1 @container/label">
                  <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                    <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Epileptic-Seizure-Recognition</h3>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/5">
            <div className="relative h-full w-full" href="/acme-rainbow-sticker">
              <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-white dark:bg-black relative border-neutral-200 dark:border-neutral-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
                <Image 
                  alt="Acme Rainbow Sticker" 
                  loading="lazy" 
                  decoding="async" 
                  data-nimg="fill" 
                  className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" 
                  style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} 
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" 
                  srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w" 
                  src="/PIC/project_2.png"
                  width={50}
                  height={50}
                />
                <div className="absolute bottom-0 left-0 flex w-full px-7 pb-1 @container/label">
                  <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                    <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Quote-Guessing-Game-using-Web-Scraping</h3>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/5">
            <div className="relative h-full w-full">
              <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-white dark:bg-black relative border-neutral-200 dark:border-neutral-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
                <Image 
                  alt="Acme Rainbow Sticker" 
                  loading="lazy" 
                  decoding="async" 
                  data-nimg="fill" 
                  className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" 
                  style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} 
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" 
                  srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w" 
                  src="/PIC/project_3.png"
                  width={50}
                  height={50}
                />
                <div className="absolute bottom-0 left-0 flex w-full px-8 pb-1 @container/label">
                  <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                    <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Quote-Guessing-Game-using-Web-Scraping</h3>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/5">
            <div className="relative h-full w-full" href="/acme-rainbow-sticker">
              <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-white dark:bg-black relative border-neutral-200 dark:border-neutral-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
                <Image 
                  alt="Acme Rainbow Sticker" 
                  loading="lazy" 
                  decoding="async" 
                  data-nimg="fill" 
                  className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" 
                  style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} 
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" 
                  srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w" 
                  src="/PIC/project_4.png"
                  width={50}
                  height={50}
                />
                <div className="absolute bottom-0 left-0 flex w-full px-8 pb-1 @container/label">
                  <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                    <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Lung Cancer Detection using CNN</h3>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/5">
            <div className="relative h-full w-full" href="/acme-rainbow-sticker">
              <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-white dark:bg-black relative border-neutral-200 dark:border-neutral-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
                <Image 
                  alt="Acme Rainbow Sticker" 
                  loading="lazy" 
                  decoding="async" 
                  data-nimg="fill" 
                  className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" 
                  style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} 
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" 
                  srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w" 
                  src="/PIC/project_5.png"
                  width={50}
                  height={50}
                />
                <div className="absolute bottom-0 left-0 flex w-full px-4 pb-1 @container/label">
                  <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                    <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Lung Cancer Detection using CNN</h3>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/5">
            <a className="relative h-full w-full" href="https://www.coursera.org/account/accomplishments/certificate/87N37SR84V39">
              <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-white dark:bg-black relative border-neutral-200 dark:border-neutral-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
                <Image 
                  alt="Acme Rainbow Sticker" 
                  loading="lazy" 
                  decoding="async" 
                  data-nimg="fill" 
                  className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" 
                  style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} 
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" 
                  srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w" 
                  src="/PIC/project_6.png"
                  width={50}
                  height={50}
                />
                <div className="absolute bottom-0 left-0 flex w-full p-2 pb-1 @container/label">
                  <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                    <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Model Comparision</h3>
                  </div>
                </div>
              </div>
            </a>
          </li>

          <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/5">
            <a className="relative h-full w-full" href="/acme-rainbow-sticker">
              <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-white dark:bg-black relative border-neutral-200 dark:border-neutral-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
                <Image 
                  alt="Acme Rainbow Sticker" 
                  loading="lazy" 
                  decoding="async" 
                  data-nimg="fill" 
                  className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" 
                  style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} 
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" 
                  srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w" 
                  src="/PIC/project_8.png"
                  width={50}
                  height={50}
                />
                <div className="absolute bottom-0 left-0 flex w-full px-4 pb-1 @container/label">
                  <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                    <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">Inception V3 Accuracy</h3>
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>

    </main>
  );
}