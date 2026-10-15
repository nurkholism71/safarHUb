import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { ADMIN_JASTIP_POPULAR_ITEMS } from '../../../data/adminJastipData';

interface AdminJastipPopularItemsCardProps {
  onViewAll?: () => void;
  onSelectItem?: (rank: number, name: string) => void;
}

export const AdminJastipPopularItemsCard: React.FC<AdminJastipPopularItemsCardProps> = ({
  onViewAll,
  onSelectItem
}) => {
  return (
    <div className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-2.5">
          <h3 className="text-xs font-bold text-slate-900">
            Popular Items
          </h3>
          <button
            onClick={onViewAll}
            className="text-[10px] font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-0.5 transition-colors cursor-pointer"
          >
            View All <ArrowRight className="w-2.5 h-2.5" />
          </button>
        </div>

        {/* 5 Popular Items List */}
        <div className="space-y-2">
          {ADMIN_JASTIP_POPULAR_ITEMS.map((item) => (
            <div
              key={item.rank}
              onClick={() => onSelectItem && onSelectItem(item.rank, item.name)}
              className="flex items-center justify-between p-1.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-700 font-bold text-[8.5px] flex items-center justify-center flex-shrink-0">
                  {item.rank}
                </span>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-7 h-7 rounded-md object-cover ring-1 ring-slate-200 flex-shrink-0"
                />
                <div className="min-w-0">
                  <div className="text-[11px] font-bold text-slate-800 truncate group-hover:text-emerald-800 leading-tight">
                    {item.name}
                  </div>
                  <div className="text-[9px] text-slate-400 leading-none mt-0.5">
                    {item.location}
                  </div>
                </div>
              </div>

              <div className="text-right flex-shrink-0 pl-1.5">
                <div className="text-[11px] font-bold text-slate-900 leading-tight">
                  {item.price}
                </div>
                <div className="text-[8.5px] text-amber-600 font-semibold flex items-center justify-end gap-0.5 mt-0.5">
                  <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                  <span>{item.rating} ({item.reviewsCount})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[8.5px] text-slate-500 mt-2">
        <span>Bestseller: <strong className="text-emerald-700">Kurma Ajwa Madinah</strong></span>
        <span className="text-slate-400">Stock Live</span>
      </div>
    </div>
  );
};
