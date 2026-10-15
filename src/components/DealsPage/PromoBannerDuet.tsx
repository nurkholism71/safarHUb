import React from 'react';
import { Crown, Sparkles, ArrowRight, Gift } from 'lucide-react';

interface PromoBannerDuetProps {
  onUmrahDealsClick?: () => void;
  onMemberDiscountClick?: () => void;
}

export const PromoBannerDuet: React.FC<PromoBannerDuetProps> = ({
  onUmrahDealsClick,
  onMemberDiscountClick
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Banner 1: Early Booking Promo */}
      <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white p-6 shadow-md flex flex-col justify-between min-h-[170px] border border-slate-200/80 group">
        <img
          src="/images/umrah/hero_banner.jpg"
          alt="Makkah Umrah Early Booking"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/30"></div>

        <div className="relative z-10 space-y-1.5 max-w-md">
          <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-amber-300">
            EARLY BOOKING PROMO
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold font-serif text-white leading-tight">
            Umrah Packages <span className="text-amber-300">Up to 25% OFF</span>
          </h3>
          <p className="text-xs text-slate-200/90 leading-relaxed font-medium">
            Book early and get the best price for your blessed journey.
          </p>
        </div>

        <div className="relative z-10 pt-3">
          <button
            onClick={onUmrahDealsClick}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0e5f2c] hover:bg-[#09421e] text-white text-xs font-bold transition-all shadow-md active:scale-95"
          >
            <span>View Umrah Deals</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Banner 2: Member Special */}
      <div className="relative rounded-3xl overflow-hidden bg-[#062416] text-white p-6 shadow-md flex flex-col justify-between min-h-[170px] border border-emerald-800/40 group">
        {/* Background luxury gradient & subtle golden pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-800/40 via-transparent to-transparent"></div>
        
        {/* Decorative Gift Boxes Art on Right */}
        <div className="absolute right-4 bottom-3 opacity-80 group-hover:scale-105 transition-transform duration-500 hidden sm:flex items-center gap-2">
          <div className="w-16 h-16 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-lg">
            <Gift className="w-8 h-8" />
          </div>
          <div className="w-20 h-20 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shadow-xl">
            <Sparkles className="w-10 h-10" />
          </div>
        </div>

        <div className="relative z-10 space-y-1.5 max-w-sm">
          <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-400">
            <Crown className="w-3 h-3 text-amber-400" />
            <span>MEMBER SPECIAL</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold font-serif text-white leading-tight">
            Extra <span className="text-amber-400">10% OFF</span>
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed font-medium">
            For SafarHub Members on selected deals & luxury packages.
          </p>
        </div>

        <div className="relative z-10 pt-3">
          <button
            onClick={onMemberDiscountClick}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-emerald-950 text-xs font-bold transition-all shadow-md active:scale-95"
          >
            <span>Login to Get Discount</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
