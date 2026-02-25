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

// --- EXIM-LEVEL PROFESSIONAL METADATA ---
// --- EXIM-LEVEL PROFESSIONAL METADATA ---
export const metadata = {
  // ⚠️ IMPORTANT: Change this to your exact, live Vercel domain!
  // Example: 'https://suryadip-portfolio.vercel.app'
  metadataBase: new URL('https://YOUR-LIVE-VERCEL-LINK.vercel.app'), 
  
  title: 'Suryadip Bera | Data Scientist & AI/ML Engineer',
  description: 'Portfolio of Suryadip Bera, a passionate Data Scientist and AI Engineer specializing in machine learning, predictive modeling, and scalable data-driven solutions.',
  keywords: ['Suryadip Bera', 'Data Scientist', 'AI Engineer', 'Machine Learning', 'Python', 'Portfolio', 'Bangalore'],
  
  openGraph: {
    title: 'Suryadip Bera | Data Scientist & AI Engineer',
    description: 'Explore my portfolio showcasing advanced projects in Machine Learning, AI, and Data Science.',
    siteName: 'Suryadip Bera Portfolio',
    images: [
      {
        url: '/PIC/opengraph-image.png', // FIX: Pointing exactly to your PNG in the PIC folder
        width: 1200,
        height: 630,
        alt: 'Suryadip Bera - Data Scientist & AI Enthusiast',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Suryadip Bera | Data Scientist & AI Engineer',
    description: 'Explore my portfolio showcasing advanced projects in Machine Learning, AI, and Data Science.',
    images: ['/PIC/opengraph-image.png'], // FIX: Pointing exactly to your PNG
  },
  
  icons: {
    icon: '/PIC/favicon.png',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans bg-neutral-950 text-[#f4f4f5] antialiased selection:bg-[#333] selection:text-white`} >
        <Navbar />
        {children}  
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}