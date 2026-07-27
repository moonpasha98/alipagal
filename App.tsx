import React, { useState } from 'react';
import Hero from './components/Hero';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#111111] font-sans">
      {/* Hero Section */}
      <Hero onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Services / Pricing Section Banner or Buttons */}
      <section className="py-16 px-4 max-w-6xl mx-auto text-center space-y-8">
        <h2 className="font-serif text-3xl md:text-4xl font-bold">
          Our Premium Services & Pricing
        </h2>
        <p className="text-gray-600 text-sm max-w-xl mx-auto">
          Choose from our exclusive bridal and party makeup packages tailored just for you.
        </p>
        
        {/* Sample Service Cards with Book Button */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200 space-y-4">
            <h3 className="font-serif text-xl font-bold">HD Bridal Makeup</h3>
            <p className="text-[#AA771C] font-semibold text-lg">₹15,000</p>
            <p className="text-gray-500 text-xs">Complete bridal look with HD finish, hairstyling, and draping.</p>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="w-full py-2.5 bg-[#111111] hover:bg-[#AA771C] text-white text-xs uppercase tracking-wider rounded-xl transition-colors font-medium"
            >
              Book Service
            </button>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200 space-y-4">
            <h3 className="font-serif text-xl font-bold">Party & Guest Makeup</h3>
            <p className="text-[#AA771C] font-semibold text-lg">₹4,500</p>
            <p className="text-gray-500 text-xs">Flawless party look suitable for receptions and celebrations.</p>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="w-full py-2.5 bg-[#111111] hover:bg-[#AA771C] text-white text-xs uppercase tracking-wider rounded-xl transition-colors font-medium"
            >
              Book Service
            </button>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200 space-y-4">
            <h3 className="font-serif text-xl font-bold">Engagement Look</h3>
            <p className="text-[#AA771C] font-semibold text-lg">₹10,000</p>
            <p className="text-gray-500 text-xs">Special glam look designed to make you shine on your engagement day.</p>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="w-full py-2.5 bg-[#111111] hover:bg-[#AA771C] text-white text-xs uppercase tracking-wider rounded-xl transition-colors font-medium"
            >
              Book Service
            </button>
          </div>
        </div>
      </section>

      {/* Booking Modal Component */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </div>
  );
}
