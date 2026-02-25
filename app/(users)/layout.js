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
// --- EXIM-LEVEL PROFESSIONAL METADATA ---
// --- EXIM-LEVEL PROFESSIONAL METADATA ---
export const metadata = {
  // Tells Next.js exactly where your images are hosted
  metadataBase: new URL('https://protfolio-surya.vercel.app'), 
  
  // Tells Google this is the ONLY domain it should care about (prevents duplicate SEO penalties)
  alternates: {
    canonical: 'https://protfolio-surya.vercel.app',
  },

  title: 'Suryadip Bera | Data Scientist & AI/ML Engineer',
  description: 'Portfolio of Suryadip Bera, a passionate Data Scientist and AI Engineer specializing in machine learning, predictive modeling, and scalable data-driven solutions.',
  keywords: ['Suryadip Bera', 'Data Scientist', 'AI Engineer', 'Machine Learning', 'Python', 'Portfolio', 'Bangalore'],
  
  openGraph: {
    type: 'website',
    url: 'https://protfolio-surya.vercel.app',
    title: 'Suryadip Bera | Data Scientist & AI Engineer',
    description: 'Explore my portfolio showcasing advanced projects in Machine Learning, AI, and Data Science.',
    siteName: 'Suryadip Bera Portfolio',
    images: [
      {
        url: 'https://protfolio-surya.vercel.app/PIC/opengraph-image (2).png', 
        width: 1200,
        height: 630,
        alt: 'Suryadip Bera - Data Scientist & AI Enthusiast',
        type: 'image/jpg', 
      },
    ],
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image', 
    title: 'Suryadip Bera | Data Scientist & AI Engineer',
    description: 'Explore my portfolio showcasing advanced projects in Machine Learning, AI, and Data Science.',
    images: ['https://protfolio-surya.vercel.app/PIC/opengraph-image (2).png'], 
  },
  
  icons: {
    icon: '/PIC/favicon5.png',
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