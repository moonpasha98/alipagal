import React from 'react';

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
          <div className="bg-white border border-[#D4AF37]/30 h-64 rounded-2xl flex items-center justify-center text-[#AA771C] font-serif shadow-sm">
            Bridal Look 1
          </div>
          <div className="bg-white border border-[#D4AF37]/30 h-64 rounded-2xl flex items-center justify-center text-[#AA771C] font-serif shadow-sm">
            Engagement Look
          </div>
          <div className="bg-white border border-[#D4AF37]/30 h-64 rounded-2xl flex items-center justify-center text-[#AA771C] font-serif shadow-sm">
            Party Glam Look
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
