import React from 'react';
import {
  Key,
  ShieldCheck,
  Monitor,
  Smartphone,
  Ban,
  ChevronRight,
  Lock
} from 'lucide-react';
import { SECURITY_SETTINGS_ITEMS } from '../../data/settingsData';

interface SecuritySettingsCardProps {
  onSelectSecurityItem?: (itemId: string, title: string) => void;
}

export const SecuritySettingsCard: React.FC<SecuritySettingsCardProps> = ({
  onSelectSecurityItem
}) => {
  const getSecurityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Key':
        return <Key className="w-4 h-4 text-slate-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-emerald-600" />;
      case 'Monitor':
        return <Monitor className="w-4 h-4 text-slate-500" />;
      case 'Smartphone':
        return <Smartphone className="w-4 h-4 text-slate-500" />;
      case 'Ban':
        return <Ban className="w-4 h-4 text-slate-500" />;
      default:
        return <Lock className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 mb-3.5">
          <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
            <Lock className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Security Settings
            </h3>
            <p className="text-[11px] text-slate-500">
              Keep your account safe and secure.
            </p>
          </div>
        </div>

        <div className="space-y-1 text-xs">
          {SECURITY_SETTINGS_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectSecurityItem?.(item.id, item.title)}
              className="w-full flex items-center justify-between p-2.5 rounded-2xl hover:bg-slate-50 transition-colors group"
            >
              <span className="flex items-center gap-3 font-semibold text-slate-700 group-hover:text-emerald-900">
                {getSecurityIcon(item.icon)}
                <span>{item.title}</span>
              </span>

              <div className="flex items-center gap-2">
                {item.badge && (
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {item.badge}
                  </span>
                )}
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
