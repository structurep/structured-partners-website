import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Building, Users, BarChart } from "lucide-react";
import ModalCTA from "@/components/ModalCTA"; // Import ModalCTA

export const metadata: Metadata = {
  title: "Structured Partners | Expert M&A Advisory for the Building Industry",
  description: "Maximize your exit with specialized M&A advisory for building products & services companies. Former operators, buyers & bankers guiding your transaction.",
  openGraph: {
    title: "Structured Partners | Expert M&A Advisory for the Building Industry",
    description: "Maximize your exit with specialized M&A advisory for building products & services companies.",
    images: [{ url: "https://struct-part.netlify.app/images/opengraph-twitter-preview.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Structured Partners | Expert M&A Advisory for the Building Industry",
    description: "Maximize your exit with specialized M&A advisory for building products & services companies.",
    images: ["https://struct-part.netlify.app/images/opengraph-twitter-preview.png"],
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col font-sans">
      <ModalCTA pageIdentifier="homepage" /> {/* Add ModalCTA to homepage */}
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 md:py-28 flex items-center justify-center text-center"
        style={{ backgroundImage: "url("/images/hero-background.png")" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 p-4 max-w-4xl mx-auto text-tertiary">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white">
            Maximize Your Exit. Maintain Your Legacy.
          </h1>
          <p className="text-base md:text-lg mb-8 text-gray-200">
            Expert M&A advisory for building products, construction, and industrial services companies
          </p>
          <div>
            <Link href="/contact-us" legacyBehavior>
              <a className="btn btn-primary inline-block">
                Get a Consultation
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Updated with Themed Images */}
      <section className="py-16 md:py-24 bg-background-1">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Why Choose Structured Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Deep Industry Focus */}
            <div className="card flex flex-col items-center bg-tertiary overflow-hidden">
              <div className="w-full h-48 relative">
                <Image
                  src="/images/themed-image-building-future.png"
                  alt="Building for the Future - Deep Industry Focus"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-secondary mb-3">Deep Industry Focus</h3>
                <p className="text-sm text-text-body leading-relaxed">
                  We specialize in sectors like building materials, specialty trade services companies.
                </p>
              </div>
            </div>
            {/* Card 2: Client-Centric Approach */}
            <div className="card flex flex-col items-center bg-tertiary overflow-hidden">
              <div className="w-full h-48 relative">
                <Image
                  src="/images/themed-image-trusted-partnerships.png"
                  alt="Trusted Partnerships - Client-Centric Approach"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-secondary mb-3">Client-Centric Approach</h3>
                <p className="text-sm text-text-body leading-relaxed">
                  From strategic planning to deal execution, we provide tailored advice aligned with your business objectives.
                </p>
              </div>
            </div>
            {/* Card 3: Proven Track Record */}
            <div className="card flex flex-col items-center bg-tertiary overflow-hidden">
              <div className="w-full h-48 relative">
                <Image
                  src="/images/themed-image-navigating-transactions.png"
                  alt="Navigating Complex Transactions - Proven Track Record"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-secondary mb-3">Proven Track Record</h3>
                <p className="text-sm text-text-body leading-relaxed">
                  A history of successful transactions demonstrating our commitment to driving optimums.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Explore Section */}
      <section className="py-16 md:py-20 bg-background-2">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Ready to Explore Your Options?</h2>
          <p className="text-base text-text-body mb-8 leading-relaxed">
            Whether you&apos;re considering a sale now or evaluating future steps, our team is here to guide you through the M&A process.
          </p>
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

