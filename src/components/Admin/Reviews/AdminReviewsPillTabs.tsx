import React from 'react';
import { Star, Building2, Luggage, Car, Plane, Compass, AlertTriangle } from 'lucide-react';
import { ReviewTab } from '../../../types/adminReviews';

interface AdminReviewsPillTabsProps {
  activeTab: ReviewTab;
  onTabChange: (tab: ReviewTab) => void;
}

const TABS: { id: ReviewTab; label: string; icon: React.FC<{ className?: string }> }[] = [
  { id: 'all', label: 'All Reviews', icon: Star },
  { id: 'hotels', label: 'Hotels & Suites', icon: Building2 },
  { id: 'umrah', label: 'Umrah Packages', icon: Luggage },
  { id: 'transport', label: 'VIP Transport', icon: Car },
  { id: 'airport', label: 'Airport Services', icon: Plane },
  { id: 'experiences', label: 'AlUla & Experiences', icon: Compass },
  { id: 'disputed', label: 'Flagged / Moderation', icon: AlertTriangle }
];

export const AdminReviewsPillTabs: React.FC<AdminReviewsPillTabsProps> = ({
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
