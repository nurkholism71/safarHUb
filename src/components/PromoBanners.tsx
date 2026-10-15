import React from 'react';
import {
  ArrowRight,
  Building2,
  Bus,
  MapPin,
  PlaneTakeoff,
  Sparkles,
  ShoppingBag
} from 'lucide-react';

interface PromoBannersProps {
  onOpenUmrahModal?: () => void;
  onOpenJastipModal?: () => void;
}

export const PromoBanners: React.FC<PromoBannersProps> = ({
  onOpenUmrahModal,
  onOpenJastipModal,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-10">
      {/* 1. Big Special Umrah Packages Banner (7 or 8 cols) */}
      <div className="lg:col-span-8 relative overflow-hidden rounded-3xl bg-slate-900 shadow-xl border border-emerald-950/40 min-h-[220px] flex flex-col justify-between p-6 sm:p-8 text-white group">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80"
            alt="Prophet's Mosque and Umrah Pilgrims"
            className="object-cover w-full h-full opacity-45 group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#072418] via-[#093523]/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-2 max-w-lg">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3" />
            <span>All-Inclusive Seasons 2026</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white tracking-tight">
            Special Umrah Packages
          </h2>
          <p className="text-sm text-emerald-100/90 font-medium">
            Comfortable. Organized. Peaceful.
          </p>

          {/* Feature Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-semibold text-emerald-200">
            <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/10">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              <span>5★ Haram View Hotel</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/10">
              <Bus className="w-3.5 h-3.5 text-amber-400" />
              <span>VIP Transport</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/10">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Historical Ziyarat</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/10">
              <PlaneTakeoff className="w-3.5 h-3.5 text-amber-400" />
              <span>Airport Fast Track</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="relative z-10 pt-4">
          <button
            onClick={onOpenUmrahModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold text-xs sm:text-sm shadow-lg shadow-amber-900/30 transition-all active:scale-95 group/btn"
          >
            <span>View Packages</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>

      {/* 2. Jastip Saudi Card (4 cols) */}
      <div className="lg:col-span-4 relative overflow-hidden rounded-3xl bg-[#142319] shadow-xl border border-emerald-900/30 min-h-[220px] flex flex-col justify-between p-6 text-white group">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80"
            alt="Ajwa Dates and Oud Perfume"
            className="object-cover w-full h-full opacity-40 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b13] via-[#0b1b13]/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-700/40 text-emerald-300 text-[10px] font-bold uppercase tracking-wider border border-emerald-600/30">
            <ShoppingBag className="w-3 h-3" />
            <span>Direct from Makkah & Madinah</span>
          </div>

          <h2 className="text-2xl font-bold font-serif text-white tracking-tight">
            Jastip Saudi
          </h2>
          <p className="text-xs text-emerald-100/80 leading-relaxed">
            Original products from Saudi Arabia delivered safely to your door.
          </p>
        </div>

        {/* Action Button */}
        <div className="relative z-10 pt-4">
          <button
            onClick={onOpenJastipModal}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-100 text-slate-900 rounded-xl font-bold text-xs shadow-md transition-all active:scale-95 group/btn"
          >
            <span>Shop Now</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
