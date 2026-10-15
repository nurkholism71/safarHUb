import React from 'react';
import { Calendar, Download, ChevronDown } from 'lucide-react';
import { MarketingTab } from '../../../types/adminMarketing';

interface AdminMarketingPillTabsProps {
  activeTab: MarketingTab;
  onTabChange: (tab: MarketingTab) => void;
  dateRangeText?: string;
  onExportReport?: () => void;
}

const TABS: { id: MarketingTab; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'campaigns', label: 'Campaigns' },
  { id: 'content', label: 'Content' },
  { id: 'social', label: 'Social Media' },
  { id: 'email', label: 'Email Marketing' },
  { id: 'ads', label: 'Ads' },
  { id: 'seo', label: 'SEO' },
  { id: 'influencer', label: 'Influencer' },
  { id: 'loyalty', label: 'Loyalty' },
  { id: 'automation', label: 'Automation' },
  { id: 'reports', label: 'Reports' }
];

export const AdminMarketingPillTabs: React.FC<AdminMarketingPillTabsProps> = ({
  activeTab,
  onTabChange,
  dateRangeText = '1 Oct 2026 - 31 Oct 2026',
  onExportReport
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 bg-white dark:bg-neutral-800 p-2.5 rounded-2xl border border-neutral-200/80 dark:border-neutral-700 shadow-sm">
      {/* Scrollable Pill Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth py-0.5">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                isActive
                  ? 'bg-[#0e5f2c] text-white shadow-sm shadow-emerald-900/20'
                  : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700/60'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Date Range Selector & Export Controls */}
      <div className="flex items-center gap-2 self-end lg:self-center shrink-0">
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 bg-neutral-50/50 dark:bg-neutral-800/80 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">
          <Calendar className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
          <span>{dateRangeText}</span>
          <ChevronDown className="w-3 h-3 text-neutral-400" />
        </button>

        <button
          onClick={onExportReport}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
          title="Export Marketing Report"
        >
          <Download className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Export</span>
        </button>
      </div>
    </div>
  );
};
