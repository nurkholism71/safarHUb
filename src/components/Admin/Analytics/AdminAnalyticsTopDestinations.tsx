import React from 'react';
import { ANALYTICS_TOP_DESTINATIONS } from '../../../data/adminAnalyticsData';

interface AdminAnalyticsTopDestinationsProps {
  onViewAll?: () => void;
}

export const AdminAnalyticsTopDestinations: React.FC<AdminAnalyticsTopDestinationsProps> = ({
  onViewAll
}) => {
  const maxVal = 5000;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs overflow-hidden flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-3 gap-2">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap">
          Top Destinations
        </h3>
        <button
          onClick={onViewAll || (() => alert('View All Destinations'))}
          className="text-xs font-semibold text-[#0e5f2c] hover:underline cursor-pointer whitespace-nowrap"
        >
          View All →
        </button>
      </div>

      <div className="space-y-3 my-auto">
        {ANALYTICS_TOP_DESTINATIONS.map((dest) => {
          const widthPercent = (dest.bookings / maxVal) * 100;
          return (
            <div key={dest.id} className="flex items-center gap-3">
              {/* Thumbnail */}
              <img
                src={dest.image}
                alt={dest.name}
                className="w-8 h-8 rounded-lg object-cover shrink-0 border border-slate-200 dark:border-slate-700"
              />

              {/* Name & Bar */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-slate-800 dark:text-slate-200 truncate">
                    {dest.name}
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-900 dark:text-white">
                    {dest.bookings.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#0e5f2c] rounded-full transition-all"
                    style={{ width: `${widthPercent}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
