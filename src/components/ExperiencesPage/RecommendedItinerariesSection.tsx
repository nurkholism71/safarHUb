import React from 'react';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { RECOMMENDED_ITINERARIES } from '../../data/experiencesData';
import { RecommendedItineraryItem } from '../../types/experiences';

interface RecommendedItinerariesSectionProps {
  onSelectItinerary?: (itinerary: RecommendedItineraryItem) => void;
  onViewAll?: () => void;
}

export const RecommendedItinerariesSection: React.FC<RecommendedItinerariesSectionProps> = ({
  onSelectItinerary,
  onViewAll
}) => {
  return (
    <div className="space-y-3.5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Recommended Itineraries
          </h3>
          <p className="text-xs text-slate-500">
            Carefully curated multi-day tour packages across Saudi Arabia
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {RECOMMENDED_ITINERARIES.map((itin) => (
          <div
            key={itin.id}
            onClick={() => onSelectItinerary?.(itin)}
            className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
          >
            {/* Image */}
            <div className="relative h-36 w-full overflow-hidden">
              <img
                src={itin.image}
                alt={itin.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-lg bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold flex items-center gap-1">
                <Calendar className="w-3 h-3 text-amber-400" />
                <span>{itin.days} Days Tour</span>
              </span>
            </div>

            {/* Content & Tags */}
            <div className="p-3.5 space-y-2.5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-900 line-clamp-1">
                  {itin.title}
                </h4>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {itin.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[9px] font-bold border border-emerald-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & Arrow */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">From</span>
                  <span className="text-xs font-extrabold text-slate-900">
                    SAR {itin.startPrice.toLocaleString()}
                  </span>
                </div>
                <div className="w-7 h-7 rounded-xl bg-slate-100 group-hover:bg-[#0e5f2c] group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
