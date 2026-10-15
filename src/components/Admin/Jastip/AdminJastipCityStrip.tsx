import React from 'react';
import { ChevronRight } from 'lucide-react';
import { ADMIN_JASTIP_CITIES } from '../../../data/adminJastipData';

interface AdminJastipCityStripProps {
  selectedCity: string;
  onSelectCity: (cityId: string) => void;
}

export const AdminJastipCityStrip: React.FC<AdminJastipCityStripProps> = ({
  selectedCity,
  onSelectCity
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
      {ADMIN_JASTIP_CITIES.map((city) => {
        const isSelected = selectedCity === city.id;

        return (
          <div
            key={city.id}
            onClick={() => onSelectCity(city.id)}
            className={`group relative rounded-xl border p-2.5 transition-all cursor-pointer overflow-hidden ${
              isSelected
                ? 'bg-white border-emerald-600 ring-2 ring-emerald-500/20 shadow-md'
                : 'bg-white border-slate-200/90 hover:border-emerald-300 hover:shadow-sm'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <img
                src={city.image}
                alt={city.name}
                className="w-10 h-10 rounded-lg object-cover ring-1 ring-slate-100 flex-shrink-0 group-hover:scale-105 transition-transform"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-900 truncate group-hover:text-emerald-800 transition-colors">
                    {city.name}
                  </h4>
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </div>
                <p className="text-[10px] text-slate-500 font-medium truncate mt-0.5">
                  {city.products}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
