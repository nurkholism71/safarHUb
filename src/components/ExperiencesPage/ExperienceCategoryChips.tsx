import React from 'react';
import {
  Compass,
  Landmark,
  Castle,
  Sun,
  Mountain,
  Utensils,
  MoonStar,
  Building2,
  Waves,
  Users,
  Smile,
  Gem
} from 'lucide-react';
import { EXPERIENCE_CATEGORIES } from '../../data/experiencesData';

interface ExperienceCategoryChipsProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const ExperienceCategoryChips: React.FC<ExperienceCategoryChipsProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  const getCategoryIcon = (iconName: string, isSelected: boolean) => {
    const iconClass = `w-4 h-4 ${isSelected ? 'text-emerald-800' : 'text-slate-500 group-hover:text-emerald-700'}`;
    switch (iconName) {
      case 'Compass':
        return <Compass className={iconClass} />;
      case 'Landmark':
        return <Landmark className={iconClass} />;
      case 'Castle':
        return <Castle className={iconClass} />;
      case 'Sun':
        return <Sun className={iconClass} />;
      case 'Mountain':
        return <Mountain className={iconClass} />;
      case 'Utensils':
        return <Utensils className={iconClass} />;
      case 'MoonStar':
        return <MoonStar className={iconClass} />;
      case 'Building2':
        return <Building2 className={iconClass} />;
      case 'Waves':
        return <Waves className={iconClass} />;
      case 'Users':
        return <Users className={iconClass} />;
      case 'Smile':
        return <Smile className={iconClass} />;
      case 'Gem':
        return <Gem className={iconClass} />;
      default:
        return <Compass className={iconClass} />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-2.5 shadow-xs flex items-center gap-2 overflow-x-auto no-scrollbar">
      {EXPERIENCE_CATEGORIES.map((cat) => {
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
    </div>
  );
};
