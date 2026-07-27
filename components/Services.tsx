import React from 'react';

const servicesList = [
  {
    id: 1,
    title: "HD Bridal Makeup",
    price: "₹12,500",
    description: "Flawless, high-definition makeup giving a natural and glowing look for your special day.",
    features: ["HD Base", "Long-lasting", "Hairstyling included"]
  },
  {
    id: 2,
    title: "Pro HD Bridal Makeup",
    price: "₹15,000",
    description: "Advanced professional HD makeup using premium luxury products for extra perfection.",
    features: ["Premium HD Base", "Waterproof finish", "Advanced Hairstyling", "Draping"]
  },
  {
    id: 3,
    title: "Airbrush Bridal Makeup",
    price: "₹18,000",
    description: "Flawless airbrush technique for an ultra-smooth, lightweight, and flawless finish.",
    features: ["Airbrush Application", "Sweat-proof", "Long-stay HD finish", "Complete Look"]
  },
  {
    id: 4,
    title: "Signature Bridal Makeup",
    price: "₹22,000",
    description: "Exclusive luxury signature makeup look customized personally to make you look like a queen.",
    features: ["Customized Look", "Top Luxury Brands", "Pre-bridal consultation perks", "Full HD/Airbrushing"]
  },
  {
    id: 5,
    title: "Party Makeup",
    price: "₹3,500",
    description: "Glamorous and elegant makeup look tailored for guests, cocktail parties, and family events.",
    features: ["Party Glam Base", "Eye makeup", "Light Hairstyling"]
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-white text-[#111111]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold text-[#AA771C] uppercase tracking-widest mb-2">
          Our Packages
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111] mb-4">
          Bridal & Party Services
        </h2>
        <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {servicesList.map((service) => (
            <div 
              key={service.id}
              className="bg-[#FAF8F5] border border-[#D4AF37]/30 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-xl font-bold text-[#111111]">
                    {service.title}
                  </h3>
                  <span className="text-lg font-bold text-[#AA771C]">
                    {service.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-700 flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full py-3 bg-[#111111] text-[#D4AF37] text-xs uppercase tracking-widest font-medium rounded-xl hover:bg-[#AA771C] hover:text-white transition-colors">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
