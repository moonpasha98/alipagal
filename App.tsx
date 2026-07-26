import React, { useState } from 'react';
// Direct fallback layout agar Navbar export me mismatch ho
import * as NavbarModule from './components/Navbar';

const NavbarComponent = (NavbarModule as any).Navbar || (NavbarModule as any).default;

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
      {NavbarComponent ? (
        <NavbarComponent onOpenBooking={handleOpenBooking} />
      ) : (
        <div className="p-4 bg-gray-200 text-center">Navbar Loading Error</div>
      )}
      <div className="flex items-center justify-center h-[calc(100vh-80px)]">
        <h1 className="text-2xl font-bold">Navbar Connected Successfully! 🎉</h1>
      </div>
    </div>
  );
}
