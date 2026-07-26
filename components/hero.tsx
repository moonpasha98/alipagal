import React from 'react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <div className="relative bg-[#FAF8F5] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <span className="text-sm font-semibold tracking-wider text-[#D4AF37] uppercase">
            Professional Makeup Artist
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-[#1F1F1F] leading-tight">
            Enhance Your Natural Beauty
          </h1>
          <p className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
            Specializing in Bridal, HD, and Event makeup. Making your special moments unforgettable with elegance and glam.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3 bg-[#1F1F1F] text-white font-medium rounded-full hover:bg-[#D4AF37] transition duration-300 shadow-lg"
            >
              Book Appointment
            </button>
          </div>
        </div>

        {/* Right Column - Image Card */}
        <div className="relative flex justify-center">
          <div className="w-full max-w-md h-[400px] md:h-[500px] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl relative">
            <img
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80"
              alt="Bridal Makeup"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
