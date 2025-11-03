import { Geist, Geist_Mono, } from "next/font/google";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import "../globals.css";

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
    // simple single icon
    icon: 'PIC/MY_PHOTO_RB.png',
    // or provide several variants
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16' },
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}`} >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

