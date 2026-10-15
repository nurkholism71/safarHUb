import React, { useState } from 'react';
import { BookingsHero } from './BookingsHero';
import { MyTripsSidebar } from '../MyTripsPage/MyTripsSidebar';
import { BookingsListSection } from './BookingsListSection';
import { BookingsRightSidebar } from './BookingsRightSidebar';
import { BookingsRecommendationsRow } from './BookingsRecommendationsRow';
import { ALL_BOOKINGS } from '../../data/bookingsData';
import { BookingItem } from '../../types/bookings';

interface BookingsPageProps {
  onNavigateView?: (view: string) => void;
  onOpenActionModal?: (id: string, title: string) => void;
}

export const BookingsPage: React.FC<BookingsPageProps> = ({
  onNavigateView,
  onOpenActionModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBooking, setSelectedBooking] = useState<BookingItem | null>(null);

  const handleSelectBooking = (booking: BookingItem) => {
    setSelectedBooking(booking);
    if (onOpenActionModal) {
      onOpenActionModal(booking.bookingCode, `${booking.categoryLabel}: ${booking.title}`);
    } else {
      alert(`Viewing details for ${booking.title} (${booking.bookingCode})`);
    }
  };

  const handleNewBooking = () => {
    if (onNavigateView) {
      onNavigateView('hotels');
    } else if (onOpenActionModal) {
      onOpenActionModal('new-booking', 'Create New Booking');
    }
  };

  const handleQuickAction = (actionId: string) => {
    if (onNavigateView && (actionId === 'hotels' || actionId === 'transport' || actionId === 'airport' || actionId === 'jastip' || actionId === 'umrah')) {
      onNavigateView(actionId);
    } else if (onOpenActionModal) {
      onOpenActionModal(actionId, `Quick Action: ${actionId.toUpperCase()}`);
    }
  };

  return (
    <div className="w-full bg-[#f8fafc] pb-16">
      {/* 1. Full-Width Hero Section */}
      <BookingsHero
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        onNewBooking={handleNewBooking}
      />

      {/* 2. Main 3-Column Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Vertical Nav Sidebar (2.5 cols / 3 cols - Sticky) */}
          <div className="lg:col-span-3 lg:sticky lg:top-20 self-start">
            <MyTripsSidebar
              activeTab="bookings"
              onSelectTab={(tab) => {
                if (tab === 'trips' && onNavigateView) {
                  onNavigateView('my-trips');
                }
              }}
              onPlanTrip={() => {
                if (onNavigateView) {
                  onNavigateView('umrah');
                }
              }}
            />
          </div>

          {/* Middle Main Content: Booking Filter & List (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <BookingsListSection
              bookings={ALL_BOOKINGS}
              selectedCategory={selectedCategory}
              onSelectBooking={handleSelectBooking}
            />
          </div>

          {/* Right Sidebar Widgets: Donut Summary, Upcoming Trip, Quick Actions (3 cols) */}
          <div className="lg:col-span-3 lg:sticky lg:top-20 self-start">
            <BookingsRightSidebar
              onQuickAction={handleQuickAction}
              onViewItinerary={() => {
                if (onNavigateView) {
                  onNavigateView('my-trips');
                }
              }}
              onContactSupport={() => {
                if (onOpenActionModal) {
                  onOpenActionModal('support', 'SafarHub 24/7 VIP Concierge Support');
                }
              }}
            />
          </div>
        </div>

        {/* 3. Bottom Section: Recommended for Your Trip */}
        <BookingsRecommendationsRow
          onSelectRec={(item) => {
            if (onOpenActionModal) {
              onOpenActionModal(item.id, `Book Add-On: ${item.title}`);
            }
          }}
        />
      </div>
    </div>
  );
};
