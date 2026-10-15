export interface AirportServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  badge?: string;
  icon?: string;
}

export interface FeaturedAirportPackage {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  capacity: string;
  features: string[];
}

export interface PopularAirportItem {
  id: string;
  code: string;
  name: string;
  fullName: string;
  city: string;
  image: string;
}
