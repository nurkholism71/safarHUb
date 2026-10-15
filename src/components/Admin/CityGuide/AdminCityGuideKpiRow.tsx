import React from 'react';
import { Building2, Compass, Utensils, Users, ShieldCheck, TrendingUp } from 'lucide-react';
import { ADMIN_CITY_KPIS } from '../../../data/adminCityGuideData';

interface AdminCityGuideKpiRowProps {
  onSelectKpi?: (kpiId: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Compass,
  Utensils,
  Users,
  ShieldCheck
};

export const AdminCityGuideKpiRow: React.FC<AdminCityGuideKpiRowProps> = ({
  onSelectKpi
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
      {ADMIN_CITY_KPIS.map((kpi) => {
        const Icon = iconMap[kpi.iconName] || Building2;
        return (
          <div
            key={kpi.id}
            onClick={() => onSelectKpi?.(kpi.id)}
            className="group cursor-pointer bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-emerald-500/40 transition-all duration-200 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {kpi.title}
              </span>
              <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-700 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                <Icon className="w-4 h-4" />
              </div>
            </div>

            <div className="my-2">
              <div className="text-xl font-extrabold text-slate-900 dark:text-white">
                {kpi.value}
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] pt-1.5 border-t border-slate-100 dark:border-slate-800">
              <span className="text-slate-400 dark:text-slate-500 truncate max-w-[110px]">
                {kpi.subtitle}
              </span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
                <TrendingUp className="w-3 h-3" />
                {kpi.change}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
