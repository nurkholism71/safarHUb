import React from 'react';
import { Plus } from 'lucide-react';

interface AdminJastipHeaderProps {
  onNewJastip?: () => void;
}

export const AdminJastipHeader: React.FC<AdminJastipHeaderProps> = ({
  onNewJastip
}) => {
  return (
    <div className="space-y-4">
      {/* Title Bar with Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
            Jastip
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Personal shopping service — titip belanja dari Makkah, Madinah, Riyadh, Jeddah dan kota lainnya.
          </p>
        </div>

        <button
          onClick={onNewJastip}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0e5f2c] hover:bg-[#0b4b23] text-white text-xs sm:text-sm font-semibold shadow-md shadow-emerald-900/20 transition-all cursor-pointer whitespace-nowrap"
        >
          <Plus className="w-4 h-4" />
          <span>Buat Jastip Baru</span>
        </button>
      </div>

      {/* Panoramic Saudi Jastip Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 h-36 sm:h-44 group">
        <img
          src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1600&q=85"
          alt="Saudi Personal Shopper Hub"
          className="w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/40 to-transparent flex flex-col justify-end p-5 text-white">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-[11px] font-semibold w-fit mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Verified Shoppers in 5 Key Saudi Cities
          </div>
          <h2 className="text-base sm:text-lg font-bold text-white tracking-wide drop-shadow-sm">
            Authentic Saudi Souvenirs, Dates, Perfumes & Direct Delivery
          </h2>
        </div>
      </div>
    </div>
  );
};
