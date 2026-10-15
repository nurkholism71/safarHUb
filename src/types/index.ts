export interface TripItem {
  id: string;
  type: 'hotel' | 'airport' | 'transport' | 'jastip';
  title: string;
  subtitle: string;
  date: string;
  status: 'Upcoming' | 'Confirmed' | 'Scheduled' | 'Processing' | 'Completed' | 'Cancelled';
  statusColor: 'yellow' | 'emerald' | 'blue' | 'purple' | 'slate';
  image: string;
  badge: string;
  details?: {
    location?: string;
    bookingRef?: string;
    guestCount?: number;
    vehicleType?: string;
    driverName?: string;
    driverPhone?: string;
    items?: string[];
    price?: string;
  };
}

export interface FlightItem {
  id: string;
  flightNo: string;
  airline: string;
  from: string;
  to: string;
  time: string;
  gate: string;
  terminal: string;
  status: 'Arrived' | 'On Time' | 'Delayed' | 'Boarding' | 'Scheduled';
  statusColor: string;
}

export interface MetricCardItem {
  id: string;
  title: string;
  value: string;
  growth: string;
  isPositive: boolean;
  icon: string;
  color: string;
  bgColor: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: string;
  badge?: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  subtitle: string;
  time: string;
  icon: string;
  iconColor: string;
  iconBg: string;
}

export interface CityPin {
  id: string;
  name: string;
  arabicName: string;
  x: number; // percentage on map
  y: number;
  activeHotels: number;
  activeTransfers: number;
  weather: string;
  temp: string;
  status: string;
  isHub?: boolean;
}
