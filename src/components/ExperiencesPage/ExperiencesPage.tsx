import React, { useState } from 'react';
import { ExperiencesHero } from './ExperiencesHero';
import { ExperienceCategoryChips } from './ExperienceCategoryChips';
import { FeaturedExperiencesSection } from './FeaturedExperiencesSection';
import { TopExperiencesGrid } from './TopExperiencesGrid';
import { RecommendedItinerariesSection } from './RecommendedItinerariesSection';
import { ExperiencesRightSidebar } from './ExperiencesRightSidebar';
import { ExperienceItem, RecommendedItineraryItem } from '../../types/experiences';

interface ExperiencesPageProps {
  onNavigateView?: (view: string) => void;
  onOpenActionModal?: (id: string, title: string) => void;
}

export const ExperiencesPage: React.FC<ExperiencesPageProps> = ({
  onNavigateView,
  onOpenActionModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSelectExperience = (exp: ExperienceItem) => {
    if (onOpenActionModal) {
      onOpenActionModal(
        `exp-${exp.id}`,
        `${exp.title} (${exp.cityName}) • SAR ${exp.price} / person`
      );
    } else {
      alert(`Booking experience: ${exp.title} (SAR ${exp.price})`);
    }
  };

  const handleSelectItinerary = (itin: RecommendedItineraryItem) => {
    if (onOpenActionModal) {
      onOpenActionModal(
        `itin-${itin.id}`,
        `${itin.title} (${itin.days} Days) • From SAR ${itin.startPrice.toLocaleString()}`
      );
    } else {
      alert(`Viewing tour package: ${itin.title}`);
    }
  };

  return (
    <div className="w-full bg-[#f8fafc] pb-16">
      {/* 1. Full-Width Daylight Hero Section */}
      <ExperiencesHero
        onSearch={(query) => {
          if (onOpenActionModal) {
            onOpenActionModal('exp-search', `Experience Search: "${query}"`);
          } else {
            alert(`Searching experiences for "${query}"...`);
          }
        }}
        onExploreAlUla={() => {
          if (onOpenActionModal) {
            onOpenActionModal('alula-exp', 'Exclusive AlUla UNESCO Desert & Heritage Tour');
          }
        }}
      />

      {/* 2. Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-6">
        {/* Category Filter Chips Bar */}
        <ExperienceCategoryChips
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* 2-Column Main Layout: 8 cols Left / 4 cols Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column (8 cols): Featured Experiences, Top Experiences, Recommended Itineraries */}
          <div className="lg:col-span-8 space-y-8">
            {/* 1. Featured Experiences */}
            <FeaturedExperiencesSection
              onSelectExperience={handleSelectExperience}
              onViewAll={() => {
                if (onOpenActionModal) {
                  onOpenActionModal('all-featured-exp', 'All Featured Saudi Guided Tours');
                }
              }}
            />

            {/* 2. Top Experiences by Category */}
            <TopExperiencesGrid
              onSelectExperience={handleSelectExperience}
              onViewAll={() => {
                if (onOpenActionModal) {
                  onOpenActionModal('all-top-exp', 'All Saudi Experiences by Category');
                }
              }}
            />

            {/* 3. Recommended Itineraries */}
            <RecommendedItinerariesSection
              onSelectItinerary={handleSelectItinerary}
              onViewAll={() => {
                if (onNavigateView) {
                  onNavigateView('umrah');
                }
              }}
            />
          </div>

          {/* Right Column (4 cols): Map, Customize Experience, Why Book with Us */}
          <div className="lg:col-span-4 lg:sticky lg:top-20 self-start">
            <ExperiencesRightSidebar
              onPlanCustomExperience={() => {
                if (onOpenActionModal) {
                  onOpenActionModal('custom-exp', 'Custom Saudi Travel Experience Planner');
                } else if (onNavigateView) {
                  onNavigateView('my-trips');
                }
              }}
              onSelectMapLocation={(loc) => {
                if (onOpenActionModal) {
                  onOpenActionModal(`map-${loc}`, `Explore Experiences in ${loc}`);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
