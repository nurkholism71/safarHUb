import React from 'react';
import {
  Building2,
  PlaneTakeoff,
  Bus,
  ShoppingBag,
  MoonStar,
  Compass,
  MapPin,
  CalendarPlus,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { QUICK_ACTIONS } from '../data/mockData';

interface QuickActionsProps {
  onActionClick: (actionId: string, title: string) => void;
  onViewAll?: () => void;
}

export const QuickActions: React.FC<QuickActionsProps> = ({
  onActionClick,
  onViewAll,
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Building2':
        return Building2;
      case 'PlaneTakeoff':
        return PlaneTakeoff;
      case 'Bus':
        return Bus;
      case 'ShoppingBag':
        return ShoppingBag;
      case 'MoonStar':
        return MoonStar;
      case 'Compass':
        return Compass;
      case 'MapPin':
        return MapPin;
      case 'CalendarPlus':
      default:
        return CalendarPlus;
    }
  };

  return (
    <div className="mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif">Quick Actions</h2>
        </div>
        <button
          onClick={onViewAll}
          className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors group"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* 8 Action Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {QUICK_ACTIONS.map((action) => {
          const Icon = getIcon(action.icon);
          return (
            <button
              key={action.id}
              onClick={() => onActionClick(action.id, action.title)}
              className="flex flex-col items-center text-center p-3 sm:p-3.5 bg-white border border-slate-200/90 rounded-2xl shadow-2xs hover:shadow-md hover:-translate-y-1 hover:border-emerald-600/40 transition-all duration-200 group relative"
            >
              {action.badge && (
                <span className="absolute top-2 right-2 px-1.5 py-0.5 text-[9px] font-bold text-amber-900 bg-amber-200/90 rounded-full scale-90">
                  {action.badge}
                </span>
              )}

              {/* Colorful Icon Container */}
              <div
                className={`flex items-center justify-center w-11 h-11 rounded-2xl ${action.bg} ${action.iconColor} ${action.border} border mb-2.5 group-hover:scale-110 transition-transform`}
              >
                <Icon className="w-5 h-5" />
              </div>

              {/* Title & Description */}
              <h3 className="text-xs font-bold text-slate-800 group-hover:text-emerald-900 leading-tight mb-1 text-center line-clamp-2 min-h-[1.85rem] flex items-center justify-center">
                {action.title}
              </h3>
              <p className="text-[10px] text-slate-500 line-clamp-2 leading-tight text-center">
                {action.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};
