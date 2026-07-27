import React, { useState } from 'react';
import WhatsAppButton from './components/WhatsAppButton';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="bg-[#FAF8F5] text-[#1F1F1F] min-h-screen font-poppins">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
      <Hero onOpenBooking={() => setIsBookingOpen(true)} />
      <Services />
      <Gallery />
      <Testimonials />
      <WhatsAppButton />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
