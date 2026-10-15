import React from 'react';
import {
  CalendarCheck,
  Building2,
  Bus,
  PlaneTakeoff,
  ShoppingBag,
  MoonStar,
  CreditCard,
  FileCheck,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { HELP_CATEGORIES } from '../../data/supportData';
import { HelpCategoryItem } from '../../types/support';

interface HelpCategoriesGridProps {
  onSelectCategory?: (category: HelpCategoryItem) => void;
  onViewAll?: () => void;
}

export const HelpCategoriesGrid: React.FC<HelpCategoriesGridProps> = ({
  onSelectCategory,
  onViewAll
}) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'CalendarCheck':
        return <CalendarCheck className="w-5 h-5 text-emerald-700" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-emerald-700" />;
      case 'Bus':
        return <Bus className="w-5 h-5 text-emerald-700" />;
      case 'PlaneTakeoff':
        return <PlaneTakeoff className="w-5 h-5 text-sky-700" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-amber-700" />;
      case 'MoonStar':
        return <MoonStar className="w-5 h-5 text-emerald-700" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5 text-emerald-700" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-indigo-700" />;
      default:
        return <CalendarCheck className="w-5 h-5 text-emerald-700" />;
    }
  };

  const getIconBg = (iconName: string) => {
    switch (iconName) {
      case 'CalendarCheck':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Building2':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Bus':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'PlaneTakeoff':
        return 'bg-sky-50 text-sky-700 border-sky-200';
      case 'ShoppingBag':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'MoonStar':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'CreditCard':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'FileCheck':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Help Categories
          </h3>
          <p className="text-xs text-slate-500">
            Browse knowledge base articles and guides by service
          </p>
        </div>
        <button
          onClick={onViewAll}
          className="text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline flex items-center gap-1"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {HELP_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory?.(cat)}
            className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-emerald-50/60 hover:border-emerald-300 hover:shadow-2xs transition-all text-left group"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div
                className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${getIconBg(
                  cat.icon
                )} group-hover:scale-105 transition-transform`}
              >
                {getCategoryIcon(cat.icon)}
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-slate-800 group-hover:text-emerald-900 truncate">
                  {cat.title}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                  {cat.description}
                </p>
              </div>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
          </button>
        ))}
      </div>
    </div>
  );
};
