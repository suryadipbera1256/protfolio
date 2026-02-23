"use client";

import Navbar from '../../components/Navbar';
import Image from 'next/image';
import { profile } from '../../data/profile';

// --- PREMIUM COLOR GATE CARD COMPONENT ---
function CertificationCard({ title, link, imageSrc, provider, glowColor }) {
  return (
    // Changed w-[85%] to w-[85vw] or fixed width so they size correctly inside a flex row
    <div className="relative flex-none w-[85vw] sm:w-[380px] flex flex-col h-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-3xl overflow-hidden hover:border-[#333333] transition-all duration-500 group z-10">
      
      {/* GLOW EFFECT */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-40 group-hover:opacity-100 transition-all duration-700 ease-in-out group-hover:scale-125"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${glowColor}, transparent 70%)`
        }}
      />

      <div className="relative w-full h-64 border-b border-[#1f1f1f]/50 flex items-center justify-center p-8 z-10">
        <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-105">
          <Image src={imageSrc} alt={title} fill className="object-contain drop-shadow-2xl" />
        </div>
      </div>

      <div className="relative flex flex-col flex-grow p-7 z-10">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-[#141414]/80 backdrop-blur-md border border-[#262626] rounded-full text-[#888888] text-xs font-medium tracking-wide">
            {provider}
          </span>
        </div>
        <h3 className="text-[#f4f4f5] text-xl font-medium tracking-tight leading-snug mb-8 font-sans">
          {title}
        </h3>
        <a href={link} target="_blank" rel="noreferrer" className="group/link flex items-center gap-4 mt-auto pt-5 border-t border-[#1a1a1a]">
          <div className="w-10 h-10 rounded-full border border-[#262626] flex items-center justify-center bg-[#050505] group-hover/link:bg-[#f4f4f5] group-hover/link:border-[#f4f4f5] transition-all duration-300">
            <svg className="w-4 h-4 text-[#888888] group-hover/link:text-black transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
          <span className="text-[#888888] group-hover/link:text-[#f4f4f5] text-sm font-medium transition-colors">
            View Credentials
          </span>
        </a>
      </div>
    </div>
  );
}

// --- MAIN PAGE ---
export default function Home() {
  
  // NOTE: I removed the sliderRef and useEffect() completely! 
  // No more step-by-step Javascript jumping.

  // Array of data makes duplicating the cards clean and easy
  const certificationsData = [
    { title: profile.certifications[0].title_4, link: profile.certifications[0].link_4, provider: "IBM / Coursera", imageSrc: "/PIC/CER_2.jpg", glowColor: "rgba(56, 189, 248, 0.15)" },
    { title: profile.certifications[0].title_5, link: profile.certifications[0].link_5, provider: "Google / Coursera", imageSrc: "/PIC/CER_3.jpg", glowColor: "rgba(52, 211, 153, 0.15)" },
    { title: profile.certifications[0].title_1, link: profile.certifications[0].link_1, provider: "Cisco", imageSrc: "/PIC/CER_1.jpg", glowColor: "rgba(99, 102, 241, 0.15)" },
    { title: profile.certifications[0].title_2, link: profile.certifications[0].link_2, provider: "Duke / Coursera", imageSrc: "/PIC/DUKE.jpg", glowColor: "rgba(250, 204, 21, 0.15)" },
    { title: profile.certifications[0].title_3, link: profile.certifications[0].link_3, provider: "Coursera", imageSrc: "/PIC/WORDPRESS.jpg", glowColor: "rgba(167, 139, 250, 0.15)" },
    { title: profile.awards[0].title_1, link: profile.awards[0].link_1, provider: "JIS Award", imageSrc: "/PIC/AWARD.jpg", glowColor: "rgba(244, 63, 94, 0.15)" },
    { title: profile.achievements[0].title_1, link: profile.achievements[0].link_1, provider: "JIS Achievement", imageSrc: "/PIC/CER_1.jpg", glowColor: "rgba(56, 189, 248, 0.15)" },
    { title: profile.achievements[0].title_2, link: profile.achievements[0].link_2, provider: "RISCC Conference", imageSrc: "/PIC/RICSS.jpg", glowColor: "rgba(167, 139, 250, 0.15)" }
  ];

  return (
    <main className="min-h-screen bg-[#050505] font-sans selection:bg-[#333] selection:text-white overflow-x-hidden">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center min-h-[50vh] text-center p-4 pt-28 relative z-10">
        <h1 className="text-4xl md:text-6xl text-[#f4f4f5] font-semibold mb-6 tracking-tight leading-tight">
          Hi, I’m {profile.name} <span className="inline-block origin-bottom hover:animate-wave">👋</span>
        </h1>
        <p className="text-lg md:text-xl text-[#888888] max-w-2xl font-medium tracking-tight leading-relaxed">
          {profile.headline}
        </p>
        <div className="mt-10 flex gap-4">
          <a href="/about" className="bg-[#f4f4f5] hover:bg-white text-black px-6 py-3 rounded-full text-sm font-semibold transition-all">
            About Suryadip 
          </a>
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="flex gap-2 items-center bg-[#0a0a0a] hover:bg-[#141414] border border-[#262626] text-[#f4f4f5] px-6 py-3 rounded-full transition-all text-sm font-medium">
            <span>Resume</span>
            <svg className="w-4 h-4 text-[#888888]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2M12 4v12m0-12 4 4m-4-4L8 8"/>
            </svg>
          </a>
        </div>
      </section>

      {/* INFINITE SLIDING CERTIFICATIONS SECTION */}
      <section className="relative w-full py-16 mb-24 border-y border-[#141414] bg-[#050505] overflow-hidden">
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/5 via-[#050505] to-[#050505] pointer-events-none"></div>

        <div className="w-full relative z-10">
          <div className="max-w-[90rem] mx-auto">
            <h2 className="text-xl font-medium text-[#f4f4f5] mb-8 tracking-tight flex items-center gap-3 pl-8 md:pl-16">
              <span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></span>
              Featured Certifications & Awards
            </h2>
          </div>
          
          {/* THE SEAMLESS MARQUEE CONTAINER */}
          {/* 1. w-max is crucial so it doesn't wrap lines.
              2. animate-carousel runs the pure CSS slide.
              3. hover:[animation-play-state:paused] pauses it perfectly when reading. 
          */}
          <div className="flex w-max animate-carousel hover:[animation-play-state:paused] pt-4 pb-8 pl-8 md:pl-16">
            
            {/* SET 1: First batch of cards */}
            <div className="flex gap-6 pr-6">
              {certificationsData.map((cert, index) => (
                <CertificationCard key={`set1-${index}`} {...cert} />
              ))}
            </div>

            {/* SET 2: Identical second batch. As Set 1 slides off left, Set 2 fills the screen! */}
            <div className="flex gap-6 pr-6">
              {certificationsData.map((cert, index) => (
                <CertificationCard key={`set2-${index}`} {...cert} />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* INFINITE PHOTO GALLERY SECTION (ALSO USING THE MARQUEE NOW) */}
      <div className="w-full overflow-hidden pb-8 pt-8 border-t border-[#141414] bg-[#050505] relative z-10">
        
        {/* Swapped this to also use animate-carousel seamlessly */}
        <div className="flex w-max animate-carousel hover:[animation-play-state:paused] pl-8 md:pl-16">
          
          <div className="flex gap-6 pr-6">
            <li className="relative aspect-square h-[30vh] max-h-[275px] w-[85vw] max-w-[900px] flex-none md:w-1/5 block">
              <div className="relative h-full w-full">
                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#333] transition-all duration-500">
                  <Image alt="JIS Innovation Award Day" fill className="relative h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale hover:grayscale-0" src="/PIC/MAAM.jpg"/>
                  <div className="absolute bottom-4 left-4 flex">
                    <div className="flex items-center rounded-full border border-[#262626] bg-[#050505]/80 px-4 py-2 text-xs font-medium text-[#f4f4f5] backdrop-blur-md">
                      <h3 className="tracking-tight">JIS Innovation Award Day</h3>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative aspect-square h-[30vh] max-h-[275px] w-[85vw] max-w-[475px] flex-none md:w-1/5 block">
              <div className="relative h-full w-full">
                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#333] transition-all duration-500">
                  <Image alt="Memories" fill className="relative h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale hover:grayscale-0" src="/PIC/GROUP_1.jpg"/>
                  <div className="absolute bottom-4 left-4 flex">
                    <div className="flex items-center rounded-full border border-[#262626] bg-[#050505]/80 px-4 py-2 text-xs font-medium text-[#f4f4f5] backdrop-blur-md">
                      <h3 className="tracking-tight">Time to cherish memories</h3>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative aspect-square h-[30vh] max-h-[275px] w-[85vw] max-w-[475px] flex-none md:w-1/5 block">
              <div className="relative h-full w-full">
                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#333] transition-all duration-500">
                  <Image alt="Mom" fill className="relative h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale hover:grayscale-0" src="/PIC/MOM.jpg"/>
                  <div className="absolute bottom-4 left-4 flex">
                    <div className="flex items-center rounded-full border border-[#262626] bg-[#050505]/80 px-4 py-2 text-xs font-medium text-[#f4f4f5] backdrop-blur-md">
                      <h3 className="tracking-tight">Always Heart to Heart</h3>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative aspect-square h-[30vh] max-h-[275px] w-[85vw] max-w-[475px] flex-none md:w-1/5 block">
              <div className="relative h-full w-full">
                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#333] transition-all duration-500">
                  <Image alt="Selfie" fill className="relative h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale hover:grayscale-0" src="/PIC/GROUP_4.jpg"/>
                  <div className="absolute bottom-4 left-4 flex">
                    <div className="flex items-center rounded-full border border-[#262626] bg-[#050505]/80 px-4 py-2 text-xs font-medium text-[#f4f4f5] backdrop-blur-md">
                      <h3 className="tracking-tight">Let Me Take A Selfie</h3>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </div>
          
          {/* Duplicate set for photo gallery loop */}
          <div className="flex gap-6 pr-6">
            <li className="relative aspect-square h-[30vh] max-h-[275px] w-[85vw] max-w-[900px] flex-none md:w-1/5 block">
              <div className="relative h-full w-full">
                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#333] transition-all duration-500">
                  <Image alt="JIS Innovation Award Day" fill className="relative h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale hover:grayscale-0" src="/PIC/MAAM.jpg"/>
                  <div className="absolute bottom-4 left-4 flex">
                    <div className="flex items-center rounded-full border border-[#262626] bg-[#050505]/80 px-4 py-2 text-xs font-medium text-[#f4f4f5] backdrop-blur-md">
                      <h3 className="tracking-tight">JIS Innovation Award Day</h3>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative aspect-square h-[30vh] max-h-[275px] w-[85vw] max-w-[475px] flex-none md:w-1/5 block">
              <div className="relative h-full w-full">
                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#333] transition-all duration-500">
                  <Image alt="Memories" fill className="relative h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale hover:grayscale-0" src="/PIC/GROUP_1.jpg"/>
                  <div className="absolute bottom-4 left-4 flex">
                    <div className="flex items-center rounded-full border border-[#262626] bg-[#050505]/80 px-4 py-2 text-xs font-medium text-[#f4f4f5] backdrop-blur-md">
                      <h3 className="tracking-tight">Time to cherish memories</h3>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative aspect-square h-[30vh] max-h-[275px] w-[85vw] max-w-[475px] flex-none md:w-1/5 block">
              <div className="relative h-full w-full">
                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#333] transition-all duration-500">
                  <Image alt="Mom" fill className="relative h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale hover:grayscale-0" src="/PIC/MOM.jpg"/>
                  <div className="absolute bottom-4 left-4 flex">
                    <div className="flex items-center rounded-full border border-[#262626] bg-[#050505]/80 px-4 py-2 text-xs font-medium text-[#f4f4f5] backdrop-blur-md">
                      <h3 className="tracking-tight">Always Heart to Heart</h3>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative aspect-square h-[30vh] max-h-[275px] w-[85vw] max-w-[475px] flex-none md:w-1/5 block">
              <div className="relative h-full w-full">
                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#333] transition-all duration-500">
                  <Image alt="Selfie" fill className="relative h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale hover:grayscale-0" src="/PIC/GROUP_4.jpg"/>
                  <div className="absolute bottom-4 left-4 flex">
                    <div className="flex items-center rounded-full border border-[#262626] bg-[#050505]/80 px-4 py-2 text-xs font-medium text-[#f4f4f5] backdrop-blur-md">
                      <h3 className="tracking-tight">Let Me Take A Selfie</h3>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </div>
          
        </div>
      </div> 
    </main>
  );
}