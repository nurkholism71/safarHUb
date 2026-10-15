import React from 'react';
import {
  User,
  Building2,
  CalendarCheck,
  CreditCard,
  Bell,
  ShieldCheck,
  Share2,
  Palette,
  Globe,
  Server,
  Users
} from 'lucide-react';
import { SettingsTab } from '../../../types/adminSettings';

interface AdminSettingsPillTabsProps {
  activeTab: SettingsTab;
  onTabChange: (tab: SettingsTab) => void;
}

const TABS: { id: SettingsTab; label: string; icon: React.FC<{ className?: string }> }[] = [
  { id: 'account', label: 'Account', icon: User },
  { id: 'business', label: 'Business', icon: Building2 },
  { id: 'team', label: 'Users & Team', icon: Users },
  { id: 'booking', label: 'Booking', icon: CalendarCheck },
  { id: 'payments', label: 'Payments', icon: CreditCard },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security', label: 'Security', icon: ShieldCheck },
  { id: 'integrations', label: 'Integrations', icon: Share2 },
  { id: 'appearance', label: 'Appearance', icon: Palette },
  { id: 'language', label: 'Language', icon: Globe },
  { id: 'system', label: 'System', icon: Server }
];

export const AdminSettingsPillTabs: React.FC<AdminSettingsPillTabsProps> = ({
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
