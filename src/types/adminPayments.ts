export type PaymentStatus = 'Completed' | 'Pending' | 'Refunded' | 'Failed';
export type PayoutStatus = 'Sent' | 'Processing' | 'Pending' | 'Failed';
export type RefundStatus = 'Approved' | 'Processing' | 'Rejected';
export type InvoiceStatus = 'Paid' | 'Unpaid' | 'Overdue';

export interface AdminPaymentKpi {
  id: string;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  subtitle: string;
  iconName: string;
  bgColorClass: string;
  textColorClass: string;
}

export interface AdminPaymentServiceFilter {
  id: string;
  label: string;
  iconName: string;
}

export interface AdminRevenueDataPoint {
  date: string;
  revenue: number; // in SAR
}

export interface AdminPaymentMethodShare {
  method: string;
  percentage: number;
  color: string;
}

export interface AdminPaymentTransaction {
  id: string;
  transactionId: string;
  dateTime: string;
  user: {
    name: string;
    avatar: string;
  };
  service: {
    name: string;
    iconName: string;
  };
  amount: string;
  amountNumber: number;
  paymentMethod: {
    name: string;
    type: string;
  };
  status: PaymentStatus;
}

export interface AdminPartnerPayout {
  id: string;
  partner: string;
  amount: string;
  status: PayoutStatus;
}

export interface AdminRefundRequest {
  id: string;
  requestId: string;
  date: string;
  user: {
    name: string;
    avatar: string;
  };
  amount: string;
  status: RefundStatus;
}

export interface AdminPaymentLinkItem {
  id: string;
  name: string;
  service: string;
  serviceIcon: string;
  amount: string;
  usage: string;
  status: 'Active' | 'Expired' | 'Paused';
}

export interface AdminInvoiceRecord {
  id: string;
  invoiceId: string;
  date: string;
  user: {
    name: string;
    avatar: string;
  };
  amount: string;
  status: InvoiceStatus;
}
