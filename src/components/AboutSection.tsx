import { Check } from 'lucide-react';
import { ABOUT_IMAGE, SALON_INFO } from '../data/salonData';
import { SalonImage } from './SalonImage';

const HYGIENE_STANDARDS = [
  'Medical-grade UV & autoclave sterilization of every shear, clipper, and cuticle tool between appointments.',
  'Single-use disposable blades, linen headbands, and sealed spa pedicure liners for complete peace of mind.',
  'Ammonia-free European hair color, botanical facial serums, and dermatologist-tested bridal skincare.',
  'Dedicated private styling and bridal preparation suites tailored for comfort and discretion.',
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E7E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Full-height Editorial Salon Photography */}
          <div className="lg:col-span-6">
            <div className="relative h-full min-h-[360px] lg:min-h-[540px] overflow-hidden bg-[#EAE3D7]">
              <SalonImage
                src={ABOUT_IMAGE.src}
                alt={ABOUT_IMAGE.alt}
                fallbackTitle="Saba Beauty Salon Craft"
                className="w-full h-full lg:h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Founding Story, Experience & Hygiene Standards */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#8A6D43] mb-3">
              About Saba Beauty Salon · Est. {SALON_INFO.establishedYear}
            </p>

            <h2
              className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#181615] leading-[1.12] tracking-tight mb-6"
              style={{ textWrap: 'balance' }}
            >
              Over a Decade of Considered Beauty Care in the Heart of Lahore
            </h2>

            <div className="space-y-4 text-[15px] sm:text-base text-[#4A433C] leading-relaxed mb-8">
              <p>
                Founded by master makeup artist Saba Malik in {SALON_INFO.establishedYear} along
                Allama Iqbal Road in Garhi Shahu, Saba Beauty Salon was created as a calm,
                high-craft alternative to rushed neighbourhood parlours. Over{' '}
                <strong className="font-semibold text-[#181615]">
                  {SALON_INFO.experienceYears}+ years of industry excellence
                </strong>
                , our studio has styled thousands of Lahore brides, families, and discerning
                professionals.
              </p>
              <p>
                Every appointment begins with an unhurried diagnostic consultation—assessing hair
                porosity, scalp balance, skin undertones, and daily styling habits before a single
                drop of color or skincare touches you. Our master stylists combine precision
                technique with clinical-level cleanliness so you leave feeling restored, confident,
                and effortlessly polished.
              </p>
            </div>

            <div className="pt-6 border-t border-[#E7E2DA]">
              <h3 className="text-sm font-semibold text-[#181615] mb-4">
                Our Hygiene &amp; Formulation Commitment
              </h3>
              <ul className="space-y-3">
                {HYGIENE_STANDARDS.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-[#4A433C]">
                    <Check
                      className="w-4 h-4 text-[#8A6D43] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
