import React from 'react';
import { ChevronRight, ArrowRight, Heart } from 'lucide-react';
import { RECENT_PROFILE_TRIPS, SAVED_ITEMS_LIST } from '../../data/profileData';
import { SavedWishlistItem } from '../../types/profile';

interface RecentTripsAndSavedRowProps {
  onViewAllTrips?: () => void;
  onViewAllSaved?: () => void;
  onSelectTrip?: (tripId: string, title: string) => void;
  onSelectSavedItem?: (item: SavedWishlistItem) => void;
}

export const RecentTripsAndSavedRow: React.FC<RecentTripsAndSavedRowProps> = ({
  onViewAllTrips,
  onViewAllSaved,
  onSelectTrip,
  onSelectSavedItem
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      {/* 1. Recent Trips (7 cols / 8 cols) */}
      <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3.5">
            <h3 className="text-sm font-bold text-slate-900">
              Recent Trips
            </h3>
            <button
              onClick={onViewAllTrips}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {RECENT_PROFILE_TRIPS.map((trip) => (
              <div
                key={trip.id}
                onClick={() => onSelectTrip?.(trip.id, trip.title)}
                className="rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="relative h-28 w-full overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 space-y-2">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-900 line-clamp-1">
                      {trip.title}
                    </h4>
                    <p className="text-[10px] text-slate-500 mt-0.5">
                      {trip.dates}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {trip.status}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Saved Items (4 cols) */}
      <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3.5">
            <h3 className="text-sm font-bold text-slate-900">
              Saved Items
            </h3>
            <button
              onClick={onViewAllSaved}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-2">
            {SAVED_ITEMS_LIST.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectSavedItem?.(item)}
                className="flex items-center justify-between p-2 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-emerald-50/70 hover:border-emerald-200 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-10 h-10 rounded-xl object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <h5 className="text-xs font-bold text-slate-900 group-hover:text-emerald-900 truncate">
                      {item.title}
                    </h5>
                    <p className="text-[10px] text-slate-500 truncate">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`Toggled favorite for ${item.title}`);
                  }}
                  className="p-1 text-slate-400 hover:text-rose-600 transition-colors shrink-0 ml-1"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      item.isFavorite
                        ? 'text-rose-500 fill-rose-500'
                        : 'text-slate-300 hover:text-rose-500'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
