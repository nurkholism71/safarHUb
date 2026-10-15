export interface BookingItem {
  id: string;
  bookingCode: string;
  category: 'hotel' | 'transport' | 'airport' | 'umrah' | 'jastip' | 'flight';
  categoryLabel: string;
  title: string;
  dateRange: string;
  status: 'Upcoming' | 'Processing' | 'Completed' | 'Cancelled';
  statusColor: string;
  badgeLabel: string;
  image: string;
  priceSAR: number;
  specs: string[];
  jastipSteps?: { name: string; completed: boolean }[];
}

export interface BookingSummaryStats {
  total: number;
  upcoming: number;
  completed: number;
  processing: number;
  cancelled: number;
}

export interface RecommendedTripItem {
  id: string;
  title: string;
  priceSAR: number;
  unit?: string;
  image: string;
}
