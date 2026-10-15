import React from 'react';
import {
  User,
  ShieldCheck,
  Bell,
  Plane,
  CreditCard,
  Globe,
  Lock,
  Headphones
} from 'lucide-react';
import { SETTINGS_TABS } from '../../data/settingsData';

interface SettingsTabsBarProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
}

export const SettingsTabsBar: React.FC<SettingsTabsBarProps> = ({
  activeTab,
  onSelectTab
}) => {
  const getTabIcon = (iconName: string, isActive: boolean) => {
    const iconClass = `w-4 h-4 ${isActive ? 'text-emerald-800' : 'text-slate-500 group-hover:text-emerald-700'}`;
    switch (iconName) {
      case 'User':
        return <User className={iconClass} />;
      case 'ShieldCheck':
        return <ShieldCheck className={iconClass} />;
      case 'Bell':
        return <Bell className={iconClass} />;
      case 'Plane':
        return <Plane className={iconClass} />;
      case 'CreditCard':
        return <CreditCard className={iconClass} />;
      case 'Globe':
        return <Globe className={iconClass} />;
      case 'Lock':
        return <Lock className={iconClass} />;
      case 'Headphones':
        return <Headphones className={iconClass} />;
      default:
        return <User className={iconClass} />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-2 shadow-xs flex items-center gap-1.5 overflow-x-auto no-scrollbar">
      {SETTINGS_TABS.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onSelectTab(tab.id)}
            className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all group ${
              isActive
                ? 'bg-emerald-100 text-emerald-900 border border-emerald-300 shadow-2xs font-extrabold'
                : 'text-slate-600 hover:bg-slate-50 hover:text-emerald-900'
            }`}
          >
            {getTabIcon(tab.icon, isActive)}
            <span>{tab.label}</span>
            {tab.hasBadge && (
              <span className="w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white"></span>
            )}
          </button>
        );
      })}
    </div>
  );
};
