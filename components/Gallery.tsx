import React from 'react';

const galleryImages = [
  {
    id: 1,
    title: "Bridal Look 1",
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Engagement Look",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Party Glam Look",
    url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800"
  }
];

const Gallery: React.FC = () => {
  return (
    <section className="py-16 bg-[#FAF8F5] text-[#111111]" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold text-[#AA771C] uppercase tracking-widest mb-2">
          Our Portfolio
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111] mb-4">
          Bridal Masterpieces
        </h2>
        <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-10"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="relative group overflow-hidden rounded-2xl shadow-sm border border-[#D4AF37]/30 bg-white h-80"
            >
              <img 
                src={image.url} 
                alt={image.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white font-serif text-lg font-medium tracking-wide">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
