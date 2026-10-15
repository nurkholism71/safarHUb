import React, { useState, useEffect } from 'react';
import { AdminContentHeader } from './AdminContentHeader';
import { AdminContentPillTabs } from './AdminContentPillTabs';
import { AdminContentKpiRow } from './AdminContentKpiRow';
import { AdminContentArticlesTable } from './AdminContentArticlesTable';
import { AdminContentGuidesTable } from './AdminContentGuidesTable';
import { AdminContentMediaLibrary } from './AdminContentMediaLibrary';
import { AdminContentBannersTable } from './AdminContentBannersTable';
import { AdminContentFaqTable } from './AdminContentFaqTable';

import {
  CONTENT_KPIS,
  CONTENT_ARTICLES_DB,
  CONTENT_GUIDES_DB,
  CONTENT_MEDIA_DB,
  CONTENT_BANNERS_DB,
  CONTENT_FAQS_DB
} from '../../../data/adminContentData';
import { ContentTab } from '../../../types/adminContent';

interface AdminContentPageProps {
  initialTab?: string;
  onOpenActionModal?: (id: string, title: string) => void;
}

export const AdminContentPage: React.FC<AdminContentPageProps> = ({
  initialTab = 'content',
  onOpenActionModal
}) => {
  const mapRouteToTab = (route: string): ContentTab => {
    if (route === 'content-guides') return 'guides';
    if (route === 'content-media') return 'media';
    if (route === 'content-banners') return 'banners';
    if (route === 'content-faq') return 'faq';
    return 'articles';
  };

  const [activeTab, setActiveTab] = useState<ContentTab>(mapRouteToTab(initialTab));

  useEffect(() => {
    setActiveTab(mapRouteToTab(initialTab));
  }, [initialTab]);

  const handleNewArticle = () => {
    if (onOpenActionModal) {
      onOpenActionModal('admin-new-article', 'Write & Publish New Article');
    } else {
      alert('Write New Article Modal');
    }
  };

  const handleUploadMedia = () => {
    if (onOpenActionModal) {
      onOpenActionModal('admin-upload-media', 'Upload Media Assets to CDN');
    } else {
      alert('Upload Media Modal');
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* 1. Panoramic Header */}
      <AdminContentHeader
        onNewArticle={handleNewArticle}
        onUploadMedia={handleUploadMedia}
      />

      {/* 2. Top Pill Navigation Tabs */}
      <AdminContentPillTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* 3. 6 KPI Metric Stat Cards */}
      <AdminContentKpiRow kpis={CONTENT_KPIS} />

      {/* 4. Tab Views / Databases */}
      {activeTab === 'guides' ? (
        <AdminContentGuidesTable
          guides={CONTENT_GUIDES_DB}
          onNewGuide={() => alert('Create Guide Modal')}
        />
      ) : activeTab === 'media' ? (
        <AdminContentMediaLibrary
          mediaAssets={CONTENT_MEDIA_DB}
          onUpload={handleUploadMedia}
        />
      ) : activeTab === 'banners' ? (
        <AdminContentBannersTable
          banners={CONTENT_BANNERS_DB}
          onNewBanner={() => alert('New Banner Modal')}
        />
      ) : activeTab === 'faq' ? (
        <AdminContentFaqTable
          faqs={CONTENT_FAQS_DB}
          onNewFaq={() => alert('New FAQ Modal')}
        />
      ) : (
        <AdminContentArticlesTable
          articles={CONTENT_ARTICLES_DB}
          onNewArticle={handleNewArticle}
          onOpenArticle={(art) => alert(`Opening Article: ${art.title}`)}
        />
      )}
    </div>
  );
};

export default AdminContentPage;
