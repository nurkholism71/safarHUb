export interface TransportVehicle {
  id: string;
  name: string;
  category: 'private_van' | 'van' | 'coaster' | 'luxury_car' | 'taxi' | 'bus';
  categoryLabel: string;
  badge?: string;
  badgeColor?: string;
  rating: number;
  reviewCount: number;
  seats: number;
  luggage: number;
  amenities: string[];
  price: number;
  image: string;
  driverType: string;
  freeCancellation?: boolean;
}

export interface TransportCategoryChip {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface PopularRoute {
  id: string;
  from: string;
  to: string;
  price: number;
  image: string;
}
