import { Geist, Geist_Mono } from "next/font/google";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import "../globals.css";
import ChatWidget from "../../components/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Portfolio of Surya',
  description: 'Personal portfolio website of Suryadip Bera, showcasing projects and skills in full-stack development and AI/ML.',
  icons: {
    icon: 'PIC/MY_PHOTO_RB.png',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 1. bg-[#050505] locks the deep dark theme globally.
        2. text-[#f4f4f5] sets the global text color to soft off-white.
        3. antialiased makes the font look premium and sharp.
      */}
      <body className={`${geistSans.variable} font-sans bg-neutral-950 text-[#f4f4f5] antialiased selection:bg-[#333] selection:text-white`} >
        <Navbar />
        {children}  
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}