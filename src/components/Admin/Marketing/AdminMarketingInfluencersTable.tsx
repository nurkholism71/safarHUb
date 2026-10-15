import React, { useState } from 'react';
import { Search, Plus, Eye, Users, DollarSign, Award, CheckCircle2 } from 'lucide-react';
import { InfluencerRecord } from '../../../types/adminMarketing';

interface AdminMarketingInfluencersTableProps {
  influencers: InfluencerRecord[];
  onAddInfluencer?: () => void;
}

export const AdminMarketingInfluencersTable: React.FC<AdminMarketingInfluencersTableProps> = ({
  influencers,
  onAddInfluencer
}) => {
  const [search, setSearch] = useState('');

  const filtered = influencers.filter(
    (inf) =>
      inf.name.toLowerCase().includes(search.toLowerCase()) ||
      inf.handle.toLowerCase().includes(search.toLowerCase()) ||
      inf.promoCode.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200/80 dark:border-neutral-700 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-neutral-200/80 dark:border-neutral-700 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-neutral-50/50 dark:bg-neutral-800/50">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search influencer name, handle, promo code..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#0e5f2c]"
          />
        </div>

        <button
          onClick={onAddInfluencer}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#0e5f2c] text-white hover:bg-[#0c4e24] transition-colors shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Influencer Partner</span>
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto no-scrollbar">
        <table className="min-w-full text-left text-xs divide-y divide-neutral-200/70 dark:divide-neutral-700">
          <thead className="bg-neutral-50 dark:bg-neutral-800/80 text-[11px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
            <tr>
              <th className="py-3 px-4">Influencer / Creator</th>
              <th className="py-3 px-3">Platform & Niche</th>
              <th className="py-3 px-3">Followers & Eng.</th>
              <th className="py-3 px-3">Promo Code</th>
              <th className="py-3 px-3">Redemptions</th>
              <th className="py-3 px-3">GMV Generated</th>
              <th className="py-3 px-3">Contract Fee</th>
              <th className="py-3 px-3">Status</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 dark:divide-neutral-700/60">
            {filtered.map((item) => (
              <tr key={item.id} className="hover:bg-neutral-50/80 dark:hover:bg-neutral-700/40 transition-colors">
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover shrink-0 shadow-xs"
                    />
                    <div className="min-w-0">
                      <div className="font-semibold text-neutral-900 dark:text-white truncate">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-neutral-400 font-medium">{item.handle}</div>
                    </div>
                  </div>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <div className="font-medium text-neutral-800 dark:text-neutral-200">{item.platform}</div>
                  <span className="text-[10px] text-emerald-600 font-semibold">{item.niche}</span>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <div className="font-bold text-neutral-900 dark:text-white">{item.followers}</div>
                  <div className="text-[10px] text-neutral-400">{item.engagementRate} eng.</div>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <span className="px-2.5 py-1 rounded-md font-mono text-xs font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                    {item.promoCode}
                  </span>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap font-semibold text-neutral-800 dark:text-neutral-200">
                  {item.redemptions} bookings
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap font-bold text-emerald-600 dark:text-emerald-400">
                  SAR {item.gmv.toLocaleString()}
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap font-medium text-neutral-500">
                  SAR {item.contractFee.toLocaleString()}
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                    {item.status}
                  </span>
                </td>

                <td className="py-3.5 px-4 text-right whitespace-nowrap">
                  <button className="p-1.5 rounded-lg text-neutral-500 hover:text-[#0e5f2c] hover:bg-emerald-50 dark:hover:bg-neutral-700">
                    <Eye className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
