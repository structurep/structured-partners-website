
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem('cookie_consent');
    if (consent !== 'true') {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
    // Here you could trigger initialization of analytics scripts if needed
    // e.g., window.gtag('consent', 'update', { 'analytics_storage': 'granted' });
  };

  const handleDecline = () => {
    // Optionally set a 'declined' status if needed for logic
    localStorage.setItem('cookie_consent', 'false');
    setIsVisible(false);
    // Ensure analytics scripts requiring consent are not loaded or are disabled
  };

  if (!isVisible) {
    return null;
  }

  return (
    // Style similar to StickyCTA but distinct
    // Use tertiary background, secondary text for contrast
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-tertiary text-secondary p-4 shadow-lg border-t border-stroke-1">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Use text-sm and appropriate text color */}
        <p className="text-sm mb-4 sm:mb-0 text-text-body">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          <Link href="/privacy-policy" legacyBehavior>
            <a className="underline ml-2 text-primary hover:text-primary-hover">Learn More</a>
          </Link>
        </p>
        <div className="flex space-x-3">
          {/* Decline Button: Use subtle style */}
          <button
            onClick={handleDecline}
            className="text-sm text-text-caption hover:text-text-body transition-colors duration-300 px-4 py-1 rounded-lg"
          >
            Decline
          </button>
          {/* Accept Button: Use primary style */}
          <button
            onClick={handleAccept}
            className="btn-primary text-sm px-4 py-1"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;

