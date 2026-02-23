"use client";

import { useState, useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { profile } from '../../data/profile';

// --- CUSTOM ZERO-LAYOUT-SHIFT TYPEWRITER EFFECT ---
function Typewriter({ text, delay = 0, speed = 40, showCursor = false }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      setIsTyping(true);
      const interval = setInterval(() => {
        setDisplayedText(text.substring(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay, speed]);

  return (
    <span className="relative inline-block w-full">
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

// --- NEW: SMART AUTO-SCROLLING CAROUSEL WITH PROFESSIONAL FLOURISHES ---
function AutoCarousel({ items, renderItem }) {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth infinite auto-scroll logic
  useEffect(() => {
    let animationFrameId;
    const scroll = () => {
      if (!isHovered && scrollRef.current) {
        scrollRef.current.scrollLeft += 1.5; // Controls the speed of auto-slide
        
        // Seamless infinite loop: resets when scrolled halfway through the cloned lists
        if (scrollRef.current.scrollLeft >= (scrollRef.current.scrollWidth / 2)) {
          scrollRef.current.scrollLeft = 0; 
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };
    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  // Fast manual scroll on button click
  const handleScroll = (dir) => {
    if (scrollRef.current) {
      const amount = dir === 'left' ? -450 : 450;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };
  
  // Clone items 4 times to ensure a massive scrolling runway for the infinite loop
  const clonedItems = [...items, ...items, ...items, ...items];

  return (
    <div 
      className="relative w-full overflow-hidden group/carousel py-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left Arrow Button (Transparent with Cyan Glow) */}
      <button 
        onClick={() => handleScroll('left')}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#050505]/40 backdrop-blur-md border border-white/10 text-[#888888] hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 scale-90 group-hover/carousel:scale-100"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow Button (Transparent with Cyan Glow) */}
      <button 
        onClick={() => handleScroll('right')}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#050505]/40 backdrop-blur-md border border-white/10 text-[#888888] hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 scale-90 group-hover/carousel:scale-100"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div 
        ref={scrollRef} 
        className="flex gap-6 overflow-x-auto px-6 md:px-10 pb-6 pt-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {clonedItems.map((item, i) => (
          <div key={i} className="flex-shrink-0">
            {renderItem(item, i)}
          </div>
        ))}
      </div>
    </div>
  );
}

// --- PREMIUM CERTIFICATION CARD COMPONENT ---
function CertificationCard({ title, link, imageSrc, provider, glowColor }) {
  return (
    <div className="relative flex-none w-[85vw] sm:w-[350px] h-[460px] flex flex-col bg-[#050505] border border-[#1f1f1f] rounded-[1.5rem] overflow-hidden hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] transition-all duration-500 group z-10">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 group-hover:opacity-100 transition-all duration-700 ease-in-out group-hover:scale-125"
        style={{ background: `radial-gradient(circle at 50% 0%, ${glowColor}, transparent 70%)` }}
      />
      <div className="relative w-full h-[50%] bg-[#080808] border-b border-[#1f1f1f]/50 flex items-center justify-center overflow-hidden z-10 p-3">
        <div className="relative w-full h-full">
          <Image src={imageSrc} alt={title} fill className="object-contain object-center transition-transform duration-700 group-hover:scale-105 drop-shadow-xl" />
        </div>
      </div>
      <div className="relative flex flex-col h-[50%] p-6 z-10">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 bg-[#141414]/80 backdrop-blur-md border border-[#262626] rounded-full text-[#888888] text-[11px] font-medium tracking-wide uppercase">
            {provider}
          </span>
        </div>
        <h3 className="text-[#f4f4f5] text-lg font-medium tracking-tight leading-snug mb-4 line-clamp-2">
          {title}
        </h3>
        <a href={link} target="_blank" rel="noreferrer" className="group/link flex items-center gap-4 mt-auto pt-4 border-t border-[#1a1a1a]">
          <div className="w-10 h-10 shrink-0 rounded-full border border-[#262626] flex items-center justify-center bg-[#0a0a0a] group-hover/link:bg-cyan-400/10 group-hover/link:border-cyan-400 transition-all duration-300 group-hover/link:shadow-[0_0_10px_rgba(6,182,212,0.3)]">
            <svg className="w-4 h-4 text-[#888888] group-hover/link:text-cyan-400 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
          <span className="text-[#888888] group-hover/link:text-cyan-400 text-sm font-medium transition-colors duration-300">
            View Credentials
          </span>
        </a>
      </div>
    </div>
  );
}

// --- PREMIUM PHOTO CARD COMPONENT ---
function PhotoCard({ src, alt, text }) {
  return (
    <div className="relative flex-none w-[85vw] sm:w-[380px] h-[380px] flex flex-col bg-[#050505] border border-[#1f1f1f] rounded-[1.5rem] overflow-hidden hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] transition-all duration-500 group z-10 p-2">
      <div className="relative w-full h-full rounded-[1rem] overflow-hidden bg-[#080808]">
        <Image src={src} alt={alt} fill className="object-contain object-center group-hover:scale-105 transition-transform duration-700 ease-in-out" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        <div className="absolute bottom-4 left-4 right-4 flex">
          <div className="flex items-center rounded-full border border-white/20 bg-black/60 backdrop-blur-md px-4 py-2 text-sm font-medium text-[#f4f4f5] group-hover:border-cyan-400/50 transition-colors duration-300 shadow-lg">
            <h3 className="tracking-tight">{text}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- MAIN PAGE ---
export default function Home() {
  const [projectCount, setProjectCount] = useState(0);
  const [showButtons, setShowButtons] = useState(false);
  const [showStats, setShowStats] = useState(false);
  
  const [certVisible, setCertVisible] = useState(false);
  const [galleryVisible, setGalleryVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target.id === 'cert-section' && entry.isIntersecting) setCertVisible(true);
        if (entry.target.id === 'gallery-section' && entry.isIntersecting) setGalleryVisible(true);
      });
    }, { threshold: 0.15 });

    const certEl = document.getElementById('cert-section');
    const galleryEl = document.getElementById('gallery-section');
    
    if (certEl) observer.observe(certEl);
    if (galleryEl) observer.observe(galleryEl);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let current = 0;
      const target = 12;
      const interval = setInterval(() => {
        current += 1;
        setProjectCount(current);
        if (current >= target) clearInterval(interval);
      }, 800); 
      return () => clearInterval(interval);
    }, 1000); 
    return () => clearTimeout(startTimeout);
  }, []);

  useEffect(() => {
    const btnTimeout = setTimeout(() => {
      setShowButtons(true);
    }, 2500); 
    return () => clearTimeout(btnTimeout);
  }, []);

  useEffect(() => {
    const statsTimeout = setTimeout(() => {
      setShowStats(true);
    }, 100); 
    return () => clearTimeout(statsTimeout);
  }, []);

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

  const photosData = [
    { src: "/PIC/MAAM.jpg", alt: "JIS Innovation Award Day", text: "JIS Innovation Award Day" },
    { src: "/PIC/GROUP_1.jpg", alt: "Memories", text: "Time to cherish memories" },
    { src: "/PIC/MOM.jpg", alt: "Mom", text: "Always Heart to Heart" },
    { src: "/PIC/GROUP_4.jpg", alt: "Selfie", text: "Let Me Take A Selfie" }
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-[#f4f4f5]">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full max-w-[85rem] mx-auto px-6 md:px-12 lg:px-16 pt-32 md:pt-40 pb-20 z-10">
        
        <div className="w-full overflow-hidden mb-12 py-2 border-y border-[#141414] bg-[#0a0a0a]/50">
          <div className="flex w-max animate-carousel">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#888888] px-8 whitespace-nowrap">
                ✦ READY ✦ TO ✦ INNOVATE
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 mb-24">
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
            <div>
              <span className="inline-block px-4 py-2 bg-[#141414] border border-[#262626] rounded-full text-cyan-400 text-xs md:text-sm font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.15)] text-center">
                <Typewriter text="Data Scientist & AI/ML Engineer" delay={100} speed={20} showCursor={true} />
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-[#f4f4f5] leading-[1.15] tracking-tight">
              <Typewriter text={`Hi, I am ${profile.name}.`} delay={800} speed={30} showCursor={true} />
            </h1>
            <p className="text-lg md:text-xl text-[#888888] font-medium leading-relaxed max-w-lg">
              <Typewriter text="I build predictive models and data-driven solutions, translating complex datasets into actionable intelligence." delay={1500} speed={10} />
            </p>
            <div className={`flex flex-wrap items-center gap-4 pt-4 transition-all duration-1000 transform ${showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="group flex items-center gap-3 bg-transparent border border-[#333333] hover:border-cyan-400 text-[#f4f4f5] hover:text-cyan-400 px-7 py-3.5 rounded-full font-bold transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <span>Download Resume</span>
                <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              <Link href="/about" className="group flex items-center gap-3 bg-transparent border border-[#333333] hover:border-cyan-400 text-[#f4f4f5] hover:text-cyan-400 px-7 py-3.5 rounded-full font-bold transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <span>About Me</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-[280px] h-[350px] md:w-[380px] md:h-[480px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:shadow-[0_0_50px_rgba(6,182,212,0.15)] hover:border-cyan-500/30 transition-all duration-500 group">
              <Image src="/PIC/MY PHOTO.jpg" alt={profile.name} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 perspective-[1000px]">
          <div className={`group relative flex flex-col justify-between p-8 md:p-10 rounded-[2rem] bg-[#0a0a0a] border border-[#1f1f1f] hover:border-cyan-400/50 transition-all duration-1000 ease-out hover:shadow-[0_15px_40px_rgba(6,182,212,0.15)] hover:-translate-y-2 overflow-hidden z-10 transform ${showStats ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 translate-y-12 rotate-x-6'}`} style={{ transitionDelay: showStats ? '100ms' : '0ms' }}>
            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-cyan-400/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-4xl md:text-5xl font-bold text-cyan-400 tracking-tight group-hover:scale-110 origin-left transition-transform duration-500">{projectCount}+</h3>
              <svg className="w-8 h-8 text-[#333] group-hover:text-cyan-400/60 transition-colors duration-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </div>
            <p className="text-[#a1a1aa] text-sm md:text-base font-medium leading-relaxed relative z-10 group-hover:text-[#f4f4f5] transition-colors duration-300">Advanced Projects<br/>(Machine Learning & Data Extraction)</p>
          </div>

          <div className={`group relative flex flex-col justify-between p-8 md:p-10 rounded-[2rem] bg-[#0a0a0a] border border-[#1f1f1f] hover:border-cyan-400/50 transition-all duration-1000 ease-out hover:shadow-[0_15px_40px_rgba(6,182,212,0.15)] hover:-translate-y-2 overflow-hidden z-10 transform ${showStats ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 translate-y-12 rotate-x-6'}`} style={{ transitionDelay: showStats ? '300ms' : '0ms' }}>
            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-cyan-400/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-[#f4f4f5] tracking-tight group-hover:text-cyan-400 transition-colors duration-500">Core Stack</h3>
              <svg className="w-8 h-8 text-[#333] group-hover:text-cyan-400/60 transition-colors duration-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </div>
            <p className="text-[#a1a1aa] text-sm md:text-base font-medium leading-relaxed relative z-10 group-hover:text-[#f4f4f5] transition-colors duration-300">Python, SQL, XGBoost, Selenium</p>
          </div>

          <div className={`group relative flex flex-col justify-between p-8 md:p-10 rounded-[2rem] bg-[#0a0a0a] border border-[#1f1f1f] hover:border-cyan-400/50 transition-all duration-1000 ease-out hover:shadow-[0_15px_40px_rgba(6,182,212,0.15)] hover:-translate-y-2 overflow-hidden z-10 transform ${showStats ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 translate-y-12 rotate-x-6'}`} style={{ transitionDelay: showStats ? '500ms' : '0ms' }}>
            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-cyan-400/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-[#f4f4f5] tracking-tight group-hover:text-cyan-400 transition-colors duration-500">Availability</h3>
              <div className="relative flex items-center justify-center w-8 h-8 shrink-0">
                 <span className="absolute inline-flex h-4 w-4 rounded-full bg-cyan-400 opacity-75 animate-ping"></span>
                 <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500 border border-black"></span>
              </div>
            </div>
            <p className="text-[#a1a1aa] text-sm md:text-base font-medium leading-relaxed relative z-10 group-hover:text-[#f4f4f5] transition-colors duration-300">Available for Walk-ins &<br/>Full-Time Roles</p>
          </div>
        </div>
      </section>

      {/* --- SEPARATE SECTION 1: CERTIFICATIONS --- */}
      <section id="cert-section" className={`relative w-full max-w-[85rem] mx-auto px-6 md:px-12 lg:px-16 pb-16 z-10 transition-all duration-1000 ease-out transform ${certVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
        <div className="mb-6 ml-2">
          <h2 className="inline-block px-4 py-2 bg-[#141414] border border-[#262626] rounded-full text-cyan-400 text-xs md:text-sm font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            Featured Certifications & Awards
          </h2>
        </div>

        <div className="relative w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-[2rem] pt-8 pb-4 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)] hover:border-cyan-400/30 transition-all duration-700 hover:-translate-y-1">
          <p className="text-[#888888] text-base md:text-lg px-6 md:px-10 mb-2 max-w-3xl">
            A curated showcase of my professional qualifications, continuous learning journeys, and recognition from industry-leading organizations.
          </p>
          
          {/* SMART AUTO CAROUSEL FOR CERTIFICATES */}
          <AutoCarousel 
            items={certificationsData} 
            renderItem={(cert, index) => <CertificationCard key={`cert-${index}`} {...cert} />} 
          />
        </div>
      </section>

      {/* --- SEPARATE SECTION 2: PHOTO GALLERY --- */}
      <section id="gallery-section" className={`relative w-full max-w-[85rem] mx-auto px-6 md:px-12 lg:px-16 pb-24 z-10 transition-all duration-1000 ease-out transform ${galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
        <div className="mb-6 ml-2">
          <h2 className="inline-block px-4 py-2 bg-[#141414] border border-[#262626] rounded-full text-cyan-400 text-xs md:text-sm font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            Photo Gallery
          </h2>
        </div>

        <div className="relative w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-[2rem] pt-8 pb-4 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)] hover:border-cyan-400/30 transition-all duration-700 hover:-translate-y-1">
          <p className="text-[#888888] text-base md:text-lg px-6 md:px-10 mb-2 max-w-3xl">
            Glimpses into my life, memorable events, and the moments that keep me inspired and driven both personally and professionally.
          </p>
          
          {/* SMART AUTO CAROUSEL FOR PHOTOS */}
          <AutoCarousel 
            items={photosData} 
            renderItem={(photo, index) => <PhotoCard key={`photo-${index}`} {...photo} />} 
          />
        </div>
      </section>
      
    </main>
  );
}