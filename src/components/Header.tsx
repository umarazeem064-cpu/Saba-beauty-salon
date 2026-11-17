import { useState } from 'react';
import { MapPin, Menu, MessageCircle, Phone, X } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface HeaderProps {
  onBookClick: () => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services & Pricing', href: '#services' },
  { label: 'Our Team', href: '#team' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export function Header({ onBookClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileNav = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Direct Contact Info Bar (scrolls naturally so sticky nav stays compact) */}
      <div className="bg-[#181615] text-[#FAF8F5]/90 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-xs">
          <a
            href={SALON_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[#D5B582] transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-[#D5B582] shrink-0" aria-hidden="true" />
            <span>{SALON_INFO.shortAddress}</span>
          </a>

          <div className="flex items-center gap-5">
            <a
              href={SALON_INFO.phoneHref}
              className="inline-flex items-center gap-1.5 hover:text-[#D5B582] transition-colors tabular-nums whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#D5B582] shrink-0" aria-hidden="true" />
              <span>{SALON_INFO.phoneDisplay}</span>
            </a>

            <span className="text-white/25" aria-hidden="true">
              |
            </span>

            <a
              href={SALON_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-[#E5C99B] hover:text-white transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Primary Sticky Navigation Bar (3-Zone Top Bar Contract) */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E7E2DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <a
            href="#home"
            className="font-display text-2xl sm:text-[26px] font-semibold tracking-tight text-[#181615] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9A7B4F] rounded-sm"
          >
            {SALON_INFO.name}
          </a>

          {/* Zone 2: Single-line Text Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-[#4A433C]"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 hover:text-[#181615] transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[#9A7B4F] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9A7B4F]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onBookClick}
              className="px-5 py-2.5 text-xs font-semibold tracking-wide bg-[#181615] text-[#FAF8F5] hover:bg-[#322D2A] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A7B4F]"
            >
              Book Now
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-[#181615] border border-[#E7E2DA] hover:bg-[#F3EFE9] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile Navigation"
            className="lg:hidden border-t border-[#E7E2DA] bg-[#FAF8F5] px-4 py-4 space-y-1"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleMobileNav}
                className="block px-3 py-3 text-sm font-medium text-[#2B2725] hover:bg-[#F3EFE9] hover:text-[#181615] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
