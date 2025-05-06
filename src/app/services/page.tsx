import { Metadata } from 'next';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  // Metadata remains largely the same, ensure consistency
  title: "M&A Advisory Services | Structured Partners | Building Industry Focus",
  description: "Specialized sell-side, buy-side, and strategic M&A advisory services exclusively for the building products and services sector. Maximize value with expert guidance.",
  openGraph: {
    title: "M&A Advisory Services | Structured Partners | Building Industry Focus",
    description: "Specialized sell-side, buy-side, and strategic M&A advisory for the building products & services sector.",
    // TODO: Add image if available (og:image)
    // images: ['/og-services.jpg'],
  },
  twitter: {
    card: "summary",
    title: "M&A Advisory Services | Structured Partners | Building Industry Focus",
    description: "Specialized sell-side, buy-side, and strategic M&A advisory for the building products & services sector.",
    // TODO: Add image if available (twitter:image)
    // images: ['/twitter-services.jpg'],
  },
};

export default function ServicesPage() {
  return (
    // Apply base font (handled by layout) and background color
    <div className="bg-white text-text-body font-sans">
      {/* Hero Section - Apply bg-secondary, text-tertiary */}
      <section className="bg-secondary text-tertiary py-20 md:py-28 text-center">
        <div className="container mx-auto px-4">
          {/* H1 Style: text-3xl md:text-4xl lg:text-5xl font-bold */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Specialized M&A Advisory Services</h1>
          {/* Body Style: text-base md:text-lg, use text-tertiary-strong */}
          <p className="text-base md:text-lg max-w-3xl mx-auto text-tertiary-strong">
            Leveraging deep sector expertise and a structured approach to deliver optimal outcomes across sell-side, buy-side, and strategic advisory engagements.
          </p>
        </div>
      </section>

      {/* Intro Section - Apply text colors and add internal link */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-base text-text-body leading-relaxed">
          <p className="mb-6">
            Structured Partners provides comprehensive M&A advisory services tailored exclusively for the unique dynamics of the <Link href="/industries-covered" className="text-primary hover:underline">building products and services sector</Link>. Our deep industry knowledge, combined with firsthand operational and transactional experience, allows us to offer strategic guidance that generalist firms simply cannot match.
          </p>
          <p>
            We provide senior-level attention throughout every engagement, ensuring a confidential, efficient, and results-driven process.
          </p>
        </div>
      </section>

      {/* Services Grid Section - Apply bg-background-1, card styles, keep existing links */}
      <section className="py-16 md:py-24 bg-background-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card Style: Use .card class from globals.css (bg-white, rounded-lg, shadow-md, border, hover:shadow-lg) */}
            <div id="sell-side" className="card p-8 flex flex-col bg-white">
              {/* Use primary color for icon */}
              <CheckCircle className="w-12 h-12 text-primary mb-4" />
              {/* H2 Style: text-2xl font-bold text-text-title */}
              <h2 className="text-2xl font-bold text-text-title mb-4">Sell-Side Advisory</h2>
              {/* Body Style: text-sm text-text-body */}
              <p className="text-sm text-text-body leading-relaxed mb-4 flex-grow">
                Maximizing value and ensuring a smooth transition for business owners contemplating an exit. We manage a confidential, competitive process leveraging our extensive buyer network within the building industry.
                From valuation and strategic positioning to due diligence and negotiation, we act as your dedicated “deal sherpa” to achieve premium outcomes.
              </p>
              {/* Link Style: text-sm text-primary hover:underline */}
              <div className="mt-4">
                <Link href="/insights#maximize-valuation-building-products" legacyBehavior>
                  <a className="text-sm text-primary hover:underline">Read Insight: Maximize Valuation</a>
                </Link>
              </div>
            </div>

            <div id="buy-side" className="card p-8 flex flex-col bg-white">
              <CheckCircle className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold text-text-title mb-4">Buy-Side Advisory</h2>
              <p className="text-sm text-text-body leading-relaxed mb-4 flex-grow">
                Providing private equity firms and strategic acquirers with a distinct advantage through access to off-market opportunities and proprietary deal flow in the building sector.
                We assist with target identification, vetting, operational and financial due diligence informed by real-world experience, and transaction structuring.
              </p>
               <div className="mt-4">
                 <Link href="/news-announcements#closed-transaction-target-acquisition" legacyBehavior>
                   <a className="text-sm text-primary hover:underline">See News: Recent Acquisition</a>
                 </Link>
               </div>
            </div>

            <div id="consulting-valuation" className="card p-8 flex flex-col bg-white">
              <CheckCircle className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold text-text-title mb-4">Strategic Consulting & Valuation</h2>
              <p className="text-sm text-text-body leading-relaxed mb-4 flex-grow">
                Helping building industry companies prepare for future M&A or optimize current positioning through valuation readiness assessments, strategic planning, and market analysis.
                Our valuation services provide a clear, objective understanding of your company’s market worth, grounded in current industry benchmarks.
              </p>
              <div className="mt-4">
                <Link href="/insights#pre-sale-checklist-building-industry" legacyBehavior>
                  <a className="text-sm text-primary hover:underline">Read Insight: Pre-Sale Checklist</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Approach Section - Apply text colors */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          {/* H2 Style: text-2xl md:text-3xl lg:text-4xl font-bold text-text-title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-title mb-8">Our Structured Approach</h2>
          {/* Body Style: text-base text-text-body */}
          <p className="text-base text-text-body leading-relaxed">
            Every engagement benefits from our proven, structured process, supported by tailored technology infrastructure. This ensures efficiency, transparency, and rigorous attention to detail at every stage, from initial assessment to final closing.
          </p>
        </div>
      </section>

      {/* Call to Action Section - Apply bg-primary, text-white, button style */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          {/* H2 Style: text-2xl md:text-3xl lg:text-4xl font-bold */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Discuss Your M&A Goals</h2>
          {/* Body Style: text-base md:text-lg */}
          <p className="text-base md:text-lg mb-8 leading-relaxed">
            Learn how our specialized services can support your specific objectives in the building products and services sector.
          </p>
          <Link href="/contact-us" legacyBehavior>
            {/* Use tertiary button style on primary background */}
            <a className="btn bg-white hover:bg-tertiary-hover text-primary">
              Schedule a Confidential Consultation
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}

