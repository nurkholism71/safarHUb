import React, { useState } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';

interface AdminAnalyticsHeaderProps {
  dateRange?: string;
  onSelectDateRange?: (range: string) => void;
}

export const AdminAnalyticsHeader: React.FC<AdminAnalyticsHeaderProps> = ({
  dateRange = '1 Oct 2026 - 31 Oct 2026',
  onSelectDateRange
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const ranges = [
    'Today',
    'Yesterday',
    'Last 7 Days',
    '1 Oct 2026 - 31 Oct 2026',
    'This Quarter (Q4 2026)',
    'Year to Date (2026)'
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0d2a1f] via-[#103a2b] to-[#144836] p-6 sm:p-7 text-white shadow-md border border-emerald-900/40">
      {/* Background Islamic / Skyline Backdrop */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1600&auto=format&fit=crop&q=80')`
        }}
      />
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-[#d4af37]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Reports & Analytics
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/80 mt-1">
            Get insights into your business performance across all services and destinations.
          </p>
        </div>

        {/* Date Range Selector Pill */}
        <div className="relative self-start sm:self-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-2 rounded-xl bg-white/95 hover:bg-white text-slate-800 text-xs font-semibold shadow-md flex items-center gap-2.5 transition-all cursor-pointer border border-white/20"
          >
            <Calendar className="w-4 h-4 text-[#0e5f2c]" />
            <span>{dateRange}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 py-1.5 z-50 animate-in fade-in zoom-in-95">
              {ranges.map((r) => (
                <button
                  key={r}
                  onClick={() => {
                    onSelectDateRange?.(r);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-3.5 py-2 text-xs transition-colors cursor-pointer ${
                    r === dateRange
                      ? 'bg-emerald-50 text-[#0e5f2c] font-bold dark:bg-emerald-950/40 dark:text-emerald-400'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
