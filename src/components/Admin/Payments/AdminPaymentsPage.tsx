import React, { useState } from 'react';
import { AdminPaymentsHeader } from './AdminPaymentsHeader';
import { AdminPaymentsKpiRow } from './AdminPaymentsKpiRow';
import { AdminPaymentsServiceStrip } from './AdminPaymentsServiceStrip';
import { AdminPaymentsFilterBar } from './AdminPaymentsFilterBar';
import { AdminPaymentsMiddleRow } from './AdminPaymentsMiddleRow';
import { AdminPaymentsMainSplitRow } from './AdminPaymentsMainSplitRow';
import { AdminPaymentsBottomRow } from './AdminPaymentsBottomRow';
import { AdminPaymentTransaction } from '../../../types/adminPayments';

interface AdminPaymentsPageProps {
  onOpenActionModal?: (id: string, title: string) => void;
}

export const AdminPaymentsPage: React.FC<AdminPaymentsPageProps> = ({
  onOpenActionModal
}) => {
  const [activeService, setActiveService] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDateRange, setSelectedDateRange] = useState('1 Oct 2026 - 31 Oct 2026');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedService, setSelectedService] = useState('all');
  const [selectedCurrency, setSelectedCurrency] = useState('all');

  const handleResetFilters = () => {
    setActiveService('all');
    setSearchQuery('');
    setSelectedDateRange('1 Oct 2026 - 31 Oct 2026');
    setSelectedPaymentMethod('all');
    setSelectedStatus('all');
    setSelectedService('all');
    setSelectedCurrency('all');
  };

  const handleSelectTransaction = (txn: AdminPaymentTransaction) => {
    if (onOpenActionModal) {
      onOpenActionModal(`admin-txn-${txn.id}`, `Transaction Details: [${txn.transactionId}] - ${txn.amount}`);
    }
  };

  return (
    <div className="space-y-4 sm:space-y-5 pb-10">
      {/* 1. Header Banner */}
      <AdminPaymentsHeader
        onCreatePaymentLink={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-create-payment-link', 'Generate Smart Checkout Payment Link');
          }
        }}
        onRequestPayout={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-request-payout', 'Request Partner / Merchant Fund Disbursement');
          }
        }}
      />

      {/* 2. 5 KPI Stat Metrics Row */}
      <AdminPaymentsKpiRow />

      {/* 3. Service Filter Tabs */}
      <AdminPaymentsServiceStrip
        activeService={activeService}
        onSelectService={(srvId) => setActiveService(srvId)}
      />

      {/* 4. Filter Toolbar & Search Bar */}
      <AdminPaymentsFilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedDateRange={selectedDateRange}
        onDateRangeChange={setSelectedDateRange}
        selectedPaymentMethod={selectedPaymentMethod}
        onPaymentMethodChange={setSelectedPaymentMethod}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        selectedService={selectedService}
        onServiceChange={setSelectedService}
        selectedCurrency={selectedCurrency}
        onCurrencyChange={setSelectedCurrency}
        onResetFilters={handleResetFilters}
      />

      {/* 5. Middle Charts & Supported Payment Methods Row */}
      <AdminPaymentsMiddleRow />

      {/* 6. Recent Transactions Table & Payouts Split Row */}
      <AdminPaymentsMainSplitRow
        onViewAllTransactions={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-all-transactions', 'All Transactions Ledger & Settlement Status');
          }
        }}
        onViewAllPayouts={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-all-payouts', 'Partner & Vendor Payouts History');
          }
        }}
        onSelectTransaction={handleSelectTransaction}
      />

      {/* 7. Bottom 3-Card Row (Refund Requests, Payment Links, Invoices) */}
      <AdminPaymentsBottomRow
        onViewAllRefunds={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-all-refunds', 'Customer Refund Requests & Disputes Queue');
          }
        }}
        onViewAllLinks={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-all-payment-links', 'Active Dynamic Payment Links & QR Codes');
          }
        }}
        onViewAllInvoices={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-all-invoices', 'ZATCA E-Invoices & Tax Receipts Database');
          }
        }}
      />
    </div>
  );
};
