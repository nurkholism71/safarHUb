import {
  AdminAirportKPI,
  AdminAirportCategory,
  AdminAirportTrendPoint,
  AdminAirportServiceShare,
  AdminTopAirport,
  AdminLiveFlight,
  AdminAirportBookingItem
} from '../types/adminAirport';

export const ADMIN_AIRPORT_KPIS: AdminAirportKPI[] = [
  {
    id: 'bookings',
    title: 'Total Bookings',
    value: '5,240',
    badgeText: '↑ 18% vs last month',
    iconName: 'Plane',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    id: 'customers',
    title: 'Total Customers',
    value: '3,865',
    badgeText: '↑ 15%',
    iconName: 'Users',
    bgColor: 'bg-sky-50',
    iconColor: 'text-sky-600'
  },
  {
    id: 'revenue',
    title: 'Total Revenue',
    value: 'SAR 1,824,350',
    badgeText: '↑ 28%',
    iconName: 'CreditCard',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600'
  },
  {
    id: 'airports',
    title: 'Active Airports',
    value: '28',
    badgeText: '↑ 4 new',
    iconName: 'Building2',
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600'
  },
  {
    id: 'rating',
    title: 'Avg Rating',
    value: '4.8',
    badgeText: '↑ 0.3',
    iconName: 'Star',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-500'
  }
];

export const ADMIN_AIRPORT_CATEGORIES: AdminAirportCategory[] = [
  {
    id: 'meet-assist',
    title: 'Meet & Assist',
    bookings: '620 bookings',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300&q=80',
    iconName: 'UserCheck'
  },
  {
    id: 'airport-transfer',
    title: 'Airport Transfer',
    bookings: '980 bookings',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=300&q=80',
    iconName: 'Car'
  },
  {
    id: 'lounge-access',
    title: 'Lounge Access',
    bookings: '750 bookings',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=300&q=80',
    iconName: 'Armchair'
  },
  {
    id: 'fast-track',
    title: 'Fast Track',
    bookings: '480 bookings',
    image: 'https://images.unsplash.com/photo-1520437358207-323b43b50729?auto=format&fit=crop&w=300&q=80',
    iconName: 'Zap'
  },
  {
    id: 'baggage-services',
    title: 'Baggage Services',
    bookings: '320 bookings',
    image: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=300&q=80',
    iconName: 'Luggage'
  },
  {
    id: 'car-rental',
    title: 'Car Rental',
    bookings: '410 bookings',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=300&q=80',
    iconName: 'Key'
  },
  {
    id: 'vip-services',
    title: 'VIP Services',
    bookings: '180 bookings',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=300&q=80',
    iconName: 'Crown'
  },
  {
    id: 'immigration-support',
    title: 'Immigration Support',
    bookings: '210 bookings',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=300&q=80',
    iconName: 'FileCheck'
  },
  {
    id: 'special-assistance',
    title: 'Special Assistance',
    bookings: '290 bookings',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=300&q=80',
    iconName: 'HeartHandshake'
  },
  {
    id: 'shop-dining',
    title: 'Shop & Dining',
    bookings: '540 bookings',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=300&q=80',
    iconName: 'ShoppingBag'
  },
  {
    id: 'parking',
    title: 'Parking',
    bookings: '380 bookings',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=300&q=80',
    iconName: 'CircleParking'
  },
  {
    id: 'airport-hotels',
    title: 'Airport Hotels',
    bookings: '160 bookings',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300&q=80',
    iconName: 'Hotel'
  }
];

export const ADMIN_AIRPORT_TRENDS: AdminAirportTrendPoint[] = [
  { label: '1 Oct', meetAssist: 60, transfer: 95, lounge: 70, fastTrack: 45, others: 160 },
  { label: '5 Oct', meetAssist: 75, transfer: 110, lounge: 85, fastTrack: 55, others: 180 },
  { label: '10 Oct', meetAssist: 90, transfer: 130, lounge: 95, fastTrack: 65, others: 210 },
  { label: '15 Oct', meetAssist: 85, transfer: 125, lounge: 90, fastTrack: 60, others: 200 },
  { label: '20 Oct', meetAssist: 110, transfer: 155, lounge: 115, fastTrack: 80, others: 245 },
  { label: '25 Oct', meetAssist: 130, transfer: 185, lounge: 135, fastTrack: 95, others: 280 },
  { label: '30 Oct', meetAssist: 150, transfer: 210, lounge: 155, fastTrack: 110, others: 310 }
];

export const ADMIN_AIRPORT_SERVICE_SHARE: AdminAirportServiceShare[] = [
  { service: 'Airport Transfer', percentage: 19, count: '980', color: '#0284c7' }, // Blue
  { service: 'Lounge Access', percentage: 14, count: '750', color: '#f59e0b' }, // Gold
  { service: 'Meet & Assist', percentage: 12, count: '620', color: '#eab308' }, // Yellow
  { service: 'Shop & Dining', percentage: 10, count: '540', color: '#10b981' }, // Emerald
  { service: 'Fast Track', percentage: 9, count: '480', color: '#8b5cf6' }, // Purple
  { service: 'Others', percentage: 36, count: '1,870', color: '#ef4444' } // Red
];

export const ADMIN_TOP_AIRPORTS: AdminTopAirport[] = [
  {
    rank: 1,
    name: 'King Khalid International',
    code: 'Riyadh (RUH)',
    bookings: '1,462 bookings',
    percentage: 28,
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=150&q=80'
  },
  {
    rank: 2,
    name: 'King Abdulaziz International',
    code: 'Jeddah (JED)',
    bookings: '1,256 bookings',
    percentage: 24,
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=150&q=80'
  },
  {
    rank: 3,
    name: 'Prince Mohammed bin Abdulaziz',
    code: 'Madinah (MED)',
    bookings: '942 bookings',
    percentage: 18,
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=150&q=80'
  },
  {
    rank: 4,
    name: 'King Fahd International',
    code: 'Dammam (DMM)',
    bookings: '628 bookings',
    percentage: 12,
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=150&q=80'
  },
  {
    rank: 5,
    name: 'NEOM Bay Airport',
    code: 'NEOM (NUM)',
    bookings: '410 bookings',
    percentage: 8,
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=150&q=80'
  }
];

export const ADMIN_LIVE_FLIGHTS: AdminLiveFlight[] = [
  { id: 'f1', flight: 'SV123', status: 'On Time', time: '14:25', route: 'JED → RUH' },
  { id: 'f2', flight: 'SV456', status: 'Delayed', time: '16:10', route: 'RUH → MED' },
  { id: 'f3', flight: 'SV789', status: 'Boarding', time: '18:45', route: 'RUH → JED' },
  { id: 'f4', flight: 'EK803', status: 'On Time', time: '20:30', route: 'JED → DXB' },
  { id: 'f5', flight: 'QR118', status: 'On Time', time: '22:10', route: 'RUH → DOH' }
];

export const ADMIN_AIRPORT_BOOKINGS: AdminAirportBookingItem[] = [
  {
    id: 'ab1',
    code: '#AS7842',
    customer: 'Ahmed Fauzi',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
    service: 'Meet & Assist',
    serviceIcon: 'UserCheck',
    serviceColor: 'text-blue-600 bg-blue-50',
    airport: 'Riyadh (RUH)',
    flightDetails: 'SV123 - Arrival',
    dateTime: '7 Oct 2026, 14:25',
    amount: 'SAR 350',
    status: 'Confirmed'
  },
  {
    id: 'ab2',
    code: '#AS7841',
    customer: 'Siti Aisyah',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
    service: 'Lounge Access',
    serviceIcon: 'Armchair',
    serviceColor: 'text-amber-600 bg-amber-50',
    airport: 'Jeddah (JED)',
    flightDetails: 'EK803 - Departure',
    dateTime: '7 Oct 2026, 20:30',
    amount: 'SAR 240',
    status: 'Confirmed'
  },
  {
    id: 'ab3',
    code: '#AS7840',
    customer: 'Omar Hassan',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    service: 'Airport Transfer',
    serviceIcon: 'Car',
    serviceColor: 'text-sky-600 bg-sky-50',
    airport: 'Madinah (MED)',
    flightDetails: 'Private Car',
    dateTime: '7 Oct 2026, 11:00',
    amount: 'SAR 180',
    status: 'Pending'
  },
  {
    id: 'ab4',
    code: '#AS7839',
    customer: 'Nur Rahma',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
    service: 'Fast Track',
    serviceIcon: 'Zap',
    serviceColor: 'text-purple-600 bg-purple-50',
    airport: 'Riyadh (RUH)',
    flightDetails: 'SV456 - Departure',
    dateTime: '6 Oct 2026, 16:10',
    amount: 'SAR 220',
    status: 'Confirmed'
  },
  {
    id: 'ab5',
    code: '#AS7838',
    customer: 'Khalid Al-Mansuri',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
    service: 'Baggage Service',
    serviceIcon: 'Luggage',
    serviceColor: 'text-indigo-600 bg-indigo-50',
    airport: 'Jeddah (JED)',
    flightDetails: 'Extra Baggage',
    dateTime: '6 Oct 2026, 12:45',
    amount: 'SAR 120',
    status: 'Completed'
  },
  {
    id: 'ab6',
    code: '#AS7837',
    customer: 'Fatimah Zahra',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
    service: 'Car Rental',
    serviceIcon: 'Key',
    serviceColor: 'text-emerald-600 bg-emerald-50',
    airport: 'Dammam (DMM)',
    flightDetails: 'Toyota Camry',
    dateTime: '6 Oct 2026, 19:20',
    amount: 'SAR 300',
    status: 'Confirmed'
  },
  {
    id: 'ab7',
    code: '#AS7836',
    customer: 'Ali Hussein',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
    service: 'Airport Hotel',
    serviceIcon: 'Hotel',
    serviceColor: 'text-teal-600 bg-teal-50',
    airport: 'Riyadh (RUH)',
    flightDetails: '1 Night Stay',
    dateTime: '5 Oct 2026, 21:00',
    amount: 'SAR 450',
    status: 'Confirmed'
  },
  {
    id: 'ab8',
    code: '#AS7835',
    customer: 'Layla Ahmadi',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80',
    service: 'Special Assistance',
    serviceIcon: 'HeartHandshake',
    serviceColor: 'text-rose-600 bg-rose-50',
    airport: 'Jeddah (JED)',
    flightDetails: 'Wheelchair + Assist',
    dateTime: '5 Oct 2026, 11:10',
    amount: 'SAR 150',
    status: 'Pending'
  }
];
