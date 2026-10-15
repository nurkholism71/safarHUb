import React from 'react';
import {
  CalendarCheck,
  Building2,
  Car,
  Plane,
  ShoppingBag,
  Users,
  TrendingUp,
  ArrowUpRight
} from 'lucide-react';
import { METRIC_CARDS } from '../data/mockData';

interface MetricsGridProps {
  onSelectMetric?: (metricId: string) => void;
}

export const MetricsGrid: React.FC<MetricsGridProps> = ({ onSelectMetric }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'CalendarCheck':
        return CalendarCheck;
      case 'Building2':
        return Building2;
      case 'Car':
        return Car;
      case 'Plane':
        return Plane;
      case 'ShoppingBag':
        return ShoppingBag;
      case 'Users':
      default:
        return Users;
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4 mb-8">
      {METRIC_CARDS.map((card) => {
        const IconComponent = getIcon(card.icon);
        return (
          <div
            key={card.id}
            onClick={() => onSelectMetric && onSelectMetric(card.id)}
            className="group relative p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer overflow-hidden"
          >
            {/* Top row: Icon */}
            <div className="flex items-center justify-between mb-2.5">
              <div className={`flex items-center justify-center w-8 h-8 rounded-xl ${card.bgColor} text-white shadow-xs`}>
                <IconComponent className="w-4 h-4" />
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-emerald-700 transition-colors" />
            </div>

            {/* Title & Big Number */}
            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-tight truncate">
              {card.title}
            </div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 font-serif my-0.5">
              {card.value}
            </div>

            {/* Growth indicator */}
            <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600">
              <TrendingUp className="w-3 h-3" />
              <span>{card.growth}</span>
            </div>

            {/* Subtle background glow on hover */}
            <div className="absolute -right-6 -bottom-6 w-16 h-16 bg-slate-50 rounded-full group-hover:bg-emerald-50/50 transition-colors -z-10"></div>
          </div>
        );
      })}
    </div>
  );
};
