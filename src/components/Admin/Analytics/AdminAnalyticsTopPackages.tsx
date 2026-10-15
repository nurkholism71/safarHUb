import React from 'react';
import { Star } from 'lucide-react';
import { ANALYTICS_TOP_PACKAGES } from '../../../data/adminAnalyticsData';

interface AdminAnalyticsTopPackagesProps {
  onViewAll?: () => void;
}

export const AdminAnalyticsTopPackages: React.FC<AdminAnalyticsTopPackagesProps> = ({
  onViewAll
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap">
          Top Performing Packages
        </h3>
        <button
          onClick={onViewAll || (() => alert('View All Packages'))}
          className="text-xs font-semibold text-[#0e5f2c] hover:underline cursor-pointer whitespace-nowrap"
        >
          View All →
        </button>
      </div>

      <div className="overflow-x-auto my-auto scrollbar-none">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="text-slate-400 text-[10px] font-semibold uppercase tracking-wider border-b border-slate-100 dark:border-slate-800">
              <th className="pb-2 pl-1 w-5">#</th>
              <th className="pb-2 whitespace-nowrap">Package Name</th>
              <th className="pb-2 text-right whitespace-nowrap">Bookings</th>
              <th className="pb-2 text-right whitespace-nowrap">Revenue</th>
              <th className="pb-2 text-right pr-1 whitespace-nowrap">Rating</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
            {ANALYTICS_TOP_PACKAGES.map((pkg) => (
              <tr key={pkg.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                <td className="py-2 pl-1">
                  <span className="w-4 h-4 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold flex items-center justify-center text-[9px]">
                    {pkg.rank}
                  </span>
                </td>
                <td className="py-2">
                  <div className="flex items-center gap-1.5">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-6 h-6 rounded-md object-cover shrink-0 border border-slate-200 dark:border-slate-700"
                    />
                    <span className="font-bold text-slate-800 dark:text-slate-200 truncate max-w-[130px]">
                      {pkg.name}
                    </span>
                  </div>
                </td>
                <td className="py-2 text-right font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap">
                  {pkg.bookings.toLocaleString()}
                </td>
                <td className="py-2 text-right font-bold text-slate-900 dark:text-white whitespace-nowrap">
                  {pkg.revenue}
                </td>
                <td className="py-2 text-right pr-1 whitespace-nowrap">
                  <div className="flex items-center justify-end gap-0.5 font-bold text-slate-800 dark:text-slate-200">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{pkg.rating}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
