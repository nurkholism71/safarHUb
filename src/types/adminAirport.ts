export interface AdminAirportKPI {
  id: string;
  title: string;
  value: string;
  badgeText: string;
  iconName: string;
  bgColor: string;
  iconColor: string;
}

export interface AdminAirportCategory {
  id: string;
  title: string;
  bookings: string;
  image: string;
  iconName: string;
}

export interface AdminAirportTrendPoint {
  label: string;
  meetAssist: number;
  transfer: number;
  lounge: number;
  fastTrack: number;
  others: number;
}

export interface AdminAirportServiceShare {
  service: string;
  percentage: number;
  count: string;
  color: string;
}

export interface AdminTopAirport {
  rank: number;
  name: string;
  code: string;
  bookings: string;
  percentage: number;
  image: string;
}

export interface AdminLiveFlight {
  id: string;
  flight: string;
  status: 'On Time' | 'Delayed' | 'Boarding' | 'Departed';
  time: string;
  route: string;
}

export interface AdminAirportBookingItem {
  id: string;
  code: string;
  customer: string;
  avatar: string;
  service: string;
  serviceIcon: string;
  serviceColor: string;
  airport: string;
  flightDetails: string;
  dateTime: string;
  amount: string;
  status: 'Confirmed' | 'Pending' | 'Completed' | 'Cancelled';
}
