export interface DealItem {
  id: string;
  badge: string;
  category: string;
  title: string;
  description: string;
  amenities?: string[];
  price: number;
  originalPrice?: number;
  priceUnit: string;
  image: string;
  daysLeft?: number;
}

export interface DealsCategoryItem {
  id: string;
  label: string;
  icon: string;
  count?: number;
}

export interface CategoryDealOverviewItem {
  id: string;
  badge: string;
  categoryName: string;
  description: string;
  startPrice: number;
  image: string;
}
