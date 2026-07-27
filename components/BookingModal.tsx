import React, { useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xjgnjlwk", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Kuch error aa gayi. Kripya dobara koshish karein.");
      }
    } catch (error) {
      alert("Network error. Kripya apna internet connection check karein.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-[#D4AF37]/30 relative">
        
        {/* Header */}
        <div className="bg-[#111111] text-white p-6 relative">
          <button 
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-white bg-white/10 px-3 py-1 rounded-full text-sm font-bold transition-colors"
          >
            ✕
          </button>
          <p className="text-[#AA771C] text-xs font-semibold uppercase tracking-widest mb-1">
            Moon Pasha Makeup Studio
          </p>
          <h3 className="font-serif text-2xl font-bold text-white">
            Book Your Appointment
          </h3>
          <p className="text-gray-400 text-xs mt-1">
            Apni details bhariye, hum aapse jald hi contact karenge.
          </p>
        </div>

        {/* Body / Form */}
        <div className="p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#111111]">
                Booking Request Sent!
              </h4>
              <p className="text-gray-600 text-sm max-w-xs mx-auto">
                Aapki booking request humein mil gayi hai. Hum jald hi aapko call ya WhatsApp par confirm karenge.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 bg-[#111111] hover:bg-[#AA771C] text-white text-sm font-medium rounded-xl transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Your Full Name
                </label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#AA771C]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Phone Number (WhatsApp preferred)
                </label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  placeholder="Enter your mobile number"
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#AA771C]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Select Service
                  </label>
                  <select 
                    name="service"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#AA771C]"
                  >
                    <option value="HD Bridal Makeup">HD Bridal Makeup</option>
                    <option value="Party & Guest Makeup">Party & Guest Makeup</option>
                    <option value="Engagement & Reception Look">Engagement & Reception Look</option>
                    <option value="Pre-Bridal Package">Pre-Bridal Package</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Preferred Date
                  </label>
                  <input 
                    type="date" 
                    name="date" 
                    required 
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#AA771C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Special Notes / Requirements (Optional)
                </label>
                <textarea 
                  name="message" 
                  rows={3} 
                  placeholder="Any specific look or timing requirements..."
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#AA771C]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-[#111111] hover:bg-[#AA771C] text-white text-sm font-medium rounded-xl transition-colors shadow-md flex items-center justify-center space-x-2"
              >
                {loading ? "Sending Request..." : "Confirm Booking Request"}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
