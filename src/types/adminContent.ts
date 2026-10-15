export type ContentTab = 
  | 'articles' 
  | 'guides' 
  | 'media' 
  | 'banners' 
  | 'faq' 
  | 'categories';

export interface ContentKpi {
  id: string;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  subtitle: string;
  iconName: string;
  bgColorClass: string;
  iconColorClass: string;
}

export interface ContentArticleRecord {
  id: string;
  code: string;
  title: string;
  slug: string;
  category: 'Umrah & Hajj' | 'Hotels & Stay' | 'Flight Deals' | 'Saudi Culture & Heritage' | 'Travel Tips' | 'Culinary';
  author: string;
  authorAvatar: string;
  readTime: string;
  views: number;
  shares: number;
  likes: number;
  status: 'Published' | 'Draft' | 'Scheduled' | 'Archived';
  publishDate: string;
  featuredImage: string;
  tags: string[];
  language: 'English' | 'Arabic' | 'Indonesian' | 'Multi-Language';
  seoScore: number;
}

export interface ContentGuideRecord {
  id: string;
  title: string;
  city: 'Makkah' | 'Madinah' | 'Jeddah' | 'AlUla' | 'Riyadh' | 'Taif';
  category: 'Pilgrim Rituals' | 'Historical Ziyarah' | 'Shopping & Souvenir' | 'Food & Cafes' | 'Transit & Transport';
  stepCount: number;
  downloadsCount: number;
  rating: number;
  status: 'Published' | 'Draft' | 'Updating';
  lastUpdated: string;
  featuredImage: string;
}

export interface ContentMediaAssetRecord {
  id: string;
  fileName: string;
  title: string;
  fileType: 'Image (JPG/PNG)' | 'Video (MP4)' | 'Document (PDF)' | 'Vector (SVG)';
  fileSize: string;
  dimensions: string;
  url: string;
  category: 'Hotels' | 'Holy Sites' | 'Transport' | 'Pilgrims' | 'Banners';
  uploadedBy: string;
  uploadDate: string;
  usedInCount: number;
}

export interface ContentBannerRecord {
  id: string;
  title: string;
  placement: 'Home Hero Slider' | 'Umrah Promo Bar' | 'Mobile App Splash' | 'Deals Top Header';
  targetUrl: string;
  impressions: number;
  clicks: number;
  ctr: string;
  status: 'Active' | 'Scheduled' | 'Expired';
  startDate: string;
  endDate: string;
  imageUrl: string;
}

export interface ContentFaqRecord {
  id: string;
  question: string;
  answer: string;
  category: 'Umrah Visa & Requirements' | 'Hotel Check-in & Haram View' | 'Haramain Train & Transport' | 'Payment & Refund' | 'Jastip & Luggage';
  orderIndex: number;
  helpfulVotes: number;
  status: 'Published' | 'Draft';
  lastModified: string;
}
