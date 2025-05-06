import Link from 'next/link';
import { Phone } from 'lucide-react';

const MobileCTA = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-primary text-white shadow-lg">
      <Link href="/contact-us" legacyBehavior>
        <a className="flex items-center justify-center w-full py-3 px-4 text-center font-semibold hover:brightness-110 transition-all duration-300 ease-in-out">
          <Phone className="w-5 h-5 mr-2" />
          Schedule Consultation
        </a>
      </Link>
    </div>
  );
};

export default MobileCTA;

