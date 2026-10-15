import React from 'react';
import {
  Layers,
  Zap,
  Moon,
  Building,
  Plane,
  Train,
  Compass,
  ShoppingBag
} from 'lucide-react';
import { ADMIN_DEAL_CATEGORY_FILTERS } from '../../../data/adminDealsData';

interface AdminDealsCategoryStripProps {
  activeCategory: string;
  onSelectCategory: (catId: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Layers,
  Zap,
  Moon,
  Building,
  Plane,
  Train,
  Compass,
  ShoppingBag
};

export const AdminDealsCategoryStrip: React.FC<AdminDealsCategoryStripProps> = ({
  activeCategory,
  onSelectCategory
}) => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-0.5">
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 min-w-[700px]">
        {ADMIN_DEAL_CATEGORY_FILTERS.map((item) => {
          const Icon = iconMap[item.iconName] || Layers;
          const isActive = activeCategory === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onSelectCategory(item.id)}
              className={`text-left p-3 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-[#082218] text-white border-[#d4af37]/40 shadow-sm ring-1 ring-[#d4af37]/30'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/80'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                    isActive
                      ? 'bg-[#d4af37]/20 text-[#d4af37]'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                    isActive
                      ? 'bg-white/10 text-emerald-300'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                  }`}
                >
                  {item.activeDealsCount} Deals
                </span>
              </div>

              <div>
                <h4
                  className={`text-xs font-bold leading-tight line-clamp-1 ${
                    isActive ? 'text-white' : 'text-slate-900 dark:text-white'
                  }`}
                >
                  {item.name}
                </h4>
                <p
                  className={`text-[10px] mt-0.5 ${
                    isActive ? 'text-emerald-300 font-medium' : 'text-slate-400'
                  }`}
                >
                  {item.totalRedemptions} redeemed
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
