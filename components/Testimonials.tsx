import React from 'react';

interface Review {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Ananya Sharma',
    role: 'Bridal Makeup Client',
    comment: 'The Bridal Villa team made me look so elegant and natural on my special day! Absolutely loved their work.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
  },
  {
    id: 2,
    name: 'Priya Verma',
    role: 'Party Makeup Client',
    comment: 'The look stayed intact the whole night! Got so many compliments at my best friend’s engagement.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300',
  },
  {
    id: 3,
    name: 'Riya Gupta',
    role: 'Engagement Makeup Client',
    comment: 'Very professional, punctual, and used premium quality products. Highly recommend Nandini Dhingra!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=300',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#F5ECE5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1F1F1F] font-bold">
            What My Clients Say
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from happy brides and clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-2xl shadow-sm border border-amber-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-4 mb-6 pb-4 border-b border-gray-100">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#D4AF37]"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{review.name}</h3>
                    <p className="text-xs text-gray-500">{review.role}</p>
                  </div>
                </div>

                <div className="flex text-amber-500 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic text-sm">"{review.comment}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
