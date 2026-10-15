import {
  NotificationSettingItem,
  SecuritySettingItem,
  LanguageRegionItem,
  TravelPreferenceItem
} from '../types/settings';

export const SETTINGS_TABS = [
  { id: 'account', label: 'Account', icon: 'User' },
  { id: 'security', label: 'Security', icon: 'ShieldCheck' },
  { id: 'notifications', label: 'Notifications', icon: 'Bell', hasBadge: true },
  { id: 'preferences', label: 'Travel Preferences', icon: 'Plane' },
  { id: 'payments', label: 'Payment Methods', icon: 'CreditCard' },
  { id: 'language', label: 'Language & Region', icon: 'Globe' },
  { id: 'privacy', label: 'Privacy & Data', icon: 'Lock' },
  { id: 'support', label: 'Help & Support', icon: 'Headphones' }
];

export const SECURITY_SETTINGS_ITEMS: SecuritySettingItem[] = [
  { id: 'password', title: 'Change Password', icon: 'Key' },
  { id: '2fa', title: 'Two-Factor Authentication', badge: 'Enabled', icon: 'ShieldCheck' },
  { id: 'login-activity', title: 'Login Activity', icon: 'Monitor' },
  { id: 'devices', title: 'Manage Devices', icon: 'Smartphone' },
  { id: 'blocked', title: 'Blocked Users', icon: 'Ban' }
];

export const INITIAL_NOTIFICATIONS_SETTINGS: NotificationSettingItem[] = [
  {
    id: 'notif-booking',
    title: 'Booking Confirmations',
    description: 'Updates about your bookings and trips',
    enabled: true
  },
  {
    id: 'notif-deals',
    title: 'Deals & Promo',
    description: 'Special offers and discount alerts',
    enabled: true
  },
  {
    id: 'notif-price',
    title: 'Price Alerts',
    description: 'Notifications for price drops',
    enabled: true
  },
  {
    id: 'notif-reminders',
    title: 'Travel Reminders',
    description: 'Flight, hotel, and activity reminders',
    enabled: true
  },
  {
    id: 'notif-marketing',
    title: 'Marketing & News',
    description: 'Latest news and travel inspiration',
    enabled: false
  }
];

export const TRAVEL_PREFERENCES_ITEMS: TravelPreferenceItem[] = [
  { id: 'purpose', label: 'Travel Purpose', value: 'Umrah, Holiday, Business', icon: 'User' },
  { id: 'travelers', label: 'Preferred Travelers', value: 'Family, Group', icon: 'Users' },
  { id: 'dates', label: 'Preferred Travel Dates', value: 'Flexible', icon: 'Calendar' },
  { id: 'hotel', label: 'Accommodation Preference', value: '4–5 star hotels, Near Haram', icon: 'Building2' },
  { id: 'transport', label: 'Transport Preference', value: 'Private car, Comfortable bus', icon: 'Bus' },
  { id: 'food', label: 'Food Preference', value: 'Halal food, Indonesian food', icon: 'Utensils' }
];

export const LANGUAGE_REGION_ITEMS: LanguageRegionItem[] = [
  { id: 'lang', title: 'Language', value: 'English (English)', icon: 'Globe' },
  { id: 'region', title: 'Region', value: 'Saudi Arabia', icon: 'Compass' },
  { id: 'currency', title: 'Currency', value: 'SAR (ر.س)', icon: 'CreditCard' },
  { id: 'date-format', title: 'Date Format', value: 'DD MMM YYYY (21 Sep 2026)', icon: 'Calendar' },
  { id: 'time-zone', title: 'Time Zone', value: '(GMT+3) Riyadh', icon: 'Clock' }
];
