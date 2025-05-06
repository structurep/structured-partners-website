import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Navigation items for footer links
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
    // Use secondary color for background, tertiary variants for text
    <footer className="bg-secondary text-tertiary-strong pt-16 pb-8 font-sans">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Logo & Description */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/">
            {/* Logo visible on dark background */}
            <Image src="/logo.svg" alt="Structured Partners Logo" width={160} height={45} className="mb-4 filter brightness-0 invert"/>
          </Link>
          {/* Expanded Description - Use text-tertiary */}
          <p className="text-sm mb-4 leading-relaxed text-tertiary">
            Structured Partners is a specialized M&A advisory firm exclusively focused on the building products, construction, and industrial services sectors. We leverage deep industry knowledge, extensive transaction experience, and a tailored approach to guide business owners and investors through critical strategic decisions, ensuring optimal outcomes and lasting legacies.
          </p>
          {/* Social Media Icons - Use text-tertiary, hover:text-primary */}
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="LinkedIn" className="text-tertiary hover:text-primary">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            {/* Add other social icons if needed */}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          {/* Use text-tertiary-strong for heading */}
          <h5 className="font-bold text-tertiary-strong mb-4 text-base">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.name}>
                {/* Use text-tertiary, hover:text-primary for links */}
                <Link href={item.href} className="text-tertiary hover:text-primary">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Resources & Services */}
        <div>
          {/* Use text-tertiary-strong for heading */}
          <h5 className="font-bold text-tertiary-strong mb-4 text-base">Resources & Services</h5>
          <ul className="space-y-2 text-sm">
             {/* Use text-tertiary, hover:text-primary for links */}
            <li><Link href="/services#sell-side" className="text-tertiary hover:text-primary">Sell-Side Advisory</Link></li>
            <li><Link href="/services#buy-side" className="text-tertiary hover:text-primary">Buy-Side Advisory</Link></li>
            <li><Link href="/services#consulting-valuation" className="text-tertiary hover:text-primary">Consulting & Valuation</Link></li>
            <li className="pt-2">
              <a href="/exit_readiness_checklist.pdf" target="_blank" rel="noopener noreferrer" className="text-tertiary hover:text-primary font-medium">
                Download Exit Readiness Checklist
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info & CTA */}
        <div>
          {/* Use text-tertiary-strong for heading */}
          <h5 className="font-bold text-tertiary-strong mb-4 text-base">Contact Us</h5>
          {/* Use text-tertiary for address, hover:text-primary for links */}
          <address className="text-sm not-italic space-y-2 mb-6 text-tertiary">
            <p>St Petersburg, FL</p>
            <p>Email: <a href="mailto:info@structuredpartners.com" className="hover:text-primary">info@structuredpartners.com</a></p>
            <p>Phone: <a href="tel:727-761-1644" className="hover:text-primary">727-761-1644</a></p>
          </address>
          {/* Primary CTA Button - Use btn-primary class */}
          <Link href="/contact-us" legacyBehavior>
            <a className="btn-primary inline-block text-sm mb-4">
              Schedule Consultation
            </a>
          </Link>
        </div>
      </div>

      {/* Bottom Bar - Use text-tertiary-strong, border-stroke-1 (adjust if needed), hover:text-primary */}
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-stroke-1 text-center md:flex md:justify-between text-xs text-tertiary-strong">
        <p>&copy; {currentYear} Structured Partners. All rights reserved.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
          <span className="text-tertiary-strong">|</span>
          <Link href="/terms-conditions" className="hover:text-primary">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

