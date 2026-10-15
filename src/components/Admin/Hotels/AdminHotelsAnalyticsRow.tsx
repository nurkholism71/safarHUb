import React, { useState } from 'react';
import { ChevronDown, ArrowRight, Star } from 'lucide-react';
import {
  ADMIN_HOTEL_TRENDS,
  ADMIN_HOTELS_BY_DESTINATION,
  ADMIN_TOP_PERFORMING_HOTELS
} from '../../../data/adminHotelData';

interface AdminHotelsAnalyticsRowProps {
  onViewAllTopHotels?: () => void;
}

export const AdminHotelsAnalyticsRow: React.FC<AdminHotelsAnalyticsRowProps> = ({
  onViewAllTopHotels
}) => {
  const [trendTimeframe, setTrendTimeframe] = useState('Last 30 Days');

  // Multi-line chart calculations (max 4000 => height 130px)
  const height = 130;
  const points = ADMIN_HOTEL_TRENDS;

  const getX = (index: number) => 25 + index * 48;
  const getY = (val: number) => height - (val / 4200) * (height - 15);

  const makkahPath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(p.makkah)}`).join(' ');
  const madinahPath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(p.madinah)}`).join(' ');
  const riyadhPath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(p.riyadh)}`).join(' ');
  const jeddahPath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(p.jeddah)}`).join(' ');
  const otherPath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(p.other)}`).join(' ');

  // Donut circumference
  const circumference = 376.99;
  let accumulatedPercent = 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 mb-6">
      {/* 1. Hotel Bookings Trend */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between overflow-hidden">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-slate-900">Hotel Bookings Trend</span>
            <div className="relative">
              <select
                value={trendTimeframe}
                onChange={(e) => setTrendTimeframe(e.target.value)}
                className="text-[11px] bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-600 appearance-none pr-6 cursor-pointer"
              >
                <option>Last 30 Days</option>
                <option>This Quarter</option>
                <option>This Year</option>
              </select>
              <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* SVG Multi-Line Chart */}
        <div className="my-2 relative flex flex-col justify-end">
          <div className="flex items-center">
            {/* Y Axis Labels */}
            <div className="flex flex-col justify-between h-32 text-[9px] text-slate-400 font-medium pr-2 text-right w-7">
              <span>4K</span>
              <span>3K</span>
              <span>2K</span>
              <span>1K</span>
              <span>0</span>
            </div>

            {/* SVG Canvas */}
            <div className="flex-1 relative h-32 border-b border-l border-slate-100">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 340 130" preserveAspectRatio="none">
                {/* Grid Lines */}
                <line x1="0" y1="20" x2="340" y2="20" stroke="#f8fafc" strokeDasharray="3 3" />
                <line x1="0" y1="50" x2="340" y2="50" stroke="#f8fafc" strokeDasharray="3 3" />
                <line x1="0" y1="80" x2="340" y2="80" stroke="#f8fafc" strokeDasharray="3 3" />
                <line x1="0" y1="110" x2="340" y2="110" stroke="#f8fafc" strokeDasharray="3 3" />

                {/* Paths */}
                <path d={makkahPath} fill="none" stroke="#0e5f2c" strokeWidth="2.5" strokeLinecap="round" />
                <path d={madinahPath} fill="none" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" />
                <path d={riyadhPath} fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
                <path d={jeddahPath} fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                <path d={otherPath} fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" />

                {/* Points */}
                {points.map((pt, i) => (
                  <circle
                    key={i}
                    cx={getX(i)}
                    cy={getY(pt.makkah)}
                    r="3.5"
                    fill="#0e5f2c"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />
                ))}
              </svg>
            </div>
          </div>

          {/* X Axis Labels */}
          <div className="flex items-center justify-between pl-8 pt-1.5 text-[9px] text-slate-400 font-medium">
            {points.map((pt, idx) => (
              <span key={idx} className="text-center w-8 truncate">
                {pt.label}
              </span>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-between pt-2.5 gap-2 text-[10px] text-slate-600 font-medium border-t border-slate-50">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#0e5f2c]" />
            <span>Makkah</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#0d9488]" />
            <span>Madinah</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
            <span>Riyadh</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
            <span>Jeddah</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#8b5cf6]" />
            <span>Other</span>
          </div>
        </div>
      </div>

      {/* 2. Hotels by Destination Donut */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between overflow-hidden">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-slate-900">Hotels by Destination</span>
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
              {ADMIN_HOTELS_BY_DESTINATION.map((item, index) => {
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
              <span className="text-sm sm:text-base font-bold text-slate-900 leading-tight">1,280</span>
              <span className="text-[9px] sm:text-[10px] text-slate-500 font-medium">Total Hotels</span>
            </div>
          </div>

          {/* Legend List */}
          <div className="flex-1 space-y-1.5 min-w-0">
            {ADMIN_HOTELS_BY_DESTINATION.map((item, index) => (
              <div key={index} className="flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5 min-w-0 pr-1">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-slate-700 font-medium truncate">{item.city}</span>
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span className="text-slate-400 font-normal w-7 text-right">{item.percentage}%</span>
                  <span className="text-slate-800 font-semibold w-8 text-right">
                    {item.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Top Performing Hotels */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between overflow-hidden">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-bold text-slate-900">Top Performing Hotels</span>
            <button
              onClick={onViewAllTopHotels}
              className="text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 transition-colors cursor-pointer"
            >
              View All <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Hotel List */}
        <div className="space-y-2">
          {ADMIN_TOP_PERFORMING_HOTELS.map((hotel) => (
            <div
              key={hotel.rank}
              className="flex items-center justify-between p-1 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-4 h-4 rounded-full bg-slate-100 text-slate-600 font-bold text-[10px] flex items-center justify-center flex-shrink-0">
                  {hotel.rank}
                </div>

                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-8 h-8 rounded-lg object-cover ring-1 ring-slate-200 flex-shrink-0"
                />

                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-900 truncate group-hover:text-emerald-800 transition-colors">
                    {hotel.name}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate">
                    {hotel.city}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs font-bold text-slate-800 flex-shrink-0">
                <span>{hotel.rating}</span>
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
