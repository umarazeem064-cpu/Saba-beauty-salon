import { ArrowRight, MapPin } from 'lucide-react';
import { HERO_IMAGE, SALON_INFO } from '../data/salonData';
import { SalonImage } from './SalonImage';

interface HeroProps {
  onBookClick: () => void;
}

const SALON_HIGHLIGHTS = [
  {
    value: '14+ Years',
    label: 'Lahore Craftsmanship',
    detail: 'Established in 2012 on Allama Iqbal Road',
  },
  {
    value: '100% Sterile',
    label: 'Hospital-Grade Hygiene',
    detail: 'Autoclave tools & single-use razors',
  },
  {
    value: '5.0 / 5',
    label: 'Bridal & Color Studio',
    detail: 'Tailored South Asian beauty artistry',
  },
  {
    value: '11 AM – 9 PM',
    label: 'Open Seven Days',
    detail: 'Walk-ins & scheduled bookings welcome',
  },
];

export function Hero({ onBookClick }: HeroProps) {
  return (
    <section id="home" className="relative bg-[#12100E]">
      {/* Full-bleed Luxury Salon Backdrop */}
      <div className="relative min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] flex items-center overflow-hidden">
        <SalonImage
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          loading="eager"
          fallbackTitle={SALON_INFO.name}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Measured Contrast Scrim for WCAG AA Legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#12100E]/90 via-[#12100E]/72 to-[#12100E]/35"
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium tracking-wider text-[#E2C697] mb-4 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>Garhi Shahu · Allama Iqbal Road, Lahore</span>
            </p>

            <h1
              className="font-display font-semibold text-[#FAF8F5] leading-[1.08] tracking-tight mb-6"
              style={{
                fontSize: 'clamp(2.35rem, 4.4vw, 3.85rem)',
                textWrap: 'balance',
              }}
            >
              Refine Your Signature Look with Tailored Salon Craft
            </h1>

            <p className="text-base sm:text-lg text-[#EAE4DC] leading-relaxed mb-9 max-w-xl">
              From dimensional balayage and keratin restoration to radiant bridal artistry, bespoke
              facials, and crisp men’s grooming—Saba Beauty Salon pairs international techniques
              with unhurried Lahore hospitality.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold bg-[#C5A26D] text-[#14110F] hover:bg-[#D5B582] transition-colors duration-200 cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAF8F5]"
              >
                <span>Book Appointment Now</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-[#FAF8F5] border border-[#FAF8F5]/45 hover:bg-[#FAF8F5]/10 hover:border-[#FAF8F5] transition-colors duration-200 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAF8F5]"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width 4-Column Salon Credibility Strip */}
      <div className="bg-[#F3EFE9] border-b border-[#E7E2DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {SALON_HIGHLIGHTS.map((item) => (
              <div
                key={item.label}
                className="lg:border-r lg:last:border-r-0 border-[#DFD8CE] lg:pr-6"
              >
                <p className="font-display text-2xl sm:text-[26px] font-semibold text-[#181615] tabular-nums">
                  {item.value}
                </p>
                <p className="text-sm font-semibold text-[#2B2725] mt-0.5">{item.label}</p>
                <p className="text-xs text-[#645C54] mt-1">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
