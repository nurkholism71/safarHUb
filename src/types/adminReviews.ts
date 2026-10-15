export type ReviewTab = 
  | 'all' 
  | 'hotels' 
  | 'umrah' 
  | 'transport' 
  | 'airport' 
  | 'experiences' 
  | 'disputed';

export interface ReviewKpi {
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

export interface ReviewDatabaseRecord {
  id: string;
  bookingCode: string;
  customerName: string;
  customerAvatar: string;
  customerCountry: string;
  serviceType: 'Hotels' | 'Umrah Packages' | 'Transport' | 'Airport Services' | 'Experiences';
  serviceTitle: string;
  rating: number;
  reviewTitle: string;
  reviewText: string;
  photos: string[];
  travelDate: string;
  reviewDate: string;
  helpfulCount: number;
  status: 'Approved' | 'Pending Moderation' | 'Disputed' | 'Rejected';
  sentiment: 'Positive' | 'Neutral' | 'Negative';
  adminReply?: string;
  replyDate?: string;
  verifiedPilgrim: boolean;
}

export interface RatingDistributionItem {
  stars: number;
  percentage: number;
  count: number;
}

export interface ServiceRatingScoreItem {
  service: string;
  score: number;
  totalReviews: number;
}
