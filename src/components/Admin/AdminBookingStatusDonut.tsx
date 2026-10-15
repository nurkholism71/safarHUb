import React from 'react';
import { BOOKING_STATUS_DATA } from '../../data/adminData';

export const AdminBookingStatusDonut: React.FC = () => {
  // SVG Donut calculation
  const circumference = 376.99;
  let accumulatedPercent = 0;

  return (
    <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full overflow-hidden">
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold text-slate-900">Booking Status</span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 my-auto py-1">
        {/* SVG Donut */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center flex-shrink-0">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
            <circle
              cx="80"
              cy="80"
              r="60"
              fill="transparent"
              stroke="#f1f5f9"
              strokeWidth="20"
            />
            {BOOKING_STATUS_DATA.map((item, index) => {
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
            <span className="text-sm sm:text-base font-bold text-slate-900 leading-tight">19,842</span>
            <span className="text-[9px] sm:text-[10px] text-slate-500 font-medium">Total Bookings</span>
          </div>
        </div>

        {/* Legend List */}
        <div className="flex-1 space-y-1.5 min-w-0">
          {BOOKING_STATUS_DATA.map((item, index) => (
            <div key={index} className="flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-1.5 min-w-0 pr-1">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-slate-700 font-medium truncate">{item.status}</span>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <span className="text-slate-400 font-normal">{item.percentage}%</span>
                <span className="text-slate-800 font-semibold w-10 text-right">
                  {item.count.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
