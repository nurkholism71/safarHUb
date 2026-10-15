import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const AdminUserGrowthChart: React.FC = () => {
  const [timeframe, setTimeframe] = useState('Last 6 Months');

  // 6 month points: Apr (50K), May (75K), Jun (95K), Jul (120K), Aug (160K), Sep (210K)
  const points = [
    { month: 'Apr', value: '50K', x: 20, y: 120 },
    { month: 'May', value: '75K', x: 80, y: 105 },
    { month: 'Jun', value: '95K', x: 140, y: 92 },
    { month: 'Jul', value: '120K', x: 200, y: 78 },
    { month: 'Aug', value: '160K', x: 260, y: 55 },
    { month: 'Sep', value: '210K', x: 320, y: 25 }
  ];

  const pathD = `M 20 120 C 50 115, 60 108, 80 105 C 100 102, 120 95, 140 92 C 160 88, 180 82, 200 78 C 220 72, 240 62, 260 55 C 280 45, 300 32, 320 25`;
  const areaD = `${pathD} L 320 140 L 20 140 Z`;

  return (
    <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full overflow-hidden">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold text-slate-900">User Growth</span>
          <div className="relative">
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-600 appearance-none pr-7 cursor-pointer"
            >
              <option>Last 6 Months</option>
              <option>Last 12 Months</option>
              <option>All Time</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* SVG Growth Area & Line Chart */}
      <div className="my-2 relative flex flex-col justify-end">
        <div className="flex items-center">
          {/* Y Axis Labels */}
          <div className="flex flex-col justify-between h-36 text-[10px] text-slate-400 font-medium pr-2 text-right w-8">
            <span>200K</span>
            <span>150K</span>
            <span>100K</span>
            <span>50K</span>
            <span>0</span>
          </div>

          {/* SVG Canvas */}
          <div className="flex-1 relative h-36 border-b border-l border-slate-100">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 340 140"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="adminUserGrowthGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1="0" y1="25" x2="340" y2="25" stroke="#f1f5f9" strokeDasharray="3 3" />
              <line x1="0" y1="60" x2="340" y2="60" stroke="#f1f5f9" strokeDasharray="3 3" />
              <line x1="0" y1="95" x2="340" y2="95" stroke="#f1f5f9" strokeDasharray="3 3" />

              {/* Area Fill */}
              <path d={areaD} fill="url(#adminUserGrowthGrad)" />

              {/* Smooth Line */}
              <path
                d={pathD}
                fill="none"
                stroke="#0e5f2c"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Data Points */}
              {points.map((pt, i) => (
                <g key={i} className="group cursor-pointer">
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r="4"
                    fill="#0e5f2c"
                    stroke="#ffffff"
                    strokeWidth="2"
                    className="transition-transform group-hover:scale-150"
                  />
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* X Axis Month Labels */}
        <div className="flex items-center justify-between pl-10 pt-2 text-[10px] text-slate-400 font-medium">
          {points.map((pt, idx) => (
            <span key={idx} className="text-center w-8">
              {pt.month}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
