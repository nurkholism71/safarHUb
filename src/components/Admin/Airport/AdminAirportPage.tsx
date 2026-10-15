import React, { useState } from 'react';
import { AdminAirportHeader } from './AdminAirportHeader';
import { AdminAirportKpiRow } from './AdminAirportKpiRow';
import { AdminAirportCategoryGrid } from './AdminAirportCategoryGrid';
import { AdminAirportAnalyticsRow } from './AdminAirportAnalyticsRow';
import { AdminAirportFilterBar } from './AdminAirportFilterBar';
import { AdminAirportTable } from './AdminAirportTable';
import { AdminAirportRightSidebar } from './AdminAirportRightSidebar';
import { ADMIN_AIRPORT_BOOKINGS } from '../../../data/adminAirportData';

interface AdminAirportPageProps {
  onOpenActionModal?: (id: string, title: string) => void;
}

export const AdminAirportPage: React.FC<AdminAirportPageProps> = ({
  onOpenActionModal
}) => {
  const [activeCategory, setActiveCategory] = useState('meet-assist');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAirport, setSelectedAirport] = useState('all');
  const [selectedService, setSelectedService] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedDateRange, setSelectedDateRange] = useState('all');

  // Filter bookings
  const filteredBookings = ADMIN_AIRPORT_BOOKINGS.filter((item) => {
    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchCode = item.code.toLowerCase().includes(q);
      const matchCustomer = item.customer.toLowerCase().includes(q);
      const matchService = item.service.toLowerCase().includes(q);
      const matchAirport = item.airport.toLowerCase().includes(q);
      const matchFlight = item.flightDetails.toLowerCase().includes(q);
      if (!matchCode && !matchCustomer && !matchService && !matchAirport && !matchFlight) {
        return false;
      }
    }

    // Dropdowns
    if (selectedAirport !== 'all' && !item.airport.toLowerCase().includes(selectedAirport.toLowerCase())) {
      return false;
    }
    if (selectedService !== 'all' && item.service.toLowerCase() !== selectedService.toLowerCase()) {
      return false;
    }
    if (selectedStatus !== 'all' && item.status.toLowerCase() !== selectedStatus.toLowerCase()) {
      return false;
    }

    return true;
  });

  return (
    <div className="space-y-5">
      {/* 1. Header with Title, Button & Airport Hero Banner */}
      <AdminAirportHeader
        onNewServiceBooking={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-new-airport-booking', 'Create New Airport VIP & Transit Service');
          }
        }}
      />

      {/* 2. Top 5 KPI Metrics Strip */}
      <AdminAirportKpiRow
        onSelectKpi={(kpiId) => {
          if (onOpenActionModal) {
            onOpenActionModal(`admin-airport-kpi-${kpiId}`, `Airport Metric: ${kpiId.toUpperCase()}`);
          }
        }}
      />

      {/* 3. 12 Airport Service Categories Grid (2 rows x 6 cols) */}
      <AdminAirportCategoryGrid
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* 4. 4 Analytics & Information Cards Row */}
      <AdminAirportAnalyticsRow
        onViewAllAirports={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-all-airports', 'All 28 Saudi Commercial & VIP Airports');
          }
        }}
        onViewAllFlights={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-live-flights', 'Live Aviation Radar & Flight Schedules');
          }
        }}
      />

      {/* 5. Split Bottom Section: Table Workspace & Right Sidebar */}
      <div className="flex flex-col lg:flex-row gap-5 items-start">
        {/* Left Main Column: Filter Bar & Master Bookings Table */}
        <div className="flex-1 min-w-0 w-full space-y-4">
          <AdminAirportFilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedAirport={selectedAirport}
            onAirportChange={setSelectedAirport}
            selectedService={selectedService}
            onServiceChange={setSelectedService}
            selectedStatus={selectedStatus}
            onStatusChange={setSelectedStatus}
            selectedDateRange={selectedDateRange}
            onDateRangeChange={setSelectedDateRange}
            onFilterClick={() => {
              if (onOpenActionModal) {
                onOpenActionModal('admin-airport-filters', 'Advanced Passenger & Terminal Filters');
              }
            }}
            onExport={() => {
              if (onOpenActionModal) {
                onOpenActionModal('admin-airport-export', 'Export Airport Service Bookings (.CSV / .XLSX)');
              }
            }}
          />

          <AdminAirportTable
            items={filteredBookings.length > 0 ? filteredBookings : ADMIN_AIRPORT_BOOKINGS}
            onOpenActionModal={onOpenActionModal}
          />
        </div>

        {/* Right Sidebar: Quick Actions & Airport Map */}
        <div className="w-full lg:w-[270px] xl:w-[290px] 2xl:w-[310px] flex-shrink-0">
          <AdminAirportRightSidebar
            onQuickAction={(actionId, title) => {
              if (onOpenActionModal) {
                onOpenActionModal(`admin-airport-action-${actionId}`, title);
              }
            }}
            onFacilityClick={(facilityName) => {
              if (onOpenActionModal) {
                onOpenActionModal(`admin-facility-${facilityName}`, `Terminal Facility Info: ${facilityName}`);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};
