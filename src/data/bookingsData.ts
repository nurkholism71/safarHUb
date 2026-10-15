import { BookingItem, BookingSummaryStats, RecommendedTripItem } from '../types/bookings';

export const ALL_BOOKINGS: BookingItem[] = [
  {
    id: 'hbk-1',
    bookingCode: 'HBK-102938',
    category: 'hotel',
    categoryLabel: 'Hotel Booking',
    title: 'Makkah Hilton Convention Hotel',
    dateRange: 'Makkah • 12 Oct – 15 Oct 2026 • 3 Nights',
    status: 'Upcoming',
    statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    badgeLabel: 'Confirmed',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
    priceSAR: 2850,
    specs: ['2 Rooms', '4 Adults', 'Breakfast Included']
  },
  {
    id: 'tbk-2',
    bookingCode: 'TBK-102939',
    category: 'transport',
    categoryLabel: 'Transport Booking',
    title: 'Jeddah Airport ➔ Makkah Hotel',
    dateRange: '12 Oct 2026 • 09:00',
    status: 'Upcoming',
    statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    badgeLabel: 'Confirmed',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80',
    priceSAR: 450,
    specs: ['Private Van', '4 Passengers', 'Meet & Greet']
  },
  {
    id: 'abk-3',
    bookingCode: 'ABK-102940',
    category: 'airport',
    categoryLabel: 'Airport Service',
    title: 'Meet & Greet – Jeddah Airport (JED)',
    dateRange: '12 Oct 2026 • 08:00',
    status: 'Upcoming',
    statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    badgeLabel: 'Confirmed',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=80',
    priceSAR: 300,
    specs: ['4 Passengers', 'Luggage Assistance', 'Fast Track']
  },
  {
    id: 'ubk-4',
    bookingCode: 'UBK-102941',
    category: 'umrah',
    categoryLabel: 'Umrah Package',
    title: 'Essential Umrah – 7 Days',
    dateRange: '12 Oct – 19 Oct 2026',
    status: 'Upcoming',
    statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    badgeLabel: 'Confirmed',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=600&q=80',
    priceSAR: 3900,
    specs: ['Makkah + Madinah', 'Hotel + Transport', 'Ziyarat Tour']
  },
  {
    id: 'jbk-5',
    bookingCode: 'JBK-102942',
    category: 'jastip',
    categoryLabel: 'Jastip Order',
    title: 'Oud Perfume × 2, Ajwa Dates × 5',
    dateRange: 'Requested: 10 Oct 2026',
    status: 'Processing',
    statusColor: 'bg-amber-100 text-amber-800 border-amber-200',
    badgeLabel: 'Processing',
    image: '/images/jastip/ajwa_dates.jpg',
    priceSAR: 650,
    specs: ['2 Items', 'Express Cargo', 'Verified Proof'],
    jastipSteps: [
      { name: 'Request', completed: true },
      { name: 'Quotation', completed: true },
      { name: 'Shopping', completed: true },
      { name: 'Shipping', completed: false },
      { name: 'Delivered', completed: false }
    ]
  },
  {
    id: 'fbk-6',
    bookingCode: 'FBK-102900',
    category: 'flight',
    categoryLabel: 'Flight Booking',
    title: 'Riyadh ➔ Jeddah',
    dateRange: '5 Oct 2026 • SV 122 • Saudi Arabian Airlines',
    status: 'Completed',
    statusColor: 'bg-teal-100 text-teal-800 border-teal-200',
    badgeLabel: 'Completed',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80',
    priceSAR: 1200,
    specs: ['4 Passengers', 'Economy', 'E-Ticket']
  }
];

export const BOOKING_SUMMARY_STATS: BookingSummaryStats = {
  total: 8,
  upcoming: 5,
  completed: 2,
  processing: 1,
  cancelled: 1
};

export const RECOMMENDED_TRIP_ITEMS: RecommendedTripItem[] = [
  {
    id: 'rec-1',
    title: 'Hotel in Madinah',
    priceSAR: 350,
    unit: '/night',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'rec-2',
    title: 'Makkah ➔ Madinah Bus',
    priceSAR: 120,
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'rec-3',
    title: 'Ziyarat Tour',
    priceSAR: 250,
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'rec-4',
    title: 'Travel Insurance',
    priceSAR: 150,
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'rec-5',
    title: 'Sim Card',
    priceSAR: 80,
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'rec-6',
    title: 'Extra Night Hotel',
    priceSAR: 400,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80'
  }
];
