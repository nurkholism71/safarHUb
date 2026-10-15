import {
  AdminBookingKPI,
  AdminBookingItem,
  AdminBookingTrendPoint,
  AdminBookingCategoryShare
} from '../types/adminBooking';

export const ADMIN_BOOKING_KPIS: AdminBookingKPI[] = [
  {
    id: 'total',
    title: 'Total Bookings',
    value: '19,842',
    badgeText: '↑ 18% vs last month',
    iconName: 'Calendar',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    id: 'confirmed',
    title: 'Confirmed',
    value: '14,292',
    percentage: '72%',
    iconName: 'CheckCircle2',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600'
  },
  {
    id: 'pending',
    title: 'Pending',
    value: '2,381',
    percentage: '12%',
    iconName: 'Clock',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-500'
  },
  {
    id: 'cancelled',
    title: 'Cancelled',
    value: '1,588',
    percentage: '8%',
    iconName: 'XCircle',
    bgColor: 'bg-rose-50',
    iconColor: 'text-rose-500'
  },
  {
    id: 'refunded',
    title: 'Refunded',
    value: '992',
    percentage: '5%',
    iconName: 'RotateCcw',
    bgColor: 'bg-red-50',
    iconColor: 'text-red-500'
  },
  {
    id: 'revenue',
    title: 'Total Revenue',
    value: 'SAR 8,450,230',
    badgeText: '↑ 25% vs last month',
    iconName: 'CreditCard',
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600'
  }
];

export const ADMIN_BOOKING_TABS = [
  { id: 'all', label: 'All Bookings', count: '19,842' },
  { id: 'hotels', label: 'Hotels', count: '8,240' },
  { id: 'transport', label: 'Transport', count: '5,530' },
  { id: 'airport', label: 'Airport Services', count: '990' },
  { id: 'umrah', label: 'Umrah Packages', count: '3,210' },
  { id: 'experiences', label: 'Experiences', count: '1,420' }
];

export const ADMIN_BOOKING_ITEMS: AdminBookingItem[] = [
  {
    id: '#B9842',
    customer: {
      name: 'Ahmad Fauzi',
      email: 'ahmad@email.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      phone: '+966 50 123 4567'
    },
    service: {
      type: 'Hotel',
      category: 'Hotel',
      sublabel: 'Makkah Hotel',
      icon: 'Building2',
      thumbnail: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=300&q=80',
      rating: 4.8,
      reviewCount: '1,240 reviews'
    },
    details: {
      title: 'Swissôtel Al Maqam',
      subtitle: '2 nights • 2 rooms',
      checkIn: '7 Oct 2026 (14:00)',
      checkOut: '9 Oct 2026 (12:00)',
      rooms: '2 rooms (4 adults)',
      guestName: 'Ahmad Fauzi',
      specialRequest: 'Near Haram, high floor'
    },
    date: '7 Oct 2026 – 9 Oct 2026',
    amount: 'SAR 1,250',
    status: 'Confirmed',
    payment: {
      status: 'Paid',
      method: 'Visa',
      cardLast4: '1234',
      paidAt: '6 Oct 2026, 10:24'
    }
  },
  {
    id: '#B9841',
    customer: {
      name: 'Siti Aisyah',
      email: 'siti@email.com',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
      phone: '+62 812 3456 7890'
    },
    service: {
      type: 'Umrah Package',
      category: 'Umrah Package',
      sublabel: '5 Days',
      icon: 'Luggage',
      thumbnail: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=300&q=80',
      rating: 4.9,
      reviewCount: '890 reviews'
    },
    details: {
      title: 'Makkah - Madinah',
      subtitle: 'Group (2 pax)',
      checkIn: '7 Oct 2026',
      checkOut: '12 Oct 2026',
      rooms: '1 Quad Room',
      guestName: 'Siti Aisyah & Family',
      specialRequest: 'Wheelchair assistance for elderly'
    },
    date: '7 Oct 2026 – 12 Oct 2026',
    amount: 'SAR 3,900',
    status: 'Confirmed',
    payment: {
      status: 'Paid',
      method: 'Mastercard',
      cardLast4: '5678',
      paidAt: '5 Oct 2026, 14:10'
    }
  },
  {
    id: '#B9840',
    customer: {
      name: 'Omar Hassan',
      email: 'omar@email.com',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
      phone: '+966 55 987 6543'
    },
    service: {
      type: 'Transport',
      category: 'Transport',
      sublabel: 'Airport Transfer',
      icon: 'Car',
      thumbnail: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=300&q=80',
      rating: 4.7,
      reviewCount: '450 reviews'
    },
    details: {
      title: 'Jeddah Airport → Makkah',
      subtitle: 'Private Car (4 pax)',
      checkIn: '7 Oct 2026 (10:30)',
      checkOut: '7 Oct 2026 (12:00)',
      rooms: '1 Luxury GMC Yukon',
      guestName: 'Omar Hassan',
      specialRequest: 'Driver speaks Arabic & English'
    },
    date: '7 Oct 2026 10:30',
    amount: 'SAR 220',
    status: 'Pending',
    payment: {
      status: 'Awaiting Payment',
      paidAt: 'Pending Checkout'
    }
  },
  {
    id: '#B9839',
    customer: {
      name: 'Nur Rahma',
      email: 'nur@email.com',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
      phone: '+966 54 321 0987'
    },
    service: {
      type: 'Experience',
      category: 'Experience',
      sublabel: 'Desert Safari',
      icon: 'Compass',
      thumbnail: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=300&q=80',
      rating: 4.9,
      reviewCount: '620 reviews'
    },
    details: {
      title: 'Riyadh Desert Safari',
      subtitle: '4 pax',
      checkIn: '6 Oct 2026 (15:00)',
      checkOut: '6 Oct 2026 (21:00)',
      rooms: '4x4 VIP Quad',
      guestName: 'Nur Rahma Group',
      specialRequest: 'Vegetarian BBQ dinner requested'
    },
    date: '6 Oct 2026',
    amount: 'SAR 450',
    status: 'Confirmed',
    payment: {
      status: 'Paid',
      method: 'STC Pay',
      paidAt: '4 Oct 2026, 09:15'
    }
  },
  {
    id: '#B9838',
    customer: {
      name: 'Khalid Al-Mansuri',
      email: 'khalid@email.com',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80',
      phone: '+971 50 112 2334'
    },
    service: {
      type: 'Airport Service',
      category: 'Airport Service',
      sublabel: 'Meet & Greet',
      icon: 'Plane',
      thumbnail: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=300&q=80',
      rating: 4.8,
      reviewCount: '310 reviews'
    },
    details: {
      title: 'Jeddah Airport',
      subtitle: 'Terminal 1 • 2 pax',
      checkIn: '6 Oct 2026 (18:45)',
      checkOut: '6 Oct 2026 (19:30)',
      rooms: 'VIP Fast Track Lounge',
      guestName: 'Khalid Al-Mansuri',
      specialRequest: 'Baggage porter service required'
    },
    date: '6 Oct 2026',
    amount: 'SAR 180',
    status: 'Confirmed',
    payment: {
      status: 'Paid',
      method: 'Tamara',
      paidAt: '5 Oct 2026, 16:30'
    }
  },
  {
    id: '#B9837',
    customer: {
      name: 'Fatimah Zahra',
      email: 'fatimah@email.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      phone: '+966 56 778 8990'
    },
    service: {
      type: 'Hotel',
      category: 'Hotel',
      sublabel: 'Madinah Hotel',
      icon: 'Building2',
      thumbnail: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=300&q=80',
      rating: 4.7,
      reviewCount: '980 reviews'
    },
    details: {
      title: 'Madinah Hilton',
      subtitle: '3 nights • 1 room',
      checkIn: '5 Oct 2026',
      checkOut: '8 Oct 2026',
      rooms: '1 Executive Suite',
      guestName: 'Fatimah Zahra',
      specialRequest: 'Haram view requested'
    },
    date: '5 Oct 2026 – 8 Oct 2026',
    amount: 'SAR 2,100',
    status: 'Cancelled',
    payment: {
      status: 'Refunded',
      refundAmount: 'SAR 2,100',
      paidAt: 'Refunded on 4 Oct 2026'
    }
  },
  {
    id: '#B9836',
    customer: {
      name: 'Ali Hussein',
      email: 'ali@email.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80',
      phone: '+966 50 998 8776'
    },
    service: {
      type: 'Umrah Package',
      category: 'Umrah Package',
      sublabel: 'Economy',
      icon: 'Luggage',
      thumbnail: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=300&q=80',
      rating: 4.6,
      reviewCount: '540 reviews'
    },
    details: {
      title: 'Makkah - Madinah',
      subtitle: 'Group (1 pax)',
      checkIn: '5 Oct 2026',
      checkOut: '10 Oct 2026',
      rooms: 'Shared Double Room',
      guestName: 'Ali Hussein',
      specialRequest: 'Bus transfer assistance'
    },
    date: '5 Oct 2026 – 10 Oct 2026',
    amount: 'SAR 2,850',
    status: 'Confirmed',
    payment: {
      status: 'Paid',
      method: 'Visa',
      cardLast4: '9012',
      paidAt: '3 Oct 2026, 11:00'
    }
  },
  {
    id: '#B9835',
    customer: {
      name: 'Layla Ahmad',
      email: 'layla@email.com',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
      phone: '+966 53 112 3344'
    },
    service: {
      type: 'Transport',
      category: 'Transport',
      sublabel: 'Riyadh City Tour',
      icon: 'Car',
      thumbnail: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=300&q=80',
      rating: 4.8,
      reviewCount: '210 reviews'
    },
    details: {
      title: 'Riyadh City Highlights',
      subtitle: 'Private Car (3 pax)',
      checkIn: '4 Oct 2026 (09:00)',
      checkOut: '4 Oct 2026 (17:00)',
      rooms: 'Luxury Sedan Lexus ES',
      guestName: 'Layla Ahmad',
      specialRequest: 'Include National Museum stop'
    },
    date: '4 Oct 2026',
    amount: 'SAR 350',
    status: 'Pending',
    payment: {
      status: 'Awaiting Payment',
      paidAt: 'Pending Checkout'
    }
  }
];

export const ADMIN_BOOKING_TRENDS: AdminBookingTrendPoint[] = [
  { label: '1 Oct', total: 450, confirmed: 350, pending: 70, cancelled: 30 },
  { label: '5 Oct', total: 680, confirmed: 520, pending: 110, cancelled: 50 },
  { label: '10 Oct', total: 950, confirmed: 740, pending: 150, cancelled: 60 },
  { label: '15 Oct', total: 1250, confirmed: 980, pending: 190, cancelled: 80 },
  { label: '20 Oct', total: 1100, confirmed: 860, pending: 170, cancelled: 70 },
  { label: '25 Oct', total: 1450, confirmed: 1120, pending: 230, cancelled: 100 },
  { label: '30 Oct', total: 1680, confirmed: 1310, pending: 260, cancelled: 110 }
];

export const ADMIN_BOOKINGS_BY_SERVICE: AdminBookingCategoryShare[] = [
  { name: 'Hotels', count: '8,240', percentage: 42, color: '#0e5f2c' }, // dark emerald
  { name: 'Umrah Packages', count: '5,530', percentage: 28, color: '#0d9488' }, // teal
  { name: 'Transport', count: '3,610', percentage: 18, color: '#3b82f6' }, // blue
  { name: 'Experiences', count: '1,420', percentage: 7, color: '#f59e0b' }, // amber
  { name: 'Airport Services', count: '990', percentage: 5, color: '#06b6d4' } // sky
];
