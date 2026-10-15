import React, { useState } from 'react';
import { AdminUmrahHeader } from './AdminUmrahHeader';
import { AdminUmrahKpiRow } from './AdminUmrahKpiRow';
import { AdminUmrahCategoryStrip } from './AdminUmrahCategoryStrip';
import { AdminUmrahFilterBar } from './AdminUmrahFilterBar';
import { AdminUmrahTable } from './AdminUmrahTable';
import { AdminUmrahRightSidebar } from './AdminUmrahRightSidebar';
import { ADMIN_UMRAH_PACKAGES } from '../../../data/adminUmrahData';
import { AdminUmrahPackageItem } from '../../../types/adminUmrah';

interface AdminUmrahPageProps {
  onOpenActionModal?: (id: string, title: string) => void;
}

export const AdminUmrahPage: React.FC<AdminUmrahPageProps> = ({
  onOpenActionModal
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedAirline, setSelectedAirline] = useState<string>('all');
  const [selectedTier, setSelectedTier] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  // Filter backend Umrah packages
  const filteredPackages = ADMIN_UMRAH_PACKAGES.filter((item) => {
    // 1. Category strip filter
    if (activeCategory === 'reguler' && item.tier !== 'Reguler') return false;
    if (activeCategory === 'ekonomi' && item.tier !== 'Ekonomi') return false;
    if (activeCategory === 'vip' && item.tier !== 'VIP & Executive') return false;
    if (activeCategory === 'keluarga' && item.tier !== 'Keluarga') return false;
    if (activeCategory === 'ramadhan' && item.tier !== 'Ramadhan') return false;
    if (activeCategory === 'plus-turki' && item.tier !== 'Plus Turki') return false;
    if (activeCategory === 'custom' && item.tier !== 'Custom') return false;

    // 2. City dropdown filter
    if (selectedCity !== 'all' && item.departureCity !== selectedCity) return false;

    // 3. Airline filter
    if (selectedAirline !== 'all' && item.airline.name !== selectedAirline) return false;

    // 4. Tier filter
    if (selectedTier !== 'all' && item.tier !== selectedTier) return false;

    // 5. Status filter
    if (selectedStatus !== 'all' && item.status !== selectedStatus) return false;

    // 6. Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchCode = item.code.toLowerCase().includes(q);
      const matchPartner = item.travelPartner.name.toLowerCase().includes(q);
      const matchFlight = item.airline.flightNo.toLowerCase().includes(q);
      const matchMutawwif = item.mutawwif.toLowerCase().includes(q);
      if (!matchTitle && !matchCode && !matchPartner && !matchFlight && !matchMutawwif) return false;
    }

    return true;
  });

  const handleResetFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setSelectedCity('all');
    setSelectedAirline('all');
    setSelectedTier('all');
    setSelectedStatus('all');
  };

  const handleViewManifest = (pkg: AdminUmrahPackageItem) => {
    if (onOpenActionModal) {
      onOpenActionModal(`admin-umrah-manifest-${pkg.id}`, `Pilgrim Manifest & Nusuk Visa List: ${pkg.title} (${pkg.code})`);
    }
  };

  const handleEdit = (pkg: AdminUmrahPackageItem) => {
    if (onOpenActionModal) {
      onOpenActionModal(`admin-umrah-edit-${pkg.id}`, `Edit Package Quota & Flight Block: ${pkg.title}`);
    }
  };

  const handleDelete = (id: string) => {
    if (onOpenActionModal) {
      onOpenActionModal(`admin-umrah-delete-${id}`, `Confirm Deactivation / Archive for Package ${id}`);
    }
  };

  return (
    <div className="space-y-5">
      {/* 1. Header with Management Actions */}
      <AdminUmrahHeader
        onAddPackage={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-add-umrah', 'Create New Umrah Package & Flight Manifest');
          }
        }}
        onExportManifest={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-export-umrah-manifest', 'Export Pilgrim Manifest (Nusuk MoHU Format)');
          }
        }}
        onNusukSync={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-nusuk-sync', 'Sync Visa Approvals & Masar Portals with MoHU');
          }
        }}
      />

      {/* 2. Top 5 KPI Metrics */}
      <AdminUmrahKpiRow
        onSelectKpi={(kpiId) => {
          if (onOpenActionModal) {
            onOpenActionModal(`admin-umrah-kpi-${kpiId}`, `Umrah Analytics: ${kpiId.toUpperCase()}`);
          }
        }}
      />

      {/* 3. Category Quick Filter Strip */}
      <AdminUmrahCategoryStrip
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* 4. Filter & Search Toolbar */}
      <AdminUmrahFilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCity={selectedCity}
        onCityChange={setSelectedCity}
        selectedAirline={selectedAirline}
        onAirlineChange={setSelectedAirline}
        selectedTier={selectedTier}
        onTierChange={setSelectedTier}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        onResetFilters={handleResetFilters}
      />

      {/* 5. Main Split Section: Inventory Table & Right Operations Sidebar */}
      <div className="flex flex-col lg:flex-row gap-5 items-start">
        {/* Left Column: Backend Data Table */}
        <div className="flex-1 min-w-0 w-full space-y-4">
          <AdminUmrahTable
            packages={filteredPackages.length > 0 ? filteredPackages : ADMIN_UMRAH_PACKAGES}
            onViewManifest={handleViewManifest}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>

        {/* Right Column: Operations Sidebar */}
        <div className="w-full lg:w-[280px] xl:w-[300px] flex-shrink-0">
          <AdminUmrahRightSidebar
            onSelectBatch={(batchId) => {
              if (onOpenActionModal) {
                onOpenActionModal(`admin-batch-${batchId}`, `Flight Manifest & Boarding: ${batchId}`);
              }
            }}
            onViewAllBookings={() => {
              if (onOpenActionModal) {
                onOpenActionModal('admin-all-umrah-bookings', 'All Live Pilgrim Bookings');
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};
