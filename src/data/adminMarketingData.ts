import {
  MarketingKpi,
  CampaignPerformancePoint,
  ChannelPerformanceItem,
  AudienceDemographicItem,
  ActiveCampaignItem,
  MarketingToolItem,
  TopContentItem,
  LeadSourceItem,
  RecentMarketingActivityItem,
  CampaignDatabaseRecord,
  ContentDatabaseRecord,
  SocialPostDatabaseRecord,
  EmailCampaignDatabaseRecord,
  AdCampaignDatabaseRecord,
  SeoKeywordRecord,
  InfluencerRecord,
  LoyaltyProgramRecord,
  AutomationWorkflowRecord,
  MarketingReportRecord
} from '../types/adminMarketing';

export const MARKETING_KPIS: MarketingKpi[] = [
  {
    id: 'total-reach',
    title: 'Total Reach',
    value: '2,850,640',
    change: '↑ 28%',
    isPositive: true,
    subtitle: 'vs last month',
    iconName: 'Megaphone',
    bgColorClass: 'bg-emerald-50 dark:bg-emerald-950/50',
    iconColorClass: 'text-emerald-600 dark:text-emerald-400'
  },
  {
    id: 'engagement',
    title: 'Engagement',
    value: '186,240',
    change: '↑ 35%',
    isPositive: true,
    subtitle: 'vs last month',
    iconName: 'Users',
    bgColorClass: 'bg-blue-50 dark:bg-blue-950/50',
    iconColorClass: 'text-blue-600 dark:text-blue-400'
  },
  {
    id: 'bookings-marketing',
    title: 'Bookings from Marketing',
    value: '8,420',
    change: '↑ 42%',
    isPositive: true,
    subtitle: 'vs last month',
    iconName: 'ShoppingCart',
    bgColorClass: 'bg-rose-50 dark:bg-rose-950/50',
    iconColorClass: 'text-rose-600 dark:text-rose-400'
  },
  {
    id: 'revenue-generated',
    title: 'Revenue Generated',
    value: 'SAR 3,250,800',
    change: '↑ 38%',
    isPositive: true,
    subtitle: 'vs last month',
    iconName: 'Coins',
    bgColorClass: 'bg-amber-50 dark:bg-amber-950/50',
    iconColorClass: 'text-amber-600 dark:text-amber-400'
  },
  {
    id: 'roi',
    title: 'ROI',
    value: '520%',
    change: '↑ 85%',
    isPositive: true,
    subtitle: 'vs last month',
    iconName: 'Target',
    bgColorClass: 'bg-teal-50 dark:bg-teal-950/50',
    iconColorClass: 'text-teal-600 dark:text-teal-400'
  }
];

export const MARKETING_CAMPAIGN_PERFORMANCE: CampaignPerformancePoint[] = [
  { date: '1 Oct', reach: 35000, bookings: 120, revenue: 45000 },
  { date: '5 Oct', reach: 55000, bookings: 190, revenue: 78000 },
  { date: '10 Oct', reach: 85000, bookings: 310, revenue: 125000 },
  { date: '15 Oct', reach: 110000, bookings: 420, revenue: 165000 },
  { date: '20 Oct', reach: 145000, bookings: 560, revenue: 215000 },
  { date: '25 Oct', reach: 170000, bookings: 680, revenue: 270000 },
  { date: '31 Oct', reach: 195000, bookings: 820, revenue: 340000 }
];

export const MARKETING_CHANNEL_PERFORMANCE: ChannelPerformanceItem[] = [
  { id: 'ig', channel: 'Instagram', iconName: 'Instagram', reach: 360, engagement: 210, bookings: 150, color: '#E1306C' },
  { id: 'tt', channel: 'TikTok', iconName: 'Video', reach: 260, engagement: 160, bookings: 110, color: '#000000' },
  { id: 'fb', channel: 'Facebook', iconName: 'Facebook', reach: 220, engagement: 140, bookings: 90, color: '#1877F2' },
  { id: 'yt', channel: 'YouTube', iconName: 'Youtube', reach: 180, engagement: 90, bookings: 60, color: '#FF0000' },
  { id: 'ga', channel: 'Google Ads', iconName: 'Target', reach: 210, engagement: 130, bookings: 80, color: '#4285F4' },
  { id: 'em', channel: 'Email', iconName: 'Mail', reach: 230, engagement: 120, bookings: 75, color: '#0e5f2c' },
  { id: 'wa', channel: 'WhatsApp', iconName: 'PhoneCall', reach: 200, engagement: 110, bookings: 95, color: '#25D366' }
];

export const MARKETING_AUDIENCE_DEMOGRAPHICS: AudienceDemographicItem[] = [
  { country: 'Indonesia', percentage: 35, color: '#3b82f6' },
  { country: 'Saudi Arabia', percentage: 28, color: '#10b981' },
  { country: 'Malaysia', percentage: 12, color: '#6366f1' },
  { country: 'Egypt', percentage: 10, color: '#f59e0b' },
  { country: 'Pakistan', percentage: 8, color: '#06b6d4' },
  { country: 'Others', percentage: 7, color: '#ec4899' }
];

export const MARKETING_ACTIVE_CAMPAIGNS: ActiveCampaignItem[] = [
  {
    id: 'camp-1',
    title: 'Umroh Special Promo October 2026',
    subtitle: 'Get 20% off for selected packages',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&auto=format&fit=crop&q=80',
    status: 'Active',
    reach: '850K',
    bookings: '1,240',
    revenue: 'SAR 520,800'
  },
  {
    id: 'camp-2',
    title: 'Makkah Hotel Deals',
    subtitle: 'Exclusive hotel discounts near Masjid Al-Haram',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&auto=format&fit=crop&q=80',
    status: 'Active',
    reach: '620K',
    bookings: '980',
    revenue: 'SAR 420,300'
  },
  {
    id: 'camp-3',
    title: 'Flight to Jeddah',
    subtitle: 'Best flight deals for Umrah travelers',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&auto=format&fit=crop&q=80',
    status: 'Active',
    reach: '480K',
    bookings: '860',
    revenue: 'SAR 380,500'
  },
  {
    id: 'camp-4',
    title: 'AlUla Experience Campaign',
    subtitle: 'Discover the heritage of AlUla',
    image: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=400&auto=format&fit=crop&q=80',
    status: 'Scheduled',
    reach: '300K',
    bookings: '420',
    revenue: 'SAR 260,400'
  }
];

export const MARKETING_TOOLS: MarketingToolItem[] = [
  { id: 'tool-1', name: 'Content Creator', iconName: 'Image', bgColor: 'bg-emerald-50 dark:bg-emerald-950/40', iconColor: 'text-emerald-600' },
  { id: 'tool-2', name: 'Social Media Planner', iconName: 'Calendar', bgColor: 'bg-blue-50 dark:bg-blue-950/40', iconColor: 'text-blue-600' },
  { id: 'tool-3', name: 'Email Campaign', iconName: 'Mail', bgColor: 'bg-rose-50 dark:bg-rose-950/40', iconColor: 'text-rose-600' },
  { id: 'tool-4', name: 'SMS & WhatsApp', iconName: 'MessageSquare', bgColor: 'bg-green-50 dark:bg-green-950/40', iconColor: 'text-green-600' },
  { id: 'tool-5', name: 'Ads Manager', iconName: 'Megaphone', bgColor: 'bg-sky-50 dark:bg-sky-950/40', iconColor: 'text-sky-600' },
  { id: 'tool-6', name: 'SEO Tools', iconName: 'TrendingUp', bgColor: 'bg-amber-50 dark:bg-amber-950/40', iconColor: 'text-amber-600' },
  { id: 'tool-7', name: 'Influencer Management', iconName: 'Users', bgColor: 'bg-purple-50 dark:bg-purple-950/40', iconColor: 'text-purple-600' },
  { id: 'tool-8', name: 'Referral & Loyalty', iconName: 'Gift', bgColor: 'bg-orange-50 dark:bg-orange-950/40', iconColor: 'text-orange-600' },
  { id: 'tool-9', name: 'Automation', iconName: 'Bot', bgColor: 'bg-teal-50 dark:bg-teal-950/40', iconColor: 'text-teal-600' }
];

export const MARKETING_TOP_CONTENT: TopContentItem[] = [
  {
    id: 'cnt-1',
    rank: 1,
    title: 'Keutamaan Umroh di Bulan Rajab',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=150&auto=format&fit=crop&q=80',
    channel: 'Instagram',
    channelIcon: 'Instagram',
    type: 'Video',
    reach: '520K',
    engagement: '12.5%',
    bookings: 480
  },
  {
    id: 'cnt-2',
    rank: 2,
    title: 'Tips Persiapan Umroh',
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=150&auto=format&fit=crop&q=80',
    channel: 'TikTok',
    channelIcon: 'Video',
    type: 'Video',
    reach: '480K',
    engagement: '11.8%',
    bookings: 420
  },
  {
    id: 'cnt-3',
    rank: 3,
    title: 'Promo Hotel Makkah 5★',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=150&auto=format&fit=crop&q=80',
    channel: 'Facebook',
    channelIcon: 'Facebook',
    type: 'Image',
    reach: '350K',
    engagement: '9.2%',
    bookings: 320
  },
  {
    id: 'cnt-4',
    rank: 4,
    title: 'Pengalaman Umroh Bersama SafarHub',
    image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=150&auto=format&fit=crop&q=80',
    channel: 'YouTube',
    channelIcon: 'Youtube',
    type: 'Video',
    reach: '310K',
    engagement: '8.5%',
    bookings: 280
  },
  {
    id: 'cnt-5',
    rank: 5,
    title: 'Panduan Lengkap City Tour Jeddah',
    image: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=150&auto=format&fit=crop&q=80',
    channel: 'Instagram',
    channelIcon: 'Instagram',
    type: 'Carousel',
    reach: '280K',
    engagement: '7.6%',
    bookings: 250
  }
];

export const MARKETING_LEAD_SOURCES: LeadSourceItem[] = [
  { id: 'ls-1', name: 'Social Media', iconName: 'Instagram', percentage: 38, color: '#3b82f6' },
  { id: 'ls-2', name: 'Google Ads', iconName: 'Target', percentage: 22, color: '#10b981' },
  { id: 'ls-3', name: 'Direct Traffic', iconName: 'Globe', percentage: 15, color: '#6366f1' },
  { id: 'ls-4', name: 'Email Marketing', iconName: 'Mail', percentage: 10, color: '#f59e0b' },
  { id: 'ls-5', name: 'Partner / Agent', iconName: 'Users', percentage: 8, color: '#06b6d4' },
  { id: 'ls-6', name: 'Referral', iconName: 'Gift', percentage: 5, color: '#ec4899' },
  { id: 'ls-7', name: 'Others', iconName: 'MoreHorizontal', percentage: 2, color: '#64748b' }
];

export const MARKETING_RECENT_ACTIVITIES: RecentMarketingActivityItem[] = [
  {
    id: 'act-1',
    title: 'Email campaign "Umroh Promo October" sent',
    details: 'Sent to 125,000 active subscribers',
    timestamp: '2 minutes ago',
    iconName: 'Send',
    iconColor: 'text-emerald-500',
    channelBadge: 'Email'
  },
  {
    id: 'act-2',
    title: 'New ad campaign started on Facebook',
    details: 'Budget SAR 5,000 • Target: Indonesia',
    timestamp: '15 minutes ago',
    iconName: 'Facebook',
    iconColor: 'text-blue-500',
    channelBadge: 'Facebook'
  },
  {
    id: 'act-3',
    title: 'WhatsApp broadcast for hotel deals',
    details: 'Sent to 45,000 verified contacts',
    timestamp: '1 hour ago',
    iconName: 'PhoneCall',
    iconColor: 'text-green-500',
    channelBadge: 'WhatsApp'
  },
  {
    id: 'act-4',
    title: 'New Instagram post published',
    details: '"Keutamaan Umroh di Bulan Rajab"',
    timestamp: '2 hours ago',
    iconName: 'Instagram',
    iconColor: 'text-pink-500',
    channelBadge: 'Instagram'
  },
  {
    id: 'act-5',
    title: 'Reached 100K views on TikTok video',
    details: '"Tips Persiapan Umroh"',
    timestamp: '3 hours ago',
    iconName: 'Video',
    iconColor: 'text-purple-500',
    channelBadge: 'TikTok'
  }
];

// ========================================================
// REALISTIC MOCK DATABASES FOR MARKETING SUBMENUS
// ========================================================

export const MARKETING_CAMPAIGNS_DB: CampaignDatabaseRecord[] = [
  {
    id: 'CMP-2026-001',
    code: 'UMR-OCT-PROMO',
    title: 'Umrah Special Promo October 2026',
    objective: 'Conversion',
    channel: 'Omnichannel',
    budget: 45000,
    spent: 32400,
    reach: 850000,
    clicks: 64200,
    bookings: 1240,
    revenue: 520800,
    roi: '1,507%',
    startDate: '2026-10-01',
    endDate: '2026-10-31',
    status: 'Active',
    targetAudience: 'Muslim Family Pilgrims (ID, MY, SA)'
  },
  {
    id: 'CMP-2026-002',
    code: 'MKK-HTL-DEAL',
    title: 'Makkah Clock Royal Tower Exclusive',
    objective: 'Seasonal Promo',
    channel: 'Google Ads',
    budget: 30000,
    spent: 24500,
    reach: 620000,
    clicks: 48900,
    bookings: 980,
    revenue: 420300,
    roi: '1,615%',
    startDate: '2026-10-05',
    endDate: '2026-11-15',
    status: 'Active',
    targetAudience: 'Luxury & 5-Star Hotel Seekers'
  },
  {
    id: 'CMP-2026-003',
    code: 'JED-FLT-SAVER',
    title: 'Flight Deals to King Abdulaziz Airport',
    objective: 'Lead Generation',
    channel: 'Instagram',
    budget: 25000,
    spent: 19800,
    reach: 480000,
    clicks: 39500,
    bookings: 860,
    revenue: 380500,
    roi: '1,821%',
    startDate: '2026-10-08',
    endDate: '2026-11-30',
    status: 'Active',
    targetAudience: 'Direct Flight & Transit Travelers'
  },
  {
    id: 'CMP-2026-004',
    code: 'ALULA-HERITAGE',
    title: 'AlUla Oasis & Hegra Discovery Tour',
    objective: 'Brand Awareness',
    channel: 'TikTok',
    budget: 20000,
    spent: 8500,
    reach: 300000,
    clicks: 22400,
    bookings: 420,
    revenue: 260400,
    roi: '1,963%',
    startDate: '2026-10-15',
    endDate: '2026-12-10',
    status: 'Scheduled',
    targetAudience: 'Adventure & Cultural Heritage Explorers'
  },
  {
    id: 'CMP-2026-005',
    code: 'MED-VIP-ZIYARAT',
    title: 'Madinah Historical Places VIP Bus',
    objective: 'Conversion',
    channel: 'WhatsApp',
    budget: 12000,
    spent: 11800,
    reach: 190000,
    clicks: 18200,
    bookings: 640,
    revenue: 198000,
    roi: '1,577%',
    startDate: '2026-09-15',
    endDate: '2026-10-15',
    status: 'Active',
    targetAudience: 'Pilgrims currently staying in Madinah'
  },
  {
    id: 'CMP-2026-006',
    code: 'JASTIP-OLEH2',
    title: 'Jastip Kurma Ajwa & Air Zamzam Direct',
    objective: 'Retention',
    channel: 'Email',
    budget: 8000,
    spent: 7200,
    reach: 145000,
    clicks: 16400,
    bookings: 780,
    revenue: 156000,
    roi: '2,066%',
    startDate: '2026-10-01',
    endDate: '2026-10-25',
    status: 'Active',
    targetAudience: 'Past Umrah Travelers & Family Back Home'
  }
];

export const MARKETING_CONTENT_DB: ContentDatabaseRecord[] = [
  {
    id: 'CNT-901',
    code: 'ART-UMR-01',
    title: 'Keutamaan Umroh di Bulan Rajab & Syaban',
    format: 'Article/Blog',
    channel: 'Website Blog',
    publishDate: '2026-10-02',
    author: 'Ust. Ahmad Dahlan',
    reach: 520000,
    engagementRate: '12.5%',
    shares: 4820,
    bookingsAttributed: 480,
    status: 'Published',
    thumbnail: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=300&auto=format&fit=crop&q=80',
    category: 'Umrah Tips'
  },
  {
    id: 'CNT-902',
    code: 'REL-TIP-02',
    title: '5 Tips Persiapan Fisik & Manasik Umrah Mandiri',
    format: 'Video/Reel',
    channel: 'TikTok',
    publishDate: '2026-10-04',
    author: 'Sarah Nadia',
    reach: 480000,
    engagementRate: '11.8%',
    shares: 6120,
    bookingsAttributed: 420,
    status: 'Published',
    thumbnail: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=300&auto=format&fit=crop&q=80',
    category: 'Umrah Tips'
  },
  {
    id: 'CNT-903',
    code: 'IMG-MKK-03',
    title: 'Rekomendasi 5 Hotel View Ka\'bah Terbaik 2026',
    format: 'Carousel',
    channel: 'Instagram',
    publishDate: '2026-10-06',
    author: 'Content Team',
    reach: 350000,
    engagementRate: '9.2%',
    shares: 2890,
    bookingsAttributed: 320,
    status: 'Published',
    thumbnail: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300&auto=format&fit=crop&q=80',
    category: 'Hotels & Stay'
  },
  {
    id: 'CNT-904',
    code: 'VID-JED-04',
    title: 'Panduan Tour Bersejarah Al-Balad Jeddah',
    format: 'Video/Reel',
    channel: 'YouTube',
    publishDate: '2026-10-08',
    author: 'Travel Creator Tariq',
    reach: 310000,
    engagementRate: '8.5%',
    shares: 1940,
    bookingsAttributed: 280,
    status: 'Published',
    thumbnail: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=300&auto=format&fit=crop&q=80',
    category: 'Saudi Culture'
  },
  {
    id: 'CNT-905',
    code: 'PST-FLT-05',
    title: 'Flash Sale Tiket Saudia Airlines Jeddah Direct',
    format: 'Photo Post',
    channel: 'Facebook',
    publishDate: '2026-10-10',
    author: 'Promo Specialist',
    reach: 280000,
    engagementRate: '7.6%',
    shares: 3120,
    bookingsAttributed: 250,
    status: 'Published',
    thumbnail: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300&auto=format&fit=crop&q=80',
    category: 'Flight Deals'
  }
];

export const MARKETING_SOCIAL_POSTS_DB: SocialPostDatabaseRecord[] = [
  {
    id: 'SOC-001',
    platform: 'Instagram',
    caption: 'Suasana sholat subuh di depan Ka\'bah yang begitu syahdu. Siapa yang rindu berkunjung ke Baitullah? 🕋✨',
    mediaUrl: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=300&auto=format&fit=crop&q=80',
    postType: 'Reel/Short',
    scheduledDate: '2026-10-08 05:30',
    likes: 42500,
    comments: 1840,
    shares: 5620,
    clicks: 3410,
    status: 'Published',
    campaignTag: '#UmrahSafarHub'
  },
  {
    id: 'SOC-002',
    platform: 'TikTok',
    caption: 'POV: Pertama kali melangkah ke Masjid Nabawi dari pintu Babussalam 🕌💚',
    mediaUrl: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=300&auto=format&fit=crop&q=80',
    postType: 'Reel/Short',
    scheduledDate: '2026-10-08 11:00',
    likes: 68900,
    comments: 3200,
    shares: 9400,
    clicks: 4890,
    status: 'Published',
    campaignTag: '#MadinahVibes'
  },
  {
    id: 'SOC-003',
    platform: 'Facebook',
    caption: 'Daftar paket Umrah Plus Turki & Dubai keberangkatan November 2026 telah dibuka. Dapatkan potongan s/d SAR 1,000!',
    mediaUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300&auto=format&fit=crop&q=80',
    postType: 'Image Carousel',
    scheduledDate: '2026-10-09 14:00',
    likes: 12400,
    comments: 890,
    shares: 2100,
    clicks: 1950,
    status: 'Scheduled',
    campaignTag: '#UmrahPlusPromo'
  }
];

export const MARKETING_EMAIL_CAMPAIGNS_DB: EmailCampaignDatabaseRecord[] = [
  {
    id: 'EML-101',
    subject: '🕋 Diskon Khusus Umrah Musim Dingin: Hemat hingga SAR 800 per orang!',
    previewText: 'Pesan paket Umrah bintang 5 dengan kemudahan cicilan dan visa kilat.',
    segment: 'All Subscribers',
    recipientsCount: 125000,
    sentDate: '2026-10-05',
    openRate: '32.4%',
    clickRate: '8.7%',
    bounceRate: '0.4%',
    conversions: 620,
    revenueGenerated: 248000,
    status: 'Sent',
    senderName: 'SafarHub Saudi Team'
  },
  {
    id: 'EML-102',
    subject: '✨ Eksklusif VIP: Rekomendasi Hotel Suite Dekat Pelataran Masjidil Haram',
    previewText: 'Akses langsung pintu masjid tanpa perlu antre shuttle bus.',
    segment: 'VIP Umrah Pilgrims',
    recipientsCount: 18400,
    sentDate: '2026-10-07',
    openRate: '46.8%',
    clickRate: '14.2%',
    bounceRate: '0.1%',
    conversions: 310,
    revenueGenerated: 186000,
    status: 'Sent',
    senderName: 'Concierge SafarHub'
  },
  {
    id: 'EML-103',
    subject: '⏳ Keranjang Anda Menunggu: Amankan Kursi Paket Umrah 12 Hari Anda',
    previewText: 'Tinggal 4 kursi tersisa untuk jadwal keberangkatan 18 November 2026.',
    segment: 'Cart Abandoners',
    recipientsCount: 4200,
    sentDate: '2026-10-08',
    openRate: '54.1%',
    clickRate: '22.6%',
    bounceRate: '0.2%',
    conversions: 185,
    revenueGenerated: 111000,
    status: 'Sent',
    senderName: 'SafarHub Booking Desk'
  }
];

export const MARKETING_ADS_DB: AdCampaignDatabaseRecord[] = [
  {
    id: 'AD-801',
    adName: 'Google Search - Paket Umrah Murah 2026',
    campaignParent: 'Search Intent Campaigns Q4',
    platform: 'Google Ads Search',
    dailyBudget: 1200,
    totalSpent: 16800,
    impressions: 480000,
    clicks: 38400,
    cpc: 0.44,
    ctr: '8.0%',
    conversions: 540,
    roas: '14.8x',
    status: 'Active'
  },
  {
    id: 'AD-802',
    adName: 'Meta IG Reel - Makkah Clock Tower Suite Deal',
    campaignParent: 'Luxury Hospitality Saudi',
    platform: 'Meta (FB/IG)',
    dailyBudget: 800,
    totalSpent: 9600,
    impressions: 620000,
    clicks: 29800,
    cpc: 0.32,
    ctr: '4.8%',
    conversions: 380,
    roas: '12.4x',
    status: 'Active'
  },
  {
    id: 'AD-803',
    adName: 'TikTok In-Feed - Umrah Backpacker Muda',
    campaignParent: 'Gen-Z Pilgrims',
    platform: 'TikTok Ads',
    dailyBudget: 600,
    totalSpent: 5400,
    impressions: 340000,
    clicks: 21500,
    cpc: 0.25,
    ctr: '6.3%',
    conversions: 240,
    roas: '10.2x',
    status: 'Active'
  }
];

export const MARKETING_SEO_KEYWORDS_DB: SeoKeywordRecord[] = [
  {
    id: 'SEO-101',
    keyword: 'paket umrah murah 2026',
    targetUrl: 'safarhub.com/umrah/paket-2026',
    searchVolume: 74000,
    difficulty: 'Hard',
    currentRank: 1,
    previousRank: 2,
    organicClicks: 28400,
    trafficValue: '$18,400',
    intent: 'Commercial',
    status: 'Top 3'
  },
  {
    id: 'SEO-102',
    keyword: 'hotel view kabah makkah',
    targetUrl: 'safarhub.com/hotels/makkah-view-kabah',
    searchVolume: 49500,
    difficulty: 'Medium',
    currentRank: 2,
    previousRank: 4,
    organicClicks: 16800,
    trafficValue: '$12,200',
    intent: 'Transactional',
    status: 'Top 3'
  },
  {
    id: 'SEO-103',
    keyword: 'cara buat visa umrah mandiri saudi',
    targetUrl: 'safarhub.com/guide/visa-umrah-mandiri',
    searchVolume: 33000,
    difficulty: 'Easy',
    currentRank: 1,
    previousRank: 1,
    organicClicks: 14200,
    trafficValue: '$8,900',
    intent: 'Informational',
    status: 'Top 3'
  },
  {
    id: 'SEO-104',
    keyword: 'jadwal kereta cepat haramain makkah madinah',
    targetUrl: 'safarhub.com/transport/haramain-train',
    searchVolume: 27800,
    difficulty: 'Easy',
    currentRank: 3,
    previousRank: 5,
    organicClicks: 9800,
    trafficValue: '$5,400',
    intent: 'Informational',
    status: 'Top 3'
  }
];

export const MARKETING_INFLUENCERS_DB: InfluencerRecord[] = [
  {
    id: 'INF-01',
    name: 'Tariq Al-Mansoor',
    handle: '@tariq.travels',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
    platform: 'Instagram',
    followers: '1.4M',
    engagementRate: '5.8%',
    country: 'Saudi Arabia',
    niche: 'Luxury Travel',
    contractFee: 15000,
    promoCode: 'TARIQSAUDI',
    redemptions: 480,
    gmv: 384000,
    status: 'Active Partner'
  },
  {
    id: 'INF-02',
    name: 'Fathima Zahra',
    handle: '@zahra.hijablife',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80',
    platform: 'TikTok',
    followers: '920K',
    engagementRate: '8.4%',
    country: 'Indonesia',
    niche: 'Islamic Lifestyle',
    contractFee: 10000,
    promoCode: 'ZAHRAUMRAH',
    redemptions: 620,
    gmv: 496000,
    status: 'Active Partner'
  },
  {
    id: 'INF-03',
    name: 'Dr. Zulfikar Al-Habsyi',
    handle: '@dr.zulfikar',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    platform: 'YouTube',
    followers: '680K',
    engagementRate: '7.1%',
    country: 'Malaysia',
    niche: 'Umrah & Hajj',
    contractFee: 8500,
    promoCode: 'ZULFIKAR2026',
    redemptions: 340,
    gmv: 272000,
    status: 'Active Partner'
  }
];

export const MARKETING_LOYALTY_DB: LoyaltyProgramRecord[] = [
  {
    id: 'LOY-01',
    programName: 'SafarHub Pilgrim Gold Club',
    tierOrType: 'Gold / VIP',
    activeMembers: 14200,
    referralsCompleted: 3820,
    pointsIssued: '1,450,000 pts',
    rewardPayout: 72500,
    roi: '840%',
    status: 'Active',
    description: 'Free airport lounge access, 5% cashback points on all bookings, and dedicated VIP muthawif concierge.'
  },
  {
    id: 'LOY-02',
    programName: 'Refer-A-Pilgrim Family Cash',
    tierOrType: 'Referral Cash',
    activeMembers: 28500,
    referralsCompleted: 5640,
    pointsIssued: 'SAR 282,000 Cash',
    rewardPayout: 141000,
    roi: '1,120%',
    status: 'Active',
    description: 'Earn SAR 50 instant credit for every friend or family member who books their first Umrah package.'
  },
  {
    id: 'LOY-03',
    programName: 'Barakah Silver Rewards',
    tierOrType: 'Silver',
    activeMembers: 48900,
    referralsCompleted: 4120,
    pointsIssued: '890,000 pts',
    rewardPayout: 44500,
    roi: '620%',
    status: 'Active',
    description: 'Free Zamzam water home delivery and 3% cashback on hotels in Makkah & Madinah.'
  }
];

export const MARKETING_AUTOMATIONS_DB: AutomationWorkflowRecord[] = [
  {
    id: 'AUT-01',
    name: 'Abandoned Cart 2-Hour WhatsApp Reminder',
    trigger: 'User leaves checkout page without payment',
    condition: 'Cart value > SAR 2,000 & Phone verified',
    action: 'Send friendly WhatsApp with 5% limited promo code',
    enrolledUsers: 8450,
    completedCount: 6820,
    conversionRate: '34.8%',
    status: 'Active',
    lastRun: '10 mins ago',
    category: 'Abandoned Checkout'
  },
  {
    id: 'AUT-02',
    name: 'Post-Umrah Feedback & Review Request',
    trigger: '7 days after departure from Saudi Arabia',
    condition: 'Booking status = Completed',
    action: 'Send email + push asking for Google Review with 200 bonus points',
    enrolledUsers: 14200,
    completedCount: 12900,
    conversionRate: '48.2%',
    status: 'Active',
    lastRun: '1 hour ago',
    category: 'Review Request'
  },
  {
    id: 'AUT-03',
    name: 'VIP Welcome Onboarding Flow',
    trigger: 'First booking of 5-Star Hotel or VIP Umrah',
    condition: 'User tier = Gold / VIP',
    action: 'Assign dedicated concierge and send WhatsApp welcome packet',
    enrolledUsers: 2100,
    completedCount: 2050,
    conversionRate: '92.5%',
    status: 'Active',
    lastRun: '3 hours ago',
    category: 'VIP Rewards'
  }
];

export const MARKETING_REPORTS_DB: MarketingReportRecord[] = [
  {
    id: 'REP-01',
    title: 'Monthly Omnichannel Marketing ROI Summary - Oct 2026',
    reportType: 'Campaign ROI',
    period: '01 Oct 2026 - 31 Oct 2026',
    generatedDate: '2026-10-09 00:30',
    fileFormat: 'PDF',
    fileSize: '4.2 MB',
    generatedBy: 'System Automation',
    status: 'Ready'
  },
  {
    id: 'REP-02',
    title: 'Paid Ads Attribution & ROAS Analysis',
    reportType: 'Channel Attribution',
    period: 'Q3 - Q4 2026',
    generatedDate: '2026-10-08 18:45',
    fileFormat: 'Excel/XLSX',
    fileSize: '12.8 MB',
    generatedBy: 'Head of Growth',
    status: 'Ready'
  },
  {
    id: 'REP-03',
    title: 'Influencer Campaign Performance & GMV Audit',
    reportType: 'Omnichannel Performance',
    period: '01 Sep 2026 - 08 Oct 2026',
    generatedDate: '2026-10-07 14:15',
    fileFormat: 'PDF',
    fileSize: '6.1 MB',
    generatedBy: 'Influencer Manager',
    status: 'Ready'
  }
];
