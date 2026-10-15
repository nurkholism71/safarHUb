import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Calendar } from 'lucide-react';
import { UMRAH_ITINERARY_7DAYS } from '../../data/umrahData';

export const PopularItineraries: React.FC = () => {
  const [selectedDuration, setSelectedDuration] = useState('7');

  const durations = [
    { id: '7', label: '7 Days' },
    { id: '9', label: '9 Days' },
    { id: '10', label: '10 Days' },
    { id: '12', label: '12 Days' },
  ];

  return (
    <div className="my-8 bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xs">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-slate-100 gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
            Popular Itineraries
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Step-by-step spiritual timeline from arrival in Saudi Arabia to departure
          </p>
        </div>

        {/* Day Switcher Pills */}
        <div className="flex items-center p-1 bg-slate-100 rounded-xl text-xs font-bold">
          {durations.map((dur) => (
            <button
              key={dur.id}
              onClick={() => setSelectedDuration(dur.id)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedDuration === dur.id
                  ? 'bg-[#0e5f2c] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {dur.label}
            </button>
          ))}
        </div>
      </div>

      {/* 5 Itinerary Steps Grid with Connectors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
        {UMRAH_ITINERARY_7DAYS.map((step, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden hover:border-emerald-500 hover:shadow-md transition-all"
          >
            {/* Image banner */}
            <div className="relative h-28 w-full overflow-hidden bg-slate-200">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider rounded-md bg-[#0e5f2c] text-white shadow-2xs">
                {step.dayLabel}
              </span>
            </div>

            {/* Body */}
            <div className="p-3 flex-1 flex flex-col justify-between space-y-2">
              <h4 className="text-xs font-bold text-slate-900 leading-tight">
                {step.title}
              </h4>

              <div className="space-y-1 text-[11px] text-slate-600 font-medium">
                {step.activities.map((act, i) => (
                  <div key={i} className="flex items-start gap-1.5 leading-tight">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow on large screens */}
            {idx < UMRAH_ITINERARY_7DAYS.length - 1 && (
              <div className="hidden lg:flex absolute -right-3 top-12 z-10 w-6 h-6 rounded-full bg-white border border-slate-300 items-center justify-center text-slate-400 shadow-2xs pointer-events-none">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
