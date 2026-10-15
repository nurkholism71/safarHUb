import React, { useState, useEffect } from 'react';
import { AdminMarketingHeader } from './AdminMarketingHeader';
import { AdminMarketingPillTabs } from './AdminMarketingPillTabs';
import { AdminMarketingKpiRow } from './AdminMarketingKpiRow';
import { AdminMarketingCampaignPerformance } from './AdminMarketingCampaignPerformance';
import { AdminMarketingChannelPerformance } from './AdminMarketingChannelPerformance';
import { AdminMarketingAudienceDemographics } from './AdminMarketingAudienceDemographics';
import { AdminMarketingActiveCampaigns } from './AdminMarketingActiveCampaigns';
import { AdminMarketingToolsGrid } from './AdminMarketingToolsGrid';
import { AdminMarketingTopContent } from './AdminMarketingTopContent';
import { AdminMarketingLeadSources } from './AdminMarketingLeadSources';
import { AdminMarketingRecentActivities } from './AdminMarketingRecentActivities';

// Database Table Views
import { AdminMarketingCampaignsTable } from './AdminMarketingCampaignsTable';
import { AdminMarketingContentTable } from './AdminMarketingContentTable';
import { AdminMarketingSocialTable } from './AdminMarketingSocialTable';
import { AdminMarketingEmailTable } from './AdminMarketingEmailTable';
import { AdminMarketingAdsTable } from './AdminMarketingAdsTable';
import { AdminMarketingSeoTable } from './AdminMarketingSeoTable';
import { AdminMarketingInfluencersTable } from './AdminMarketingInfluencersTable';
import { AdminMarketingLoyaltyTable } from './AdminMarketingLoyaltyTable';
import { AdminMarketingAutomationsTable } from './AdminMarketingAutomationsTable';
import { AdminMarketingReportsTable } from './AdminMarketingReportsTable';

import {
  MARKETING_KPIS,
  MARKETING_CAMPAIGN_PERFORMANCE,
  MARKETING_CHANNEL_PERFORMANCE,
  MARKETING_AUDIENCE_DEMOGRAPHICS,
  MARKETING_ACTIVE_CAMPAIGNS,
  MARKETING_TOOLS,
  MARKETING_TOP_CONTENT,
  MARKETING_LEAD_SOURCES,
  MARKETING_RECENT_ACTIVITIES,
  MARKETING_CAMPAIGNS_DB,
  MARKETING_CONTENT_DB,
  MARKETING_SOCIAL_POSTS_DB,
  MARKETING_EMAIL_CAMPAIGNS_DB,
  MARKETING_ADS_DB,
  MARKETING_SEO_KEYWORDS_DB,
  MARKETING_INFLUENCERS_DB,
  MARKETING_LOYALTY_DB,
  MARKETING_AUTOMATIONS_DB,
  MARKETING_REPORTS_DB
} from '../../../data/adminMarketingData';
import { MarketingTab } from '../../../types/adminMarketing';

interface AdminMarketingPageProps {
  initialTab?: string;
  onOpenActionModal?: (id: string, title: string) => void;
}

export const AdminMarketingPage: React.FC<AdminMarketingPageProps> = ({
  initialTab = 'marketing',
  onOpenActionModal
}) => {
  // Map sidebar route to MarketingTab
  const mapRouteToTab = (route: string): MarketingTab => {
    if (route === 'marketing-campaigns') return 'campaigns';
    if (route === 'marketing-content') return 'content';
    if (route === 'marketing-social') return 'social';
    if (route === 'marketing-email') return 'email';
    if (route === 'marketing-ads') return 'ads';
    if (route === 'marketing-seo') return 'seo';
    if (route === 'marketing-influencer') return 'influencer';
    if (route === 'marketing-loyalty') return 'loyalty';
    if (route === 'marketing-automation') return 'automation';
    if (route === 'marketing-reports') return 'reports';
    return 'overview';
  };

  const [activeTab, setActiveTab] = useState<MarketingTab>(mapRouteToTab(initialTab));

  useEffect(() => {
    setActiveTab(mapRouteToTab(initialTab));
  }, [initialTab]);

  const handleCreateCampaign = () => {
    if (onOpenActionModal) {
      onOpenActionModal('admin-create-campaign', 'Create New Omnichannel Marketing Campaign');
    } else {
      alert('Create Campaign Modal opening...');
    }
  };

  const handleExportReport = () => {
    alert('Exporting marketing performance PDF/CSV report...');
  };

  const handleToolClick = (toolId: string) => {
    if (toolId === 'tool-1') setActiveTab('content');
    else if (toolId === 'tool-2') setActiveTab('social');
    else if (toolId === 'tool-3') setActiveTab('email');
    else if (toolId === 'tool-5') setActiveTab('ads');
    else if (toolId === 'tool-6') setActiveTab('seo');
    else if (toolId === 'tool-7') setActiveTab('influencer');
    else if (toolId === 'tool-8') setActiveTab('loyalty');
    else if (toolId === 'tool-9') setActiveTab('automation');
  };

  return (
    <div className="space-y-6 pb-12">
      {/* 1. Header Banner */}
      <AdminMarketingHeader onCreateCampaign={handleCreateCampaign} />

      {/* 2. 11 Pill Navigation Tabs & Date Range */}
      <AdminMarketingPillTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        dateRangeText="1 Oct 2026 - 31 Oct 2026"
        onExportReport={handleExportReport}
      />

      {/* 3. 5 KPI Stats Cards */}
      <AdminMarketingKpiRow kpis={MARKETING_KPIS} />

      {/* 4. Tab Content: Database Table Views or Panoramic Overview */}
      {activeTab === 'campaigns' ? (
        <AdminMarketingCampaignsTable
          campaigns={MARKETING_CAMPAIGNS_DB}
          onCreateNew={handleCreateCampaign}
          onOpenDetail={(camp) => alert(`Viewing Campaign: ${camp.title}`)}
        />
      ) : activeTab === 'content' ? (
        <AdminMarketingContentTable
          contentList={MARKETING_CONTENT_DB}
          onCreateNew={() => alert('New Article Modal')}
        />
      ) : activeTab === 'social' ? (
        <AdminMarketingSocialTable
          posts={MARKETING_SOCIAL_POSTS_DB}
          onCreatePost={() => alert('Schedule Social Post Modal')}
        />
      ) : activeTab === 'email' ? (
        <AdminMarketingEmailTable
          emailCampaigns={MARKETING_EMAIL_CAMPAIGNS_DB}
          onCreateEmail={() => alert('Compose Email Campaign')}
        />
      ) : activeTab === 'ads' ? (
        <AdminMarketingAdsTable
          ads={MARKETING_ADS_DB}
          onCreateAd={() => alert('Launch Ad Set Modal')}
        />
      ) : activeTab === 'seo' ? (
        <AdminMarketingSeoTable
          keywords={MARKETING_SEO_KEYWORDS_DB}
          onAddKeyword={() => alert('Track Keyword Modal')}
        />
      ) : activeTab === 'influencer' ? (
        <AdminMarketingInfluencersTable
          influencers={MARKETING_INFLUENCERS_DB}
          onAddInfluencer={() => alert('Add Influencer Modal')}
        />
      ) : activeTab === 'loyalty' ? (
        <AdminMarketingLoyaltyTable
          programs={MARKETING_LOYALTY_DB}
          onCreateProgram={() => alert('Create Loyalty Program Modal')}
        />
      ) : activeTab === 'automation' ? (
        <AdminMarketingAutomationsTable
          automations={MARKETING_AUTOMATIONS_DB}
          onCreateAutomation={() => alert('Create Workflow Modal')}
        />
      ) : activeTab === 'reports' ? (
        <AdminMarketingReportsTable
          reports={MARKETING_REPORTS_DB}
          onGenerateReport={() => alert('Generate Report Modal')}
        />
      ) : (
        /* Overview Dashboard View */
        <>
          {/* Row 1: Campaign Spline (5 cols) + Channel Performance (4 cols) + Audience Demographics (3 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div className="lg:col-span-5">
              <AdminMarketingCampaignPerformance data={MARKETING_CAMPAIGN_PERFORMANCE} />
            </div>
            <div className="lg:col-span-4">
              <AdminMarketingChannelPerformance channels={MARKETING_CHANNEL_PERFORMANCE} />
            </div>
            <div className="lg:col-span-3">
              <AdminMarketingAudienceDemographics
                demographics={MARKETING_AUDIENCE_DEMOGRAPHICS}
                totalReachText="2.8M"
              />
            </div>
          </div>

          {/* Row 2: Active Campaigns (8 cols) + Marketing Tools (4 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div className="lg:col-span-8">
              <AdminMarketingActiveCampaigns
                campaigns={MARKETING_ACTIVE_CAMPAIGNS}
                onViewAll={() => setActiveTab('campaigns')}
                onCreateNew={handleCreateCampaign}
              />
            </div>
            <div className="lg:col-span-4">
              <AdminMarketingToolsGrid
                tools={MARKETING_TOOLS}
                onToolClick={handleToolClick}
              />
            </div>
          </div>

          {/* Row 3: Top Performing Content (5 cols) + Lead Sources (3 cols) + Recent Activities (4 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div className="lg:col-span-5">
              <AdminMarketingTopContent
                contentList={MARKETING_TOP_CONTENT}
                onViewAll={() => setActiveTab('content')}
              />
            </div>
            <div className="lg:col-span-3">
              <AdminMarketingLeadSources leadSources={MARKETING_LEAD_SOURCES} />
            </div>
            <div className="lg:col-span-4">
              <AdminMarketingRecentActivities activities={MARKETING_RECENT_ACTIVITIES} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminMarketingPage;
