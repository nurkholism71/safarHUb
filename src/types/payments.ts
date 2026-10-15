export interface TransactionItem {
  id: string;
  bookingCode: string;
  category: 'hotel' | 'transport' | 'umrah' | 'airport' | 'jastip' | 'flight';
  categoryLabel: string;
  title: string;
  dateTime: string;
  priceSAR: number;
  status: 'Paid' | 'Pending' | 'Processing' | 'Refunded';
  statusColor: string;
  image: string;
}

export interface PaymentSpendingBreakdown {
  totalSpentSAR: number;
  hotelsSAR: number;
  hotelsPercent: number;
  umrahSAR: number;
  umrahPercent: number;
  transportSAR: number;
  transportPercent: number;
  airportSAR: number;
  airportPercent: number;
  jastipSAR: number;
  jastipPercent: number;
}

export interface SavedPaymentMethod {
  id: string;
  type: 'visa' | 'mastercard' | 'stcpay' | 'mada' | 'applepay';
  cardLast4?: string;
  phone?: string;
  expiry?: string;
  isDefault?: boolean;
}

export interface InvoiceItem {
  id: string;
  invoiceCode: string;
  title: string;
  category: string;
  priceSAR: number;
  date: string;
}
