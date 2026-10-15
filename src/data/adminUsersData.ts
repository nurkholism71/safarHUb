import {
  AdminUserRecord,
  AdminUserKpi,
  AdminUserSegment,
  AdminUserGrowthPoint,
  AdminUserTypeShare,
  AdminUserCountryShare,
  AdminRecentRegistration,
  AdminTopUser,
  AdminUserActivityLog
} from '../types/adminUsers';

export const ADMIN_USER_KPIS: AdminUserKpi[] = [
  {
    id: 'total_users',
    title: 'Total Users',
    value: '324,850',
    change: '↑ 28%',
    isPositive: true,
    subtitle: 'vs last month',
    iconName: 'Users',
    bgColorClass: 'bg-blue-500/10 text-blue-500',
    textColorClass: 'text-blue-500'
  },
  {
    id: 'new_users',
    title: 'New Users',
    value: '12,340',
    change: '↑ 45%',
    isPositive: true,
    subtitle: 'vs last month',
    iconName: 'UserPlus',
    bgColorClass: 'bg-sky-500/10 text-sky-500',
    textColorClass: 'text-sky-500'
  },
  {
    id: 'verified_users',
    title: 'Verified Users',
    value: '298,120',
    change: '92%',
    isPositive: true,
    subtitle: 'of total users',
    iconName: 'ShieldCheck',
    bgColorClass: 'bg-emerald-500/10 text-emerald-500',
    textColorClass: 'text-emerald-500'
  },
  {
    id: 'premium_members',
    title: 'Premium Members',
    value: '28,450',
    change: '↑ 36%',
    isPositive: true,
    subtitle: 'vs last month',
    iconName: 'Crown',
    bgColorClass: 'bg-amber-500/10 text-amber-500',
    textColorClass: 'text-amber-500'
  },
  {
    id: 'active_users',
    title: 'Active Users (30 Days)',
    value: '142,680',
    change: '↑ 22%',
    isPositive: true,
    subtitle: 'vs last month',
    iconName: 'Briefcase',
    bgColorClass: 'bg-emerald-600/10 text-emerald-600',
    textColorClass: 'text-emerald-600'
  }
];

export const ADMIN_USER_SEGMENTS: AdminUserSegment[] = [
  { id: 'all', label: 'All Users', iconName: 'Users' },
  { id: 'customers', label: 'Customers', iconName: 'User' },
  { id: 'premium', label: 'Premium Members', iconName: 'Crown' },
  { id: 'umrah', label: 'Umrah Travelers', iconName: 'Moon' },
  { id: 'corporate', label: 'Corporate Users', iconName: 'Building2' },
  { id: 'agents', label: 'Agents & Partners', iconName: 'Briefcase' },
  { id: 'blocked', label: 'Blocked Users', iconName: 'Ban' }
];

export const ADMIN_USER_RECORDS: AdminUserRecord[] = [
  {
    id: 'USR-001',
    name: 'Ahmad Fauzi',
    username: '@ahmadfauzi',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
    email: 'ahmad@example.com',
    phone: '+62 812 3456 7890',
    country: 'Indonesia',
    countryFlag: '🇮🇩',
    userType: 'Customer',
    status: 'Active',
    totalBookings: 5,
    totalSpending: 'SAR 4,850',
    totalSpendingNumber: 4850,
    joinedDate: '12 Jan 2026',
    isVerified: true
  },
  {
    id: 'USR-002',
    name: 'Siti Aisyah',
    username: '@sitiaisyah',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    email: 'siti@example.com',
    phone: '+62 813 9876 5432',
    country: 'Indonesia',
    countryFlag: '🇮🇩',
    userType: 'Umrah Traveler',
    status: 'Active',
    totalBookings: 2,
    totalSpending: 'SAR 12,500',
    totalSpendingNumber: 12500,
    joinedDate: '5 Feb 2026',
    isVerified: true
  },
  {
    id: 'USR-003',
    name: 'Omar Hassan',
    username: '@omarhassan',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
    email: 'omar@example.com',
    phone: '+20 100 123 4567',
    country: 'Egypt',
    countryFlag: '🇪🇬',
    userType: 'Customer',
    status: 'Active',
    totalBookings: 3,
    totalSpending: 'SAR 2,450',
    totalSpendingNumber: 2450,
    joinedDate: '18 Feb 2026',
    isVerified: true
  },
  {
    id: 'USR-004',
    name: 'Fatimah Zahra',
    username: '@fatimahzahra',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    email: 'fatimah@example.com',
    phone: '+62 812 1111 2222',
    country: 'Indonesia',
    countryFlag: '🇮🇩',
    userType: 'Premium',
    status: 'Active',
    totalBookings: 8,
    totalSpending: 'SAR 18,900',
    totalSpendingNumber: 18900,
    joinedDate: '2 Mar 2026',
    isVerified: true
  },
  {
    id: 'USR-005',
    name: 'Ali Hussein',
    username: '@alihussein',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    email: 'ali@example.com',
    phone: '+20 100 765 4321',
    country: 'Egypt',
    countryFlag: '🇪🇬',
    userType: 'Corporate',
    status: 'Active',
    totalBookings: 12,
    totalSpending: 'SAR 45,200',
    totalSpendingNumber: 45200,
    joinedDate: '15 Mar 2026',
    isVerified: true
  },
  {
    id: 'USR-006',
    name: 'Layla Ahmad',
    username: '@laylaahmad',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    email: 'layla@example.com',
    phone: '+60 12 345 6789',
    country: 'Malaysia',
    countryFlag: '🇲🇾',
    userType: 'Customer',
    status: 'Inactive',
    totalBookings: 1,
    totalSpending: 'SAR 650',
    totalSpendingNumber: 650,
    joinedDate: '28 Mar 2026',
    isVerified: false
  },
  {
    id: 'USR-007',
    name: 'Khalid Al-Mansuri',
    username: '@khalidalmansuri',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    email: 'khalid@example.com',
    phone: '+966 50 123 4567',
    country: 'Saudi Arabia',
    countryFlag: '🇸🇦',
    userType: 'Umrah Traveler',
    status: 'Active',
    totalBookings: 4,
    totalSpending: 'SAR 9,850',
    totalSpendingNumber: 9850,
    joinedDate: '10 Apr 2026',
    isVerified: true
  },
  {
    id: 'USR-008',
    name: 'Nur Rahma',
    username: '@nurrahma',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    email: 'nur@example.com',
    phone: '+62 811 2222 3333',
    country: 'Indonesia',
    countryFlag: '🇮🇩',
    userType: 'Customer',
    status: 'Active',
    totalBookings: 6,
    totalSpending: 'SAR 7,420',
    totalSpendingNumber: 7420,
    joinedDate: '22 Apr 2026',
    isVerified: true
  },
  {
    id: 'USR-009',
    name: 'Yusuf Abdullah',
    username: '@yusufabdullah',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    email: 'yusuf@example.com',
    phone: '+966 54 987 6543',
    country: 'Saudi Arabia',
    countryFlag: '🇸🇦',
    userType: 'Premium',
    status: 'Active',
    totalBookings: 10,
    totalSpending: 'SAR 28,300',
    totalSpendingNumber: 28300,
    joinedDate: '1 May 2026',
    isVerified: true
  },
  {
    id: 'USR-010',
    name: 'Hanan Khaled',
    username: '@hanankhaled',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    email: 'hanan@example.com',
    phone: '+20 101 555 6677',
    country: 'Egypt',
    countryFlag: '🇪🇬',
    userType: 'Agent',
    status: 'Pending',
    totalBookings: 0,
    totalSpending: 'SAR 0',
    totalSpendingNumber: 0,
    joinedDate: '7 May 2026',
    isVerified: false
  }
];

export const ADMIN_USER_GROWTH_DATA: AdminUserGrowthPoint[] = [
  { month: 'Jan', users: 12000 },
  { month: 'Feb', users: 19000 },
  { month: 'Mar', users: 22000 },
  { month: 'Apr', users: 26000 },
  { month: 'May', users: 24000 },
  { month: 'Jun', users: 25000 },
  { month: 'Jul', users: 28000 },
  { month: 'Aug', users: 31000 },
  { month: 'Sep', users: 30000 },
  { month: 'Oct', users: 33000 },
  { month: 'Nov', users: 32000 },
  { month: 'Dec', users: 39000 }
];

export const ADMIN_USER_TYPE_SHARES: AdminUserTypeShare[] = [
  { type: 'Customers', percentage: 58, count: '188,413', color: '#00A651' },
  { type: 'Umrah Travelers', percentage: 20, count: '64,970', color: '#3b82f6' },
  { type: 'Premium Members', percentage: 9, count: '28,450', color: '#f59e0b' },
  { type: 'Corporate Users', percentage: 7, count: '22,740', color: '#8b5cf6' },
  { type: 'Agents', percentage: 4, count: '12,980', color: '#06b6d4' },
  { type: 'Others', percentage: 2, count: '7,297', color: '#94a3b8' }
];

export const ADMIN_USER_COUNTRY_SHARES: AdminUserCountryShare[] = [
  { country: 'Indonesia', percentage: 35, count: '113,698', flag: '🇮🇩', color: '#00A651' },
  { country: 'Saudi Arabia', percentage: 28, count: '80,958', flag: '🇸🇦', color: '#10b981' },
  { country: 'Malaysia', percentage: 12, count: '38,982', flag: '🇲🇾', color: '#06b6d4' },
  { country: 'Egypt', percentage: 10, count: '32,485', flag: '🇪🇬', color: '#f59e0b' },
  { country: 'Pakistan', percentage: 5, count: '16,243', flag: '🇵🇰', color: '#8b5cf6' },
  { country: 'Others', percentage: 10, count: '32,484', flag: '🌍', color: '#64748b' }
];

export const ADMIN_RECENT_REGISTRATIONS: AdminRecentRegistration[] = [
  {
    id: 'reg-1',
    name: 'Ahmad Fauzi',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
    timeAgo: '2 minutes ago',
    country: 'Indonesia',
    flag: '🇮🇩'
  },
  {
    id: 'reg-2',
    name: 'Siti Aisyah',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    timeAgo: '5 minutes ago',
    country: 'Indonesia',
    flag: '🇮🇩'
  },
  {
    id: 'reg-3',
    name: 'Mohammed Ali',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
    timeAgo: '12 minutes ago',
    country: 'Egypt',
    flag: '🇪🇬'
  },
  {
    id: 'reg-4',
    name: 'Zainab Yusuf',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    timeAgo: '18 minutes ago',
    country: 'Saudi Arabia',
    flag: '🇸🇦'
  },
  {
    id: 'reg-5',
    name: 'Hassan Malik',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    timeAgo: '25 minutes ago',
    country: 'Pakistan',
    flag: '🇵🇰'
  }
];

export const ADMIN_TOP_USERS_BOOKINGS: AdminTopUser[] = [
  {
    id: 'top-b-1',
    rank: 1,
    name: 'Ali Hussein',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    bookingsCount: 12,
    spending: 'SAR 45,200'
  },
  {
    id: 'top-b-2',
    rank: 2,
    name: 'Yusuf Abdullah',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    bookingsCount: 10,
    spending: 'SAR 28,300'
  },
  {
    id: 'top-b-3',
    rank: 3,
    name: 'Fatimah Zahra',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    bookingsCount: 8,
    spending: 'SAR 18,900'
  },
  {
    id: 'top-b-4',
    rank: 4,
    name: 'Nur Rahma',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    bookingsCount: 6,
    spending: 'SAR 7,420'
  },
  {
    id: 'top-b-5',
    rank: 5,
    name: 'Ahmad Fauzi',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
    bookingsCount: 5,
    spending: 'SAR 4,850'
  }
];

export const ADMIN_TOP_USERS_SPENDING: AdminTopUser[] = [
  {
    id: 'top-s-1',
    rank: 1,
    name: 'Ali Hussein',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    spending: 'SAR 45,200'
  },
  {
    id: 'top-s-2',
    rank: 2,
    name: 'Yusuf Abdullah',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    spending: 'SAR 28,300'
  },
  {
    id: 'top-s-3',
    rank: 3,
    name: 'Fatimah Zahra',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    spending: 'SAR 18,900'
  },
  {
    id: 'top-s-4',
    rank: 4,
    name: 'Khalid Al-Mansuri',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    spending: 'SAR 9,850'
  },
  {
    id: 'top-s-5',
    rank: 5,
    name: 'Nur Rahma',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    spending: 'SAR 7,420'
  }
];

export const ADMIN_USER_ACTIVITY_LOGS: AdminUserActivityLog[] = [
  {
    id: 'act-1',
    userName: 'Ahmad Fauzi',
    action: 'made a hotel booking',
    timeAgo: '10 minutes ago',
    iconName: 'Building2',
    iconColor: 'text-blue-500 bg-blue-50'
  },
  {
    id: 'act-2',
    userName: 'Siti Aisyah',
    action: 'joined a Umrah package',
    timeAgo: '1 hour ago',
    iconName: 'Luggage',
    iconColor: 'text-emerald-500 bg-emerald-50'
  },
  {
    id: 'act-3',
    userName: 'Omar Hassan',
    action: 'left a review',
    timeAgo: '2 hours ago',
    iconName: 'Star',
    iconColor: 'text-amber-500 bg-amber-50'
  },
  {
    id: 'act-4',
    userName: 'Fatimah Zahra',
    action: 'upgraded to Premium',
    timeAgo: '3 hours ago',
    iconName: 'Crown',
    iconColor: 'text-purple-500 bg-purple-50'
  },
  {
    id: 'act-5',
    userName: 'Ali Hussein',
    action: 'made a group booking',
    timeAgo: '5 hours ago',
    iconName: 'Users',
    iconColor: 'text-sky-500 bg-sky-50'
  }
];
