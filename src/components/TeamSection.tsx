import { Instagram, MessageCircle } from 'lucide-react';
import { SALON_INFO, TEAM_MEMBERS } from '../data/salonData';
import { SalonImage } from './SalonImage';

interface TeamSectionProps {
  onSelectStylist: (stylistId: string) => void;
}

export function TeamSection({ onSelectStylist }: TeamSectionProps) {
  return (
    <section id="team" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E7E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#8A6D43] mb-3">
              Master Artisans
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#181615] leading-[1.12] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Meet Our Senior Stylists &amp; Specialists
            </h2>
          </div>

          <p className="text-sm text-[#554D45] max-w-md leading-relaxed">
            Each specialist brings nine to fourteen years of hands-on studio mastery across bridal
            artistry, corrective hair color, and precision men’s grooming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <article
              key={member.id}
              className="bg-[#FAF8F5] border border-[#E7E2DA] flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[3/4] w-full overflow-hidden bg-[#EAE3D7]">
                  <SalonImage
                    src={member.image}
                    alt={member.imageAlt}
                    fallbackTitle={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>

                <div className="p-6 sm:p-7">
                  {/* Clean unboxed metadata */}
                  <p className="text-xs text-[#6E655C] mb-2 tabular-nums">
                    <span className="font-semibold text-[#8A6D43]">
                      {member.experienceYears} Years Experience
                    </span>
                    <span className="mx-2" aria-hidden="true">
                      ·
                    </span>
                    <span>{member.specialty}</span>
                  </p>

                  <h3 className="font-display text-2xl sm:text-[26px] font-semibold text-[#181615]">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium text-[#554D45] mt-0.5 mb-4">
                    {member.designation}
                  </p>

                  <p className="text-sm text-[#4A433C] leading-relaxed">{member.bio}</p>
                </div>
              </div>

              <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-[#EFEAE2] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <a
                    href={member.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on Instagram`}
                    className="inline-flex items-center justify-center w-9 h-9 border border-[#E2DAD0] text-[#4A433C] hover:text-[#181615] hover:border-[#9A7B4F] transition-colors"
                  >
                    <Instagram className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <a
                    href={SALON_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Consult ${member.name} on WhatsApp`}
                    className="inline-flex items-center justify-center w-9 h-9 border border-[#E2DAD0] text-[#4A433C] hover:text-[#181615] hover:border-[#9A7B4F] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectStylist(member.id)}
                  className="px-4 py-2 text-xs font-semibold border border-[#181615] text-[#181615] hover:bg-[#181615] hover:text-[#FAF8F5] transition-colors cursor-pointer whitespace-nowrap"
                >
                  Book with {member.firstName}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
