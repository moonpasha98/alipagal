import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Hero } from './components/Hero';

export default function App() {
  const [isBookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('HD Bridal Makeup');

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="bg-[#FAF8F5] text-[#1F1F1F] min-h-screen font-poppins">
      {/* Agar Navbar default export hai toh direct component, nahi toh div fallback */}
      <Navbar onOpenBooking={handleOpenBooking} />
      <Hero onOpenBooking={handleOpenBooking} />
    </div>
  );
}
