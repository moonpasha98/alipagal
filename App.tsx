import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Gallery from './components/Gallery';

export default function App() {
  return (
    <div className="bg-[#FAF8F5] text-[#1F1F1F] min-h-screen font-poppins">
      <Navbar onOpenBooking={() => alert('Booking system updating soon!')} />
      <Hero onOpenBooking={() => alert('Booking system updating soon!')} />
      <Gallery />
    </div>
  );
}
