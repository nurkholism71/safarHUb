import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SUPPORT_TICKETS_BREAKDOWN } from '../../data/adminData';

export const AdminSupportTicketsDonut: React.FC = () => {
  const [timeframe, setTimeframe] = useState('This Month');

  // SVG Donut calculation
  const circumference = 376.99;
  let accumulatedPercent = 0;

  return (
    <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full overflow-hidden">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold text-slate-900">Support Tickets</span>
          <div className="relative">
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-600 appearance-none pr-7 cursor-pointer"
            >
              <option>This Month</option>
              <option>Last Quarter</option>
              <option>This Year</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 my-auto py-1">
        {/* SVG Donut */}
        <div className="relative w-32 h-32 flex items-center justify-center flex-shrink-0">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
            <circle
              cx="80"
              cy="80"
              r="60"
              fill="transparent"
              stroke="#f1f5f9"
              strokeWidth="20"
            />
            {SUPPORT_TICKETS_BREAKDOWN.map((item, index) => {
              const strokeDasharray = `${(item.percentage / 100) * circumference} ${circumference}`;
              const strokeDashoffset = -((accumulatedPercent / 100) * circumference);
              accumulatedPercent += item.percentage;

              return (
                <circle
                  key={index}
                  cx="80"
                  cy="80"
                  r="60"
                  fill="transparent"
                  stroke={item.color}
                  strokeWidth="20"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-500 hover:opacity-90"
                />
              );
            })}
          </svg>

          {/* Center Label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
            <span className="text-base font-bold text-slate-900 leading-tight">482</span>
            <span className="text-[10px] text-slate-500 font-medium">Total Tickets</span>
          </div>
        </div>

        {/* Legend List */}
        <div className="flex-1 space-y-2 w-full">
          {SUPPORT_TICKETS_BREAKDOWN.map((item, index) => (
            <div key={index} className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-slate-700 font-medium">{item.status}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-slate-500 font-normal">{item.percentage}%</span>
                <span className="text-slate-800 font-semibold w-8 text-right">
                  {item.count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
