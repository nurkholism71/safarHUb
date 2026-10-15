import React, { useState, useMemo } from 'react';
import { AdminCityGuideHeader } from './AdminCityGuideHeader';
import { AdminCityGuideKpiRow } from './AdminCityGuideKpiRow';
import { AdminCityGuideProvinceStrip } from './AdminCityGuideProvinceStrip';
import { AdminCityGuideFilterBar } from './AdminCityGuideFilterBar';
import { AdminCityGuideTable } from './AdminCityGuideTable';
import { AdminCityGuideRightSidebar } from './AdminCityGuideRightSidebar';
import { ADMIN_CITY_RECORDS } from '../../../data/adminCityGuideData';
import { AdminCityRecord } from '../../../types/adminCityGuide';

interface AdminCityGuidePageProps {
  onOpenActionModal?: (id: string, title: string) => void;
}

export const AdminCityGuidePage: React.FC<AdminCityGuidePageProps> = ({
  onOpenActionModal
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('all');
  const [selectedTier, setSelectedTier] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Filtered Cities list based on active filters
  const filteredCities = useMemo(() => {
    return ADMIN_CITY_RECORDS.filter(city => {
      const matchesSearch = 
        city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        city.arabicName.includes(searchQuery) ||
        city.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        city.province.toLowerCase().includes(searchQuery.toLowerCase()) ||
        city.heritageTags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        city.curator.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesProvince = 
        selectedProvince === 'all' || 
        (selectedProvince === 'makkah_prov' && city.province.includes('Makkah')) ||
        (selectedProvince === 'madinah_prov' && city.province.includes('Madinah') && city.tier !== 'UNESCO Heritage') ||
        (selectedProvince === 'riyadh_prov' && city.province.includes('Riyadh')) ||
        (selectedProvince === 'eastern_prov' && city.province.includes('Eastern')) ||
        (selectedProvince === 'tabuk_prov' && (city.province.includes('Tabuk') || city.name.includes('NEOM'))) ||
        (selectedProvince === 'asir_prov' && (city.province.includes('Asir') || city.tier === 'Mountain City')) ||
        (selectedProvince === 'alula_heritage' && city.name.includes('AlUla')) ||
        (selectedProvince === city.province);

      const matchesTier = selectedTier === 'all' || city.tier === selectedTier;
      const matchesStatus = selectedStatus === 'all' || city.status === selectedStatus;

      return matchesSearch && matchesProvince && matchesTier && matchesStatus;
    });
  }, [searchQuery, selectedProvince, selectedTier, selectedStatus]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedProvince('all');
    setSelectedTier('all');
    setSelectedStatus('all');
  };

  const handleSelectCity = (city: AdminCityRecord) => {
    if (onOpenActionModal) {
      onOpenActionModal(`admin-city-${city.id}`, `City Profile: ${city.name} (${city.arabicName})`);
    }
  };

  const handleEditCity = (city: AdminCityRecord) => {
    if (onOpenActionModal) {
      onOpenActionModal(`admin-edit-city-${city.id}`, `Edit City Profile: ${city.name}`);
    }
  };

  const handleDeleteCity = (cityId: string) => {
    if (window.confirm(`Are you sure you want to archive / delete city record [${cityId}]?`)) {
      alert(`City record ${cityId} archived successfully.`);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* 1. Database Header with Action Buttons */}
      <AdminCityGuideHeader
        onAddCity={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-add-city', 'Register New Saudi City Profile');
          }
        }}
        onExportData={() => alert('Exporting City Guide Knowledge Base (CSV / JSON)...')}
        onSyncSTA={() => alert('Syncing Kingdom Geographic Dataset with STA API...')}
      />

      {/* 2. Key Performance Indicators Row (5 Metric Cards) */}
      <AdminCityGuideKpiRow />

      {/* 3. Province & Territory Strip Selector */}
      <AdminCityGuideProvinceStrip
        activeProvince={selectedProvince}
        onSelectProvince={(provId) => setSelectedProvince(provId)}
      />

      {/* 4. Filter Toolbar & Search Bar */}
      <AdminCityGuideFilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedProvince={selectedProvince}
        onProvinceChange={setSelectedProvince}
        selectedTier={selectedTier}
        onTierChange={setSelectedTier}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        onResetFilters={handleResetFilters}
      />

      {/* 5. Main 2-Column Database Layout: Left Data Inventory Table + Right Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Comprehensive City Profiles Database Table */}
        <div className="lg:col-span-8 xl:col-span-9 min-w-0">
          <AdminCityGuideTable
            cities={filteredCities}
            onSelectCity={handleSelectCity}
            onEditCity={handleEditCity}
            onDeleteCity={handleDeleteCity}
          />
        </div>

        {/* Right Column: Provincial Knowledge Coverage & Audit Stream */}
        <div className="lg:col-span-4 xl:col-span-3">
          <AdminCityGuideRightSidebar />
        </div>
      </div>
    </div>
  );
};
