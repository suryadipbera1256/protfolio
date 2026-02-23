"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  // This prevents hydration mismatch errors
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />; // Placeholder to prevent layout shift
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun size={20} className="text-yellow-400 transition-transform duration-300 rotate-0 hover:rotate-90" />
      ) : (
        <Moon size={20} className="text-white transition-transform duration-300 rotate-0 hover:-rotate-90" />
      )}
    </button>
  );
}