import React from 'react';
import { LayoutGrid } from 'lucide-react';
import { JASTIP_CATEGORIES } from '../../data/jastipData';

interface JastipCategoryRowProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export const JastipCategoryRow: React.FC<JastipCategoryRowProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-2">
      <div className="flex items-center gap-3 min-w-max pb-1">
        {JASTIP_CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
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

        {/* All Categories Button */}
        <button
          onClick={() => onSelectCategory('all')}
          className={`flex flex-col items-center justify-center p-2.5 rounded-2xl border transition-all text-center group w-28 sm:w-32 bg-slate-50 ${
            selectedCategory === 'all'
              ? 'border-emerald-600 ring-2 ring-emerald-600/20 bg-emerald-50/50 shadow-md'
              : 'border-slate-200 hover:border-emerald-400 hover:bg-white'
          }`}
        >
          <div className="w-14 h-14 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
            <LayoutGrid className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold text-slate-800 group-hover:text-emerald-900 leading-tight">
            All Categories
          </span>
          <span className="text-[10px] text-slate-400 mt-0.5">Lihat Semua</span>
        </button>
      </div>
    </div>
  );
};
