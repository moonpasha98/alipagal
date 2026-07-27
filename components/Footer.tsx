import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] text-gray-300 pt-16 pb-8 px-4 border-t border-[#D4AF37]/30">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        
        {/* Brand Info */}
        <div className="space-y-4">
          <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
            Moon Pasha <span className="text-[#AA771C]">Makeup Studio</span>
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Aapke har khaas mauke (Bridal, Engagement & Party) ko aur bhi zyada khoobsurat banane ke liye professional makeup services.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="font-serif text-lg font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#services" className="hover:text-[#AA771C] transition-colors">Our Services</a></li>
            <li><a href="#gallery" className="hover:text-[#AA771C] transition-colors">Portfolio / Gallery</a></li>
            <li><a href="#faq" className="hover:text-[#AA771C] transition-colors">FAQs</a></li>
            <li><a href="#contact" className="hover:text-[#AA771C] transition-colors">Visit Studio</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="font-serif text-lg font-semibold text-white">Contact Us</h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            <strong className="text-white">Address:</strong><br />
            Kailsa Rd, near Mld Spices Company, Vivekanand Nagar, Amroha, Uttar Pradesh 244221
          </p>
          <p className="text-sm text-gray-400">
            <strong className="text-white">Phone:</strong> +91 98765 43210
          </p>
          <div className="pt-2 flex space-x-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white bg-[#AA771C] hover:bg-[#916216] px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
            >
              Instagram
            </a>
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white bg-green-600 hover:bg-green-700 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-6xl mx-auto pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Moon Pasha Makeup Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
