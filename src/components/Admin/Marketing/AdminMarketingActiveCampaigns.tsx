import React from 'react';
import { ArrowRight, Eye, ShoppingCart, Coins, Plus } from 'lucide-react';
import { ActiveCampaignItem } from '../../../types/adminMarketing';

interface AdminMarketingActiveCampaignsProps {
  campaigns: ActiveCampaignItem[];
  onViewAll?: () => void;
  onCreateNew?: () => void;
}

export const AdminMarketingActiveCampaigns: React.FC<AdminMarketingActiveCampaignsProps> = ({
  campaigns,
  onViewAll,
  onCreateNew
}) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl p-5 border border-neutral-200/80 dark:border-neutral-700 shadow-sm flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-neutral-900 dark:text-white">
              Active Campaigns
            </h3>
            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">
              4 Running
            </span>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
            Key promotional initiatives and performance
          </p>
        </div>

        <button
          onClick={onViewAll}
          className="flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
        >
          <span>View All (12)</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Campaign Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {campaigns.map((camp) => {
          const isActive = camp.status === 'Active';
          return (
            <div
              key={camp.id}
              className="group relative rounded-xl border border-neutral-200/80 dark:border-neutral-700 p-3 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-md transition-all duration-200 bg-neutral-50/40 dark:bg-neutral-900/30 flex flex-col justify-between"
            >
              <div className="flex items-start gap-3">
                <img
                  src={camp.image}
                  alt={camp.title}
                  className="w-16 h-16 rounded-lg object-cover shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-xs"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span
                      className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                        isActive
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                          : 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                      }`}
                    >
                      {camp.status}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-neutral-900 dark:text-white truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {camp.title}
                  </h4>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 truncate mt-0.5">
                    {camp.subtitle}
                  </p>
                </div>
              </div>

              {/* Metrics Bar */}
              <div className="mt-3 pt-2.5 border-t border-neutral-200/60 dark:border-neutral-700/60 grid grid-cols-3 gap-1 text-center">
                <div className="flex flex-col">
                  <span className="text-[10px] text-neutral-400 flex items-center justify-center gap-0.5">
                    <Eye className="w-2.5 h-2.5" /> Reach
                  </span>
                  <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200 mt-0.5">
                    {camp.reach}
                  </span>
                </div>
                <div className="flex flex-col border-x border-neutral-200/60 dark:border-neutral-700/60 px-1">
                  <span className="text-[10px] text-neutral-400 flex items-center justify-center gap-0.5">
                    <ShoppingCart className="w-2.5 h-2.5" /> Bookings
                  </span>
                  <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200 mt-0.5">
                    {camp.bookings}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-neutral-400 flex items-center justify-center gap-0.5">
                    <Coins className="w-2.5 h-2.5" /> Revenue
                  </span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 truncate">
                    {camp.revenue}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
