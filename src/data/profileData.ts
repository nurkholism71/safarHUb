import {
  UserProfileData,
  TravelerItem,
  SavedWishlistItem,
  UserDocumentItem,
  UserPaymentMethodItem
} from '../types/profile';

export const USER_PROFILE: UserProfileData = {
  name: 'Muhammad',
  initials: 'MN',
  membershipTier: 'Silver Member',
  email: 'muhammad@email.com',
  phone: '+966 50 123 4567',
  memberSince: 'Oct 2024',
  country: 'Indonesia',
  dob: '12 Jan 2000',
  passportNumber: 'B1234567',
  passportExpiry: '12 Jan 2030',
  points: 320,
  pointsToNextTier: 680
};

export const PROFILE_STATS = [
  { id: 'trips', label: 'Total Trips', value: '8', icon: 'Plane' },
  { id: 'bookings', label: 'Total Bookings', value: '12', icon: 'CalendarDays' },
  { id: 'rating', label: 'User Rating', value: '4.8', icon: 'Star' },
  { id: 'level', label: 'Member Level', value: 'Silver', icon: 'Award' },
  { id: 'points', label: 'Reward Points', value: '320', icon: 'Diamond' }
];

export const PROFILE_NAV_TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'personal', label: 'Personal Info' },
  { id: 'travelers', label: 'Travelers' },
  { id: 'preferences', label: 'Preferences' },
  { id: 'documents', label: 'Documents' },
  { id: 'payments', label: 'Payment Methods' },
  { id: 'saved', label: 'Saved Items' },
  { id: 'reviews', label: 'Reviews' }
];

export const TRAVELERS_LIST: TravelerItem[] = [
  {
    id: 'tr-1',
    name: 'Muhammad',
    role: 'Primary 👑',
    initials: 'MN',
    isPrimary: true
  },
  {
    id: 'tr-2',
    name: 'Siti Aisyah',
    role: 'Spouse',
    initials: 'SA'
  },
  {
    id: 'tr-3',
    name: 'Ahmad Fauzi',
    role: 'Child',
    initials: 'AF'
  },
  {
    id: 'tr-4',
    name: 'Nur Rahma',
    role: 'Child',
    initials: 'NR'
  }
];

export const RECENT_PROFILE_TRIPS = [
  {
    id: 'trip-1',
    title: 'Umrah – Makkah & Madinah',
    dates: '12 Oct – 19 Oct 2026',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'trip-2',
    title: 'Riyadh City Tour',
    dates: '5 Apr – 8 Apr 2026',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'trip-3',
    title: 'Jeddah Trip',
    dates: '10 Jan – 12 Jan 2026',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80'
  }
];

export const SAVED_ITEMS_LIST: SavedWishlistItem[] = [
  {
    id: 'save-1',
    title: 'Makkah Hotel',
    subtitle: 'Swissôtel Al Maqam',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=200&q=80',
    isFavorite: true
  },
  {
    id: 'save-2',
    title: 'Umrah Package',
    subtitle: 'Essential Umrah – 7 Days',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=200&q=80',
    isFavorite: false
  },
  {
    id: 'save-3',
    title: 'Airport Transfer',
    subtitle: 'Jeddah Airport – Makkah',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=200&q=80',
    isFavorite: true
  },
  {
    id: 'save-4',
    title: 'Riyadh City Tour',
    subtitle: 'City Highlights',
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=200&q=80',
    isFavorite: false
  }
];

export const USER_PAYMENT_METHODS: UserPaymentMethodItem[] = [
  {
    id: 'pm-1',
    type: 'visa',
    last4: '1234',
    expiry: '12/28',
    isDefault: true
  },
  {
    id: 'pm-2',
    type: 'mastercard',
    last4: '5678',
    expiry: '11/27',
    isDefault: false
  }
];

export const USER_DOCUMENTS: UserDocumentItem[] = [
  {
    id: 'doc-1',
    title: 'Passport',
    description: 'B1234567 • Valid until 12 Jan 2030',
    status: 'Verified'
  },
  {
    id: 'doc-2',
    title: 'Visa',
    description: 'Saudi eVisa • Valid until 15 Nov 2026',
    status: 'Verified'
  },
  {
    id: 'doc-3',
    title: 'Covid Certificate',
    description: 'Not uploaded',
    status: 'Not uploaded'
  }
];
