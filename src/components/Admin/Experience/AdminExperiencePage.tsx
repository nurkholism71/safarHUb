import React, { useState } from 'react';
import { AdminExperienceHeader } from './AdminExperienceHeader';
import { AdminExperienceKpiRow } from './AdminExperienceKpiRow';
import { AdminExperienceCategoryStrip } from './AdminExperienceCategoryStrip';
import { AdminExperienceFilterBar } from './AdminExperienceFilterBar';
import { AdminExperienceTable } from './AdminExperienceTable';
import { AdminExperienceRightSidebar } from './AdminExperienceRightSidebar';
import { ADMIN_EXPERIENCE_ITEMS } from '../../../data/adminExperienceData';
import { AdminExperienceItem } from '../../../types/adminExperience';

interface AdminExperiencePageProps {
  onOpenActionModal?: (id: string, title: string) => void;
}

export const AdminExperiencePage: React.FC<AdminExperiencePageProps> = ({
  onOpenActionModal
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedGroupType, setSelectedGroupType] = useState<string>('all');

  // Filter backend experience items
  const filteredExperiences = ADMIN_EXPERIENCE_ITEMS.filter((item) => {
    // 1. Category strip filter
    if (activeCategory === 'religious' && item.category !== 'Religious & Ziyarat') return false;
    if (activeCategory === 'historical' && item.category !== 'Historical & Heritage') return false;
    if (activeCategory === 'desert' && item.category !== 'Desert Safari & Nature') return false;
    if (activeCategory === 'culinary' && item.category !== 'Food & Culinary') return false;
    if (activeCategory === 'adventure' && item.category !== 'Adventure & Diving') return false;
    if (activeCategory === 'city' && item.category !== 'City Tours & Architecture') return false;
    if (activeCategory === 'vip' && !item.groupType.includes('VIP')) return false;

    // 2. City dropdown filter
    if (selectedCity !== 'all' && item.location !== selectedCity) return false;

    // 3. Category dropdown filter
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;

    // 4. Status filter
    if (selectedStatus !== 'all' && item.status !== selectedStatus) return false;

    // 5. Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchCode = item.code.toLowerCase().includes(q);
      const matchLocation = item.location.toLowerCase().includes(q);
      const matchProvider = item.provider.name.toLowerCase().includes(q);
      if (!matchTitle && !matchCode && !matchLocation && !matchProvider) return false;
    }

    return true;
  });

  const handleResetFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setSelectedCity('all');
    setSelectedCategory('all');
    setSelectedStatus('all');
    setSelectedGroupType('all');
  };

  const handleViewDetails = (exp: AdminExperienceItem) => {
    if (onOpenActionModal) {
      onOpenActionModal(`admin-experience-detail-${exp.id}`, `Experience Details: ${exp.title} (${exp.code})`);
    }
  };

  const handleEdit = (exp: AdminExperienceItem) => {
    if (onOpenActionModal) {
      onOpenActionModal(`admin-experience-edit-${exp.id}`, `Edit Tour Package & Guide Allocation: ${exp.title}`);
    }
  };

  const handleDelete = (id: string) => {
    if (onOpenActionModal) {
      onOpenActionModal(`admin-experience-delete-${id}`, `Confirm Deactivation / Archive for ${id}`);
    }
  };

  return (
    <div className="space-y-5">
      {/* 1. Header with Management Actions */}
      <AdminExperienceHeader
        onAddExperience={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-add-experience', 'Create New Kingdom Experience / Guided Tour');
          }
        }}
        onExport={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-export-experiences', 'Export Experience Data (CSV / Excel)');
          }
        }}
        onManageGuides={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-manage-guides', 'Saudi MTA Licensed Guide Roster');
          }
        }}
      />

      {/* 2. Top 5 KPI Metrics */}
      <AdminExperienceKpiRow
        onSelectKpi={(kpiId) => {
          if (onOpenActionModal) {
            onOpenActionModal(`admin-experience-kpi-${kpiId}`, `Experience Analytics: ${kpiId.toUpperCase()}`);
          }
        }}
      />

      {/* 3. Category Quick Filter Strip */}
      <AdminExperienceCategoryStrip
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* 4. Filter & Search Toolbar */}
      <AdminExperienceFilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCity={selectedCity}
        onCityChange={setSelectedCity}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        selectedGroupType={selectedGroupType}
        onGroupTypeChange={setSelectedGroupType}
        onResetFilters={handleResetFilters}
      />

      {/* 5. Main Split Section: Inventory Table & Right Operations Sidebar */}
      <div className="flex flex-col lg:flex-row gap-5 items-start">
        {/* Left Column: Backend Data Table */}
        <div className="flex-1 min-w-0 w-full space-y-4">
          <AdminExperienceTable
            experiences={filteredExperiences.length > 0 ? filteredExperiences : ADMIN_EXPERIENCE_ITEMS}
            onViewDetails={handleViewDetails}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>

        {/* Right Column: Operations Sidebar */}
        <div className="w-full lg:w-[280px] xl:w-[300px] flex-shrink-0">
          <AdminExperienceRightSidebar
            onSelectDestination={(destId) => {
              if (onOpenActionModal) {
                onOpenActionModal(`admin-dest-${destId}`, `Destination Operations & Guide Hub: ${destId}`);
              }
            }}
            onViewAllBookings={() => {
              if (onOpenActionModal) {
                onOpenActionModal('admin-all-experience-bookings', 'All Live Experience Bookings');
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};
