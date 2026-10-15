import React, { useState } from 'react';
import { Search, Plus, Filter, Eye, Edit3, Share2, TrendingUp, Sparkles, BookOpen } from 'lucide-react';
import { ContentDatabaseRecord } from '../../../types/adminMarketing';

interface AdminMarketingContentTableProps {
  contentList: ContentDatabaseRecord[];
  onCreateNew?: () => void;
}

export const AdminMarketingContentTable: React.FC<AdminMarketingContentTableProps> = ({
  contentList,
  onCreateNew
}) => {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const filtered = contentList.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.author.toLowerCase().includes(search.toLowerCase()) ||
      item.channel.toLowerCase().includes(search.toLowerCase());
    const matchCat = categoryFilter === 'All' || item.category === categoryFilter;
    return matchSearch && matchCat;
  });

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200/80 dark:border-neutral-700 shadow-sm overflow-hidden">
      {/* Header & Controls */}
      <div className="p-5 border-b border-neutral-200/80 dark:border-neutral-700 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-neutral-50/50 dark:bg-neutral-800/50">
        <div className="flex flex-1 items-center gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search content articles, author, channels..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0e5f2c]"
            />
          </div>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2 text-xs rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 focus:outline-none"
          >
            <option value="All">All Categories</option>
            <option value="Umrah Tips">Umrah Tips</option>
            <option value="Hotels & Stay">Hotels & Stay</option>
            <option value="Flight Deals">Flight Deals</option>
            <option value="Saudi Culture">Saudi Culture</option>
          </select>
        </div>

        <button
          onClick={onCreateNew}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#0e5f2c] text-white hover:bg-[#0c4e24] transition-colors shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>New Content Article</span>
        </button>
      </div>

      {/* Content Table */}
      <div className="overflow-x-auto no-scrollbar">
        <table className="min-w-full text-left text-xs divide-y divide-neutral-200/70 dark:divide-neutral-700">
          <thead className="bg-neutral-50 dark:bg-neutral-800/80 text-[11px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
            <tr>
              <th className="py-3 px-4">Content Title & Format</th>
              <th className="py-3 px-3">Channel / Category</th>
              <th className="py-3 px-3">Author & Date</th>
              <th className="py-3 px-3">Reach & Engagement</th>
              <th className="py-3 px-3">Shares</th>
              <th className="py-3 px-3">Bookings Attributed</th>
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
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-11 h-11 rounded-lg object-cover shrink-0 shadow-xs"
                    />
                    <div className="min-w-0">
                      <div className="font-semibold text-neutral-900 dark:text-white truncate max-w-[220px]">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-neutral-400 mt-0.5">
                        {item.format} • {item.code}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <div className="font-semibold text-neutral-800 dark:text-neutral-200">
                    {item.channel}
                  </div>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                    {item.category}
                  </span>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <div className="font-medium text-neutral-900 dark:text-white">{item.author}</div>
                  <div className="text-[10px] text-neutral-400">{item.publishDate}</div>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <div className="font-bold text-neutral-900 dark:text-white">
                    {item.reach.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-emerald-600 font-semibold">
                    {item.engagementRate} rate
                  </div>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap font-medium text-neutral-700 dark:text-neutral-300">
                  {item.shares.toLocaleString()}
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap font-bold text-emerald-600 dark:text-emerald-400">
                  {item.bookingsAttributed} bookings
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                    {item.status}
                  </span>
                </td>

                <td className="py-3.5 px-4 text-right whitespace-nowrap">
                  <div className="flex items-center justify-end gap-1.5">
                    <button className="p-1.5 rounded-lg text-neutral-500 hover:text-[#0e5f2c] hover:bg-emerald-50 dark:hover:bg-neutral-700">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 rounded-lg text-neutral-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-neutral-700">
                      <Edit3 className="w-4 h-4" />
                    </button>
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
