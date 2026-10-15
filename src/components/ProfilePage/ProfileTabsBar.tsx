import React from 'react';
import { PROFILE_NAV_TABS } from '../../data/profileData';

interface ProfileTabsBarProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
}

export const ProfileTabsBar: React.FC<ProfileTabsBarProps> = ({
  activeTab,
  onSelectTab
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-2 shadow-xs flex items-center gap-1.5 overflow-x-auto no-scrollbar">
      {PROFILE_NAV_TABS.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onSelectTab(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              isActive
                ? 'bg-emerald-100 text-emerald-900 border border-emerald-300 shadow-2xs font-extrabold'
                : 'text-slate-600 hover:bg-slate-50 hover:text-emerald-900'
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};
