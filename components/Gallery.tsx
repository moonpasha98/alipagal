import React from 'react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80',
    title: 'Bridal Glam',
  },
  {
    url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80',
    title: 'Soft Glam',
  },
  {
    url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80',
    title: 'Hair Styling',
  },
  {
    url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80',
    title: 'Engagement Look',
  },
  {
    url: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&q=80',
    title: 'Editorial Makeup',
  },
  {
    url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80',
    title: 'Traditional Bridal',
  },
];

export const Gallery: React.FC = () => {
  return (
    <section className="py-16 bg-[#FAF8F5] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-semibold tracking-wider text-[#D4AF37] uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#1F1F1F] mt-2">
            Our Work Gallery
          </h2>
          <p className="text-gray-600 mt-4">
            A glimpse of our stunning makeovers and happy clients.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                <p className="text-white font-serif text-xl font-medium">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
