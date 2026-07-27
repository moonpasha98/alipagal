import React, { useState } from 'react';

// ==========================================
// 1. BOOKING MODAL COMPONENT
// ==========================================
function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get('name') as string) || '';
    const phone = (formData.get('phone') as string) || '';
    const service = (formData.get('service') as string) || '';
    const date = (formData.get('date') as string) || '';
    const message = (formData.get('message') as string) || 'None';

    const ownerWhatsAppNumber = "918864843330";

    const text = `*New Booking Request - The Bridal Villa*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Service:* ${service}%0A*Date:* ${date}%0A*Notes:* ${message}`;

    window.open(`https://api.whatsapp.com/send?phone=${ownerWhatsAppNumber}&text=${text}`, '_blank');
    
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
            className="absolute top-5 right-5 text-gray-400 hover:text-white bg-white/10 w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold cursor-pointer transition-colors"
          >
            ✕
          </button>
          <p className="text-[#AA771C] text-xs font-semibold uppercase tracking-widest mb-1">
            The Bridal Villa
          </p>
          <h3 className="font-serif text-2xl font-bold text-white">
            Book Your Appointment
          </h3>
        </div>

        <div className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Your Full Name</label>
              <input type="text" name="name" required placeholder="Enter your name" className="w-full px-4 py-3 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#AA771C]" />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Phone Number</label>
              <input type="tel" name="phone" required placeholder="Enter your mobile number" className="w-full px-4 py-3 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#AA771C]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Select Service</label>
                <select name="service" className="w-full px-4 py-3 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#AA771C]">
                  <option value="HD Bridal Makeup">HD Bridal Makeup</option>
                  <option value="Party & Guest Makeup">Party & Guest Makeup</option>
                  <option value="Engagement & Reception Look">Engagement & Reception Look</option>
                  <option value="Pre-Bridal Package">Pre-Bridal Package</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Preferred Date</label>
                <input type="date" name="date" required className="w-full px-4 py-3 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#AA771C]" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Special Notes</label>
              <textarea name="message" rows={3} placeholder="Any specific requirements..." className="w-full px-4 py-3 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#AA771C]"></textarea>
            </div>

            <button type="submit" className="w-full py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-semibold rounded-xl shadow-md cursor-pointer transition-colors">
              Send Booking via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 2. NAVBAR COMPONENT
// ==========================================
function Navbar({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#111111]/90 backdrop-blur-md text-white sticky top-0 z-40 border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#AA771C]/20 border border-[#AA771C] flex items-center justify-center font-serif font-bold text-[#AA771C] text-sm">
              BV
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-white">THE BRIDAL VILLA</span>
              <span className="text-[9px] text-[#AA771C] uppercase tracking-[0.2em] font-medium -mt-0.5">Makeup Studio by Nandini Dhingra</span>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#services" className="text-gray-300 hover:text-[#AA771C] transition-colors">Services</a>
            <a href="#faq" className="text-gray-300 hover:text-[#AA771C] transition-colors">FAQ</a>
            <a href="#contact" className="text-gray-300 hover:text-[#AA771C] transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center">
            <button type="button" onClick={onOpenBooking} className="px-5 py-2.5 bg-[#AA771C] hover:bg-[#916216] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer">
              Book Appointment
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-300 hover:text-white">
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161616] border-b border-[#D4AF37]/20 px-4 pt-4 pb-6 space-y-3">
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-[#AA771C] text-sm py-2">Services</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-[#AA771C] text-sm py-2">FAQ</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-[#AA771C] text-sm py-2">Contact</a>
          <button type="button" onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }} className="w-full py-3 bg-[#AA771C] hover:bg-[#916216] text-white text-xs font-semibold uppercase tracking-wider rounded-xl cursor-pointer">
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
}

// ==========================================
// 3. HERO COMPONENT
// ==========================================
function Hero({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <section className="relative bg-[#111111] text-white py-20 md:py-28 px-4 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#AA771C]/15 blur-3xl rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
        <span className="text-[#AA771C] text-xs font-semibold uppercase tracking-widest bg-[#AA771C]/10 px-4 py-2 rounded-full border border-[#AA771C]/30 inline-block">
          The Bridal Villa • By Nandini Dhingra
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
          Enhance Your Natural Beauty <br className="hidden sm:inline" /> For Every Special Occasion
        </h1>
        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
          Bridal, party, aur engagement ke liye professional makeup services jo aapke har khas pal ko aur bhi yaadgar bana dein.
        </p>
        <div className="pt-4 flex justify-center">
          <button type="button" onClick={onOpenBooking} className="px-8 py-4 bg-[#AA771C] hover:bg-[#916216] text-white font-medium rounded-2xl shadow-lg transition-all text-sm uppercase tracking-wider cursor-pointer">
            Book Your Appointment
          </button>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 4. SERVICES COMPONENT
// ==========================================
function Services({ onOpenBooking }: { onOpenBooking: () => void }) {
  const servicesList = [
    { title: "HD Bridal Makeup", price: "Premium Look", desc: "Complete bridal transformation including hair styling, dupatta draping, and HD finish." },
    { title: "Engagement & Reception", price: "Glam Look", desc: "Elegant and long-lasting makeup tailored specifically for your special pre-wedding functions." },
    { title: "Party & Guest Makeup", price: "Soft & Subtle", desc: "Glowy, radiant makeup for wedding guests, bridesmaids, and special parties." }
  ];

  return (
    <section id="services" className="py-20 bg-[#FAF8F5] px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-2 mb-12">
          <span className="text-[#AA771C] text-xs font-semibold uppercase tracking-widest">Our Offerings</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">Featured Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesList.map((srv, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4 hover:shadow-md transition-shadow">
              <span className="text-xs font-semibold text-[#AA771C] uppercase tracking-wider">{srv.price}</span>
              <h3 className="font-serif text-2xl font-bold text-gray-900">{srv.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{srv.desc}</p>
              <button type="button" onClick={onOpenBooking} className="w-full py-3 bg-[#111111] hover:bg-[#AA771C] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors cursor-pointer">
                Book Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 5. FAQ COMPONENT
// ==========================================
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: "What is included in the HD Bridal Makeup package?", answer: "Our HD Bridal Makeup package includes complete skin preparation, HD foundation application, eye makeup with lashes, premium hairstyling, and dupatta draping." },
    { question: "Do you provide trial makeup sessions?", answer: "Yes, we do provide trial sessions so you can finalize your look before the big day." },
    { question: "Do you travel to the venue?", answer: "Yes! We offer both studio visits and venue travel services for your convenience." }
  ];

  return (
    <section id="faq" className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center space-y-3 mb-12">
        <h2 className="font-serif text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <button type="button" onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full px-6 py-4 text-left flex justify-between items-center font-semibold text-base">
              <span>{faq.question}</span>
              <span className="text-xl text-[#AA771C]">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600 text-sm border-t border-gray-100 pt-3">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ==========================================
// 6. FOOTER COMPONENT
// ==========================================
function Footer() {
  const ownerNumber = "88648 43330";
  const whatsappUrl = "https://api.whatsapp.com/send?phone=918864843330";

  return (
    <footer id="contact" className="bg-[#111111] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 pb-12">
        
        {/* Brand Description */}
        <div className="space-y-4">
          <h3 className="font-serif text-2xl font-bold">
            The Bridal Villa <span className="text-[#AA771C]">Studio</span>
          </h3>
          <p className="text-gray-400 text-xs text-[#AA771C] uppercase tracking-wider font-semibold -mt-2">
            Makeup Studio By Nandini Dhingra
          </p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm pt-1">
            Aapke har khaas mauke (Bridal, Engagement & Party) ko aur bhi zyada khoobsurat banane ke liye professional makeup services.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="font-serif text-lg font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#services" className="hover:text-[#AA771C] transition-colors">Our Services</a></li>
            <li><a href="#faq" className="hover:text-[#AA771C] transition-colors">FAQs</a></li>
            <li><a href="#contact" className="hover:text-[#AA771C] transition-colors">Visit Studio</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="space-y-3">
          <h4 className="font-serif text-lg font-semibold text-white">Contact Us</h4>
          <p className="text-sm text-gray-400">
            <strong className="text-white">Address:</strong><br />
            Kailsa Rd, near Mld Spices Company, Vivekanand Nagar, Amroha, Uttar Pradesh 244221
          </p>
          <p className="text-sm text-gray-400">
            <strong className="text-white">Phone:</strong> +91 {ownerNumber}
          </p>

          <div className="flex space-x-3 pt-2">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold rounded-lg transition-colors inline-block"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </div>

      <div className="text-center text-xs text-gray-500 border-t border-gray-800/80 pt-6">
        © 2026 The Bridal Villa. All rights reserved.
      </div>
    </footer>
  );
}

// ==========================================
// 7. MAIN APP COMPONENT (DEFAULT EXPORT)
// ==========================================
export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased relative">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
      <Hero onOpenBooking={() => setIsBookingOpen(true)} />
      <Services onOpenBooking={() => setIsBookingOpen(true)} />
      <FAQ />
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=918864843330"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center"
        aria-label="WhatsApp Us"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
        </svg>
      </a>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
