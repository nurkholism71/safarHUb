import { AirportServiceItem, FeaturedAirportPackage, PopularAirportItem } from '../types/airport';

export const AIRPORT_SERVICES_LIST: AirportServiceItem[] = [
  {
    id: 'pickup',
    title: 'Airport Pickup',
    description: 'Driver waits at arrival gate with your name board.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=85',
  },
  {
    id: 'dropoff',
    title: 'Airport Drop-off',
    description: 'Safe and on-time transfer to the airport.',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=85',
  },
  {
    id: 'meet-greet',
    title: 'Meet & Greet',
    description: 'Personal assistant at the airport for fast procedures.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=85',
  },
  {
    id: 'baggage',
    title: 'Baggage Assistance',
    description: 'Help with luggage and porter handling service.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=85',
  },
  {
    id: 'fast-track',
    title: 'Fast Track',
    description: 'Skip the queue with VIP priority passport access.',
    image: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=600&q=85',
    badge: 'Fast Track',
  },
  {
    id: 'vip-lounge',
    title: 'VIP Service',
    description: 'Premium handling and luxury executive lounge experience.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=85',
  },
];

export const POPULAR_AIRPORTS: PopularAirportItem[] = [
  {
    id: 'jed',
    code: 'JED',
    name: 'Jeddah Airport (JED)',
    fullName: 'King Abdulaziz Intl.',
    city: 'Jeddah',
    image: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=500&q=85',
  },
  {
    id: 'ruh',
    code: 'RUH',
    name: 'Riyadh Airport (RUH)',
    fullName: 'King Khalid Intl.',
    city: 'Riyadh',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=500&q=85',
  },
  {
    id: 'med',
    code: 'MED',
    name: 'Madinah Airport (MED)',
    fullName: 'Prince Mohammad bin Abdulaziz',
    city: 'Madinah',
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=500&q=85',
  },
  {
    id: 'dmm',
    code: 'DMM',
    name: 'Dammam Airport (DMM)',
    fullName: 'King Fahd Intl.',
    city: 'Dammam',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=500&q=85',
  },
];

export const FEATURED_AIRPORT_PACKAGES: FeaturedAirportPackage[] = [
  {
    id: 'f-1',
    name: 'Standard Pickup',
    category: 'Sedan • 1–3 pax',
    price: 250,
    image: 'https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&w=500&q=80',
    capacity: '1–3 pax',
    features: ['Meet at arrival gate', 'Flight monitoring', 'Driver with name board'],
  },
  {
    id: 'f-2',
    name: 'Premium Pickup',
    category: 'Van • 4–7 pax',
    price: 380,
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=500&q=80',
    capacity: '4–7 pax',
    features: ['Meet at arrival gate', 'Flight monitoring', 'Driver with name board'],
  },
  {
    id: 'f-3',
    name: 'Group Transport',
    category: 'Coaster • 8–20 pax',
    price: 650,
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=500&q=80',
    capacity: '8–20 pax',
    features: ['Meet at arrival gate', 'Flight monitoring', 'Luggage assistance'],
  },
  {
    id: 'f-4',
    name: 'VIP Airport Service',
    category: 'Luxury Car • 1–3 pax',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=500&q=80',
    capacity: '1–3 pax',
    features: ['Personal assistant', 'Fast track access', 'Lounge access included'],
  },
];
