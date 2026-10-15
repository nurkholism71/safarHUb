import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { TOP_SERVICES_DATA } from '../../data/adminData';

export const AdminTopServices: React.FC = () => {
  const [timeframe, setTimeframe] = useState('This Month');

  return (
    <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 gap-2">
        <span className="text-sm font-bold text-slate-900 truncate">Top Services</span>
        <div className="relative flex-shrink-0">
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="text-[11px] bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-600 appearance-none pr-6 cursor-pointer"
          >
            <option>This Month</option>
            <option>Last Month</option>
            <option>This Year</option>
          </select>
          <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* Progress Bars List */}
      <div className="space-y-2.5 my-auto">
        {TOP_SERVICES_DATA.map((service, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-medium text-slate-800 truncate pr-2">{service.name}</span>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-slate-400 font-normal">{service.percentage}%</span>
                <span className="font-semibold text-slate-900 w-10 text-right">
                  {service.count.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Bar */}
            <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${service.color}`}
                style={{ width: `${service.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
