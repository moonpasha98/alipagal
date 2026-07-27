import React from 'react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  return (
    <nav className="bg-[#111111] text-[#D4AF37] sticky top-0 z-50 shadow-md border-b border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Name & Tagline */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full border-2 border-[#D4AF37] flex items-center justify-center bg-black text-[#D4AF37] font-serif font-bold text-sm">
            BV
          </div>
          <div>
            <h1 className="font-serif text-lg sm:text-xl font-bold tracking-wider text-[#F3E5AB]">
              The Bridal Villa
            </h1>
            <p className="text-[10px] text-gray-300 tracking-widest uppercase">
              Makeup Studio By Nandini Dhingra
            </p>
          </div>
        </div>

        {/* Book Appointment Button */}
        <div>
          <button
            onClick={onOpenBooking}
            className="bg-gradient-to-r from-[#D4AF37] to-[#AA771C] text-black font-semibold text-xs sm:text-sm px-4 py-2 rounded-full shadow-lg hover:opacity-90 transition"
          >
            Book Appointment
          </button>
        </div>

      </div>
    </nav>
  );
}
