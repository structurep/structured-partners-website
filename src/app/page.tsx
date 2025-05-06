import { Metadata } from 'next';
import Link from 'next/link';
// Import Lucide icons
import { Building, Users, BarChart } from 'lucide-react';

export const metadata: Metadata = {
  // Metadata remains largely the same, ensure consistency
  title: "Structured Partners | Expert M&A Advisory for the Building Industry",
  description: "Maximize your exit with specialized M&A advisory for building products & services companies. Former operators, buyers & bankers guiding your transaction.",
  openGraph: {
    title: "Structured Partners | Expert M&A Advisory for the Building Industry",
    description: "Maximize your exit with specialized M&A advisory for building products & services companies.",
    // TODO: Add a relevant image URL here (og:image)
    // images: ['/og-image.jpg'],
  },
  twitter: {
    card: "summary_large_image",
    title: "Structured Partners | Expert M&A Advisory for the Building Industry",
    description: "Maximize your exit with specialized M&A advisory for building products & services companies.",
    // TODO: Add a relevant image URL here (twitter:image)
    // images: ['/twitter-image.jpg'],
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col font-sans">
      {/* Hero Section - Updated based on reference image and style guide */}
      {/* Use bg-secondary, text-tertiary */}
      <section className="bg-secondary text-tertiary py-20 md:py-28 flex items-center justify-center text-center">
        {/* TODO: Add background image/overlay if possible later */}
        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          {/* H1 Style: text-3xl md:text-4xl lg:text-5xl font-bold */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Maximize Your Exit. Maintain Your Legacy.
          </h1>
          {/* Body Style: text-base md:text-lg, text-tertiary-strong */}
          <p className="text-base md:text-lg mb-8 text-tertiary-strong">
            Expert M&A advisory for building products, construction, and industrial services companies
          </p>
          <div>
            {/* Button Style: Use btn-primary class */}
            <Link href="/contact-us" legacyBehavior>
              <a className="btn btn-primary inline-block">
                Get a Consultation
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Added based on reference image */}
      {/* Use bg-background-1 */}
      <section className="py-16 md:py-24 bg-background-1">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          {/* Section Title Style: text-primary, text-3xl md:text-4xl font-bold */}
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Why Choose Structured Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card Style: Use .card class from globals.css (bg-white, rounded-lg, shadow-md, hover:shadow-lg) */}
            <div className="card p-8 flex flex-col items-center bg-tertiary">
              {/* Icon Style: text-primary, add icon-interactive class */}
              <Building className="w-12 h-12 text-primary mb-4 icon-interactive" />
              {/* Card Title Style: text-xl font-bold text-secondary */}
              <h3 className="text-xl font-bold text-secondary mb-3">Deep Industry Focus</h3>
              {/* Card Text Style: text-sm text-text-body */}
              <p className="text-sm text-text-body leading-relaxed">
                We specialize in sectors like building materials, specialty trade services companies.
              </p>
            </div>
            <div className="card p-8 flex flex-col items-center bg-tertiary">
              {/* Icon Style: text-primary, add icon-interactive class */}
              <Users className="w-12 h-12 text-primary mb-4 icon-interactive" />
              <h3 className="text-xl font-bold text-secondary mb-3">Client-Centric Approach</h3>
              <p className="text-sm text-text-body leading-relaxed">
                From strategic planning to deal execution, we provide tailored advice aligned with your business objectives.
              </p>
            </div>
            <div className="card p-8 flex flex-col items-center bg-tertiary">
              {/* Icon Style: text-primary, add icon-interactive class */}
              <BarChart className="w-12 h-12 text-primary mb-4 icon-interactive" />
              <h3 className="text-xl font-bold text-secondary mb-3">Proven Track Record</h3>
              <p className="text-sm text-text-body leading-relaxed">
                A history of successful transactions demonstrating our commitment to driving optimums.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Explore Section - Updated based on reference image */}
      {/* Use bg-background-2 */}
      <section className="py-16 md:py-20 bg-background-2">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          {/* Section Title Style: text-primary, text-2xl md:text-3xl font-bold */}
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Ready to Explore Your Options?</h2>
          {/* Text Style: text-base text-text-body */}
          <p className="text-base text-text-body mb-8 leading-relaxed">
            Whether you're considering a sale now or evaluating future steps, our team is here to guide you through the M&A process.
          </p>
          {/* Button Style: Use btn-primary class */}
          <Link href="/contact-us" legacyBehavior>
            <a className="btn btn-primary inline-block">
              Get a Consultation
            </a>
          </Link>
        </div>
      </section>

    </div>
  );
}

