import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import { RECOMMENDED_TRIP_ITEMS } from '../../data/bookingsData';
import { RecommendedTripItem } from '../../types/bookings';

interface BookingsRecommendationsRowProps {
  onSelectRec: (item: RecommendedTripItem) => void;
}

export const BookingsRecommendationsRow: React.FC<BookingsRecommendationsRowProps> = ({
  onSelectRec
}) => {
  return (
    <div className="my-8">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
            Recommended for Your Trip
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Essential add-ons and upgrades to complete your Saudi journey
          </p>
        </div>

        <button
          onClick={() => alert('Viewing all recommendations and add-on services')}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 group transition-colors"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* 6 Recommendations Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
        {RECOMMENDED_TRIP_ITEMS.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectRec(item)}
            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-emerald-600 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="relative h-24 w-full overflow-hidden bg-slate-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div className="p-2.5 flex-1 flex flex-col justify-between">
              <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-900 line-clamp-1 leading-tight">
                {item.title}
              </h4>
              <div className="mt-2 pt-1 border-t border-slate-100 flex items-baseline gap-1 text-[11px]">
                <span className="text-[10px] text-slate-400">From</span>
                <span className="font-bold text-emerald-800">SAR {item.priceSAR}</span>
                {item.unit && <span className="text-[10px] text-slate-400">{item.unit}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
