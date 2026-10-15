import { UmrahPackage, UmrahItineraryStep, UmrahAddon } from '../types/umrah';

export const UMRAH_PACKAGES: UmrahPackage[] = [
  {
    id: 'pkg-1',
    name: 'Essential Umrah',
    subTitle: 'Makkah & Madinah',
    badge: 'Best Seller',
    badgeColor: 'bg-emerald-600 text-white',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=600&q=80',
    duration: '7 Days 6 Nights',
    makkahNights: 4,
    madinahNights: 2,
    hotelRating: 3,
    hotelDesc: '3★ Hotel (Near Haram)',
    transportType: 'Shared Transport (AC Coach)',
    guideType: 'Basic Guide Support',
    airportHandling: 'Airport Transfer (Meet & Assist)',
    priceSAR: 3900,
    originalPriceSAR: 4400,
    focusType: 'multi',
    category: 'economy'
  },
  {
    id: 'pkg-2',
    name: 'Comfort Umrah',
    subTitle: 'Makkah & Madinah',
    badge: 'Most Popular',
    badgeColor: 'bg-amber-500 text-slate-950',
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=600&q=80',
    duration: '9 Days 8 Nights',
    makkahNights: 5,
    madinahNights: 3,
    hotelRating: 4,
    hotelDesc: '4★ Hotel (Near Haram)',
    transportType: 'Intercity Transport (Bus/Van)',
    guideType: 'Guided Tour (Ziyarat Included)',
    airportHandling: 'Airport Transfer (Dedicated)',
    priceSAR: 5800,
    originalPriceSAR: 6500,
    focusType: 'multi',
    category: 'standard'
  },
  {
    id: 'pkg-3',
    name: 'Premium Umrah',
    subTitle: 'Makkah & Madinah',
    badge: 'Premium',
    badgeColor: 'bg-blue-600 text-white',
    image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=600&q=80',
    duration: '10 Days 9 Nights',
    makkahNights: 5,
    madinahNights: 4,
    hotelRating: 5,
    hotelDesc: '5★ Hotel (Near Haram)',
    transportType: 'Private Transport (GMC / HiAce VIP)',
    guideType: 'Experienced Guide & Ziyarat',
    airportHandling: 'VIP Airport Handling',
    priceSAR: 8900,
    originalPriceSAR: 9800,
    focusType: 'multi',
    category: 'premium'
  },
  {
    id: 'pkg-4',
    name: 'Luxury Umrah',
    subTitle: 'Makkah & Madinah',
    badge: 'Luxury',
    badgeColor: 'bg-purple-700 text-white',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
    duration: '12 Days 11 Nights',
    makkahNights: 6,
    madinahNights: 5,
    hotelRating: 5,
    hotelDesc: '5★ Premium Hotel (Direct Haram View)',
    transportType: 'Private Car & Dedicated Driver',
    guideType: 'Personal Guide & VIP Ziyarat',
    airportHandling: 'VIP Airport Fast Track & Lounge',
    extraServices: ['Executive Lounge', 'Fast Track Baggage', '24/7 Butler Service'],
    priceSAR: 12900,
    originalPriceSAR: 14500,
    focusType: 'multi',
    category: 'luxury'
  }
];

export const UMRAH_CATEGORY_TABS = [
  {
    id: 'all',
    name: 'All Packages',
    subName: 'View all offerings',
    icon: 'Package'
  },
  {
    id: 'economy',
    name: 'Economy',
    subName: 'Affordable & comfortable',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'standard',
    name: 'Standard',
    subName: 'Best value',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'premium',
    name: 'Premium',
    subName: 'More comfort & services',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'luxury',
    name: 'Luxury',
    subName: '5-star experience',
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'family',
    name: 'Family Packages',
    subName: 'Family friendly',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'group',
    name: 'Group Packages',
    subName: 'For groups & agencies',
    image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'custom',
    name: 'Custom Package',
    subName: 'Tailor your trip',
    image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=300&q=80'
  }
];

export const UMRAH_ITINERARY_7DAYS: UmrahItineraryStep[] = [
  {
    dayLabel: 'Day 1',
    title: 'Arrival Jeddah',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80',
    activities: ['Airport Meet & Greet', 'Transfer to Makkah', 'Hotel Check-in & Rest']
  },
  {
    dayLabel: 'Day 2-4',
    title: 'Makkah Al-Mukarramah',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=400&q=80',
    activities: ['Perform Umrah Tawaf & Sai', 'Free time for Ibadah', 'Optional Historical Ziyarat']
  },
  {
    dayLabel: 'Day 5',
    title: 'Makkah ➔ Madinah',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=400&q=80',
    activities: ['Hotel Check-out', 'Transfer via Haramain Train / VIP Bus', 'Madinah Hotel Check-in']
  },
  {
    dayLabel: 'Day 6',
    title: 'Madinah Al-Munawwarah',
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=400&q=80',
    activities: ['Visit Masjid Nabawi & Rawdah', 'Historical Ziyarat (Quba & Uhud)', 'Free time at Date Market']
  },
  {
    dayLabel: 'Day 7',
    title: 'Departure',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=400&q=80',
    activities: ['Hotel Check-out', 'Transfer to Airport (MED/JED)', 'Flight Back Home']
  }
];

export const UMRAH_ADDONS: UmrahAddon[] = [
  {
    id: 'add-1',
    title: 'Umrah Visa',
    priceSAR: 450,
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'add-2',
    title: 'Airport Fast Track',
    priceSAR: 250,
    image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'add-3',
    title: 'Private Car',
    priceSAR: 350,
    unit: '/day',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'add-4',
    title: 'Ziyarat Tour',
    priceSAR: 200,
    image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'add-5',
    title: 'Saudi SIM Card',
    priceSAR: 80,
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'add-6',
    title: 'Travel Insurance',
    priceSAR: 150,
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'add-7',
    title: 'Wheelchair Service',
    priceSAR: 200,
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'add-8',
    title: 'Extra Nights',
    priceSAR: 400,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=300&q=80'
  }
];
