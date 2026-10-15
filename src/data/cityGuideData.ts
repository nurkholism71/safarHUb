import {
  CityItem,
  AttractionItem,
  ExperienceItem,
  TransportGuideItem,
  EssentialInfoItem
} from '../types/cityGuide';

export const CITIES_LIST: CityItem[] = [
  {
    id: 'makkah',
    name: 'Makkah',
    arabicName: 'مكة المكرمة',
    tagline: 'Holy City',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=400&q=80',
    description: 'The holiest city in Islam, home to Masjid Al-Haram and the Kaaba.'
  },
  {
    id: 'madinah',
    name: 'Madinah',
    arabicName: 'المدينة المنورة',
    tagline: "Prophet's City",
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80',
    description: "The city of the Prophet ﷺ, home to Masjid an-Nabawi and Rawdah Sharif."
  },
  {
    id: 'riyadh',
    name: 'Riyadh',
    arabicName: 'الرياض',
    tagline: 'Capital City',
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=400&q=80',
    description: 'The vibrant capital blending modern towers and historic Diriyah.'
  },
  {
    id: 'jeddah',
    name: 'Jeddah',
    arabicName: 'جدة',
    tagline: 'Red Sea City',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80',
    description: 'Gateway to Makkah, historic Al-Balad, and modern coastal Corniche.'
  },
  {
    id: 'dammam',
    name: 'Dammam',
    arabicName: 'الدمام',
    tagline: 'Eastern Province',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80',
    description: 'Commercial heart of the Arabian Gulf and coastal promenade.'
  },
  {
    id: 'alula',
    name: 'AlUla',
    arabicName: 'العلا',
    tagline: 'Heritage City',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=400&q=80',
    description: 'UNESCO World Heritage Hegra and monumental desert sandstone landscapes.'
  },
  {
    id: 'taif',
    name: 'Taif',
    arabicName: 'الطائف',
    tagline: 'Mountain City',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    description: 'Cool mountain air, fragrant rose farms, and historic fruit orchards.'
  }
];

export const CITY_FILTER_TABS = [
  { id: 'overview', label: 'Overview', icon: 'Compass' },
  { id: 'attractions', label: 'Attractions', icon: 'Landmark' },
  { id: 'food', label: 'Food & Restaurants', icon: 'Utensils' },
  { id: 'transport', label: 'Transport', icon: 'Bus' },
  { id: 'shopping', label: 'Shopping', icon: 'ShoppingBag' },
  { id: 'mosques', label: 'Mosques', icon: 'MoonStar' },
  { id: 'info', label: 'Practical Info', icon: 'Info' },
  { id: 'nearby', label: 'Nearby Cities', icon: 'MapPin' }
];

export const POPULAR_ATTRACTIONS: AttractionItem[] = [
  {
    id: 'att-1',
    title: 'Masjid Al-Haram',
    cityName: 'Makkah',
    rating: 4.9,
    reviewCount: '12K',
    category: 'Holy Site',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'att-2',
    title: 'Masjid an-Nabawi',
    cityName: 'Madinah',
    rating: 4.9,
    reviewCount: '10K',
    category: 'Holy Site',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'att-3',
    title: 'AlUla – Hegra',
    cityName: 'AlUla',
    rating: 4.8,
    reviewCount: '4K',
    category: 'Historical Site',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'att-4',
    title: 'Kingdom Tower',
    cityName: 'Riyadh',
    rating: 4.7,
    reviewCount: '8K',
    category: 'Landmark',
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'att-5',
    title: 'Jeddah Corniche',
    cityName: 'Jeddah',
    rating: 4.6,
    reviewCount: '7K',
    category: 'Attraction',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80'
  }
];

export const LOCAL_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    title: 'Traditional Saudi Food',
    subtitle: 'Restaurants & Cafes',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'exp-2',
    title: 'Souq & Shopping',
    subtitle: 'Traditional Markets',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'exp-3',
    title: 'Cultural Tours',
    subtitle: 'Heritage & History',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'exp-4',
    title: 'Red Sea Activities',
    subtitle: 'Diving & Beaches',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'exp-5',
    title: 'Mountain Trips',
    subtitle: 'Nature & Adventure',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80'
  }
];

export const TRANSPORT_IN_SAUDI: TransportGuideItem[] = [
  {
    id: 'tr-1',
    title: 'Metro & Train',
    subtitle: 'Riyadh Metro, Haramain Train',
    image: 'https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'tr-2',
    title: 'Bus & Taxi',
    subtitle: 'SAPTCO, Local Taxi, Ride-hailing',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'tr-3',
    title: 'Car Rental',
    subtitle: 'International & Local Providers',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'tr-4',
    title: 'Airport Transfer',
    subtitle: 'Private & Shared Shuttle',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'tr-5',
    title: 'Intercity Transport',
    subtitle: 'Makkah, Madinah, Riyadh, Dammam',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=400&q=80'
  }
];

export const ESSENTIAL_INFO_LIST: EssentialInfoItem[] = [
  {
    id: 'info-1',
    title: 'Visa & Entry Requirements',
    icon: 'FileCheck'
  },
  {
    id: 'info-2',
    title: 'Currency & Payments',
    icon: 'CreditCard'
  },
  {
    id: 'info-3',
    title: 'Local Laws & Etiquette',
    icon: 'Scale'
  },
  {
    id: 'info-4',
    title: 'Language & Communication',
    icon: 'MessageSquare'
  },
  {
    id: 'info-5',
    title: 'Safety & Emergency',
    icon: 'ShieldCheck'
  }
];

export const NEARBY_CITIES_LIST: CityItem[] = [
  {
    id: 'nb-taif',
    name: 'Taif',
    arabicName: 'الطائف',
    tagline: '1.5 hours from Makkah',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80',
    distanceFrom: '1.5 hours from Makkah'
  },
  {
    id: 'nb-jeddah',
    name: 'Jeddah',
    arabicName: 'جدة',
    tagline: '1 hour from Makkah',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=200&q=80',
    distanceFrom: '1 hour from Makkah'
  },
  {
    id: 'nb-alula',
    name: 'AlUla',
    arabicName: 'العلا',
    tagline: '3 hours from Madinah',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=200&q=80',
    distanceFrom: '3 hours from Madinah'
  }
];
