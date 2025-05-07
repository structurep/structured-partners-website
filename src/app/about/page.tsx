import { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle, Briefcase, GraduationCap, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  // Metadata remains largely the same, ensure consistency
  title: "About Structured Partners | Insider M&A Expertise for Building Industry",
  description: "Learn about Structured Partners, founded by an industry insider with operator, buyer, and banker experience. Specialized M&A advisory for building products & services.",
  openGraph: {
    title: "About Structured Partners | Insider M&A Expertise",
    description: "Founded by an industry insider with operator, buyer, and banker experience.",
    // TODO: Add a relevant image URL here (og:image)
    // images: ['/kyle_bobinski_headshot.jpeg'],
  },
  twitter: {
    card: "summary",
    title: "About Structured Partners | Insider M&A Expertise",
    description: "Founded by an industry insider with operator, buyer, and banker experience.",
    // TODO: Add a relevant image URL here (twitter:image)
    // images: ['/kyle_bobinski_headshot.jpeg'],
  },
};

export default function AboutUsPage() {
  const founderName = "Kyle Bobinski";

  const founderCredentials = [
    { text: "Built & Sold Building Services Co.", icon: TrendingUp },
    { text: "Private Equity Investor Experience", icon: Briefcase },
    { text: "Investment Banking Background", icon: GraduationCap },
  ];

  return (
    // Apply base font (handled by layout) and background color
    <div className="bg-white text-text-body font-sans">
      {/* Hero Section - Apply bg-secondary, text-tertiary */}
      <section className="bg-secondary text-tertiary py-20 md:py-28 text-center">
        <div className="container mx-auto px-4">
          {/* H1 Style: text-3xl md:text-4xl lg:text-5xl font-bold */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Founded by an Insider, For Insiders.</h1>
          {/* Body Style: text-base md:text-lg, use text-tertiary-strong */}
          <p className="text-base md:text-lg max-w-3xl mx-auto text-tertiary-strong">
            Structured Partners was built on a foundation of firsthand experience across every facet of M&A in the building industry—operator, buyer, and banker.
          </p>
        </div>
      </section>

      {/* Founder Story Section - Apply text colors */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-start">
          {/* Main Bio Content */}
          <div className="md:w-2/3 md:pr-12 mb-12 md:mb-0">
            {/* H2 Style: text-2xl md:text-3xl lg:text-4xl font-bold text-text-title */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-title mb-8">The Insider Advantage</h2>
            {/* Body Style: text-base text-text-body */}
            <p className="text-base text-text-body mb-6 leading-relaxed">
              Understanding the intricacies of the building products and services sector isn’t just part of our job; it’s in our DNA. Structured Partners was founded by {founderName}, an industry veteran who has navigated the complexities of this market from every possible angle. This unique “insider advantage” forms the bedrock of our firm and defines our approach to M&A advisory.
            </p>
            <p className="text-base text-text-body mb-6 leading-relaxed">
              Before launching Structured Partners, {founderName} successfully built and scaled a multi-million dollar building services company, culminating in a strategic exit. This experience provides an intimate understanding of the operational challenges, growth opportunities, and emotional considerations faced by business owners contemplating a sale. Subsequently, as a principal investor at a leading private equity firm, {founderName} evaluated hundreds of deals within the building sector, gaining critical insights into buyer perspectives, valuation methodologies, and deal structuring tactics.
            </p>
             <p className="text-base text-text-body leading-relaxed">
              Rounding out this trifecta of experience, {founderName} served as an investment banker, executing complex M&A transactions and honing the technical expertise required to navigate negotiations, due diligence, and closing processes effectively. This comprehensive background means we don’t just advise; we empathize. We’ve walked in your shoes, sat across the table, and managed the process.
            </p>
          </div>
          {/* Founder Sidebar (Image & Credentials) */}
          <div className="md:w-1/3 text-center md:text-left md:pl-8 md:sticky md:top-24">
            <Image
              src="/images/kyle-bobinski-headshot.jpeg"
              alt={`Headshot of ${founderName}, Founder of Structured Partners`}
              width={300}
              height={300}
              // Apply rounded-full, shadow-lg
              className="rounded-full mx-auto md:mx-0 shadow-lg object-cover w-[200px] h-[200px] md:w-[250px] md:h-[250px] mb-6"
              priority
            />
            {/* H3 Style: text-xl font-bold text-text-title */}
            <h3 className="text-xl font-bold mb-2 text-text-title">{founderName}</h3>
            {/* Caption Style: text-xs text-text-caption */}
            <p className="text-xs text-text-caption mb-6">Founder & Managing Partner</p>

            {/* Credentials Highlight Box - Apply bg-background-1, border-stroke-1, rounded-lg, shadow-md */}
            <div className="bg-background-1 border border-stroke-1 rounded-lg shadow-md p-6 text-left space-y-3">
              {/* H4 Style: text-base font-bold text-text-title */}
              <h4 className="text-base font-bold text-text-title mb-3">Key Experience</h4>
              {founderCredentials.map((cred, index) => (
                <div key={index} className="flex items-center space-x-3">
                  {/* Use primary color for icon */}
                  <cred.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  {/* Body Style: text-sm text-text-body */}
                  <span className="text-sm text-text-body">{cred.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team & Approach Section - Apply bg-background-1, text colors */}
      <section className="py-16 md:py-24 bg-background-1">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          {/* H2 Style: text-2xl md:text-3xl lg:text-4xl font-bold text-text-title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-title mb-8">Your Dedicated Deal Sherpas</h2>
          {/* Body Style: text-base text-text-body */}
          <p className="text-base text-text-body mb-8 leading-relaxed">
            Our team embodies this same commitment to deep sector knowledge and practical experience. We are more than advisors; we are dedicated partners committed to providing senior-level attention on every engagement. We pride ourselves on being “deal sherpas,” guiding our clients through every step of their M&A journey with integrity, transparency, and unwavering focus on achieving their strategic objectives.
          </p>
          <p className="text-base text-text-body leading-relaxed">
            We believe that trust is earned through consistent results and honest communication. Our structured, confidential process, combined with our specialized expertise, ensures that you receive the highest level of service and achieve the optimal outcome for your business.
          </p>
        </div>
      </section>

      {/* Core Values Section - Apply background, text colors, card styles */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* H2 Style: text-2xl md:text-3xl lg:text-4xl font-bold text-text-title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-title mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[ // Placeholder for actual values
              { title: "Integrity First", description: "Uncompromising honesty and ethical conduct.", icon: CheckCircle },
              { title: "Sector Mastery", description: "Deep, specialized industry knowledge.", icon: CheckCircle },
              { title: "Client Partnership", description: "Trusted advisors and extensions of your team.", icon: CheckCircle },
              { title: "Structured Execution", description: "Proven processes for superior results.", icon: CheckCircle },
              { title: "Confidentiality Assured", description: "Protecting sensitive information discreetly.", icon: CheckCircle },
              { title: "Results Driven", description: "Focused on achieving optimal outcomes.", icon: CheckCircle },
            ].map((value, index) => (
              // Card Style: Use .card class from globals.css (bg-white, rounded-lg, shadow-md, hover:shadow-lg)
              // Use bg-background-1 for contrast with section bg-white
              <div key={index} className="card flex items-start space-x-4 p-6 bg-background-1">
                {/* Use primary color for icon */}
                <value.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  {/* H3 Style: text-xl font-bold text-text-title */}
                  <h3 className="text-xl font-bold mb-2 text-text-title">{value.title}</h3>
                  {/* Body Style: text-sm text-text-body */}
                  <p className="text-sm text-text-body">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Added CTA Section - Use bg-primary, text-white */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          {/* H2 Style: text-2xl md:text-3xl lg:text-4xl font-bold */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          {/* Body Style: text-base md:text-lg */}
          <p className="text-base md:text-lg mb-8 leading-relaxed">
            Learn how our insider perspective and structured approach can maximize your transaction value.
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

