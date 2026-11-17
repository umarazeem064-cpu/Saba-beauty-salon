import { FormEvent, useState } from 'react';
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  Facebook,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
} from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export function Footer() {
  const [email, setEmail] = useState('');
  const [newsletterError, setNewsletterError] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNewsletterError('');

    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setNewsletterError('Please enter a valid email address.');
      return;
    }

    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer id="contact" className="bg-[#181615] text-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Brand & Address */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[#FAF8F5]">
                {SALON_INFO.name}
              </h2>
              <p className="text-xs uppercase tracking-widest text-[#D5B582] mt-1">
                {SALON_INFO.tagline}
              </p>
            </div>

            <p className="text-sm text-[#CFC7BD] leading-relaxed max-w-sm">
              Tailored hair styling, corrective color, luminous bridal artistry, and serene spa
              skincare on Allama Iqbal Road, Lahore.
            </p>

            <div className="space-y-3 pt-1 text-sm text-[#EAE4DC]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D5B582] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p>{SALON_INFO.streetAddress}</p>
                  <p className="text-[#B8AFA5]">{SALON_INFO.cityCountry}</p>
                  <a
                    href={SALON_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#D5B582] hover:text-white mt-1"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Direct Contact & Hours */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#D5B582] mb-3">
                Direct Support &amp; Bookings
              </h3>
              <div className="space-y-2.5 text-sm">
                <a
                  href={SALON_INFO.phoneHref}
                  className="flex items-center gap-2.5 text-[#FAF8F5] hover:text-[#D5B582] transition-colors tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#D5B582] shrink-0" aria-hidden="true" />
                  <span>{SALON_INFO.phoneDisplay}</span>
                </a>

                <a
                  href={SALON_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 mt-1 text-xs font-semibold bg-[#25211E] border border-[#3E3731] text-[#E5C99B] hover:border-[#D5B582] hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>WhatsApp Click-to-Chat ({SALON_INFO.whatsappDisplay})</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#D5B582] mb-3 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Opening &amp; Closing Hours</span>
              </h3>
              <ul className="space-y-1.5 text-sm text-[#CFC7BD] tabular-nums">
                {SALON_INFO.hoursDetailed.map((row) => (
                  <li key={row.days} className="flex items-center justify-between gap-4">
                    <span>{row.days}</span>
                    <span className="text-[#FAF8F5] font-medium">{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Newsletter & Socials */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#D5B582] mb-2">
                Seasonal Offers &amp; Care Journal
              </h3>
              <p className="text-sm text-[#CFC7BD] mb-4 leading-relaxed">
                Receive hair care rituals, bridal booking windows, and seasonal privilege invites.
              </p>

              {subscribed ? (
                <div
                  role="status"
                  className="p-4 bg-[#25211E] border border-[#9A7B4F] text-sm text-[#EAE4DC] flex items-start gap-2.5"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-[#D5B582] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>
                    Subscribed. Welcome to the Saba Beauty Salon care journal and priority
                    seasonal list.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} noValidate className="space-y-2.5">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <label htmlFor="footer-newsletter" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="footer-newsletter"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2.5 text-sm bg-[#25211E] border border-[#3E3731] text-[#FAF8F5] placeholder:text-[#8E857B] focus:outline-none focus:border-[#D5B582]"
                    />
                    <button
                      type="submit"
                      className="px-5 py-2.5 text-xs font-semibold bg-[#C5A26D] text-[#14110F] hover:bg-[#D5B582] transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </div>
                  {newsletterError && (
                    <p role="alert" className="text-xs text-[#F2A7A7]">
                      {newsletterError}
                    </p>
                  )}
                </form>
              )}
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#D5B582] mb-3">
                Connect With Us
              </h3>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={SALON_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium bg-[#25211E] border border-[#3E3731] text-[#EAE4DC] hover:border-[#D5B582] hover:text-white transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Instagram</span>
                </a>
                <a
                  href={SALON_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium bg-[#25211E] border border-[#3E3731] text-[#EAE4DC] hover:border-[#D5B582] hover:text-white transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Facebook</span>
                </a>
                <a
                  href={SALON_INFO.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium bg-[#25211E] border border-[#3E3731] text-[#EAE4DC] hover:border-[#D5B582] hover:text-white transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>TikTok</span>
                </a>
                <a
                  href={SALON_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium bg-[#25211E] border border-[#3E3731] text-[#EAE4DC] hover:border-[#D5B582] hover:text-white transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Developer Credit */}
        <div className="mt-14 pt-7 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E958C]">
          <p>
            © {new Date().getFullYear()} {SALON_INFO.name}, Garhi Shahu, Lahore. All rights
            reserved.
          </p>
          <p>Crafted with precision by Atelier Web Studio</p>
        </div>
      </div>
    </footer>
  );
}
