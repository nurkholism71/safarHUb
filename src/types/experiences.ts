export interface ExperienceItem {
  id: string;
  title: string;
  category: string;
  cityName: string;
  rating: number;
  reviewCount: string;
  duration?: string;
  groupType?: string;
  price: number;
  image: string;
  isFeatured?: boolean;
}

export interface RecommendedItineraryItem {
  id: string;
  title: string;
  days: number;
  tags: string[];
  startPrice: number;
  image: string;
}

export interface ExperienceCategory {
  id: string;
  label: string;
  icon: string;
}
