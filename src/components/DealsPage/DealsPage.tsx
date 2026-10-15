import React, { useState } from 'react';
import { DealsHero } from './DealsHero';
import { DealsCategoryChips } from './DealsCategoryChips';
import { FeaturedDealsSection } from './FeaturedDealsSection';
import { PromoBannerDuet } from './PromoBannerDuet';
import { DealsByCategoryGrid } from './DealsByCategoryGrid';
import { LimitedTimeOffersSection } from './LimitedTimeOffersSection';
import { DealsNewsletterRow } from './DealsNewsletterRow';
import { DealItem, CategoryDealOverviewItem } from '../../types/deals';

interface DealsPageProps {
  onNavigateView?: (view: string) => void;
  onOpenActionModal?: (id: string, title: string) => void;
}

export const DealsPage: React.FC<DealsPageProps> = ({
  onNavigateView,
  onOpenActionModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSelectDeal = (deal: DealItem) => {
    if (onOpenActionModal) {
      onOpenActionModal(
        `deal-${deal.id}`,
        `${deal.title} (${deal.badge}) • SAR ${deal.price.toLocaleString()}`
      );
    } else {
      alert(`Claiming deal: ${deal.title} (${deal.badge})`);
    }
  };

  const handleSelectCategoryDeal = (deal: CategoryDealOverviewItem) => {
    if (onOpenActionModal) {
      onOpenActionModal(
        `cat-deal-${deal.id}`,
        `${deal.categoryName} Deals (${deal.badge}) • From SAR ${deal.startPrice.toLocaleString()}`
      );
    } else {
      alert(`Browsing ${deal.categoryName} discounted packages...`);
    }
  };

  return (
    <div className="w-full bg-[#f8fafc] pb-16">
      {/* 1. Full-Width Daylight Hero Section with Makkah Holy Mosque Panorama */}
      <DealsHero
        onSearch={(query) => {
          if (onOpenActionModal) {
            onOpenActionModal('deal-search', `Deals Search: "${query}"`);
          } else {
            alert(`Searching promotions for "${query}"...`);
          }
        }}
        onMemberExclusiveClick={() => {
          if (onOpenActionModal) {
            onOpenActionModal('member-deals', 'SafarHub Member Exclusive Secret Deals');
          }
        }}
      />

      {/* 2. Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-8">
        {/* Category Filter Chips */}
        <DealsCategoryChips
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* 1. Featured Deals (4 Cards) */}
        <FeaturedDealsSection
          onSelectDeal={handleSelectDeal}
          onViewAll={() => {
            if (onOpenActionModal) {
              onOpenActionModal('all-featured-deals', 'All Featured Travel Promotions');
            }
          }}
        />

        {/* 2. Promo Banner Duet (Early Booking + Member Special) */}
        <PromoBannerDuet
          onUmrahDealsClick={() => {
            if (onNavigateView) {
              onNavigateView('umrah');
            }
          }}
          onMemberDiscountClick={() => {
            if (onOpenActionModal) {
              onOpenActionModal('member-login', 'SafarHub Member VIP Tier Login');
            }
          }}
        />

        {/* 3. Deals by Category (6 Cards Grid) */}
        <DealsByCategoryGrid
          onSelectCategoryDeal={handleSelectCategoryDeal}
          onViewAll={() => {
            if (onOpenActionModal) {
              onOpenActionModal('all-category-deals', 'All Saudi Travel Discounts by Category');
            }
          }}
        />

        {/* 4. Limited Time Offers with Countdown Timer (4 Cards) */}
        <LimitedTimeOffersSection
          onSelectDeal={handleSelectDeal}
          onViewAll={() => {
            if (onOpenActionModal) {
              onOpenActionModal('all-limited-offers', 'All Flash Sale & Expiring Deals');
            }
          }}
        />

        {/* 5. Deals & Newsletter Subscription Banner */}
        <DealsNewsletterRow />
      </div>
    </div>
  );
};
