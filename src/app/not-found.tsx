import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Page Not Found | Structured Partners",
  description: "The page you were looking for could not be found.",
};

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 bg-gray-50">
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md">
          Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link href="/" legacyBehavior>
          <a className="bg-primary hover:brightness-110 text-white font-bold py-3 px-6 rounded transition duration-300 ease-in-out">
            Return to Homepage
          </a>
        </Link>
      </div>
    </>
  );
}

