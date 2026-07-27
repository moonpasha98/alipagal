import React from 'react';

interface NavbarProps {
  onOpenBooking: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  return (
    <nav className="bg-[#111111] text-[#D4AF37] sticky top-0 z-50 shadow-md border-b border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Base64 Logo Image */}
          <img 
            src="APNA_BASE64_TEXT_YAHAN_PASTE_KAREIN" 
            alt="The Bridal Villa Logo" 
            className="h-12 w-auto object-contain max-w-[150px]"
          />
          <div>
            <h1 className="font-serif text-lg sm:text-xl font-bold tracking-wider text-[#F3E5AB]">
              The Bridal Villa
            </h1>
            <p className="text-[10px] text-gray-300 tracking-widest uppercase">
              Makeup Studio By Nandini Dhingra
            </p>
          </div>
        </div>

        <div>
          <button
            onClick={onOpenBooking}
            type="button"
            className="bg-gradient-to-r from-[#D4AF37] to-[#AA771C] text-black font-semibold text-xs sm:text-sm px-4 py-2 rounded-full shadow-lg hover:opacity-90 transition"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
