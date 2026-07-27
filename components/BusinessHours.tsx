import React from 'react';
import { Clock } from 'lucide-react';

const BusinessHours: React.FC = () => {
  const schedule = [
    { day: "Monday", time: "10:30 am – 7:00 pm", closed: false },
    { day: "Tuesday", time: "Closed", closed: true },
    { day: "Wednesday", time: "10:30 am – 7:00 pm", closed: false },
    { day: "Thursday", time: "10:30 am – 7:00 pm", closed: false },
    { day: "Friday", time: "10:30 am – 7:00 pm", closed: false },
    { day: "Saturday", time: "10:30 am – 7:00 pm", closed: false },
    { day: "Sunday", time: "10:30 am – 7:00 pm", closed: false },
  ];

  return (
    <section className="py-16 px-4 bg-[#FAF8F5] border-t border-b border-[#D4AF37]/20">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-[#D4AF37]/30">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#AA771C]/10 text-[#AA771C] mb-3">
            <Clock className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#111111]">
            Studio Working Hours
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Aap apne convenience ke hisaab se appointment fix kar sakte hain.
          </p>
        </div>

        <div className="space-y-3 max-w-xl mx-auto text-sm">
          {schedule.map((item, index) => (
            <div 
              key={index} 
              className="flex justify-between items-center p-3.5 bg-[#FAF8F5] rounded-xl border border-gray-100"
            >
              <span className="font-medium text-[#111111]">{item.day}</span>
              <span className={`font-semibold ${item.closed ? 'text-red-500' : 'text-[#AA771C]'}`}>
                {item.time}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 italic">
            * Early morning or special bridal bookings are available on request even on closed days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;
