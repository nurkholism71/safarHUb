import React, { useState } from 'react';
import { CityGuideHero } from './CityGuideHero';
import { CityQuickSelector } from './CityQuickSelector';
import { CityGuideFilterTabs } from './CityGuideFilterTabs';
import { FeaturedCitiesSection } from './FeaturedCitiesSection';
import { PopularAttractionsGrid } from './PopularAttractionsGrid';
import { LocalExperiencesGrid } from './LocalExperiencesGrid';
import { TransportInSaudiGrid } from './TransportInSaudiGrid';
import { CityGuideRightSidebar } from './CityGuideRightSidebar';
import { CityItem, AttractionItem, ExperienceItem, TransportGuideItem } from '../../types/cityGuide';

interface CityGuidePageProps {
  onNavigateView?: (view: string) => void;
  onOpenActionModal?: (id: string, title: string) => void;
}

export const CityGuidePage: React.FC<CityGuidePageProps> = ({
  onNavigateView,
  onOpenActionModal
}) => {
  const [selectedCityId, setSelectedCityId] = useState('makkah');
  const [activeFilterTab, setActiveFilterTab] = useState('overview');

  const handleSelectCity = (city: CityItem) => {
    setSelectedCityId(city.id);
    if (onOpenActionModal) {
      onOpenActionModal(`city-${city.id}`, `Explore ${city.name} (${city.arabicName})`);
    }
  };

  const handleExploreFeaturedCity = (cityId: string) => {
    if (onOpenActionModal) {
      onOpenActionModal(
        `featured-${cityId}`,
        `Comprehensive Guide to ${cityId.toUpperCase()}`
      );
    } else {
      alert(`Exploring ${cityId.toUpperCase()} guide...`);
    }
  };

  const handleSelectAttraction = (att: AttractionItem) => {
    if (onOpenActionModal) {
      onOpenActionModal(
        `att-${att.id}`,
        `${att.title} (${att.cityName}) • Rating ${att.rating}`
      );
    } else {
      alert(`Viewing details for ${att.title} in ${att.cityName}`);
    }
  };

  const handleSelectExperience = (exp: ExperienceItem) => {
    if (onOpenActionModal) {
      onOpenActionModal(`exp-${exp.id}`, `Saudi Experience: ${exp.title}`);
    } else {
      alert(`Exploring experience: ${exp.title}`);
    }
  };

  const handleSelectTransport = (tr: TransportGuideItem) => {
    if (onOpenActionModal) {
      onOpenActionModal(`tr-${tr.id}`, `Transit Guide: ${tr.title}`);
    } else {
      alert(`Viewing transit guide: ${tr.title}`);
    }
  };

  return (
    <div className="w-full bg-[#f8fafc] pb-16">
      {/* 1. Full-Width Daylight Hero Section */}
      <CityGuideHero
        onSearch={(query) => {
          if (onOpenActionModal) {
            onOpenActionModal('guide-search', `Guide Search: "${query}"`);
          } else {
            alert(`Searching city guide for "${query}"...`);
          }
        }}
        onWeatherClick={() => {
          if (onOpenActionModal) {
            onOpenActionModal('makkah-weather', 'Live Makkah Weather & Pilgrimage Forecast');
          }
        }}
      />

      {/* 2. Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-6">
        {/* City Quick Selector 7-City Row */}
        <CityQuickSelector
          selectedCityId={selectedCityId}
          onSelectCity={handleSelectCity}
        />

        {/* 8-Filter Tabs Bar */}
        <CityGuideFilterTabs
          activeTab={activeFilterTab}
          onSelectTab={setActiveFilterTab}
        />

        {/* 2-Column Main Layout: 8 cols Left / 4 cols Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column (8 cols): Featured, Attractions, Experiences, Transport */}
          <div className="lg:col-span-8 space-y-8">
            {/* 1. Featured Cities Section */}
            <FeaturedCitiesSection
              onExploreCity={handleExploreFeaturedCity}
              onViewAll={() => {
                if (onOpenActionModal) {
                  onOpenActionModal('all-cities', 'All Saudi Arabia Destinations & Regions');
                }
              }}
            />

            {/* 2. Popular Attractions Grid */}
            <PopularAttractionsGrid
              onSelectAttraction={handleSelectAttraction}
              onViewAll={() => {
                if (onOpenActionModal) {
                  onOpenActionModal('all-attractions', 'All Saudi Cultural & Religious Attractions');
                }
              }}
            />

            {/* 3. Local Experiences Grid */}
            <LocalExperiencesGrid
              onSelectExperience={handleSelectExperience}
              onViewAll={() => {
                if (onOpenActionModal) {
                  onOpenActionModal('all-experiences', 'All Saudi Local Experiences & Tours');
                }
              }}
            />

            {/* 4. Transportation in Saudi Grid */}
            <TransportInSaudiGrid
              onSelectTransport={handleSelectTransport}
              onViewAll={() => {
                if (onNavigateView) {
                  onNavigateView('transport');
                }
              }}
            />
          </div>

          {/* Right Column (4 cols): Map, Plan Visit, Essential Info, Nearby Cities */}
          <div className="lg:col-span-4 lg:sticky lg:top-20 self-start">
            <CityGuideRightSidebar
              onPlanTrip={() => {
                if (onNavigateView) {
                  onNavigateView('my-trips');
                }
              }}
              onSelectCityPin={(cityName) => {
                if (onOpenActionModal) {
                  onOpenActionModal(`map-${cityName}`, `Map Location & Guide: ${cityName}`);
                }
              }}
              onSelectEssentialInfo={(infoId, title) => {
                if (onOpenActionModal) {
                  onOpenActionModal(infoId, `Travel Guide: ${title}`);
                }
              }}
              onSelectNearbyCity={(cityName) => {
                if (onOpenActionModal) {
                  onOpenActionModal(`nearby-${cityName}`, `Day Trip Guide: ${cityName}`);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
