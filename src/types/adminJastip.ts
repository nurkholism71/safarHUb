export interface AdminJastipKPI {
  id: string;
  title: string;
  value: string;
  badgeText: string;
  iconName: string;
  bgColor: string;
  iconColor: string;
}

export interface AdminJastipCity {
  id: string;
  name: string;
  products: string;
  image: string;
}

export interface AdminJastipCategoryItem {
  id: string;
  title: string;
  iconName: string;
}

export interface AdminJastipOrderItem {
  id: string;
  code: string;
  customer: string;
  avatar: string;
  itemsCount: number;
  itemImages: string[];
  location: string;
  total: string;
  status: 'On Process' | 'Completed' | 'Pending' | 'Cancelled';
  date: string;
}

export interface AdminJastipPopularItem {
  rank: number;
  name: string;
  location: string;
  price: string;
  rating: number;
  reviewsCount: string;
  image: string;
}

export interface AdminJastipTrustedStore {
  id: string;
  name: string;
  location: string;
  category: string;
  rating: number;
  image: string;
}

export interface AdminJastipLocationShare {
  city: string;
  percentage: number;
  count: string;
  color: string;
}

export interface AdminJastipTrendPoint {
  label: string;
  total: number;
  completed: number;
  pending: number;
  cancelled: number;
}

export interface AdminJastipTopCategory {
  name: string;
  percentage: number;
  count: string;
  color: string;
}
