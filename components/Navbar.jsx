"use client";

import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from "lucide-react"; 
import { profile } from '../data/profile'; // Import profile to get the resume URL

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Publication', href: '/publication' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
      
      {/* The "Floating Pill" Navbar (Added 'relative' to allow absolute centering of links) */}
      <nav className="relative w-full max-w-[55rem] bg-[#0a0a0a]/80 backdrop-blur-xl border border-[#262626] rounded-full px-4 py-2 flex justify-between items-center shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        
        {/* LEFT: Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 pl-1 z-10">
          <Image
            src="/PIC/MY PHOTO.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="w-9 h-9 p-0.5 rounded-full ring-1 ring-[#333333] group-hover:ring-[#f4f4f5] transition-all duration-300 object-cover"
            priority
          />
        </Link>

        {/* CENTER: Desktop Menu - Absolutely centered so it never shifts! */}
        <ul className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href} 
                className="px-5 py-2 rounded-full text-sm font-medium text-[#a1a1aa] hover:text-[#f4f4f5] hover:bg-[#1a1a1a] transition-all duration-300 block tracking-wide"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT: Download CV & Mobile Toggle */}
        <div className="flex items-center gap-3 pr-1 z-10">
          
          {/* Download CV Button (Desktop Only) */}
          <a 
            href={profile.resumeUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="hidden md:flex items-center gap-2 bg-[#f4f4f5] hover:bg-white text-black text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300"
          >
            <span>Download CV</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2M12 4v12m0-12 4 4m-4-4L8 8"/>
            </svg>
          </a>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#a1a1aa] hover:text-[#f4f4f5] p-2 rounded-full hover:bg-[#1a1a1a] transition-colors"
          >
            {isOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu (Glassmorphic Card) */}
      {isOpen && (
        <div className="absolute top-[110%] mt-2 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-[#0a0a0a]/95 backdrop-blur-2xl border border-[#262626] shadow-2xl rounded-3xl p-3 md:hidden flex flex-col gap-1">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-[#a1a1aa] hover:text-[#f4f4f5] hover:bg-[#1a1a1a] px-4 py-3.5 rounded-2xl text-sm font-medium transition-all duration-200 text-center tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          
          {/* Mobile Download CV Button */}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="block mt-2 text-black bg-[#f4f4f5] hover:bg-white px-4 py-3.5 rounded-2xl text-sm font-bold transition-all duration-200 text-center tracking-wide flex items-center justify-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            Download CV
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2M12 4v12m0-12 4 4m-4-4L8 8"/>
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}