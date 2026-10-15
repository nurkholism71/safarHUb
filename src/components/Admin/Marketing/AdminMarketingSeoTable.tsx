import React, { useState } from 'react';
import { Search, Plus, TrendingUp, Globe, ArrowUp, ArrowDown, ExternalLink } from 'lucide-react';
import { SeoKeywordRecord } from '../../../types/adminMarketing';

interface AdminMarketingSeoTableProps {
  keywords: SeoKeywordRecord[];
  onAddKeyword?: () => void;
}

export const AdminMarketingSeoTable: React.FC<AdminMarketingSeoTableProps> = ({
  keywords,
  onAddKeyword
}) => {
  const [search, setSearch] = useState('');

  const filtered = keywords.filter(
    (k) =>
      k.keyword.toLowerCase().includes(search.toLowerCase()) ||
      k.targetUrl.toLowerCase().includes(search.toLowerCase()) ||
      k.intent.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200/80 dark:border-neutral-700 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-neutral-200/80 dark:border-neutral-700 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-neutral-50/50 dark:bg-neutral-800/50">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search tracked keyword, ranking URL, search intent..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#0e5f2c]"
          />
        </div>

        <button
          onClick={onAddKeyword}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#0e5f2c] text-white hover:bg-[#0c4e24] transition-colors shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Track New Keyword</span>
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto no-scrollbar">
        <table className="min-w-full text-left text-xs divide-y divide-neutral-200/70 dark:divide-neutral-700">
          <thead className="bg-neutral-50 dark:bg-neutral-800/80 text-[11px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
            <tr>
              <th className="py-3 px-4">Tracked Keyword</th>
              <th className="py-3 px-3">Target URL</th>
              <th className="py-3 px-3">Search Volume</th>
              <th className="py-3 px-3">Difficulty</th>
              <th className="py-3 px-3">Current Rank</th>
              <th className="py-3 px-3">Organic Clicks</th>
              <th className="py-3 px-3">Traffic Value</th>
              <th className="py-3 px-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 dark:divide-neutral-700/60">
            {filtered.map((item) => (
              <tr key={item.id} className="hover:bg-neutral-50/80 dark:hover:bg-neutral-700/40 transition-colors">
                <td className="py-3.5 px-4 whitespace-nowrap">
                  <div className="font-semibold text-neutral-900 dark:text-white">{item.keyword}</div>
                  <span className="text-[10px] text-neutral-400">{item.intent} Intent</span>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <div className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-mono text-[11px] max-w-[200px] truncate">
                    <span>{item.targetUrl}</span>
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </div>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap font-bold text-neutral-900 dark:text-white">
                  {item.searchVolume.toLocaleString()} / mo
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      item.difficulty === 'Easy'
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                        : item.difficulty === 'Medium'
                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                        : 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'
                    }`}
                  >
                    {item.difficulty}
                  </span>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <div className="flex items-center gap-1.5 font-bold text-neutral-900 dark:text-white text-sm">
                    <span>#{item.currentRank}</span>
                    {item.currentRank < item.previousRank ? (
                      <span className="text-emerald-600 text-xs flex items-center font-normal">
                        <ArrowUp className="w-3 h-3" /> +{item.previousRank - item.currentRank}
                      </span>
                    ) : (
                      <span className="text-neutral-400 text-xs font-normal">--</span>
                    )}
                  </div>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap font-semibold text-neutral-800 dark:text-neutral-200">
                  {item.organicClicks.toLocaleString()}
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap font-bold text-emerald-600">
                  {item.trafficValue}
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
