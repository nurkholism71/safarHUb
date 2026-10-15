import React from 'react';
import {
  Compass,
  Landmark,
  Utensils,
  Bus,
  ShoppingBag,
  MoonStar,
  Info,
  MapPin
} from 'lucide-react';
import { CITY_FILTER_TABS } from '../../data/cityGuideData';

interface CityGuideFilterTabsProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
}

export const CityGuideFilterTabs: React.FC<CityGuideFilterTabsProps> = ({
  activeTab,
  onSelectTab
}) => {
  const getTabIcon = (iconName: string, isActive: boolean) => {
    const iconClass = `w-4 h-4 ${isActive ? 'text-emerald-800 font-bold' : 'text-slate-400 group-hover:text-emerald-700'}`;
    switch (iconName) {
      case 'Compass':
        return <Compass className={iconClass} />;
      case 'Landmark':
        return <Landmark className={iconClass} />;
      case 'Utensils':
        return <Utensils className={iconClass} />;
      case 'Bus':
        return <Bus className={iconClass} />;
      case 'ShoppingBag':
        return <ShoppingBag className={iconClass} />;
      case 'MoonStar':
        return <MoonStar className={iconClass} />;
      case 'Info':
        return <Info className={iconClass} />;
      case 'MapPin':
        return <MapPin className={iconClass} />;
      default:
        return <Compass className={iconClass} />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-2 shadow-xs flex items-center gap-1.5 overflow-x-auto no-scrollbar">
      {CITY_FILTER_TABS.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onSelectTab(tab.id)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all group ${
              isActive
                ? 'bg-emerald-100 text-emerald-900 border border-emerald-300 shadow-2xs font-extrabold'
                : 'text-slate-600 hover:bg-slate-50 hover:text-emerald-900'
            }`}
          >
            {getTabIcon(tab.icon, isActive)}
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};
