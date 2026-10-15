import React, { useState } from 'react';
import { ChevronDown, TrendingUp } from 'lucide-react';

export const AdminRevenueChart: React.FC = () => {
  const [timeframe, setTimeframe] = useState('Last 30 Days');

  // Chart bar data for 7 interval points
  const barData = [
    { label: '1 Oct', bookings: 25, hotels: 40, transport: 20, exp: 15 },
    { label: '5 Oct', bookings: 35, hotels: 55, transport: 30, exp: 20 },
    { label: '10 Oct', bookings: 45, hotels: 65, transport: 35, exp: 25 },
    { label: '15 Oct', bookings: 55, hotels: 80, transport: 40, exp: 30 },
    { label: '20 Oct', bookings: 50, hotels: 75, transport: 45, exp: 25 },
    { label: '25 Oct', bookings: 65, hotels: 90, transport: 50, exp: 35 },
    { label: '30 Oct', bookings: 60, hotels: 85, transport: 45, exp: 30 }
  ];

  return (
    <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full overflow-hidden">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-1.5 gap-2">
          <span className="text-sm font-bold text-slate-900 truncate">Revenue Overview</span>
          <div className="relative flex-shrink-0">
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="text-[11px] bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-600 appearance-none pr-6 cursor-pointer"
            >
              <option>Last 30 Days</option>
              <option>This Quarter</option>
              <option>This Year</option>
            </select>
            <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">SAR 8,450,230</span>
          <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-0.5 truncate">
            <TrendingUp className="w-3 h-3 flex-shrink-0" />
            +25% from previous period
          </span>
        </div>
      </div>

      {/* Stacked Bar Chart Graphic */}
      <div className="my-1">
        <div className="relative h-36 sm:h-40 flex items-end justify-between pt-3 pb-1 border-b border-slate-100 gap-1 sm:gap-2">
          {/* Y Axis Grid lines background */}
          <div className="absolute inset-x-0 inset-y-0 flex flex-col justify-between pointer-events-none opacity-40">
            <div className="border-b border-dashed border-slate-200 w-full" />
            <div className="border-b border-dashed border-slate-200 w-full" />
            <div className="border-b border-dashed border-slate-200 w-full" />
            <div className="border-b border-dashed border-slate-200 w-full" />
          </div>

          {barData.map((bar, idx) => (
            <div key={idx} className="flex flex-col items-center flex-1 z-10 group cursor-pointer">
              <div className="w-full max-w-[18px] sm:max-w-[22px] flex flex-col rounded-t overflow-hidden transition-all group-hover:brightness-110">
                <div style={{ height: `${bar.exp * 0.35}px` }} className="bg-amber-400 w-full" title={`Experiences: ${bar.exp}`} />
                <div style={{ height: `${bar.transport * 0.4}px` }} className="bg-blue-400 w-full" title={`Transport: ${bar.transport}`} />
                <div style={{ height: `${bar.hotels * 0.5}px` }} className="bg-emerald-500 w-full" title={`Hotels: ${bar.hotels}`} />
                <div style={{ height: `${bar.bookings * 0.35}px` }} className="bg-[#083017] w-full" title={`Bookings: ${bar.bookings}`} />
              </div>
              <span className="text-[9px] sm:text-[10px] text-slate-400 font-medium mt-2 whitespace-nowrap">{bar.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-between pt-2.5 gap-2 text-[10px] text-slate-600 font-medium">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[#083017]" />
          <span>Bookings</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Hotels</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-blue-400" />
          <span>Transport</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>Experiences</span>
        </div>
      </div>
    </div>
  );
};
