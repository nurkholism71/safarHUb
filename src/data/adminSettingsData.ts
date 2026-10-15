import {
  AdminAccountProfile,
  BusinessProfileData,
  AdminTeamMemberRecord,
  BookingRuleSetting,
  PaymentGatewayRecord,
  NotificationChannelSetting,
  SecurityLoginSessionRecord,
  SecurityAuditLogRecord,
  ThirdPartyIntegrationRecord,
  SystemHealthMetric
} from '../types/adminSettings';

export const DEFAULT_ADMIN_PROFILE: AdminAccountProfile = {
  fullName: 'Admin',
  email: 'admin@safarhub.com',
  phone: '+966 50 123 4567',
  country: 'Saudi Arabia',
  role: 'Admin',
  roleBadge: 'Super Admin',
  language: 'English',
  timezone: '(GMT+3) Riyadh',
  dateFormat: 'DD MMM YYYY',
  currency: 'SAR (Saudi Riyal)',
  theme: 'Light',
  avatarInitials: 'AD',
  twoFactorEnabled: true,
  loginNotificationsEnabled: true,
  completionPercentage: 85
};

export const DEFAULT_BUSINESS_PROFILE: BusinessProfileData = {
  companyName: 'SafarHub Saudi Tourism & Travel Co.',
  legalEntity: 'Limited Liability Company (LLC)',
  commercialRegistrationNumber: '1010894210',
  vatNumber: '310984562000003',
  tourismLicenseNumber: 'KSA-TOUR-2026-8891',
  headquartersAddress: 'King Fahd Road, Al Olaya District, Level 14 Tower B',
  city: 'Riyadh',
  country: 'Kingdom of Saudi Arabia',
  postalCode: '12211',
  officialEmail: 'contact@safarhub.sa',
  officialPhone: '+966 11 456 7890',
  website: 'https://safarhub.sa',
  bankName: 'Al Rajhi Bank (Corporate Division)',
  ibanNumber: 'SA8280000456608010199201',
  swiftCode: 'RJHISARI',
  establishedYear: 2024
};

export const ADMIN_TEAM_MEMBERS_DB: AdminTeamMemberRecord[] = [
  {
    id: 'USR-ADM-01',
    name: 'Admin',
    email: 'admin@safarhub.com',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    role: 'Super Admin',
    department: 'Executive Management',
    accessLevel: 'Full Access',
    status: 'Active',
    lastActive: 'Just now',
    twoFactorStatus: 'Enabled'
  },
  {
    id: 'USR-FIN-02',
    name: 'Faisal Al-Otaibi',
    email: 'faisal.finance@safarhub.sa',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    role: 'Finance Manager',
    department: 'Finance & Payouts',
    accessLevel: 'Restricted',
    status: 'Active',
    lastActive: '12 mins ago',
    twoFactorStatus: 'Enabled'
  },
  {
    id: 'USR-OPS-03',
    name: 'Tariq Al-Ghamdi',
    email: 'tariq.ops@safarhub.sa',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    role: 'Operations Lead',
    department: 'Pilgrim Operations & Fleet',
    accessLevel: 'Restricted',
    status: 'Active',
    lastActive: '1 hour ago',
    twoFactorStatus: 'Enabled'
  },
  {
    id: 'USR-MKT-04',
    name: 'Layla Al-Harbi',
    email: 'layla.marketing@safarhub.sa',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    role: 'Marketing Lead',
    department: 'Growth & Campaigns',
    accessLevel: 'Restricted',
    status: 'Active',
    lastActive: '25 mins ago',
    twoFactorStatus: 'Enabled'
  },
  {
    id: 'USR-SUP-05',
    name: 'Zaid bin Khalid',
    email: 'zaid.support@safarhub.sa',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80',
    role: 'Support Agent',
    department: 'Customer Care & Helpdesk',
    accessLevel: 'Read Only',
    status: 'Active',
    lastActive: '5 mins ago',
    twoFactorStatus: 'Disabled'
  }
];

export const BOOKING_SETTINGS_DB: BookingRuleSetting[] = [
  {
    id: 'BKG-01',
    category: 'Confirmation & Orders',
    settingName: 'Instant Auto-Confirmation for 5-Star Hotels',
    description: 'Automatically approve hotel bookings when inventory is confirmed via Bedbank API without manual review.',
    currentValue: true,
    type: 'toggle'
  },
  {
    id: 'BKG-02',
    category: 'Confirmation & Orders',
    settingName: 'Payment Expiration Window',
    description: 'Maximum time allowed for pilgrims to complete online payment before reservation is auto-cancelled.',
    currentValue: '60 minutes',
    type: 'select',
    options: ['30 minutes', '60 minutes', '120 minutes', '24 hours']
  },
  {
    id: 'BKG-03',
    category: 'Cancellation & Refunds',
    settingName: 'Free Cancellation Buffer Time',
    description: 'Hours before check-in or service departure where 100% refund is automatically eligible.',
    currentValue: '72 hours before arrival',
    type: 'select',
    options: ['24 hours before arrival', '48 hours before arrival', '72 hours before arrival', 'Non-refundable']
  },
  {
    id: 'BKG-04',
    category: 'Capacity & Restrictions',
    settingName: 'Max Pilgrims Per Umrah Package Order',
    description: 'Upper limit of adult & child pilgrims allowed in a single group booking transaction.',
    currentValue: 12,
    type: 'number'
  },
  {
    id: 'BKG-05',
    category: 'Visa Requirements',
    settingName: 'Mandatory Saudi Visa Number Check',
    description: 'Require valid Saudi tourist/Umrah e-visa number before issuing flight & hotel check-in vouchers.',
    currentValue: true,
    type: 'toggle'
  }
];

export const PAYMENT_GATEWAYS_DB: PaymentGatewayRecord[] = [
  {
    id: 'GW-01',
    name: 'Mada Debit Cards',
    code: 'MADA_SAUDI',
    logo: '💳',
    type: 'Card & Mada',
    feePercentage: '1.0%',
    fixedFee: 'SAR 1.00',
    currency: 'SAR',
    status: 'Active',
    settlementPeriod: 'T+1 Working Day',
    dailyVolumeLimit: 'SAR 2,000,000'
  },
  {
    id: 'GW-02',
    name: 'Apple Pay',
    code: 'APPLE_PAY_SA',
    logo: '',
    type: 'Digital Wallet',
    feePercentage: '1.75%',
    fixedFee: 'SAR 1.00',
    currency: 'SAR',
    status: 'Active',
    settlementPeriod: 'T+1 Working Day',
    dailyVolumeLimit: 'SAR 1,500,000'
  },
  {
    id: 'GW-03',
    name: 'Visa & Mastercard International',
    code: 'VISA_MC_GLOBAL',
    logo: '💳',
    type: 'Card & Mada',
    feePercentage: '2.5%',
    fixedFee: 'SAR 1.50',
    currency: 'SAR / USD / IDR',
    status: 'Active',
    settlementPeriod: 'T+2 Working Days',
    dailyVolumeLimit: 'SAR 3,000,000'
  },
  {
    id: 'GW-04',
    name: 'STC Pay / Urpay',
    code: 'STC_PAY_DIRECT',
    logo: '📱',
    type: 'Digital Wallet',
    feePercentage: '1.5%',
    fixedFee: 'SAR 0.50',
    currency: 'SAR',
    status: 'Active',
    settlementPeriod: 'Instant / T+0',
    dailyVolumeLimit: 'SAR 800,000'
  },
  {
    id: 'GW-05',
    name: 'Tamara (Buy Now Pay Later)',
    code: 'TAMARA_BNPL',
    logo: '🛍',
    type: 'BNPL / Installment',
    feePercentage: '4.9%',
    fixedFee: 'SAR 2.00',
    currency: 'SAR',
    status: 'Active',
    settlementPeriod: 'T+3 Working Days',
    dailyVolumeLimit: 'SAR 1,000,000'
  },
  {
    id: 'GW-06',
    name: 'Tabby 4-Split Installments',
    code: 'TABBY_PAY',
    logo: '🏷',
    type: 'BNPL / Installment',
    feePercentage: '4.8%',
    fixedFee: 'SAR 2.00',
    currency: 'SAR',
    status: 'Active',
    settlementPeriod: 'T+3 Working Days',
    dailyVolumeLimit: 'SAR 1,000,000'
  }
];

export const NOTIFICATION_CHANNELS_DB: NotificationChannelSetting[] = [
  {
    id: 'NOTIF-01',
    name: 'Booking Confirmation Email',
    description: 'Instant detailed PDF receipt and voucher sent upon successful payment.',
    channel: 'Email',
    enabled: true,
    eventTrigger: 'payment.success',
    provider: 'SendGrid Enterprise'
  },
  {
    id: 'NOTIF-02',
    name: 'Driver / Pickup WhatsApp Alert',
    description: 'Sends driver name, car plate, and live GPS pickup location to pilgrim 2h before ride.',
    channel: 'WhatsApp',
    enabled: true,
    eventTrigger: 'transport.dispatch',
    provider: 'WhatsApp Business Cloud API'
  },
  {
    id: 'NOTIF-03',
    name: 'Flight Schedule Change SMS',
    description: 'Sends urgent SMS broadcast in Arabic & English if flight is delayed or gate changes.',
    channel: 'SMS',
    enabled: true,
    eventTrigger: 'flight.gate_change',
    provider: 'Unifonic Saudi Gateway'
  },
  {
    id: 'NOTIF-04',
    name: 'New Admin Super-User Login Alert',
    description: 'Notifies Super Admin via email whenever a new IP address logs into Saudi Admin.',
    channel: 'Email',
    enabled: true,
    eventTrigger: 'auth.admin_login',
    provider: 'Internal Security Mailer'
  }
];

export const SECURITY_SESSIONS_DB: SecurityLoginSessionRecord[] = [
  {
    id: 'SES-01',
    device: 'Windows 11 PC (Chrome 128.0)',
    browser: 'Chrome 128.0.0.0',
    ipAddress: '176.44.120.91',
    location: 'Riyadh, Saudi Arabia',
    lastActive: 'Current Session (Active)',
    isCurrentSession: true,
    status: 'Active'
  },
  {
    id: 'SES-02',
    device: 'iPhone 16 Pro Max (Safari Mobile)',
    browser: 'Mobile Safari 18.1',
    ipAddress: '5.108.23.14',
    location: 'Jeddah, Saudi Arabia',
    lastActive: '2 hours ago',
    isCurrentSession: false,
    status: 'Active'
  },
  {
    id: 'SES-03',
    device: 'MacBook Pro 16" M3 (macOS Sonoma)',
    browser: 'Chrome 127.0',
    ipAddress: '182.253.11.89',
    location: 'Jakarta, Indonesia',
    lastActive: 'Yesterday at 18:30',
    isCurrentSession: false,
    status: 'Active'
  }
];

export const SECURITY_AUDIT_LOGS_DB: SecurityAuditLogRecord[] = [
  {
    id: 'LOG-8801',
    user: 'Admin (Super Admin)',
    action: 'Changed Payment Gateway Configuration',
    resource: 'Payment Settings (Tamara BNPL)',
    timestamp: '2026-10-09 00:15',
    ipAddress: '176.44.120.91',
    severity: 'Warning'
  },
  {
    id: 'LOG-8802',
    user: 'Admin (Super Admin)',
    action: 'Exported Financial Payouts Ledger',
    resource: 'Payments / Reports (.XLSX)',
    timestamp: '2026-10-08 23:40',
    ipAddress: '176.44.120.91',
    severity: 'Info'
  },
  {
    id: 'LOG-8803',
    user: 'Faisal Al-Otaibi',
    action: 'Approved Refund Batch (SAR 45,200)',
    resource: 'Bookings #BK-9912 through #BK-9918',
    timestamp: '2026-10-08 21:10',
    ipAddress: '5.108.23.14',
    severity: 'Critical'
  },
  {
    id: 'LOG-8804',
    user: 'Admin (Super Admin)',
    action: 'Enabled Two-Factor Authentication Requirement',
    resource: 'Security Policy',
    timestamp: '2026-10-08 19:05',
    ipAddress: '176.44.120.91',
    severity: 'Warning'
  }
];

export const THIRD_PARTY_INTEGRATIONS_DB: ThirdPartyIntegrationRecord[] = [
  {
    id: 'INT-01',
    name: 'Amadeus GDS Global Flight API',
    provider: 'Amadeus IT Group',
    category: 'GDS / Flight',
    status: 'Connected',
    lastSync: '1 min ago',
    apiVersion: 'v3.2.0',
    apiKeyMasked: 'amds_live_••••••••••••942a',
    monthlyRequests: 348200
  },
  {
    id: 'INT-02',
    name: 'Hotelbeds Bedbank Saudi Inventory',
    provider: 'Hotelbeds Group',
    category: 'Hotelbeds / Bedbank',
    status: 'Connected',
    lastSync: 'Just now',
    apiVersion: 'v1.4',
    apiKeyMasked: 'hb_live_••••••••••••881b',
    monthlyRequests: 890400
  },
  {
    id: 'INT-03',
    name: 'Haramain High-Speed Railway Direct API',
    provider: 'Saudi Railways Organization (SAR)',
    category: 'Railway API',
    status: 'Connected',
    lastSync: '4 mins ago',
    apiVersion: 'v2.0-gov',
    apiKeyMasked: 'hhr_prod_••••••••••••331c',
    monthlyRequests: 145000
  },
  {
    id: 'INT-04',
    name: 'Saudi Tourism Authority (Nusuk Platform)',
    provider: 'Ministry of Hajj and Umrah',
    category: 'Saudi Tourism Authority',
    status: 'Connected',
    lastSync: '10 mins ago',
    apiVersion: 'v4.1',
    apiKeyMasked: 'nusuk_g2g_••••••••••••772f',
    monthlyRequests: 56000
  },
  {
    id: 'INT-05',
    name: 'Unifonic Saudi Telecommunications SMS',
    provider: 'Unifonic Inc.',
    category: 'SMS Gateway',
    status: 'Connected',
    lastSync: '2 mins ago',
    apiVersion: 'v2.8',
    apiKeyMasked: 'unif_live_••••••••••••109e',
    monthlyRequests: 82300
  },
  {
    id: 'INT-06',
    name: 'Google Maps Geocoding & Distance Matrix',
    provider: 'Google Cloud Platform',
    category: 'Map & Geocoding',
    status: 'Connected',
    lastSync: 'Just now',
    apiVersion: 'v1.0',
    apiKeyMasked: 'AIzaSy••••••••••••994w',
    monthlyRequests: 1240000
  }
];

export const SYSTEM_HEALTH_METRICS_DB: SystemHealthMetric[] = [
  {
    id: 'HLT-01',
    metric: 'Main Database Cluster (PostgreSQL 16)',
    value: '99.99% Uptime',
    status: 'Optimal',
    details: 'Primary & 2 Read Replicas running in Riyadh Region (me-central-1)'
  },
  {
    id: 'HLT-02',
    metric: 'Redis Cache Hit Ratio',
    value: '96.4%',
    status: 'Optimal',
    details: 'Fast response for Makkah & Madinah live room pricing queries'
  },
  {
    id: 'HLT-03',
    metric: 'API Gateway Average Response Latency',
    value: '42 ms',
    status: 'Optimal',
    details: 'Serving 2.8M requests per week without error spike'
  },
  {
    id: 'HLT-04',
    metric: 'Nightly Automated Cloud Backup',
    value: 'Completed Today 03:00',
    status: 'Optimal',
    details: 'Encrypted backup archived to Saudi Cloud Object Storage'
  }
];
