import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ANALYTICS_USER_GROWTH } from '../../../data/adminAnalyticsData';

export const AdminAnalyticsUserGrowth: React.FC = () => {
  const [year, setYear] = useState('2026');

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs overflow-hidden flex flex-col justify-between h-full">
      {/* Header & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap">
          User Growth
        </h3>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 text-[10px] font-semibold">
            <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#0e5f2c]" /> New Users
            </span>
            <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-blue-500" /> Active Users
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

      {/* SVG Area & Spline Graph */}
      <div className="relative h-44 w-full">
        {/* Y-axis Guides */}
        <div className="absolute top-0 left-0 h-full flex flex-col justify-between text-[9px] text-slate-400 pointer-events-none pb-5 w-7 text-left z-10">
          <span>40K</span>
          <span>30K</span>
          <span>20K</span>
          <span>10K</span>
          <span>0</span>
        </div>

        <div className="pl-7 h-full w-full">
          <svg className="w-full h-full overflow-hidden" viewBox="0 0 480 140" preserveAspectRatio="none">
            <defs>
              <linearGradient id="userGrowthGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Grid lines */}
            <line x1="0" y1="10" x2="480" y2="10" stroke="currentColor" strokeDasharray="2 2" className="text-slate-100 dark:text-slate-800" />
            <line x1="0" y1="40" x2="480" y2="40" stroke="currentColor" strokeDasharray="2 2" className="text-slate-100 dark:text-slate-800" />
            <line x1="0" y1="70" x2="480" y2="70" stroke="currentColor" strokeDasharray="2 2" className="text-slate-100 dark:text-slate-800" />
            <line x1="0" y1="100" x2="480" y2="100" stroke="currentColor" strokeDasharray="2 2" className="text-slate-100 dark:text-slate-800" />
            <line x1="0" y1="125" x2="480" y2="125" stroke="currentColor" className="text-slate-200 dark:text-slate-700" />

            {/* Active Users Area Fill */}
            <path
              d="M 10 105 Q 100 95, 200 75 T 350 48 T 470 12 L 470 125 L 10 125 Z"
              fill="url(#userGrowthGrad)"
            />

            {/* Active Users Line (Blue) */}
            <path
              d="M 10 105 Q 100 95, 200 75 T 350 48 T 470 12"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* New Users Line (Green) */}
            <path
              d="M 10 112 Q 100 105, 200 90 T 350 68 T 470 30"
              fill="none"
              stroke="#0e5f2c"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Active Users Dots */}
            {[
              { x: 10, y: 105 },
              { x: 52, y: 100 },
              { x: 94, y: 92 },
              { x: 136, y: 86 },
              { x: 178, y: 80 },
              { x: 220, y: 72 },
              { x: 262, y: 68 },
              { x: 304, y: 62 },
              { x: 346, y: 54 },
              { x: 388, y: 45 },
              { x: 430, y: 32 },
              { x: 470, y: 12 }
            ].map((pt, i) => (
              <circle key={i} cx={pt.x} cy={pt.y} r="2.5" fill="#3b82f6" stroke="#ffffff" strokeWidth="1" />
            ))}

            {/* Month Labels inside SVG */}
            {ANALYTICS_USER_GROWTH.map((d, i) => {
              const xPos = 10 + i * ((470 - 10) / 11);
              return (
                <text
                  key={d.month}
                  x={xPos}
                  y="138"
                  textAnchor="middle"
                  fill="#94a3b8"
                  fontSize="9"
                  fontFamily="inherit"
                >
                  {d.month}
                </text>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
};
