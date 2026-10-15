import React from 'react';
import { TRANSPORT_CATEGORIES } from '../../data/transportData';

interface TransportCategoryChipsProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export const TransportCategoryChips: React.FC<TransportCategoryChipsProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex items-center gap-3.5 overflow-x-auto no-scrollbar py-2 my-6">
      {TRANSPORT_CATEGORIES.map((cat) => {
        const isSelected = selectedCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`flex items-center gap-3 p-2 pr-5 rounded-2xl border transition-all duration-200 flex-shrink-0 text-left ${
              isSelected
                ? 'bg-emerald-50/90 border-emerald-600 shadow-md ring-2 ring-emerald-600/20'
                : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <div className="relative w-12 h-12 overflow-hidden rounded-xl bg-slate-200 flex-shrink-0">
              <img
                src={cat.image}
                alt={cat.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                {cat.title}
              </div>
              <div className="text-[11px] font-medium text-slate-500">
                {cat.subtitle}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};
