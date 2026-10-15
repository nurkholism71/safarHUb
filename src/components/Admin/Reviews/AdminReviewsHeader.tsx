import React from 'react';
import { Star, Download, Sparkles, ShieldCheck } from 'lucide-react';

interface AdminReviewsHeaderProps {
  onExportReviews?: () => void;
  onModerationQueue?: () => void;
}

export const AdminReviewsHeader: React.FC<AdminReviewsHeaderProps> = ({
  onExportReviews,
  onModerationQueue
}) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0c4e24] via-[#0e5f2c] to-[#1a7a3e] p-6 text-white shadow-lg">
      <div 
        className="absolute inset-0 opacity-15 bg-cover bg-center mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1600&auto=format&fit=crop&q=80')`
        }}
      />
      <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-400/20 text-emerald-200 border border-emerald-400/30">
              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              Verified Pilgrim Trust Center
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-2.5">
            Reviews & Ratings Management
            <Sparkles className="w-5 h-5 text-amber-300" />
          </h1>
          <p className="text-sm text-emerald-100/90 mt-1 max-w-2xl">
            Monitor verified pilgrim ratings, moderate customer feedback, and respond to traveler reviews across all services.
          </p>
        </div>

        <div className="flex items-center gap-2.5 w-full md:w-auto justify-end">
          {onModerationQueue && (
            <button
              onClick={onModerationQueue}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/20 transition-all duration-200 active:scale-95"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Moderation Queue</span>
            </button>
          )}

          <button
            onClick={onExportReviews}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white text-[#0e5f2c] font-semibold text-xs shadow-md hover:bg-emerald-50 transition-all duration-200 active:scale-95"
          >
            <Download className="w-4 h-4 text-[#0e5f2c]" />
            <span>Export Reviews Ledger</span>
          </button>
        </div>
      </div>
    </div>
  );
};
