export interface AdminBookingKPI {
  id: string;
  title: string;
  value: string;
  badgeText?: string;
  percentage?: string;
  iconName: string;
  bgColor: string;
  iconColor: string;
}

export type AdminBookingServiceType = 'Hotel' | 'Umrah Package' | 'Transport' | 'Experience' | 'Airport Service';

export type AdminBookingStatus = 'Confirmed' | 'Pending' | 'Cancelled' | 'Refunded';

export interface AdminBookingItem {
  id: string;
  customer: {
    name: string;
    email: string;
    avatar?: string;
    phone?: string;
  };
  service: {
    type: AdminBookingServiceType;
    category: string;
    sublabel: string;
    icon: string;
    thumbnail?: string;
    rating?: number;
    reviewCount?: string;
  };
  details: {
    title: string;
    subtitle: string;
    checkIn?: string;
    checkOut?: string;
    rooms?: string;
    guestName?: string;
    specialRequest?: string;
  };
  date: string;
  amount: string;
  status: AdminBookingStatus;
  payment: {
    status: 'Paid' | 'Awaiting Payment' | 'Refunded';
    method?: string;
    cardLast4?: string;
    refundAmount?: string;
    paidAt?: string;
  };
}

export interface AdminBookingTrendPoint {
  label: string;
  total: number;
  confirmed: number;
  pending: number;
  cancelled: number;
}

export interface AdminBookingCategoryShare {
  name: string;
  count: string;
  percentage: number;
  color: string;
}
