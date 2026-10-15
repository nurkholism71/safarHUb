import React, { useState } from 'react';
import { 
  ChevronDown, 
  CreditCard, 
  Building, 
  Smartphone, 
  Banknote, 
  Globe2 
} from 'lucide-react';
import { 
  ADMIN_REVENUE_CHART_POINTS, 
  ADMIN_PAYMENT_METHOD_SHARES 
} from '../../../data/adminPaymentsData';

export const AdminPaymentsMiddleRow: React.FC = () => {
  const [revenueRange, setRevenueRange] = useState('Last 30 Days');

  // SVG Chart calculation for Revenue Overview
  const maxY = 1200000;
  const chartHeight = 110;
  const chartWidth = 320;

  const points = ADMIN_REVENUE_CHART_POINTS.map((d, index) => {
    const x = (index / (ADMIN_REVENUE_CHART_POINTS.length - 1)) * chartWidth;
    const y = chartHeight - (d.revenue / maxY) * chartHeight;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
      {/* 1. Revenue Overview Line Chart (lg:col-span-5) */}
      <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-slate-900 dark:text-white">
              Revenue Overview
            </h3>
            <div className="relative">
              <select
                value={revenueRange}
                onChange={(e) => setRevenueRange(e.target.value)}
                className="pl-2 pr-6 py-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-[10px] text-slate-600 dark:text-slate-300 font-medium appearance-none cursor-pointer"
              >
                <option>Last 30 Days</option>
                <option>This Quarter</option>
                <option>Year 2026</option>
              </select>
              <ChevronDown className="w-3 h-3 text-slate-400 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Chart Plot */}
          <div className="relative pt-2">
            <div className="flex items-start">
              {/* Y-Axis */}
              <div className="flex flex-col justify-between h-[110px] text-[9px] text-slate-400 font-mono pr-2 -mt-1 select-none whitespace-nowrap">
                <span>SAR 1.2M</span>
                <span>SAR 900K</span>
                <span>SAR 600K</span>
                <span>SAR 300K</span>
                <span>0</span>
              </div>

              {/* SVG Area */}
              <div className="flex-1 relative overflow-hidden">
                <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-[110px] overflow-visible">
                  {[0, 27.5, 55, 82.5, 110].map((y, i) => (
                    <line
                      key={i}
                      x1="0"
                      y1={y}
                      x2={chartWidth}
                      y2={y}
                      stroke="currentColor"
                      className="text-slate-100 dark:text-slate-800"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                    />
                  ))}

                  <polyline
                    fill="none"
                    stroke="#00A651"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={points}
                  />

                  {ADMIN_REVENUE_CHART_POINTS.map((d, index) => {
                    const x = (index / (ADMIN_REVENUE_CHART_POINTS.length - 1)) * chartWidth;
                    const y = chartHeight - (d.revenue / maxY) * chartHeight;
                    return (
                      <circle
                        key={index}
                        cx={x}
                        cy={y}
                        r="3.5"
                        className="fill-[#00A651] stroke-white dark:stroke-slate-900 stroke-2"
                      />
                    );
                  })}
                </svg>

                {/* X-Axis labels */}
                <div className="flex justify-between text-[9px] text-slate-400 font-medium pt-2 select-none">
                  {ADMIN_REVENUE_CHART_POINTS.map((d) => (
                    <span key={d.date}>{d.date}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Payment Methods Donut Chart (lg:col-span-4) */}
      <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between">
        <div>
          <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-2">
            Payment Methods
          </h3>

          <div className="flex items-center gap-4 my-1">
            {/* Donut Visual */}
            <div className="relative w-28 h-28 flex-shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#3b82f6"
                  strokeWidth="14"
                  strokeDasharray="100 238"
                  strokeDashoffset="0"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#8b5cf6"
                  strokeWidth="14"
                  strokeDasharray="57 238"
                  strokeDashoffset="-100"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#f59e0b"
                  strokeWidth="14"
                  strokeDasharray="43 238"
                  strokeDashoffset="-157"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#10b981"
                  strokeWidth="14"
                  strokeDasharray="19 238"
                  strokeDashoffset="-200"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#00A651"
                  strokeWidth="14"
                  strokeDasharray="12 238"
                  strokeDashoffset="-219"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#64748b"
                  strokeWidth="14"
                  strokeDasharray="7 238"
                  strokeDashoffset="-231"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                  SAR 8.4M
                </span>
                <span className="text-[8px] text-slate-400">
                  Total Revenue
                </span>
              </div>
            </div>

            {/* Donut Legend */}
            <div className="flex-1 space-y-1 text-[10px]">
              {ADMIN_PAYMENT_METHOD_SHARES.map((item) => (
                <div key={item.method} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 truncate">
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-slate-600 dark:text-slate-300 truncate text-[10px]">
                      {item.method}
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
      </div>

      {/* 3. Supported Payment Methods Card (lg:col-span-3) */}
      <div className="lg:col-span-3 bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between">
        <div>
          <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-3">
            Supported Payment Methods
          </h3>

          <div className="space-y-3">
            {/* Credit & Debit Card */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-2.5">
                <CreditCard className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    Credit & Debit Card
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Visa, Mastercard, Amex
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[10px] font-bold text-blue-600 font-mono">VISA</span>
                <span className="w-3.5 h-3.5 rounded-full bg-rose-500 inline-block opacity-80" />
              </div>
            </div>

            {/* Bank Transfer */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-2.5">
                <Building className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    Bank Transfer
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Local & International
                  </div>
                </div>
              </div>
            </div>

            {/* E-Wallet */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-2.5">
                <Smartphone className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    E-Wallet
                  </div>
                  <div className="text-[10px] text-slate-400">
                    STC Pay, Apple Pay, Google Pay
                  </div>
                </div>
              </div>
              <span className="text-[9px] font-bold text-purple-600 bg-purple-50 px-1 py-0.5 rounded">stc pay</span>
            </div>

            {/* Cash Payment */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-2.5">
                <Banknote className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    Cash Payment
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Pay at hotel/airport partner
                  </div>
                </div>
              </div>
            </div>

            {/* Multiple Currencies */}
            <div className="flex items-start justify-between gap-2 pt-1 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-start gap-2.5">
                <Globe2 className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    Multiple Currencies
                  </div>
                  <div className="text-[9px] text-slate-400">
                    SAR, USD, EUR, IDR, MYR, EGP
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-0.5 text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                $ € £ ﷼
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
