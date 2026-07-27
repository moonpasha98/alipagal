import React from 'react';

interface ServicesProps {
  onOpenBooking: () => void;
}

const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const serviceList = [
    {
      title: "HD Bridal Makeup",
      price: "₹15,000 - ₹25,000",
      desc: "Flawless, long-lasting high-definition makeup designed specifically for wedding day cameras and lighting.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Party & Guest Makeup",
      price: "₹3,500 - ₹6,000",
      desc: "Get ready to turn heads at receptions, cocktail parties, or family celebrations with glowing glam looks.",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Engagement & Reception Look",
      price: "₹10,000 - ₹18,000",
      desc: "Sophisticated and elegant makeover tailored to match your outfit and jewelry for pre-wedding functions.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Pre-Bridal Package",
      price: "₹8,000 onwards",
      desc: "Complete skin glow treatments, facials, hair spa, and pampering sessions leading up to the big day.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#AA771C] uppercase tracking-widest mb-2">
            Our Expertise
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#111111]">
            Professional Makeup Services & Prices
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceList.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#D4AF37]/20 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-[#D4AF37] px-3 py-1 rounded-full text-xs font-semibold">
                    {service.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-[#111111] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 bg-[#111111] hover:bg-[#AA771C] text-white text-sm font-medium rounded-xl transition-colors shadow-sm"
                >
                  Book This Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
