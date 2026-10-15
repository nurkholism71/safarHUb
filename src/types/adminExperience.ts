export type ExperienceStatus = 'Active' | 'Draft' | 'Full' | 'Inactive';

export interface AdminExperienceItem {
  id: string;
  code: string;
  title: string;
  category: string;
  location: string;
  duration: string;
  groupType: string;
  provider: {
    name: string;
    avatar: string;
    verified: boolean;
    rating: number;
  };
  pricePerPax: number;
  originalPrice?: number;
  currency: string;
  rating: number;
  reviewsCount: number;
  totalBookings: number;
  monthlyRevenue: number;
  capacity: number;
  bookedSlots: number;
  status: ExperienceStatus;
  image: string;
  included: string[];
  nextAvailableDate: string;
  languages: string[];
  featured: boolean;
  meetingPoint: string;
}

export interface AdminExperienceKpi {
  id: string;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  subtitle: string;
  iconName: string;
}

export interface AdminExperienceCategoryFilter {
  id: string;
  name: string;
  iconName: string;
  count: number;
  revenue: string;
}

export interface AdminExperienceBooking {
  id: string;
  bookingCode: string;
  experienceTitle: string;
  customerName: string;
  customerPhone: string;
  customerCountry: string;
  paxCount: number;
  totalAmount: number;
  currency: string;
  tourDate: string;
  timeSlot: string;
  status: 'Confirmed' | 'Completed' | 'Pending' | 'Cancelled';
  paymentStatus: 'Paid' | 'Pending' | 'Refunded';
}

export interface AdminExperienceDestinationSummary {
  id: string;
  city: string;
  activeExperiences: number;
  monthlyBookings: number;
  monthlyRevenue: string;
  growth: string;
  image: string;
}
