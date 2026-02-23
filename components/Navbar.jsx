"use client";

import { useState } from "react";
import Link from 'next/link'; 
import Image from 'next/image';
import { usePathname } from 'next/navigation'; 
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); 

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Publication', href: '/publication' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
      
      {/* UPDATED: 
        1. Changed to 'max-w-fit' so the pill shrink-wraps the menu with minimum space.
        2. Changed vertical padding to 'p-1.5' to minimize navbar height while keeping button sizes the same! 
      */}
      <nav className="w-full md:w-auto max-w-fit bg-[#0a0a0a]/80 backdrop-blur-xl border border-[#262626] rounded-full p-1.5 flex items-center justify-between md:justify-center shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        
        {/* LEFT: Logo with extra right margin (mr-4 md:mr-8) for that breathing room you wanted */}
        <Link href="/" className="flex items-center z-10 pl-1 mr-4 md:mr-8">
          <Image 
            src="/PIC/MY PHOTO.jpg" 
            alt="Logo" 
            width={40} 
            height={40} 
            className="w-10 h-10 p-0.5 rounded-full ring-1 ring-[#333333] hover:ring-cyan-400 transition-all duration-300 object-cover" 
            priority 
          />
        </Link>

        {/* CENTER: Desktop Menu */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.label}>
                <Link 
                  href={item.href} 
                  // Button padding (py-2.5) remains unchanged!
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 block tracking-wide
                    ${isActive 
                      ? 'bg-[#1f1f1f] text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.15)] border border-[#333]' 
                      : 'text-[#a1a1aa] hover:text-cyan-400 hover:bg-[#1a1a1a] border border-transparent' 
                    }
                  `}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* RIGHT: Mobile Toggle (Download CV is now completely removed) */}
        <div className="flex md:hidden items-center pr-1">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#a1a1aa] hover:text-cyan-400 p-2 rounded-full hover:bg-[#1a1a1a] transition-colors">
            {isOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown (Download CV removed from here as well) */}
      {isOpen && (
        <div className="absolute top-[110%] mt-2 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-[#0a0a0a]/95 backdrop-blur-2xl border border-[#262626] shadow-2xl rounded-3xl p-3 md:hidden flex flex-col gap-1">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`block px-4 py-3.5 rounded-2xl text-sm font-medium transition-all duration-200 text-center tracking-wide
                  ${isActive ? 'bg-[#1f1f1f] text-cyan-400 border border-[#333]' : 'text-[#a1a1aa] hover:text-cyan-400 hover:bg-[#1a1a1a] border border-transparent' }
                `}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}