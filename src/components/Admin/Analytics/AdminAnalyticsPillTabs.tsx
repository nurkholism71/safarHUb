import React from 'react';
import { 
  BarChart3, 
  Calendar, 
  Coins, 
  Users, 
  Layers, 
  MapPin, 
  Megaphone, 
  Sparkles, 
  Settings2, 
  CreditCard, 
  Download 
} from 'lucide-react';
import { AnalyticsTab } from '../../../types/adminAnalytics';

interface AdminAnalyticsPillTabsProps {
  activeTab: AnalyticsTab;
  onSelectTab: (tab: AnalyticsTab) => void;
}

export const AdminAnalyticsPillTabs: React.FC<AdminAnalyticsPillTabsProps> = ({
  activeTab,
  onSelectTab
}) => {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'bookings', label: 'Bookings', icon: Calendar },
    { id: 'revenue', label: 'Revenue', icon: Coins },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'services', label: 'Services', icon: Layers },
    { id: 'destinations', label: 'Destinations', icon: MapPin },
    { id: 'marketing', label: 'Marketing', icon: Megaphone },
    { id: 'insights', label: 'Customer Insights', icon: Sparkles },
    { id: 'operations', label: 'Operations', icon: Settings2 },
    { id: 'financial', label: 'Financial', icon: CreditCard },
    { id: 'export', label: 'Export', icon: Download }
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onSelectTab(tab.id as AnalyticsTab)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer shrink-0 border ${
              isActive
                ? 'bg-[#0e5f2c] text-white border-[#0e5f2c] shadow-sm shadow-[#0e5f2c]/20'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200/80 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80'
            }`}
          >
            <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#d4af37]' : 'text-slate-400'}`} />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};
