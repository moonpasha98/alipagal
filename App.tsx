import React, { useState, useEffect } from 'react';

// ==========================================
// 1. ADMIN MODAL COMPONENT (EASIEST SETUP)
// ==========================================
function AdminModal({ 
  isOpen, 
  onClose, 
  currentPhone, 
  onSavePhone 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  currentPhone: string; 
  onSavePhone: (newPhone: string) => void; 
}) {
  const [pin, setPin] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [phoneInput, setPhoneInput] = useState(currentPhone);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Secret PIN set to 1234
    if (pin === '1234') {
      setIsAuthorized(true);
    } else {
      alert('Wrong PIN! Try again.');
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = phoneInput.replace(/[^0-9]/g, '');
    if (cleaned.length < 10) {
      alert('Please enter a valid 10-digit number!');
      return;
    }
    onSavePhone(cleaned);
    alert('WhatsApp Number Updated Successfully!');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm text-gray-900">
      <div className="bg-white w-full max-w-sm rounded-3xl p-6 shadow-2xl relative border border-[#C59B27]/30">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-lg font-bold"
        >
          ✕
        </button>

        {!isAuthorized ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-gray-900 text-center">Admin Login</h3>
            <p className="text-xs text-gray-500 text-center">Enter PIN to manage website settings</p>
            <input 
              type="password" 
              placeholder="Enter PIN (Default: 1234)" 
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-center font-bold tracking-widest text-lg focus:outline-none focus:border-[#C59B27]"
            />
            <button type="submit" className="w-full py-3 bg-[#111111] text-white text-xs font-semibold uppercase tracking-wider rounded-xl">
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleSave} className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-gray-900 text-center">Admin Dashboard</h3>
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                WhatsApp Phone Number
              </label>
              <input 
                type="text" 
                value={phoneInput} 
                onChange={(e) => setPhoneInput(e.target.value)}
                placeholder="e.g. 918864843330" 
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#C59B27]"
              />
              <span className="text-[10px] text-gray-400 mt-1 block">Include country code (e.g., 918864843330)</span>
            </div>

            <button type="submit" className="w-full py-3 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider rounded-xl shadow-md">
              Save Changes
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// ==========================================
// 2. BOOKING MODAL COMPONENT
// ==========================================
function BookingModal({ isOpen, onClose, ownerPhone }: { isOpen: boolean; onClose: () => void; ownerPhone: string }) {
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

    const text = `*New Booking Request - The Bridal Villa*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Service:* ${service}%0A*Date:* ${date}%0A*Notes:* ${message}`;

    window.open(`https://api.whatsapp.com/send?phone=${ownerPhone}&text=${text}`, '_blank');
    
    form.reset();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-[#FAF6F0] w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-[#D4AF37]/30 relative text-gray-900">
        <div className="bg-[#111111] text-white p-6 relative">
          <button 
            type="button" 
            onClick={onClose} 
            className="absolute top-5 right-5 text-gray-400 hover:text-white bg-white/10 w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold cursor-pointer transition-colors"
          >
            ✕
          </button>
          <p className="text-[#C59B27] text-xs font-semibold uppercase tracking-widest mb-1">
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
              <input type="text" name="name" required placeholder="Enter your name" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#C59B27]" />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Phone Number</label>
              <input type="tel" name="phone" required placeholder="Enter your mobile number" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#C59B27]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Select Service</label>
                <select name="service" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#C59B27]">
                  <option value="HD Bridal Makeup">HD Bridal Makeup</option>
                  <option value="Party & Guest Makeup">Party & Guest Makeup</option>
                  <option value="Engagement & Reception Look">Engagement & Reception Look</option>
                  <option value="Pre-Bridal Package">Pre-Bridal Package</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Preferred Date</label>
                <input type="date" name="date" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#C59B27]" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Special Notes</label>
              <textarea name="message" rows={3} placeholder="Any specific requirements..." className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#C59B27]"></textarea>
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
// 3. NAVBAR COMPONENT
// ==========================================
function Navbar({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#FAF6F0] text-gray-900 sticky top-0 z-40 border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <a href="#" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-[#111111] text-[#C59B27] flex items-center justify-center font-serif font-bold text-base tracking-wider border border-[#C59B27]/40 shadow-sm">
              BV
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
                The Bridal Villa
              </span>
              <span className="text-[9px] text-[#C59B27] uppercase tracking-[0.22em] font-semibold -mt-0.5">
                MAKEUP STUDIO BY NANDINI DHINGRA
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
            <a href="#services" className="hover:text-[#C59B27] transition-colors">Services</a>
            <a href="#faq" className="hover:text-[#C59B27] transition-colors">FAQs</a>
            <a href="#contact" className="hover:text-[#C59B27] transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center">
            <button 
              type="button" 
              onClick={onOpenBooking} 
              className="px-6 py-3 bg-[#111111] hover:bg-[#252525] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-md transition-all cursor-pointer"
            >
              Book Appointment
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-800">
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF6F0] border-b border-gray-200 px-4 pt-4 pb-6 space-y-3">
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-gray-800 text-sm py-2 font-medium">Services</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-gray-800 text-sm py-2 font-medium">FAQs</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-gray-800 text-sm py-2 font-medium">Contact</a>
          <button type="button" onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }} className="w-full py-3 bg-[#111111] text-white text-xs font-semibold uppercase tracking-wider rounded-full cursor-pointer">
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
}

// ==========================================
// 4. HERO COMPONENT
// ==========================================
function Hero({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <section className="relative bg-[#FAF6F0] text-gray-900 py-16 md:py-24 px-4 overflow-hidden border-b border-gray-200/50">
      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
        <span className="text-[#C59B27] text-xs font-semibold uppercase tracking-widest bg-[#C59B27]/10 px-4 py-2 rounded-full border border-[#C59B27]/20 inline-block">
          THE BRIDAL VILLA • BY NANDINI DHINGRA
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
          Enhance Your Natural Beauty <br className="hidden sm:inline" /> For Every Special Occasion
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto font-normal leading-relaxed">
          Bridal, party, aur engagement ke liye professional makeup services jo aapke har khas pal ko aur bhi yaadgar bana dein.
        </p>
        <div className="pt-4 flex justify-center">
          <button type="button" onClick={onOpenBooking} className="px-8 py-4 bg-[#111111] hover:bg-[#C59B27] text-white font-medium rounded-full shadow-lg transition-all text-xs uppercase tracking-widest cursor-pointer">
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 5. SERVICES COMPONENT
// ==========================================
function Services({ onOpenBooking }: { onOpenBooking: () => void }) {
  const servicesList = [
    { title: "HD Bridal Makeup", price: "PREMIUM LOOK", desc: "Complete bridal transformation including skin prep, hair styling, dupatta draping, and HD long-lasting finish." },
    { title: "Engagement & Reception", price: "GLAM LOOK", desc: "Elegant and radiant makeup tailored specifically for your special pre-wedding and post-wedding functions." },
    { title: "Party & Guest Makeup", price: "SOFT & SUBTLE", desc: "Glowy, soft glam makeup for wedding guests, bridesmaids, and special evening celebrations." }
  ];

  return (
    <section id="services" className="py-20 bg-[#FAF6F0] px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-2 mb-12">
          <span className="text-[#C59B27] text-xs font-semibold uppercase tracking-widest">Our Offerings</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">Featured Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesList.map((srv, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200/80 space-y-4 hover:shadow-md transition-shadow">
              <span className="text-xs font-semibold text-[#C59B27] uppercase tracking-wider">{srv.price}</span>
              <h3 className="font-serif text-2xl font-bold text-gray-900">{srv.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{srv.desc}</p>
              <button type="button" onClick={onOpenBooking} className="w-full py-3 bg-[#111111] hover:bg-[#C59B27] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors cursor-pointer">
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
// 6. FAQ COMPONENT
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
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <button type="button" onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full px-6 py-4 text-left flex justify-between items-center font-semibold text-base text-gray-900">
              <span>{faq.question}</span>
              <span className="text-xl text-[#C59B27]">{openIndex === index ? '−' : '+'}</span>
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
// 7. FOOTER COMPONENT
// ==========================================
function Footer({ ownerPhone, onOpenAdmin }: { ownerPhone: string; onOpenAdmin: () => void }) {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${ownerPhone}`;

  return (
    <footer id="contact" className="bg-[#111111] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 pb-12">
        
        <div className="space-y-4">
          <h3 className="font-serif text-2xl font-bold">
            The Bridal Villa <span className="text-[#C59B27]">Makeup Studio</span>
          </h3>
          <p className="text-gray-400 text-xs text-[#C59B27] uppercase tracking-wider font-semibold -mt-2">
            By Nandini Dhingra
          </p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm pt-1">
            Aapke har khaas mauke (Bridal, Engagement & Party) ko aur bhi zyada khoobsurat banane ke liye professional makeup services.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-serif text-lg font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#services" className="hover:text-[#C59B27] transition-colors">Our Services</a></li>
            <li><a href="#faq" className="hover:text-[#C59B27] transition-colors">FAQs</a></li>
            <li><a href="#contact" className="hover:text-[#C59B27] transition-colors">Visit Studio</a></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-serif text-lg font-semibold text-white">Contact Us</h4>
          <p className="text-sm text-gray-400">
            <strong className="text-white">Address:</strong><br />
            Kailsa Rd, near Mld Spices Company, Vivekanand Nagar, Amroha, Uttar Pradesh 244221
          </p>
          <p className="text-sm text-gray-400">
            <strong className="text-white">Phone:</strong> +{ownerPhone}
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

      <div className="text-center text-xs text-gray-500 border-t border-gray-800 pt-6 flex justify-between items-center max-w-7xl mx-auto px-4">
        <span>© 2026 The Bridal Villa Makeup Studio. All rights reserved.</span>
        <button onClick={onOpenAdmin} className="text-gray-600 hover:text-gray-400 text-[11px] underline">
          Admin Login
        </button>
      </div>
    </footer>
  );
}

// ==========================================
// 8. MAIN APP COMPONENT
// ==========================================
export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [ownerPhone, setOwnerPhone] = useState('918864843330');

  // Local storage se phone number load karein
  useEffect(() => {
    const savedPhone = localStorage.getItem('bv_owner_phone');
    if (savedPhone) {
      setOwnerPhone(savedPhone);
    }
  }, []);

  const handleSavePhone = (newPhone: string) => {
    setOwnerPhone(newPhone);
    localStorage.setItem('bv_owner_phone', newPhone);
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-gray-900 font-sans antialiased relative">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
      <Hero onOpenBooking={() => setIsBookingOpen(true)} />
      <Services onOpenBooking={() => setIsBookingOpen(true)} />
      <FAQ />
      <Footer ownerPhone={ownerPhone} onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* Floating WhatsApp Button */}
      <a
        href={`https://api.whatsapp.com/send?phone=${ownerPhone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center"
        aria-label="WhatsApp Us"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
        </svg>
      </a>

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        ownerPhone={ownerPhone}
      />

      <AdminModal 
        isOpen={isAdminOpen} 
        onClose={() => setIsAdminOpen(false)} 
        currentPhone={ownerPhone}
        onSavePhone={handleSavePhone}
      />
    </div>
  );
}
