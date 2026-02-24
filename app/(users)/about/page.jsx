"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { profile } from "../../../data/profile";
import Navbar from "../../../components/Navbar";

// --- CUSTOM ZERO-LAYOUT-SHIFT TYPEWRITER EFFECT (STRICT-MODE SAFE FIX) ---
function Typewriter({ text, delay = 0, speed = 15, showCursor = false, start = true }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Wait until triggered
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

    // This completely fixes the Next.js Strict Mode "invisible text" bug!
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay, speed, start]);

  return (
    <span className="relative inline-block">
      {/* Invisible text preserves layout so the page never jumps */}
      <span className="invisible whitespace-pre-wrap">{text}</span>
      {/* Visible typing text overlaid exactly on top */}
      <span className="absolute top-0 left-0 w-full h-full text-inherit whitespace-pre-wrap">
        {displayedText}
        {showCursor && isTyping && (
          <span className="border-r-2 border-cyan-400 animate-pulse ml-[2px] opacity-80"></span>
        )}
      </span>
    </span>
  );
}

// --- PROJECT IMAGES ---
const factoryGuardImages = [
  "/PIC/iot1.jpg", "/PIC/iot2.jpg", "/PIC/iot3.jpg", "/PIC/iot4.jpg",
  "/PIC/iot5.jpg", "/PIC/iot6.jpg", "/PIC/iot7.jpg", "/PIC/iot8.jpg",
];

// --- SKILL ICONS DATA ---
const skillsData = {
  wellKnown: [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' }
  ],
  dataScience: [
    { name: 'Numpy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg' },
    { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg' },
    { name: 'Matplotlib', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg' },
    { name: 'PowerBI', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
    { name: 'Excel', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg' },
    { name: 'Statistics', icon: 'https://img.icons8.com/fluency/512/statistics.png' }
  ],
  aiml: [
    { name: 'Scikit-Learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg' },
    { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
    { name: 'Deep Learning', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg' },
    { name: 'LLM', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
    { name: 'Gen-AI', icon: 'https://cdn.simpleicons.org/googlegemini/8E75B2' }
  ],
  development: [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
    { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg' },
    { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman/FF6C37' },
    { name: 'RAG', icon: 'https://cdn.simpleicons.org/langchain/1C3C3C' }
  ],
  database: [
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' }
  ]
};

export default function About() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [isMounted, setIsMounted] = useState(false);
  
  const [visible, setVisible] = useState({
    introduction: false,
    experience: false,
    skills: false,
    education: false
  });

  const navItems = [
    { id: 'introduction', label: 'Introduction', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
    )},
    { id: 'experience', label: 'Work Experience', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    )},
    { id: 'skills', label: 'Technical Skills', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    )},
    { id: 'education', label: 'Education', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
    )},
  ];

  useEffect(() => {
    setIsMounted(true);
    // FORCE intro to be visible instantly so text is never "deleted" on load
    setVisible(prev => ({ ...prev, introduction: true }));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            setVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { rootMargin: '0px 0px -50px 0px' } 
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <main className="relative z-0 min-h-screen bg-[#050505] text-[#f4f4f5]">
      <Navbar />

      <div className="max-w-[85rem] mx-auto px-6 md:px-12 lg:px-16 pt-32 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-20 relative">
          
          {/* =========================================
              LEFT SIDEBAR WITH PROFILE PICTURE
          ========================================= */}
          <aside className={`group/sidebar relative hidden lg:flex flex-col sticky top-32 h-max bg-[#0a0a0a] border border-[#1f1f1f] rounded-[2rem] p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(6,182,212,0.1)] hover:border-cyan-400/30 transition-all duration-700 ease-out transform ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/sidebar:opacity-100 transition-all duration-700 ease-in-out rounded-[2rem]" style={{ background: 'radial-gradient(circle at 50% 10%, rgba(6,182,212,0.08), transparent 70%)' }} />

            <div className={`relative z-10 flex flex-col items-center border-b border-[#1f1f1f] pb-8 mb-8 transition-all duration-1000 ease-out delay-200 transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#1f1f1f] mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)] group relative">
                <div className="absolute inset-0 z-10 rounded-full border-2 border-transparent group-hover:border-cyan-400 transition-colors duration-700 pointer-events-none"></div>
                <Image src="/PIC/MY PHOTO.jpg" alt="Suryadip Bera" fill className="object-cover transform transition-transform duration-700 group-hover:scale-110" priority />
              </div>
              
              <div className="flex items-center gap-2 text-[#888888] font-medium mb-6">
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Asia / Bangalore</span>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {['English', 'Bengali', 'Hindi', 'Odia'].map(lang => (
                  <span key={lang} className="px-3 py-1 bg-[#141414] border border-[#262626] rounded-full text-xs font-medium text-[#a1a1aa]">{lang}</span>
                ))}
              </div>
            </div>

            <nav className="relative z-10 flex flex-col gap-2">
              {navItems.map((item, index) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`} 
                  onClick={(e) => handleScroll(e, item.id)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-500 font-medium ${
                    activeSection === item.id 
                    ? 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 shadow-[inset_0_0_15px_rgba(6,182,212,0.1)]' 
                    : 'text-[#888888] hover:bg-[#141414] hover:text-[#f4f4f5] border border-transparent'
                  } ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: `${400 + (index * 100)}ms` }}
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* =========================================
              MOBILE HEADER WITH PROFILE PICTURE
          ========================================= */}
          <div className={`group/mobile relative lg:hidden flex flex-col items-center bg-[#0a0a0a] border border-[#1f1f1f] rounded-[2rem] p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(6,182,212,0.15)] hover:border-cyan-400/30 transition-all duration-700 ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'}`}>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/mobile:opacity-100 transition-all duration-700 ease-in-out rounded-[2rem]" style={{ background: 'radial-gradient(circle at 50% 10%, rgba(6,182,212,0.1), transparent 70%)' }} />
            
            <div className="relative z-10 w-32 h-32 rounded-full overflow-hidden border-2 border-[#1f1f1f] mb-4 shadow-[0_0_20px_rgba(6,182,212,0.15)] group">
              <div className="absolute inset-0 z-10 rounded-full border-2 border-transparent group-hover:border-cyan-400 transition-colors duration-700 pointer-events-none"></div>
              <Image src="/PIC/MY PHOTO.jpg" alt="Suryadip Bera" fill className="object-cover transform transition-transform duration-700 group-hover:scale-110" priority />
            </div>
            <div className="relative z-10 flex items-center gap-2 text-[#888888] font-medium mb-4">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>Asia / Bangalore</span>
            </div>
            <div className="relative z-10 flex flex-wrap justify-center gap-2">
              {['English', 'Bengali', 'Hindi', 'Odia'].map(lang => (
                <span key={lang} className="px-3 py-1 bg-[#141414] border border-[#262626] rounded-full text-xs font-medium text-[#a1a1aa]">{lang}</span>
              ))}
            </div>
          </div>

          {/* =========================================
              RIGHT CONTENT AREA
          ========================================= */}
          <div className="flex flex-col gap-16 lg:gap-24 w-full max-w-4xl">
            
            {/* 1. INTRODUCTION SECTION */}
            <section id="introduction" className="scroll-mt-32">
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#f4f4f5] mb-4 h-[3rem] md:h-[4rem]">
                <Typewriter text="Suryadip Bera" delay={50} speed={25} showCursor={true} start={visible.introduction} />
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-cyan-400 mb-8 tracking-wide h-[2rem]">
                <Typewriter text="Data Scientist | AI Enthusiast" delay={400} speed={15} showCursor={false} start={visible.introduction} />
              </h2>

              <div className="flex flex-wrap gap-3 mb-10">
                <div className={`transition-all duration-1000 ease-out transform ${visible.introduction ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '700ms' }}>
                  <a href={profile.links.github} target="_blank" rel="noreferrer" className="flex items-center justify-center min-w-[110px] gap-2 px-5 py-2.5 bg-[#141414] border border-[#262626] hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] text-[#a1a1aa] hover:text-cyan-400 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-1">
                    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/></svg>
                    <Typewriter text="GitHub" delay={900} speed={20} start={visible.introduction} />
                  </a>
                </div>

                <div className={`transition-all duration-1000 ease-out transform ${visible.introduction ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '800ms' }}>
                  <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center min-w-[110px] gap-2 px-5 py-2.5 bg-[#141414] border border-[#262626] hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] text-[#a1a1aa] hover:text-cyan-400 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-1">
                    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/><path d="M7.2 8.809H4V19.5h3.2V8.809Z"/></svg>
                    <Typewriter text="LinkedIn" delay={1100} speed={20} start={visible.introduction} />
                  </a>
                </div>

                <div className={`transition-all duration-1000 ease-out transform ${visible.introduction ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '900ms' }}>
                  <a href="mailto:suryadip230@gmail.com" className="flex items-center justify-center min-w-[100px] gap-2 px-5 py-2.5 bg-[#141414] border border-[#262626] hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] text-[#a1a1aa] hover:text-cyan-400 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-1">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    <Typewriter text="Email" delay={1300} speed={20} start={visible.introduction} />
                  </a>
                </div>
              </div>

              {/* ANNIMATED ABOUT BOX */}
              <div className={`transition-all duration-1000 ease-out transform ${visible.introduction ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '500ms' }}>
                <div className="group/box relative bg-[#0a0a0a] border border-[#1f1f1f] hover:border-cyan-400/40 p-8 md:p-10 rounded-[2rem] shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/box:opacity-100 transition-all duration-700 ease-in-out scale-110 group-hover/box:scale-100" style={{ background: 'radial-gradient(circle at 50% -20%, rgba(6,182,212,0.12), transparent 70%)' }} />
                  <p className="relative z-10 text-[#a1a1aa] text-lg leading-relaxed">{profile.aboutMe}</p>
                </div>
              </div>
            </section>

            {/* 2. WORK EXPERIENCE SECTION */}
            <section id="experience" className="scroll-mt-32">
              <h2 className="text-2xl md:text-3xl font-bold text-[#f4f4f5] mb-8 flex items-center gap-3 h-[2.5rem]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)] shrink-0"></span>
                <Typewriter text="Work Experience" start={visible.experience} delay={50} speed={20} showCursor={true} />
              </h2>

              <div className="flex flex-col gap-8">
                
                {/* ANIMATED EXP BOX 1 */}
                <div className={`transition-all duration-1000 ease-out transform ${visible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '200ms' }}>
                  <div className="group/box relative bg-[#0a0a0a] border border-[#1f1f1f] hover:border-cyan-400/40 p-8 md:p-10 rounded-[2rem] shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/box:opacity-100 transition-all duration-700 ease-in-out scale-110 group-hover/box:scale-100" style={{ background: 'radial-gradient(circle at 50% -20%, rgba(6,182,212,0.12), transparent 70%)' }} />
                    <div className="relative z-10">
                      
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-8">
                        <div>
                          <h3 className="text-2xl font-bold text-[#f4f4f5]">Data Science & ML Intern</h3>
                          <p className="text-cyan-400 font-medium mt-1 text-lg">Infotact Solutions</p>
                        </div>
                        <span className="inline-block px-4 py-1.5 bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 rounded-full text-sm font-medium w-max shadow-inner mt-2 md:mt-0">
                          Dec 2025 — Feb 2026
                        </span>
                      </div>
                      
                      <div className="group mb-8 w-full relative z-20">
                        <div className="bg-[#141414] border border-[#262626] rounded-2xl overflow-hidden transition-all duration-300 hover:border-cyan-400/50 shadow-sm hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]">
                          
                          <div className="p-5 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer bg-[#141414] relative z-20">
                            <h4 className="text-lg sm:text-xl font-bold text-[#f4f4f5] flex items-center gap-3">
                              <svg className="w-6 h-6 text-cyan-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
                              Project: FactoryGuard AI
                            </h4>
                            <span className="text-xs font-medium px-4 py-2 rounded-full bg-[#0a0a0a] border border-[#333333] text-[#888888] group-hover:bg-cyan-400/10 group-hover:text-cyan-400 group-hover:border-cyan-400/30 transition-all duration-300 flex items-center gap-2 shrink-0 w-max">
                              Hover for Highlights
                              <svg className="w-4 h-4 transform transition-transform duration-500 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </span>
                          </div>

                          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out bg-[#050505]">
                            <div className="overflow-hidden">
                              <div className="p-6 md:p-8 border-t border-[#1f1f1f]">
                                <ul className="space-y-4">
                                  <li className="text-[#888888] leading-relaxed text-sm md:text-base flex items-start gap-3">
                                    <svg className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                    <span><strong className="text-[#f4f4f5]">Data Pipeline:</strong> Executed complex sensor interpolations and applied SMOTE to resolve extreme dataset class imbalances.</span>
                                  </li>
                                  <li className="text-[#888888] leading-relaxed text-sm md:text-base flex items-start gap-3">
                                    <svg className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                    <span><strong className="text-[#f4f4f5]">Feature Engineering:</strong> Calculated rolling means and aggregated raw IoT vibration, temperature, and pressure metrics.</span>
                                  </li>
                                  <li className="text-[#888888] leading-relaxed text-sm md:text-base flex items-start gap-3">
                                    <svg className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                    <span><strong className="text-[#f4f4f5]">Model Training:</strong> Trained and fine-tuned an XGBoost Classifier for high-accuracy anomaly detection and predictive maintenance.</span>
                                  </li>
                                  <li className="text-[#888888] leading-relaxed text-sm md:text-base flex items-start gap-3">
                                    <svg className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                    <span><strong className="text-[#f4f4f5]">Explainability:</strong> Implemented SHAP (Shapley Additive exPlanations) values to guarantee transparent model interpretability.</span>
                                  </li>
                                  <li className="text-[#888888] leading-relaxed text-sm md:text-base flex items-start gap-3">
                                    <svg className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                    <span><strong className="text-[#f4f4f5]">Deployment:</strong> Architected a Flask API and intuitive UI dashboard for real-time factory risk assessment.</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full overflow-hidden rounded-xl relative z-10 border border-[#1f1f1f]">
                        <div className="flex w-max animate-carousel hover:[animation-play-state:paused]">
                          <div className="flex gap-4 pr-4">
                            {factoryGuardImages.map((img, idx) => (
                              <div key={`set1-${idx}`} className="shrink-0 w-[240px] sm:w-[280px] h-[180px] relative rounded-lg overflow-hidden bg-[#050505]">
                                <Image src={img} alt={`FactoryGuard preview ${idx}`} fill className="object-cover object-center" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                              </div>
                            ))}
                          </div>
                          <div className="flex gap-4 pr-4">
                            {factoryGuardImages.map((img, idx) => (
                              <div key={`set2-${idx}`} className="shrink-0 w-[240px] sm:w-[280px] h-[180px] relative rounded-lg overflow-hidden bg-[#050505]">
                                <Image src={img} alt={`FactoryGuard duplicate ${idx}`} fill className="object-cover object-center" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* ANIMATED EXP BOX 2 */}
                <div className={`transition-all duration-1000 ease-out transform ${visible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '400ms' }}>
                  <div className="group/box relative bg-[#0a0a0a] border border-[#1f1f1f] hover:border-cyan-400/40 p-8 md:p-10 rounded-[2rem] shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/box:opacity-100 transition-all duration-700 ease-in-out scale-110 group-hover/box:scale-100" style={{ background: 'radial-gradient(circle at 50% -20%, rgba(6,182,212,0.12), transparent 70%)' }} />
                    <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                      <h3 className="text-xl font-bold text-[#f4f4f5]">Aspiring Data Scientist</h3>
                      <span className="inline-block px-3 py-1 bg-[#141414] border border-[#262626] text-[#888888] rounded-full text-sm font-medium w-max">Fresher</span>
                    </div>
                    <p className="relative z-10 text-[#888888] leading-relaxed">
                      Passionate about solving real-world problems using data-driven approaches. Building a strong foundation in Python, machine learning, and statistical modeling, and eager to contribute to impactful AI projects.
                    </p>
                  </div>
                </div>

              </div>
            </section>

            {/* 3. TECHNICAL SKILLS SECTION */}
            <section id="skills" className="scroll-mt-32">
              <h2 className="text-2xl md:text-3xl font-bold text-[#f4f4f5] mb-8 flex items-center gap-3 h-[2.5rem]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)] shrink-0"></span>
                <Typewriter text="Technical Skills" start={visible.skills} delay={50} speed={20} showCursor={true} />
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* ANIMATED SKILL BOX 1 */}
                <div className={`transition-all duration-1000 ease-out transform ${visible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '100ms' }}>
                  <div className="group/box relative bg-[#0a0a0a] border border-[#1f1f1f] hover:border-cyan-400/40 p-8 rounded-[2rem] shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full">
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/box:opacity-100 transition-all duration-700 ease-in-out scale-110 group-hover/box:scale-100" style={{ background: 'radial-gradient(circle at 50% -20%, rgba(6,182,212,0.12), transparent 70%)' }} />
                    <div className="relative z-10">
                      <h3 className="text-lg font-bold text-[#f4f4f5] mb-2">Wellknown Languages</h3>
                      <p className="text-sm text-[#888888] mb-6">Expert-level Python and Java skills applied in real-world engineering.</p>
                      <div className="flex flex-wrap gap-3">
                        {skillsData.wellKnown.map((skill, index) => (
                          <div key={skill.name} className={`transition-all duration-700 ease-out transform ${visible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${index * 50 + 300}ms` }}>
                            {/* ENHANCED MAGNETIC PILL HOVER */}
                            <span className="relative z-10 flex items-center gap-2 px-3.5 py-1.5 bg-[#141414] border border-[#262626] rounded-xl text-sm font-medium text-[#f4f4f5] hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:-translate-y-1.5 hover:scale-105 transition-all duration-300 ease-out shadow-sm cursor-default">
                              <div className="w-5 h-5 flex items-center justify-center bg-white rounded-md p-0.5"><img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" /></div>
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* ANIMATED SKILL BOX 2 */}
                <div className={`transition-all duration-1000 ease-out transform ${visible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '200ms' }}>
                  <div className="group/box relative bg-[#0a0a0a] border border-[#1f1f1f] hover:border-cyan-400/40 p-8 rounded-[2rem] shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full">
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/box:opacity-100 transition-all duration-700 ease-in-out scale-110 group-hover/box:scale-100" style={{ background: 'radial-gradient(circle at 50% -20%, rgba(6,182,212,0.12), transparent 70%)' }} />
                    <div className="relative z-10">
                      <h3 className="text-lg font-bold text-[#f4f4f5] mb-2">Data Science</h3>
                      <p className="text-sm text-[#888888] mb-6">Data analysis, statistical modeling, and visualization tools.</p>
                      <div className="flex flex-wrap gap-3">
                        {skillsData.dataScience.map((skill, index) => (
                          <div key={skill.name} className={`transition-all duration-700 ease-out transform ${visible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${index * 50 + 400}ms` }}>
                            <span className="relative z-10 flex items-center gap-2 px-3.5 py-1.5 bg-[#141414] border border-[#262626] rounded-xl text-sm font-medium text-[#f4f4f5] hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:-translate-y-1.5 hover:scale-105 transition-all duration-300 ease-out shadow-sm cursor-default">
                              <div className="w-5 h-5 flex items-center justify-center bg-white rounded-md p-0.5"><img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" /></div>
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* ANIMATED SKILL BOX 3 */}
                <div className={`transition-all duration-1000 ease-out transform ${visible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '300ms' }}>
                  <div className="group/box relative bg-[#0a0a0a] border border-[#1f1f1f] hover:border-cyan-400/40 p-8 rounded-[2rem] shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full">
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/box:opacity-100 transition-all duration-700 ease-in-out scale-110 group-hover/box:scale-100" style={{ background: 'radial-gradient(circle at 50% -20%, rgba(6,182,212,0.12), transparent 70%)' }} />
                    <div className="relative z-10">
                      <h3 className="text-lg font-bold text-[#f4f4f5] mb-2">AI | ML</h3>
                      <p className="text-sm text-[#888888] mb-6">Building predictive models and deploying ML solutions.</p>
                      <div className="flex flex-wrap gap-3">
                        {skillsData.aiml.map((skill, index) => (
                          <div key={skill.name} className={`transition-all duration-700 ease-out transform ${visible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${index * 50 + 500}ms` }}>
                            <span className="relative z-10 flex items-center gap-2 px-3.5 py-1.5 bg-[#141414] border border-[#262626] rounded-xl text-sm font-medium text-[#f4f4f5] hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:-translate-y-1.5 hover:scale-105 transition-all duration-300 ease-out shadow-sm cursor-default">
                              <div className="w-5 h-5 flex items-center justify-center bg-white rounded-md p-0.5"><img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" /></div>
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* ANIMATED SKILL BOX 4 */}
                <div className={`transition-all duration-1000 ease-out transform ${visible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '400ms' }}>
                  <div className="group/box relative bg-[#0a0a0a] border border-[#1f1f1f] hover:border-cyan-400/40 p-8 rounded-[2rem] shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full">
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/box:opacity-100 transition-all duration-700 ease-in-out scale-110 group-hover/box:scale-100" style={{ background: 'radial-gradient(circle at 50% -20%, rgba(6,182,212,0.12), transparent 70%)' }} />
                    <div className="relative z-10">
                      <h3 className="text-lg font-bold text-[#f4f4f5] mb-2">Development</h3>
                      <p className="text-sm text-[#888888] mb-6">Crafting scalable interfaces and building server-side logic.</p>
                      <div className="flex flex-wrap gap-3">
                        {skillsData.development.map((skill, index) => (
                          <div key={skill.name} className={`transition-all duration-700 ease-out transform ${visible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${index * 50 + 600}ms` }}>
                            <span className="relative z-10 flex items-center gap-2 px-3.5 py-1.5 bg-[#141414] border border-[#262626] rounded-xl text-sm font-medium text-[#f4f4f5] hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:-translate-y-1.5 hover:scale-105 transition-all duration-300 ease-out shadow-sm cursor-default">
                              <div className="w-5 h-5 flex items-center justify-center bg-white rounded-md p-0.5"><img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" /></div>
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* ANIMATED SKILL BOX 5 */}
                <div className={`transition-all duration-1000 ease-out transform ${visible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} md:col-span-2`} style={{ transitionDelay: '500ms' }}>
                  <div className="group/box relative bg-[#0a0a0a] border border-[#1f1f1f] hover:border-cyan-400/40 p-8 rounded-[2rem] shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full">
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/box:opacity-100 transition-all duration-700 ease-in-out scale-110 group-hover/box:scale-100" style={{ background: 'radial-gradient(circle at 50% -20%, rgba(6,182,212,0.12), transparent 70%)' }} />
                    <div className="relative z-10">
                      <h3 className="text-lg font-bold text-[#f4f4f5] mb-2">Database Management</h3>
                      <p className="text-sm text-[#888888] mb-6">Strong command of DBMS principles, schema design, and query optimization.</p>
                      <div className="flex flex-wrap gap-3">
                        {skillsData.database.map((skill, index) => (
                          <div key={skill.name} className={`transition-all duration-700 ease-out transform ${visible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${index * 50 + 700}ms` }}>
                            <span className="relative z-10 flex items-center gap-2 px-3.5 py-1.5 bg-[#141414] border border-[#262626] rounded-xl text-sm font-medium text-[#f4f4f5] hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:-translate-y-1.5 hover:scale-105 transition-all duration-300 ease-out shadow-sm cursor-default">
                              <div className="w-5 h-5 flex items-center justify-center bg-white rounded-md p-0.5"><img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" /></div>
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* 4. EDUCATION SECTION */}
            <section id="education" className="scroll-mt-32">
              <h2 className="text-2xl md:text-3xl font-bold text-[#f4f4f5] mb-8 flex items-center gap-3 h-[2.5rem]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)] shrink-0"></span>
                <Typewriter text="Education" start={visible.education} delay={50} speed={20} showCursor={true} />
              </h2>

              <div className="flex flex-col gap-6">
                
                {/* ANIMATED EDU BOX 1 */}
                <div className={`transition-all duration-1000 ease-out transform ${visible.education ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '200ms' }}>
                  <div className="group/box relative bg-[#0a0a0a] border border-[#1f1f1f] hover:border-cyan-400/40 p-8 md:p-10 rounded-[2rem] shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/box:opacity-100 transition-all duration-700 ease-in-out scale-110 group-hover/box:scale-100" style={{ background: 'radial-gradient(circle at 50% -20%, rgba(6,182,212,0.12), transparent 70%)' }} />
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4 border-b border-[#1f1f1f] pb-6">
                        <h3 className="text-xl font-bold text-[#f4f4f5]">B.Tech in Computer Science</h3>
                        <span className="inline-block px-3 py-1 bg-[#141414] border border-[#262626] text-cyan-400 rounded-full text-sm font-bold transition-colors duration-200 cursor-default">CGPA: 8.25</span>
                      </div>
                      <div className="flex justify-between items-center mb-4 pt-2">
                        <span className="text-[#a1a1aa] font-medium text-lg">JIS University</span>
                        <span className="text-[#888888] text-sm font-medium">2021 — 2025</span>
                      </div>
                      <p className="text-[#888888] leading-relaxed">
                        Demonstrating strong academic performance and a deep technical foundation in data structures, algorithms, and applied machine learning.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* ANIMATED EDU BOX 2 */}
                  <div className={`transition-all duration-1000 ease-out transform ${visible.education ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '300ms' }}>
                    <div className="group/box relative bg-[#0a0a0a] border border-[#1f1f1f] hover:border-cyan-400/40 p-6 rounded-[2rem] shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full">
                      <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/box:opacity-100 transition-all duration-700 ease-in-out scale-110 group-hover/box:scale-100" style={{ background: 'radial-gradient(circle at 50% -20%, rgba(6,182,212,0.12), transparent 70%)' }} />
                      <div className="relative z-10">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-bold text-[#f4f4f5]">12th Grade (WBCHSE)</h3>
                          <span className="text-[#888888] text-sm">2021</span>
                        </div>
                        <span className="inline-block mt-2 px-3 py-1 bg-[#141414] border border-[#262626] text-cyan-400 rounded-lg text-sm font-bold shadow-sm transition-colors duration-200 cursor-default">Score: 77.2%</span>
                      </div>
                    </div>
                  </div>

                  {/* ANIMATED EDU BOX 3 */}
                  <div className={`transition-all duration-1000 ease-out transform ${visible.education ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '400ms' }}>
                    <div className="group/box relative bg-[#0a0a0a] border border-[#1f1f1f] hover:border-cyan-400/40 p-6 rounded-[2rem] shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full">
                      <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/box:opacity-100 transition-all duration-700 ease-in-out scale-110 group-hover/box:scale-100" style={{ background: 'radial-gradient(circle at 50% -20%, rgba(6,182,212,0.12), transparent 70%)' }} />
                      <div className="relative z-10">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-bold text-[#f4f4f5]">10th Grade (WBBSE)</h3>
                          <span className="text-[#888888] text-sm">2019</span>
                        </div>
                        <span className="inline-block mt-2 px-3 py-1 bg-[#141414] border border-[#262626] text-cyan-400 rounded-lg text-sm font-bold shadow-sm transition-colors duration-200 cursor-default">Score: 84.2%</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

          </div>
        </div>
      </div>

      {/* =========================================
          MOBILE BOTTOM NAVIGATION 
      ========================================= */}
      <nav className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[360px] bg-[#0a0a0a]/90 backdrop-blur-xl border border-[#262626] shadow-[0_20px_40px_rgba(0,0,0,0.8)] rounded-full px-4 py-3 z-50 flex justify-between items-center">
        {navItems.map((item) => (
          <a
            key={`mobile-${item.id}`}
            href={`#${item.id}`}
            onClick={(e) => handleScroll(e, item.id)}
            className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              activeSection === item.id 
                ? 'bg-cyan-400 text-black shadow-[0_0_15px_rgba(6,182,212,0.5)]' 
                : 'text-[#888888] hover:text-[#f4f4f5]'
            }`}
            aria-label={item.label}
          >
            {item.icon}
          </a>
        ))}
      </nav>

    </main>
  );
}