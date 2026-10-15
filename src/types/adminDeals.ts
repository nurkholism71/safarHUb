export type DealCategory = 
  | 'All' 
  | 'Umrah Packages' 
  | 'Hotels & Suites' 
  | 'Flights & Airlines' 
  | 'Transport & Rail' 
  | 'Experiences & Tours' 
  | 'Jastip & Shopping'
  | 'Flash Deals';

export type DiscountType = 'Percentage' | 'Fixed Amount' | 'Bundle Offer' | 'Cashback';

export type DealStatus = 'Active' | 'Scheduled' | 'Expired' | 'Paused' | 'Draft';

export interface AdminDealRecord {
  id: string;
  code: string;
  campaignName: string;
  arabicName: string;
  category: DealCategory;
  discountType: DiscountType;
  discountValue: string; // e.g. "40% OFF" or "SAR 450"
  discountPercentNumber: number; // for sorting/filtering
  originalPrice: string;
  promoPrice: string;
  minPurchase: string;
  maxDiscountCap: string;
  usageCount: number;
  usageLimit: number;
  startDate: string;
  endDate: string;
  daysRemaining: number;
  status: DealStatus;
  targetAudience: string;
  image: string;
  creator: string;
  featured: boolean;
  budgetAllocated: string;
  burnRate: number; // percentage of budget consumed
}

export interface AdminDealKpi {
  id: string;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  subtitle: string;
  iconName: string;
}

export interface AdminDealCategoryFilter {
  id: string;
  name: string;
  iconName: string;
  activeDealsCount: number;
  totalRedemptions: string;
}

export interface AdminDealRedemptionLog {
  id: string;
  promoCode: string;
  userEmail: string;
  savedAmount: string;
  orderRef: string;
  timestamp: string;
  serviceType: string;
}

export interface AdminDealBudgetSummary {
  id: string;
  category: string;
  budgetAllocated: string;
  budgetUsed: string;
  burnRate: number; // percentage
  redemptions: number;
}
