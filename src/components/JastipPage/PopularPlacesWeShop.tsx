import React from 'react';
import { ArrowRight, MapPin, Store } from 'lucide-react';
import { JASTIP_SHOPPING_PLACES } from '../../data/jastipData';
import { JastipShopPlace } from '../../types/jastip';

interface PopularPlacesWeShopProps {
  onSelectPlace?: (place: JastipShopPlace) => void;
}

export const PopularPlacesWeShop: React.FC<PopularPlacesWeShopProps> = ({ onSelectPlace }) => {
  return (
    <div className="my-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b border-slate-200/80 gap-2">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
            Popular Places We Shop
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            From official stores, traditional souqs, and luxury malls across Saudi Arabia
          </p>
        </div>

        <button
          onClick={() => alert('Viewing all 25+ verified retail partners across Saudi Arabia')}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 group transition-colors self-start sm:self-auto"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* 5 City Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {JASTIP_SHOPPING_PLACES.map((place) => (
          <div
            key={place.id}
            onClick={() => onSelectPlace && onSelectPlace(place)}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-emerald-600 hover:shadow-md transition-all cursor-pointer flex flex-col"
          >
            <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-slate-100">
              <img
                src={place.image}
                alt={place.city}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-2 left-2.5 right-2.5 text-white">
                <h3 className="text-sm sm:text-base font-bold drop-shadow-sm flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-400 flex-shrink-0" />
                  <span>{place.city}</span>
                </h3>
              </div>
            </div>

            <div className="p-2.5 flex-1 flex flex-col justify-between">
              <p className="text-[11px] font-semibold text-slate-600 line-clamp-1">
                {place.tags}
              </p>
              <div className="flex items-center gap-1 text-[10px] text-emerald-800 font-bold mt-2 pt-1.5 border-t border-slate-100">
                <Store className="w-3 h-3" />
                <span className="truncate">{place.popularShops[0]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
