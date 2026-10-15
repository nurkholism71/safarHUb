import React, { useState, useMemo } from 'react';
import { UmrahHero } from './UmrahHero';
import { UmrahCategoryRow } from './UmrahCategoryRow';
import { PopularUmrahPackages } from './PopularUmrahPackages';
import { UmrahInclusionsBanner } from './UmrahInclusionsBanner';
import { PopularItineraries } from './PopularItineraries';
import { UmrahAddonServices } from './UmrahAddonServices';
import { UmrahDetailModal } from '../Modals/UmrahDetailModal';
import { CustomUmrahModal } from '../Modals/CustomUmrahModal';
import { UMRAH_PACKAGES } from '../../data/umrahData';
import { UmrahPackage } from '../../types/umrah';

export const UmrahPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchFilters, setSearchFilters] = useState<any>(null);
  const [selectedPackage, setSelectedPackage] = useState<UmrahPackage | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  // Filter packages based on selected category tab
  const displayedPackages = useMemo(() => {
    if (selectedCategory === 'all') return UMRAH_PACKAGES;
    return UMRAH_PACKAGES.filter((pkg) => pkg.category === selectedCategory);
  }, [selectedCategory]);

  const handleOpenPackage = (pkg: UmrahPackage) => {
    setSelectedPackage(pkg);
    setIsDetailModalOpen(true);
  };

  const handleSearch = (filters: any) => {
    setSearchFilters(filters);
    if (filters.packageType !== 'all') {
      setSelectedCategory(filters.packageType);
    }
  };

  return (
    <div className="w-full bg-[#f8fafc] pb-16">
      {/* 1. Full-Width Hero Section */}
      <UmrahHero onSearch={handleSearch} />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-2">
        {/* 2. Package Category Tabs Row */}
        <UmrahCategoryRow
          selectedCategory={selectedCategory}
          onSelectCategory={(catId) => setSelectedCategory(catId)}
        />

        {/* 3. Popular Umrah Packages Grid */}
        <PopularUmrahPackages
          packages={displayedPackages.length > 0 ? displayedPackages : UMRAH_PACKAGES}
          onSelectPackage={handleOpenPackage}
          onViewAll={() => setSelectedCategory('all')}
        />

        {/* 4. Package Includes & Customize Umrah Box */}
        <UmrahInclusionsBanner
          onRequestCustom={() => setIsCustomModalOpen(true)}
        />

        {/* 5. Popular Itineraries Day-by-Day Flow */}
        <PopularItineraries />

        {/* 6. Add-On Services & Plan with Confidence Banner */}
        <UmrahAddonServices
          onSelectAddon={(addon) => {
            alert(`Selected Add-On: ${addon.title} (SAR ${addon.priceSAR}). Added to inquiry.`);
          }}
          onContactTeam={() => setIsCustomModalOpen(true)}
        />
      </div>

      {/* Modals */}
      <UmrahDetailModal
        pkg={selectedPackage}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        onBook={(pkg, travelers) => {
          // Booking callback handled inside modal
        }}
      />

      <CustomUmrahModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
        onSubmit={(data) => {
          // Custom inquiry submitted
        }}
      />
    </div>
  );
};
