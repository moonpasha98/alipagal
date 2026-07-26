import React, { useState } from 'react';
import * as NavbarModule from './components/Navbar';
import * as HeroModule from './components/Hero';

const NavbarComponent = (NavbarModule as any).Navbar || (NavbarModule as any).default;
const HeroComponent = (HeroModule as any).Hero || (HeroModule as any).default;

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
      {NavbarComponent && <NavbarComponent onOpenBooking={() => handleOpenBooking()} />}
      {HeroComponent && <HeroComponent onOpenBooking={() => handleOpenBooking()} />}
    </div>
  );
}
