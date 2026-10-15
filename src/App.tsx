import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopNavbar } from './components/TopNavbar';
import { HeroSection } from './components/HeroSection';
import { MetricsGrid } from './components/MetricsGrid';
import { QuickActions } from './components/QuickActions';
import { UpcomingTrips } from './components/UpcomingTrips';
import { SaudiOperationsMap } from './components/SaudiOperationsMap';
import { LiveFlights } from './components/LiveFlights';
import { ServicesGrid } from './components/ServicesGrid';
import { InsightsSection } from './components/InsightsSection';
import { PromoBanners } from './components/PromoBanners';
import { Footer } from './components/Footer';
import { HotelsPage } from './components/HotelsPage/HotelsPage';
import { TransportPage } from './components/TransportPage/TransportPage';
import { AirportPage } from './components/AirportPage/AirportPage';
import { JastipPage } from './components/JastipPage/JastipPage';
import { UmrahPage } from './components/UmrahPage/UmrahPage';
import { MyTripsPage } from './components/MyTripsPage/MyTripsPage';
import { BookingsPage } from './components/BookingsPage/BookingsPage';
import { PaymentsPage } from './components/PaymentsPage/PaymentsPage';
import { MessagesPage } from './components/MessagesPage/MessagesPage';
import { SupportPage } from './components/SupportPage/SupportPage';
import { CityGuidePage } from './components/CityGuidePage/CityGuidePage';
import { ExperiencesPage } from './components/ExperiencesPage/ExperiencesPage';
import { DealsPage } from './components/DealsPage/DealsPage';
import { ProfilePage } from './components/ProfilePage/ProfilePage';
import { SettingsPage } from './components/SettingsPage/SettingsPage';
import { AdminDashboardPage } from './components/Admin/AdminDashboardPage';
import { TripDetailModal } from './components/Modals/TripDetailModal';
import { QuickActionModal } from './components/Modals/QuickActionModal';
import { NotificationsDropdown } from './components/Modals/NotificationsDropdown';
import { TripItem, ServiceItem, CityPin, FlightItem } from './types';

export function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('dashboard'); // Default directly to Home
  const [selectedTrip, setSelectedTrip] = useState<TripItem | null>(null);
  const [activeActionModal, setActiveActionModal] = useState<{ id: string; title: string } | null>(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [unreadCount, setUnreadCount] = useState(6);

  // Search Handler
  const handleHeroSearch = (tab: string, params: any) => {
    if (tab === 'hotels') {
      setActiveNav('hotels');
    } else if (tab === 'transport') {
      setActiveNav('transport');
    } else if (tab === 'airport') {
      setActiveNav('airport');
    } else {
      setActiveActionModal({
        id: tab,
        title: `${tab.toUpperCase()} Booking (${params.destination || 'Saudi'})`,
      });
    }
  };

  const handleQuickAction = (actionId: string, title: string) => {
    if (actionId === 'hotel') {
      setActiveNav('hotels');
    } else if (actionId === 'transport') {
      setActiveNav('transport');
    } else if (actionId === 'airport') {
      setActiveNav('airport');
    } else {
      setActiveActionModal({ id: actionId, title });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    if (service.id === 's1') {
      setActiveNav('hotels');
    } else if (service.id === 's2') {
      setActiveNav('transport');
    } else if (service.id === 's3') {
      setActiveNav('airport');
    } else {
      setActiveActionModal({ id: service.id, title: service.title });
    }
  };

  const handleSelectCity = (city: CityPin) => {
    setActiveActionModal({
      id: `city-${city.id}`,
      title: `Explore ${city.name} (${city.arabicName}) Operations`,
    });
  };

  const handleSelectFlight = (flight: FlightItem) => {
    setActiveActionModal({
      id: `flight-${flight.flightNo}`,
      title: `Flight Radar Tracking: ${flight.flightNo} (${flight.airline})`,
    });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col antialiased">
      {/* If Admin Portal View is active, render full Admin Portal Workspace */}
      {activeNav === 'admin' ? (
        <AdminDashboardPage
          onNavigateClientView={setActiveNav}
          onOpenActionModal={(id, title) => setActiveActionModal({ id, title })}
        />
      ) : (
        <div className="flex flex-1 w-full">
          {/* Left Slide-in Pop-up Navigation Sidebar */}
          <Sidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            activeNav={activeNav}
            setActiveNav={setActiveNav}
            onOpenActionModal={(navId) => {
              if (navId === 'hotels' || navId === 'transport' || navId === 'airport') {
                setActiveNav(navId);
              } else {
                setActiveActionModal({ id: navId, title: `${navId.toUpperCase()} Center` });
              }
            }}
          />

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Top Sticky Navigation Bar */}
            <TopNavbar
              onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
              onSearch={(query) => {
                if (query) {
                  setActiveActionModal({
                    id: 'search',
                    title: `Search results for "${query}"`,
                  });
                }
              }}
              onOpenNotifications={() => setShowNotifications(!showNotifications)}
              activeView={activeNav}
              setActiveView={setActiveNav}
              unreadCount={unreadCount}
            />

            {/* Notifications Dropdown Modal */}
            <NotificationsDropdown
              isOpen={showNotifications}
              onClose={() => setShowNotifications(false)}
              onClearAll={() => setUnreadCount(0)}
            />

            {/* VIEW 1: SETTINGS */}
            {activeNav === 'settings' ? (
              <SettingsPage
                onNavigateView={setActiveNav}
                onOpenActionModal={(id, title) => setActiveActionModal({ id, title })}
              />
            ) : activeNav === 'profile' ? (
            /* VIEW 1.5: USER PROFILE */
            <ProfilePage
              onNavigateView={setActiveNav}
              onOpenActionModal={(id, title) => setActiveActionModal({ id, title })}
            />
          ) : activeNav === 'deals' || activeNav === 'promo' ? (
            /* VIEW 2: DEALS & PROMO */
            <DealsPage
              onNavigateView={setActiveNav}
              onOpenActionModal={(id, title) => setActiveActionModal({ id, title })}
            />
          ) : activeNav === 'experiences' ? (
            /* VIEW 3: EXPERIENCES & ACTIVITIES */
            <ExperiencesPage
              onNavigateView={setActiveNav}
              onOpenActionModal={(id, title) => setActiveActionModal({ id, title })}
            />
          ) : activeNav === 'city-guide' || activeNav === 'guide' ? (
            /* VIEW 3: CITY GUIDE & EXPLORE SAUDI */
            <CityGuidePage
              onNavigateView={setActiveNav}
              onOpenActionModal={(id, title) => setActiveActionModal({ id, title })}
            />
          ) : activeNav === 'support' ? (
            /* VIEW 3: SUPPORT CENTER & HELP DESK */
            <SupportPage
              onNavigateView={setActiveNav}
              onOpenActionModal={(id, title) => setActiveActionModal({ id, title })}
            />
          ) : activeNav === 'messages' ? (
            /* VIEW 3: MESSAGES & LIVE CONCIERGE CHAT */
            <MessagesPage
              onNavigateView={setActiveNav}
              onOpenActionModal={(id, title) => setActiveActionModal({ id, title })}
            />
          ) : activeNav === 'payments' ? (
            /* VIEW 3: PAYMENTS & FINANCIAL MANAGEMENT */
            <PaymentsPage
              onNavigateView={setActiveNav}
              onOpenActionModal={(id, title) => setActiveActionModal({ id, title })}
            />
          ) : activeNav === 'bookings' ? (
            /* VIEW 3: BOOKINGS MANAGEMENT */
            <BookingsPage
              onNavigateView={setActiveNav}
              onOpenActionModal={(id, title) => setActiveActionModal({ id, title })}
            />
          ) : activeNav === 'my-trips' || activeNav === 'trips' ? (
            /* VIEW 3: MY TRIPS */
            <MyTripsPage
              onNavigateView={setActiveNav}
              onOpenActionModal={(id, title) => setActiveActionModal({ id, title })}
            />
          ) : activeNav === 'umrah' ? (
            /* VIEW 4: UMRAH PACKAGES */
            <UmrahPage />
          ) : activeNav === 'jastip' ? (
            /* VIEW 5: JASTIP SAUDI PERSONAL SHOPPER */
            <JastipPage />
          ) : activeNav === 'airport' ? (
            /* VIEW 6: AIRPORT SERVICES PAGE */
            <AirportPage
              onOpenActionModal={(id, title) => setActiveActionModal({ id, title })}
            />
          ) : activeNav === 'transport' ? (
            /* VIEW 7: TRANSPORTATION PAGE */
            <TransportPage
              onOpenActionModal={(id, title) => setActiveActionModal({ id, title })}
            />
          ) : activeNav === 'hotels' ? (
            /* VIEW 8: HOTELS & ROOMS PAGE */
            <HotelsPage
              onOpenActionModal={(id, title) => setActiveActionModal({ id, title })}
            />
          ) : (
            /* VIEW 9: MAIN DASHBOARD VIEW */
            <>
              {/* Full-Width Panoramic Hero Section */}
              <HeroSection
                onSearchSubmit={handleHeroSearch}
                onOpenCityGuide={() =>
                  setActiveActionModal({
                    id: 'guide',
                    title: 'Comprehensive Saudi Arabia Pilgrimage & City Guide',
                  })
                }
              />

              {/* Main Dashboard Content Grid */}
              <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 max-w-7xl w-full mx-auto space-y-8">
                {/* 2. Top Stats & Key Metrics Grid */}
                <MetricsGrid
                  onSelectMetric={(metricId) =>
                    setActiveActionModal({
                      id: `metric-${metricId}`,
                      title: 'Key Performance Metric Breakdown',
                    })
                  }
                />

                {/* 3. Quick Actions 8-card grid */}
                <QuickActions
                  onActionClick={handleQuickAction}
                  onViewAll={() =>
                    setActiveActionModal({
                      id: 'all-actions',
                      title: 'All SafarHub Saudi Services & Catalog',
                    })
                  }
                />

                {/* 4. Tri-Column Row: Upcoming Trips | Saudi Operations Map | Live Flights */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 mb-8">
                  {/* Upcoming Trips (4 Cols) */}
                  <div className="lg:col-span-4">
                    <UpcomingTrips
                      onSelectTrip={(trip) => setSelectedTrip(trip)}
                      onViewAll={() =>
                        setActiveActionModal({
                          id: 'my-trips',
                          title: 'All Upcoming & Completed Trips',
                        })
                      }
                    />
                  </div>

                  {/* Saudi Operations Interactive Map (4 Cols) */}
                  <div className="lg:col-span-4">
                    <SaudiOperationsMap onSelectCity={handleSelectCity} />
                  </div>

                  {/* Live Flights Schedule (4 Cols) */}
                  <div className="md:col-span-2 lg:col-span-4">
                    <LiveFlights
                      onSelectFlight={handleSelectFlight}
                      onViewAll={() =>
                        setActiveActionModal({
                          id: 'flights',
                          title: 'All Saudi Airports Live Flight Board',
                        })
                      }
                    />
                  </div>
                </div>

                {/* 5. Our Services Grid */}
                <ServicesGrid
                  onSelectService={handleSelectService}
                  onViewAll={() =>
                    setActiveActionModal({
                      id: 'services',
                      title: 'Explore All SafarHub VIP Services',
                    })
                  }
                />

                {/* 6. Travel Insights, Revenue by Service & Recent Activity */}
                <InsightsSection />

                {/* 7. Special Umrah Packages & Jastip Banners */}
                <PromoBanners
                  onOpenUmrahModal={() =>
                    setActiveActionModal({
                      id: 'umrah-special',
                      title: 'Special VIP Umrah Packages 2026',
                    })
                  }
                  onOpenJastipModal={() =>
                    setActiveActionModal({
                      id: 'jastip-shop',
                      title: 'Jastip Saudi Online Souq',
                    })
                  }
                />
              </main>
            </>
          )}

          {/* Footer Component */}
          <Footer />
        </div>
      </div>
      )}

      {/* Modals */}
      <TripDetailModal
        trip={selectedTrip}
        onClose={() => setSelectedTrip(null)}
      />

      <QuickActionModal
        actionId={activeActionModal?.id || null}
        title={activeActionModal?.title || null}
        onClose={() => setActiveActionModal(null)}
      />
    </div>
  );
}

export default App;
