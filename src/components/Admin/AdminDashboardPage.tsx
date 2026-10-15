import React, { useState } from 'react';
import { AdminSidebar } from './AdminSidebar';
import { AdminHeader } from './AdminHeader';
import { AdminHero } from './AdminHero';
import { AdminKpiGrid } from './AdminKpiGrid';
import { AdminRevenueChart } from './AdminRevenueChart';
import { AdminBookingStatusDonut } from './AdminBookingStatusDonut';
import { AdminTopServices } from './AdminTopServices';
import { AdminLiveActivity } from './AdminLiveActivity';
import { AdminRecentBookingsTable } from './AdminRecentBookingsTable';
import { AdminTopDestinations } from './AdminTopDestinations';
import { AdminQuickActions } from './AdminQuickActions';
import { AdminRevenueByService } from './AdminRevenueByService';
import { AdminUserGrowthChart } from './AdminUserGrowthChart';
import { AdminSupportTicketsDonut } from './AdminSupportTicketsDonut';
import { AdminBookingsPage } from './Bookings/AdminBookingsPage';
import { AdminHotelsPage } from './Hotels/AdminHotelsPage';
import { AdminTransportPage } from './Transport/AdminTransportPage';
import { AdminAirportPage } from './Airport/AdminAirportPage';
import { AdminJastipPage } from './Jastip/AdminJastipPage';
import { AdminUmrahPage } from './Umrah/AdminUmrahPage';
import { AdminExperiencePage } from './Experience/AdminExperiencePage';
import { AdminCityGuidePage } from './CityGuide/AdminCityGuidePage';
import { AdminDealsPage } from './Deals/AdminDealsPage';
import { AdminUsersPage } from './Users/AdminUsersPage';
import { AdminPaymentsPage } from './Payments/AdminPaymentsPage';
import { AdminMessagesPage } from './Messages/AdminMessagesPage';
import { AdminAnalyticsPage } from './Analytics/AdminAnalyticsPage';
import { AdminMarketingPage } from './Marketing/AdminMarketingPage';
import { AdminSettingsPage } from './Settings/AdminSettingsPage';
import { AdminContentPage } from './Content/AdminContentPage';
import { AdminReviewsPage } from './Reviews/AdminReviewsPage';

interface AdminDashboardPageProps {
  onNavigateClientView?: (view: string) => void;
  onOpenActionModal?: (id: string, title: string) => void;
}

export const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({
  onNavigateClientView,
  onOpenActionModal
}) => {
  const [activeAdminTab, setActiveAdminTab] = useState('dashboard');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleSelectAdminTab = (tab: string) => {
    setActiveAdminTab(tab);
    setMobileSidebarOpen(false);
    if (
      tab !== 'dashboard' &&
      tab !== 'bookings' &&
      tab !== 'hotels' &&
      !tab.startsWith('hotels-') &&
      tab !== 'transport' &&
      !tab.startsWith('transport-') &&
      tab !== 'airport' &&
      !tab.startsWith('airport-') &&
      tab !== 'jastip' &&
      !tab.startsWith('jastip-') &&
      tab !== 'umrah' &&
      !tab.startsWith('umrah-') &&
      tab !== 'experiences' &&
      !tab.startsWith('experiences-') &&
      tab !== 'city-guide' &&
      !tab.startsWith('city-guide-') &&
      tab !== 'deals' &&
      !tab.startsWith('deals-') &&
      tab !== 'users' &&
      !tab.startsWith('users-') &&
      tab !== 'payments' &&
      !tab.startsWith('payments-') &&
      tab !== 'messages' &&
      !tab.startsWith('messages-') &&
      tab !== 'reviews' &&
      !tab.startsWith('reviews-') &&
      tab !== 'content' &&
      !tab.startsWith('content-') &&
      tab !== 'analytics' &&
      !tab.startsWith('analytics-') &&
      tab !== 'marketing' &&
      !tab.startsWith('marketing-') &&
      tab !== 'settings' &&
      !tab.startsWith('settings-') &&
      onOpenActionModal
    ) {
      onOpenActionModal(
        `admin-${tab}`,
        `Admin Management: ${tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}`
      );
    }
  };

  const handleQuickAction = (id: string) => {
    if (onOpenActionModal) {
      onOpenActionModal(`admin-manage-${id}`, `Manage ${id.toUpperCase()} Inventory & Bookings`);
    }
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-[#f1f5f9] flex antialiased text-slate-800">
      {/* 1. Desktop Left Dark Emerald / Slate Admin Sidebar */}
      <div className="hidden lg:flex flex-shrink-0">
        <AdminSidebar
          activeTab={activeAdminTab}
          onSelectTab={handleSelectAdminTab}
          onSwitchToUserPortal={() => {
            if (onNavigateClientView) onNavigateClientView('home');
          }}
        />
      </div>

      {/* Mobile Slide-in Drawer */}
      {mobileSidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex animate-in fade-in duration-200">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileSidebarOpen(false)}
          />
          <div className="relative z-10 w-72 max-w-[85vw] h-full shadow-2xl animate-in slide-in-from-left duration-250">
            <AdminSidebar
              activeTab={activeAdminTab}
              onSelectTab={handleSelectAdminTab}
              onClose={() => setMobileSidebarOpen(false)}
              onSwitchToUserPortal={() => {
                setMobileSidebarOpen(false);
                if (onNavigateClientView) onNavigateClientView('home');
              }}
            />
          </div>
        </div>
      )}

      {/* 2. Main Admin Workspace Content */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        {/* Sticky Admin Top Header */}
        <AdminHeader
          onToggleSidebar={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          onSearch={(query) => {
            if (onOpenActionModal) {
              onOpenActionModal('admin-search', `Admin Global Search Results for "${query}"`);
            }
          }}
          onOpenNotifications={() => {
            if (onOpenActionModal) {
              onOpenActionModal('admin-notifications', 'System Notifications & Security Alerts (12)');
            }
          }}
          onOpenSettings={() => {
            setActiveAdminTab('settings');
          }}
          onGoToDashboard={() => {
            setActiveAdminTab('dashboard');
          }}
        />

        {/* Dashboard Main Scrollable Body */}
        <main className="p-4 sm:p-6 lg:p-7 max-w-[1680px] w-full mx-auto space-y-6">
          {activeAdminTab === 'settings' || activeAdminTab.startsWith('settings-') ? (
            <AdminSettingsPage
              initialTab={activeAdminTab}
              onOpenActionModal={onOpenActionModal}
            />
          ) : activeAdminTab === 'marketing' || activeAdminTab.startsWith('marketing-') ? (
            <AdminMarketingPage
              initialTab={activeAdminTab}
              onOpenActionModal={onOpenActionModal}
            />
          ) : activeAdminTab === 'content' || activeAdminTab.startsWith('content-') ? (
            <AdminContentPage
              initialTab={activeAdminTab}
              onOpenActionModal={onOpenActionModal}
            />
          ) : activeAdminTab === 'reviews' || activeAdminTab.startsWith('reviews-') ? (
            <AdminReviewsPage
              initialTab={activeAdminTab}
              onOpenActionModal={onOpenActionModal}
            />
          ) : activeAdminTab === 'analytics' || activeAdminTab.startsWith('analytics-') ? (
            <AdminAnalyticsPage onOpenActionModal={onOpenActionModal} />
          ) : activeAdminTab === 'messages' || activeAdminTab.startsWith('messages-') ? (
            <AdminMessagesPage onOpenActionModal={onOpenActionModal} />
          ) : activeAdminTab === 'payments' || activeAdminTab.startsWith('payments-') ? (
            <AdminPaymentsPage onOpenActionModal={onOpenActionModal} />
          ) : activeAdminTab === 'users' || activeAdminTab.startsWith('users-') ? (
            <AdminUsersPage onOpenActionModal={onOpenActionModal} />
          ) : activeAdminTab === 'deals' || activeAdminTab.startsWith('deals-') ? (
            <AdminDealsPage onOpenActionModal={onOpenActionModal} />
          ) : activeAdminTab === 'city-guide' || activeAdminTab.startsWith('city-guide-') ? (
            <AdminCityGuidePage onOpenActionModal={onOpenActionModal} />
          ) : activeAdminTab === 'experiences' || activeAdminTab.startsWith('experiences-') ? (
            <AdminExperiencePage onOpenActionModal={onOpenActionModal} />
          ) : activeAdminTab === 'umrah' || activeAdminTab.startsWith('umrah-') ? (
            <AdminUmrahPage onOpenActionModal={onOpenActionModal} />
          ) : activeAdminTab === 'jastip' || activeAdminTab.startsWith('jastip-') ? (
            <AdminJastipPage onOpenActionModal={onOpenActionModal} />
          ) : activeAdminTab === 'airport' || activeAdminTab.startsWith('airport-') ? (
            <AdminAirportPage onOpenActionModal={onOpenActionModal} />
          ) : activeAdminTab === 'transport' || activeAdminTab.startsWith('transport-') ? (
            <AdminTransportPage onOpenActionModal={onOpenActionModal} />
          ) : activeAdminTab === 'hotels' || activeAdminTab.startsWith('hotels-') ? (
            <AdminHotelsPage onOpenActionModal={onOpenActionModal} />
          ) : activeAdminTab === 'bookings' ? (
            <AdminBookingsPage onOpenActionModal={onOpenActionModal} />
          ) : (
            <>
              {/* A. Welcome Panoramic Hero */}
              <AdminHero />

              {/* B. 6 KPI Stat Metrics Row */}
              <AdminKpiGrid
                onSelectKpi={(kpiId) => {
                  if (onOpenActionModal) {
                    onOpenActionModal(`admin-kpi-${kpiId}`, `KPI Analytics: ${kpiId.toUpperCase()}`);
                  }
                }}
              />

              {/* C. 4-Column Middle Grid: Revenue Overview | Booking Status | Top Services | Live Activity */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
                <div className="h-full">
                  <AdminRevenueChart />
                </div>

                <div className="h-full">
                  <AdminBookingStatusDonut />
                </div>

                <div className="h-full">
                  <AdminTopServices />
                </div>

                <div className="h-full">
                  <AdminLiveActivity
                    onViewAll={() => {
                      if (onOpenActionModal) {
                        onOpenActionModal('admin-live-activity', 'All Live System Activity Logs');
                      }
                    }}
                  />
                </div>
              </div>

              {/* D. 2-Column Row: Recent Bookings Table | Top Destinations */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
                <div className="lg:col-span-7 xl:col-span-8">
                  <AdminRecentBookingsTable
                    onViewAll={() => {
                      setActiveAdminTab('bookings');
                    }}
                    onSelectBooking={(id) => {
                      setActiveAdminTab('bookings');
                    }}
                  />
                </div>

                <div className="lg:col-span-5 xl:col-span-4">
                  <AdminTopDestinations
                    onViewAll={() => {
                      if (onOpenActionModal) {
                        onOpenActionModal('admin-all-destinations', 'All Destinations & Territory Analytics');
                      }
                    }}
                  />
                </div>
              </div>

              {/* E. 6 Quick Management Action Cards */}
              <div>
                <AdminQuickActions onSelectAction={handleQuickAction} />
              </div>

              {/* F. 3-Column Bottom Row: Revenue by Service | User Growth | Support Tickets */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="h-full">
                  <AdminRevenueByService />
                </div>
                <div className="h-full">
                  <AdminUserGrowthChart />
                </div>
                <div className="h-full">
                  <AdminSupportTicketsDonut />
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};
