import { useState } from 'react';
import { Clock } from 'lucide-react';
import {
  CurrencyCode,
  SALON_SERVICES,
  SERVICE_CATEGORIES,
  ServiceCategoryId,
  SalonService,
  formatPrice,
} from '../data/salonData';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

const CURRENCIES: CurrencyCode[] = ['PKR', 'USD', 'GBP'];

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ServiceCategoryId>('all');
  const [currency, setCurrency] = useState<CurrencyCode>('PKR');

  const filteredServices: SalonService[] =
    activeCategory === 'all'
      ? SALON_SERVICES
      : SALON_SERVICES.filter((service) => service.category === activeCategory);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F3EFE9] border-b border-[#E7E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Currency Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#8A6D43] mb-3">
              Curated Treatment Menu
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#181615] leading-[1.12] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Services &amp; Transparent Pricing
            </h2>
            <p className="text-[15px] text-[#554D45] mt-3 leading-relaxed">
              Every service includes an individual diagnostic consultation, luxury botanical prep,
              and post-treatment aftercare guidance.
            </p>
          </div>

          {/* Interactive Currency Selector (PKR / USD / GBP) */}
          <div className="flex items-center gap-3 self-start lg:self-auto shrink-0">
            <span className="text-xs font-medium text-[#554D45]">Currency:</span>
            <div
              role="group"
              aria-label="Select pricing currency"
              className="inline-flex items-center bg-[#FAF8F5] border border-[#DDD5C9] p-1"
            >
              {CURRENCIES.map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setCurrency(code)}
                  className={`px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    currency === code
                      ? 'bg-[#181615] text-[#FAF8F5]'
                      : 'text-[#554D45] hover:text-[#181615]'
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Service categories"
          className="flex flex-wrap items-center gap-2 pb-8 mb-8 border-b border-[#DFD8CE]"
        >
          {SERVICE_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2.5 text-xs sm:text-sm font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0 border ${
                  isActive
                    ? 'bg-[#181615] text-[#FAF8F5] border-[#181615]'
                    : 'bg-[#FAF8F5] text-[#3F3934] border-[#DDD5C9] hover:border-[#9A7B4F] hover:text-[#181615]'
                }`}
              >
                {category.id !== 'all' ? `${category.index}. ${category.label}` : category.label}
              </button>
            );
          })}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <article
              key={service.id}
              className="bg-[#FAF8F5] border border-[#E2DAD0] p-6 sm:p-7 flex flex-col justify-between transition-colors duration-200 hover:border-[#B6986A]"
            >
              <div>
                {/* Unboxed Metadata Line */}
                <div className="flex items-center justify-between gap-3 text-xs text-[#6E655C] mb-3">
                  <span className="font-medium text-[#8A6D43]">{service.categoryLabel}</span>
                  <span className="inline-flex items-center gap-1 tabular-nums shrink-0">
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                    {service.duration}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-semibold text-[#181615] leading-snug mb-2.5">
                  {service.name}
                </h3>

                <p className="text-sm text-[#554D45] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-5 border-t border-[#ECE6DD] flex items-center justify-between gap-4">
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-[#756C63]">
                    Starting from
                  </span>
                  <span className="text-lg font-semibold text-[#181615] tabular-nums">
                    {formatPrice(service.prices[currency], currency)}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectService(service.id)}
                  className="px-4 py-2 text-xs font-semibold bg-[#181615] text-[#FAF8F5] hover:bg-[#9A7B4F] hover:text-[#FAF8F5] transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A7B4F]"
                >
                  Book This
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
