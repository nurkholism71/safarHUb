import React, { useState } from 'react';
import { Search, Plus, Download, Filter, MoreVertical, CheckCircle2, Clock, PauseCircle, TrendingUp, Calendar, Eye, Trash2, Edit3 } from 'lucide-react';
import { CampaignDatabaseRecord } from '../../../types/adminMarketing';

interface AdminMarketingCampaignsTableProps {
  campaigns: CampaignDatabaseRecord[];
  onCreateNew?: () => void;
  onOpenDetail?: (campaign: CampaignDatabaseRecord) => void;
}

export const AdminMarketingCampaignsTable: React.FC<AdminMarketingCampaignsTableProps> = ({
  campaigns,
  onCreateNew,
  onOpenDetail
}) => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [objectiveFilter, setObjectiveFilter] = useState('All');

  const filtered = campaigns.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.code.toLowerCase().includes(search.toLowerCase()) ||
      item.channel.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'All' || item.status === statusFilter;
    const matchObj = objectiveFilter === 'All' || item.objective === objectiveFilter;
    return matchSearch && matchStatus && matchObj;
  });

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200/80 dark:border-neutral-700 shadow-sm overflow-hidden">
      {/* Table Toolbar */}
      <div className="p-5 border-b border-neutral-200/80 dark:border-neutral-700 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-neutral-50/50 dark:bg-neutral-800/50">
        <div className="flex flex-1 items-center gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search campaign name, code, channel..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0e5f2c]"
            />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 text-xs rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 focus:outline-none"
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Paused">Paused</option>
            <option value="Completed">Completed</option>
          </select>

          {/* Objective Filter */}
          <select
            value={objectiveFilter}
            onChange={(e) => setObjectiveFilter(e.target.value)}
            className="px-3 py-2 text-xs rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 focus:outline-none hidden md:block"
          >
            <option value="All">All Objectives</option>
            <option value="Conversion">Conversion</option>
            <option value="Seasonal Promo">Seasonal Promo</option>
            <option value="Lead Generation">Lead Generation</option>
            <option value="Brand Awareness">Brand Awareness</option>
            <option value="Retention">Retention</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onCreateNew}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#0e5f2c] text-white hover:bg-[#0c4e24] transition-colors shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New Campaign</span>
          </button>
        </div>
      </div>

      {/* Table Data */}
      <div className="overflow-x-auto no-scrollbar">
        <table className="min-w-full text-left text-xs divide-y divide-neutral-200/70 dark:divide-neutral-700">
          <thead className="bg-neutral-50 dark:bg-neutral-800/80 text-[11px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
            <tr>
              <th className="py-3 px-4">Campaign Name & Code</th>
              <th className="py-3 px-3">Objective & Channel</th>
              <th className="py-3 px-3">Budget / Spent</th>
              <th className="py-3 px-3">Reach & Clicks</th>
              <th className="py-3 px-3">Bookings & Revenue</th>
              <th className="py-3 px-3">ROI</th>
              <th className="py-3 px-3">Status</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 dark:divide-neutral-700/60">
            {filtered.map((camp) => {
              const spentPct = Math.min(100, Math.round((camp.spent / camp.budget) * 100));
              return (
                <tr
                  key={camp.id}
                  onClick={() => onOpenDetail?.(camp)}
                  className="hover:bg-neutral-50/80 dark:hover:bg-neutral-700/40 transition-colors cursor-pointer"
                >
                  <td className="py-3.5 px-4">
                    <div className="font-semibold text-neutral-900 dark:text-white truncate max-w-[200px]">
                      {camp.title}
                    </div>
                    <div className="text-[11px] text-neutral-400 font-mono mt-0.5">
                      {camp.code} • {camp.startDate}
                    </div>
                  </td>

                  <td className="py-3.5 px-3 whitespace-nowrap">
                    <div className="font-medium text-neutral-800 dark:text-neutral-200">
                      {camp.objective}
                    </div>
                    <span className="inline-block mt-0.5 px-2 py-0.5 text-[10px] font-semibold rounded bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300">
                      {camp.channel}
                    </span>
                  </td>

                  <td className="py-3.5 px-3 whitespace-nowrap">
                    <div className="font-bold text-neutral-900 dark:text-white">
                      SAR {camp.spent.toLocaleString()}
                    </div>
                    <div className="text-[10px] text-neutral-400 flex items-center gap-1.5 mt-1">
                      <div className="w-16 h-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-500 rounded-full"
                          style={{ width: `${spentPct}%` }}
                        />
                      </div>
                      <span>{spentPct}% of {camp.budget.toLocaleString()}</span>
                    </div>
                  </td>

                  <td className="py-3.5 px-3 whitespace-nowrap">
                    <div className="font-semibold text-neutral-900 dark:text-white">
                      {camp.reach.toLocaleString()} reach
                    </div>
                    <div className="text-[11px] text-neutral-400">
                      {camp.clicks.toLocaleString()} clicks
                    </div>
                  </td>

                  <td className="py-3.5 px-3 whitespace-nowrap">
                    <div className="font-bold text-emerald-600 dark:text-emerald-400">
                      SAR {camp.revenue.toLocaleString()}
                    </div>
                    <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                      {camp.bookings.toLocaleString()} bookings
                    </div>
                  </td>

                  <td className="py-3.5 px-3 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-md">
                      <TrendingUp className="w-3 h-3" />
                      {camp.roi}
                    </span>
                  </td>

                  <td className="py-3.5 px-3 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                        camp.status === 'Active'
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                          : camp.status === 'Scheduled'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300'
                          : 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                      {camp.status}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    <div className="flex items-center justify-end gap-1.5" onClick={(e) => e.stopPropagation()}>
                      <button
                        title="View Details"
                        onClick={() => onOpenDetail?.(camp)}
                        className="p-1.5 rounded-lg text-neutral-500 hover:text-[#0e5f2c] hover:bg-emerald-50 dark:hover:bg-neutral-700 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        title="Edit"
                        className="p-1.5 rounded-lg text-neutral-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-neutral-700 transition-colors"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Table Pagination / Footer */}
      <div className="p-4 border-t border-neutral-200/80 dark:border-neutral-700 flex items-center justify-between text-xs text-neutral-500">
        <span>Showing {filtered.length} of {campaigns.length} campaigns</span>
        <div className="flex items-center gap-1">
          <button className="px-3 py-1 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700">
            Previous
          </button>
          <button className="px-3 py-1 rounded-lg bg-[#0e5f2c] text-white font-medium">
            1
          </button>
          <button className="px-3 py-1 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
