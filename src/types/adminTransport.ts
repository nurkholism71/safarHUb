export interface AdminTransportKPI {
  id: string;
  title: string;
  value: string;
  badgeText: string;
  iconName: string;
  bgColor: string;
  iconColor: string;
}

export interface AdminTransportCategory {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  iconName: string;
}

export type TransportServiceType = 'Flight' | 'Bus' | 'Private Car' | 'Train' | 'Airport Transfer' | 'Car Rental';

export type TransportServiceStatus = 'Active' | 'Pending' | 'Inactive';

export interface AdminTransportItem {
  id: string;
  code: string;
  type: TransportServiceType;
  icon: string;
  route: string;
  provider: string;
  vehicle: string;
  price: string;
  status: TransportServiceStatus;
  bookingsCount: number;
}

export interface AdminTransportTrendPoint {
  label: string;
  flights: number;
  buses: number;
  cars: number;
  trains: number;
  airport: number;
}

export interface AdminTransportTypeShare {
  type: string;
  percentage: number;
  count: string;
  color: string;
}

export interface AdminPopularRoute {
  rank: number;
  from: string;
  to: string;
  bookings: string;
  image: string;
}
