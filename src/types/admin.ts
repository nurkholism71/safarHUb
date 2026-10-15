export interface AdminKpi {
  id: string;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  iconName: string;
  bgColor: string;
  iconColor: string;
}

export interface BookingStatusBreakdown {
  status: string;
  percentage: number;
  count: number;
  color: string;
}

export interface ServicePerformance {
  name: string;
  percentage: number;
  count: number;
  revenue: string;
  color: string;
}

export interface LiveActivityItem {
  id: string;
  title: string;
  subtitle: string;
  timeAgo: string;
  iconType: 'booking' | 'user' | 'payment' | 'support' | 'review';
  iconBg: string;
  iconColor: string;
}

export interface RecentBookingItem {
  id: string;
  customerName: string;
  customerAvatar?: string;
  service: string;
  date: string;
  amount: string;
  status: 'Confirmed' | 'Pending' | 'Canceled' | 'Refunded';
}

export interface DestinationStat {
  rank: number;
  city: string;
  arabicName: string;
  bookings: string;
  share: number;
  image: string;
}

export interface QuickManageItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  color: string;
}

export interface TicketStatusBreakdown {
  status: string;
  percentage: number;
  count: number;
  color: string;
}
