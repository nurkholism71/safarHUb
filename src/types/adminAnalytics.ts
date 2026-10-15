export type AnalyticsTab = 
  | 'overview' 
  | 'bookings' 
  | 'revenue' 
  | 'users' 
  | 'services' 
  | 'destinations' 
  | 'marketing' 
  | 'insights' 
  | 'operations' 
  | 'financial' 
  | 'export';

export interface AnalyticsKpi {
  id: string;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  subtitle: string;
  iconName: string;
  bgColorClass: string;
  iconColorClass: string;
}

export interface RevenueTrendPoint {
  date: string;
  revenue: number; // in SAR
  bookings: number;
}

export interface ServiceShareItem {
  name: string;
  percentage: number;
  color: string;
}

export interface TopDestinationItem {
  id: string;
  name: string;
  image: string;
  bookings: number;
  barColor?: string;
}

export interface MonthlyBookingItem {
  month: string;
  umroh: number;
  hotels: number;
  transport: number;
  experiences: number;
}

export interface UserGrowthPoint {
  month: string;
  newUsers: number;
  activeUsers: number;
}

export interface DemographicItem {
  country: string;
  percentage: number;
  color: string;
}

export interface TopPackageItem {
  id: string;
  rank: number;
  name: string;
  image: string;
  bookings: number;
  revenue: string;
  rating: number;
}

export interface TopCustomerItem {
  id: string;
  rank: number;
  name: string;
  avatar: string;
  totalBookings: number;
  totalSpending: string;
}

export interface SalesChannelItem {
  id: string;
  name: string;
  iconName: string;
  percentage: number;
  color: string;
}
