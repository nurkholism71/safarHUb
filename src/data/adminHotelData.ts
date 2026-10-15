import {
  AdminHotelKPI,
  AdminHotelItem,
  AdminHotelTrendPoint,
  AdminHotelDestinationShare,
  AdminTopPerformingHotel
} from '../types/adminHotel';

export const ADMIN_HOTEL_KPIS: AdminHotelKPI[] = [
  {
    id: 'hotels',
    title: 'Total Hotels',
    value: '1,280',
    badgeText: '↑ 12%',
    iconName: 'Building2',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    id: 'rooms',
    title: 'Total Rooms',
    value: '125,430',
    badgeText: '↑ 18%',
    iconName: 'BedDouble',
    bgColor: 'bg-sky-50',
    iconColor: 'text-sky-600'
  },
  {
    id: 'active',
    title: 'Active Hotels',
    value: '1,120',
    percentage: '87%',
    iconName: 'CheckCircle2',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600'
  },
  {
    id: 'pending',
    title: 'Pending Approval',
    value: '86',
    percentage: '6%',
    iconName: 'Clock',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-500'
  },
  {
    id: 'inactive',
    title: 'Inactive Hotels',
    value: '74',
    percentage: '6%',
    iconName: 'XCircle',
    bgColor: 'bg-rose-50',
    iconColor: 'text-rose-500'
  },
  {
    id: 'revenue',
    title: 'Total Revenue',
    value: 'SAR 8,450,230',
    badgeText: '↑ 25%',
    iconName: 'CreditCard',
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600'
  }
];

export const ADMIN_HOTEL_ITEMS: AdminHotelItem[] = [
  {
    id: 'h1',
    code: '#H001',
    name: 'Makkah Towers Hotel',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=300&q=80',
    location: {
      city: 'Makkah',
      area: 'Near Haram',
      fullAddress: 'Ajyad, Makkah 24231, Saudi Arabia'
    },
    stars: 5,
    roomsCount: 850,
    rating: 4.9,
    reviewCount: 2840,
    status: 'Active',
    ownerType: 'SafarHub',
    contact: '+966 50 123 4567',
    email: 'makkah.towers@safarhub.sa',
    checkInTime: '14:00',
    checkOutTime: '12:00',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=300&q=80'
    ],
    amenities: ['5 Star Luxury', '850 Rooms', 'Free High-Speed WiFi', 'Halal Fine Dining', 'VIP Wellness Spa']
  },
  {
    id: 'h2',
    code: '#H002',
    name: 'Madinah Grand Hotel',
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=300&q=80',
    location: {
      city: 'Madinah',
      area: 'Near Masjid Nabawi',
      fullAddress: 'Central Area, Madinah 42311, Saudi Arabia'
    },
    stars: 5,
    roomsCount: 620,
    rating: 4.8,
    reviewCount: 1920,
    status: 'Active',
    ownerType: 'Partner',
    contact: '+966 54 998 1122',
    email: 'contact@madinahgrand.sa',
    checkInTime: '14:00',
    checkOutTime: '12:00'
  },
  {
    id: 'h3',
    code: '#H003',
    name: 'Riyadh Business Hotel',
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=300&q=80',
    location: {
      city: 'Riyadh',
      area: 'City Center',
      fullAddress: 'King Fahd Rd, Riyadh 11564, Saudi Arabia'
    },
    stars: 4,
    roomsCount: 420,
    rating: 4.7,
    reviewCount: 1540,
    status: 'Active',
    ownerType: 'Partner',
    contact: '+966 11 445 6677',
    email: 'info@riyadhbusinesshotel.com',
    checkInTime: '15:00',
    checkOutTime: '12:00'
  },
  {
    id: 'h4',
    code: '#H004',
    name: 'Jeddah Corniche Hotel',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=300&q=80',
    location: {
      city: 'Jeddah',
      area: 'Corniche',
      fullAddress: 'Al Kurnaysh Rd, Jeddah 23511, Saudi Arabia'
    },
    stars: 4,
    roomsCount: 380,
    rating: 4.6,
    reviewCount: 1230,
    status: 'Active',
    ownerType: 'SafarHub',
    contact: '+966 12 606 8899',
    email: 'corniche.jeddah@safarhub.sa',
    checkInTime: '14:00',
    checkOutTime: '12:00'
  },
  {
    id: 'h5',
    code: '#H005',
    name: 'Al Haram View Hotel',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=300&q=80',
    location: {
      city: 'Makkah',
      area: 'Near Haram',
      fullAddress: 'Ibrahim Al Khalil St, Makkah 24231, Saudi Arabia'
    },
    stars: 4,
    roomsCount: 520,
    rating: 4.6,
    reviewCount: 980,
    status: 'Active',
    ownerType: 'Partner',
    contact: '+966 50 443 2211',
    email: 'haramview@makkahpartner.com',
    checkInTime: '14:00',
    checkOutTime: '11:30'
  },
  {
    id: 'h6',
    code: '#H006',
    name: 'Madinah Comfort Hotel',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=300&q=80',
    location: {
      city: 'Madinah',
      area: 'Central Area',
      fullAddress: 'Northern Central Area, Madinah 42311, Saudi Arabia'
    },
    stars: 3,
    roomsCount: 290,
    rating: 4.4,
    reviewCount: 640,
    status: 'Pending',
    ownerType: 'Partner',
    contact: '+966 55 119 8877',
    email: 'approval@madinahcomfort.sa',
    checkInTime: '15:00',
    checkOutTime: '12:00'
  },
  {
    id: 'h7',
    code: '#H007',
    name: 'Riyadh Airport Hotel',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=300&q=80',
    location: {
      city: 'Riyadh',
      area: 'Near Airport',
      fullAddress: 'Airport Road, Riyadh 13411, Saudi Arabia'
    },
    stars: 4,
    roomsCount: 310,
    rating: 4.5,
    reviewCount: 520,
    status: 'Active',
    ownerType: 'SafarHub',
    contact: '+966 11 221 0000',
    email: 'airport.hotel@safarhub.sa',
    checkInTime: '14:00',
    checkOutTime: '12:00'
  },
  {
    id: 'h8',
    code: '#H008',
    name: 'Jeddah Beach Resort',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=300&q=80',
    location: {
      city: 'Jeddah',
      area: 'Obhur',
      fullAddress: 'North Obhur, Jeddah 23816, Saudi Arabia'
    },
    stars: 5,
    roomsCount: 710,
    rating: 4.8,
    reviewCount: 1120,
    status: 'Active',
    ownerType: 'Partner',
    contact: '+966 12 890 3344',
    email: 'reservations@jeddahbeachresort.com',
    checkInTime: '15:00',
    checkOutTime: '13:00'
  },
  {
    id: 'h9',
    code: '#H009',
    name: 'Makkah Budget Hotel',
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=300&q=80',
    location: {
      city: 'Makkah',
      area: '2 km from Haram',
      fullAddress: 'Al Aziziyah, Makkah 24243, Saudi Arabia'
    },
    stars: 3,
    roomsCount: 180,
    rating: 4.2,
    reviewCount: 420,
    status: 'Active',
    ownerType: 'Partner',
    contact: '+966 50 776 5544',
    email: 'support@makkahbudget.sa',
    checkInTime: '14:00',
    checkOutTime: '11:00'
  },
  {
    id: 'h10',
    code: '#H010',
    name: 'Madinah Family Hotel',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=300&q=80',
    location: {
      city: 'Madinah',
      area: 'Family Area',
      fullAddress: 'Al Qiblatayn, Madinah 42351, Saudi Arabia'
    },
    stars: 3,
    roomsCount: 220,
    rating: 4.3,
    reviewCount: 380,
    status: 'Inactive',
    ownerType: 'Partner',
    contact: '+966 53 881 2299',
    email: 'admin@madinahfamily.sa',
    checkInTime: '14:00',
    checkOutTime: '12:00'
  }
];

export const ADMIN_HOTEL_TRENDS: AdminHotelTrendPoint[] = [
  { label: '1 Oct', makkah: 1800, madinah: 1200, riyadh: 800, jeddah: 600, other: 400 },
  { label: '5 Oct', makkah: 2100, madinah: 1450, riyadh: 950, jeddah: 700, other: 450 },
  { label: '10 Oct', makkah: 2600, madinah: 1800, riyadh: 1100, jeddah: 850, other: 500 },
  { label: '15 Oct', makkah: 2400, madinah: 1700, riyadh: 1050, jeddah: 800, other: 480 },
  { label: '20 Oct', makkah: 2900, madinah: 2100, riyadh: 1300, jeddah: 950, other: 550 },
  { label: '25 Oct', makkah: 3400, madinah: 2500, riyadh: 1500, jeddah: 1100, other: 600 },
  { label: '30 Oct', makkah: 3900, madinah: 2900, riyadh: 1700, jeddah: 1250, other: 700 }
];

export const ADMIN_HOTELS_BY_DESTINATION: AdminHotelDestinationShare[] = [
  { city: 'Makkah', percentage: 35, count: 448, color: '#0e5f2c' }, // dark emerald
  { city: 'Madinah', percentage: 25, count: 320, color: '#0d9488' }, // teal
  { city: 'Riyadh', percentage: 18, count: 230, color: '#f59e0b' }, // amber/gold
  { city: 'Jeddah', percentage: 12, count: 154, color: '#ef4444' }, // red/crimson
  { city: 'Other', percentage: 10, count: 128, color: '#8b5cf6' } // purple
];

export const ADMIN_TOP_PERFORMING_HOTELS: AdminTopPerformingHotel[] = [
  {
    rank: 1,
    name: 'Makkah Towers Hotel',
    city: 'Makkah',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=150&q=80'
  },
  {
    rank: 2,
    name: 'Madinah Grand Hotel',
    city: 'Madinah',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=150&q=80'
  },
  {
    rank: 3,
    name: 'Riyadh Business Hotel',
    city: 'Riyadh',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=150&q=80'
  },
  {
    rank: 4,
    name: 'Jeddah Corniche Hotel',
    city: 'Jeddah',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=150&q=80'
  },
  {
    rank: 5,
    name: 'Al Haram View Hotel',
    city: 'Makkah',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=150&q=80'
  }
];
