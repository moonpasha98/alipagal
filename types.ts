export interface ServiceItem {
  id: string;
  title: string;
  category: 'bridal' | 'hair' | 'skin' | 'nails' | 'party';
  price: string;
  originalPrice?: string;
  image: string;
  duration: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface BridalPackage {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  originalPrice: string;
  badge?: string;
  description: string;
  includes: string[];
  duration: string;
}

export interface CourseItem {
  id: string;
  title: string;
  duration: string;
  level: string;
  fee: string;
  image: string;
  description: string;
  highlights: string[];
  batchStarts: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'real-brides' | 'engagement' | 'pre-bridal' | 'hair' | 'academy';
  image: string;
  location: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  event: string;
  rating: number;
  comment: string;
  date: string;
  image: string;
  location: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceCategory: string;
  specificService: string;
  eventDate: string;
  timeSlot: string;
  venueType: 'studio' | 'destination';
  additionalGuests: number;
  notes: string;
}
