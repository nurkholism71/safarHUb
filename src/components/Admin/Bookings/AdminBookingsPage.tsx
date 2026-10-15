import React, { useState } from 'react';
import { AdminBookingsHeader } from './AdminBookingsHeader';
import { AdminBookingsKpiRow } from './AdminBookingsKpiRow';
import { AdminBookingsFilterBar } from './AdminBookingsFilterBar';
import { AdminBookingsTable } from './AdminBookingsTable';
import { AdminBookingDetailPanel } from './AdminBookingDetailPanel';
import { AdminBookingsBottomAnalytics } from './AdminBookingsBottomAnalytics';
import { ADMIN_BOOKING_ITEMS } from '../../../data/adminBookingData';
import { AdminBookingItem } from '../../../types/adminBooking';

interface AdminBookingsPageProps {
  onOpenActionModal?: (id: string, title: string) => void;
}

export const AdminBookingsPage: React.FC<AdminBookingsPageProps> = ({
  onOpenActionModal
}) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedPayment, setSelectedPayment] = useState('all');
  const [selectedBooking, setSelectedBooking] = useState<AdminBookingItem | null>(ADMIN_BOOKING_ITEMS[0]);

  // Filter bookings based on state
  const filteredBookings = ADMIN_BOOKING_ITEMS.filter((item) => {
    // Category filter
    if (activeCategory === 'hotels' && item.service.type !== 'Hotel') return false;
    if (activeCategory === 'transport' && item.service.type !== 'Transport') return false;
    if (activeCategory === 'airport' && item.service.type !== 'Airport Service') return false;
    if (activeCategory === 'umrah' && item.service.type !== 'Umrah Package') return false;
    if (activeCategory === 'experiences' && item.service.type !== 'Experience') return false;

    // Service dropdown
    if (selectedService === 'hotel' && item.service.type !== 'Hotel') return false;
    if (selectedService === 'transport' && item.service.type !== 'Transport') return false;
    if (selectedService === 'airport' && item.service.type !== 'Airport Service') return false;
    if (selectedService === 'umrah' && item.service.type !== 'Umrah Package') return false;
    if (selectedService === 'experience' && item.service.type !== 'Experience') return false;

    // Status dropdown
    if (selectedStatus !== 'all' && item.status.toLowerCase() !== selectedStatus.toLowerCase()) return false;

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchId = item.id.toLowerCase().includes(q);
      const matchCustomer = item.customer.name.toLowerCase().includes(q) || item.customer.email.toLowerCase().includes(q);
      const matchService = item.service.category.toLowerCase().includes(q) || item.details.title.toLowerCase().includes(q);
      if (!matchId && !matchCustomer && !matchService) return false;
    }

    return true;
  });

  return (
    <div className="space-y-6">
      {/* 1. Header with + New Booking */}
      <AdminBookingsHeader
        onNewBooking={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-new-booking', 'Create New Booking Order');
          }
        }}
      />

      {/* 2. Top 6 KPI Metric Cards */}
      <AdminBookingsKpiRow
        onSelectKpi={(kpiId) => {
          if (onOpenActionModal) {
            onOpenActionModal(`admin-kpi-${kpiId}`, `Booking Metric: ${kpiId.toUpperCase()}`);
          }
        }}
      />

      {/* 3. Category Tabs & Filter Toolbar */}
      <AdminBookingsFilterBar
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedService={selectedService}
        onServiceChange={setSelectedService}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        selectedPayment={selectedPayment}
        onPaymentChange={setSelectedPayment}
        onExport={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-export-bookings', 'Export Bookings Data (.CSV / .XLSX)');
          }
        }}
      />

      {/* 4. Split Layout: Table (Left) + Detail Panel (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
        {/* Table Column */}
        <div className={`${selectedBooking ? 'lg:col-span-7 xl:col-span-8' : 'lg:col-span-12'} flex flex-col`}>
          <AdminBookingsTable
            bookings={filteredBookings}
            selectedBookingId={selectedBooking?.id || null}
            onSelectBooking={(booking) => setSelectedBooking(booking)}
            onOpenActionModal={onOpenActionModal}
          />
        </div>

        {/* Detail Panel Column */}
        {selectedBooking && (
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col">
            <AdminBookingDetailPanel
              booking={selectedBooking}
              onClose={() => setSelectedBooking(null)}
              onEditBooking={(id) => {
                if (onOpenActionModal) {
                  onOpenActionModal(`admin-edit-booking-${id}`, `Edit Booking Details: ${id}`);
                }
              }}
              onSendMessage={(id) => {
                if (onOpenActionModal) {
                  onOpenActionModal(`admin-message-customer-${id}`, `Direct Message to ${selectedBooking.customer.name}`);
                }
              }}
              onCancelBooking={(id) => {
                if (onOpenActionModal) {
                  onOpenActionModal(`admin-cancel-booking-${id}`, `Cancel Booking Confirmation: ${id}`);
                }
              }}
              onIssueRefund={(id) => {
                if (onOpenActionModal) {
                  onOpenActionModal(`admin-refund-booking-${id}`, `Process Refund for Booking ${id}`);
                }
              }}
            />
          </div>
        )}
      </div>

      {/* 5. Bottom 3 Analytics Cards */}
      <AdminBookingsBottomAnalytics
        onViewAllDestinations={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-destinations-all', 'Destination Performance & Analytics');
          }
        }}
      />
    </div>
  );
};
