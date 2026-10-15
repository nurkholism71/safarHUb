import React, { useState } from 'react';
import { PaymentsHero } from './PaymentsHero';
import { MyTripsSidebar } from '../MyTripsPage/MyTripsSidebar';
import { TransactionHistorySection } from './TransactionHistorySection';
import { PaymentsRightSidebar } from './PaymentsRightSidebar';
import { RecentInvoicesRow } from './RecentInvoicesRow';
import { PaymentOptionsBanner } from './PaymentOptionsBanner';
import { TRANSACTIONS_DATA } from '../../data/paymentsData';
import { TransactionItem } from '../../types/payments';

interface PaymentsPageProps {
  onNavigateView?: (view: string) => void;
  onOpenActionModal?: (id: string, title: string) => void;
}

export const PaymentsPage: React.FC<PaymentsPageProps> = ({
  onNavigateView,
  onOpenActionModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTx, setSelectedTx] = useState<TransactionItem | null>(null);

  const handleSelectTransaction = (tx: TransactionItem) => {
    setSelectedTx(tx);
    if (onOpenActionModal) {
      onOpenActionModal(tx.bookingCode, `Payment Receipt: ${tx.title} (SAR ${tx.priceSAR.toLocaleString()})`);
    } else {
      alert(`Viewing transaction details for ${tx.title} (${tx.bookingCode})`);
    }
  };

  const handleMakePayment = () => {
    if (onOpenActionModal) {
      onOpenActionModal('make-payment', 'Make a New Payment');
    } else {
      alert('Opening unified payment gateway modal');
    }
  };

  const handleAddPaymentMethod = () => {
    if (onOpenActionModal) {
      onOpenActionModal('add-card', 'Add New Payment Method / Credit Card');
    } else {
      alert('Opening Add Payment Method form');
    }
  };

  const handleQuickPay = (serviceId: string) => {
    if (onNavigateView && (serviceId === 'hotel' || serviceId === 'transport' || serviceId === 'airport' || serviceId === 'jastip' || serviceId === 'umrah')) {
      const viewMap: Record<string, string> = {
        hotel: 'hotels',
        transport: 'transport',
        airport: 'airport',
        jastip: 'jastip',
        umrah: 'umrah'
      };
      onNavigateView(viewMap[serviceId]);
    } else if (onOpenActionModal) {
      onOpenActionModal(`quick-pay-${serviceId}`, `Quick Payment for ${serviceId.toUpperCase()}`);
    }
  };

  return (
    <div className="w-full bg-[#f8fafc] pb-16">
      {/* 1. Full-Width Hero Section */}
      <PaymentsHero
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        onMakePayment={handleMakePayment}
      />

      {/* 2. Main 3-Column Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Vertical Nav Sidebar (3 cols - Sticky) */}
          <div className="lg:col-span-3 lg:sticky lg:top-20 self-start">
            <MyTripsSidebar
              activeTab="payments"
              onSelectTab={(tab) => {
                if (tab === 'trips' && onNavigateView) {
                  onNavigateView('my-trips');
                } else if (tab === 'bookings' && onNavigateView) {
                  onNavigateView('bookings');
                }
              }}
              onPlanTrip={() => {
                if (onNavigateView) {
                  onNavigateView('umrah');
                }
              }}
            />
          </div>

          {/* Middle Main Content: Transaction History (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <TransactionHistorySection
              transactions={TRANSACTIONS_DATA}
              selectedCategory={selectedCategory}
              onSelectTransaction={handleSelectTransaction}
            />
          </div>

          {/* Right Sidebar Widgets: Donut Summary, Saved Cards, Quick Pay (3 cols) */}
          <div className="lg:col-span-3 lg:sticky lg:top-20 self-start">
            <PaymentsRightSidebar
              onAddPaymentMethod={handleAddPaymentMethod}
              onQuickPay={handleQuickPay}
              onViewReport={() => {
                if (onOpenActionModal) {
                  onOpenActionModal('spending-report', 'Monthly Spending Report');
                }
              }}
            />
          </div>
        </div>

        {/* 3. Invoices & Flexible Payment Options Banner */}
        <RecentInvoicesRow
          onDownloadInvoice={(invId) => {
            alert(`Downloading official VAT tax receipt for ${invId}`);
          }}
        />

        <PaymentOptionsBanner />
      </div>
    </div>
  );
};
