import React, { useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Bridal Makeup',
    date: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello! New Booking Inquiry:\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nDate: ${formData.date}\nNotes: ${formData.notes}`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-2xl border border-[#D4AF37]/30">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
        >
          &times;
        </button>

        <div className="text-center mb-6">
          <p className="text-xs font-semibold text-[#AA771C] uppercase tracking-widest mb-1">
            Secure Your Date
          </p>
          <h3 className="font-serif text-2xl font-bold text-[#111111]">
            Book An Appointment
          </h3>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-2"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
            <input 
              type="text" 
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#AA771C] text-sm"
              placeholder="Aapka naam"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number</label>
            <input 
              type="tel" 
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#AA771C] text-sm"
              placeholder="Mobile number"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Select Service</label>
            <select 
              value={formData.service}
              onChange={(e) => setFormData({...formData, service: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#AA771C] text-sm bg-white"
            >
              <option value="Bridal Makeup">Bridal Makeup</option>
              <option value="Party Makeup">Party Makeup</option>
              <option value="Engagement Makeup">Engagement Makeup</option>
              <option value="HD / Airbrush Makeup">HD / Airbrush Makeup</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Event Date</label>
            <input 
              type="date" 
              required
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#AA771C] text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Additional Notes (Optional)</label>
            <textarea 
              rows={2}
              value={formData.notes}
              onChange={(e) => setFormData({...formData, notes: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#AA771C] text-sm"
              placeholder="Venue location ya time..."
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full py-3 bg-[#AA771C] text-white rounded-lg font-medium hover:bg-[#916216] transition-colors shadow-md text-sm tracking-wide"
          >
            Send Booking Request via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
