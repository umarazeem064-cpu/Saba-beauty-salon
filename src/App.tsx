/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { TeamSection } from './components/TeamSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { SALON_SERVICES } from './data/salonData';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SALON_SERVICES[0].id);
  const [selectedStylistId, setSelectedStylistId] = useState<string>('any');

  const scrollToBooking = () => {
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    scrollToBooking();
  };

  const handleSelectStylist = (stylistId: string) => {
    setSelectedStylistId(stylistId);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#181615]">
      <Header onBookClick={scrollToBooking} />

      <main className="flex-1">
        <Hero onBookClick={scrollToBooking} />
        <AboutSection />
        <ServicesSection onSelectService={handleSelectService} />
        <TeamSection onSelectStylist={handleSelectStylist} />
        <GallerySection />
        <BookingSection
          preselectedServiceId={selectedServiceId}
          preselectedStylistId={selectedStylistId}
        />
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  );
}
