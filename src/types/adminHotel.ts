export interface AdminHotelKPI {
  id: string;
  title: string;
  value: string;
  badgeText?: string;
  percentage?: string;
  iconName: string;
  bgColor: string;
  iconColor: string;
}

export type AdminHotelStatus = 'Active' | 'Pending' | 'Inactive';

export interface AdminHotelItem {
  id: string;
  code: string;
  name: string;
  image: string;
  location: {
    city: string;
    area: string;
    fullAddress?: string;
  };
  stars: number;
  roomsCount: number;
  rating: number;
  reviewCount: number;
  status: AdminHotelStatus;
  ownerType: 'SafarHub' | 'Partner';
  ownerName?: string;
  contact?: string;
  email?: string;
  checkInTime?: string;
  checkOutTime?: string;
  gallery?: string[];
  amenities?: string[];
}

export interface AdminHotelTrendPoint {
  label: string;
  makkah: number;
  madinah: number;
  riyadh: number;
  jeddah: number;
  other: number;
}

export interface AdminHotelDestinationShare {
  city: string;
  percentage: number;
  count: number;
  color: string;
}

export interface AdminTopPerformingHotel {
  rank: number;
  name: string;
  city: string;
  rating: number;
  image: string;
}
