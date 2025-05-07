import type { Metadata } from "next";
// Import Inter font from Google Fonts
import { Inter } from "next/font/google"; // Changed from Advent_Pro to Inter
import Script from 'next/script';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import CookieConsentBanner from "@/components/CookieConsentBanner";

// Configure Inter font
const inter = Inter({ // Changed from advent_pro to inter
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Updated weights 400-700
  variable: "--font-inter", // Changed CSS variable name
  display: 'swap', // Added display swap for better font loading
});

// Define LocalBusiness Schema (more specific than Organization)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Structured Partners",
  "url": "https://struct-part.netlify.app", // Updated with live URL
  "logo": "https://struct-part.netlify.app/logo.svg", // Updated with live URL
  "image": "https://struct-part.netlify.app/images/opengraph-twitter-preview.png", // Updated with new OG image
  "description": "Expert M&A advisory exclusively for the building products and services sector.",
  "telephone": "+1-727-761-1644",
  "email": "info@structuredpartners.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "St Petersburg",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "Country",
    "name": "US"
  },
  "sameAs": []
};

export const metadata: Metadata = {
  title: {
    default: "Structured Partners - M&A Advisory for Building Products & Services",
    template: "%s | Structured Partners",
  },
  description: "Expert M&A advisory exclusively for the building products and services sector. We help business owners achieve premium outcomes through sell-side, buy-side, and valuation services.",
  openGraph: {
    title: "Structured Partners - M&A Advisory for Building Products & Services",
    description: "Expert M&A advisory exclusively for the building products and services sector.",
    url: "https://struct-part.netlify.app", // Updated with live URL
    siteName: "Structured Partners",
    images: [
      {
        url: "https://struct-part.netlify.app/images/opengraph-twitter-preview.png", // Updated with new OG image
        width: 1200, // Assuming standard OG image dimensions
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Structured Partners - M&A Advisory for Building Products & Services",
    description: "Expert M&A advisory exclusively for the building products and services sector.",
    images: ["https://struct-part.netlify.app/images/opengraph-twitter-preview.png"], // Updated with new Twitter image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}> {/* Apply Inter font variable and fallback to font-sans */}
      <head>
        <Script
          id="localbusiness-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`flex flex-col min-h-screen pb-16 lg:pb-0`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <StickyCTA />
        <CookieConsentBanner />
      </body>
    </html>
  );
}

