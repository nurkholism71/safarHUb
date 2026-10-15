import React from 'react';
import {
  ShoppingBag,
  Clock,
  CheckCircle2,
  XCircle,
  CreditCard
} from 'lucide-react';
import { ADMIN_JASTIP_KPIS } from '../../../data/adminJastipData';

interface AdminJastipKpiRowProps {
  onSelectKpi?: (kpiId: string) => void;
}

export const AdminJastipKpiRow: React.FC<AdminJastipKpiRowProps> = ({
  onSelectKpi
}) => {
  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'ShoppingBag':
        return <ShoppingBag className={className} />;
      case 'Clock':
        return <Clock className={className} />;
      case 'CheckCircle2':
        return <CheckCircle2 className={className} />;
      case 'XCircle':
        return <XCircle className={className} />;
      case 'CreditCard':
        return <CreditCard className={className} />;
      default:
        return <ShoppingBag className={className} />;
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
      {ADMIN_JASTIP_KPIS.map((kpi) => (
        <div
          key={kpi.id}
          onClick={() => onSelectKpi && onSelectKpi(kpi.id)}
          className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer group flex items-center justify-between"
        >
          <div className="space-y-1">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
              {kpi.title}
            </span>
            <div className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              {kpi.value}
            </div>
            <div
              className={`text-[10px] font-semibold flex items-center gap-1 ${
                kpi.id === 'cancelled'
                  ? 'text-rose-600'
                  : kpi.id === 'on-process'
                  ? 'text-amber-600'
                  : 'text-emerald-700'
              }`}
            >
              {kpi.badgeText}
            </div>
          </div>

          <div
            className={`w-10 h-10 rounded-xl ${kpi.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}
          >
            {getIcon(kpi.iconName, `w-5 h-5 ${kpi.iconColor}`)}
          </div>
        </div>
      ))}
    </div>
  );
};
