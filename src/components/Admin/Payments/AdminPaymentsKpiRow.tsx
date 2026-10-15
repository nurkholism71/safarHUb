import React from 'react';
import { Wallet, CreditCard, ShoppingBag, RotateCcw, ArrowUpRight } from 'lucide-react';
import { ADMIN_PAYMENT_KPIS } from '../../../data/adminPaymentsData';

const iconMap: Record<string, React.ElementType> = {
  Wallet,
  CreditCard,
  ShoppingBag,
  RotateCcw,
  ArrowUpRight
};

export const AdminPaymentsKpiRow: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
      {ADMIN_PAYMENT_KPIS.map((kpi) => {
        const Icon = iconMap[kpi.iconName] || Wallet;

        return (
          <div
            key={kpi.id}
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-[#00A651]/40 dark:hover:border-[#00A651]/30 transition-all duration-200 flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${kpi.bgColorClass || 'bg-slate-100 dark:bg-slate-800 text-slate-700'}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {kpi.title}
                </div>
                <div className="text-xl font-bold font-sans text-slate-900 dark:text-white tracking-tight mt-0.5">
                  {kpi.value}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1">
                  <span className={`font-semibold ${kpi.isPositive ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                    {kpi.change}
                  </span>
                  <span>{kpi.subtitle}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
