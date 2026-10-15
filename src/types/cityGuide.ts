export interface CityItem {
  id: string;
  name: string;
  arabicName: string;
  tagline: string;
  image: string;
  description?: string;
  features?: string[];
  distanceFrom?: string;
}

export interface AttractionItem {
  id: string;
  title: string;
  cityName: string;
  rating: number;
  reviewCount: string;
  category: string;
  image: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface TransportGuideItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface EssentialInfoItem {
  id: string;
  title: string;
  icon: string;
  description?: string;
}
