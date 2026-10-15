import {
  ExperienceItem,
  RecommendedItineraryItem,
  ExperienceCategory
} from '../types/experiences';

export const EXPERIENCE_CATEGORIES: ExperienceCategory[] = [
  { id: 'all', label: 'All Experiences', icon: 'Compass' },
  { id: 'cultural', label: 'Cultural Tours', icon: 'Landmark' },
  { id: 'historical', label: 'Historical Sites', icon: 'Castle' },
  { id: 'desert', label: 'Desert Adventures', icon: 'Sun' },
  { id: 'nature', label: 'Nature & Mountains', icon: 'Mountain' },
  { id: 'food', label: 'Food & Culinary', icon: 'Utensils' },
  { id: 'religious', label: 'Religious Experiences', icon: 'MoonStar' },
  { id: 'city', label: 'City Tours', icon: 'Building2' },
  { id: 'water', label: 'Water Activities', icon: 'Waves' },
  { id: 'local', label: 'Local Life', icon: 'Users' },
  { id: 'family', label: 'Family Activities', icon: 'Smile' },
  { id: 'luxury', label: 'Luxury Experiences', icon: 'Gem' }
];

export const FEATURED_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-feat-1',
    title: 'AlUla Ancient Tour',
    category: 'Historical Sites',
    cityName: 'AlUla',
    rating: 4.9,
    reviewCount: '2.1K',
    duration: '6–8 hours',
    groupType: 'Small Group',
    price: 350,
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80',
    isFeatured: true
  },
  {
    id: 'exp-feat-2',
    title: 'Makkah Historical Tour',
    category: 'Religious Experiences',
    cityName: 'Makkah',
    rating: 4.8,
    reviewCount: '1.6K',
    duration: '4–6 hours',
    groupType: 'Small Group',
    price: 250,
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=600&q=80',
    isFeatured: true
  },
  {
    id: 'exp-feat-3',
    title: 'Desert Safari Adventure',
    category: 'Desert Adventures',
    cityName: 'Riyadh',
    rating: 4.7,
    reviewCount: '1.3K',
    duration: '6 hours',
    groupType: '4x4 & Sandboarding',
    price: 450,
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80',
    isFeatured: true
  }
];

export const TOP_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'top-1',
    title: 'Food Tour Jeddah',
    category: 'Food & Culinary',
    cityName: 'Jeddah',
    rating: 4.8,
    reviewCount: '980',
    price: 200,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'top-2',
    title: 'Red Sea Snorkeling',
    category: 'Water Activities',
    cityName: 'Jeddah',
    rating: 4.9,
    reviewCount: '1.4K',
    price: 300,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'top-3',
    title: 'Taif Mountain Tour',
    category: 'Nature & Mountains',
    cityName: 'Taif',
    rating: 4.7,
    reviewCount: '880',
    price: 280,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'top-4',
    title: 'Diriyah Heritage Tour',
    category: 'Historical Sites',
    cityName: 'Riyadh',
    rating: 4.8,
    reviewCount: '1.1K',
    price: 220,
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'top-5',
    title: 'Camel Riding',
    category: 'Desert Adventures',
    cityName: 'Riyadh',
    rating: 4.6,
    reviewCount: '720',
    price: 180,
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'top-6',
    title: 'Traditional Market Tour',
    category: 'Local Life',
    cityName: 'Madinah',
    rating: 4.7,
    reviewCount: '950',
    price: 150,
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'top-7',
    title: 'Red Sea Boat Trip',
    category: 'Water Activities',
    cityName: 'Jeddah',
    rating: 4.8,
    reviewCount: '1.2K',
    price: 350,
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'top-8',
    title: 'Cave Exploration',
    category: 'Nature & Mountains',
    cityName: 'AlUla',
    rating: 4.6,
    reviewCount: '640',
    price: 400,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
  }
];

export const RECOMMENDED_ITINERARIES: RecommendedItineraryItem[] = [
  {
    id: 'itin-1',
    title: '3 Days Makkah & Madinah',
    days: 3,
    tags: ['Religious', 'Historical', 'City Tour'],
    startPrice: 1200,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'itin-2',
    title: '5 Days Riyadh & AlUla',
    days: 5,
    tags: ['Culture', 'Adventure', 'Nature'],
    startPrice: 1850,
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'itin-3',
    title: '7 Days Western Saudi',
    days: 7,
    tags: ['Red Sea', 'Heritage', 'Relaxation'],
    startPrice: 2400,
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'itin-4',
    title: '4 Days Southern Saudi',
    days: 4,
    tags: ['Nature', 'Culture', 'Local Life'],
    startPrice: 1700,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&q=80'
  }
];
