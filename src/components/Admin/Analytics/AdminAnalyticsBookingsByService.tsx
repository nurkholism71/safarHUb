import React from 'react';
import { ANALYTICS_SERVICE_SHARES } from '../../../data/adminAnalyticsData';

export const AdminAnalyticsBookingsByService: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs overflow-hidden flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap">
          Bookings by Service
        </h3>
      </div>

      <div className="flex items-center justify-between gap-3 my-auto py-1">
        {/* Compact SVG Donut Chart with explicit pixel bounds */}
        <div className="relative w-[96px] h-[96px] min-w-[96px] shrink-0 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background Circle */}
            <circle cx="50" cy="50" r="38" fill="transparent" stroke="currentColor" strokeWidth="13" className="text-slate-100 dark:text-slate-800" />
            
            {/* Segment 1: Umroh (38%) */}
            <circle cx="50" cy="50" r="38" fill="transparent" stroke="#2563eb" strokeWidth="13" strokeDasharray="90.7 238.7" strokeDashoffset="0" />
            {/* Segment 2: Hotels (22%) */}
            <circle cx="50" cy="50" r="38" fill="transparent" stroke="#a855f7" strokeWidth="13" strokeDasharray="52.5 238.7" strokeDashoffset="-90.7" />
            {/* Segment 3: Transport (14%) */}
            <circle cx="50" cy="50" r="38" fill="transparent" stroke="#06b6d4" strokeWidth="13" strokeDasharray="33.4 238.7" strokeDashoffset="-143.2" />
            {/* Segment 4: Experiences (10%) */}
            <circle cx="50" cy="50" r="38" fill="transparent" stroke="#10b981" strokeWidth="13" strokeDasharray="23.8 238.7" strokeDashoffset="-176.6" />
            {/* Segment 5: Airport (8%) */}
            <circle cx="50" cy="50" r="38" fill="transparent" stroke="#38bdf8" strokeWidth="13" strokeDasharray="19.1 238.7" strokeDashoffset="-200.4" />
            {/* Segment 6: Jastip (5%) */}
            <circle cx="50" cy="50" r="38" fill="transparent" stroke="#8b5cf6" strokeWidth="13" strokeDasharray="11.9 238.7" strokeDashoffset="-219.5" />
            {/* Segment 7: City Guide (3%) */}
            <circle cx="50" cy="50" r="38" fill="transparent" stroke="#ec4899" strokeWidth="13" strokeDasharray="7.2 238.7" strokeDashoffset="-231.4" />
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
            <span className="text-xs font-bold text-slate-900 dark:text-white leading-none">
              12,840
            </span>
            <span className="text-[7.5px] text-slate-400 font-medium mt-0.5">
              Total Bookings
            </span>
          </div>
        </div>

        {/* Legend List */}
        <div className="flex-1 min-w-0 space-y-1 pl-1">
          {ANALYTICS_SERVICE_SHARES.map((item) => (
            <div key={item.name} className="flex items-center justify-between text-[11px] gap-2">
              <div className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300 min-w-0">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                <span className="truncate">{item.name}</span>
              </div>
              <span className="font-bold text-slate-900 dark:text-white shrink-0 ml-1.5">
                {item.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
