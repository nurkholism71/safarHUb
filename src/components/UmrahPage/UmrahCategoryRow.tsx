import React from 'react';
import { Package } from 'lucide-react';
import { UMRAH_CATEGORY_TABS } from '../../data/umrahData';

interface UmrahCategoryRowProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export const UmrahCategoryRow: React.FC<UmrahCategoryRowProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-2">
      <div className="flex items-center gap-3 min-w-max pb-1">
        {UMRAH_CATEGORY_TABS.map((cat) => {
          const isSelected = selectedCategory === cat.id;

          if (cat.id === 'all') {
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex flex-col items-center justify-center p-2.5 rounded-2xl border transition-all text-center group w-28 sm:w-32 bg-[#0e5f2c] text-white ${
                  isSelected ? 'ring-2 ring-emerald-500 shadow-md' : 'hover:bg-[#09421e]'
                }`}
              >
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-2">
                  <Package className="w-6 h-6 text-amber-300" />
                </div>
                <span className="text-xs font-bold leading-tight">All Packages</span>
              </button>
            );
          }

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex flex-col items-center p-2.5 rounded-2xl border transition-all text-center group w-28 sm:w-32 bg-white ${
                isSelected
                  ? 'border-emerald-600 ring-2 ring-emerald-600/20 shadow-md'
                  : 'border-slate-200 hover:border-emerald-400 hover:shadow-xs'
              }`}
            >
              <div className="w-14 h-14 rounded-xl overflow-hidden mb-2 bg-slate-100 flex items-center justify-center">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-xs font-bold text-slate-800 group-hover:text-emerald-900 leading-tight">
                {cat.name}
              </span>
              <span className="text-[10px] text-slate-400 truncate mt-0.5 max-w-[100px]">
                {cat.subName}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
