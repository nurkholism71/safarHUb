import React, { useState } from 'react';
import { Search, Plus, Filter, Eye, Edit3, Heart, Share2, Sparkles, Globe } from 'lucide-react';
import { ContentArticleRecord } from '../../../types/adminContent';

interface AdminContentArticlesTableProps {
  articles: ContentArticleRecord[];
  onNewArticle?: () => void;
  onOpenArticle?: (article: ContentArticleRecord) => void;
}

export const AdminContentArticlesTable: React.FC<AdminContentArticlesTableProps> = ({
  articles,
  onNewArticle,
  onOpenArticle
}) => {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const filtered = articles.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.author.toLowerCase().includes(search.toLowerCase()) ||
      item.code.toLowerCase().includes(search.toLowerCase());
    const matchCat = categoryFilter === 'All' || item.category === categoryFilter;
    const matchStatus = statusFilter === 'All' || item.status === statusFilter;
    return matchSearch && matchCat && matchStatus;
  });

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200/80 dark:border-neutral-700 shadow-sm overflow-hidden">
      {/* Toolbar */}
      <div className="p-5 border-b border-neutral-200/80 dark:border-neutral-700 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-neutral-50/50 dark:bg-neutral-800/50">
        <div className="flex flex-1 items-center gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search article title, code, author..."
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
            <option value="Umrah & Hajj">Umrah & Hajj</option>
            <option value="Hotels & Stay">Hotels & Stay</option>
            <option value="Saudi Culture & Heritage">Saudi Culture</option>
            <option value="Travel Tips">Travel Tips</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 text-xs rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 focus:outline-none hidden md:block"
          >
            <option value="All">All Status</option>
            <option value="Published">Published</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Draft">Draft</option>
          </select>
        </div>

        <button
          onClick={onNewArticle}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#0e5f2c] text-white hover:bg-[#0c4e24] transition-colors shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>New Article</span>
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto no-scrollbar">
        <table className="min-w-full text-left text-xs divide-y divide-neutral-200/70 dark:divide-neutral-700">
          <thead className="bg-neutral-50 dark:bg-neutral-800/80 text-[11px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
            <tr>
              <th className="py-3 px-4">Article Title & Code</th>
              <th className="py-3 px-3">Category</th>
              <th className="py-3 px-3">Author</th>
              <th className="py-3 px-3">Views & Read Time</th>
              <th className="py-3 px-3">Shares & Likes</th>
              <th className="py-3 px-3">SEO Score</th>
              <th className="py-3 px-3">Status</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 dark:divide-neutral-700/60">
            {filtered.map((item) => (
              <tr
                key={item.id}
                onClick={() => onOpenArticle?.(item)}
                className="hover:bg-neutral-50/80 dark:hover:bg-neutral-700/40 transition-colors cursor-pointer"
              >
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.featuredImage}
                      alt={item.title}
                      className="w-12 h-12 rounded-lg object-cover shrink-0 shadow-xs"
                    />
                    <div className="min-w-0">
                      <div className="font-semibold text-neutral-900 dark:text-white truncate max-w-[260px]">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-neutral-400 font-mono mt-0.5">
                        {item.code} • {item.publishDate}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                    {item.category}
                  </span>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <img
                      src={item.authorAvatar}
                      alt={item.author}
                      className="w-6 h-6 rounded-full object-cover shrink-0"
                    />
                    <span className="font-medium text-neutral-800 dark:text-neutral-200">
                      {item.author}
                    </span>
                  </div>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <div className="font-bold text-neutral-900 dark:text-white">
                    {item.views.toLocaleString()} views
                  </div>
                  <div className="text-[10px] text-neutral-400 font-medium">{item.readTime}</div>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300 font-medium">
                    <span>{item.shares.toLocaleString()} shares</span>
                    <span>•</span>
                    <span className="text-rose-500 font-semibold">{item.likes.toLocaleString()} likes</span>
                  </div>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1 font-bold text-emerald-600 text-xs">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    {item.seoScore}/100
                  </span>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                      item.status === 'Published'
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="py-3.5 px-4 text-right whitespace-nowrap">
                  <div className="flex items-center justify-end gap-1.5" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => onOpenArticle?.(item)}
                      className="p-1.5 rounded-lg text-neutral-500 hover:text-[#0e5f2c] hover:bg-emerald-50 dark:hover:bg-neutral-700"
                    >
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
