export interface JastipCategory {
  id: string;
  name: string;
  subName: string;
  image: string;
  count?: number;
}

export interface JastipProduct {
  id: string;
  name: string;
  subName: string;
  category: string;
  priceSAR: number;
  originalPriceSAR?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  location: string;
  badge?: string;
  weight: string;
  isPopular?: boolean;
}

export interface JastipRecentOrder {
  id: string;
  itemTitle: string;
  image: string;
  orderDate: string;
  status: 'Shopping' | 'Packed' | 'Shipped' | 'Delivered';
  statusColor: string;
}

export interface JastipShopPlace {
  id: string;
  city: string;
  tags: string;
  image: string;
  popularShops: string[];
}
