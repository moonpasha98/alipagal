import React from 'react';

interface HeroProps {
  onOpenBooking: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative bg-[#111111] text-white py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
        <span className="text-[#AA771C] text-xs font-semibold uppercase tracking-widest bg-[#AA771C]/10 px-4 py-1.5 rounded-full border border-[#AA771C]/30">
          Professional Makeup Studio
        </span>
        <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight">
          Enhance Your Natural Beauty for Every Special Occasion
        </h1>
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
          Bridal, party, aur engagement ke liye professional makeup services jo aapke har pal ko yaadgar bana dein.
        </p>
        <div className="pt-4">
          <button
            onClick={onOpenBooking}
            className="px-8 py-4 bg-[#AA771C] hover:bg-[#916216] text-white font-medium rounded-2xl shadow-lg transition-colors text-sm uppercase tracking-wider"
          >
            Book Your Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
