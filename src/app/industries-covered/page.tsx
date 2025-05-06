import { Metadata } from 'next';
import { Building, Wrench, Truck, Cpu, Landmark } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  // Metadata remains largely the same, ensure consistency
  title: "Industries Covered | Structured Partners | Building Products & Services",
  description: "Specialized M&A advisory across the building ecosystem: Manufacturing, Specialty Trades, Distribution, Construction Tech, and Infrastructure Services.",
  openGraph: {
    title: "Industries Covered | Structured Partners | Building Products & Services",
    description: "Specialized M&A advisory across the building ecosystem: Manufacturing, Specialty Trades, Distribution, Construction Tech, and Infrastructure Services.",
    // TODO: Add image if available (og:image)
    // images: ['/og-industries.jpg'],
  },
  twitter: {
    card: "summary",
    title: "Industries Covered | Structured Partners | Building Products & Services",
    description: "Specialized M&A advisory across the building ecosystem.",
    // TODO: Add image if available (twitter:image)
    // images: ['/twitter-industries.jpg'],
  },
};

export default function IndustriesPage() {
  const industries = [
    {
      id: "manufacturing",
      name: "Building Products Manufacturing",
      description: "Production of materials like roofing, siding, windows, doors, insulation, aggregates, concrete, lumber, plumbing, electrical components.",
      icon: Building,
      relatedInsight: { name: "Maximize Valuation", href: "/insights#maximize-valuation-building-products" },
    },
    {
      id: "specialty-trades",
      name: "Specialty Trade Services",
      description: "Installation, maintenance, and repair services: HVAC, plumbing, electrical, roofing, painting, flooring, landscaping, fire protection.",
      icon: Wrench,
      relatedInsight: { name: "PE Interest in Trades", href: "/insights#private-equity-specialty-trades" },
    },
    {
      id: "distribution",
      name: "Distribution & Logistics",
      description: "Wholesalers, distributors, and logistics providers managing the supply chain for building products and materials.",
      icon: Truck,
    },
    {
      id: "contech",
      name: "Construction Technology (ConTech)",
      description: "Software, hardware, and solutions improving efficiency, safety, project management, and sustainability in construction.",
      icon: Cpu,
    },
    {
      id: "infrastructure",
      name: "Infrastructure Services",
      description: "Supporting development and maintenance: site preparation, utility services, environmental remediation, engineering support.",
      icon: Landmark,
    },
  ];

  return (
    // Apply base font (handled by layout) and background color
    <div className="bg-white text-text-body font-sans">
      {/* Hero Section - Apply bg-secondary, text-tertiary */}
      <section className="bg-secondary text-tertiary py-20 md:py-28 text-center">
        <div className="container mx-auto px-4">
          {/* H1 Style: text-3xl md:text-4xl lg:text-5xl font-bold */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Deep Specialization Across the Building Ecosystem</h1>
          {/* Body Style: text-base md:text-lg, use text-tertiary-strong */}
          <p className="text-base md:text-lg max-w-3xl mx-auto text-tertiary-strong">
            Our exclusive focus on the building industry allows us to provide unparalleled insights and M&A advisory tailored to your specific market segment.
          </p>
        </div>
      </section>

      {/* Intro Section - Apply text colors */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-base text-text-body leading-relaxed">
          <p className="mb-6">
            At Structured Partners, we don’t dilute our expertise. We are exclusively dedicated to serving companies within the building products and services sector. This singular focus allows us to maintain an intimate understanding of the market trends, competitive dynamics, valuation benchmarks, and unique operational characteristics that define success in this industry.
          </p>
          <p className="mb-6">
            Our deep specialization translates into more strategic <Link href="/services#consulting-valuation" className="text-primary hover:underline">advice</Link>, better access to relevant buyers and opportunities, and ultimately, superior outcomes for our clients.
          </p>
           <p>
            We possess significant experience and maintain active relationships across a wide range of sub-sectors within the building industry.
          </p>
        </div>
      </section>

      {/* Industries Grid Section - Apply bg-background-1, card styles, add internal links */}
      <section className="py-16 md:py-24 bg-background-1">
        <div className="container mx-auto px-4">
          {/* H2 Style: text-2xl md:text-3xl lg:text-4xl font-bold text-text-title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-title mb-12 text-center">Key Industry Segments We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {industries.map((industry) => (
              // Card Style: Use .card class from globals.css (bg-white, rounded-lg, shadow-md, border, hover:shadow-lg)
              <div id={industry.id} key={industry.id} className="card p-8 flex flex-col items-center text-center bg-white">
                {/* Use primary color for icon */}
                <industry.icon className="w-12 h-12 text-primary mb-4" />
                {/* H3 Style: text-xl font-bold text-text-title */}
                <h3 className="text-xl font-bold text-text-title mb-3">{industry.name}</h3>
                {/* Body Style: text-sm text-text-body */}
                <p className="text-sm text-text-body leading-relaxed flex-grow">{industry.description}</p>
                {/* Internal Link to Insight */}
                {industry.relatedInsight && (
                  <div className="mt-4 pt-4 border-t border-stroke-1 w-full">
                    <Link href={industry.relatedInsight.href} legacyBehavior>
                      <a className="text-sm text-primary hover:underline">Read Insight: {industry.relatedInsight.name}</a>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Focus Section - Apply text colors */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          {/* H2 Style: text-2xl md:text-3xl lg:text-4xl font-bold text-text-title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-title mb-8">We Speak Your Language</h2>
          {/* Body Style: text-base text-text-body */}
          <p className="text-base text-text-body leading-relaxed">
            Our focused approach means we understand the specific challenges and opportunities within your niche. Whether you operate in manufacturing, services, distribution, or technology within the building sector, Structured Partners brings relevant experience and a network tailored to your world. We understand what drives value in your specific segment.
          </p>
        </div>
      </section>

      {/* Call to Action Section - Apply bg-primary, text-white, button style */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          {/* H2 Style: text-2xl md:text-3xl lg:text-4xl font-bold */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Leverage Our Industry Focus</h2>
          {/* Body Style: text-base md:text-lg */}
          <p className="text-base md:text-lg mb-8 leading-relaxed">
            Discuss how our deep specialization in the building products and services sector can benefit your next transaction.
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

