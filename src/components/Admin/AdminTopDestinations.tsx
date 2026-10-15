import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TOP_DESTINATIONS } from '../../data/adminData';

interface AdminTopDestinationsProps {
  onViewAll?: () => void;
}

export const AdminTopDestinations: React.FC<AdminTopDestinationsProps> = ({ onViewAll }) => {
  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-bold text-slate-900">Top Destinations</span>
        <button
          onClick={onViewAll}
          className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 transition-colors"
        >
          View All <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Destinations List */}
      <div className="space-y-3">
        {TOP_DESTINATIONS.map((dest) => (
          <div
            key={dest.rank}
            className="flex items-center justify-between p-1.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              {/* Rank Badge */}
              <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 font-bold text-xs flex items-center justify-center">
                {dest.rank}
              </div>

              {/* Thumbnail Image */}
              <img
                src={dest.image}
                alt={dest.city}
                className="w-10 h-10 rounded-lg object-cover ring-1 ring-slate-200"
              />

              {/* City Info */}
              <div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                  {dest.city}
                </div>
                <div className="text-[11px] text-slate-500">
                  {dest.bookings}
                </div>
              </div>
            </div>

            {/* Share Percentage */}
            <div className="text-right">
              <span className="text-xs font-bold text-slate-800">{dest.share}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
