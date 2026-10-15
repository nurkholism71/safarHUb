import {
  AnalyticsKpi,
  RevenueTrendPoint,
  ServiceShareItem,
  TopDestinationItem,
  MonthlyBookingItem,
  UserGrowthPoint,
  DemographicItem,
  TopPackageItem,
  TopCustomerItem,
  SalesChannelItem
} from '../types/adminAnalytics';

export const ANALYTICS_KPIS: AnalyticsKpi[] = [
  {
    id: 'total-bookings',
    title: 'Total Bookings',
    value: '12,840',
    change: '↑ 28%',
    isPositive: true,
    subtitle: 'vs last month',
    iconName: 'Calendar',
    bgColorClass: 'bg-blue-50 dark:bg-blue-950/50',
    iconColorClass: 'text-blue-500'
  },
  {
    id: 'total-revenue',
    title: 'Total Revenue',
    value: 'SAR 8,420,350',
    change: '↑ 35%',
    isPositive: true,
    subtitle: 'vs last month',
    iconName: 'Coins',
    bgColorClass: 'bg-amber-50 dark:bg-amber-950/50',
    iconColorClass: 'text-amber-500'
  },
  {
    id: 'total-customers',
    title: 'Total Customers',
    value: '9,320',
    change: '↑ 22%',
    isPositive: true,
    subtitle: 'vs last month',
    iconName: 'Users',
    bgColorClass: 'bg-sky-50 dark:bg-sky-950/50',
    iconColorClass: 'text-sky-500'
  },
  {
    id: 'active-services',
    title: 'Active Services',
    value: '18',
    change: '↑ 20%',
    isPositive: true,
    subtitle: 'vs last month',
    iconName: 'ShoppingBag',
    bgColorClass: 'bg-rose-50 dark:bg-rose-950/50',
    iconColorClass: 'text-rose-500'
  },
  {
    id: 'average-rating',
    title: 'Average Rating',
    value: '4.7 / 5',
    change: '↑ 0.3',
    isPositive: true,
    subtitle: 'vs last month',
    iconName: 'Star',
    bgColorClass: 'bg-amber-50 dark:bg-amber-950/50',
    iconColorClass: 'text-amber-500'
  },
  {
    id: 'conversion-rate',
    title: 'Conversion Rate',
    value: '6.8%',
    change: '↑ 1.2%',
    isPositive: true,
    subtitle: 'vs last month',
    iconName: 'PieChart',
    bgColorClass: 'bg-blue-50 dark:bg-blue-950/50',
    iconColorClass: 'text-blue-500'
  }
];

export const ANALYTICS_REVENUE_TREND: RevenueTrendPoint[] = [
  { date: '1 Oct', revenue: 280000, bookings: 220 },
  { date: '5 Oct', revenue: 380000, bookings: 290 },
  { date: '10 Oct', revenue: 520000, bookings: 380 },
  { date: '15 Oct', revenue: 640000, bookings: 490 },
  { date: '20 Oct', revenue: 890000, bookings: 680 },
  { date: '25 Oct', revenue: 820000, bookings: 620 },
  { date: '31 Oct', revenue: 1050000, bookings: 790 }
];

export const ANALYTICS_SERVICE_SHARES: ServiceShareItem[] = [
  { name: 'Umroh Packages', percentage: 38, color: '#2563eb' },
  { name: 'Hotels', percentage: 22, color: '#a855f7' },
  { name: 'Transport', percentage: 14, color: '#06b6d4' },
  { name: 'Experiences', percentage: 10, color: '#10b981' },
  { name: 'Airport Services', percentage: 8, color: '#38bdf8' },
  { name: 'Jastip', percentage: 5, color: '#8b5cf6' },
  { name: 'City Guide', percentage: 3, color: '#ec4899' }
];

export const ANALYTICS_TOP_DESTINATIONS: TopDestinationItem[] = [
  {
    id: 'makkah',
    name: 'Makkah',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=150&auto=format&fit=crop&q=80',
    bookings: 4850
  },
  {
    id: 'madinah',
    name: 'Madinah',
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=150&auto=format&fit=crop&q=80',
    bookings: 3280
  },
  {
    id: 'riyadh',
    name: 'Riyadh',
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=150&auto=format&fit=crop&q=80',
    bookings: 1450
  },
  {
    id: 'jeddah',
    name: 'Jeddah',
    image: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=150&auto=format&fit=crop&q=80',
    bookings: 1120
  },
  {
    id: 'taif',
    name: 'Taif',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=150&auto=format&fit=crop&q=80',
    bookings: 650
  },
  {
    id: 'alula',
    name: 'AlUla',
    image: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=150&auto=format&fit=crop&q=80',
    bookings: 420
  }
];

export const ANALYTICS_MONTHLY_BOOKINGS: MonthlyBookingItem[] = [
  { month: 'Jan', umroh: 1800, hotels: 900, transport: 600, experiences: 400 },
  { month: 'Feb', umroh: 1950, hotels: 1100, transport: 750, experiences: 520 },
  { month: 'Mar', umroh: 2100, hotels: 1250, transport: 800, experiences: 600 },
  { month: 'Apr', umroh: 2350, hotels: 1400, transport: 950, experiences: 710 },
  { month: 'May', umroh: 2500, hotels: 1600, transport: 1050, experiences: 800 },
  { month: 'Jun', umroh: 2800, hotels: 1850, transport: 1200, experiences: 950 },
  { month: 'Jul', umroh: 3100, hotels: 2100, transport: 1350, experiences: 1100 },
  { month: 'Aug', umroh: 3450, hotels: 2300, transport: 1500, experiences: 1250 },
  { month: 'Sep', umroh: 3900, hotels: 2600, transport: 1700, experiences: 1400 },
  { month: 'Oct', umroh: 4300, hotels: 2900, transport: 1900, experiences: 1600 },
  { month: 'Nov', umroh: 4600, hotels: 3200, transport: 2100, experiences: 1800 },
  { month: 'Dec', umroh: 5200, hotels: 3600, transport: 2400, experiences: 2100 }
];

export const ANALYTICS_USER_GROWTH: UserGrowthPoint[] = [
  { month: 'Jan', newUsers: 4500, activeUsers: 8200 },
  { month: 'Feb', newUsers: 5800, activeUsers: 9500 },
  { month: 'Mar', newUsers: 7200, activeUsers: 11800 },
  { month: 'Apr', newUsers: 8900, activeUsers: 13500 },
  { month: 'May', newUsers: 10200, activeUsers: 15400 },
  { month: 'Jun', newUsers: 12400, activeUsers: 17800 },
  { month: 'Jul', newUsers: 14100, activeUsers: 18900 },
  { month: 'Aug', newUsers: 15800, activeUsers: 20500 },
  { month: 'Sep', newUsers: 18200, activeUsers: 22800 },
  { month: 'Oct', newUsers: 21500, activeUsers: 25400 },
  { month: 'Nov', newUsers: 24200, activeUsers: 28900 },
  { month: 'Dec', newUsers: 29800, activeUsers: 36500 }
];

export const ANALYTICS_DEMOGRAPHICS: DemographicItem[] = [
  { country: 'Indonesia', percentage: 35, color: '#3b82f6' },
  { country: 'Saudi Arabia', percentage: 28, color: '#10b981' },
  { country: 'Malaysia', percentage: 12, color: '#6366f1' },
  { country: 'Egypt', percentage: 10, color: '#f59e0b' },
  { country: 'Pakistan', percentage: 8, color: '#06b6d4' },
  { country: 'Others', percentage: 7, color: '#ec4899' }
];

export const ANALYTICS_TOP_PACKAGES: TopPackageItem[] = [
  {
    id: 'pkg-1',
    rank: 1,
    name: 'Umroh Reguler 9 Hari',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=150&auto=format&fit=crop&q=80',
    bookings: 2850,
    revenue: 'SAR 6,850,000',
    rating: 4.8
  },
  {
    id: 'pkg-2',
    rank: 2,
    name: 'Umroh Plus Turki 12 Hari',
    image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=150&auto=format&fit=crop&q=80',
    bookings: 1420,
    revenue: 'SAR 4,750,000',
    rating: 4.7
  },
  {
    id: 'pkg-3',
    rank: 3,
    name: 'Umroh Premium 12 Hari',
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=150&auto=format&fit=crop&q=80',
    bookings: 980,
    revenue: 'SAR 4,200,000',
    rating: 4.9
  },
  {
    id: 'pkg-4',
    rank: 4,
    name: 'Makkah Hotel 5★',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=150&auto=format&fit=crop&q=80',
    bookings: 650,
    revenue: 'SAR 1,820,000',
    rating: 4.6
  },
  {
    id: 'pkg-5',
    rank: 5,
    name: 'AlUla Heritage Tour',
    image: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=150&auto=format&fit=crop&q=80',
    bookings: 420,
    revenue: 'SAR 1,520,000',
    rating: 4.8
  }
];

export const ANALYTICS_TOP_CUSTOMERS: TopCustomerItem[] = [
  {
    id: 'cus-1',
    rank: 1,
    name: 'Ahmad Fauzi',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    totalBookings: 28,
    totalSpending: 'SAR 125,800'
  },
  {
    id: 'cus-2',
    rank: 2,
    name: 'Siti Aisyah',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    totalBookings: 24,
    totalSpending: 'SAR 98,450'
  },
  {
    id: 'cus-3',
    rank: 3,
    name: 'Omar Hassan',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    totalBookings: 18,
    totalSpending: 'SAR 76,200'
  },
  {
    id: 'cus-4',
    rank: 4,
    name: 'Fatimah Zahra',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    totalBookings: 16,
    totalSpending: 'SAR 68,900'
  },
  {
    id: 'cus-5',
    rank: 5,
    name: 'Muhammad Rizky',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    totalBookings: 14,
    totalSpending: 'SAR 62,500'
  }
];

export const ANALYTICS_SALES_CHANNELS: SalesChannelItem[] = [
  { id: 'web', name: 'Website', iconName: 'Globe', percentage: 42, color: '#0f766e' },
  { id: 'app', name: 'Mobile App', iconName: 'Smartphone', percentage: 28, color: '#2563eb' },
  { id: 'partner', name: 'Partner / Agent', iconName: 'Users', percentage: 15, color: '#8b5cf6' },
  { id: 'offline', name: 'Walk-in / Offline', iconName: 'Store', percentage: 10, color: '#f97316' },
  { id: 'market', name: 'Marketplace', iconName: 'ShoppingBag', percentage: 5, color: '#ec4899' }
];
