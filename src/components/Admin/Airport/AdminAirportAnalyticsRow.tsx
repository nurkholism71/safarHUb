import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import {
  ADMIN_AIRPORT_TRENDS,
  ADMIN_AIRPORT_SERVICE_SHARE,
  ADMIN_TOP_AIRPORTS,
  ADMIN_LIVE_FLIGHTS
} from '../../../data/adminAirportData';

interface AdminAirportAnalyticsRowProps {
  onViewAllAirports?: () => void;
  onViewAllFlights?: () => void;
}

export const AdminAirportAnalyticsRow: React.FC<AdminAirportAnalyticsRowProps> = ({
  onViewAllAirports,
  onViewAllFlights
}) => {
  const [trendTimeframe, setTrendTimeframe] = useState('Last 30 Days');

  // Chart coordinates
  const height = 80;
  const points = ADMIN_AIRPORT_TRENDS;

  const getX = (index: number) => 10 + index * 26;
  const getY = (val: number) => height - 6 - (val / 320) * (height - 14);

  const transferPath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(p.transfer)}`).join(' ');
  const loungePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(p.lounge)}`).join(' ');
  const meetAssistPath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(p.meetAssist)}`).join(' ');
  const fastTrackPath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(p.fastTrack)}`).join(' ');
  const othersPath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(p.others)}`).join(' ');

  // Donut circumference (2 * pi * 30 ≈ 188.5)
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  let accumulatedPercent = 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3.5 mb-5">
      {/* 1. Booking Trends */}
      <div className="bg-white rounded-xl p-3 sm:p-3.5 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full min-h-[285px]">
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
                <option>Last 30 Days</option>
                <option>This Quarter</option>
              </select>
              <ChevronDown className="w-2.5 h-2.5 text-slate-400 absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* SVG Multi-Line Chart */}
          <div className="relative mt-1">
            <div className="flex items-center">
              {/* Y Axis */}
              <div className="flex flex-col justify-between h-20 text-[7.5px] text-slate-400 font-medium pr-1 text-right w-4 flex-shrink-0">
                <span>250</span>
                <span>200</span>
                <span>150</span>
                <span>100</span>
                <span>50</span>
                <span>0</span>
              </div>

              {/* Canvas */}
              <div className="flex-1 relative h-20 border-b border-l border-slate-100">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 176 80" preserveAspectRatio="none">
                  {/* Dashed Grid */}
                  <line x1="0" y1="10" x2="176" y2="10" stroke="#f1f5f9" strokeDasharray="2 2" />
                  <line x1="0" y1="26" x2="176" y2="26" stroke="#f1f5f9" strokeDasharray="2 2" />
                  <line x1="0" y1="42" x2="176" y2="42" stroke="#f1f5f9" strokeDasharray="2 2" />
                  <line x1="0" y1="58" x2="176" y2="58" stroke="#f1f5f9" strokeDasharray="2 2" />

                  {/* Lines */}
                  <path d={othersPath} fill="none" stroke="#0284c7" strokeWidth="1.6" strokeLinecap="round" />
                  <path d={transferPath} fill="none" stroke="#10b981" strokeWidth="1.6" strokeLinecap="round" />
                  <path d={loungePath} fill="none" stroke="#f59e0b" strokeWidth="1.4" strokeLinecap="round" />
                  <path d={meetAssistPath} fill="none" stroke="#8b5cf6" strokeWidth="1.4" strokeLinecap="round" />
                  <path d={fastTrackPath} fill="none" stroke="#ef4444" strokeWidth="1.1" strokeLinecap="round" />

                  <circle
                    cx={getX(points.length - 1)}
                    cy={getY(points[points.length - 1].transfer)}
                    r="2.5"
                    fill="#10b981"
                    stroke="#ffffff"
                    strokeWidth="1"
                  />
                  <circle
                    cx={getX(points.length - 1)}
                    cy={getY(points[points.length - 1].others)}
                    r="2.5"
                    fill="#0284c7"
                    stroke="#ffffff"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </div>

            {/* X Axis */}
            <div className="flex items-center justify-between pl-4 pr-0.5 pt-1 text-[7.5px] text-slate-400 font-medium">
              {points.map((pt, idx) => (
                <span key={idx} className="text-center tracking-tighter">
                  {pt.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-3 gap-x-1 gap-y-0.5 pt-1.5 text-[8px] text-slate-600 font-medium border-t border-slate-100 mt-1">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] flex-shrink-0" />
            <span className="truncate">Meet & Assist</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] flex-shrink-0" />
            <span className="truncate">Transfer</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] flex-shrink-0" />
            <span className="truncate">Lounge</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] flex-shrink-0" />
            <span className="truncate">Fast Track</span>
          </div>
          <div className="flex items-center gap-1 col-span-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] flex-shrink-0" />
            <span className="truncate">Others</span>
          </div>
        </div>
      </div>

      {/* 2. Bookings by Service */}
      <div className="bg-white rounded-xl p-3 sm:p-3.5 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full min-h-[285px]">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-1.5">
            <h4 className="text-xs font-bold text-slate-900 whitespace-nowrap">Bookings by Service</h4>
          </div>

          {/* Donut & Legend */}
          <div className="flex items-center justify-between gap-1.5 pt-0.5">
            {/* SVG Donut */}
            <div className="relative w-18 h-18 sm:w-20 sm:h-20 flex items-center justify-center flex-shrink-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
                <circle
                  cx="40"
                  cy="40"
                  r={radius}
                  fill="transparent"
                  stroke="#f1f5f9"
                  strokeWidth="10"
                />
                {ADMIN_AIRPORT_SERVICE_SHARE.map((item, index) => {
                  const strokeDasharray = `${(item.percentage / 100) * circumference} ${circumference}`;
                  const strokeDashoffset = -((accumulatedPercent / 100) * circumference);
                  accumulatedPercent += item.percentage;

                  return (
                    <circle
                      key={index}
                      cx="40"
                      cy="40"
                      r={radius}
                      fill="transparent"
                      stroke={item.color}
                      strokeWidth="10"
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset={strokeDashoffset}
                      className="transition-all duration-300"
                    />
                  );
                })}
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                <span className="text-[10px] font-bold text-slate-900 leading-none">5,240</span>
                <span className="text-[6.5px] text-slate-400 font-medium uppercase tracking-tighter mt-0.5">Total</span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex-1 space-y-0.5 min-w-0 pl-1">
              {ADMIN_AIRPORT_SERVICE_SHARE.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-[8px] leading-tight">
                  <div className="flex items-center gap-1 min-w-0 pr-0.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-slate-700 font-medium truncate text-[8px]">{item.service}</span>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0 text-right">
                    <span className="text-slate-400 text-[7.5px]">{item.percentage}%</span>
                    <span className="text-slate-800 font-semibold text-[8px] min-w-[20px] text-right">
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
          <span>Top: <strong className="text-slate-800">Transfer (19%)</strong></span>
          <span className="text-emerald-700 font-semibold">+24.5%</span>
        </div>
      </div>

      {/* 3. Top Airports */}
      <div className="bg-white rounded-xl p-3 sm:p-3.5 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full min-h-[285px]">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-1.5">
            <h4 className="text-xs font-bold text-slate-900 whitespace-nowrap">Top Airports</h4>
            <button
              onClick={onViewAllAirports}
              className="text-[9px] font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-0.5 transition-colors cursor-pointer"
            >
              View All <ArrowRight className="w-2.5 h-2.5" />
            </button>
          </div>

          {/* List */}
          <div className="space-y-1 pt-0.5">
            {ADMIN_TOP_AIRPORTS.map((airport) => (
              <div
                key={airport.rank}
                className="flex items-center justify-between p-1 rounded hover:bg-slate-50 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-1.5 min-w-0">
                  <div className="w-3.5 h-3.5 rounded-full bg-slate-100 text-slate-700 font-bold text-[7.5px] flex items-center justify-center flex-shrink-0">
                    {airport.rank}
                  </div>

                  <img
                    src={airport.image}
                    alt={airport.name}
                    className="w-5 h-5 rounded object-cover ring-1 ring-slate-200 flex-shrink-0"
                  />

                  <div className="min-w-0">
                    <div className="text-[9px] font-bold text-slate-800 truncate group-hover:text-emerald-800 transition-colors leading-tight">
                      {airport.name}
                    </div>
                    <div className="text-[7.5px] text-slate-500 leading-none">
                      {airport.code} • {airport.bookings}
                    </div>
                  </div>
                </div>

                <span className="text-[8.5px] font-bold text-slate-700 flex-shrink-0 ml-1">
                  {airport.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-[8.5px] text-slate-500 mt-1">
          <span>Hub: <strong className="text-emerald-700">Riyadh (RUH)</strong></span>
          <span className="text-slate-400">28 Active</span>
        </div>
      </div>

      {/* 4. Live Flight Information */}
      <div className="bg-white rounded-xl p-3 sm:p-3.5 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full min-h-[285px]">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-1.5">
            <h4 className="text-xs font-bold text-slate-900 whitespace-nowrap">Live Flight Information</h4>
            <button
              onClick={onViewAllFlights}
              className="text-[9px] font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-0.5 transition-colors cursor-pointer"
            >
              View All <ArrowRight className="w-2.5 h-2.5" />
            </button>
          </div>

          {/* Flight status table */}
          <div className="space-y-1 pt-0.5">
            <div className="grid grid-cols-12 text-[7.5px] font-semibold text-slate-400 uppercase tracking-wider px-1 pb-0.5 border-b border-slate-50">
              <span className="col-span-3">Flight</span>
              <span className="col-span-3 text-center">Status</span>
              <span className="col-span-2 text-center">Time</span>
              <span className="col-span-4 text-right">Route</span>
            </div>

            {ADMIN_LIVE_FLIGHTS.map((flight) => {
              const getStatusBadge = (st: string) => {
                switch (st) {
                  case 'On Time':
                    return 'bg-emerald-50 text-emerald-700 border-emerald-200';
                  case 'Delayed':
                    return 'bg-amber-50 text-amber-700 border-amber-200';
                  case 'Boarding':
                    return 'bg-teal-50 text-teal-700 border-teal-200';
                  default:
                    return 'bg-slate-50 text-slate-700 border-slate-200';
                }
              };

              return (
                <div
                  key={flight.id}
                  className="grid grid-cols-12 items-center p-1 rounded hover:bg-slate-50 transition-colors text-[8.5px] font-medium"
                >
                  <span className="col-span-3 font-bold text-slate-900 truncate">
                    {flight.flight}
                  </span>
                  <div className="col-span-3 flex justify-center">
                    <span
                      className={`text-[7px] px-1 py-0.5 rounded font-semibold border ${getStatusBadge(
                        flight.status
                      )}`}
                    >
                      {flight.status}
                    </span>
                  </div>
                  <span className="col-span-2 text-center text-slate-500 text-[8px]">
                    {flight.time}
                  </span>
                  <span className="col-span-4 text-right text-slate-700 font-medium truncate text-[8px]">
                    {flight.route}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-[8.5px] text-slate-500 mt-1">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Radar Active
          </span>
          <span className="text-slate-400">Live GACAR Feed</span>
        </div>
      </div>
    </div>
  );
};
