import {
  AdminTransportKPI,
  AdminTransportCategory,
  AdminTransportItem,
  AdminTransportTrendPoint,
  AdminTransportTypeShare,
  AdminPopularRoute
} from '../types/adminTransport';

export const ADMIN_TRANSPORT_KPIS: AdminTransportKPI[] = [
  {
    id: 'services',
    title: 'Total Services',
    value: '860',
    badgeText: '↑ 12%',
    iconName: 'Plane',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    id: 'bookings',
    title: 'Total Bookings',
    value: '12,540',
    badgeText: '↑ 18%',
    iconName: 'Calendar',
    bgColor: 'bg-sky-50',
    iconColor: 'text-sky-600'
  },
  {
    id: 'revenue',
    title: 'Total Revenue',
    value: 'SAR 4,230,450',
    badgeText: '↑ 25%',
    iconName: 'CreditCard',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600'
  },
  {
    id: 'vehicles',
    title: 'Active Vehicles',
    value: '520',
    badgeText: '↑ 8%',
    iconName: 'Users',
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600'
  },
  {
    id: 'rating',
    title: 'Avg Rating',
    value: '4.7',
    badgeText: '↑ 0.3',
    iconName: 'Star',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-500'
  }
];

export const ADMIN_TRANSPORT_CATEGORIES: AdminTransportCategory[] = [
  {
    id: 'flights',
    title: 'Flights',
    subtitle: '320 routes',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=300&q=80',
    iconName: 'Plane'
  },
  {
    id: 'buses',
    title: 'Buses',
    subtitle: '180 routes',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=300&q=80',
    iconName: 'Bus'
  },
  {
    id: 'cars',
    title: 'Private Cars',
    subtitle: '220 vehicles',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=300&q=80',
    iconName: 'Car'
  },
  {
    id: 'trains',
    title: 'Trains',
    subtitle: '45 routes',
    image: 'https://images.unsplash.com/photo-1532105956626-9569c03602f6?auto=format&fit=crop&w=300&q=80',
    iconName: 'Train'
  },
  {
    id: 'airport-transfer',
    title: 'Airport Transfer',
    subtitle: '95 vehicles',
    image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=300&q=80',
    iconName: 'PlaneTakeoff'
  },
  {
    id: 'rental',
    title: 'Car Rental',
    subtitle: '80 vehicles',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=300&q=80',
    iconName: 'Car'
  }
];

export const ADMIN_TRANSPORT_ITEMS: AdminTransportItem[] = [
  {
    id: 't1',
    code: '#T1001',
    type: 'Flight',
    icon: 'Plane',
    route: 'Riyadh → Jeddah',
    provider: 'Saudia',
    vehicle: 'Boeing 787',
    price: '350',
    status: 'Active',
    bookingsCount: 320
  },
  {
    id: 't2',
    code: '#T1002',
    type: 'Bus',
    icon: 'Bus',
    route: 'Riyadh → Makkah',
    provider: 'SAPTCO',
    vehicle: 'VIP Bus',
    price: '120',
    status: 'Active',
    bookingsCount: 280
  },
  {
    id: 't3',
    code: '#T1003',
    type: 'Private Car',
    icon: 'Car',
    route: 'Jeddah Airport → Makkah',
    provider: 'SafarHub',
    vehicle: 'Toyota Hiace',
    price: '250',
    status: 'Active',
    bookingsCount: 450
  },
  {
    id: 't4',
    code: '#T1004',
    type: 'Train',
    icon: 'Train',
    route: 'Madinah → Makkah',
    provider: 'Haramain Train',
    vehicle: 'Train Set',
    price: '150',
    status: 'Active',
    bookingsCount: 180
  },
  {
    id: 't5',
    code: '#T1005',
    type: 'Airport Transfer',
    icon: 'PlaneTakeoff',
    route: 'Jeddah Airport → Hotel',
    provider: 'SafarHub',
    vehicle: 'Mercedes V-Class',
    price: '300',
    status: 'Active',
    bookingsCount: 210
  },
  {
    id: 't6',
    code: '#T1006',
    type: 'Car Rental',
    icon: 'Car',
    route: 'Riyadh City',
    provider: 'Hertz Saudi',
    vehicle: 'Toyota Camry',
    price: '200/day',
    status: 'Active',
    bookingsCount: 160
  },
  {
    id: 't7',
    code: '#T1007',
    type: 'Flight',
    icon: 'Plane',
    route: 'Jeddah → Madinah',
    provider: 'Flynas',
    vehicle: 'Airbus A320',
    price: '280',
    status: 'Pending',
    bookingsCount: 95
  },
  {
    id: 't8',
    code: '#T1008',
    type: 'Bus',
    icon: 'Bus',
    route: 'Madinah → Riyadh',
    provider: 'SAPTCO',
    vehicle: 'VIP Bus',
    price: '130',
    status: 'Inactive',
    bookingsCount: 60
  }
];

export const ADMIN_TRANSPORT_TRENDS: AdminTransportTrendPoint[] = [
  { label: '1 Oct', flights: 220, buses: 160, cars: 120, trains: 80, airport: 40 },
  { label: '5 Oct', flights: 310, buses: 220, cars: 180, trains: 110, airport: 60 },
  { label: '10 Oct', flights: 420, buses: 290, cars: 230, trains: 150, airport: 80 },
  { label: '15 Oct', flights: 380, buses: 270, cars: 210, trains: 130, airport: 70 },
  { label: '20 Oct', flights: 510, buses: 360, cars: 290, trains: 190, airport: 95 },
  { label: '25 Oct', flights: 620, buses: 430, cars: 340, trains: 220, airport: 110 },
  { label: '30 Oct', flights: 750, buses: 520, cars: 410, trains: 280, airport: 140 }
];

export const ADMIN_TRANSPORT_TYPE_SHARE: AdminTransportTypeShare[] = [
  { type: 'Flights', percentage: 38, count: '4,765', color: '#0284c7' }, // blue
  { type: 'Buses', percentage: 22, count: '2,760', color: '#10b981' }, // green
  { type: 'Private Cars', percentage: 18, count: '2,260', color: '#f59e0b' }, // gold
  { type: 'Trains', percentage: 12, count: '1,520', color: '#8b5cf6' }, // purple
  { type: 'Airport Transfer', percentage: 6, count: '750', color: '#ef4444' }, // red
  { type: 'Car Rental', percentage: 4, count: '485', color: '#f97316' } // orange
];

export const ADMIN_POPULAR_ROUTES: AdminPopularRoute[] = [
  {
    rank: 1,
    from: 'Riyadh',
    to: 'Makkah',
    bookings: '2,340 bookings',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=150&q=80'
  },
  {
    rank: 2,
    from: 'Jeddah',
    to: 'Makkah',
    bookings: '1,980 bookings',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=150&q=80'
  },
  {
    rank: 3,
    from: 'Riyadh',
    to: 'Jeddah',
    bookings: '1,420 bookings',
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=150&q=80'
  },
  {
    rank: 4,
    from: 'Jeddah Airport',
    to: 'Makkah',
    bookings: '980 bookings',
    image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=150&q=80'
  },
  {
    rank: 5,
    from: 'Madinah',
    to: 'Makkah',
    bookings: '850 bookings',
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=150&q=80'
  }
];

export const ADMIN_TRANSPORT_DESTINATIONS = [
  {
    name: 'Makkah',
    bookings: '4,765 bookings',
    percentage: 38,
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Madinah',
    bookings: '2,760 bookings',
    percentage: 22,
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Riyadh',
    bookings: '1,230 bookings',
    percentage: 18,
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Jeddah',
    bookings: '1,520 bookings',
    percentage: 12,
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Taif',
    bookings: '750 bookings',
    percentage: 6,
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=150&q=80'
  }
];
