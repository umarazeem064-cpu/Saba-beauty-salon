import { ExternalLink, Star } from 'lucide-react';
import { CLIENT_TESTIMONIALS, SALON_INFO } from '../data/salonData';
import { SalonImage } from './SalonImage';

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 bg-[#F3EFE9] border-b border-[#E7E2DA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#8A6D43] mb-3">
              Client Experiences
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#181615] leading-[1.12] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Verified Words from Our Lahore Guests
            </h2>
          </div>

          <a
            href={SALON_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#181615] border border-[#D8D0C4] bg-[#FAF8F5] px-4 py-2.5 hover:border-[#9A7B4F] transition-colors self-start md:self-auto whitespace-nowrap"
          >
            <span>Find Us on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#8A6D43]" aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CLIENT_TESTIMONIALS.map((review) => (
            <article
              key={review.id}
              className="bg-[#FAF8F5] border border-[#E2DAD0] p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Accessible 5-Star Rating */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div
                    className="flex items-center gap-1 text-[#9A7B4F]"
                    aria-label={`${review.rating} out of 5 stars`}
                  >
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <Star
                        key={index}
                        className="w-4 h-4 fill-[#9A7B4F] text-[#9A7B4F]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#554D45] tabular-nums">
                    {review.rating}.0 / 5.0
                  </span>
                </div>

                <blockquote className="text-sm sm:text-[15px] text-[#2B2725] leading-relaxed mb-6">
                  “{review.quote}”
                </blockquote>
              </div>

              <div className="pt-5 border-t border-[#ECE6DD] flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-[#EAE3D7] shrink-0">
                  <SalonImage
                    src={review.image}
                    alt={review.imageAlt}
                    fallbackTitle={review.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#181615] truncate">{review.name}</p>
                  <p className="text-xs font-medium text-[#8A6D43] truncate">
                    {review.serviceTaken}
                  </p>
                  <p className="text-[11px] text-[#6E655C] truncate mt-0.5">
                    {review.visitContext}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
