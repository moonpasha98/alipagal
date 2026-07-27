import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "Kya aap bridal trial makeup provide karte hain?",
      answer: "Haan, hum bridal trial provide karte hain taaki aap apne big day ke liye apna perfect look pehle se finalize kar sakein. Trial ke liye aap pehle se appointment book kar sakte hain."
    },
    {
      question: "Aap makeup ke liye kaun se brands use karte hain?",
      answer: "Hum sirf 100% authentic aur luxury high-end brands use karte hain jaise ki MAC, Huda Beauty, Bobbi Brown, NARS, Charlotte Tilbury, aur Forever52."
    },
    {
      question: "Booking confirm karne ke liye kitna advance dena hota hai?",
      answer: "Appointment confirm karne ke liye 30% advance payment deni hoti hai, jo ki non-refundable hoti hai. Bacha hua payment makeup complete hone ke baad kiya jata hai."
    },
    {
      question: "Kya aap venue par (destination makeup ke liye) travel karte hain?",
      answer: "Ji haan, hum bridal ya party makeup ke liye aapke venue (hotel, wedding hall ya ghar) par travel karte hain. Iske liye extra travel charges location ke hisab se hote hain."
    },
    {
      question: "Mujhe apni booking ke liye kitne din pehle contact karna chahiye?",
      answer: "Wedding season mein dates jaldi full ho jaati hain, isliye hum suggest karte hain ki aap kam se kam 1 ya 2 mahine pehle apni date secure kar lein."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-[#AA771C] uppercase tracking-widest mb-2">
            Got Questions?
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#111111]">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-3"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:border-[#D4AF37]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center bg-[#FAF8F5]/50 hover:bg-[#FAF8F5] transition-colors"
              >
                <span className="font-medium text-[#111111] text-base md:text-lg">
                  {faq.question}
                </span>
                <span className="text-[#AA771C] font-bold text-xl ml-4">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-white text-gray-600 text-sm md:text-base border-t border-gray-100 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
