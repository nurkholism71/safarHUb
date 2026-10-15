import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { 
  ADMIN_USER_GROWTH_DATA, 
  ADMIN_USER_TYPE_SHARES, 
  ADMIN_USER_COUNTRY_SHARES 
} from '../../../data/adminUsersData';

interface AdminUsersRightSidebarProps {
  onViewAllCountries?: () => void;
}

export const AdminUsersRightSidebar: React.FC<AdminUsersRightSidebarProps> = ({
  onViewAllCountries
}) => {
  const [timeRange, setTimeRange] = useState('Last 12 Months');

  // Compact SVG Chart calculation for User Growth
  const maxY = 40000;
  const chartHeight = 65;
  const chartWidth = 240;
  
  const points = ADMIN_USER_GROWTH_DATA.map((d, index) => {
    const x = (index / (ADMIN_USER_GROWTH_DATA.length - 1)) * chartWidth;
    const y = chartHeight - (d.users / maxY) * chartHeight;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="flex flex-col gap-3 h-full justify-between">
      {/* 1. User Growth Line Chart (Compact) */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-3.5 border border-slate-200/80 dark:border-slate-800 shadow-xs">
        <div className="flex items-center justify-between mb-1.5">
          <h3 className="text-xs font-bold text-slate-900 dark:text-white">
            User Growth
          </h3>
          <div className="relative">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="pl-1.5 pr-5 py-0.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-[9px] text-slate-600 dark:text-slate-300 font-medium appearance-none cursor-pointer"
            >
              <option>Last 12 Months</option>
              <option>Year to Date</option>
              <option>Last 30 Days</option>
            </select>
            <ChevronDown className="w-2.5 h-2.5 text-slate-400 absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Line Chart Visual */}
        <div className="relative pt-1">
          <div className="flex items-start">
            {/* Y-Axis scale */}
            <div className="flex flex-col justify-between h-[65px] text-[8px] text-slate-400 font-mono pr-1.5 -mt-0.5 select-none">
              <span>40K</span>
              <span>20K</span>
              <span>0</span>
            </div>

            {/* SVG Plot */}
            <div className="flex-1 relative overflow-hidden">
              <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-[65px] overflow-visible">
                {/* Horizontal Grid lines */}
                {[0, 32.5, 65].map((y, i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={y}
                    x2={chartWidth}
                    y2={y}
                    stroke="currentColor"
                    className="text-slate-100 dark:text-slate-800"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />
                ))}

                {/* Line path */}
                <polyline
                  fill="none"
                  stroke="#00A651"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points={points}
                />

                {/* Data point dots */}
                {ADMIN_USER_GROWTH_DATA.map((d, index) => {
                  const x = (index / (ADMIN_USER_GROWTH_DATA.length - 1)) * chartWidth;
                  const y = chartHeight - (d.users / maxY) * chartHeight;
                  return (
                    <circle
                      key={index}
                      cx={x}
                      cy={y}
                      r="2"
                      className="fill-[#00A651] stroke-white dark:stroke-slate-900 stroke-1"
                    />
                  );
                })}
              </svg>

              {/* X-Axis labels */}
              <div className="flex justify-between text-[8px] text-slate-400 font-medium pt-1 select-none">
                {['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov', 'Dec'].map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Users by Type Donut Chart (Compact) */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-3.5 border border-slate-200/80 dark:border-slate-800 shadow-xs">
        <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-2">
          Users by Type
        </h3>

        <div className="flex items-center gap-3">
          {/* Donut Chart with Center Text */}
          <div className="relative w-24 h-24 flex-shrink-0">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle
                cx="50"
                cy="50"
                r="38"
                fill="transparent"
                stroke="#00A651"
                strokeWidth="14"
                strokeDasharray="138 238"
                strokeDashoffset="0"
              />
              <circle
                cx="50"
                cy="50"
                r="38"
                fill="transparent"
                stroke="#3b82f6"
                strokeWidth="14"
                strokeDasharray="47 238"
                strokeDashoffset="-138"
              />
              <circle
                cx="50"
                cy="50"
                r="38"
                fill="transparent"
                stroke="#f59e0b"
                strokeWidth="14"
                strokeDasharray="21 238"
                strokeDashoffset="-185"
              />
              <circle
                cx="50"
                cy="50"
                r="38"
                fill="transparent"
                stroke="#8b5cf6"
                strokeWidth="14"
                strokeDasharray="16 238"
                strokeDashoffset="-206"
              />
              <circle
                cx="50"
                cy="50"
                r="38"
                fill="transparent"
                stroke="#06b6d4"
                strokeWidth="14"
                strokeDasharray="9 238"
                strokeDashoffset="-222"
              />
              <circle
                cx="50"
                cy="50"
                r="38"
                fill="transparent"
                stroke="#94a3b8"
                strokeWidth="14"
                strokeDasharray="7 238"
                strokeDashoffset="-231"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-[11px] font-bold text-slate-900 dark:text-white leading-none">
                324,850
              </span>
              <span className="text-[8px] text-slate-400 mt-0.5">
                Total Users
              </span>
            </div>
          </div>

          {/* Donut Legend in compact 2-column grid */}
          <div className="flex-1 grid grid-cols-1 gap-y-1 text-[10px]">
            {ADMIN_USER_TYPE_SHARES.slice(0, 4).map((item) => (
              <div key={item.type} className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 truncate">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-slate-600 dark:text-slate-300 truncate text-[10px]">
                    {item.type}
                  </span>
                </div>
                <span className="font-semibold text-slate-900 dark:text-white font-mono ml-1 text-[10px]">
                  {item.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Users by Country (Compact) */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-3.5 border border-slate-200/80 dark:border-slate-800 shadow-xs">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-bold text-slate-900 dark:text-white">
            Users by Country
          </h3>
          <button
            onClick={onViewAllCountries}
            className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-0.5 cursor-pointer"
          >
            <span>View All</span>
            <ArrowRight className="w-2.5 h-2.5" />
          </button>
        </div>

        <div className="space-y-1.5">
          {ADMIN_USER_COUNTRY_SHARES.map((item) => (
            <div key={item.country} className="space-y-0.5">
              <div className="flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px]">{item.flag}</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300 text-[10px]">
                    {item.country}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px]">
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {item.percentage}%
                  </span>
                  <span className="text-slate-400 text-[9px]">
                    {item.count}
                  </span>
                </div>
              </div>
              <div className="w-full h-1 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${item.percentage}%`,
                    backgroundColor: item.color
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
