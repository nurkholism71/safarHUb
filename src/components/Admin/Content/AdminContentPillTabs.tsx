import React from 'react';
import { FileText, BookOpen, Image, Layout, HelpCircle, Tag } from 'lucide-react';
import { ContentTab } from '../../../types/adminContent';

interface AdminContentPillTabsProps {
  activeTab: ContentTab;
  onTabChange: (tab: ContentTab) => void;
}

const TABS: { id: ContentTab; label: string; icon: React.FC<{ className?: string }> }[] = [
  { id: 'articles', label: 'Articles & Blogs', icon: FileText },
  { id: 'guides', label: 'Pilgrim & City Guides', icon: BookOpen },
  { id: 'media', label: 'Media Assets Library', icon: Image },
  { id: 'banners', label: 'Promotional Banners', icon: Layout },
  { id: 'faq', label: 'Interactive FAQs', icon: HelpCircle }
];

export const AdminContentPillTabs: React.FC<AdminContentPillTabsProps> = ({
  activeTab,
  onTabChange
}) => {
  return (
    <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth p-2 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200/80 dark:border-neutral-700 shadow-sm">
      {TABS.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-[#0e5f2c] text-white shadow-sm shadow-emerald-900/20'
                : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700/60'
            }`}
          >
            <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-neutral-400'}`} />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};
