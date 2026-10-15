import React, { useState } from 'react';
import { MyTripsHero } from './MyTripsHero';
import { MyTripsSidebar } from './MyTripsSidebar';
import { UpcomingTripsSection } from './UpcomingTripsSection';
import { TripItinerarySection } from './TripItinerarySection';
import { MyTripsOverviewSection } from './MyTripsOverviewSection';
import { MY_TRIPS_LIST } from '../../data/myTripsData';
import { TripSummaryItem } from '../../types/myTrips';

interface MyTripsPageProps {
  onOpenActionModal?: (id: string, title: string) => void;
  onNavigateView?: (view: string) => void;
}

export const MyTripsPage: React.FC<MyTripsPageProps> = ({
  onOpenActionModal,
  onNavigateView
}) => {
  const [activeSidebarTab, setActiveSidebarTab] = useState('trips');
  const [selectedTrip, setSelectedTrip] = useState<TripSummaryItem | null>(null);

  const handleSelectTrip = (trip: TripSummaryItem) => {
    setSelectedTrip(trip);
    if (onOpenActionModal) {
      onOpenActionModal(`trip-${trip.id}`, `${trip.title} (${trip.dateRange})`);
    } else {
      alert(`Opening details for ${trip.title}`);
    }
  };

  const handleManageTrip = (trip: TripSummaryItem) => {
    if (onOpenActionModal) {
      onOpenActionModal(`manage-${trip.id}`, `Manage ${trip.title}`);
    } else {
      alert(`Managing trip: ${trip.title}`);
    }
  };

  const handleQuickAction = (actionId: string) => {
    if (actionId === 'transport' && onNavigateView) {
      onNavigateView('transport');
    } else if (actionId === 'jastip' && onNavigateView) {
      onNavigateView('jastip');
    } else if (onOpenActionModal) {
      onOpenActionModal(actionId, `Quick Action: ${actionId.toUpperCase()}`);
    }
  };

  const handleDownloadDoc = (docId: string) => {
    alert(`Downloading official PDF pass for document ID: ${docId}`);
  };

  return (
    <div className="w-full bg-[#f8fafc] pb-16">
      {/* 1. Full-Width Hero Section */}
      <MyTripsHero onOpenNextTrip={() => handleSelectTrip(MY_TRIPS_LIST[0])} />

      {/* 2. Main Content Grid (Left Sidebar + Right Content Area) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Vertical Nav Sidebar (3 cols - Sticky) */}
          <div className="lg:col-span-3 lg:sticky lg:top-20 self-start">
            <MyTripsSidebar
              activeTab={activeSidebarTab}
              onSelectTab={(tab) => {
                setActiveSidebarTab(tab);
                if (tab === 'bookings' && onOpenActionModal) {
                  onOpenActionModal('all-bookings', 'All Confirmed Bookings');
                }
              }}
              onPlanTrip={() => {
                if (onNavigateView) {
                  onNavigateView('umrah');
                }
              }}
            />
          </div>

          {/* Right Main Content (9 cols) */}
          <div className="lg:col-span-9 space-y-6">
            {/* Upcoming Trip Cards */}
            <UpcomingTripsSection
              trips={MY_TRIPS_LIST}
              onSelectTrip={handleSelectTrip}
              onManageTrip={handleManageTrip}
            />

            {/* Trip Itinerary & Interactive Map */}
            <TripItinerarySection />

            {/* Quick Actions, Bookings Overview & Travel Documents */}
            <MyTripsOverviewSection
              onQuickAction={handleQuickAction}
              onSelectBooking={(b) => {
                if (onOpenActionModal) {
                  onOpenActionModal(b.id, `${b.category} Details: ${b.title}`);
                }
              }}
              onDownloadDoc={handleDownloadDoc}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
