import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import {
  ADMIN_JASTIP_LOCATION_SHARES,
  ADMIN_JASTIP_TRENDS,
  ADMIN_JASTIP_TOP_CATEGORIES
} from '../../../data/adminJastipData';

interface AdminJastipBottomAnalyticsProps {
  onViewAllCategories?: () => void;
}

export const AdminJastipBottomAnalytics: React.FC<AdminJastipBottomAnalyticsProps> = ({
  onViewAllCategories
}) => {
  const [trendTimeframe, setTrendTimeframe] = useState('Last 30 Days');

  // Chart coordinates
  const height = 80;
  const points = ADMIN_JASTIP_TRENDS;

  const getX = (index: number) => 10 + index * 30;
  const getY = (val: number) => height - 6 - (val / 220) * (height - 14);

  const totalPath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(p.total)}`).join(' ');
  const completedPath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(p.completed)}`).join(' ');
  const pendingPath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(p.pending)}`).join(' ');
  const cancelledPath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(p.cancelled)}`).join(' ');

  // Donut circumference (2 * pi * 32 ≈ 201.06)
  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  let accumulatedPercent = 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
      {/* 1. Orders by Location Card */}
      <div className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full min-h-[275px]">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-xs font-bold text-slate-900 whitespace-nowrap">Orders by Location</h4>
          </div>

          {/* Donut & Legend Container */}
          <div className="flex items-center justify-between gap-2 pt-1">
            {/* SVG Donut */}
            <div className="relative w-20 h-20 sm:w-22 sm:h-22 flex items-center justify-center flex-shrink-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 90 90">
                <circle
                  cx="45"
                  cy="45"
                  r={radius}
                  fill="transparent"
                  stroke="#f1f5f9"
                  strokeWidth="12"
                />
                {ADMIN_JASTIP_LOCATION_SHARES.map((item, index) => {
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
                <span className="text-[10px] font-bold text-slate-900 leading-none">3,280</span>
                <span className="text-[6.5px] text-slate-400 font-medium uppercase tracking-tighter mt-0.5">Total Orders</span>
              </div>
            </div>

            {/* Detailed Legend List */}
            <div className="flex-1 space-y-0.5 min-w-0 pl-1">
              {ADMIN_JASTIP_LOCATION_SHARES.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-[9px] leading-tight">
                  <div className="flex items-center gap-1 min-w-0 pr-0.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-slate-700 font-medium text-[9px] truncate">{item.city}</span>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0 text-right">
                    <span className="text-slate-400 text-[8px]">{item.percentage}%</span>
                    <span className="text-slate-800 font-semibold text-[8.5px] min-w-[22px] text-right">
                      {item.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footnote */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[8.5px] text-slate-500 mt-2">
          <span>Top Hub: <strong className="text-slate-800">Makkah (35%)</strong></span>
          <span className="text-emerald-700 font-semibold">+28% YoY</span>
        </div>
      </div>

      {/* 2. Orders Trend Card */}
      <div className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full min-h-[275px]">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-1.5 gap-1">
            <h4 className="text-xs font-bold text-slate-900 whitespace-nowrap">Orders Trend</h4>
            <div className="relative flex-shrink-0">
              <select
                value={trendTimeframe}
                onChange={(e) => setTrendTimeframe(e.target.value)}
                className="text-[9px] bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5 text-slate-600 font-medium focus:outline-none appearance-none pr-4 cursor-pointer"
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
                <span>200</span>
                <span>150</span>
                <span>100</span>
                <span>50</span>
                <span>0</span>
              </div>

              {/* Canvas */}
              <div className="flex-1 relative h-20 border-b border-l border-slate-100">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 200 80" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="10" x2="200" y2="10" stroke="#f1f5f9" strokeDasharray="2 2" />
                  <line x1="0" y1="28" x2="200" y2="28" stroke="#f1f5f9" strokeDasharray="2 2" />
                  <line x1="0" y1="46" x2="200" y2="46" stroke="#f1f5f9" strokeDasharray="2 2" />
                  <line x1="0" y1="64" x2="200" y2="64" stroke="#f1f5f9" strokeDasharray="2 2" />

                  {/* Lines */}
                  <path d={totalPath} fill="none" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" />
                  <path d={completedPath} fill="none" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" />
                  <path d={pendingPath} fill="none" stroke="#f59e0b" strokeWidth="1.4" strokeLinecap="round" />
                  <path d={cancelledPath} fill="none" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round" />

                  <circle
                    cx={getX(points.length - 1)}
                    cy={getY(points[points.length - 1].total)}
                    r="2.5"
                    fill="#0284c7"
                    stroke="#ffffff"
                    strokeWidth="1"
                  />
                  <circle
                    cx={getX(points.length - 1)}
                    cy={getY(points[points.length - 1].completed)}
                    r="2.5"
                    fill="#10b981"
                    stroke="#ffffff"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </div>

            {/* X Axis */}
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
        <div className="flex items-center justify-between pt-1.5 text-[8.5px] text-slate-600 font-medium border-t border-slate-100 mt-1">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]" />
            <span>Total</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            <span>Completed</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
            <span>Pending</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444]" />
            <span>Cancelled</span>
          </div>
        </div>
      </div>

      {/* 3. Top Categories Card */}
      <div className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full min-h-[275px]">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-xs font-bold text-slate-900 whitespace-nowrap">Top Categories</h4>
            <button
              onClick={onViewAllCategories}
              className="text-[9px] font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-0.5 transition-colors cursor-pointer"
            >
              View All <ArrowRight className="w-2.5 h-2.5" />
            </button>
          </div>

          {/* Category Progress Bars */}
          <div className="space-y-2 pt-0.5">
            {ADMIN_JASTIP_TOP_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-[9.5px]">
                  <span className="font-semibold text-slate-800">{cat.name}</span>
                  <div className="flex items-center gap-2 text-slate-500">
                    <span className="font-bold text-slate-700">{cat.percentage}%</span>
                    <span className="text-[8.5px]">({cat.count})</span>
                  </div>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${cat.percentage * 3.2}%`,
                      backgroundColor: cat.color
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[8.5px] text-slate-500 mt-2">
          <span>Most Requested: <strong className="text-emerald-700">Parfum Al Haramain</strong></span>
          <span className="text-slate-400">920 Orders</span>
        </div>
      </div>
    </div>
  );
};
