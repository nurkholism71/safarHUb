import React from 'react';
import {
  Gift,
  Building2,
  Bus,
  PlaneTakeoff,
  MoonStar,
  ShoppingBag,
  Mountain,
  Castle,
  Utensils,
  MoreHorizontal
} from 'lucide-react';
import { DEALS_CATEGORIES } from '../../data/dealsData';

interface DealsCategoryChipsProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const DealsCategoryChips: React.FC<DealsCategoryChipsProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  const getCategoryIcon = (iconName: string, isSelected: boolean) => {
    const iconClass = `w-4 h-4 ${isSelected ? 'text-emerald-800' : 'text-slate-500 group-hover:text-emerald-700'}`;
    switch (iconName) {
      case 'Gift':
        return <Gift className={iconClass} />;
      case 'Building2':
        return <Building2 className={iconClass} />;
      case 'Bus':
        return <Bus className={iconClass} />;
      case 'PlaneTakeoff':
        return <PlaneTakeoff className={iconClass} />;
      case 'MoonStar':
        return <MoonStar className={iconClass} />;
      case 'ShoppingBag':
        return <ShoppingBag className={iconClass} />;
      case 'Mountain':
        return <Mountain className={iconClass} />;
      case 'Castle':
        return <Castle className={iconClass} />;
      case 'Utensils':
        return <Utensils className={iconClass} />;
      default:
        return <Gift className={iconClass} />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-2.5 shadow-xs flex items-center gap-2 overflow-x-auto no-scrollbar">
      {DEALS_CATEGORIES.map((cat) => {
        const isSelected = selectedCategory === cat.id;

        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all group ${
              isSelected
                ? 'bg-emerald-100 text-emerald-900 border border-emerald-300 shadow-2xs font-extrabold'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-emerald-900 border border-slate-200/60'
            }`}
          >
            {getCategoryIcon(cat.icon, isSelected)}
            <span>{cat.label}</span>
          </button>
        );
      })}

      <button
        onClick={() => onSelectCategory('all')}
        className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap text-slate-500 hover:bg-slate-100 hover:text-emerald-900 border border-slate-200/60"
      >
        <MoreHorizontal className="w-4 h-4" />
        <span>More</span>
      </button>
    </div>
  );
};
