import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CITIES_DATA } from '../../data/hotelsData';

interface CitySelectorBarProps {
  selectedCity: string;
  onSelectCity: (cityId: string) => void;
}

export const CitySelectorBar: React.FC<CitySelectorBarProps> = ({
  selectedCity,
  onSelectCity,
}) => {
  return (
    <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-2 my-6">
      {CITIES_DATA.map((city) => {
        const isSelected = selectedCity.toLowerCase() === city.id.toLowerCase();
        return (
          <button
            key={city.id}
            onClick={() => onSelectCity(city.name)}
            className={`flex items-center gap-2.5 p-1.5 pr-4 rounded-2xl border transition-all duration-200 flex-shrink-0 text-left ${
              isSelected
                ? 'bg-emerald-50/90 border-emerald-600 shadow-md ring-2 ring-emerald-600/20'
                : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-slate-200 flex-shrink-0">
              <img
                src={city.image}
                alt={city.name}
                className="object-cover w-full h-full"
                onError={(e) => {
                  // Fallback if image fails to load
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=150&q=80';
                }}
              />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 leading-tight">
                {city.name}
              </div>
              <div className="text-[10px] font-medium text-slate-500">
                {city.hotelCount}
              </div>
            </div>
          </button>
        );
      })}

      <button
        onClick={() => alert('Viewing all Saudi Arabian tourist and pilgrimage destinations')}
        className="flex items-center gap-1.5 px-4 py-3 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors whitespace-nowrap flex-shrink-0"
      >
        <span>View All Cities</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
