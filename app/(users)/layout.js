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
export const metadata = {
  // FIX: This tells Next.js exactly where your images are hosted!
  // Change this to your real Vercel or custom domain once you deploy your site.
  metadataBase: new URL('https://suryadip-portfolio.vercel.app'), 
  
  title: 'Suryadip Bera | Data Scientist & AI/ML Engineer',
  description: 'Portfolio of Suryadip Bera, a passionate Data Scientist and AI Engineer specializing in machine learning, predictive modeling, and scalable data-driven solutions.',
  keywords: ['Suryadip Bera', 'Data Scientist', 'AI Engineer', 'Machine Learning', 'Python', 'Portfolio', 'Bangalore'],
  
  // OpenGraph makes your link look beautiful with an image when shared on LinkedIn, WhatsApp, etc.
  openGraph: {
    title: 'Suryadip Bera | Data Scientist & AI Engineer',
    description: 'Explore my portfolio showcasing advanced projects in Machine Learning, AI, and Data Science.',
    siteName: 'Suryadip Bera Portfolio',
    images: [
      {
        url: '/PIC/MY_PHOTO_RB.png', // Next.js will now automatically combine this with metadataBase!
        width: 800,
        height: 600,
        alt: 'Suryadip Bera - Data Scientist',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  icons: {
    icon: '/PIC/MY_PHOTO_RB.png',
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