import React from 'react';
import { ANALYTICS_TOP_CUSTOMERS } from '../../../data/adminAnalyticsData';

interface AdminAnalyticsTopCustomersProps {
  onViewAll?: () => void;
}

export const AdminAnalyticsTopCustomers: React.FC<AdminAnalyticsTopCustomersProps> = ({
  onViewAll
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap">
          Top Customers
        </h3>
        <button
          onClick={onViewAll || (() => alert('View All Customers'))}
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
              <th className="pb-2 whitespace-nowrap">Name</th>
              <th className="pb-2 text-right whitespace-nowrap">Total Bookings</th>
              <th className="pb-2 text-right pr-1 whitespace-nowrap">Total Spending</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
            {ANALYTICS_TOP_CUSTOMERS.map((cus) => (
              <tr key={cus.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                <td className="py-2 pl-1">
                  <span className="w-4 h-4 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold flex items-center justify-center text-[9px]">
                    {cus.rank}
                  </span>
                </td>
                <td className="py-2">
                  <div className="flex items-center gap-1.5">
                    <img
                      src={cus.avatar}
                      alt={cus.name}
                      className="w-6 h-6 rounded-full object-cover shrink-0 border border-slate-200 dark:border-slate-700"
                    />
                    <span className="font-bold text-slate-800 dark:text-slate-200 truncate max-w-[120px]">
                      {cus.name}
                    </span>
                  </div>
                </td>
                <td className="py-2 text-right font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap">
                  {cus.totalBookings}
                </td>
                <td className="py-2 text-right font-bold text-emerald-600 dark:text-emerald-400 pr-1 whitespace-nowrap">
                  {cus.totalSpending}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
