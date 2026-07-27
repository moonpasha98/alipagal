import React, { useState } from 'react';

interface NavbarProps {
  onOpenBooking?: () => void;
  onBookNow?: () => void;
  openModal?: () => void;
  setIsBookingOpen?: (open: boolean) => void;
  [key: string]: any; // Accepts any extra props passed from App.tsx
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // App.tsx se aane wale kisi bhi function ko auto-detect karega
  const handleBooking = 
    props.onOpenBooking || 
    props.onBookNow || 
    props.openModal || 
    (props.setIsBookingOpen ? () => props.setIsBookingOpen(true) : undefined);

  return (
    <nav className="bg-[#111111]/90 backdrop-blur-md text-white sticky top-0 z-40 border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="#" className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white">
                MOON PASHA
              </span>
              <span className="text-[10px] text-[#AA771C] uppercase tracking-[0.25em] font-medium -mt-1">
                Makeup Studio
              </span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#services" className="text-gray-300 hover:text-[#AA771C] transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-gray-300 hover:text-[#AA771C] transition-colors">
              Portfolio
            </a>
            <a href="#about" className="text-gray-300 hover:text-[#AA771C] transition-colors">
              About Us
            </a>
            <a href="#faq" className="text-gray-300 hover:text-[#AA771C] transition-colors">
              FAQ
            </a>
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center">
            <button
              type="button"
              onClick={handleBooking}
              className="px-5 py-2.5 bg-[#AA771C] hover:bg-[#916216] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                /* Cross Icon */
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                /* Hamburger Icon */
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161616] border-b border-[#D4AF37]/20 px-4 pt-4 pb-6 space-y-3">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-300 hover:text-[#AA771C] text-sm py-2"
          >
            Services
          </a>
          <a
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-300 hover:text-[#AA771C] text-sm py-2"
          >
            Portfolio
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-300 hover:text-[#AA771C] text-sm py-2"
          >
            About Us
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-300 hover:text-[#AA771C] text-sm py-2"
          >
            FAQ
          </a>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (handleBooking) handleBooking();
              }}
              className="w-full py-3 bg-[#AA771C] hover:bg-[#916216] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all text-center cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// Supporting both export types
export default Navbar;
