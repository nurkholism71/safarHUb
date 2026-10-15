import React from 'react';
import {
  Plane,
  Calendar,
  CreditCard,
  Users,
  Star
} from 'lucide-react';
import { ADMIN_TRANSPORT_KPIS } from '../../../data/adminTransportData';

interface AdminTransportKpiRowProps {
  onSelectKpi?: (id: string) => void;
}

export const AdminTransportKpiRow: React.FC<AdminTransportKpiRowProps> = ({
  onSelectKpi
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Plane':
        return Plane;
      case 'Calendar':
        return Calendar;
      case 'CreditCard':
        return CreditCard;
      case 'Users':
        return Users;
      case 'Star':
        return Star;
      default:
        return Plane;
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-3.5 mb-6">
      {ADMIN_TRANSPORT_KPIS.map((kpi) => {
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
              <div className="text-[11px] font-semibold text-emerald-600 mt-0.5 truncate">
                {kpi.badgeText}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
