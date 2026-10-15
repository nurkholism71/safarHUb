import React from 'react';
import { ANALYTICS_DEMOGRAPHICS } from '../../../data/adminAnalyticsData';

export const AdminAnalyticsDemographics: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs overflow-hidden flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap">
          Customer Demographics
        </h3>
      </div>

      <div className="flex items-center justify-between gap-3 my-auto py-1">
        {/* Compact SVG Donut Chart with explicit pixel bounds */}
        <div className="relative w-[96px] h-[96px] min-w-[96px] shrink-0 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="38" fill="transparent" stroke="currentColor" strokeWidth="13" className="text-slate-100 dark:text-slate-800" />
            {/* Indonesia: 35% */}
            <circle cx="50" cy="50" r="38" fill="transparent" stroke="#3b82f6" strokeWidth="13" strokeDasharray="83.5 238.7" strokeDashoffset="0" />
            {/* Saudi Arabia: 28% */}
            <circle cx="50" cy="50" r="38" fill="transparent" stroke="#10b981" strokeWidth="13" strokeDasharray="66.8 238.7" strokeDashoffset="-83.5" />
            {/* Malaysia: 12% */}
            <circle cx="50" cy="50" r="38" fill="transparent" stroke="#6366f1" strokeWidth="13" strokeDasharray="28.6 238.7" strokeDashoffset="-150.3" />
            {/* Egypt: 10% */}
            <circle cx="50" cy="50" r="38" fill="transparent" stroke="#f59e0b" strokeWidth="13" strokeDasharray="23.8 238.7" strokeDashoffset="-178.9" />
            {/* Pakistan: 8% */}
            <circle cx="50" cy="50" r="38" fill="transparent" stroke="#06b6d4" strokeWidth="13" strokeDasharray="19.1 238.7" strokeDashoffset="-202.7" />
            {/* Others: 7% */}
            <circle cx="50" cy="50" r="38" fill="transparent" stroke="#ec4899" strokeWidth="13" strokeDasharray="16.7 238.7" strokeDashoffset="-221.8" />
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
            <span className="text-xs font-bold text-slate-900 dark:text-white leading-none">
              9,320
            </span>
            <span className="text-[7.5px] text-slate-400 font-medium mt-0.5">
              Customers
            </span>
          </div>
        </div>

        {/* Demographics Legend with Country Names & Spaced Percentages */}
        <div className="flex-1 min-w-0 space-y-1 pl-1">
          {ANALYTICS_DEMOGRAPHICS.map((item) => (
            <div key={item.country} className="flex items-center justify-between text-[11px] gap-2">
              <div className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300 min-w-0">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                <span className="truncate">{item.country}</span>
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
