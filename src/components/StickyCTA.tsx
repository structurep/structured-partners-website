import Link from 'next/link';

const StickyCTA = () => {
  return (
    // Position fixed at the bottom, full width, z-index to stay on top
    // Hidden on larger screens (lg and up), visible on smaller screens
    // Apply primary background, white text
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-primary text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-center items-center">
        {/* Button Style: Use tertiary button style on primary background */}
        <Link href="/contact-us" legacyBehavior>
          <a className="bg-white hover:bg-tertiary-hover text-primary font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out text-sm">
            Schedule Consultation
          </a>
        </Link>
        {/* Optional: Add a second CTA like 'Get Valuation' if needed */}
        {/* <Link href="/valuation" legacyBehavior>
          <a className="ml-4 text-white hover:underline text-sm">
            Get Valuation
          </a>
        </Link> */}
      </div>
    </div>
  );
};

export default StickyCTA;

