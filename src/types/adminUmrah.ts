export type UmrahPackageStatus = 'Active' | 'Full' | 'Closing Soon' | 'Draft' | 'Completed';
export type UmrahTier = 'Reguler' | 'Ekonomi' | 'VIP & Executive' | 'Keluarga' | 'Ramadhan' | 'Plus Turki' | 'Custom';

export interface AdminUmrahPackageItem {
  id: string;
  code: string;
  title: string;
  tier: UmrahTier;
  duration: string;
  departureCity: string;
  departureDate: string;
  returnDate: string;
  airline: {
    name: string;
    flightNo: string;
    route: string;
    class: string;
  };
  makkahHotel: {
    name: string;
    stars: number;
    distance: string;
    nights: number;
  };
  madinahHotel: {
    name: string;
    stars: number;
    distance: string;
    nights: number;
  };
  travelPartner: {
    name: string;
    licenseNo: string;
    verified: boolean;
    rating: number;
  };
  quota: number;
  bookedPilgrims: number;
  visaApproved: number;
  pricing: {
    quad: number;
    triple: number;
    double: number;
    currency: string;
  };
  status: UmrahPackageStatus;
  featured: boolean;
  image: string;
  inclusions: string[];
  mutawwif: string;
}

export interface AdminUmrahKpi {
  id: string;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  subtitle: string;
  iconName: string;
}

export interface AdminUmrahCategorySummary {
  id: string;
  name: string;
  iconName: string;
  activePackages: number;
  totalPilgrims: number;
  revenue: string;
}

export interface AdminUmrahPilgrimBooking {
  id: string;
  bookingCode: string;
  packageTitle: string;
  leadName: string;
  passportNo: string;
  phone: string;
  country: string;
  groupSize: number;
  departureCity: string;
  departureDate: string;
  totalAmount: number;
  currency: string;
  paymentStatus: 'Paid' | 'Partial' | 'Pending';
  visaStatus: 'Approved' | 'Processing' | 'Pending';
  manifestStatus: 'Ready' | 'Incomplete' | 'Checked-In';
}

export interface AdminUmrahDepartureBatch {
  id: string;
  batchCode: string;
  packageCode: string;
  flightCode: string;
  airline: string;
  departureDate: string;
  departureCity: string;
  route: string;
  totalPilgrims: number;
  capacity: number;
  status: 'Boarding Ready' | 'Manifest Open' | 'Finalizing Visas' | 'Departed';
  mutawwif: string;
}
