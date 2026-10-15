import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ANALYTICS_REVENUE_TREND } from '../../../data/adminAnalyticsData';

export const AdminAnalyticsRevenueTrend: React.FC = () => {
  const [timeRange, setTimeRange] = useState('Last 30 Days');
  const [isRealDays, setIsRealDays] = useState(true);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs overflow-hidden flex flex-col justify-between h-full">
      {/* Header Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap">
          Revenue Trend
        </h3>

        <div className="flex items-center gap-2.5 flex-wrap">
          <div className="flex items-center gap-2.5 text-xs font-semibold">
            <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#0e5f2c]" /> Revenue
            </span>
            <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-blue-500" /> Bookings
            </span>
          </div>

          <button
            onClick={() => setIsRealDays(!isRealDays)}
            className="flex items-center gap-1 text-[11px] text-slate-600 dark:text-slate-300 font-medium cursor-pointer"
          >
            <span className={`w-2 h-2 rounded-full ${isRealDays ? 'bg-emerald-600' : 'bg-slate-300'}`} />
            <span className="hidden sm:inline">Real Days</span>
          </button>

          <div className="relative">
            <button className="flex items-center gap-1 px-2 py-0.5 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              <span>{timeRange}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>
          </div>
        </div>
      </div>

      {/* SVG Multi-Line Chart Container */}
      <div className="relative h-44 w-full">
        {/* Y Axis Labels (Left overlay) */}
        <div className="absolute top-0 left-0 h-full flex flex-col justify-between text-[9px] text-slate-400 pointer-events-none pb-2 z-10 w-12 text-left">
          <span>SAR 1.2M</span>
          <span>SAR 900K</span>
          <span>SAR 600K</span>
          <span>SAR 300K</span>
          <span>0</span>
        </div>

        {/* SVG Drawing */}
        <div className="pl-12 h-full w-full">
          <svg className="w-full h-full overflow-hidden" viewBox="0 0 500 150" preserveAspectRatio="none">
            <defs>
              <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0e5f2c" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#0e5f2c" stopOpacity="0.0" />
              </linearGradient>
              <linearGradient id="bookingGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Grid lines */}
            <line x1="0" y1="10" x2="500" y2="10" stroke="currentColor" strokeDasharray="3 3" className="text-slate-100 dark:text-slate-800" />
            <line x1="0" y1="45" x2="500" y2="45" stroke="currentColor" strokeDasharray="3 3" className="text-slate-100 dark:text-slate-800" />
            <line x1="0" y1="80" x2="500" y2="80" stroke="currentColor" strokeDasharray="3 3" className="text-slate-100 dark:text-slate-800" />
            <line x1="0" y1="115" x2="500" y2="115" stroke="currentColor" strokeDasharray="3 3" className="text-slate-100 dark:text-slate-800" />
            <line x1="0" y1="145" x2="500" y2="145" stroke="currentColor" className="text-slate-200 dark:text-slate-700" />

            {/* Area Fill - Revenue */}
            <path
              d="M 10 130 Q 75 110, 155 85 T 310 50 T 415 60 T 490 15 L 490 145 L 10 145 Z"
              fill="url(#revenueGrad)"
            />

            {/* Line - Revenue (Green) */}
            <path
              d="M 10 130 Q 75 110, 155 85 T 310 50 T 415 60 T 490 15"
              fill="none"
              stroke="#0e5f2c"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Points - Revenue */}
            {[
              { x: 10, y: 130 },
              { x: 90, y: 115 },
              { x: 170, y: 85 },
              { x: 250, y: 68 },
              { x: 330, y: 50 },
              { x: 410, y: 60 },
              { x: 490, y: 15 }
            ].map((pt, i) => (
              <circle key={i} cx={pt.x} cy={pt.y} r="3" fill="#0e5f2c" stroke="#ffffff" strokeWidth="1.5" />
            ))}

            {/* Line - Bookings (Blue) */}
            <path
              d="M 10 138 Q 75 128, 155 110 T 310 88 T 415 78 T 490 62"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Points - Bookings */}
            {[
              { x: 10, y: 138 },
              { x: 90, y: 130 },
              { x: 170, y: 110 },
              { x: 250, y: 98 },
              { x: 330, y: 88 },
              { x: 410, y: 78 },
              { x: 490, y: 62 }
            ].map((pt, i) => (
              <circle key={i} cx={pt.x} cy={pt.y} r="2.5" fill="#3b82f6" stroke="#ffffff" strokeWidth="1.5" />
            ))}
          </svg>
        </div>
      </div>

      {/* X Axis Dates Grid */}
      <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 grid grid-cols-7 text-center text-[10px] text-slate-400 font-medium pl-12">
        {ANALYTICS_REVENUE_TREND.map((d) => (
          <span key={d.date} className="truncate">{d.date}</span>
        ))}
      </div>
    </div>
  );
};
