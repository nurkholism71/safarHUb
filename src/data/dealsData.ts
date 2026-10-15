import {
  DealItem,
  DealsCategoryItem,
  CategoryDealOverviewItem
} from '../types/deals';

export const DEALS_CATEGORIES: DealsCategoryItem[] = [
  { id: 'all', label: 'All Deals', icon: 'Gift' },
  { id: 'hotels', label: 'Hotels', icon: 'Building2' },
  { id: 'transport', label: 'Transport', icon: 'Bus' },
  { id: 'airport', label: 'Airport Services', icon: 'PlaneTakeoff' },
  { id: 'umrah', label: 'Umrah Packages', icon: 'MoonStar' },
  { id: 'jastip', label: 'Jastip', icon: 'ShoppingBag' },
  { id: 'experiences', label: 'Experiences', icon: 'Mountain' },
  { id: 'city', label: 'City Tours', icon: 'Castle' },
  { id: 'food', label: 'Food & Culinary', icon: 'Utensils' },
  { id: 'shopping', label: 'Shopping', icon: 'ShoppingBag' }
];

export const FEATURED_DEALS: DealItem[] = [
  {
    id: 'feat-1',
    badge: 'Up to 40% OFF',
    category: 'Hotels',
    title: 'Makkah Hotel Special Deal',
    description: 'Get up to 40% off selected hotels near Masjid Al-Haram.',
    amenities: ['Free Cancellation', 'Breakfast Included'],
    price: 250,
    priceUnit: '/ night',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'feat-2',
    badge: 'Up to 30% OFF',
    category: 'Transport',
    title: 'Jeddah Airport Transfer Deal',
    description: 'Comfortable and affordable transport from/to Jeddah Airport.',
    amenities: ['Modern Fleet', 'Fixed Price'],
    price: 70,
    priceUnit: '/ trip',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'feat-3',
    badge: 'Up to 25% OFF',
    category: 'Umrah Packages',
    title: 'Ramadan Umrah Promo',
    description: 'Special packages for your spiritual journey.',
    amenities: ['Hotel + Transport + Guide', 'Flexible Dates'],
    price: 3900,
    priceUnit: '',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'feat-4',
    badge: 'Up to 50% OFF',
    category: 'Experiences',
    title: 'AlUla Tour Discount',
    description: 'Explore the wonders of AlUla with special prices.',
    amenities: ['Guided Tour', 'Hotel Pickup'],
    price: 220,
    priceUnit: '/ person',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80'
  }
];

export const CATEGORY_DEALS_OVERVIEW: CategoryDealOverviewItem[] = [
  {
    id: 'cat-deal-1',
    badge: 'Up to 40% OFF',
    categoryName: 'Hotels',
    description: 'Best price for your stay in Makkah, Madinah, and other cities.',
    startPrice: 250,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'cat-deal-2',
    badge: 'Up to 30% OFF',
    categoryName: 'Transport',
    description: 'Bus, car, taxi and private transfer deals.',
    startPrice: 70,
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'cat-deal-3',
    badge: 'Up to 35% OFF',
    categoryName: 'Airport Services',
    description: 'Meet & greet, lounge, fast track and more.',
    startPrice: 120,
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'cat-deal-4',
    badge: 'Up to 25% OFF',
    categoryName: 'Umrah Packages',
    description: 'Complete packages with hotel, transport and guide.',
    startPrice: 3900,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'cat-deal-5',
    badge: 'Up to 40% OFF',
    categoryName: 'Experiences',
    description: 'Tours, activities and cultural experiences.',
    startPrice: 180,
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'cat-deal-6',
    badge: 'Up to 50% OFF',
    categoryName: 'Shopping & Jastip',
    description: 'Exclusive deals on shopping and jastip services.',
    startPrice: 50,
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=400&q=80'
  }
];

export const LIMITED_TIME_OFFERS: DealItem[] = [
  {
    id: 'ltd-1',
    badge: '40% OFF',
    category: 'Hotels',
    title: 'Madinah Hotel Deal',
    description: 'Luxury 5-star stay facing Masjid an-Nabawi.',
    price: 280,
    originalPrice: 470,
    priceUnit: '',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80',
    daysLeft: 3
  },
  {
    id: 'ltd-2',
    badge: '30% OFF',
    category: 'City Tours',
    title: 'Madinah City Tour',
    description: 'Comprehensive historical ziyarat with Muthawwif.',
    price: 150,
    originalPrice: 220,
    priceUnit: '',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80',
    daysLeft: 5
  },
  {
    id: 'ltd-3',
    badge: '20% OFF',
    category: 'Transport',
    title: 'Haramain Train Ticket',
    description: 'High-speed railway between Makkah & Madinah.',
    price: 120,
    originalPrice: 150,
    priceUnit: '',
    image: 'https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d?auto=format&fit=crop&w=400&q=80',
    daysLeft: 3
  },
  {
    id: 'ltd-4',
    badge: '35% OFF',
    category: 'Desert Adventures',
    title: 'Desert Safari Experience',
    description: 'Sunset dunes, quad biking & traditional dinner.',
    price: 220,
    originalPrice: 340,
    priceUnit: '',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=400&q=80',
    daysLeft: 7
  }
];
