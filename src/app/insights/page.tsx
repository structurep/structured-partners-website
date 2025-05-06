import { Metadata } from 'next';
import Link from 'next/link';
// import Image from 'next/image'; // Removed unused Image import
import Script from 'next/script';

export const metadata: Metadata = {
  // Metadata remains largely the same, ensure consistency
  title: "M&A Insights | Structured Partners | Building Industry Trends & Analysis",
  description: "Expert perspectives on valuation, deal structuring, and market trends for building products & services M&A. Actionable intelligence from industry insiders.",
  openGraph: {
    title: "M&A Insights | Structured Partners | Building Industry Trends & Analysis",
    description: "Expert perspectives on valuation, deal structuring, and market trends for building products & services M&A.",
    // TODO: Add image if available (og:image)
    // images: ['/og-insights.jpg'],
  },
  twitter: {
    card: "summary",
    title: "M&A Insights | Structured Partners | Building Industry Trends & Analysis",
    description: "Expert perspectives on valuation, deal structuring, and market trends for building products & services M&A.",
    // TODO: Add image if available (twitter:image)
    // images: ['/twitter-insights.jpg'],
  },
};

// Placeholder data for blog posts
const blogPosts = [
  {
    slug: "maximize-valuation-building-products",
    title: "How to Maximize Valuation in a Competitive Building Products Market",
    summary: "Explore key operational metrics, strategic positioning factors, and pre-sale preparations that significantly impact valuation multiples buyers are willing to pay...",
    imageUrl: "/placeholder_insight_1.png", // Placeholder
    relatedService: { name: "Sell-Side Advisory", href: "/services#sell-side" },
    datePublished: "2024-04-15",
    authorName: "Structured Partners Team",
  },
  {
    slug: "private-equity-specialty-trades",
    title: "Private Equity is Aggressively Pursuing Specialty Trade Services: What Owners Need to Know",
    summary: "Understand the key drivers behind the surge in private equity interest in HVAC, plumbing, electrical, and other specialty trade services...",
    imageUrl: "/placeholder_insight_2.png", // Placeholder
    relatedIndustry: { name: "Specialty Trades", href: "/industries-covered#specialty-trades" },
    datePublished: "2024-03-20",
    authorName: "Structured Partners Team",
  },
  {
    slug: "earnout-trap-construction-deals",
    title: "Avoiding the Earnout Trap: Structuring Contingent Payments in Construction & Building Services Deals",
    summary: "Earnouts can bridge valuation gaps but also create significant post-closing friction if not structured carefully. This article examines common pitfalls...",
    imageUrl: "/placeholder_insight_3.png", // Placeholder
    relatedService: { name: "Sell-Side Advisory", href: "/services#sell-side" },
    datePublished: "2024-02-10",
    authorName: "Structured Partners Team",
  },
  {
    slug: "pre-sale-checklist-building-industry",
    title: "Pre-Sale Checklist: 10 Steps to Prepare Your Building Industry Business for M&A",
    summary: "A successful exit doesn’t happen overnight. This practical checklist outlines the critical financial, operational, legal, and strategic steps owners should take...",
    imageUrl: "/placeholder_insight_4.png", // Placeholder
    relatedService: { name: "Consulting & Valuation", href: "/services#consulting-valuation" },
    datePublished: "2024-01-05",
    authorName: "Structured Partners Team",
  },
];

export default function InsightsPage() {
  return (
    // Apply base font (handled by layout) and background color
    <div className="bg-white text-text-body font-sans">
      {/* Hero Section - Apply bg-secondary, text-tertiary */}
      <section className="bg-secondary text-tertiary py-20 md:py-28 text-center">
        <div className="container mx-auto px-4">
          {/* H1 Style: text-3xl md:text-4xl lg:text-5xl font-bold */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Navigating the Building Industry M&A Landscape</h1>
          {/* Body Style: text-base md:text-lg, use text-tertiary-strong */}
          <p className="text-base md:text-lg max-w-3xl mx-auto text-tertiary-strong">
            Expert perspectives and actionable intelligence on valuation, deal structuring, and market trends for owners and investors in building products and services.
          </p>
        </div>
      </section>

      {/* Intro Section - Apply text colors and add internal links */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-base text-text-body leading-relaxed">
          <p className="mb-6">
            The M&A landscape within the <Link href="/industries-covered" className="text-primary hover:underline">building products and services sector</Link> is constantly evolving. Staying informed about market dynamics, valuation trends, buyer appetites, and strategic best practices is crucial for maximizing opportunities and mitigating risks.
          </p>
          <p className="mb-6">
            At Structured Partners, our deep industry immersion provides us with unique insights, which we share here to help business owners, executives, and investors make more informed decisions.
          </p>
          {/* Use text-title for emphasis */}
          <p className="font-bold text-text-title mb-4">Explore our articles to gain a deeper understanding of:</p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-text-body">
            <li>Current <Link href="/services#consulting-valuation" className="text-primary hover:underline">valuation multiples</Link> and drivers in specific sub-sectors.</li>
            <li>Strategies for <Link href="/services#sell-side" className="text-primary hover:underline">preparing your business for a successful sale</Link>.</li>
            <li>Key considerations when <Link href="/services#buy-side" className="text-primary hover:underline">evaluating acquisition opportunities</Link>.</li>
            <li>Navigating complex deal terms like earnouts and seller financing.</li>
            <li>Trends in private equity and strategic buyer activity within the sector.</li>
          </ul>
          <p>
             We aim to provide clear, actionable intelligence that cuts through the noise and empowers you to achieve your strategic goals.
          </p>
        </div>
      </section>

      {/* Blog Post Grid - Apply bg-background-1, card styles */}
      <section className="py-16 md:py-24 bg-background-1">
        <div className="container mx-auto px-4">
          {/* H2 Style: text-2xl md:text-3xl lg:text-4xl font-bold text-text-title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-title mb-12 text-center">Featured Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {blogPosts.map((post) => (
              // Card Style: Use .card class from globals.css (bg-white, rounded-lg, shadow-md, border, hover:shadow-lg)
              <div key={post.slug} id={post.slug} className="card overflow-hidden flex flex-col bg-white">
                {/* Placeholder Image - Use bg-background-2 */}
                <div className="w-full h-48 bg-background-2 flex items-center justify-center">
                  {/* TODO: Replace with actual Image component when images are available */}
                  <span className="text-text-caption">Placeholder Image</span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  {/* H3 Style: text-xl font-bold text-text-title, hover:text-primary */}
                  <h3 className="text-xl font-bold text-text-title mb-3 hover:text-primary transition duration-300">
                    {/* TODO: Link to actual post page when created */}
                    <a>{post.title}</a>
                  </h3>
                  {/* Body Style: text-sm text-text-body */}
                  <p className="text-sm text-text-body leading-relaxed mb-4 flex-grow">{post.summary}</p>
                  <div className="mt-auto pt-4 border-t border-stroke-1">
                    {/* Link Style: text-xs text-text-caption, hover:text-primary */}
                    {post.relatedService && (
                      <Link href={post.relatedService.href} legacyBehavior>
                        <a className="text-xs text-text-caption hover:text-primary mr-4 inline-block">Related: {post.relatedService.name}</a>
                      </Link>
                    )}
                    {post.relatedIndustry && (
                      <Link href={post.relatedIndustry.href} legacyBehavior>
                        <a className="text-xs text-text-caption hover:text-primary mr-4 inline-block">Related: {post.relatedIndustry.name}</a>
                      </Link>
                    )}
                    {/* Read More Link Style: text-primary, hover:text-primary-hover, font-bold */}
                    {/* TODO: Link to actual post page when created */}
                    <a className="text-primary hover:text-primary-hover font-bold text-sm inline-block">
                      Read More &rarr;
                    </a>
                  </div>
                </div>
                {/* Add Article Schema */}
                <Script
                  id={`article-schema-${post.slug}`}
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "Article",
                      "headline": post.title,
                      "image": post.imageUrl, // Use placeholder or actual image URL
                      "datePublished": post.datePublished,
                      "author": {
                        "@type": "Organization",
                        "name": "Structured Partners"
                      },
                      "publisher": {
                        "@type": "Organization",
                        "name": "Structured Partners",
                        "logo": {
                          "@type": "ImageObject",
                          "url": "/logo.svg" // Assuming logo is accessible
                        }
                      },
                      "description": post.summary
                    })
                  }}
                />
              </div>
            ))}
          </div>
           {/* Note: Add pagination or a 'Load More' button if many posts exist */}
        </div>
      </section>

      {/* Call to Action Section - Apply bg-primary, text-white, button style */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          {/* H2 Style: text-2xl md:text-3xl lg:text-4xl font-bold */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Have Questions About a Specific Topic?</h2>
          {/* Body Style: text-base md:text-lg */}
          <p className="text-base md:text-lg mb-8 leading-relaxed">
            Our team is ready to provide tailored insights based on your unique situation.
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

