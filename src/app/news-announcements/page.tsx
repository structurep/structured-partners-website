import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  // Metadata remains largely the same, ensure consistency
  title: "News & Announcements | Structured Partners | Recent Deals & Updates",
  description:
    "Stay updated on Structured Partners\' recent M&A transactions, company news, and industry recognition in the building products and services sector.", // Escaped apostrophe
  openGraph: {
    title: "News & Announcements | Structured Partners | Recent Deals & Updates",
    description:
      "Stay updated on Structured Partners\' recent M&A transactions, company news, and industry recognition.", // Escaped apostrophe
    // TODO: Add image if available (og:image)
    // images: ["/og-news.jpg"],
  },
  twitter: {
    card: "summary",
    title: "News & Announcements | Structured Partners | Recent Deals & Updates",
    description:
      "Stay updated on Structured Partners\' recent M&A transactions, company news, and industry recognition.", // Escaped apostrophe
    // TODO: Add image if available (twitter:image)
    // images: ["/twitter-news.jpg"],
  },
};

// Placeholder data for news items
const newsItems = [
  {
    slug: "advises-client-on-sale",
    date: "2024-04-25",
    title:
      "Structured Partners Advises [Client Company Name] on its Sale to [Buyer Company Name]",
    summary:
      "Structured Partners served as the exclusive <Link href=\"/services#sell-side\" className=\"text-primary hover:underline\">financial advisor</Link> to [Client Company Name], a leading provider of [Client Description], in its successful acquisition by [Buyer Company Name]...",
    link: "#", // Placeholder link
    imageUrl: "/placeholder_news_1.png", // Placeholder
    authorName: "Structured Partners Team",
  },
  {
    slug: "bobinski-speaks-at-summit",
    date: "2024-03-10",
    title: "Kyle Bobinski Speaks at Building Industry M&A Summit",
    summary:
      "Our founder, Kyle Bobinski, shared insights on valuation trends in the <Link href=\"/industries-covered#specialty-trades\" className=\"text-primary hover:underline\">specialty trades sector</Link> during a panel discussion at the annual Building Industry M&A Summit...",
    link: "#", // Placeholder link
    imageUrl: "/placeholder_news_2.png", // Placeholder
    authorName: "Structured Partners Team",
  },
  {
    slug: "closed-transaction-target-acquisition",
    date: "2024-02-15",
    title: "Closed Transaction: Acquisition of [Target Company Name]",
    summary:
      "Structured Partners represented [Acquiring Company Name] in its strategic <Link href=\"/services#buy-side\" className=\"text-primary hover:underline\">acquisition</Link> of [Target Company Name], a manufacturer of [Product Type]...",
    link: "#", // Placeholder link
    imageUrl: "/placeholder_news_3.png", // Placeholder
    authorName: "Structured Partners Team",
  },
];

export default function NewsPage() {
  return (
    <div className="bg-white text-text-body font-sans">
      {/* Apply base font (handled by layout) and background color - Corrected comment placement */}
      {/* Hero Section - Apply bg-secondary, text-tertiary */}
      <section className="bg-secondary text-tertiary py-20 md:py-28 text-center">
        <div className="container mx-auto px-4">
          {/* H1 Style: text-3xl md:text-4xl lg:text-5xl font-bold */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Latest Developments at Structured Partners
          </h1>
          {/* Body Style: text-base md:text-lg, use text-tertiary-strong */}
          <p className="text-base md:text-lg max-w-3xl mx-auto text-tertiary-strong">
            Stay updated on our recent transactions, company news, and industry
            recognition within the building products and services sector.
          </p>
        </div>
      </section>

      {/* Intro Section - Apply text colors */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-base text-text-body leading-relaxed">
          <p className="mb-6">
            Structured Partners is actively engaged in the dynamic M&A market for{" "}
            <Link
              href="/industries-covered"
              className="text-primary hover:underline"
            >
              building products and services
            </Link>
            . This section highlights our recent activities, successful deal
            closures, firm updates, and contributions to industry discussions.
          </p>
          <p>
            We believe in transparency and sharing milestones that reflect our
            commitment to delivering exceptional results for our clients.
          </p>
        </div>
      </section>

      {/* News Items Grid - Apply bg-background-1, card styles */}
      <section className="py-16 md:py-24 bg-background-1">
        <div className="container mx-auto px-4">
          {/* H2 Style: text-2xl md:text-3xl lg:text-4xl font-bold text-text-title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-title mb-12 text-center">
            Recent News & Announcements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {newsItems.map((item) => (
              // Card Style: Use .card class from globals.css (bg-white, rounded-lg, shadow-md, border, hover:shadow-lg)
              <div
                key={item.slug}
                id={item.slug}
                className="card overflow-hidden flex flex-col bg-white"
              >
                {/* Placeholder Image - Use bg-background-2 */}
                <div className="w-full h-48 bg-background-2 flex items-center justify-center">
                  {/* TODO: Replace with actual Image component when images are available */}
                  <span className="text-text-caption">Placeholder Image</span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  {/* Caption Style: text-xs text-text-caption */}
                  <p className="text-xs text-text-caption mb-2">{item.date}</p>
                  {/* H3 Style: text-xl font-bold text-text-title, hover:text-primary */}
                  <h3 className="text-xl font-bold text-text-title mb-3 hover:text-primary transition duration-300">
                    {/* TODO: Link to actual news page when created */}
                    <a>{item.title}</a>
                  </h3>
                  {/* Body Style: text-sm text-text-body */}
                  {/* Use dangerouslySetInnerHTML to render links within summary */}
                  <p
                    className="text-sm text-text-body leading-relaxed mb-4 flex-grow"
                    dangerouslySetInnerHTML={{ __html: item.summary }}
                  ></p>
                  <div className="mt-auto pt-4 border-t border-stroke-1">
                    {/* Read More Link Style: text-primary, hover:text-primary-hover, font-bold */}
                    {/* TODO: Link to actual news page when created */}
                    <a className="text-primary hover:text-primary-hover font-bold text-sm inline-block">
                      Read More &rarr;
                    </a>
                  </div>
                </div>
                {/* Add NewsArticle Schema */}
                <Script
                  id={`news-schema-${item.slug}`}
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "NewsArticle",
                      headline: item.title,
                      image: item.imageUrl, // Use placeholder or actual image URL
                      datePublished: item.date,
                      author: {
                        "@type": "Organization",
                        name: "Structured Partners",
                      },
                      publisher: {
                        "@type": "Organization",
                        name: "Structured Partners",
                        logo: {
                          "@type": "ImageObject",
                          url: "/logo.svg", // Assuming logo is accessible
                        },
                      },
                      abstract: item.summary.replace(/<[^>]*>?/gm, ""), // Remove HTML tags for abstract
                    }),
                  }}
                />
              </div>
            ))}
          </div>
          {/* Note: Add pagination or a "Load More" button if many items exist */}
        </div>
      </section>

      {/* Call to Action Section - Apply bg-primary, text-white, button style */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          {/* H2 Style: text-2xl md:text-3xl lg:text-4xl font-bold */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Interested in Discussing a Potential Transaction?
          </h2>
          {/* Body Style: text-base md:text-lg */}
          <p className="text-base md:text-lg mb-8 leading-relaxed">
            Reach out to our team for a confidential conversation about your M&A
            objectives.
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

