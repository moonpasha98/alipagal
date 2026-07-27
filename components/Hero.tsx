import React from 'react';

interface HeroProps {
  onOpenBooking?: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative bg-[#111111] text-white py-20 md:py-28 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#AA771C]/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
        <span className="text-[#AA771C] text-xs font-semibold uppercase tracking-widest bg-[#AA771C]/10 px-4 py-2 rounded-full border border-[#AA771C]/30 inline-block">
          Moon Pasha Makeup Studio
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
          Enhance Your Natural Beauty <br className="hidden sm:inline" /> For Every Special Occasion
        </h1>

        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
          Bridal, party, aur engagement ke liye professional makeup services jo aapke har khas pal ko aur bhi yaadgar bana dein.
        </p>

        <div className="pt-4 flex justify-center">
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-8 py-4 bg-[#AA771C] hover:bg-[#916216] text-white font-medium rounded-2xl shadow-lg transition-all duration-300 text-sm uppercase tracking-wider"
          >
            Book Your Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
