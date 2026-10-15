import React from 'react';
import { ArrowRight, PlaneTakeoff } from 'lucide-react';
import { POPULAR_AIRPORTS } from '../../data/airportData';
import { PopularAirportItem } from '../../types/airport';

interface PopularAirportsGridProps {
  onSelectAirport?: (airport: PopularAirportItem) => void;
}

export const PopularAirportsGrid: React.FC<PopularAirportsGridProps> = ({ onSelectAirport }) => {
  return (
    <div className="flex flex-col h-full p-5 bg-white border border-slate-200/90 rounded-3xl shadow-xs justify-between">
      <div>
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
          <div>
            <h3 className="text-base font-bold text-slate-900 font-serif">Popular Airports</h3>
            <p className="text-[11px] text-slate-500">Major international gateways to Saudi Arabia</p>
          </div>
          <button
            onClick={() => alert('Viewing all 15 Saudi international and domestic airports')}
            className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors group"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 4 Airports in 2x2 grid */}
        <div className="grid grid-cols-2 gap-3">
          {POPULAR_AIRPORTS.map((air) => (
            <div
              key={air.id}
              onClick={() => onSelectAirport && onSelectAirport(air)}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-emerald-600 hover:shadow-md transition-all cursor-pointer"
            >
              <div className="relative h-20 w-full overflow-hidden bg-slate-100">
                <img
                  src={air.image}
                  alt={air.name}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 text-[9px] font-black bg-black/70 text-white rounded">
                  {air.code}
                </span>
              </div>
              <div className="p-2.5">
                <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-900 truncate">
                  {air.name}
                </h4>
                <p className="text-[10px] text-slate-500 truncate mt-0.5 font-medium">
                  {air.fullName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
