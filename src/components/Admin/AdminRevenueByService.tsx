import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const AdminRevenueByService: React.FC = () => {
  const [timeframe, setTimeframe] = useState('This Month');

  const services = [
    { name: 'Hotels', amount: 'SAR 3.5M', heightPct: 90, color: 'bg-[#0e5f2c]' },
    { name: 'Umrah Packages', amount: 'SAR 2.1M', heightPct: 60, color: 'bg-teal-600' },
    { name: 'Transport', amount: 'SAR 1.4M', heightPct: 45, color: 'bg-blue-500' },
    { name: 'Experiences', amount: 'SAR 0.8M', heightPct: 30, color: 'bg-amber-400' },
    { name: 'Airport Services', amount: 'SAR 0.4M', heightPct: 18, color: 'bg-sky-400' }
  ];

  return (
    <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full overflow-hidden">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold text-slate-900">Revenue by Service</span>
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

      {/* Vertical Column Bars */}
      <div className="my-3">
        <div className="h-36 flex items-end justify-between gap-3 pt-4 border-b border-slate-100">
          {services.map((item, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center group cursor-pointer">
              <div className="w-full max-w-[48px] flex flex-col items-center">
                <div
                  className={`w-full rounded-t-md transition-all group-hover:brightness-110 ${item.color}`}
                  style={{ height: `${item.heightPct * 1.2}px` }}
                />
              </div>
              <span className="text-[10px] text-slate-600 font-bold mt-2 truncate w-full text-center">
                {item.name}
              </span>
              <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">
                {item.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
