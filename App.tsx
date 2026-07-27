import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Services from './components/Services';
import Gallery from './components/Gallery';

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
      <Navbar onOpenBooking={() => handleOpenBooking()} />
      <Hero onOpenBooking={() => handleOpenBooking()} />
      <Services onOpenBooking={(service) => handleOpenBooking(service)} />
      <Gallery />
    </div>
  );
}
