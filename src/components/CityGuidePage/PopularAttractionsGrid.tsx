import React from 'react';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { POPULAR_ATTRACTIONS } from '../../data/cityGuideData';
import { AttractionItem } from '../../types/cityGuide';

interface PopularAttractionsGridProps {
  onSelectAttraction?: (attraction: AttractionItem) => void;
  onViewAll?: () => void;
}

export const PopularAttractionsGrid: React.FC<PopularAttractionsGridProps> = ({
  onSelectAttraction,
  onViewAll
}) => {
  return (
    <div className="space-y-3.5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Popular Attractions
          </h3>
          <p className="text-xs text-slate-500">
            Top-rated holy sanctuaries, historical landmarks & coastal sights
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

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {POPULAR_ATTRACTIONS.map((att) => (
          <div
            key={att.id}
            onClick={() => onSelectAttraction?.(att)}
            className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
          >
            {/* Image & Badge */}
            <div className="relative h-28 w-full overflow-hidden">
              <img
                src={att.image}
                alt={att.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 left-2 text-[9px] font-bold px-2 py-0.5 rounded-md bg-black/60 text-white backdrop-blur-xs">
                {att.category}
              </span>
            </div>

            {/* Info */}
            <div className="p-2.5 space-y-1">
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-emerald-900 line-clamp-1">
                {att.title}
              </h4>
              <p className="text-[10px] text-slate-500 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-600 shrink-0" />
                <span>{att.cityName}</span>
              </p>
              <div className="flex items-center gap-1 pt-1 text-[10px] font-bold text-slate-700">
                <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                <span>{att.rating}</span>
                <span className="text-slate-400 font-normal">({att.reviewCount})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
