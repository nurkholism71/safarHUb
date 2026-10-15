import {
  AdminPaymentKpi,
  AdminPaymentServiceFilter,
  AdminRevenueDataPoint,
  AdminPaymentMethodShare,
  AdminPaymentTransaction,
  AdminPartnerPayout,
  AdminRefundRequest,
  AdminPaymentLinkItem,
  AdminInvoiceRecord
} from '../types/adminPayments';

export const ADMIN_PAYMENT_KPIS: AdminPaymentKpi[] = [
  {
    id: 'total_revenue',
    title: 'Total Revenue',
    value: 'SAR 8,420,350',
    change: '↑ 35%',
    isPositive: true,
    subtitle: 'vs last month',
    iconName: 'Wallet',
    bgColorClass: 'bg-emerald-500/10 text-emerald-500',
    textColorClass: 'text-emerald-500'
  },
  {
    id: 'total_transactions',
    title: 'Total Transactions',
    value: '48,250',
    change: '↑ 28%',
    isPositive: true,
    subtitle: 'vs last month',
    iconName: 'CreditCard',
    bgColorClass: 'bg-blue-500/10 text-blue-500',
    textColorClass: 'text-blue-500'
  },
  {
    id: 'successful_payments',
    title: 'Successful Payments',
    value: '46,980',
    change: '97.4%',
    isPositive: true,
    subtitle: 'success rate',
    iconName: 'ShoppingBag',
    bgColorClass: 'bg-emerald-600/10 text-emerald-600',
    textColorClass: 'text-emerald-600'
  },
  {
    id: 'refunded_amount',
    title: 'Refunded Amount',
    value: 'SAR 125,680',
    change: '1.8%',
    isPositive: false,
    subtitle: 'of total payments',
    iconName: 'RotateCcw',
    bgColorClass: 'bg-rose-500/10 text-rose-500',
    textColorClass: 'text-rose-500'
  },
  {
    id: 'pending_payouts',
    title: 'Pending Payouts',
    value: 'SAR 520,000',
    change: '12',
    isPositive: true,
    subtitle: 'transactions',
    iconName: 'ArrowUpRight',
    bgColorClass: 'bg-sky-500/10 text-sky-500',
    textColorClass: 'text-sky-500'
  }
];

export const ADMIN_PAYMENT_SERVICES: AdminPaymentServiceFilter[] = [
  { id: 'all', label: 'All Payments', iconName: 'Layers' },
  { id: 'bookings', label: 'Bookings', iconName: 'CalendarCheck' },
  { id: 'hotels', label: 'Hotels', iconName: 'Building2' },
  { id: 'transport', label: 'Transport', iconName: 'Car' },
  { id: 'airport', label: 'Airport Services', iconName: 'Plane' },
  { id: 'jastip', label: 'Jastip', iconName: 'ShoppingBag' },
  { id: 'umrah', label: 'Umrah Packages', iconName: 'Luggage' },
  { id: 'experiences', label: 'Experiences', iconName: 'Compass' },
  { id: 'more', label: 'More', iconName: 'MoreHorizontal' }
];

export const ADMIN_REVENUE_CHART_POINTS: AdminRevenueDataPoint[] = [
  { date: '1 Oct', revenue: 280000 },
  { date: '5 Oct', revenue: 350000 },
  { date: '10 Oct', revenue: 420000 },
  { date: '15 Oct', revenue: 490000 },
  { date: '20 Oct', revenue: 750000 },
  { date: '25 Oct', revenue: 890000 },
  { date: '31 Oct', revenue: 1180000 }
];

export const ADMIN_PAYMENT_METHOD_SHARES: AdminPaymentMethodShare[] = [
  { method: 'Credit/Debit Card', percentage: 42, color: '#3b82f6' },
  { method: 'Bank Transfer', percentage: 24, color: '#8b5cf6' },
  { method: 'E-Wallet', percentage: 18, color: '#f59e0b' },
  { method: 'Apple Pay / Google Pay', percentage: 8, color: '#10b981' },
  { method: 'Cash (Offline)', percentage: 5, color: '#00A651' },
  { method: 'Others', percentage: 3, color: '#64748b' }
];

export const ADMIN_PAYMENT_TRANSACTIONS: AdminPaymentTransaction[] = [
  {
    id: 'txn-1',
    transactionId: 'TXN00125678',
    dateTime: '20 Oct 2026 14:32',
    user: {
      name: 'Ahmad Fauzi',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'
    },
    service: {
      name: 'Umrah Package',
      iconName: 'Luggage'
    },
    amount: 'SAR 6,850',
    amountNumber: 6850,
    paymentMethod: {
      name: 'Credit Card',
      type: 'visa'
    },
    status: 'Completed'
  },
  {
    id: 'txn-2',
    transactionId: 'TXN00125677',
    dateTime: '20 Oct 2026 13:15',
    user: {
      name: 'Siti Aisyah',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
    },
    service: {
      name: 'Hotel Booking',
      iconName: 'Building2'
    },
    amount: 'SAR 420',
    amountNumber: 420,
    paymentMethod: {
      name: 'STC Pay',
      type: 'stcpay'
    },
    status: 'Completed'
  },
  {
    id: 'txn-3',
    transactionId: 'TXN00125676',
    dateTime: '20 Oct 2026 12:48',
    user: {
      name: 'Omar Hassan',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80'
    },
    service: {
      name: 'Flight Ticket',
      iconName: 'Plane'
    },
    amount: 'SAR 1,280',
    amountNumber: 1280,
    paymentMethod: {
      name: 'Apple Pay',
      type: 'applepay'
    },
    status: 'Completed'
  },
  {
    id: 'txn-4',
    transactionId: 'TXN00125675',
    dateTime: '19 Oct 2026 21:33',
    user: {
      name: 'Fatimah Zahra',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
    },
    service: {
      name: 'Jastip Service',
      iconName: 'ShoppingBag'
    },
    amount: 'SAR 250',
    amountNumber: 250,
    paymentMethod: {
      name: 'Bank Transfer',
      type: 'bank'
    },
    status: 'Completed'
  },
  {
    id: 'txn-5',
    transactionId: 'TXN00125674',
    dateTime: '19 Oct 2026 18:20',
    user: {
      name: 'Ali Hussein',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    service: {
      name: 'Airport Service',
      iconName: 'Plane'
    },
    amount: 'SAR 180',
    amountNumber: 180,
    paymentMethod: {
      name: 'Credit Card',
      type: 'visa'
    },
    status: 'Refunded'
  },
  {
    id: 'txn-6',
    transactionId: 'TXN00125673',
    dateTime: '19 Oct 2026 16:10',
    user: {
      name: 'Layla Ahmad',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80'
    },
    service: {
      name: 'Experience',
      iconName: 'Compass'
    },
    amount: 'SAR 450',
    amountNumber: 450,
    paymentMethod: {
      name: 'Google Pay',
      type: 'gpay'
    },
    status: 'Completed'
  },
  {
    id: 'txn-7',
    transactionId: 'TXN00125672',
    dateTime: '19 Oct 2026 14:55',
    user: {
      name: 'Khalid Al-Mansuri',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
    },
    service: {
      name: 'Transport',
      iconName: 'Car'
    },
    amount: 'SAR 320',
    amountNumber: 320,
    paymentMethod: {
      name: 'Cash (Offline)',
      type: 'cash'
    },
    status: 'Completed'
  },
  {
    id: 'txn-8',
    transactionId: 'TXN00125671',
    dateTime: '18 Oct 2026 20:12',
    user: {
      name: 'Nur Rahma',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
    },
    service: {
      name: 'Hotel Booking',
      iconName: 'Building2'
    },
    amount: 'SAR 890',
    amountNumber: 890,
    paymentMethod: {
      name: 'Bank Transfer',
      type: 'bank'
    },
    status: 'Pending'
  }
];

export const ADMIN_PARTNER_PAYOUTS: AdminPartnerPayout[] = [
  {
    id: 'pay-1',
    partner: 'Makkah Hotel Group',
    amount: 'SAR 280,000',
    status: 'Processing'
  },
  {
    id: 'pay-2',
    partner: 'Saudi Airlines',
    amount: 'SAR 150,000',
    status: 'Sent'
  },
  {
    id: 'pay-3',
    partner: 'Jeddah Transport',
    amount: 'SAR 45,000',
    status: 'Pending'
  },
  {
    id: 'pay-4',
    partner: 'Umrah Guide Team',
    amount: 'SAR 32,000',
    status: 'Sent'
  },
  {
    id: 'pay-5',
    partner: 'Experience Partners',
    amount: 'SAR 28,500',
    status: 'Processing'
  }
];

export const ADMIN_REFUND_REQUESTS: AdminRefundRequest[] = [
  {
    id: 'ref-1',
    requestId: 'REF001248',
    date: '20 Oct 2026',
    user: {
      name: 'Ali Hussein',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    amount: 'SAR 180',
    status: 'Processing'
  },
  {
    id: 'ref-2',
    requestId: 'REF001247',
    date: '19 Oct 2026',
    user: {
      name: 'Layla Ahmad',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80'
    },
    amount: 'SAR 320',
    status: 'Approved'
  },
  {
    id: 'ref-3',
    requestId: 'REF001246',
    date: '18 Oct 2026',
    user: {
      name: 'Hassan Malik',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    amount: 'SAR 250',
    status: 'Rejected'
  }
];

export const ADMIN_PAYMENT_LINKS: AdminPaymentLinkItem[] = [
  {
    id: 'link-1',
    name: 'Umrah Group Nov',
    service: 'Umrah',
    serviceIcon: 'Luggage',
    amount: 'SAR 6,850',
    usage: '24/50',
    status: 'Active'
  },
  {
    id: 'link-2',
    name: 'Hotel Deposit',
    service: 'Hotel',
    serviceIcon: 'Building2',
    amount: 'SAR 500',
    usage: '18/100',
    status: 'Active'
  },
  {
    id: 'link-3',
    name: 'Custom Experience',
    service: 'Experience',
    serviceIcon: 'Compass',
    amount: 'SAR 450',
    usage: '9/20',
    status: 'Active'
  }
];

export const ADMIN_INVOICES: AdminInvoiceRecord[] = [
  {
    id: 'inv-1',
    invoiceId: 'INV-2026-458',
    date: '20 Oct 2026',
    user: {
      name: 'Ahmad Fauzi',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'
    },
    amount: 'SAR 6,850',
    status: 'Paid'
  },
  {
    id: 'inv-2',
    invoiceId: 'INV-2026-457',
    date: '19 Oct 2026',
    user: {
      name: 'Siti Aisyah',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
    },
    amount: 'SAR 420',
    status: 'Paid'
  },
  {
    id: 'inv-3',
    invoiceId: 'INV-2026-456',
    date: '18 Oct 2026',
    user: {
      name: 'Omar Hassan',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80'
    },
    amount: 'SAR 1,280',
    status: 'Unpaid'
  }
];
