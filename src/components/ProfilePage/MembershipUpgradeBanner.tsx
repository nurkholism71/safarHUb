import React from 'react';
import { Crown, ArrowRight, Sparkles } from 'lucide-react';

interface MembershipUpgradeBannerProps {
  onUpgrade?: () => void;
}

export const MembershipUpgradeBanner: React.FC<MembershipUpgradeBannerProps> = ({
  onUpgrade
}) => {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#062416] via-[#093520] to-[#04190f] text-white p-6 shadow-md border border-emerald-800/40 flex flex-col justify-between group">
      {/* Background Architectural Texture */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-400/40 via-transparent to-transparent"></div>

      <div className="relative z-10 space-y-2 max-w-sm">
        <div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-amber-300">
          <Crown className="w-3.5 h-3.5 text-amber-400" />
          <span>Get More with</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold font-serif text-white leading-tight">
          SafarHub Membership
        </h3>
        <p className="text-xs text-slate-300 leading-relaxed font-medium">
          Upgrade to Gold Member for more exclusive deals, higher discounts, and special concierge services.
        </p>
      </div>

      <div className="relative z-10 pt-4">
        <button
          onClick={onUpgrade}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 text-xs font-bold transition-all shadow-md active:scale-95"
        >
          <span>Upgrade Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
