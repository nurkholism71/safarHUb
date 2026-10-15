import React from 'react';
import { ArrowRight, PlaneTakeoff, Bus } from 'lucide-react';
import { POPULAR_ROUTES } from '../../data/transportData';

export const PopularRoutesRow: React.FC = () => {
  return (
    <div className="py-8 border-t border-slate-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif">Popular Routes</h3>
          <p className="text-xs text-slate-500">Most requested pilgrim and intercity transfers</p>
        </div>
        <button
          onClick={() => alert('Viewing all 45+ Saudi transportation routes')}
          className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors group"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* 5 Routes Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {POPULAR_ROUTES.map((route) => (
          <div
            key={route.id}
            onClick={() => alert(`Selected route: ${route.from} → ${route.to}`)}
            className="group relative flex flex-col justify-between overflow-hidden bg-white border border-slate-200 rounded-2xl shadow-xs hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-24 sm:h-28 w-full overflow-hidden bg-slate-100">
              <img
                src={route.image}
                alt={`${route.from} to ${route.to}`}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* Info */}
            <div className="p-3">
              <div className="flex items-center gap-1 text-[11px] font-bold text-slate-900 truncate">
                <PlaneTakeoff className="w-3 h-3 text-emerald-700 flex-shrink-0" />
                <span className="truncate">{route.from} → {route.to}</span>
              </div>
              <div className="text-xs font-black text-emerald-800 font-serif mt-1">
                From SAR {route.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
