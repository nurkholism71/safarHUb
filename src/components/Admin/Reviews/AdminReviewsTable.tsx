import React, { useState } from 'react';
import { Search, Star, ShieldCheck, ThumbsUp, Reply, CheckCircle2, XCircle, AlertTriangle, Eye } from 'lucide-react';
import { ReviewDatabaseRecord } from '../../../types/adminReviews';

interface AdminReviewsTableProps {
  reviews: ReviewDatabaseRecord[];
  onReplyReview?: (reviewId: string) => void;
}

export const AdminReviewsTable: React.FC<AdminReviewsTableProps> = ({
  reviews,
  onReplyReview
}) => {
  const [search, setSearch] = useState('');
  const [ratingFilter, setRatingFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const filtered = reviews.filter((r) => {
    const matchSearch =
      r.customerName.toLowerCase().includes(search.toLowerCase()) ||
      r.serviceTitle.toLowerCase().includes(search.toLowerCase()) ||
      r.reviewText.toLowerCase().includes(search.toLowerCase()) ||
      r.bookingCode.toLowerCase().includes(search.toLowerCase());
    const matchRating = ratingFilter === 'All' || r.rating === Number(ratingFilter);
    const matchStatus = statusFilter === 'All' || r.status === statusFilter;
    return matchSearch && matchRating && matchStatus;
  });

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200/80 dark:border-neutral-700 shadow-sm overflow-hidden">
      {/* Header & Filter Toolbar */}
      <div className="p-5 border-b border-neutral-200/80 dark:border-neutral-700 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-neutral-50/50 dark:bg-neutral-800/50">
        <div className="flex flex-1 items-center gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search pilgrim name, booking code, review content..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0e5f2c]"
            />
          </div>

          <select
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}
            className="px-3 py-2 text-xs rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 focus:outline-none"
          >
            <option value="All">All Stars</option>
            <option value="5">5 Stars ★★★★★</option>
            <option value="4">4 Stars ★★★★</option>
            <option value="3">3 Stars ★★★</option>
            <option value="2">2 Stars ★★</option>
            <option value="1">1 Star ★</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 text-xs rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 focus:outline-none hidden md:block"
          >
            <option value="All">All Moderation Status</option>
            <option value="Approved">Approved</option>
            <option value="Pending Moderation">Pending Moderation</option>
            <option value="Disputed">Disputed / Flagged</option>
          </select>
        </div>
      </div>

      {/* Reviews Cards List */}
      <div className="divide-y divide-neutral-100 dark:divide-neutral-700/60">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="p-5 hover:bg-neutral-50/50 dark:hover:bg-neutral-900/30 transition-colors space-y-3"
          >
            {/* Review Card Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <img
                  src={item.customerAvatar}
                  alt={item.customerName}
                  className="w-10 h-10 rounded-full object-cover shrink-0 shadow-xs"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs text-neutral-900 dark:text-white">
                      {item.customerName}
                    </span>
                    {item.verifiedPilgrim && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.2 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
                        <ShieldCheck className="w-3 h-3" />
                        Verified Pilgrim
                      </span>
                    )}
                    <span className="text-[11px] text-neutral-400">({item.customerCountry})</span>
                  </div>

                  <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                    <span className="font-mono">{item.bookingCode}</span> • {item.serviceTitle}
                  </div>
                </div>
              </div>

              {/* Stars & Status Badge */}
              <div className="flex items-center gap-2.5 self-start sm:self-center">
                <div className="flex items-center gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < item.rating ? 'fill-amber-400' : 'text-neutral-300 dark:text-neutral-600'
                      }`}
                    />
                  ))}
                </div>

                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                    item.status === 'Approved'
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                      : 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>

            {/* Review Title & Body */}
            <div>
              <h4 className="text-xs font-bold text-neutral-900 dark:text-white mb-1">
                {item.reviewTitle}
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                "{item.reviewText}"
              </p>
            </div>

            {/* Attached Photos if any */}
            {item.photos.length > 0 && (
              <div className="flex items-center gap-2 pt-1">
                {item.photos.map((ph, i) => (
                  <img
                    key={i}
                    src={ph}
                    alt="pilgrim uploaded"
                    className="w-16 h-16 rounded-xl object-cover border border-neutral-200 dark:border-neutral-700 shadow-xs hover:scale-105 transition-transform"
                  />
                ))}
              </div>
            )}

            {/* Admin Response Box if replied */}
            {item.adminReply ? (
              <div className="p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 text-xs space-y-1 mt-2">
                <div className="flex items-center justify-between text-emerald-800 dark:text-emerald-300 font-bold text-[11px]">
                  <span className="flex items-center gap-1.5">
                    <Reply className="w-3.5 h-3.5" />
                    Official Response by SafarHub Saudi Admin
                  </span>
                  <span className="text-neutral-400 font-mono font-normal text-[10px]">
                    {item.replyDate}
                  </span>
                </div>
                <p className="text-emerald-900 dark:text-emerald-200 leading-relaxed text-xs">
                  {item.adminReply}
                </p>
              </div>
            ) : (
              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-neutral-400">
                  {item.helpfulCount} pilgrims found this review helpful
                </span>

                <button
                  onClick={() => onReplyReview?.(item.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                >
                  <Reply className="w-3.5 h-3.5" />
                  <span>Reply to Pilgrim</span>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
