export type CityStatus = 'Active' | 'In Review' | 'Draft' | 'Archived';
export type CityTier = 'Holy City' | 'Capital Metropolis' | 'Red Sea Hub' | 'UNESCO Heritage' | 'Mountain City' | 'Megacity / SEZ' | 'Regional Center';

export interface AdminCityRecord {
  id: string;
  code: string;
  name: string;
  arabicName: string;
  province: string;
  tier: CityTier;
  population: string;
  attractionsCount: number;
  unescoSitesCount: number;
  hotelsCount: number;
  primaryAirport: string;
  transitHub: string;
  heritageTags: string[];
  weather: {
    temp: string;
    condition: string;
  };
  startingPrice: string;
  status: CityStatus;
  image: string;
  curator: string;
  lastUpdated: string;
  featured: boolean;
}

export interface AdminCityKpi {
  id: string;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  subtitle: string;
  iconName: string;
}

export interface AdminCityProvinceFilter {
  id: string;
  name: string;
  iconName: string;
  citiesCount: number;
  attractionsCount: number;
}

export interface AdminCityUpdateLog {
  id: string;
  cityName: string;
  action: string;
  editor: string;
  timestamp: string;
  tag: string;
}

export interface AdminProvinceSummary {
  id: string;
  province: string;
  citiesCount: number;
  coverage: number; // percentage
  topCity: string;
}
