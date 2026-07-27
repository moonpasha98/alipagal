import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "What is included in the HD Bridal Makeup package?",
      answer: "Our HD Bridal Makeup package includes complete skin preparation, HD foundation application, eye makeup with lashes, premium hairstyling, saree/dupatta draping, and finishing touch-ups to ensure you look flawless all day."
    },
    {
      question: "Do you provide trial makeup sessions?",
      answer: "Yes, we do provide trial sessions so you can finalize your look before the big day. You can discuss your preferences and skin type with our artist during the trial."
    },
    {
      question: "Do you travel to the venue or do we need to visit the studio?",
      answer: "We offer both options! You can visit our professional studio, or our artist team can travel directly to your wedding venue or home for your convenience."
    },
    {
      question: "How far in advance should I book my bridal appointment?",
      answer: "We recommend booking your bridal makeup at least 2 to 3 months in advance, especially during the peak wedding season, to secure your preferred date and time."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center space-y-3 mb-12">
        <span className="text-[#AA771C] text-xs font-semibold uppercase tracking-widest bg-[#AA771C]/10 px-4 py-1.5 rounded-full border border-[#AA771C]/30 inline-block">
          Got Questions?
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-sm max-w-md mx-auto">
          Yahan aapko apni booking aur makeup packages se jude har sawal ka jawab mil jayega.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-all"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center font-serif font-semibold text-base md:text-lg hover:text-[#AA771C] transition-colors"
            >
              <span>{faq.question}</span>
              <span className="text-xl font-bold text-[#AA771C] ml-4">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
