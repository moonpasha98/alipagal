import React from 'react';

const Location: React.FC = () => {
  const studioAddress = "Kailsa Rd, near Mld Spices Company, Vivekanand Nagar, Amroha, Uttar Pradesh 244221";
  const googleMapsUrl = "https://maps.app.goo.gl/KailsaRdAmroha"; // Aap chahein toh yahan apna exact Google Maps share link bhi daal sakte hain

  return (
    <section className="py-20 px-4 bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-[#AA771C] uppercase tracking-widest mb-2">
            Find Us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#111111]">
            Visit Our Studio
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-3"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#D4AF37]/20 grid grid-cols-1 md:grid-cols-2">
          {/* Left Side: Details */}
          <div className="p-8 md:p-12 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#111111] mb-4">
                Moon Pasha Makeup Studio
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                Humare studio par aakar apna bridal ya party makeup trial lene ke liye ya direct services ke liye aap humein visit kar sakte hain.
              </p>

              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex items-start space-x-3">
                  <span className="text-[#AA771C] font-bold text-base">📍</span>
                  <span className="leading-relaxed">{studioAddress}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#AA771C] font-bold text-base">⏰</span>
                  <span>Monday - Sunday: 9:00 AM – 8:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#AA771C] font-bold text-base">📞</span>
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Kailsa+Rd,+near+Mld+Spices+Company,+Vivekanand+Nagar,+Amroha,+Uttar+Pradesh+244221" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full text-center py-3 bg-[#AA771C] text-white rounded-xl font-medium hover:bg-[#916216] transition-colors shadow-md text-sm"
              >
                Get Directions on Google Maps
              </a>
            </div>
          </div>

          {/* Right Side: Visual Box */}
          <div className="bg-gray-100 min-h-[300px] flex items-center justify-center relative p-6 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 text-center text-white p-6 bg-black/50 backdrop-blur-md rounded-xl border border-white/20">
              <p className="font-serif text-xl font-semibold mb-2">Book Your Visit</p>
              <p className="text-xs text-gray-200">Please call or WhatsApp before visiting to ensure availability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
