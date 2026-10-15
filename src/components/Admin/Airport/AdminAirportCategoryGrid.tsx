import React from 'react';
import { ChevronRight } from 'lucide-react';
import { ADMIN_AIRPORT_CATEGORIES } from '../../../data/adminAirportData';

interface AdminAirportCategoryGridProps {
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const AdminAirportCategoryGrid: React.FC<AdminAirportCategoryGridProps> = ({
  activeCategory,
  onSelectCategory
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
      {ADMIN_AIRPORT_CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat.id;

        return (
          <div
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`group relative rounded-xl border p-2.5 transition-all cursor-pointer overflow-hidden ${
              isActive
                ? 'bg-white border-emerald-600 ring-2 ring-emerald-500/20 shadow-md'
                : 'bg-white border-slate-200/90 hover:border-emerald-300 hover:shadow-sm'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-10 h-10 rounded-lg object-cover ring-1 ring-slate-100 flex-shrink-0 group-hover:scale-105 transition-transform"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-[11px] font-bold text-slate-900 truncate group-hover:text-emerald-800 transition-colors">
                    {cat.title}
                  </h4>
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </div>
                <p className="text-[9.5px] text-slate-500 font-medium truncate mt-0.5">
                  {cat.bookings}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
