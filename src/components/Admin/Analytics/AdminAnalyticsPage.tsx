import React, { useState } from 'react';
import { AdminAnalyticsHeader } from './AdminAnalyticsHeader';
import { AdminAnalyticsPillTabs } from './AdminAnalyticsPillTabs';
import { AdminAnalyticsKpiRow } from './AdminAnalyticsKpiRow';
import { AdminAnalyticsRevenueTrend } from './AdminAnalyticsRevenueTrend';
import { AdminAnalyticsBookingsByService } from './AdminAnalyticsBookingsByService';
import { AdminAnalyticsTopDestinations } from './AdminAnalyticsTopDestinations';
import { AdminAnalyticsMonthlyBookings } from './AdminAnalyticsMonthlyBookings';
import { AdminAnalyticsUserGrowth } from './AdminAnalyticsUserGrowth';
import { AdminAnalyticsDemographics } from './AdminAnalyticsDemographics';
import { AdminAnalyticsTopPackages } from './AdminAnalyticsTopPackages';
import { AdminAnalyticsTopCustomers } from './AdminAnalyticsTopCustomers';
import { AdminAnalyticsSalesByChannel } from './AdminAnalyticsSalesByChannel';
import { AnalyticsTab } from '../../../types/adminAnalytics';

interface AdminAnalyticsPageProps {
  onOpenActionModal?: (id: string, title: string) => void;
}

export const AdminAnalyticsPage: React.FC<AdminAnalyticsPageProps> = ({
  onOpenActionModal
}) => {
  const [activeTab, setActiveTab] = useState<AnalyticsTab>('overview');
  const [dateRange, setDateRange] = useState('1 Oct 2026 - 31 Oct 2026');

  const handleTabChange = (tab: AnalyticsTab) => {
    setActiveTab(tab);
    if (tab !== 'overview' && onOpenActionModal) {
      onOpenActionModal(
        `analytics-${tab}`,
        `Reports & Analytics: ${tab.charAt(0).toUpperCase() + tab.slice(1)} Detail Report`
      );
    }
  };

  return (
    <div className="space-y-4 sm:space-y-5 pb-10 w-full">
      {/* 1. Header Banner */}
      <AdminAnalyticsHeader
        dateRange={dateRange}
        onSelectDateRange={setDateRange}
      />

      {/* 2. 11 Pill Navigation Tabs */}
      <AdminAnalyticsPillTabs
        activeTab={activeTab}
        onSelectTab={handleTabChange}
      />

      {/* 3. 6 KPI Metric Cards Row */}
      <AdminAnalyticsKpiRow />

      {/* 4. Row 1: Revenue Trend | Bookings by Service | Top Destinations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
        <div className="lg:col-span-5 h-full">
          <AdminAnalyticsRevenueTrend />
        </div>
        <div className="lg:col-span-4 h-full">
          <AdminAnalyticsBookingsByService />
        </div>
        <div className="lg:col-span-3 h-full">
          <AdminAnalyticsTopDestinations
            onViewAll={() => {
              if (onOpenActionModal) {
                onOpenActionModal('analytics-destinations', 'All Destinations Performance Analytics');
              }
            }}
          />
        </div>
      </div>

      {/* 5. Row 2: Bookings by Month | User Growth | Customer Demographics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
        <div className="lg:col-span-5 h-full">
          <AdminAnalyticsMonthlyBookings />
        </div>
        <div className="lg:col-span-4 h-full">
          <AdminAnalyticsUserGrowth />
        </div>
        <div className="lg:col-span-3 h-full">
          <AdminAnalyticsDemographics />
        </div>
      </div>

      {/* 6. Row 3: Top Performing Packages | Top Customers | Sales by Channel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
        <div className="lg:col-span-5 h-full">
          <AdminAnalyticsTopPackages
            onViewAll={() => {
              if (onOpenActionModal) {
                onOpenActionModal('analytics-top-packages', 'All Performing Packages Report');
              }
            }}
          />
        </div>
        <div className="lg:col-span-4 h-full">
          <AdminAnalyticsTopCustomers
            onViewAll={() => {
              if (onOpenActionModal) {
                onOpenActionModal('analytics-top-customers', 'Top Customers & High Spenders Report');
              }
            }}
          />
        </div>
        <div className="lg:col-span-3 h-full">
          <AdminAnalyticsSalesByChannel
            onViewAll={() => {
              if (onOpenActionModal) {
                onOpenActionModal('analytics-sales-channels', 'Sales by Channel Detailed Breakdown');
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};
