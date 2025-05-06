import type { Metadata } from "next";
// Import Advent Pro font from Google Fonts
import { Advent_Pro } from "next/font/google";
import Script from 'next/script';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import MobileCTA from "@/components/MobileCTA"; // Previous mobile CTA (replaced)
import StickyCTA from "@/components/StickyCTA"; // New sticky CTA
import CookieConsentBanner from "@/components/CookieConsentBanner"; // Import the banner

// Configure Advent Pro font
const advent_pro = Advent_Pro({
  subsets: ["latin"],
  weight: ["400", "700"], // Include weights specified in style guide
  variable: "--font-advent-pro", // Use CSS variable
});

// Define LocalBusiness Schema (more specific than Organization)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness", // Changed from Organization to LocalBusiness
  "name": "Structured Partners",
  "url": "https://thvcdobe.manus.space", // Use actual live URL when available
  "logo": "https://thvcdobe.manus.space/logo.svg", // Use actual live URL when available
  "image": "https://thvcdobe.manus.space/og-default.jpg", // Add a default image URL if available
  "description": "Expert M&A advisory exclusively for the building products and services sector.",
  "telephone": "+1-727-761-1644",
  "email": "info@structuredpartners.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "St Petersburg",
    "addressRegion": "FL",
    "addressCountry": "US"
    // Add streetAddress and postalCode if available
  },
  "areaServed": {
    "@type": "Country",
    "name": "US"
  },
  "sameAs": [
    // Add URLs to social media profiles if available
    // "https://www.linkedin.com/company/your-linkedin-page"
  ]
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
    url: "https://thvcdobe.manus.space", // Use actual live URL when available
    siteName: "Structured Partners",
    // images: [
    //   {
    //     url: "https://thvcdobe.manus.space/og-default.jpg", // Default OG image URL (Requires image)
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Structured Partners - M&A Advisory for Building Products & Services",
    description: "Expert M&A advisory exclusively for the building products and services sector.",
    // Add Twitter handle if available: site: "@YourTwitterHandle",
    // Add default Twitter image URL: images: ["https://thvcdobe.manus.space/twitter-default.jpg"], // (Requires image)
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply the font variable to the html tag
    <html lang="en" className={`${advent_pro.variable}`}>
      <head>
        <Script
          id="localbusiness-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      {/* Apply the font class to the body tag */}
      {/* Add pb-16 for padding below sticky CTA on mobile, remove on lg+ */}
      {/* Add extra padding bottom if cookie banner is visible */}
      <body className={`font-sans flex flex-col min-h-screen pb-16 lg:pb-0`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <StickyCTA /> {/* Add the new Sticky CTA */}
        <CookieConsentBanner /> {/* Add the Cookie Consent Banner */}
      </body>
    </html>
  );
}

