import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ANALYTICS_MONTHLY_BOOKINGS } from '../../../data/adminAnalyticsData';

export const AdminAnalyticsMonthlyBookings: React.FC = () => {
  const [year, setYear] = useState('2026');

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs overflow-hidden flex flex-col justify-between h-full">
      {/* Header & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap">
          Bookings by Month
        </h3>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 text-[10px] font-semibold">
            <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-xs bg-[#0e5f2c]" /> Umroh
            </span>
            <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-xs bg-blue-500" /> Hotels
            </span>
            <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-xs bg-purple-500" /> Transport
            </span>
            <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-xs bg-pink-500" /> Exp
            </span>
          </div>

          <div className="relative">
            <button className="flex items-center gap-1 px-2 py-0.5 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold cursor-pointer">
              <span>{year}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>
          </div>
        </div>
      </div>

      {/* SVG Multi-Bar Graph */}
      <div className="relative h-44 w-full">
        {/* Y Axis */}
        <div className="absolute top-0 left-0 h-full flex flex-col justify-between text-[9px] text-slate-400 pointer-events-none pb-5 w-7 text-left z-10">
          <span>8K</span>
          <span>6K</span>
          <span>4K</span>
          <span>2K</span>
          <span>0</span>
        </div>

        {/* SVG Bars & Months */}
        <div className="pl-7 h-full w-full">
          <svg className="w-full h-full overflow-hidden" viewBox="0 0 480 140" preserveAspectRatio="none">
            {/* Grid lines */}
            <line x1="0" y1="10" x2="480" y2="10" stroke="currentColor" strokeDasharray="2 2" className="text-slate-100 dark:text-slate-800" />
            <line x1="0" y1="40" x2="480" y2="40" stroke="currentColor" strokeDasharray="2 2" className="text-slate-100 dark:text-slate-800" />
            <line x1="0" y1="70" x2="480" y2="70" stroke="currentColor" strokeDasharray="2 2" className="text-slate-100 dark:text-slate-800" />
            <line x1="0" y1="100" x2="480" y2="100" stroke="currentColor" strokeDasharray="2 2" className="text-slate-100 dark:text-slate-800" />
            <line x1="0" y1="125" x2="480" y2="125" stroke="currentColor" className="text-slate-200 dark:text-slate-700" />

            {/* 12 Month Bar Clusters */}
            {ANALYTICS_MONTHLY_BOOKINGS.map((item, idx) => {
              const maxVal = 6000;
              const maxH = 115;
              const hU = Math.min((item.umroh / maxVal) * maxH, maxH);
              const hH = Math.min((item.hotels / maxVal) * maxH, maxH);
              const hT = Math.min((item.transport / maxVal) * maxH, maxH);
              const hE = Math.min((item.experiences / maxVal) * maxH, maxH);

              const groupX = idx * 40 + 8;
              const barW = 6.5;

              return (
                <g key={item.month}>
                  {/* Umroh Bar */}
                  <rect
                    x={groupX}
                    y={125 - hU}
                    width={barW}
                    height={hU}
                    rx="1.5"
                    fill="#0e5f2c"
                  />
                  {/* Hotels Bar */}
                  <rect
                    x={groupX + 7.5}
                    y={125 - hH}
                    width={barW}
                    height={hH}
                    rx="1.5"
                    fill="#3b82f6"
                  />
                  {/* Transport Bar */}
                  <rect
                    x={groupX + 15}
                    y={125 - hT}
                    width={barW}
                    height={hT}
                    rx="1.5"
                    fill="#a855f7"
                  />
                  {/* Experiences Bar */}
                  <rect
                    x={groupX + 22.5}
                    y={125 - hE}
                    width={barW}
                    height={hE}
                    rx="1.5"
                    fill="#ec4899"
                  />
                  {/* Month Label */}
                  <text
                    x={groupX + 14}
                    y="138"
                    textAnchor="middle"
                    fill="#94a3b8"
                    fontSize="9"
                    fontFamily="inherit"
                  >
                    {item.month}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
};
