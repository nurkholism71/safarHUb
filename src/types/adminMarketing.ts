export type MarketingTab = 
  | 'overview' 
  | 'campaigns' 
  | 'content' 
  | 'social' 
  | 'email' 
  | 'ads' 
  | 'seo' 
  | 'influencer' 
  | 'loyalty' 
  | 'automation' 
  | 'reports';

export interface MarketingKpi {
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

export interface CampaignPerformancePoint {
  date: string;
  reach: number;
  bookings: number;
  revenue: number;
}

export interface ChannelPerformanceItem {
  id: string;
  channel: string;
  iconName: string;
  reach: number;
  engagement: number;
  bookings: number;
  color: string;
}

export interface AudienceDemographicItem {
  country: string;
  percentage: number;
  color: string;
}

export interface ActiveCampaignItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  status: 'Active' | 'Scheduled' | 'Completed' | 'Paused';
  reach: string;
  bookings: string;
  revenue: string;
}

export interface MarketingToolItem {
  id: string;
  name: string;
  iconName: string;
  bgColor: string;
  iconColor: string;
}

export interface TopContentItem {
  id: string;
  rank: number;
  title: string;
  image: string;
  channel: 'Instagram' | 'TikTok' | 'Facebook' | 'YouTube';
  channelIcon: string;
  type: 'Video' | 'Image' | 'Carousel' | 'Article';
  reach: string;
  engagement: string;
  bookings: number;
}

export interface LeadSourceItem {
  id: string;
  name: string;
  iconName: string;
  percentage: number;
  color: string;
}

export interface RecentMarketingActivityItem {
  id: string;
  title: string;
  details: string;
  timestamp: string;
  iconName: string;
  iconColor: string;
  channelBadge: string;
}

// ----------------------------------------------------
// FULL CRUD DATABASE INTERFACES FOR ALL SUBMENU ROOMS
// ----------------------------------------------------

export interface CampaignDatabaseRecord {
  id: string;
  code: string;
  title: string;
  objective: 'Brand Awareness' | 'Conversion' | 'Lead Generation' | 'Seasonal Promo' | 'Retention';
  channel: 'Omnichannel' | 'Instagram' | 'Google Ads' | 'Email' | 'TikTok' | 'Facebook' | 'WhatsApp';
  budget: number;
  spent: number;
  reach: number;
  clicks: number;
  bookings: number;
  revenue: number;
  roi: string;
  startDate: string;
  endDate: string;
  status: 'Active' | 'Scheduled' | 'Paused' | 'Completed';
  targetAudience: string;
}

export interface ContentDatabaseRecord {
  id: string;
  code: string;
  title: string;
  format: 'Video/Reel' | 'Photo Post' | 'Carousel' | 'Article/Blog' | 'Story';
  channel: 'Instagram' | 'TikTok' | 'Facebook' | 'YouTube' | 'Website Blog' | 'LinkedIn';
  publishDate: string;
  author: string;
  reach: number;
  engagementRate: string;
  shares: number;
  bookingsAttributed: number;
  status: 'Published' | 'Draft' | 'Scheduled' | 'Archived';
  thumbnail: string;
  category: 'Umrah Tips' | 'Hotels & Stay' | 'Flight Deals' | 'Saudi Culture' | 'Promotions';
}

export interface SocialPostDatabaseRecord {
  id: string;
  platform: 'Instagram' | 'TikTok' | 'Facebook' | 'YouTube' | 'Twitter (X)' | 'WhatsApp Channel';
  caption: string;
  mediaUrl: string;
  postType: 'Reel/Short' | 'Image Carousel' | 'Single Image' | 'Video Post' | 'Story';
  scheduledDate: string;
  likes: number;
  comments: number;
  shares: number;
  clicks: number;
  status: 'Published' | 'Scheduled' | 'Draft' | 'Failed';
  campaignTag: string;
}

export interface EmailCampaignDatabaseRecord {
  id: string;
  subject: string;
  previewText: string;
  segment: 'All Subscribers' | 'VIP Umrah Pilgrims' | 'Repeat Bookers' | 'Inactive (90d)' | 'Cart Abandoners';
  recipientsCount: number;
  sentDate: string;
  openRate: string;
  clickRate: string;
  bounceRate: string;
  conversions: number;
  revenueGenerated: number;
  status: 'Sent' | 'Scheduled' | 'Draft' | 'A/B Testing';
  senderName: string;
}

export interface AdCampaignDatabaseRecord {
  id: string;
  adName: string;
  campaignParent: string;
  platform: 'Google Ads Search' | 'Meta (FB/IG)' | 'TikTok Ads' | 'Google Display' | 'Snapchat Ads';
  dailyBudget: number;
  totalSpent: number;
  impressions: number;
  clicks: number;
  cpc: number;
  ctr: string;
  conversions: number;
  roas: string;
  status: 'Active' | 'Paused' | 'Learning' | 'Ended';
}

export interface SeoKeywordRecord {
  id: string;
  keyword: string;
  targetUrl: string;
  searchVolume: number;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Very Hard';
  currentRank: number;
  previousRank: number;
  organicClicks: number;
  trafficValue: string;
  intent: 'Commercial' | 'Informational' | 'Transactional' | 'Navigational';
  status: 'Top 3' | 'First Page' | 'Rising' | 'Declining';
}

export interface InfluencerRecord {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  platform: 'Instagram' | 'TikTok' | 'YouTube' | 'Multi-Platform';
  followers: string;
  engagementRate: string;
  country: string;
  niche: 'Umrah & Hajj' | 'Islamic Lifestyle' | 'Luxury Travel' | 'Family Travel' | 'Culinary';
  contractFee: number;
  promoCode: string;
  redemptions: number;
  gmv: number;
  status: 'Active Partner' | 'Under Review' | 'Contract Ended' | 'In Negotiation';
}

export interface LoyaltyProgramRecord {
  id: string;
  programName: string;
  tierOrType: 'Gold / VIP' | 'Silver' | 'Bronze' | 'Referral Cash' | 'Points Multiplier';
  activeMembers: number;
  referralsCompleted: number;
  pointsIssued: string;
  rewardPayout: number;
  roi: string;
  status: 'Active' | 'Draft' | 'Paused';
  description: string;
}

export interface AutomationWorkflowRecord {
  id: string;
  name: string;
  trigger: string;
  condition: string;
  action: string;
  enrolledUsers: number;
  completedCount: number;
  conversionRate: string;
  status: 'Active' | 'Paused' | 'Draft';
  lastRun: string;
  category: 'Booking Follow-up' | 'Welcome Flow' | 'Abandoned Checkout' | 'Review Request' | 'VIP Rewards';
}

export interface MarketingReportRecord {
  id: string;
  title: string;
  reportType: 'Campaign ROI' | 'Omnichannel Performance' | 'Channel Attribution' | 'Audience Growth' | 'Budget Spent';
  period: string;
  generatedDate: string;
  fileFormat: 'PDF' | 'Excel/XLSX' | 'CSV';
  fileSize: string;
  generatedBy: string;
  status: 'Ready' | 'Processing' | 'Scheduled';
}
