export interface HotelItem {
  id: string;
  name: string;
  arabicName?: string;
  city: string;
  stars: number;
  distance: string;
  badge?: string;
  badgeColor?: string;
  rating: number;
  ratingLabel: string;
  reviewCount: number;
  price: number;
  image: string;
  images?: string[];
  amenities: string[];
  roomTypes?: {
    name: string;
    bed: string;
    view: string;
    price: number;
    available: number;
  }[];
}

export interface CityFilterItem {
  id: string;
  name: string;
  hotelCount: string;
  image: string;
}
