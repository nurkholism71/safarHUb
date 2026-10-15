export type UserType = 'Customer' | 'Umrah Traveler' | 'Premium' | 'Corporate' | 'Agent' | 'Other';

export type UserStatus = 'Active' | 'Inactive' | 'Pending' | 'Blocked';

export interface AdminUserRecord {
  id: string;
  name: string;
  username: string;
  avatar: string;
  email: string;
  phone: string;
  country: string;
  countryFlag: string;
  userType: UserType;
  status: UserStatus;
  totalBookings: number;
  totalSpending: string;
  totalSpendingNumber: number;
  joinedDate: string;
  isVerified?: boolean;
}

export interface AdminUserKpi {
  id: string;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  subtitle: string;
  iconName: string;
  bgColorClass?: string;
  textColorClass?: string;
}

export interface AdminUserSegment {
  id: string;
  label: string;
  iconName: string;
  count?: number;
}

export interface AdminUserGrowthPoint {
  month: string;
  users: number;
}

export interface AdminUserTypeShare {
  type: string;
  percentage: number;
  count: string;
  color: string;
}

export interface AdminUserCountryShare {
  country: string;
  percentage: number;
  count: string;
  flag: string;
  color: string;
}

export interface AdminRecentRegistration {
  id: string;
  name: string;
  avatar: string;
  timeAgo: string;
  country: string;
  flag: string;
}

export interface AdminTopUser {
  id: string;
  rank: number;
  name: string;
  avatar: string;
  bookingsCount?: number;
  spending: string;
}

export interface AdminUserActivityLog {
  id: string;
  userName: string;
  action: string;
  timeAgo: string;
  iconName: string;
  iconColor: string;
}
