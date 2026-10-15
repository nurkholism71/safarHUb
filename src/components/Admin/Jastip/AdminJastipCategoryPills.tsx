import React from 'react';
import {
  Sparkles,
  Gift,
  BookOpen,
  Shirt,
  ShoppingBag,
  Heart,
  Headphones,
  Watch,
  Utensils,
  Gem,
  LayoutGrid,
  Apple
} from 'lucide-react';
import { ADMIN_JASTIP_CATEGORIES } from '../../../data/adminJastipData';

interface AdminJastipCategoryPillsProps {
  selectedCategory: string;
  onSelectCategory: (catId: string) => void;
}

export const AdminJastipCategoryPills: React.FC<AdminJastipCategoryPillsProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-amber-500" />;
      case 'Apple':
        return <Apple className="w-4 h-4 text-amber-700" />;
      case 'Gift':
        return <Gift className="w-4 h-4 text-red-500" />;
      case 'BookOpen':
        return <BookOpen className="w-4 h-4 text-blue-600" />;
      case 'Shirt':
        return <Shirt className="w-4 h-4 text-emerald-600" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-4 h-4 text-amber-600" />;
      case 'Heart':
        return <Heart className="w-4 h-4 text-pink-500" />;
      case 'Headphones':
        return <Headphones className="w-4 h-4 text-sky-600" />;
      case 'Watch':
        return <Watch className="w-4 h-4 text-slate-700" />;
      case 'Utensils':
        return <Utensils className="w-4 h-4 text-rose-500" />;
      case 'Gem':
        return <Gem className="w-4 h-4 text-amber-600" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-4 h-4 text-teal-600" />;
      default:
        return <ShoppingBag className="w-4 h-4 text-slate-600" />;
    }
  };

  return (
    <div className="bg-white rounded-xl p-3 border border-slate-200/90 shadow-sm overflow-x-auto scrollbar-thin">
      <div className="flex items-center gap-2 min-w-max">
        {ADMIN_JASTIP_CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex flex-col items-center justify-center gap-1.5 px-3 py-2 rounded-xl transition-all cursor-pointer min-w-[76px] ${
                isSelected
                  ? 'bg-emerald-50 border border-emerald-500 text-[#0e5f2c] font-bold shadow-2xs'
                  : 'bg-slate-50/70 border border-slate-100 hover:border-slate-300 hover:bg-slate-100 text-slate-700 font-medium'
              }`}
            >
              <div className="w-7 h-7 rounded-lg bg-white shadow-2xs border border-slate-100 flex items-center justify-center">
                {getIcon(cat.iconName)}
              </div>
              <span className="text-[10px] whitespace-nowrap">{cat.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
