export interface UserProfileData {
  name: string;
  initials: string;
  membershipTier: 'Silver Member' | 'Gold Member' | 'Platinum VIP';
  email: string;
  phone: string;
  memberSince: string;
  country: string;
  dob: string;
  passportNumber: string;
  passportExpiry: string;
  points: number;
  pointsToNextTier: number;
}

export interface TravelerItem {
  id: string;
  name: string;
  role: string;
  initials: string;
  isPrimary?: boolean;
}

export interface SavedWishlistItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  isFavorite: boolean;
}

export interface UserDocumentItem {
  id: string;
  title: string;
  description: string;
  status: 'Verified' | 'Pending' | 'Not uploaded';
}

export interface UserPaymentMethodItem {
  id: string;
  type: 'visa' | 'mastercard' | 'mada';
  last4: string;
  expiry: string;
  isDefault?: boolean;
}
