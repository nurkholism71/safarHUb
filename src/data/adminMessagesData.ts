import {
  AdminMessageItem,
  AdminMessageKpi,
  AdminMessageChannelTab,
  AdminMessageTrafficShare,
  AdminMessageHourlyVolume,
  AdminMessageAuditLog
} from '../types/adminMessages';

export const ADMIN_MESSAGE_KPIS: AdminMessageKpi[] = [
  {
    id: 'total-messages',
    title: 'Total Messages Stored',
    value: '24,580',
    change: '+18.4%',
    isPositive: true,
    subtitle: 'Across all channels & logs',
    iconName: 'MessageSquare',
    bgColorClass: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400',
    textColorClass: 'text-emerald-600'
  },
  {
    id: 'delivered-rate',
    title: 'Delivery & Read Rate',
    value: '99.2%',
    change: '+0.6%',
    isPositive: true,
    subtitle: '24,380 delivered successfully',
    iconName: 'CheckCheck',
    bgColorClass: 'bg-teal-50 text-teal-600 dark:bg-teal-950/50 dark:text-teal-400',
    textColorClass: 'text-teal-600'
  },
  {
    id: 'whatsapp-sync',
    title: 'WhatsApp Gateway API',
    value: '14,210',
    change: '+22.1%',
    isPositive: true,
    subtitle: '57.8% of platform volume',
    iconName: 'PhoneCall',
    bgColorClass: 'bg-green-50 text-green-600 dark:bg-green-950/50 dark:text-green-400',
    textColorClass: 'text-green-600'
  },
  {
    id: 'unread-inquiries',
    title: 'Unread / Pending Queue',
    value: '34',
    change: '-12.5%',
    isPositive: true,
    subtitle: 'Real-time response buffer',
    iconName: 'Inbox',
    bgColorClass: 'bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400',
    textColorClass: 'text-amber-600'
  },
  {
    id: 'attachments-count',
    title: 'Media & Documents',
    value: '3,840',
    change: '+9.3%',
    isPositive: true,
    subtitle: 'PDF visas, tickets & vouchers',
    iconName: 'FileText',
    bgColorClass: 'bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400',
    textColorClass: 'text-blue-600'
  }
];

export const ADMIN_MESSAGE_TABS: AdminMessageChannelTab[] = [
  { id: 'all', label: 'All Messages Database', count: 24580, iconName: 'Layers' },
  { id: 'whatsapp', label: 'WhatsApp API Gateway', count: 14210, iconName: 'PhoneCall' },
  { id: 'livechat', label: 'Live Portal Web Chat', count: 5430, iconName: 'MessageCircle' },
  { id: 'portal', label: 'In-App Direct Inbox', count: 2680, iconName: 'Inbox' },
  { id: 'vip', label: 'VIP Concierge Desk', count: 890, iconName: 'Crown' },
  { id: 'email', label: 'Email Gateway Logs', count: 740, iconName: 'Mail' },
  { id: 'sms', label: 'SMS OTP & Alerts', count: 420, iconName: 'Smartphone' },
  { id: 'system', label: 'System Automated Logs', count: 210, iconName: 'Bot' }
];

export const ADMIN_MESSAGE_ITEMS: AdminMessageItem[] = [
  {
    id: 'MSG-2026-10491',
    threadId: 'TH-9021',
    sender: {
      name: 'Aisha Rahma',
      username: '@aisha.rahma',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      role: 'VIP Gold',
      email: 'aisha.rahma@example.com',
      phone: '+62 812-3456-7890',
      flag: '🇮🇩'
    },
    recipient: {
      name: 'Customer Support Desk',
      role: 'Support Desk'
    },
    content: 'Halo admin SafarHub, saya sudah memesan Paket Umrah Standard 12 Hari (#SFH2026-4587). Bisa kirim jadwal manasik dan tiket finalnya?',
    messageType: 'Text',
    channel: 'WhatsApp',
    category: 'Umrah & Visa',
    timestamp: '10 Oct 2026, 10:30 AM',
    direction: 'Incoming',
    status: 'Read',
    isStarred: true,
    charCount: 135
  },
  {
    id: 'MSG-2026-10492',
    threadId: 'TH-9021',
    sender: {
      name: 'Fatima Al-Zahra',
      username: '@fatima.admin',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      role: 'Admin Support',
      email: 'fatima@safarhub.sa',
      phone: '+966 11 880 1201',
      flag: '🇸🇦'
    },
    recipient: {
      name: 'Aisha Rahma',
      role: 'Customer'
    },
    content: 'Tentu Ibu Aisha, berikut kami lampirkan dokumen PDF resmi jadwal perjalanan manasik dan e-ticket Saudia Airlines SV-819.',
    messageType: 'Document PDF',
    attachment: {
      name: 'Itinerary-Umrah-Standard-12Hari-Aisha.pdf',
      type: 'PDF Document',
      size: '2.4 MB'
    },
    channel: 'WhatsApp',
    category: 'Umrah & Visa',
    timestamp: '10 Oct 2026, 10:42 AM',
    direction: 'Outgoing',
    status: 'Read',
    isStarred: true,
    charCount: 122
  },
  {
    id: 'MSG-2026-10493',
    threadId: 'TH-9022',
    sender: {
      name: 'Omar Al-Farisi',
      username: '@omar.alfarisi',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      role: 'VIP Gold',
      email: 'omar.alfarisi@saudibusiness.sa',
      phone: '+966 50 123 4567',
      flag: '🇸🇦'
    },
    recipient: {
      name: 'VIP Concierge Desk',
      role: 'Support Desk'
    },
    content: 'Mohon konfirmasi upgrade 2 kursi Business Class Saudia SV-820 untuk keberangkatan 20 Oktober.',
    messageType: 'Text',
    channel: 'VIP Hotline',
    category: 'Flight & Airport',
    timestamp: '10 Oct 2026, 09:15 AM',
    direction: 'Incoming',
    status: 'Unread',
    isStarred: true,
    charCount: 96
  },
  {
    id: 'MSG-2026-10494',
    threadId: 'TH-9023',
    sender: {
      name: 'Jeddah Horizon Travel',
      username: '@jeddah.horizon',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80',
      role: 'Travel Agent',
      email: 'b2b@jeddahhorizon.com',
      phone: '+966 12 654 3210',
      flag: '🇸🇦'
    },
    recipient: {
      name: 'Finance Desk',
      role: 'Finance Desk'
    },
    content: 'Lampiran invoice rekonsiliasi B2B alokasi 40 unit armada bus VIP Mercedes Travego gelombang Oktober telah kami kirimkan.',
    messageType: 'Document PDF',
    attachment: {
      name: 'B2B-Invoice-Oct2026-JeddahHorizon.pdf',
      type: 'PDF Document',
      size: '4.1 MB'
    },
    channel: 'Email',
    category: 'Partner B2B',
    timestamp: '10 Oct 2026, 08:45 AM',
    direction: 'Incoming',
    status: 'Delivered',
    isStarred: false,
    charCount: 125
  },
  {
    id: 'MSG-2026-10495',
    threadId: 'TH-9024',
    sender: {
      name: 'Dr. Faisal Al-Sabah',
      username: '@faisal.alsabah',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
      role: 'VIP Gold',
      email: 'dr.faisal@kuwait-health.kw',
      phone: '+965 9912 3456',
      flag: '🇰🇼'
    },
    recipient: {
      name: 'Super Admin',
      role: 'Support Desk'
    },
    content: 'Apakah slot pendaratan helipad di Makkah Clock Tower tersedia pada tanggal 15 November untuk transfer VIP Madinah?',
    messageType: 'Text',
    channel: 'VIP Hotline',
    category: 'VIP Concierge',
    timestamp: '10 Oct 2026, 07:30 AM',
    direction: 'Incoming',
    status: 'Unread',
    isStarred: true,
    charCount: 118
  },
  {
    id: 'MSG-2026-10496',
    threadId: 'TH-9025',
    sender: {
      name: 'SafarHub Automated Broadcast',
      username: '@system.broadcast',
      avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80',
      role: 'Super Admin',
      email: 'noreply@safarhub.sa',
      phone: 'Broadcast Service',
      flag: '🇸🇦'
    },
    recipient: {
      name: 'All Registered Umrah Travelers',
      role: 'All Registered Users'
    },
    content: 'Pemberitahuan Resmi: Regulasi baru tasrih Rawdah Syarifah via aplikasi Nusuk dibuka setiap Jumat pukul 12:00 Waktu Saudi.',
    messageType: 'System Notification',
    channel: 'In-App',
    category: 'System Alert',
    timestamp: '09 Oct 2026, 18:00 PM',
    direction: 'Broadcast',
    status: 'Sent',
    isStarred: false,
    charCount: 130
  },
  {
    id: 'MSG-2026-10497',
    threadId: 'TH-9026',
    sender: {
      name: 'Hassan Malik',
      username: '@hassan.malik',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
      role: 'Customer',
      email: 'hassan.malik@lahoregroup.pk',
      phone: '+92 300 1234567',
      flag: '🇵🇰'
    },
    recipient: {
      name: 'Pullman ZamZam Concierge',
      role: 'Hotel Concierge'
    },
    content: 'Kami tiba di Makkah sekitar jam 08:00 pagi besok. Apakah kamar Executive Kaaba View bisa disiapkan untuk early check-in?',
    messageType: 'Text',
    channel: 'Live Portal',
    category: 'Hotel Reservation',
    timestamp: '09 Oct 2026, 14:10 PM',
    direction: 'Incoming',
    status: 'Read',
    isStarred: false,
    charCount: 126
  },
  {
    id: 'MSG-2026-10498',
    threadId: 'TH-9027',
    sender: {
      name: 'Layla Ahmed',
      username: '@layla.ahmed',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
      role: 'Customer',
      email: 'layla.ahmed@cairocorp.eg',
      phone: '+20 100 234 5678',
      flag: '🇪🇬'
    },
    recipient: {
      name: 'Finance Desk',
      role: 'Finance Desk'
    },
    content: 'Terima kasih atas konfirmasi refund tiket Haramain Express. Dana SAR 750 sudah masuk ke rekening saya hari ini.',
    messageType: 'Text',
    channel: 'Email',
    category: 'Payment & Invoicing',
    timestamp: '08 Oct 2026, 16:40 PM',
    direction: 'Incoming',
    status: 'Read',
    isStarred: false,
    charCount: 114
  },
  {
    id: 'MSG-2026-10499',
    threadId: 'TH-9028',
    sender: {
      name: 'Zubair Al-Hashimi',
      username: '@zubair.hashimi',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
      role: 'VIP Gold',
      email: 'zubair@hashimigroup.ae',
      phone: '+971 50 889 1234',
      flag: '🇦🇪'
    },
    recipient: {
      name: 'Customer Support Desk',
      role: 'Support Desk'
    },
    content: 'Mohon kirimkan penawaran quotation resmi untuk pemesanan 15 kamar di Dar Al Tawhid Intercontinental Makkah.',
    messageType: 'Text',
    channel: 'WhatsApp',
    category: 'Hotel Reservation',
    timestamp: '08 Oct 2026, 11:20 AM',
    direction: 'Incoming',
    status: 'Read',
    isStarred: true,
    charCount: 116
  },
  {
    id: 'MSG-2026-10500',
    threadId: 'TH-9029',
    sender: {
      name: 'SafarHub Security OTP',
      username: '@system.otp',
      avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80',
      role: 'System Bot',
      email: 'auth@safarhub.sa',
      phone: 'SMS Gateway',
      flag: '🇸🇦'
    },
    recipient: {
      name: 'Kareem Abdul-Jabar (+60 12 345 6789)',
      role: 'Customer'
    },
    content: 'Kode OTP verifikasi masuk portal admin SafarHub Anda adalah 849-210. Jangan berikan kode ini kepada siapapun.',
    messageType: 'Text',
    channel: 'SMS Gateway',
    category: 'System Alert',
    timestamp: '07 Oct 2026, 09:00 AM',
    direction: 'Outgoing',
    status: 'Delivered',
    isStarred: false,
    charCount: 110
  }
];

export const ADMIN_MESSAGE_TRAFFIC_SHARES: AdminMessageTrafficShare[] = [
  { channel: 'WhatsApp API Gateway', count: 14210, percentage: 57.8, color: '#25D366', iconName: 'PhoneCall' },
  { channel: 'Live Portal Web Chat', count: 5430, percentage: 22.1, color: '#0e5f2c', iconName: 'MessageCircle' },
  { channel: 'In-App Direct Inbox', count: 2680, percentage: 10.9, color: '#3b82f6', iconName: 'Inbox' },
  { channel: 'VIP Concierge Desk', count: 890, percentage: 3.6, color: '#d4af37', iconName: 'Crown' },
  { channel: 'Email Gateway Logs', count: 740, percentage: 3.0, color: '#8b5cf6', iconName: 'Mail' },
  { channel: 'SMS OTP & Alerts', count: 420, percentage: 1.7, color: '#f59e0b', iconName: 'Smartphone' },
  { channel: 'System Bot Logs', count: 210, percentage: 0.9, color: '#64748b', iconName: 'Bot' }
];

export const ADMIN_MESSAGE_HOURLY_VOLUME: AdminMessageHourlyVolume[] = [
  { hour: '00:00', sent: 120, received: 150 },
  { hour: '04:00', sent: 60, received: 90 },
  { hour: '08:00', sent: 680, received: 720 },
  { hour: '12:00', sent: 1420, received: 1650 },
  { hour: '16:00', sent: 2150, received: 2480 },
  { hour: '20:00', sent: 1280, received: 1390 }
];

export const ADMIN_MESSAGE_AUDIT_LOGS: AdminMessageAuditLog[] = [
  {
    id: 'log-1',
    action: 'Dispatched Itinerary PDF Document',
    messageId: 'MSG-2026-10492',
    operator: 'Fatima Al-Zahra',
    timestamp: '10 mins ago',
    details: 'Attachment: Itinerary-Umrah-Standard-12Hari-Aisha.pdf'
  },
  {
    id: 'log-2',
    action: 'Starred VIP Priority Message',
    messageId: 'MSG-2026-10495',
    operator: 'Super Admin',
    timestamp: '35 mins ago',
    details: 'Dr. Faisal Al-Sabah heli shuttle request flagged'
  },
  {
    id: 'log-3',
    action: 'Broadcasted Global Notification',
    messageId: 'MSG-2026-10496',
    operator: 'Automated Bot Engine',
    timestamp: '1 day ago',
    details: 'Delivered to 1,840 active pilgrim accounts'
  }
];
