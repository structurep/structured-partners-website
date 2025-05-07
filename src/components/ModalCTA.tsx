import { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';

interface ModalCTAProps {
  pageIdentifier: string; // To control modal display on specific pages like 'homepage' or 'services'
}

const ModalCTA: React.FC<ModalCTAProps> = ({ pageIdentifier }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenTriggered, setHasBeenTriggered] = useState(false);

  const MODAL_STORAGE_KEY = `modalCTADismissed_${pageIdentifier}`;

  const closeModal = useCallback(() => {
    setIsOpen(false);
    // Optionally, set a flag in localStorage to prevent re-triggering for a session/day
    // For now, it will re-trigger on next page load if conditions met and not dismissed again
  }, []);

  useEffect(() => {
    // Check if modal was already dismissed in this session/day (if implementing that)
    // For this example, we'll assume it can re-appear unless explicitly handled with localStorage

    if (hasBeenTriggered) return;

    // Time-based trigger
    const timer = setTimeout(() => {
      if (!isOpen && !hasBeenTriggered) {
        setIsOpen(true);
        setHasBeenTriggered(true);
      }
    }, 20000); // 20 seconds

    // Scroll-based trigger
    const handleScroll = () => {
      if (!isOpen && !hasBeenTriggered) {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercentage > 60) {
          setIsOpen(true);
          setHasBeenTriggered(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // ESC key to close modal
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEsc);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, closeModal, hasBeenTriggered]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4">
      <div className="relative bg-primary text-white p-8 rounded-lg shadow-2xl max-w-md w-full">
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-white hover:text-gray-300 transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-3 text-center">Considering a Sale?</h2>
        <p className="text-sm mb-6 text-center text-gray-200">
          Get our free Exit Readiness Checklist and discover what today’s top buyers want to see.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label htmlFor="modal-email" className="block text-xs font-medium mb-1">Email Address*</label>
            <input
              type="email"
              id="modal-email"
              name="email"
              required
              className="w-full p-2.5 rounded-md bg-white text-secondary placeholder-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white outline-none"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label htmlFor="modal-name" className="block text-xs font-medium mb-1">Name (Optional)</label>
            <input
              type="text"
              id="modal-name"
              name="name"
              className="w-full p-2.5 rounded-md bg-white text-secondary placeholder-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white outline-none"
              placeholder="Your Name"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white hover:bg-gray-200 text-primary font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out text-base focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white outline-none"
          >
            Download the Checklist
          </button>
        </form>
        <p className="text-xs text-center mt-4 text-gray-300">
          No spam. One-click unsubscribe anytime.
        </p>
        {/* Optional: PDF icon or checklist visual can be added here */}
      </div>
    </div>
  );
};

export default ModalCTA;

