"use client";

import { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';

interface ModalCTAProps {
  pageIdentifier: string; // To potentially customize behavior or content per page
}

const ModalCTA: React.FC<ModalCTAProps> = ({ pageIdentifier }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenTriggered, setHasBeenTriggered] = useState(false);

  const openModal = useCallback(() => {
    if (!hasBeenTriggered) {
      setIsOpen(true);
      setHasBeenTriggered(true); // Ensure it only triggers once per session/logic
    }
  }, [hasBeenTriggered]);

  // Time-based trigger
  useEffect(() => {
    if (pageIdentifier === 'homepage' || pageIdentifier === 'services') {
      const timer = setTimeout(() => {
        if (!isOpen && !hasBeenTriggered) {
          openModal();
        }
      }, 20000); // 20 seconds
      return () => clearTimeout(timer);
    }
  }, [isOpen, pageIdentifier, openModal, hasBeenTriggered]);

  // Scroll-based trigger
  useEffect(() => {
    const handleScroll = () => {
      if (pageIdentifier === 'homepage' || pageIdentifier === 'services') {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercentage > 60 && !isOpen && !hasBeenTriggered) {
          openModal();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen, pageIdentifier, openModal, hasBeenTriggered]);

  // ESC key to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);


  if (!isOpen) {
    return null;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    // For now, just close the modal and log
    console.log("Form submitted with:", event.currentTarget.email.value, event.currentTarget.fullName?.value);
    setIsOpen(false);
    // Potentially redirect to the PDF or trigger download
    window.open('/exit_readiness_checklist.pdf', '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md relative" style={{ backgroundColor: '#FFFFFF' /* Explicit white for modal body */ }}>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        <div className="text-center">
          {/* Optional: Small PDF icon or checklist visual */}
          {/* <img src="/path-to-pdf-icon.svg" alt="Checklist icon" className="mx-auto mb-4 h-12 w-12" /> */}
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Considering a Sale?</h2>
          <p className="mb-6 text-gray-600">
            Get our free Exit Readiness Checklist and discover what today’s top buyers want to see.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email (required)</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm text-gray-900"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Name (optional)</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm text-gray-900"
              placeholder="Your Name"
            />
          </div>
          <button
            type="submit"
            className="w-full text-white font-semibold py-3 px-4 rounded-md transition duration-150 ease-in-out"
            style={{ backgroundColor: '#E35F4F', color: 'white' }}
          >
            Download the Checklist
          </button>
        </form>
        <p className="mt-4 text-xs text-gray-500 text-center">
          No spam. One-click unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default ModalCTA;

