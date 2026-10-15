import React from 'react';
import {
  Users,
  CalendarCheck,
  CreditCard,
  Building2,
  Car,
  Star,
  TrendingUp,
  ArrowUp
} from 'lucide-react';
import { ADMIN_KPIS } from '../../data/adminData';

interface AdminKpiGridProps {
  onSelectKpi?: (id: string) => void;
}

export const AdminKpiGrid: React.FC<AdminKpiGridProps> = ({ onSelectKpi }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Users':
        return Users;
      case 'CalendarCheck':
        return CalendarCheck;
      case 'CreditCard':
        return CreditCard;
      case 'Building2':
        return Building2;
      case 'Car':
        return Car;
      case 'Star':
        return Star;
      default:
        return TrendingUp;
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3.5 mb-6">
      {ADMIN_KPIS.map((kpi) => {
        const IconComponent = getIcon(kpi.iconName);

        return (
          <div
            key={kpi.id}
            onClick={() => onSelectKpi && onSelectKpi(kpi.id)}
            className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/90 shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center gap-3 group hover:border-[#0e5f2c]/40"
          >
            {/* Left Icon Square */}
            <div
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${kpi.bgColor} flex items-center justify-center ${kpi.iconColor} flex-shrink-0 group-hover:scale-105 transition-transform shadow-xs`}
            >
              <IconComponent className="w-5 h-5" />
            </div>

            {/* Right Metric Details */}
            <div className="min-w-0 flex-1">
              <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-wider truncate">
                {kpi.title}
              </div>
              <div className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-tight truncate mt-0.5">
                {kpi.value}
              </div>
              <div className="flex items-center gap-0.5 text-[11px] font-bold text-emerald-600 mt-0.5">
                <ArrowUp className="w-3 h-3 stroke-[2.5]" />
                <span>{kpi.change.replace('+', '')}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
