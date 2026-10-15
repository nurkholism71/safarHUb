import {
  AdminJastipKPI,
  AdminJastipCity,
  AdminJastipCategoryItem,
  AdminJastipOrderItem,
  AdminJastipPopularItem,
  AdminJastipTrustedStore,
  AdminJastipLocationShare,
  AdminJastipTrendPoint,
  AdminJastipTopCategory
} from '../types/adminJastip';

export const ADMIN_JASTIP_KPIS: AdminJastipKPI[] = [
  {
    id: 'total-orders',
    title: 'Total Orders',
    value: '3,280',
    badgeText: '↑ 28%',
    iconName: 'ShoppingBag',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    id: 'on-process',
    title: 'On Process',
    value: '640',
    badgeText: '20%',
    iconName: 'Clock',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600'
  },
  {
    id: 'completed',
    title: 'Completed',
    value: '2,450',
    badgeText: '75%',
    iconName: 'CheckCircle2',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600'
  },
  {
    id: 'cancelled',
    title: 'Cancelled',
    value: '190',
    badgeText: '6%',
    iconName: 'XCircle',
    bgColor: 'bg-rose-50',
    iconColor: 'text-rose-600'
  },
  {
    id: 'revenue',
    title: 'Total Revenue',
    value: 'SAR 1,240,350',
    badgeText: '↑ 32%',
    iconName: 'CreditCard',
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600'
  }
];

export const ADMIN_JASTIP_CITIES: AdminJastipCity[] = [
  {
    id: 'makkah',
    name: 'Makkah',
    products: '1,240 products',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'madinah',
    name: 'Madinah',
    products: '980 products',
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'riyadh',
    name: 'Riyadh',
    products: '860 products',
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'jeddah',
    name: 'Jeddah',
    products: '720 products',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'others',
    name: 'Others',
    products: '450 products',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=400&q=80'
  }
];

export const ADMIN_JASTIP_CATEGORIES: AdminJastipCategoryItem[] = [
  { id: 'parfum', title: 'Parfum', iconName: 'Sparkles' },
  { id: 'kurma', title: 'Kurma', iconName: 'Apple' },
  { id: 'oleh-oleh', title: 'Oleh-oleh', iconName: 'Gift' },
  { id: 'buku-islam', title: 'Buku Islam', iconName: 'BookOpen' },
  { id: 'pakaian', title: 'Pakaian', iconName: 'Shirt' },
  { id: 'tas-aksesoris', title: 'Tas & Aksesoris', iconName: 'ShoppingBag' },
  { id: 'kosmetik', title: 'Kosmetik', iconName: 'Heart' },
  { id: 'elektronik', title: 'Elektronik', iconName: 'Headphones' },
  { id: 'jam-tangan', title: 'Jam Tangan', iconName: 'Watch' },
  { id: 'makanan', title: 'Makanan', iconName: 'Utensils' },
  { id: 'souvenir', title: 'Souvenir', iconName: 'Gem' },
  { id: 'lainnya', title: 'Lainnya', iconName: 'LayoutGrid' }
];

export const ADMIN_JASTIP_ORDERS: AdminJastipOrderItem[] = [
  {
    id: 'j1',
    code: '#JSO01284',
    customer: 'Ahmed Fauzi',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
    itemsCount: 5,
    itemImages: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=80&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=80&q=80'
    ],
    location: 'Makkah',
    total: 'SAR 850',
    status: 'On Process',
    date: '7 Oct 2026'
  },
  {
    id: 'j2',
    code: '#JSO01283',
    customer: 'Siti Aisyah',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
    itemsCount: 3,
    itemImages: [
      'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=80&q=80'
    ],
    location: 'Madinah',
    total: 'SAR 420',
    status: 'Completed',
    date: '6 Oct 2026'
  },
  {
    id: 'j3',
    code: '#JSO01282',
    customer: 'Omar Hassan',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    itemsCount: 7,
    itemImages: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=80&q=80',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=80&q=80'
    ],
    location: 'Riyadh',
    total: 'SAR 1,230',
    status: 'On Process',
    date: '6 Oct 2026'
  },
  {
    id: 'j4',
    code: '#JSO01281',
    customer: 'Nur Rahma',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
    itemsCount: 2,
    itemImages: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=80&q=80'
    ],
    location: 'Jeddah',
    total: 'SAR 350',
    status: 'Pending',
    date: '5 Oct 2026'
  },
  {
    id: 'j5',
    code: '#JSO01280',
    customer: 'Khalid Al-Mansuri',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
    itemsCount: 4,
    itemImages: [
      'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=80&q=80',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=80&q=80'
    ],
    location: 'Madinah',
    total: 'SAR 780',
    status: 'Completed',
    date: '5 Oct 2026'
  },
  {
    id: 'j6',
    code: '#JSO01279',
    customer: 'Fatimah Zahra',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
    itemsCount: 6,
    itemImages: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=80&q=80'
    ],
    location: 'Makkah',
    total: 'SAR 1,100',
    status: 'On Process',
    date: '4 Oct 2026'
  },
  {
    id: 'j7',
    code: '#JSO01278',
    customer: 'Ali Hussein',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
    itemsCount: 3,
    itemImages: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=80&q=80'
    ],
    location: 'Riyadh',
    total: 'SAR 690',
    status: 'Cancelled',
    date: '4 Oct 2026'
  },
  {
    id: 'j8',
    code: '#JSO01277',
    customer: 'Layla Ahmadi',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80',
    itemsCount: 5,
    itemImages: [
      'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=80&q=80'
    ],
    location: 'Jeddah',
    total: 'SAR 520',
    status: 'Completed',
    date: '3 Oct 2026'
  }
];

export const ADMIN_JASTIP_POPULAR_ITEMS: AdminJastipPopularItem[] = [
  {
    rank: 1,
    name: 'Kurma Ajwa',
    location: 'Madinah',
    price: 'SAR 120',
    rating: 4.9,
    reviewsCount: '1.2K',
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=100&q=80'
  },
  {
    rank: 2,
    name: 'Parfum Al Haramain',
    location: 'Makkah',
    price: 'SAR 250',
    rating: 4.8,
    reviewsCount: '980',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=100&q=80'
  },
  {
    rank: 3,
    name: 'Sajadah Premium',
    location: 'Madinah',
    price: 'SAR 150',
    rating: 4.7,
    reviewsCount: '760',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=100&q=80'
  },
  {
    rank: 4,
    name: 'Air Zamzam 5L',
    location: 'Makkah',
    price: 'SAR 70',
    rating: 4.8,
    reviewsCount: '540',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=100&q=80'
  },
  {
    rank: 5,
    name: 'Tasbih',
    location: 'Madinah',
    price: 'SAR 45',
    rating: 4.7,
    reviewsCount: '520',
    image: 'https://images.unsplash.com/photo-1584441405886-bc91be61e56a?auto=format&fit=crop&w=100&q=80'
  }
];

export const ADMIN_JASTIP_TRUSTED_STORES: AdminJastipTrustedStore[] = [
  {
    id: 's1',
    name: 'Bin Dawood',
    location: 'Madinah',
    category: 'Supermarket',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=100&q=80'
  },
  {
    id: 's2',
    name: 'Al Haramain Store',
    location: 'Makkah',
    category: 'Parfum & Souvenir',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=100&q=80'
  },
  {
    id: 's3',
    name: 'Souq Al Balad',
    location: 'Jeddah',
    category: 'Oleh-oleh',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=100&q=80'
  },
  {
    id: 's4',
    name: 'Al Othaim',
    location: 'Riyadh',
    category: 'Supermarket',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=100&q=80'
  },
  {
    id: 's5',
    name: 'Jarir Bookstore',
    location: 'Riyadh',
    category: 'Buku & Elektronik',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=100&q=80'
  }
];

export const ADMIN_JASTIP_LOCATION_SHARES: AdminJastipLocationShare[] = [
  { city: 'Makkah', percentage: 35, count: '1,148', color: '#10b981' },
  { city: 'Madinah', percentage: 28, count: '918', color: '#06b6d4' },
  { city: 'Riyadh', percentage: 18, count: '590', color: '#f59e0b' },
  { city: 'Jeddah', percentage: 12, count: '394', color: '#ef4444' },
  { city: 'Others', percentage: 7, count: '230', color: '#8b5cf6' }
];

export const ADMIN_JASTIP_TRENDS: AdminJastipTrendPoint[] = [
  { label: '1 Oct', total: 60, completed: 45, pending: 12, cancelled: 3 },
  { label: '5 Oct', total: 75, completed: 55, pending: 15, cancelled: 5 },
  { label: '10 Oct', total: 110, completed: 85, pending: 20, cancelled: 5 },
  { label: '15 Oct', total: 95, completed: 70, pending: 18, cancelled: 7 },
  { label: '20 Oct', total: 140, completed: 105, pending: 25, cancelled: 10 },
  { label: '25 Oct', total: 165, completed: 125, pending: 30, cancelled: 10 },
  { label: '30 Oct', total: 195, completed: 150, pending: 35, cancelled: 10 }
];

export const ADMIN_JASTIP_TOP_CATEGORIES: AdminJastipTopCategory[] = [
  { name: 'Parfum', percentage: 28, count: '920', color: '#10b981' },
  { name: 'Kurma', percentage: 22, count: '720', color: '#06b6d4' },
  { name: 'Oleh-oleh', percentage: 15, count: '480', color: '#0284c7' },
  { name: 'Buku Islam', percentage: 12, count: '390', color: '#f59e0b' },
  { name: 'Pakaian', percentage: 10, count: '330', color: '#8b5cf6' }
];
