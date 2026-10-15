import React, { useState } from 'react';
import { AdminTransportHeader } from './AdminTransportHeader';
import { AdminTransportKpiRow } from './AdminTransportKpiRow';
import { AdminTransportCategoryStrip } from './AdminTransportCategoryStrip';
import { AdminTransportAnalyticsRow } from './AdminTransportAnalyticsRow';
import { AdminTransportFilterBar } from './AdminTransportFilterBar';
import { AdminTransportTable } from './AdminTransportTable';
import { AdminTransportRightSidebar } from './AdminTransportRightSidebar';
import { ADMIN_TRANSPORT_ITEMS } from '../../../data/adminTransportData';

interface AdminTransportPageProps {
  onOpenActionModal?: (id: string, title: string) => void;
}

export const AdminTransportPage: React.FC<AdminTransportPageProps> = ({
  onOpenActionModal
}) => {
  const [activeCategory, setActiveCategory] = useState('flights');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedDateRange, setSelectedDateRange] = useState('all');

  // Filter transport items
  const filteredItems = ADMIN_TRANSPORT_ITEMS.filter((item) => {
    // Category Strip Filter
    if (activeCategory === 'flights' && item.type !== 'Flight') return false;
    if (activeCategory === 'buses' && item.type !== 'Bus') return false;
    if (activeCategory === 'cars' && item.type !== 'Private Car') return false;
    if (activeCategory === 'trains' && item.type !== 'Train') return false;
    if (activeCategory === 'airport-transfer' && item.type !== 'Airport Transfer') return false;
    if (activeCategory === 'rental' && item.type !== 'Car Rental') return false;

    // Dropdown filters
    if (selectedType !== 'all' && item.type.toLowerCase() !== selectedType.toLowerCase()) return false;
    if (selectedStatus !== 'all' && item.status.toLowerCase() !== selectedStatus.toLowerCase()) return false;
    if (selectedCity !== 'all' && !item.route.toLowerCase().includes(selectedCity.toLowerCase())) return false;

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchRoute = item.route.toLowerCase().includes(q);
      const matchProvider = item.provider.toLowerCase().includes(q);
      const matchVehicle = item.vehicle.toLowerCase().includes(q);
      const matchCode = item.code.toLowerCase().includes(q);
      if (!matchRoute && !matchProvider && !matchVehicle && !matchCode) return false;
    }

    return true;
  });

  return (
    <div className="space-y-6">
      {/* 1. Header with Title, Action and Panoramic Banner */}
      <AdminTransportHeader
        onAddTransport={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-add-transport', 'Add New Transit Route / Service');
          }
        }}
      />

      {/* 2. Top 5 KPI Metric Cards */}
      <AdminTransportKpiRow
        onSelectKpi={(kpiId) => {
          if (onOpenActionModal) {
            onOpenActionModal(`admin-kpi-${kpiId}`, `Transport Metric: ${kpiId.toUpperCase()}`);
          }
        }}
      />

      {/* 3. 6 Category Quick Selector Cards Strip */}
      <AdminTransportCategoryStrip
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* 4. Split 2-Column Main Workspace */}
      <div className="flex flex-col lg:flex-row gap-5 items-start">
        {/* Left Main Column (Full flex space) */}
        <div className="flex-1 min-w-0 w-full space-y-6">
          {/* Middle 3 Analytics Cards */}
          <AdminTransportAnalyticsRow
            onViewAllRoutes={() => {
              if (onOpenActionModal) {
                onOpenActionModal('admin-all-routes', 'All Transit Corridors & Popular Routes');
              }
            }}
          />

          {/* Search & Filter Toolbar */}
          <AdminTransportFilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            selectedStatus={selectedStatus}
            onStatusChange={setSelectedStatus}
            selectedCity={selectedCity}
            onCityChange={setSelectedCity}
            selectedDateRange={selectedDateRange}
            onDateRangeChange={setSelectedDateRange}
            onFilterClick={() => {
              if (onOpenActionModal) {
                onOpenActionModal('admin-transport-filters', 'Advanced Fleet & Route Filters');
              }
            }}
            onExport={() => {
              if (onOpenActionModal) {
                onOpenActionModal('admin-export-transport', 'Export Transport Fleet Data (.CSV / .XLSX)');
              }
            }}
          />

          {/* Master Transport Table */}
          <AdminTransportTable
            items={filteredItems.length > 0 ? filteredItems : ADMIN_TRANSPORT_ITEMS}
            onOpenActionModal={onOpenActionModal}
          />
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-[270px] xl:w-[290px] 2xl:w-[310px] flex-shrink-0 space-y-5">
          <AdminTransportRightSidebar
            onQuickAction={(actionId, title) => {
              if (onOpenActionModal) {
                onOpenActionModal(`admin-action-${actionId}`, title);
              }
            }}
            onViewAllDestinations={() => {
              if (onOpenActionModal) {
                onOpenActionModal('admin-transport-destinations', 'All Transit Destinations');
              }
            }}
            onViewAllMap={() => {
              if (onOpenActionModal) {
                onOpenActionModal('admin-transport-map', 'Interactive Saudi Live Transit Radar');
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};
