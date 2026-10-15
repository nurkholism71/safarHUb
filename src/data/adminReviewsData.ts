import {
  ReviewKpi,
  ReviewDatabaseRecord,
  RatingDistributionItem,
  ServiceRatingScoreItem
} from '../types/adminReviews';

export const REVIEW_KPIS: ReviewKpi[] = [
  {
    id: 'avg-rating',
    title: 'Platform Rating',
    value: '4.88 ★',
    change: '↑ 0.12 pts',
    isPositive: true,
    subtitle: 'From 24,850 reviews',
    iconName: 'Star',
    bgColorClass: 'bg-amber-50 dark:bg-amber-950/50',
    iconColorClass: 'text-amber-500'
  },
  {
    id: 'total-reviews',
    title: 'Total Reviews',
    value: '24,850',
    change: '↑ 28%',
    isPositive: true,
    subtitle: 'vs last month',
    iconName: 'MessageSquare',
    bgColorClass: 'bg-emerald-50 dark:bg-emerald-950/50',
    iconColorClass: 'text-emerald-600 dark:text-emerald-400'
  },
  {
    id: 'verified-pilgrims',
    title: 'Verified Pilgrims',
    value: '98.4%',
    change: '↑ 2.1%',
    isPositive: true,
    subtitle: 'Confirmed bookings only',
    iconName: 'ShieldCheck',
    bgColorClass: 'bg-blue-50 dark:bg-blue-950/50',
    iconColorClass: 'text-blue-600 dark:text-blue-400'
  },
  {
    id: 'response-rate',
    title: 'Admin Reply Rate',
    value: '96.2%',
    change: '↑ 5.4%',
    isPositive: true,
    subtitle: 'Avg response time 2h',
    iconName: 'Reply',
    bgColorClass: 'bg-purple-50 dark:bg-purple-950/50',
    iconColorClass: 'text-purple-600 dark:text-purple-400'
  },
  {
    id: 'pending-moderation',
    title: 'Pending Moderation',
    value: '14',
    change: '↓ 8',
    isPositive: true,
    subtitle: 'Awaiting team review',
    iconName: 'Clock',
    bgColorClass: 'bg-teal-50 dark:bg-teal-950/50',
    iconColorClass: 'text-teal-600 dark:text-teal-400'
  },
  {
    id: 'disputed-reviews',
    title: 'Disputed / Flagged',
    value: '3',
    change: '↓ 2',
    isPositive: true,
    subtitle: 'Requires investigation',
    iconName: 'AlertTriangle',
    bgColorClass: 'bg-rose-50 dark:bg-rose-950/50',
    iconColorClass: 'text-rose-600 dark:text-rose-400'
  }
];

export const RATING_DISTRIBUTION: RatingDistributionItem[] = [
  { stars: 5, percentage: 76, count: 18886 },
  { stars: 4, percentage: 18, count: 4473 },
  { stars: 3, percentage: 4, count: 994 },
  { stars: 2, percentage: 1.2, count: 298 },
  { stars: 1, percentage: 0.8, count: 199 }
];

export const SERVICE_RATING_SCORES: ServiceRatingScoreItem[] = [
  { service: 'Hotels & Suites', score: 4.91, totalReviews: 9420 },
  { service: 'Umrah Packages', score: 4.95, totalReviews: 6840 },
  { service: 'VIP Transport & Fleet', score: 4.82, totalReviews: 4520 },
  { service: 'Airport Meet & Assist', score: 4.89, totalReviews: 2480 },
  { service: 'AlUla & Experiences', score: 4.93, totalReviews: 1590 }
];

export const REVIEWS_DB: ReviewDatabaseRecord[] = [
  {
    id: 'REV-9901',
    bookingCode: 'BK-2026-8812',
    customerName: 'H. Muhammad Irfan',
    customerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    customerCountry: 'Indonesia',
    serviceType: 'Hotels',
    serviceTitle: 'Makkah Clock Royal Tower, A Fairmont Hotel (Kaaba Suite)',
    rating: 5,
    reviewTitle: 'Pengalaman Luar Biasa! Pemandangan Langsung ke Ka\'bah Sangat Menakjubkan',
    reviewText: 'Alhamdulillah pelayanan hotel sangat memuaskan. Akses ke Masjidil Haram langsung lewat lift tanpa perlu keluar ke jalan raya. Makanan sahur dan buka puasa sangat lezat dengan staf yang sangat ramah.',
    photos: [
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=300&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300&auto=format&fit=crop&q=80'
    ],
    travelDate: 'Oct 2026',
    reviewDate: '08 Oct 2026',
    helpfulCount: 42,
    status: 'Approved',
    sentiment: 'Positive',
    adminReply: 'Jazakallah khair Bapak Muhammad Irfan atas ulasan indahnya. Kami senang sekali Anda dan keluarga mendapatkan pengalaman ibadah yang nyaman di Makkah. Semoga mabrur!',
    replyDate: '08 Oct 2026 14:20',
    verifiedPilgrim: true
  },
  {
    id: 'REV-9902',
    bookingCode: 'BK-2026-7450',
    customerName: 'Dato’ Sri Azlan Shah',
    customerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    customerCountry: 'Malaysia',
    serviceType: 'Umrah Packages',
    serviceTitle: 'VIP Executive Umrah 12 Days (Saudia Airlines Direct)',
    rating: 5,
    reviewTitle: 'Flawless arrangements and extremely knowledgeable Muthawif',
    reviewText: 'Everything was arranged smoothly from arrival at Jeddah airport until departure. The Haramain bullet train transfer between Makkah and Madinah was very comfortable. Highly recommended!',
    photos: [
      'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=300&auto=format&fit=crop&q=80'
    ],
    travelDate: 'Oct 2026',
    reviewDate: '07 Oct 2026',
    helpfulCount: 38,
    status: 'Approved',
    sentiment: 'Positive',
    adminReply: 'Thank you Dato’ Sri Azlan for trusting SafarHub Saudi. It was our utmost pleasure serving your family throughout the holy pilgrimage.',
    replyDate: '07 Oct 2026 16:45',
    verifiedPilgrim: true
  },
  {
    id: 'REV-9903',
    bookingCode: 'BK-2026-6120',
    customerName: 'Siti Nur Aisyah',
    customerAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
    customerCountry: 'Indonesia',
    serviceType: 'Airport Services',
    serviceTitle: 'Jeddah Airport VIP Fast Track & Executive Lounge',
    rating: 5,
    reviewTitle: 'Sangat Membantu Membawa Orang Tua Lansia Tanpa Antre',
    reviewText: 'Proses imigrasi sangat cepat hanya 5 menit, petugas pendamping sangat sopan dan menyediakan kursi roda langsung dari pintu pesawat. Orang tua saya tidak kelelahan sama sekali.',
    photos: [],
    travelDate: 'Oct 2026',
    reviewDate: '06 Oct 2026',
    helpfulCount: 29,
    status: 'Approved',
    sentiment: 'Positive',
    adminReply: 'Terima kasih Ibu Siti Nur Aisyah. Kenyamanan dan kemudahan jamaah lansia adalah prioritas nomor satu kami.',
    replyDate: '06 Oct 2026 19:10',
    verifiedPilgrim: true
  },
  {
    id: 'REV-9904',
    bookingCode: 'BK-2026-5912',
    customerName: 'Kareem Mansour',
    customerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80',
    customerCountry: 'Egypt',
    serviceType: 'Transport',
    serviceTitle: 'Private GMC Yukon XL Transfer Makkah to Madinah',
    rating: 4,
    reviewTitle: 'Comfortable luxury car and safe driver',
    reviewText: 'The GMC Yukon was spotless and brand new. Driver was 10 minutes early at hotel lobby. Only minor issue was slight traffic near Haram perimeter, but overall very good service.',
    photos: [],
    travelDate: 'Sep 2026',
    reviewDate: '04 Oct 2026',
    helpfulCount: 15,
    status: 'Approved',
    sentiment: 'Positive',
    verifiedPilgrim: true
  },
  {
    id: 'REV-9905',
    bookingCode: 'BK-2026-4829',
    customerName: 'Ahmed Al-Hassan',
    customerAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
    customerCountry: 'Saudi Arabia',
    serviceType: 'Experiences',
    serviceTitle: 'AlUla Stargazing & Hegra Heritage Night Tour',
    rating: 5,
    reviewTitle: 'Breathtaking starry sky and rich Nabataean history',
    reviewText: 'AlUla at night is magical. The guide explained the history with deep passion. The traditional Bedouin coffee and dates by the bonfire made it unforgettable.',
    photos: [
      'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=300&auto=format&fit=crop&q=80'
    ],
    travelDate: 'Oct 2026',
    reviewDate: '02 Oct 2026',
    helpfulCount: 22,
    status: 'Approved',
    sentiment: 'Positive',
    verifiedPilgrim: true
  }
];
