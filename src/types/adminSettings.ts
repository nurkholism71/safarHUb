export type SettingsTab = 
  | 'account' 
  | 'business' 
  | 'team'
  | 'booking' 
  | 'payments' 
  | 'notifications' 
  | 'security' 
  | 'integrations' 
  | 'appearance' 
  | 'language' 
  | 'system'
  | 'help';

export interface AdminAccountProfile {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  role: string;
  roleBadge: string;
  language: string;
  timezone: string;
  dateFormat: string;
  currency: string;
  theme: 'Light' | 'Dark' | 'System';
  avatarInitials: string;
  avatarUrl?: string;
  twoFactorEnabled: boolean;
  loginNotificationsEnabled: boolean;
  completionPercentage: number;
}

export interface BusinessProfileData {
  companyName: string;
  legalEntity: string;
  commercialRegistrationNumber: string; // CR
  vatNumber: string; // Tax ID
  tourismLicenseNumber: string;
  headquartersAddress: string;
  city: string;
  country: string;
  postalCode: string;
  officialEmail: string;
  officialPhone: string;
  website: string;
  bankName: string;
  ibanNumber: string;
  swiftCode: string;
  establishedYear: number;
}

export interface AdminTeamMemberRecord {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'Super Admin' | 'Finance Manager' | 'Operations Lead' | 'Support Agent' | 'Marketing Lead' | 'Content Editor';
  department: string;
  accessLevel: 'Full Access' | 'Restricted' | 'Read Only' | 'Custom';
  status: 'Active' | 'Invited' | 'Suspended';
  lastActive: string;
  twoFactorStatus: 'Enabled' | 'Disabled';
}

export interface BookingRuleSetting {
  id: string;
  category: string;
  settingName: string;
  description: string;
  currentValue: string | number | boolean;
  type: 'toggle' | 'number' | 'select' | 'text';
  options?: string[];
}

export interface PaymentGatewayRecord {
  id: string;
  name: string;
  code: string;
  logo: string;
  type: 'Card & Mada' | 'Digital Wallet' | 'BNPL / Installment' | 'Direct Bank Transfer';
  feePercentage: string;
  fixedFee: string;
  currency: string;
  status: 'Active' | 'Test Mode' | 'Disabled';
  settlementPeriod: string;
  dailyVolumeLimit: string;
}

export interface NotificationChannelSetting {
  id: string;
  name: string;
  description: string;
  channel: 'Email' | 'SMS' | 'WhatsApp' | 'Push Notification' | 'In-App Banner';
  enabled: boolean;
  eventTrigger: string;
  provider: string;
}

export interface SecurityLoginSessionRecord {
  id: string;
  device: string;
  browser: string;
  ipAddress: string;
  location: string;
  lastActive: string;
  isCurrentSession: boolean;
  status: 'Active' | 'Revoked';
}

export interface SecurityAuditLogRecord {
  id: string;
  user: string;
  action: string;
  resource: string;
  timestamp: string;
  ipAddress: string;
  severity: 'Info' | 'Warning' | 'Critical';
}

export interface ThirdPartyIntegrationRecord {
  id: string;
  name: string;
  provider: string;
  category: 'GDS / Flight' | 'Hotelbeds / Bedbank' | 'Railway API' | 'SMS Gateway' | 'Payment Gateway' | 'Map & Geocoding' | 'Saudi Tourism Authority';
  status: 'Connected' | 'Error' | 'Pending Setup' | 'Disconnected';
  lastSync: string;
  apiVersion: string;
  apiKeyMasked: string;
  monthlyRequests: number;
}

export interface SystemHealthMetric {
  id: string;
  metric: string;
  value: string;
  status: 'Optimal' | 'Warning' | 'Degraded';
  details: string;
}
