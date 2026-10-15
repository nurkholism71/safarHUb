import {
  AdminKpi,
  BookingStatusBreakdown,
  ServicePerformance,
  LiveActivityItem,
  RecentBookingItem,
  DestinationStat,
  QuickManageItem,
  TicketStatusBreakdown
} from '../types/admin';

export const ADMIN_USER_PROFILE = {
  name: 'Nur Cholis M',
  role: 'Super Admin',
  email: 'nurcholism51@gmail.com',
  initials: 'NC',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  unreadNotifications: 12
};

export const ADMIN_KPIS: AdminKpi[] = [
  {
    id: 'users',
    title: 'Total Users',
    value: '248,320',
    change: '+12%',
    isPositive: true,
    iconName: 'Users',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600'
  },
  {
    id: 'bookings',
    title: 'Total Bookings',
    value: '19,842',
    change: '+18%',
    isPositive: true,
    iconName: 'CalendarCheck',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    id: 'revenue',
    title: 'Total Revenue',
    value: 'SAR 8,450,230',
    change: '+25%',
    isPositive: true,
    iconName: 'CreditCard',
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600'
  },
  {
    id: 'hotels',
    title: 'Hotels',
    value: '1,280',
    change: '+6%',
    isPositive: true,
    iconName: 'Building2',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600'
  },
  {
    id: 'transport',
    title: 'Transport',
    value: '860',
    change: '+9%',
    isPositive: true,
    iconName: 'Car',
    bgColor: 'bg-sky-50',
    iconColor: 'text-sky-600'
  },
  {
    id: 'rating',
    title: 'Avg Rating',
    value: '4.7',
    change: '+0.2',
    isPositive: true,
    iconName: 'Star',
    bgColor: 'bg-yellow-50',
    iconColor: 'text-amber-500'
  }
];

export const BOOKING_STATUS_DATA: BookingStatusBreakdown[] = [
  { status: 'Confirmed', percentage: 72, count: 14292, color: '#0e5f2c' }, // dark emerald
  { status: 'Pending', percentage: 12, count: 2381, color: '#eab308' }, // amber/gold
  { status: 'Canceled', percentage: 8, count: 1588, color: '#f97316' }, // orange
  { status: 'Refunded', percentage: 5, count: 992, color: '#ef4444' }, // red
  { status: 'Modified', percentage: 3, count: 589, color: '#8b5cf6' } // purple
];

export const TOP_SERVICES_DATA: ServicePerformance[] = [
  { name: 'Hotels', percentage: 42, count: 8240, revenue: 'SAR 3.5M', color: 'bg-[#0e5f2c]' },
  { name: 'Umrah Packages', percentage: 28, count: 5530, revenue: 'SAR 2.1M', color: 'bg-teal-600' },
  { name: 'Transport', percentage: 18, count: 3610, revenue: 'SAR 1.4M', color: 'bg-blue-500' },
  { name: 'Experiences', percentage: 7, count: 1420, revenue: 'SAR 0.8M', color: 'bg-amber-400' },
  { name: 'Airport Services', percentage: 5, count: 990, revenue: 'SAR 0.4M', color: 'bg-sky-400' }
];

export const LIVE_ACTIVITIES: LiveActivityItem[] = [
  {
    id: 'act-1',
    title: 'New booking #B9842',
    subtitle: 'Makkah Hotel - 2 nights',
    timeAgo: '2 minutes ago',
    iconType: 'booking',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-700'
  },
  {
    id: 'act-2',
    title: 'New user registered',
    subtitle: 'abdullah@email.com',
    timeAgo: '8 minutes ago',
    iconType: 'user',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700'
  },
  {
    id: 'act-3',
    title: 'Payment received',
    subtitle: 'SAR 3,900 - Umrah Package',
    timeAgo: '12 minutes ago',
    iconType: 'payment',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-700'
  },
  {
    id: 'act-4',
    title: 'New support message',
    subtitle: 'From Siti Aisyah',
    timeAgo: '18 minutes ago',
    iconType: 'support',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-700'
  },
  {
    id: 'act-5',
    title: 'New review',
    subtitle: 'Riyadh City Tour - 5 stars',
    timeAgo: '25 minutes ago',
    iconType: 'review',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700'
  }
];

export const RECENT_BOOKINGS: RecentBookingItem[] = [
  {
    id: '#B9842',
    customerName: 'Ahmad Fauzi',
    customerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    service: 'Makkah Hotel',
    date: '7 Oct 2026',
    amount: 'SAR 1,250',
    status: 'Confirmed'
  },
  {
    id: '#B9841',
    customerName: 'Siti Aisyah',
    customerAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
    service: 'Umrah Package',
    date: '7 Oct 2026',
    amount: 'SAR 3,900',
    status: 'Confirmed'
  },
  {
    id: '#B9840',
    customerName: 'Omar Hassan',
    customerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
    service: 'Jeddah Transport',
    date: '7 Oct 2026',
    amount: 'SAR 220',
    status: 'Pending'
  },
  {
    id: '#B9839',
    customerName: 'Nur Rahma',
    customerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
    service: 'Riyadh City Tour',
    date: '6 Oct 2026',
    amount: 'SAR 450',
    status: 'Confirmed'
  },
  {
    id: '#B9838',
    customerName: 'Khalid Al-Mansuri',
    customerAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=100&q=80',
    service: 'Airport Transfer',
    date: '6 Oct 2026',
    amount: 'SAR 180',
    status: 'Confirmed'
  }
];

export const TOP_DESTINATIONS: DestinationStat[] = [
  {
    rank: 1,
    city: 'Makkah',
    arabicName: 'مكة المكرمة',
    bookings: '8,240 bookings',
    share: 42,
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=200&q=80'
  },
  {
    rank: 2,
    city: 'Madinah',
    arabicName: 'المدينة المنورة',
    bookings: '5,120 bookings',
    share: 26,
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=200&q=80'
  },
  {
    rank: 3,
    city: 'Riyadh',
    arabicName: 'الرياض',
    bookings: '2,480 bookings',
    share: 12,
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=200&q=80'
  },
  {
    rank: 4,
    city: 'Jeddah',
    arabicName: 'جدة',
    bookings: '2,310 bookings',
    share: 11,
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=200&q=80'
  },
  {
    rank: 5,
    city: 'Taif',
    arabicName: 'الطائف',
    bookings: '980 bookings',
    share: 5,
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=200&q=80'
  }
];

export const QUICK_MANAGE_ITEMS: QuickManageItem[] = [
  {
    id: 'hotels',
    title: 'Manage Hotels',
    subtitle: '1,280 hotels',
    iconName: 'Building2',
    color: 'text-emerald-700 bg-emerald-50'
  },
  {
    id: 'transport',
    title: 'Manage Transport',
    subtitle: '860 vehicles',
    iconName: 'Car',
    color: 'text-teal-700 bg-teal-50'
  },
  {
    id: 'airport',
    title: 'Airport Services',
    subtitle: '12 service types',
    iconName: 'Plane',
    color: 'text-blue-700 bg-blue-50'
  },
  {
    id: 'umrah',
    title: 'Umrah Packages',
    subtitle: '54 packages',
    iconName: 'Luggage',
    color: 'text-emerald-800 bg-emerald-50'
  },
  {
    id: 'deals',
    title: 'Deals & Promo',
    subtitle: '26 active deals',
    iconName: 'Tag',
    color: 'text-rose-700 bg-rose-50'
  },
  {
    id: 'users',
    title: 'Manage Users',
    subtitle: '248,320 users',
    iconName: 'Users',
    color: 'text-indigo-700 bg-indigo-50'
  }
];

export const SUPPORT_TICKETS_BREAKDOWN: TicketStatusBreakdown[] = [
  { status: 'Resolved', percentage: 68, count: 328, color: '#0e5f2c' }, // dark emerald
  { status: 'In Progress', percentage: 20, count: 96, color: '#f59e0b' }, // amber
  { status: 'Waiting', percentage: 8, count: 39, color: '#f97316' }, // orange
  { status: 'Closed', percentage: 4, count: 19, color: '#1e293b' } // dark slate
];
