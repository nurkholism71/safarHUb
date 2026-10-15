import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { CampaignPerformancePoint } from '../../../types/adminMarketing';

interface AdminMarketingCampaignPerformanceProps {
  data: CampaignPerformancePoint[];
}

export const AdminMarketingCampaignPerformance: React.FC<AdminMarketingCampaignPerformanceProps> = ({
  data
}) => {
  const [activeRange, setActiveRange] = useState<'7D' | '30D' | '90D' | '1Y'>('30D');

  // Chart coordinates calculation for SVG
  const width = 460;
  const height = 170;
  const paddingX = 20;
  const paddingY = 15;

  const maxReach = Math.max(...data.map(d => d.reach), 200000);
  const maxRevenue = Math.max(...data.map(d => d.revenue), 350000);
  const maxBookings = Math.max(...data.map(d => d.bookings), 900);

  const getPoints = (getValue: (d: CampaignPerformancePoint) => number, maxVal: number) => {
    return data.map((d, i) => {
      const x = paddingX + (i / (data.length - 1)) * (width - paddingX * 2);
      const y = height - paddingY - (getValue(d) / maxVal) * (height - paddingY * 2);
      return { x, y, data: d };
    });
  };

  const reachPoints = getPoints(d => d.reach, maxReach);
  const revenuePoints = getPoints(d => d.revenue, maxRevenue);
  const bookingsPoints = getPoints(d => d.bookings, maxBookings);

  const createSmoothPath = (points: { x: number; y: number }[]) => {
    if (points.length === 0) return '';
    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const current = points[i];
      const next = points[i + 1];
      const controlX = (current.x + next.x) / 2;
      path += ` C ${controlX} ${current.y}, ${controlX} ${next.y}, ${next.x} ${next.y}`;
    }
    return path;
  };

  const reachPath = createSmoothPath(reachPoints);
  const revenuePath = createSmoothPath(revenuePoints);
  const bookingsPath = createSmoothPath(bookingsPoints);

  const reachArea = `${reachPath} L ${reachPoints[reachPoints.length - 1].x} ${height - paddingY} L ${reachPoints[0].x} ${height - paddingY} Z`;

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-700 shadow-sm flex flex-col justify-between h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 flex-wrap">
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white whitespace-nowrap">
              Campaign Performance
            </h3>
            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 whitespace-nowrap shrink-0">
              <TrendingUp className="w-2.5 h-2.5" />
              +38% overall
            </span>
          </div>
          <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5 truncate">
            Reach, conversion bookings, and attributed revenue
          </p>
        </div>

        {/* Compact Range Buttons */}
        <div className="flex items-center gap-0.5 bg-neutral-100 dark:bg-neutral-700/60 p-0.5 rounded-lg text-[10px] font-semibold shrink-0">
          {(['7D', '30D', '90D', '1Y'] as const).map((range) => (
            <button
              key={range}
              onClick={() => setActiveRange(range)}
              className={`px-1.5 py-0.5 rounded transition-all whitespace-nowrap ${
                activeRange === range
                  ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-xs font-bold'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Chart Area */}
      <div className="w-full relative h-[180px] flex items-center justify-center overflow-hidden">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="reachGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Horizontal Grid lines */}
          {[0.25, 0.5, 0.75, 1].map((ratio) => {
            const y = height - paddingY - ratio * (height - paddingY * 2);
            return (
              <line
                key={ratio}
                x1={paddingX}
                y1={y}
                x2={width - paddingX}
                y2={y}
                stroke="currentColor"
                className="text-neutral-100 dark:text-neutral-700/50"
                strokeDasharray="3 3"
              />
            );
          })}

          {/* Area Fill */}
          <path d={reachArea} fill="url(#reachGradient)" />

          {/* Spline Lines */}
          <path
            d={reachPath}
            fill="none"
            stroke="#10b981"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d={revenuePath}
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d={bookingsPath}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray="3 3"
            strokeLinecap="round"
          />

          {/* Dots on Reach */}
          {reachPoints.map((pt, i) => (
            <circle
              key={i}
              cx={pt.x}
              cy={pt.y}
              r="3"
              className="fill-emerald-500 stroke-white dark:stroke-neutral-800"
              strokeWidth="1.5"
            />
          ))}
        </svg>
      </div>

      {/* X-Axis Date Labels & Legends */}
      <div className="pt-2 border-t border-neutral-100 dark:border-neutral-700/60">
        <div className="flex items-center justify-between text-[10px] text-neutral-400 font-medium px-1 mb-2.5">
          {data.map((d) => (
            <span key={d.date} className="whitespace-nowrap">{d.date}</span>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] font-medium">
          <div className="flex items-center gap-1 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
            <span className="text-neutral-600 dark:text-neutral-300">Reach (195K)</span>
          </div>
          <div className="flex items-center gap-1 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
            <span className="text-neutral-600 dark:text-neutral-300">Revenue (SAR 340K)</span>
          </div>
          <div className="flex items-center gap-1 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></span>
            <span className="text-neutral-600 dark:text-neutral-300">Bookings (820)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
