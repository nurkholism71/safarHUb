import React from 'react';
import {
  Globe,
  Compass,
  CreditCard,
  Calendar,
  Clock,
  ChevronRight
} from 'lucide-react';
import { LANGUAGE_REGION_ITEMS } from '../../data/settingsData';

interface LanguageRegionSettingsCardProps {
  onSelectOption?: (optionId: string, title: string) => void;
}

export const LanguageRegionSettingsCard: React.FC<LanguageRegionSettingsCardProps> = ({
  onSelectOption
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-4 h-4 text-emerald-600" />;
      case 'Compass':
        return <Compass className="w-4 h-4 text-emerald-600" />;
      case 'CreditCard':
        return <CreditCard className="w-4 h-4 text-emerald-600" />;
      case 'Calendar':
        return <Calendar className="w-4 h-4 text-emerald-600" />;
      case 'Clock':
        return <Clock className="w-4 h-4 text-emerald-600" />;
      default:
        return <Globe className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 mb-3.5">
          <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Globe className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Language & Region
            </h3>
            <p className="text-[11px] text-slate-500">
              Set your language, currency, and regional preferences.
            </p>
          </div>
        </div>

        <div className="space-y-1 text-xs">
          {LANGUAGE_REGION_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectOption?.(item.id, item.title)}
              className="w-full flex items-center justify-between p-2.5 rounded-2xl hover:bg-slate-50 transition-colors group text-left"
            >
              <span className="flex items-center gap-3 font-semibold text-slate-700 group-hover:text-emerald-900 min-w-0">
                {getIcon(item.icon)}
                <span className="truncate">{item.title}</span>
              </span>

              <div className="flex items-center gap-2 shrink-0 ml-2">
                <span className="text-slate-500 text-[11px] font-medium truncate max-w-[150px]">
                  {item.value}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
