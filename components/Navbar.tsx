import React from 'react';

interface NavbarProps {
  onOpenBooking: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  return (
    <nav className="bg-[#FAF8F5] text-[#111111] sticky top-0 z-50 shadow-sm border-b border-[#D4AF37]/20 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Section */}
        <div className="flex items-center space-x-3">
          {/* Logo Container with Image + Styled Fallback */}
          <div className="relative flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="The Bridal Villa Logo" 
              className="h-12 w-auto object-contain max-w-[150px]"
              onError={(e) => {
                // If /logo.png fails, show clean luxury badge
                e.currentTarget.style.display = 'none';
                const fallback = document.getElementById('navbar-logo-badge');
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div 
              id="navbar-logo-badge" 
              style={{ display: 'none' }}
              className="w-11 h-11 rounded-full border-2 border-[#AA771C] bg-[#111111] items-center justify-center text-[#D4AF37] font-serif font-bold text-base shadow-md"
            >
              BV
            </div>
          </div>

          <div>
            <h1 className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#111111]">
              The Bridal Villa
            </h1>
            <p className="text-[10px] text-[#AA771C] font-semibold tracking-widest uppercase">
              Makeup Studio By Nandini Dhingra
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div>
          <button
            onClick={onOpenBooking}
            type="button"
            className="bg-[#111111] hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-md transition-all duration-300 border border-[#D4AF37]/50"
          >
            Book Appointment
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
