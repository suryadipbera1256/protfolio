"use client";

import { useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import { profile } from '../../data/profile';

// --- REUSABLE VERTICAL CARD COMPONENT ---
function CertificationCard({ title, description, link, imageSrc, provider }) {
  return (
    // Background: Elevated dark gray (#0e0e0e), Subtle border (#262626)
    <div className="flex-none w-[85%] sm:w-[350px] snap-center flex flex-col h-full bg-[#0e0e0e] border border-[#262626] hover:border-[#404040] rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 ease-out group">
      
      {/* TOP: Image Container with a slightly lighter background for contrast */}
      <div className="relative w-full h-52 bg-[#141414] border-b border-[#262626] p-6 flex items-center justify-center">
        <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
          <Image 
            src={imageSrc} 
            alt={title} 
            fill 
            className="object-contain drop-shadow-md" 
          />
        </div>
      </div>

      {/* MIDDLE & BOTTOM: Content Container */}
      <div className="flex flex-col flex-grow p-6">
        
        {/* Provider: Small, muted gray, tracked slightly wide */}
        <p className="text-[#a1a1aa] text-xs font-medium uppercase tracking-wider mb-2 font-sans">
          {provider}
        </p>

        {/* Title: Off-white, medium weight, tight letter spacing for that premium look */}
        <h3 className="text-[#ededed] text-lg font-medium tracking-tight leading-snug mb-4 font-sans">
          {title}
        </h3>

        {/* BOTTOM: Anchored Minimalist "View" Button */}
        <div className="mt-auto flex items-center justify-between">
          <a 
            href={link} 
            target="_blank" 
            rel="noreferrer" 
            // Pill shaped, subtle dark border, clean hover effect
            className="inline-flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#27272a] border border-[#333333] text-[#ededed] text-sm font-medium px-5 py-2 rounded-full transition-all duration-200"
          >
            View Details
            {/* Clean, minimalist external link arrow */}
            <svg className="w-3.5 h-3.5 text-[#a1a1aa] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
// --- MAIN PAGE ---
export default function Home() {
  const sliderRef = useRef(null);

  // Auto-slide logic for the certifications
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const container = sliderRef.current;
        // Scroll by card width + gap
        const scrollAmount = container.children[0].offsetWidth + 24; 
        
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 3500); // Slides every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center h-[50vh] text-center p-4 mt-11">
        <h1 className="text-5xl text-cyan-500 font-bold mb-4">Hi, I’m {profile.name} 👋</h1>
        <p className="text-lg text-gray-300 max-w-2xl">{profile.headline}</p>
        <div className="mt-6 flex gap-6">
          <a href="/about" className="bg-black border hover:border-white relative border-neutral-200 dark:border-neutral-800 text-cyan-300 px-4 py-2 rounded-full shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
            About - Suryadip 
          </a>
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="flex flex-wrap gap-1 items-center bg-black border hover:border-white relative border-neutral-200 dark:border-neutral-800 text-cyan-300 px-4 py-2 rounded-full shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
            <span>Download Resume</span>
            <svg className="w-[20px] h-[20px] text-cyan-300 dark:text-cyan-400 size-6 animate-bounce" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2M12 4v12m0-12 4 4m-4-4L8 8"/>
            </svg>
          </a>
        </div>
      </section>

      {/* CERTIFICATIONS SLIDER SECTION */}
      <section className="max-w-7xl mx-auto mb-15 p-4">
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 items-stretch [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          {/* IBM Machine Learning */}
          <CertificationCard 
            title={profile.certifications[0].title_4} 
            description={profile.certifications[0].description_4} 
            link={profile.certifications[0].link_4} 
            provider="Coursera"
            imageSrc="/PIC/CER_2.jpg" 
          />

          {/* Google Advanced Data Analytics */}
          <CertificationCard 
            title={profile.certifications[0].title_5} 
            description={profile.certifications[0].description_5} 
            link={profile.certifications[0].link_5} 
            provider="Coursera"
            imageSrc="/PIC/CER_3.jpg" 
          />

          {/* Python Certification */}
          <CertificationCard 
            title={profile.certifications[0].title_1} 
            description={profile.certifications[0].description_1} 
            link={profile.certifications[0].link_1} 
            provider="Cisco Networking Academy"
            imageSrc="/PIC/CER_1.jpg" 
          />

          {/* Data Science Math Skills */}
          <CertificationCard 
            title={profile.certifications[0].title_2} 
            description={profile.certifications[0].description_2} 
            link={profile.certifications[0].link_2} 
            provider="Coursera"
            imageSrc="/PIC/DUKE.jpg" 
          />

          {/* Full Website using WordPress */}
          <CertificationCard 
            title={profile.certifications[0].title_3} 
            description={profile.certifications[0].description_3} 
            link={profile.certifications[0].link_3} 
            provider="Coursera"
            imageSrc="/PIC/WORDPRESS.jpg" 
          />

          {/* Innovation Award */}
          <CertificationCard 
            title={profile.awards[0].title_1} 
            description={profile.awards[0].description_1} 
            link={profile.awards[0].link_1} 
            provider="JIS University"
            imageSrc="/PIC/AWARD.jpg" 
          />

          {/* Achievement 1 */}
          <CertificationCard 
            title={profile.achievements[0].title_1} 
            description={profile.achievements[0].description_1} 
            link={profile.achievements[0].link_1} 
            provider="JIS University"
            imageSrc="/PIC/CER_1.jpg" 
          />

          {/* Achievement 2 (RISCC) */}
          <CertificationCard 
            title={profile.achievements[0].title_2} 
            description={profile.achievements[0].description_2} 
            link={profile.achievements[0].link_2} 
            provider="JIS University"
            imageSrc="/PIC/RICSS.jpg" 
          />
        </div>
      </section>

      {/* INFINITE PHOTO GALLERY SECTION (Untouched) */}
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
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=3840&amp;q=75 3840w" 
                  src="/PIC/MAAM.jpg"
                  width={50}
                  height={50}/>
                <div className="absolute bottom-0 left-0 flex w-full px-8 p-3 @container/label">
                  <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                    <h3 className="mr-4 text-white line-clamp-2 flex-grow pl-2 leading-none tracking-tight">JIS INNOVATION AWARD DAY 😊</h3>
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
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=3840&amp;q=75 3840w" 
                  src="/PIC/GROUP_1.jpg"
                  width={50}
                  height={50}/>
                <div className="absolute bottom-0 left-0 flex w-full px-7 p-3 @container/label">
                  <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                    <h3 className="mr-4 text-white line-clamp-2 flex-grow pl-2 leading-none tracking-tight">TIME TO CHERISH MEMORIES 😎</h3>
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
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=3840&amp;q=75 3840w" 
                  src="/PIC/GROUP_4.jpg"
                  width={50}
                  height={50}/>
                <div className="absolute bottom-0 left-0 flex w-full px-8 p-3 @container/label">
                  <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                    <h3 className="mr-4 line-clamp-2 text-white flex-grow pl-2 leading-none tracking-tight">But First, Let Me Take A Selfie 😁</h3>
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
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=3840&amp;q=75 3840w" 
                  src="/PIC/DUKE.jpg"
                  width={50}
                  height={50}/>
              </div>
            </a>
          </li>

          <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/5">
            <a className="relative h-full w-full" href="https://www.coursera.org/account/accomplishments/certificate/59K404BAQQO8">
              <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-white dark:bg-black relative border-neutral-200 dark:border-neutral-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
                <Image 
                  alt="Acme Rainbow Sticker" 
                  loading="lazy" 
                  decoding="async" 
                  data-nimg="fill" 
                  className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" 
                  style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} 
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=3840&amp;q=75 3840w" 
                  src="/PIC/WORDPRESS.jpg"
                  width={50}
                  height={50}/>
              </div>
            </a>
          </li>

          <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/5">
            <a className="relative h-full w-full" href="https://drive.google.com/drive/folders/1Fj6_huXZ4KI5SkF_wHcXdwqxXMSMS1b2">
              <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-white dark:bg-black relative border-neutral-200 dark:border-neutral-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
                <Image 
                  alt="Acme Rainbow Sticker" 
                  loading="lazy" 
                  decoding="async" 
                  data-nimg="fill" 
                  className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" 
                  style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} 
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=3840&amp;q=75 3840w" 
                  src="/PIC/AWARD.jpg"
                  width={50}
                  height={50}/>
              </div>
            </a>
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
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=3840&amp;q=75 3840w" 
                  src="/PIC/GROUP_3.jpg"
                  width={50}
                  height={50}/>
                <div className="absolute bottom-0 left-0 flex w-full px-9 p-3 @container/label">
                  <div className="flex items-center rounded-full border bg-black p-1 text-xs font-semibold backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                    <h3 className="mr-4 text-white line-clamp-2 flex-grow pl-2 leading-none tracking-tight">LIFE IS BETTER WITH FRIENDS</h3>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/5">
            <div className="relative h-full w-full" href="/acme-rainbow-sticker">
              <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-white dark:bg-black relative border-neutral-200 dark:border-neutral-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
                <Image 
                  alt="clg time" 
                  loading="lazy" 
                  decoding="async" 
                  data-nimg="fill" 
                  className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105" 
                  style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} 
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" srcSet="/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-89nvgelf3p%2Fimages%2Fstencil%2F1080w%2Fproducts%2F135%2F413%2Fsticker-rainbow__43416.1686346615.png&amp;w=3840&amp;q=75 3840w" 
                  src="/PIC/GROUP_2.jpg"
                  width={50}
                  height={50}/>
                <div className="absolute bottom-0 left-0 flex w-full px-2 p-3 @container/label">
                  <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-cyan-300 backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                    <h3 className="mr-4 text-white line-clamp-2 flex-grow pl-2 leading-none tracking-tight">BEST FRIENDS ARE THE BEST THERAPY</h3>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div> 
    </main>
  )
}