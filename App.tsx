import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { AcademySection } from './components/AcademySection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AppointmentForm } from './components/AppointmentForm';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingWidgets } from './components/FloatingWidgets';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('HD Bridal Makeup');

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="bg-[#FAF8F5] text-[#1F1F1F] min-h-screen font-poppins selection:bg-[#B76E79] selection:text-white relative">
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero Section */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* About The Experience */}
      <AboutSection />

      {/* Beauty Academy & Courses */}
      <AcademySection />

      {/* Transformation Portfolio Gallery */}
      <GallerySection />

      {/* Verified Bride Reviews */}
      <TestimonialsSection />

      {/* Interactive Reservation Form */}
      <AppointmentForm preselectedService={preselectedService} />

      {/* Studio Location & Map */}
      <LocationContactSection />

      {/* Footer */}
      <Footer />

      {/* Booking Modal Popup */}
      <BookingModal 
        isOpen={bookingModalOpen} 
        onClose={() => setBookingModalOpen(false)} 
        initialService={preselectedService}
      />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingWidgets />
    </div>
  );
}
