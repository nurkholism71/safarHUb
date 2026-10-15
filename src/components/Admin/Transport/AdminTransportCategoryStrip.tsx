import React from 'react';
import { ADMIN_TRANSPORT_CATEGORIES } from '../../../data/adminTransportData';

interface AdminTransportCategoryStripProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export const AdminTransportCategoryStrip: React.FC<AdminTransportCategoryStripProps> = ({
  activeCategory,
  onSelectCategory
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3.5 mb-6">
      {ADMIN_TRANSPORT_CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat.id;

        return (
          <div
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`rounded-xl border overflow-hidden transition-all cursor-pointer group shadow-2xs ${
              isActive
                ? 'bg-emerald-50/70 border-emerald-500 ring-2 ring-emerald-500/20 shadow-sm'
                : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
            }`}
          >
            {/* Thumbnail Image */}
            <div className="relative h-20 w-full overflow-hidden bg-slate-100">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Label & Details */}
            <div className="p-2.5">
              <div
                className={`text-xs font-bold truncate ${
                  isActive ? 'text-emerald-900' : 'text-slate-900'
                }`}
              >
                {cat.title}
              </div>
              <div className="text-[11px] text-slate-500 truncate mt-0.5">
                {cat.subtitle}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
