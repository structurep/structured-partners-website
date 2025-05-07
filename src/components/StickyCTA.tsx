import Link from 'next/link';

const StickyCTA = () => {
  return (
    // Position fixed at the bottom, full width, z-index to stay on top
    // Updated to be visible on all screen sizes as per general CTA requirements
    // Apply primary background, white text
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-center items-center">
        {/* Button Style: Use tertiary button style on primary background */}
        <Link href="/contact-us#valuation" legacyBehavior> {/* Assuming /contact-us can handle a #valuation anchor or is the general page for this */}
          <a className="bg-white hover:bg-tertiary-hover text-primary font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out text-base">
            Get Valuation
          </a>
        </Link>
      </div>
    </div>
  );
};

export default StickyCTA;

