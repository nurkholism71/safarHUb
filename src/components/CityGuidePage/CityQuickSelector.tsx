import React from 'react';
import { CITIES_LIST } from '../../data/cityGuideData';
import { CityItem } from '../../types/cityGuide';

interface CityQuickSelectorProps {
  selectedCityId?: string;
  onSelectCity?: (city: CityItem) => void;
}

export const CityQuickSelector: React.FC<CityQuickSelectorProps> = ({
  selectedCityId = 'makkah',
  onSelectCity
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
      {CITIES_LIST.map((city) => {
        const isSelected = selectedCityId === city.id;

        return (
          <button
            key={city.id}
            onClick={() => onSelectCity?.(city)}
            className={`group flex flex-col p-2.5 rounded-2xl bg-white border transition-all text-left shadow-xs hover:shadow-md ${
              isSelected
                ? 'border-emerald-600 ring-2 ring-emerald-500/20 shadow-emerald-950/10'
                : 'border-slate-200/80 hover:border-emerald-300'
            }`}
          >
            {/* Thumbnail Image */}
            <div className="relative w-full h-20 rounded-xl overflow-hidden mb-2">
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <span className="absolute bottom-1.5 right-1.5 text-[9px] font-bold text-white/90 bg-black/40 px-1.5 py-0.5 rounded font-arabic">
                {city.arabicName}
              </span>
            </div>

            {/* City Name & Tagline */}
            <div>
              <h4 className={`text-xs font-bold truncate ${isSelected ? 'text-emerald-900' : 'text-slate-900 group-hover:text-emerald-800'}`}>
                {city.name}
              </h4>
              <p className="text-[10px] text-slate-500 truncate mt-0.5">
                {city.tagline}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
};
