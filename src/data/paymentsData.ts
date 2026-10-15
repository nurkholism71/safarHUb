import {
  TransactionItem,
  PaymentSpendingBreakdown,
  SavedPaymentMethod,
  InvoiceItem
} from '../types/payments';

export const TRANSACTIONS_DATA: TransactionItem[] = [
  {
    id: 'tx-1',
    bookingCode: 'HBK-102938',
    category: 'hotel',
    categoryLabel: 'Hotel Booking',
    title: 'Makkah Hilton Convention Hotel',
    dateTime: '12 Oct 2026, 14:32',
    priceSAR: 2850,
    status: 'Paid',
    statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'tx-2',
    bookingCode: 'TBK-102939',
    category: 'transport',
    categoryLabel: 'Transport Booking',
    title: 'Jeddah Airport ➔ Makkah Hotel',
    dateTime: '12 Oct 2026, 09:15',
    priceSAR: 450,
    status: 'Paid',
    statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'tx-3',
    bookingCode: 'UBK-102941',
    category: 'umrah',
    categoryLabel: 'Umrah Package',
    title: 'Essential Umrah – 7 Days',
    dateTime: '10 Oct 2026, 20:21',
    priceSAR: 3900,
    status: 'Paid',
    statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'tx-4',
    bookingCode: 'ABK-102940',
    category: 'airport',
    categoryLabel: 'Airport Service',
    title: 'Meet & Greet – Jeddah Airport (JED)',
    dateTime: '5 Oct 2026, 11:05',
    priceSAR: 300,
    status: 'Pending',
    statusColor: 'bg-amber-100 text-amber-800 border-amber-200',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'tx-5',
    bookingCode: 'JBK-102942',
    category: 'jastip',
    categoryLabel: 'Jastip Order',
    title: 'Oud Perfume × 2, Ajwa Dates × 5',
    dateTime: '3 Oct 2026, 17:40',
    priceSAR: 650,
    status: 'Processing',
    statusColor: 'bg-blue-100 text-blue-800 border-blue-200',
    image: '/images/jastip/ajwa_dates.jpg'
  },
  {
    id: 'tx-6',
    bookingCode: 'FBK-102900',
    category: 'flight',
    categoryLabel: 'Flight Booking',
    title: 'Riyadh ➔ Jeddah',
    dateTime: '28 Sep 2026, 13:12',
    priceSAR: 1200,
    status: 'Refunded',
    statusColor: 'bg-rose-100 text-rose-800 border-rose-200',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=500&q=80'
  }
];

export const SPENDING_BREAKDOWN: PaymentSpendingBreakdown = {
  totalSpentSAR: 7900,
  hotelsSAR: 2850,
  hotelsPercent: 36,
  umrahSAR: 3900,
  umrahPercent: 49,
  transportSAR: 450,
  transportPercent: 6,
  airportSAR: 300,
  airportPercent: 4,
  jastipSAR: 650,
  jastipPercent: 5
};

export const SAVED_PAYMENT_METHODS: SavedPaymentMethod[] = [
  {
    id: 'pm-1',
    type: 'visa',
    cardLast4: '4587',
    expiry: '12/2028',
    isDefault: true
  },
  {
    id: 'pm-2',
    type: 'mastercard',
    cardLast4: '2233',
    expiry: '09/2027'
  },
  {
    id: 'pm-3',
    type: 'stcpay',
    phone: '+966 5XX XXX 123'
  },
  {
    id: 'pm-4',
    type: 'mada',
    cardLast4: '9901'
  }
];

export const RECENT_INVOICES: InvoiceItem[] = [
  {
    id: 'inv-1',
    invoiceCode: '#INV-102938',
    title: 'Hotel Invoice',
    category: 'Hotel Booking',
    priceSAR: 2850,
    date: '12 Oct 2026'
  },
  {
    id: 'inv-2',
    invoiceCode: '#INV-102939',
    title: 'Transport Invoice',
    category: 'Transport Booking',
    priceSAR: 450,
    date: '12 Oct 2026'
  },
  {
    id: 'inv-3',
    invoiceCode: '#INV-102941',
    title: 'Umrah Package',
    category: 'Umrah Package',
    priceSAR: 3900,
    date: '10 Oct 2026'
  },
  {
    id: 'inv-4',
    invoiceCode: '#INV-102942',
    title: 'Jastip Invoice',
    category: 'Jastip Order',
    priceSAR: 650,
    date: '3 Oct 2026'
  }
];
