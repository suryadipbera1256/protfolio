"use client";

import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from "lucide-react"; // optional: install with `npm i lucide-react`


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="h-14 bg-linear-to-r from-cyan-600 to-black shadow-md fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-5  py-2 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/PIC/MY PHOTO.jpg"
            alt="Logo"
            width={50}
            height={50}
            className=" w-8 h-8 p-0.5 rounded-full ring-2 ring-black dark:ring-gray-500"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-xl">
          {[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Publication', href: '/publication' },
            { label: 'Projects', href: '/projects' },
            
            { label: 'Contact', href: '/contact' },
          ].map((item) => (
            <li key={item.label}>
              <a href={item.href} className="relative group inline-block p-2.5 rounded-t-lg hover:text-cyan-300 hover:bg-black dark:hover:bg-black dark:hover:text-cyan-300">
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-linear-to-r from-cyan-600 to-black shadow-mdtext-white text-center py-4 space-y-3">
          {[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Publication', href: '/publication' },
            { label: 'Projects', href: '/projects' },
            { label: 'Contact', href: '/contact' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-gray-300 hover:bg-black  hover:text-cyan-300 py-2 rounded transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>

  );
}
