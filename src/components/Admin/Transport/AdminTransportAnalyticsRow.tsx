import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import {
  ADMIN_TRANSPORT_TRENDS,
  ADMIN_TRANSPORT_TYPE_SHARE,
  ADMIN_POPULAR_ROUTES
} from '../../../data/adminTransportData';

interface AdminTransportAnalyticsRowProps {
  onViewAllRoutes?: () => void;
}

export const AdminTransportAnalyticsRow: React.FC<AdminTransportAnalyticsRowProps> = ({
  onViewAllRoutes
}) => {
  const [trendTimeframe, setTrendTimeframe] = useState('30 Days');

  // Chart coordinates
  const height = 75;
  const points = ADMIN_TRANSPORT_TRENDS;

  const getX = (index: number) => 10 + index * 31;
  const getY = (val: number) => height - 6 - (val / 820) * (height - 14);

  const flightsPath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(p.flights)}`).join(' ');
  const busesPath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(p.buses)}`).join(' ');
  const carsPath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(p.cars)}`).join(' ');
  const trainsPath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(p.trains)}`).join(' ');
  const airportPath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(p.airport)}`).join(' ');

  // Donut circumference (2 * pi * 32 ≈ 201.06)
  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  let accumulatedPercent = 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 mb-5">
      {/* 1. Booking Trends Card */}
      <div className="bg-white rounded-xl p-3 sm:p-3.5 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full min-h-[270px]">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-1.5 gap-1">
            <h4 className="text-xs font-bold text-slate-900 whitespace-nowrap">Booking Trends</h4>
            <div className="relative flex-shrink-0">
              <select
                value={trendTimeframe}
                onChange={(e) => setTrendTimeframe(e.target.value)}
                className="text-[9px] bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5 text-slate-600 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-600 appearance-none pr-4 cursor-pointer"
              >
                <option>30 Days</option>
                <option>Quarter</option>
                <option>Year</option>
              </select>
              <ChevronDown className="w-2.5 h-2.5 text-slate-400 absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* SVG Curve Chart */}
          <div className="relative mt-1">
            <div className="flex items-center">
              {/* Y Axis Labels */}
              <div className="flex flex-col justify-between h-20 text-[7.5px] text-slate-400 font-medium pr-1 text-right w-4 flex-shrink-0">
                <span>800</span>
                <span>600</span>
                <span>400</span>
                <span>200</span>
                <span>0</span>
              </div>

              {/* Chart Canvas with SVG X-Axis labels for 0 word-wrapping bugs */}
              <div className="flex-1 relative h-20 border-b border-l border-slate-100">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 206 75" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="8" x2="206" y2="8" stroke="#f1f5f9" strokeDasharray="2 2" />
                  <line x1="0" y1="24" x2="206" y2="24" stroke="#f1f5f9" strokeDasharray="2 2" />
                  <line x1="0" y1="40" x2="206" y2="40" stroke="#f1f5f9" strokeDasharray="2 2" />
                  <line x1="0" y1="56" x2="206" y2="56" stroke="#f1f5f9" strokeDasharray="2 2" />

                  {/* Trend Lines */}
                  <path d={flightsPath} fill="none" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" />
                  <path d={busesPath} fill="none" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" />
                  <path d={carsPath} fill="none" stroke="#f59e0b" strokeWidth="1.4" strokeLinecap="round" />
                  <path d={trainsPath} fill="none" stroke="#8b5cf6" strokeWidth="1.4" strokeLinecap="round" />
                  <path d={airportPath} fill="none" stroke="#ef4444" strokeWidth="1.1" strokeLinecap="round" />

                  {/* Last points */}
                  <circle
                    cx={getX(points.length - 1)}
                    cy={getY(points[points.length - 1].flights)}
                    r="2.5"
                    fill="#0284c7"
                    stroke="#ffffff"
                    strokeWidth="1"
                  />
                  <circle
                    cx={getX(points.length - 1)}
                    cy={getY(points[points.length - 1].buses)}
                    r="2.5"
                    fill="#10b981"
                    stroke="#ffffff"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </div>

            {/* X Axis Labels using crisp flex formatting */}
            <div className="flex items-center justify-between pl-4 pr-0.5 pt-1 text-[8px] text-slate-400 font-medium">
              {points.map((pt, idx) => (
                <span key={idx} className="text-center tracking-tighter">
                  {pt.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-3 gap-x-1 gap-y-0.5 pt-1.5 text-[8.5px] text-slate-600 font-medium border-t border-slate-100 mt-1">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] flex-shrink-0" />
            <span className="truncate">Flight</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] flex-shrink-0" />
            <span className="truncate">Bus</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] flex-shrink-0" />
            <span className="truncate">Car</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] flex-shrink-0" />
            <span className="truncate">Train</span>
          </div>
          <div className="flex items-center gap-1 col-span-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] flex-shrink-0" />
            <span className="truncate">Airport Trf</span>
          </div>
        </div>
      </div>

      {/* 2. Bookings by Type Donut Card */}
      <div className="bg-white rounded-xl p-3 sm:p-3.5 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full min-h-[270px]">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-1.5">
            <h4 className="text-xs font-bold text-slate-900 whitespace-nowrap">Bookings by Type</h4>
            <span className="text-[8.5px] font-semibold text-emerald-700 bg-emerald-50 px-1 py-0.5 rounded">+18.2%</span>
          </div>

          {/* Donut & Legend Container */}
          <div className="flex items-center justify-between gap-1.5 pt-0.5">
            {/* SVG Donut */}
            <div className="relative w-18 h-18 sm:w-20 sm:h-20 flex items-center justify-center flex-shrink-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 90 90">
                <circle
                  cx="45"
                  cy="45"
                  r={radius}
                  fill="transparent"
                  stroke="#f1f5f9"
                  strokeWidth="12"
                />
                {ADMIN_TRANSPORT_TYPE_SHARE.map((item, index) => {
                  const strokeDasharray = `${(item.percentage / 100) * circumference} ${circumference}`;
                  const strokeDashoffset = -((accumulatedPercent / 100) * circumference);
                  accumulatedPercent += item.percentage;

                  return (
                    <circle
                      key={index}
                      cx="45"
                      cy="45"
                      r={radius}
                      fill="transparent"
                      stroke={item.color}
                      strokeWidth="12"
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset={strokeDashoffset}
                      className="transition-all duration-300"
                    />
                  );
                })}
              </svg>

              {/* Center Metric */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                <span className="text-[10px] font-bold text-slate-900 leading-none">12.5k</span>
                <span className="text-[6.5px] text-slate-400 font-medium uppercase tracking-tighter mt-0.5">Total</span>
              </div>
            </div>

            {/* Detailed Legend List with compact micro fonts */}
            <div className="flex-1 space-y-0.5 min-w-0 pl-1">
              {ADMIN_TRANSPORT_TYPE_SHARE.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-[8.5px] leading-tight">
                  <div className="flex items-center gap-1 min-w-0 pr-0.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-slate-700 font-medium text-[8.5px] truncate">{item.type}</span>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0 text-right">
                    <span className="text-slate-400 text-[8px]">{item.percentage}%</span>
                    <span className="text-slate-800 font-semibold text-[8px] min-w-[22px] text-right">
                      {item.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footnote */}
        <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-[8.5px] text-slate-500 mt-1">
          <span>Top: <strong className="text-slate-800">Flight (38%)</strong></span>
          <span className="text-slate-400">4,765 bks</span>
        </div>
      </div>

      {/* 3. Popular Routes Card */}
      <div className="bg-white rounded-xl p-3 sm:p-3.5 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full min-h-[270px]">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-1.5">
            <h4 className="text-xs font-bold text-slate-900 whitespace-nowrap">Popular Routes</h4>
            <button
              onClick={onViewAllRoutes}
              className="text-[9px] font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-0.5 transition-colors cursor-pointer"
            >
              View All <ArrowRight className="w-2.5 h-2.5" />
            </button>
          </div>

          {/* Routes List */}
          <div className="space-y-1 pt-0.5">
            {ADMIN_POPULAR_ROUTES.map((route) => (
              <div
                key={route.rank}
                className="flex items-center justify-between p-1 rounded hover:bg-slate-50 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-1.5 min-w-0">
                  <div className="w-3.5 h-3.5 rounded-full bg-slate-100 text-slate-700 font-bold text-[7.5px] flex items-center justify-center flex-shrink-0">
                    {route.rank}
                  </div>

                  <img
                    src={route.image}
                    alt={route.from}
                    className="w-5 h-5 rounded object-cover ring-1 ring-slate-200 flex-shrink-0"
                  />

                  <div className="min-w-0">
                    <div className="text-[9.5px] font-bold text-slate-800 truncate group-hover:text-emerald-800 transition-colors leading-tight">
                      {route.from} → {route.to}
                    </div>
                    <div className="text-[8px] text-slate-500 leading-none">
                      {route.bookings}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-[8.5px] text-slate-500 mt-1">
          <span>High Demand: <strong className="text-emerald-700">Riyadh-Makkah</strong></span>
          <span className="text-slate-400">Live</span>
        </div>
      </div>
    </div>
  );
};
