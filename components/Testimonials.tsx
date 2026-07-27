import React from 'react';

interface Review {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Ananya Sharma',
    role: 'Bridal Makeup Client',
    comment: 'Pooja did my makeup for my wedding day and I was blown away! She made me look so elegant and natural. Highly recommended!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Verma',
    role: 'Party Makeup Client',
    comment: 'The look stayed intact the whole night without any creasing. Got so many compliments at my best friend’s engagement!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Riya Gupta',
    role: 'Engagement Makeup Client',
    comment: 'Very professional, punctual, and used premium quality products. Absolutely loved her soft glam touch!',
    rating: 5,
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
                <div className="flex text-amber-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{review.comment}"</p>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <h4 className="font-semibold text-gray-900">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
