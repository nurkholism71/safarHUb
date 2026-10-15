import React, { useState, useMemo } from 'react';
import { AdminDealsHeader } from './AdminDealsHeader';
import { AdminDealsKpiRow } from './AdminDealsKpiRow';
import { AdminDealsCategoryStrip } from './AdminDealsCategoryStrip';
import { AdminDealsFilterBar } from './AdminDealsFilterBar';
import { AdminDealsTable } from './AdminDealsTable';
import { AdminDealsRightSidebar } from './AdminDealsRightSidebar';
import { ADMIN_DEAL_RECORDS } from '../../../data/adminDealsData';
import { AdminDealRecord, DealStatus } from '../../../types/adminDeals';

interface AdminDealsPageProps {
  onOpenActionModal?: (id: string, title: string) => void;
}

export const AdminDealsPage: React.FC<AdminDealsPageProps> = ({
  onOpenActionModal
}) => {
  const [dealsList, setDealsList] = useState<AdminDealRecord[]>(ADMIN_DEAL_RECORDS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDiscountType, setSelectedDiscountType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Filtered Deals based on criteria
  const filteredDeals = useMemo(() => {
    return dealsList.filter(deal => {
      const matchesSearch = 
        deal.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        deal.campaignName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        deal.arabicName.includes(searchQuery) ||
        deal.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        deal.targetAudience.toLowerCase().includes(searchQuery.toLowerCase()) ||
        deal.creator.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = 
        selectedCategory === 'all' ||
        (selectedCategory === 'flash_deals' && deal.category === 'Flash Deals') ||
        (selectedCategory === 'umrah_deals' && deal.category === 'Umrah Packages') ||
        (selectedCategory === 'hotel_deals' && deal.category === 'Hotels & Suites') ||
        (selectedCategory === 'flight_deals' && deal.category === 'Flights & Airlines') ||
        (selectedCategory === 'rail_deals' && deal.category === 'Transport & Rail') ||
        (selectedCategory === 'exp_deals' && deal.category === 'Experiences & Tours') ||
        (selectedCategory === 'jastip_deals' && deal.category === 'Jastip & Shopping') ||
        (selectedCategory === deal.category);

      const matchesDiscountType = selectedDiscountType === 'all' || deal.discountType === selectedDiscountType;
      const matchesStatus = selectedStatus === 'all' || deal.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesDiscountType && matchesStatus;
    });
  }, [dealsList, searchQuery, selectedCategory, selectedDiscountType, selectedStatus]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedDiscountType('all');
    setSelectedStatus('all');
  };

  const handleSelectDeal = (deal: AdminDealRecord) => {
    if (onOpenActionModal) {
      onOpenActionModal(`admin-deal-${deal.id}`, `Campaign Analytics: [${deal.code}] ${deal.campaignName}`);
    }
  };

  const handleEditDeal = (deal: AdminDealRecord) => {
    if (onOpenActionModal) {
      onOpenActionModal(`admin-edit-deal-${deal.id}`, `Edit Campaign Rules: ${deal.code}`);
    }
  };

  const handleToggleStatus = (dealId: string) => {
    setDealsList(prev => prev.map(deal => {
      if (deal.id === dealId) {
        const newStatus: DealStatus = deal.status === 'Active' ? 'Paused' : 'Active';
        return { ...deal, status: newStatus };
      }
      return deal;
    }));
  };

  const handleDeleteDeal = (dealId: string) => {
    if (window.confirm(`Are you sure you want to terminate / archive campaign [${dealId}]?`)) {
      setDealsList(prev => prev.filter(d => d.id !== dealId));
      alert(`Campaign ${dealId} archived successfully.`);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* 1. Header with Actions */}
      <AdminDealsHeader
        onCreateCampaign={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-create-campaign', 'Create New Promotional Campaign / Voucher');
          }
        }}
        onExportData={() => alert('Exporting Deals & Campaign Performance Report (CSV / JSON)...')}
        onOpenRulesEngine={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-rules-engine', 'Anti-Fraud & Voucher Guard Engine');
          }
        }}
      />

      {/* 2. Key Performance Indicators Row (5 Metric Cards) */}
      <AdminDealsKpiRow />

      {/* 3. Category & Vertical Filter Strip */}
      <AdminDealsCategoryStrip
        activeCategory={selectedCategory}
        onSelectCategory={(catId) => setSelectedCategory(catId)}
      />

      {/* 4. Filter Toolbar & Search Bar */}
      <AdminDealsFilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedDiscountType={selectedDiscountType}
        onDiscountTypeChange={setSelectedDiscountType}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        onResetFilters={handleResetFilters}
        totalCount={dealsList.length}
        filteredCount={filteredDeals.length}
      />

      {/* 5. Main 2-Column Database Layout: Left Data Inventory Table + Right Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Comprehensive Deals & Promos Database Table */}
        <div className="lg:col-span-8 xl:col-span-9 min-w-0">
          <AdminDealsTable
            deals={filteredDeals}
            onSelectDeal={handleSelectDeal}
            onEditDeal={handleEditDeal}
            onDeleteDeal={handleDeleteDeal}
            onToggleStatus={handleToggleStatus}
          />
        </div>

        {/* Right Column: Budget Burn Rate & Live Redemptions Feed */}
        <div className="lg:col-span-4 xl:col-span-3">
          <AdminDealsRightSidebar />
        </div>
      </div>
    </div>
  );
};
