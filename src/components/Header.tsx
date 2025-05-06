
'use client'; // Add this directive because we are using useState

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Industries Covered', href: '/industries-covered' },
    { name: 'Insights', href: '/insights' },
    { name: 'News & Announcements', href: '/news-announcements' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  return (
    // Use bg-white for header background, apply shadow-md from new config
    // Ensure font-sans is applied (should inherit from body)
    <header className="bg-white shadow-md sticky top-0 z-50 font-sans">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          {/* Ensure logo dimensions are appropriate */}
          <Image src="/logo.svg" alt="Structured Partners Logo" width={180} height={40} priority />
        </Link>

        {/* Desktop Navigation - Apply new text colors and hover effect */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              // Use text-text-body, hover:text-primary
              className="text-text-body hover:text-primary text-sm font-normal"
            >
              {item.name}
            </Link>
          ))}
          {/* Optional CTA Button - Styled with new primary color */}
          {/* <Link href="/contact-us" className="btn-primary ml-4 text-sm">
            Consultation
          </Link> */}
        </div>

        {/* Mobile Navigation Button - Use text-secondary color */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-secondary focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Apply bg-white, shadow-lg */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-40 border-t border-stroke-1">
          <div className="flex flex-col space-y-1 p-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                // Apply text-text-body, hover:text-primary, padding
                className="text-text-body hover:text-primary py-2 px-4 text-left rounded-md hover:bg-background-1"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              >
                {item.name}
              </Link>
            ))}
             {/* Optional Mobile CTA */}
            {/* <Link href="/contact-us" className="btn-primary mt-4 text-center w-full">
              Schedule Consultation
            </Link> */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

