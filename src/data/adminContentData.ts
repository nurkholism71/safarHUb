import {
  ContentKpi,
  ContentArticleRecord,
  ContentGuideRecord,
  ContentMediaAssetRecord,
  ContentBannerRecord,
  ContentFaqRecord
} from '../types/adminContent';

export const CONTENT_KPIS: ContentKpi[] = [
  {
    id: 'total-articles',
    title: 'Total Articles',
    value: '148',
    change: '↑ 18%',
    isPositive: true,
    subtitle: 'vs last month',
    iconName: 'FileText',
    bgColorClass: 'bg-emerald-50 dark:bg-emerald-950/50',
    iconColorClass: 'text-emerald-600 dark:text-emerald-400'
  },
  {
    id: 'total-views',
    title: 'Article & Guide Views',
    value: '1,420,500',
    change: '↑ 32%',
    isPositive: true,
    subtitle: 'vs last month',
    iconName: 'Eye',
    bgColorClass: 'bg-blue-50 dark:bg-blue-950/50',
    iconColorClass: 'text-blue-600 dark:text-blue-400'
  },
  {
    id: 'media-assets',
    title: 'Media Assets Stored',
    value: '3,840',
    change: '↑ 14%',
    isPositive: true,
    subtitle: 'High Res (38.4 GB)',
    iconName: 'Image',
    bgColorClass: 'bg-purple-50 dark:bg-purple-950/50',
    iconColorClass: 'text-purple-600 dark:text-purple-400'
  },
  {
    id: 'guide-downloads',
    title: 'Pilgrim Guide Downloads',
    value: '84,200',
    change: '↑ 24%',
    isPositive: true,
    subtitle: 'PDF & Mobile App',
    iconName: 'BookOpen',
    bgColorClass: 'bg-amber-50 dark:bg-amber-950/50',
    iconColorClass: 'text-amber-600 dark:text-amber-400'
  },
  {
    id: 'avg-read-time',
    title: 'Avg. Engagement Time',
    value: '4m 32s',
    change: '↑ 15%',
    isPositive: true,
    subtitle: 'High retention rate',
    iconName: 'Clock',
    bgColorClass: 'bg-rose-50 dark:bg-rose-950/50',
    iconColorClass: 'text-rose-600 dark:text-rose-400'
  },
  {
    id: 'seo-health',
    title: 'SEO Content Score',
    value: '94 / 100',
    change: '↑ 6 pts',
    isPositive: true,
    subtitle: 'Top Google rankings',
    iconName: 'Sparkles',
    bgColorClass: 'bg-teal-50 dark:bg-teal-950/50',
    iconColorClass: 'text-teal-600 dark:text-teal-400'
  }
];

export const CONTENT_ARTICLES_DB: ContentArticleRecord[] = [
  {
    id: 'ART-2026-001',
    code: 'UMR-RAJAB-2026',
    title: 'Panduan Lengkap Keutamaan & Tata Cara Umroh di Bulan Rajab',
    slug: 'keutamaan-tata-cara-umroh-rajab-2026',
    category: 'Umrah & Hajj',
    author: 'Ust. Ahmad Dahlan',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    readTime: '6 min read',
    views: 482000,
    shares: 4820,
    likes: 12400,
    status: 'Published',
    publishDate: '2026-10-02',
    featuredImage: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&auto=format&fit=crop&q=80',
    tags: ['Umrah 2026', 'Rajab', 'Manasik', 'Makkah'],
    language: 'Indonesian',
    seoScore: 98
  },
  {
    id: 'ART-2026-002',
    code: 'HTL-KABAH-VIEW',
    title: 'Top 7 Luxury Hotels in Makkah with Direct Kaaba & Haram View',
    slug: 'top-7-luxury-hotels-makkah-kaaba-view',
    category: 'Hotels & Stay',
    author: 'Sarah Nadia',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    readTime: '5 min read',
    views: 348000,
    shares: 3120,
    likes: 9800,
    status: 'Published',
    publishDate: '2026-10-04',
    featuredImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&auto=format&fit=crop&q=80',
    tags: ['Makkah Hotels', 'Luxury Stay', 'Fairmont', 'Raffles'],
    language: 'English',
    seoScore: 95
  },
  {
    id: 'ART-2026-003',
    code: 'JED-ALBALAD-GUIDE',
    title: 'Menyusuri Keindahan Arsitektur Bersejarah Al-Balad di Kota Jeddah',
    slug: 'panduan-wisata-al-balad-jeddah',
    category: 'Saudi Culture & Heritage',
    author: 'Tariq Al-Mansoor',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    readTime: '4 min read',
    views: 215000,
    shares: 1940,
    likes: 6400,
    status: 'Published',
    publishDate: '2026-10-06',
    featuredImage: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=400&auto=format&fit=crop&q=80',
    tags: ['Jeddah', 'Al-Balad', 'UNESCO', 'Saudi Heritage'],
    language: 'Indonesian',
    seoScore: 92
  },
  {
    id: 'ART-2026-004',
    code: 'TRN-HARAMAIN-TIPS',
    title: 'How to Book and Ride the Haramain High-Speed Train: Step-by-Step',
    slug: 'haramain-high-speed-train-booking-guide',
    category: 'Travel Tips',
    author: 'Content Editorial Team',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80',
    readTime: '7 min read',
    views: 194000,
    shares: 2450,
    likes: 7200,
    status: 'Published',
    publishDate: '2026-10-07',
    featuredImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&auto=format&fit=crop&q=80',
    tags: ['Haramain Train', 'Makkah to Madinah', 'High Speed Rail'],
    language: 'English',
    seoScore: 96
  },
  {
    id: 'ART-2026-005',
    code: 'ALULA-EXPERIENCE',
    title: 'Eksplorasi Keajaiban Hegra & Lembah Kuno AlUla: Destinasi Impian di Saudi',
    slug: 'eksplorasi-keajaiban-alula-hegra',
    category: 'Saudi Culture & Heritage',
    author: 'Fathima Zahra',
    authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
    readTime: '8 min read',
    views: 142000,
    shares: 1680,
    likes: 5100,
    status: 'Scheduled',
    publishDate: '2026-10-15',
    featuredImage: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=400&auto=format&fit=crop&q=80',
    tags: ['AlUla', 'Hegra', 'Desert Safari', 'Winter at Tantora'],
    language: 'Indonesian',
    seoScore: 91
  }
];

export const CONTENT_GUIDES_DB: ContentGuideRecord[] = [
  {
    id: 'GD-01',
    title: 'Panduan Lengkap Ibadah Umrah: Manasik, Doa & Rukun dari Miqat s/d Tahallul',
    city: 'Makkah',
    category: 'Pilgrim Rituals',
    stepCount: 14,
    downloadsCount: 42500,
    rating: 4.95,
    status: 'Published',
    lastUpdated: '06 Oct 2026',
    featuredImage: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=300&auto=format&fit=crop&q=80'
  },
  {
    id: 'GD-02',
    title: 'Ziyarah Madinah: Panduan Raudhah, Masjid Nabawi, Quba & Jabal Uhud',
    city: 'Madinah',
    category: 'Historical Ziyarah',
    stepCount: 10,
    downloadsCount: 28400,
    rating: 4.92,
    status: 'Published',
    lastUpdated: '04 Oct 2026',
    featuredImage: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=300&auto=format&fit=crop&q=80'
  },
  {
    id: 'GD-03',
    title: 'Jeddah Coastal & Red Sea Discovery: Al-Balad, Floating Mosque & Waterfront',
    city: 'Jeddah',
    category: 'Shopping & Souvenir',
    stepCount: 8,
    downloadsCount: 18200,
    rating: 4.88,
    status: 'Published',
    lastUpdated: '02 Oct 2026',
    featuredImage: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=300&auto=format&fit=crop&q=80'
  }
];

export const CONTENT_MEDIA_DB: ContentMediaAssetRecord[] = [
  {
    id: 'MED-01',
    fileName: 'makkah_kaaba_aerial_4k.jpg',
    title: 'Kaaba Aerial Sunset View with Full Courtyard',
    fileType: 'Image (JPG/PNG)',
    fileSize: '4.8 MB',
    dimensions: '3840 x 2160',
    url: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&auto=format&fit=crop&q=80',
    category: 'Holy Sites',
    uploadedBy: 'Content Team',
    uploadDate: '08 Oct 2026',
    usedInCount: 18
  },
  {
    id: 'MED-02',
    fileName: 'masjid_nabawi_green_dome.jpg',
    title: 'Masjid Nabawi Green Dome & Umbrellas',
    fileType: 'Image (JPG/PNG)',
    fileSize: '3.6 MB',
    dimensions: '3200 x 2000',
    url: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=400&auto=format&fit=crop&q=80',
    category: 'Holy Sites',
    uploadedBy: 'Media Lead',
    uploadDate: '07 Oct 2026',
    usedInCount: 14
  },
  {
    id: 'MED-03',
    fileName: 'clock_royal_tower_night.jpg',
    title: 'Fairmont Makkah Clock Tower Illuminated',
    fileType: 'Image (JPG/PNG)',
    fileSize: '5.2 MB',
    dimensions: '4000 x 2600',
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&auto=format&fit=crop&q=80',
    category: 'Hotels',
    uploadedBy: 'Design Dept',
    uploadDate: '05 Oct 2026',
    usedInCount: 22
  }
];

export const CONTENT_BANNERS_DB: ContentBannerRecord[] = [
  {
    id: 'BAN-01',
    title: 'Umrah Special Promo October 2026 - Save SAR 800',
    placement: 'Home Hero Slider',
    targetUrl: '/umrah/special-oct-promo',
    impressions: 480000,
    clicks: 42000,
    ctr: '8.75%',
    status: 'Active',
    startDate: '2026-10-01',
    endDate: '2026-10-31',
    imageUrl: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'BAN-02',
    title: '5-Star Hotel Deals Near Masjid Al-Haram',
    placement: 'Deals Top Header',
    targetUrl: '/hotels/makkah-deals',
    impressions: 320000,
    clicks: 28400,
    ctr: '8.87%',
    status: 'Active',
    startDate: '2026-10-05',
    endDate: '2026-11-15',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&auto=format&fit=crop&q=80'
  }
];

export const CONTENT_FAQS_DB: ContentFaqRecord[] = [
  {
    id: 'FAQ-01',
    question: 'Apa saja syarat membuat Visa Umrah Mandiri atau Tourist eVisa Saudi?',
    answer: 'Syarat utama meliputi paspor yang berlaku minimal 6 bulan, foto digital berlatar putih, asuransi kesehatan yang disetujui pemerintah Saudi (termasuk saat apply eVisa), dan tiket penerbangan pulang-pergi terkonfirmasi.',
    category: 'Umrah Visa & Requirements',
    orderIndex: 1,
    helpfulVotes: 1480,
    status: 'Published',
    lastModified: '08 Oct 2026'
  },
  {
    id: 'FAQ-02',
    question: 'Bagaimana cara reservasi jadwal tasreh masuk Raudhah di Masjid Nabawi?',
    answer: 'Pemesanan izin Raudhah untuk jamaah pria dan wanita dilakukan melalui aplikasi resmi Nusuk. SafarHub menyediakan bantuan reservasi tasreh VIP langsung saat Anda memesan paket perjalanan.',
    category: 'Umrah Visa & Requirements',
    orderIndex: 2,
    helpfulVotes: 1250,
    status: 'Published',
    lastModified: '06 Oct 2026'
  },
  {
    id: 'FAQ-03',
    question: 'Berapa jarak jalan kaki dari hotel Clock Tower ke pelataran Ka\'bah?',
    answer: 'Kompleks Abraj Al-Bait (Makkah Clock Tower) terhubung langsung dengan lift ke pelataran Masjidil Haram. Jarak ke pintu masuk King Abdulaziz hanya sekitar 50–100 meter (2–3 menit jalan kaki).',
    category: 'Hotel Check-in & Haram View',
    orderIndex: 3,
    helpfulVotes: 980,
    status: 'Published',
    lastModified: '04 Oct 2026'
  }
];
