export interface UmrahPackage {
  id: string;
  name: string;
  subTitle: string;
  badge?: string;
  badgeColor?: string;
  image: string;
  duration: string;
  makkahNights: number;
  madinahNights: number;
  hotelRating: number;
  hotelDesc: string;
  transportType: string;
  guideType: string;
  airportHandling: string;
  extraServices?: string[];
  priceSAR: number;
  originalPriceSAR?: number;
  focusType: 'makkah' | 'madinah' | 'multi' | 'ramadan';
  category: 'economy' | 'standard' | 'premium' | 'luxury' | 'family' | 'group' | 'custom';
}

export interface UmrahItineraryStep {
  dayLabel: string;
  title: string;
  image: string;
  activities: string[];
}

export interface UmrahAddon {
  id: string;
  title: string;
  priceSAR: number;
  unit?: string;
  image: string;
}
