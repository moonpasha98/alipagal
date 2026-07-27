import React from 'react';

interface BookingModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  [key: string]: any;
}

export const BookingModal = ({ isOpen = true, onClose = () => {}, ...props }: BookingModalProps) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name') || '';
    const phone = formData.get('phone') || '';
    const service = formData.get('service') || '';
    const date = formData.get('date') || '';
    const message = formData.get('message') || 'None';

    // Direct WhatsApp Link With Your Number
    const ownerWhatsAppNumber = "918864843330"; 

    const text = `*New Booking Request*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Service:* ${service}%0A*Date:* ${date}%0A*Notes:* ${message}`;

    window.open(`https://wa.me/${ownerWhatsAppNumber}?text=${text}`, '_blank');
    
    form.reset();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-[#D4AF37]/30 relative">
        <div className="bg-[#111111] text-white p-6 relative">
          <button 
            type="button" 
            onClick={onClose} 
            className="absolute top-5 right-5 text-gray-400 hover:text-white bg-white/10 px-3 py-1 rounded-full text-sm font-bold"
          >
            ✕
          </button>
          <p className="text-[#AA771C] text-xs font-semibold uppercase tracking-widest mb-1">Moon Pasha Makeup Studio</p>
          <h3 className="font-serif text-2xl font-bold text-white">Book Your Appointment</h3>
        </div>

        <div className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Your Full Name</label>
              <input type="text" name="name" required placeholder="Enter your name" className="w-full px-4 py-3 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm" />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Phone Number</label>
              <input type="tel" name="phone" required placeholder="Enter your mobile number" className="w-full px-4 py-3 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Select Service</label>
                <select name="service" className="w-full px-4 py-3 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm">
                  <option value="HD Bridal Makeup">HD Bridal Makeup</option>
                  <option value="Party & Guest Makeup">Party & Guest Makeup</option>
                  <option value="Engagement & Reception Look">Engagement & Reception Look</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Preferred Date</label>
                <input type="date" name="date" required className="w-full px-4 py-3 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Special Notes</label>
              <textarea name="message" rows={3} placeholder="Any specific requirements..." className="w-full px-4 py-3 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm"></textarea>
            </div>

            <button type="submit" className="w-full py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-semibold rounded-xl shadow-md">
              Send Booking via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
