import React, { useState } from 'react';
import { Navbar } from './components/Navbar';

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
      <Navbar onOpenBooking={handleOpenBooking} />
      <div className="flex items-center justify-center h-[calc(100vh-80px)]">
        <h1 className="text-2xl font-bold">Navbar Added Successfully! 🎉</h1>
      </div>
    </div>
  );
}
