import React, { useState } from 'react';
import { AdminHotelsHeader } from './AdminHotelsHeader';
import { AdminHotelsKpiRow } from './AdminHotelsKpiRow';
import { AdminHotelsAnalyticsRow } from './AdminHotelsAnalyticsRow';
import { AdminHotelsFilterBar } from './AdminHotelsFilterBar';
import { AdminHotelsTable } from './AdminHotelsTable';
import { AdminHotelDetailPanel } from './AdminHotelDetailPanel';
import { ADMIN_HOTEL_ITEMS } from '../../../data/adminHotelData';
import { AdminHotelItem } from '../../../types/adminHotel';

interface AdminHotelsPageProps {
  onOpenActionModal?: (id: string, title: string) => void;
}

export const AdminHotelsPage: React.FC<AdminHotelsPageProps> = ({
  onOpenActionModal
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRating, setSelectedRating] = useState('all');
  const [selectedHotel, setSelectedHotel] = useState<AdminHotelItem | null>(ADMIN_HOTEL_ITEMS[0]);

  // Filter logic
  const filteredHotels = ADMIN_HOTEL_ITEMS.filter((hotel) => {
    if (selectedDestination !== 'all' && hotel.location.city.toLowerCase() !== selectedDestination.toLowerCase()) {
      return false;
    }
    if (selectedStatus !== 'all' && hotel.status.toLowerCase() !== selectedStatus.toLowerCase()) {
      return false;
    }
    if (selectedCategory === '5star' && hotel.stars !== 5) return false;
    if (selectedCategory === '4star' && hotel.stars !== 4) return false;
    if (selectedCategory === '3star' && hotel.stars !== 3) return false;
    if (selectedRating === '4.5' && hotel.rating < 4.5) return false;
    if (selectedRating === '4.0' && hotel.rating < 4.0) return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = hotel.name.toLowerCase().includes(q);
      const matchCity = hotel.location.city.toLowerCase().includes(q) || hotel.location.area.toLowerCase().includes(q);
      const matchCode = hotel.code.toLowerCase().includes(q);
      if (!matchName && !matchCity && !matchCode) return false;
    }

    return true;
  });

  return (
    <div className="space-y-6">
      {/* 1. Header with Title and Actions */}
      <AdminHotelsHeader
        onAddHotel={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-add-hotel', 'Add New Hotel Property');
          }
        }}
        onExport={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-export-hotels', 'Export Hotels Catalog (.CSV / .XLSX)');
          }
        }}
      />

      {/* 2. Top 6 KPI Stat Metric Cards */}
      <AdminHotelsKpiRow
        onSelectKpi={(kpiId) => {
          if (onOpenActionModal) {
            onOpenActionModal(`admin-kpi-${kpiId}`, `Hotel Metric: ${kpiId.toUpperCase()}`);
          }
        }}
      />

      {/* 3. Middle 3 Analytics Cards: Trends | Destination Donut | Top Performing */}
      <AdminHotelsAnalyticsRow
        onViewAllTopHotels={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-top-hotels-all', 'Top Performing Hotels Across Saudi Arabia');
          }
        }}
      />

      {/* 4. Search and Filters Toolbar */}
      <AdminHotelsFilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedDestination={selectedDestination}
        onDestinationChange={setSelectedDestination}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedRating={selectedRating}
        onRatingChange={setSelectedRating}
        onFilterClick={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-hotel-filters', 'Advanced Hotel Property Filters');
          }
        }}
      />

      {/* 5. Split Master-Detail Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
        {/* Table Column */}
        <div className={`${selectedHotel ? 'lg:col-span-7 xl:col-span-8' : 'lg:col-span-12'} flex flex-col`}>
          <AdminHotelsTable
            hotels={filteredHotels}
            selectedHotelId={selectedHotel?.id || null}
            onSelectHotel={(hotel) => setSelectedHotel(hotel)}
            onOpenActionModal={onOpenActionModal}
          />
        </div>

        {/* Detail Panel Column */}
        {selectedHotel && (
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col">
            <AdminHotelDetailPanel
              hotel={selectedHotel}
              onClose={() => setSelectedHotel(null)}
              onEditHotel={(id) => {
                if (onOpenActionModal) {
                  onOpenActionModal(`admin-edit-hotel-${id}`, `Edit Hotel: ${selectedHotel.name}`);
                }
              }}
              onManageRooms={(id) => {
                if (onOpenActionModal) {
                  onOpenActionModal(`admin-manage-rooms-${id}`, `Room Management: ${selectedHotel.name}`);
                }
              }}
              onViewOnWebsite={(id) => {
                if (onOpenActionModal) {
                  onOpenActionModal(`view-hotel-web-${id}`, `Public Hotel Page: ${selectedHotel.name}`);
                }
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
