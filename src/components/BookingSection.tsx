import { FormEvent, useEffect, useState } from 'react';
import { CalendarCheck, Clock, MapPin, MessageCircle, Phone } from 'lucide-react';
import {
  SALON_INFO,
  SALON_SERVICES,
  SERVICE_CATEGORIES,
  TEAM_MEMBERS,
  formatPrice,
} from '../data/salonData';

interface BookingSectionProps {
  preselectedServiceId: string;
  preselectedStylistId: string;
}

interface BookingConfirmation {
  referenceId: string;
  fullName: string;
  phone: string;
  whatsapp: string;
  serviceName: string;
  stylistName: string;
  date: string;
  time: string;
  notes: string;
}

const TIME_SLOTS = [
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:30 PM',
  '03:30 PM',
  '04:30 PM',
  '05:30 PM',
  '06:30 PM',
  '07:30 PM',
  '08:00 PM',
];

function getTodayDateString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function BookingSection({
  preselectedServiceId,
  preselectedStylistId,
}: BookingSectionProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [sameAsPhone, setSameAsPhone] = useState(false);
  const [serviceId, setServiceId] = useState(preselectedServiceId || SALON_SERVICES[0].id);
  const [stylistId, setStylistId] = useState(preselectedStylistId || 'any');
  const [date, setDate] = useState(getTodayDateString());
  const [time, setTime] = useState(TIME_SLOTS[2]);
  const [notes, setNotes] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [confirmation, setConfirmation] = useState<BookingConfirmation | null>(null);

  useEffect(() => {
    if (preselectedServiceId) {
      setServiceId(preselectedServiceId);
      setConfirmation(null);
    }
  }, [preselectedServiceId]);

  useEffect(() => {
    if (preselectedStylistId) {
      setStylistId(preselectedStylistId);
      setConfirmation(null);
    }
  }, [preselectedStylistId]);

  useEffect(() => {
    if (sameAsPhone) {
      setWhatsapp(phone);
    }
  }, [sameAsPhone, phone]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');

    const trimmedName = fullName.trim();
    const trimmedPhone = phone.trim();
    const trimmedWhatsapp = (sameAsPhone ? phone : whatsapp).trim();

    if (trimmedName.length < 2) {
      setErrorMessage('Please enter your full name so our reception team can reserve your chair.');
      return;
    }

    if (trimmedPhone.replace(/\D/g, '').length < 7) {
      setErrorMessage('Please enter a valid contact phone number.');
      return;
    }

    if (trimmedWhatsapp.replace(/\D/g, '').length < 7) {
      setErrorMessage('Please provide a WhatsApp number for appointment reminders.');
      return;
    }

    if (!date || !time) {
      setErrorMessage('Please select your preferred appointment date and time slot.');
      return;
    }

    const chosenService = SALON_SERVICES.find((s) => s.id === serviceId) ?? SALON_SERVICES[0];
    const chosenStylist =
      stylistId === 'any'
        ? 'Any Available Master Stylist'
        : (TEAM_MEMBERS.find((m) => m.id === stylistId)?.name ?? 'Any Available Master Stylist');

    const refNumber = `SBS-${Math.floor(1000 + Math.random() * 9000)}`;

    setConfirmation({
      referenceId: refNumber,
      fullName: trimmedName,
      phone: trimmedPhone,
      whatsapp: trimmedWhatsapp,
      serviceName: chosenService.name,
      stylistName: chosenStylist,
      date,
      time,
      notes: notes.trim(),
    });
  };

  const resetForm = () => {
    setConfirmation(null);
    setFullName('');
    setPhone('');
    setWhatsapp('');
    setSameAsPhone(false);
    setNotes('');
    setErrorMessage('');
  };

  const whatsappConfirmLink = confirmation
    ? `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
        `Hello Saba Beauty Salon, I just booked appointment ${confirmation.referenceId} for ${confirmation.serviceName} with ${confirmation.stylistName} on ${confirmation.date} at ${confirmation.time}. Name: ${confirmation.fullName}.`
      )}`
    : SALON_INFO.whatsappHref;

  return (
    <section id="booking" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E7E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#8A6D43] mb-3">
              Online Reservations
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#181615] leading-[1.12] tracking-tight mb-5"
              style={{ textWrap: 'balance' }}
            >
              Reserve Your Appointment
            </h2>
            <p className="text-[15px] text-[#4A433C] leading-relaxed mb-8">
              Select your preferred treatment, stylist, and date. Our front desk in Garhi Shahu
              confirms every booking via WhatsApp or direct call within 15 minutes during salon
              hours.
            </p>

            <div className="bg-[#F3EFE9] border border-[#E2DAD0] p-6 sm:p-7 space-y-5">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-4 h-4 text-[#8A6D43] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-semibold text-[#181615]">Salon Location</h3>
                  <p className="text-sm text-[#4A433C] mt-0.5">
                    {SALON_INFO.streetAddress}, {SALON_INFO.cityCountry}
                  </p>
                  <a
                    href={SALON_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs font-semibold text-[#8A6D43] hover:text-[#181615] underline underline-offset-4 mt-1.5"
                  >
                    Open Directions on Google Maps
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2DAD0] flex items-start gap-3.5">
                <Clock className="w-4 h-4 text-[#8A6D43] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-semibold text-[#181615]">Opening Hours</h3>
                  <p className="text-sm text-[#4A433C] mt-0.5 tabular-nums">
                    {SALON_INFO.hoursSummary}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2DAD0] flex items-start gap-3.5">
                <Phone className="w-4 h-4 text-[#8A6D43] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-semibold text-[#181615]">Direct Reception</h3>
                  <div className="flex flex-wrap items-center gap-4 mt-1">
                    <a
                      href={SALON_INFO.phoneHref}
                      className="text-sm font-medium text-[#181615] hover:text-[#8A6D43] tabular-nums"
                    >
                      {SALON_INFO.phoneDisplay}
                    </a>
                    <a
                      href={SALON_INFO.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8A6D43] hover:text-[#181615]"
                    >
                      <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive Booking Form */}
          <div className="lg:col-span-7">
            {confirmation ? (
              <div
                role="status"
                aria-live="polite"
                className="bg-[#F3EFE9] border border-[#C5A26D] p-7 sm:p-10"
              >
                <div className="flex items-center gap-3 text-[#8A6D43] mb-3">
                  <CalendarCheck className="w-6 h-6" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-widest">
                    Booking Request Received · Ref {confirmation.referenceId}
                  </span>
                </div>

                <h3 className="font-display text-3xl font-semibold text-[#181615] mb-3">
                  Thank You, {confirmation.fullName}
                </h3>

                <p className="text-sm text-[#4A433C] leading-relaxed mb-6">
                  Your appointment request at Saba Beauty Salon has been logged. Our reception team
                  will send your confirmation message to{' '}
                  <strong className="font-semibold text-[#181615] tabular-nums">
                    {confirmation.whatsapp}
                  </strong>
                  .
                </p>

                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5 border-y border-[#DFD8CE] text-sm mb-7">
                  <div>
                    <dt className="text-xs text-[#6E655C]">Selected Treatment</dt>
                    <dd className="font-semibold text-[#181615] mt-0.5">
                      {confirmation.serviceName}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#6E655C]">Requested Specialist</dt>
                    <dd className="font-semibold text-[#181615] mt-0.5">
                      {confirmation.stylistName}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#6E655C]">Date &amp; Time</dt>
                    <dd className="font-semibold text-[#181615] mt-0.5 tabular-nums">
                      {confirmation.date} · {confirmation.time}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#6E655C]">Contact Phone</dt>
                    <dd className="font-semibold text-[#181615] mt-0.5 tabular-nums">
                      {confirmation.phone}
                    </dd>
                  </div>
                  {confirmation.notes && (
                    <div className="sm:col-span-2">
                      <dt className="text-xs text-[#6E655C]">Special Notes</dt>
                      <dd className="text-[#2B2725] mt-0.5">{confirmation.notes}</dd>
                    </div>
                  )}
                </dl>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={whatsappConfirmLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold bg-[#181615] text-[#FAF8F5] hover:bg-[#322D2A] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span>Fast-Track via WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-5 py-3 text-xs font-semibold border border-[#181615] text-[#181615] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                  >
                    Book Another Appointment
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-[#FAF8F5] border border-[#E2DAD0] p-6 sm:p-9 space-y-5"
              >
                {errorMessage && (
                  <div
                    role="alert"
                    className="p-4 bg-[#FDF2F2] border border-[#E5B8B8] text-sm text-[#7D2424]"
                  >
                    {errorMessage}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="booking-fullname"
                    className="block text-xs font-semibold text-[#2B2725] mb-1.5"
                  >
                    Full Name *
                  </label>
                  <input
                    id="booking-fullname"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g., Ayesha Siddiqui"
                    className="w-full px-4 py-3 text-sm bg-white border border-[#D8D0C4] text-[#181615] placeholder:text-[#8E857B] focus:outline-none focus:border-[#9A7B4F]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="block text-xs font-semibold text-[#2B2725] mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+92 300 1234567"
                      className="w-full px-4 py-3 text-sm bg-white border border-[#D8D0C4] text-[#181615] placeholder:text-[#8E857B] tabular-nums focus:outline-none focus:border-[#9A7B4F]"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <label
                        htmlFor="booking-whatsapp"
                        className="block text-xs font-semibold text-[#2B2725]"
                      >
                        WhatsApp Number *
                      </label>
                      <label className="inline-flex items-center gap-1.5 text-[11px] text-[#554D45] cursor-pointer">
                        <input
                          type="checkbox"
                          checked={sameAsPhone}
                          onChange={(e) => setSameAsPhone(e.target.checked)}
                          className="accent-[#9A7B4F]"
                        />
                        <span>Same as phone</span>
                      </label>
                    </div>
                    <input
                      id="booking-whatsapp"
                      type="tel"
                      required
                      disabled={sameAsPhone}
                      value={sameAsPhone ? phone : whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="+92 333 1234567"
                      className="w-full px-4 py-3 text-sm bg-white border border-[#D8D0C4] text-[#181615] placeholder:text-[#8E857B] tabular-nums disabled:bg-[#F3EFE9] disabled:text-[#6E655C] focus:outline-none focus:border-[#9A7B4F]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="booking-service"
                      className="block text-xs font-semibold text-[#2B2725] mb-1.5"
                    >
                      Select Service *
                    </label>
                    <select
                      id="booking-service"
                      value={serviceId}
                      onChange={(e) => setServiceId(e.target.value)}
                      className="w-full px-4 py-3 text-sm bg-white border border-[#D8D0C4] text-[#181615] focus:outline-none focus:border-[#9A7B4F]"
                    >
                      {SERVICE_CATEGORIES.filter((c) => c.id !== 'all').map((cat) => (
                        <optgroup key={cat.id} label={cat.label}>
                          {SALON_SERVICES.filter((s) => s.category === cat.id).map((service) => (
                            <option key={service.id} value={service.id}>
                              {service.name} ({formatPrice(service.prices.PKR, 'PKR')})
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="booking-stylist"
                      className="block text-xs font-semibold text-[#2B2725] mb-1.5"
                    >
                      Select Stylist
                    </label>
                    <select
                      id="booking-stylist"
                      value={stylistId}
                      onChange={(e) => setStylistId(e.target.value)}
                      className="w-full px-4 py-3 text-sm bg-white border border-[#D8D0C4] text-[#181615] focus:outline-none focus:border-[#9A7B4F]"
                    >
                      <option value="any">Any Available Master Stylist</option>
                      {TEAM_MEMBERS.map((member) => (
                        <option key={member.id} value={member.id}>
                          {member.name} — {member.specialty}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="booking-date"
                      className="block text-xs font-semibold text-[#2B2725] mb-1.5"
                    >
                      Preferred Date *
                    </label>
                    <input
                      id="booking-date"
                      type="date"
                      required
                      min={getTodayDateString()}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-3 text-sm bg-white border border-[#D8D0C4] text-[#181615] tabular-nums focus:outline-none focus:border-[#9A7B4F]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="booking-time"
                      className="block text-xs font-semibold text-[#2B2725] mb-1.5"
                    >
                      Preferred Time *
                    </label>
                    <select
                      id="booking-time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-4 py-3 text-sm bg-white border border-[#D8D0C4] text-[#181615] tabular-nums focus:outline-none focus:border-[#9A7B4F]"
                    >
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="booking-notes"
                    className="block text-xs font-semibold text-[#2B2725] mb-1.5"
                  >
                    Special Notes / Hair &amp; Skin Requests
                  </label>
                  <textarea
                    id="booking-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Share hair length, bridal event date, skin sensitivities, or preferred style inspiration..."
                    className="w-full px-4 py-3 text-sm bg-white border border-[#D8D0C4] text-[#181615] placeholder:text-[#8E857B] focus:outline-none focus:border-[#9A7B4F]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 text-sm font-semibold bg-[#181615] text-[#FAF8F5] hover:bg-[#9A7B4F] transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A7B4F]"
                >
                  Confirm Appointment Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
