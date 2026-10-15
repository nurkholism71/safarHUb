import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORY_DEALS_OVERVIEW } from '../../data/dealsData';
import { CategoryDealOverviewItem } from '../../types/deals';

interface DealsByCategoryGridProps {
  onSelectCategoryDeal?: (deal: CategoryDealOverviewItem) => void;
  onViewAll?: () => void;
}

export const DealsByCategoryGrid: React.FC<DealsByCategoryGridProps> = ({
  onSelectCategoryDeal,
  onViewAll
}) => {
  return (
    <div className="space-y-3.5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Deals by Category
          </h3>
          <p className="text-xs text-slate-500">
            Browse discounted rates grouped by travel service
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3.5">
        {CATEGORY_DEALS_OVERVIEW.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectCategoryDeal?.(item)}
            className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
          >
            {/* Image with discount badge */}
            <div className="relative h-28 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.categoryName}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 left-2 text-[9px] font-black uppercase px-2 py-0.5 rounded-md bg-rose-600 text-white shadow-2xs">
                {item.badge}
              </span>
            </div>

            {/* Content */}
            <div className="p-3 space-y-1 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-900 truncate">
                  {item.categoryName}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5 leading-tight">
                  {item.description}
                </p>
              </div>

              {/* Price */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[9px] text-slate-400 block font-medium">From</span>
                  <span className="font-extrabold text-slate-900">
                    SAR {item.startPrice.toLocaleString()}
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
