import React, { useState, useEffect } from 'react';
import { AdminReviewsHeader } from './AdminReviewsHeader';
import { AdminReviewsPillTabs } from './AdminReviewsPillTabs';
import { AdminReviewsKpiRow } from './AdminReviewsKpiRow';
import { AdminReviewsSummaryCard } from './AdminReviewsSummaryCard';
import { AdminReviewsTable } from './AdminReviewsTable';

import {
  REVIEW_KPIS,
  RATING_DISTRIBUTION,
  SERVICE_RATING_SCORES,
  REVIEWS_DB
} from '../../../data/adminReviewsData';
import { ReviewTab } from '../../../types/adminReviews';

interface AdminReviewsPageProps {
  initialTab?: string;
  onOpenActionModal?: (id: string, title: string) => void;
}

export const AdminReviewsPage: React.FC<AdminReviewsPageProps> = ({
  initialTab = 'reviews',
  onOpenActionModal
}) => {
  const mapRouteToTab = (route: string): ReviewTab => {
    if (route === 'reviews-hotels') return 'hotels';
    if (route === 'reviews-umrah') return 'umrah';
    if (route === 'reviews-transport') return 'transport';
    if (route === 'reviews-airport') return 'airport';
    if (route === 'reviews-experiences') return 'experiences';
    if (route === 'reviews-disputed') return 'disputed';
    return 'all';
  };

  const [activeTab, setActiveTab] = useState<ReviewTab>(mapRouteToTab(initialTab));

  useEffect(() => {
    setActiveTab(mapRouteToTab(initialTab));
  }, [initialTab]);

  const handleExportReviews = () => {
    if (onOpenActionModal) {
      onOpenActionModal('admin-export-reviews', 'Export Reviews & Sentiment Report (CSV / PDF)');
    } else {
      alert('Exporting Reviews Report CSV...');
    }
  };

  const handleModerationQueue = () => {
    if (onOpenActionModal) {
      onOpenActionModal('admin-moderate-reviews', 'Pilgrim Review Moderation Queue');
    } else {
      alert('Open Moderation Queue');
    }
  };

  // Filter reviews by active service tab
  const getFilteredReviews = () => {
    if (activeTab === 'hotels') return REVIEWS_DB.filter((r) => r.serviceType === 'Hotels');
    if (activeTab === 'umrah') return REVIEWS_DB.filter((r) => r.serviceType === 'Umrah Packages');
    if (activeTab === 'transport') return REVIEWS_DB.filter((r) => r.serviceType === 'Transport');
    if (activeTab === 'airport') return REVIEWS_DB.filter((r) => r.serviceType === 'Airport Services');
    if (activeTab === 'experiences') return REVIEWS_DB.filter((r) => r.serviceType === 'Experiences');
    if (activeTab === 'disputed') return REVIEWS_DB.filter((r) => r.status === 'Disputed');
    return REVIEWS_DB;
  };

  return (
    <div className="space-y-6 pb-12">
      {/* 1. Panoramic Header */}
      <AdminReviewsHeader
        onExportReviews={handleExportReviews}
        onModerationQueue={handleModerationQueue}
      />

      {/* 2. Service Navigation Pill Tabs */}
      <AdminReviewsPillTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* 3. 6 KPI Metric Stat Cards */}
      <AdminReviewsKpiRow kpis={REVIEW_KPIS} />

      {/* 4. Rating Distribution & Service Scores Breakdown */}
      <AdminReviewsSummaryCard
        ratingDistribution={RATING_DISTRIBUTION}
        serviceScores={SERVICE_RATING_SCORES}
      />

      {/* 5. Verified Pilgrim Reviews & Response Table */}
      <AdminReviewsTable
        reviews={getFilteredReviews()}
        onReplyReview={(id) => {
          if (onOpenActionModal) {
            onOpenActionModal(`admin-reply-review-${id}`, `Official Response to Review #${id}`);
          } else {
            alert(`Replying to Review #${id}`);
          }
        }}
      />
    </div>
  );
};

export default AdminReviewsPage;
