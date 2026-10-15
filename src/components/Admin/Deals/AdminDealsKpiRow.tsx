import React from 'react';
import { Tag, TrendingUp, CheckCircle2, Wallet, Percent, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { ADMIN_DEAL_KPIS } from '../../../data/adminDealsData';

const iconMap: Record<string, React.ElementType> = {
  Tag,
  TrendingUp,
  CheckCircle2,
  Wallet,
  Percent
};

export const AdminDealsKpiRow: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
      {ADMIN_DEAL_KPIS.map((kpi) => {
        const Icon = iconMap[kpi.iconName] || Tag;

        return (
          <div
            key={kpi.id}
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-[#d4af37]/40 dark:hover:border-[#d4af37]/30 transition-all duration-200 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Icon className="w-4 h-4" />
              </div>
              <span
                className={`inline-flex items-center gap-0.5 text-[11px] font-bold px-2 py-0.5 rounded-full ${
                  kpi.isPositive
                    ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/40'
                    : 'bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-200/60 dark:border-rose-800/40'
                }`}
              >
                {kpi.isPositive ? (
                  <ArrowUpRight className="w-3 h-3" />
                ) : (
                  <ArrowDownRight className="w-3 h-3" />
                )}
                {kpi.change}
              </span>
            </div>

            <div>
              <div className="text-xl font-bold font-sans text-slate-900 dark:text-white tracking-tight">
                {kpi.value}
              </div>
              <h3 className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
                {kpi.title}
              </h3>
              <p className="text-[10px] text-slate-400 mt-1 line-clamp-1">
                {kpi.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
