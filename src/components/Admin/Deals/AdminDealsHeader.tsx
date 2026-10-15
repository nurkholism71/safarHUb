import React from 'react';
import { Tag, Plus, Download, ShieldCheck, Zap, Sparkles } from 'lucide-react';

interface AdminDealsHeaderProps {
  onCreateCampaign?: () => void;
  onExportData?: () => void;
  onOpenRulesEngine?: () => void;
}

export const AdminDealsHeader: React.FC<AdminDealsHeaderProps> = ({
  onCreateCampaign,
  onExportData,
  onOpenRulesEngine
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-[#082218] text-white p-5 rounded-2xl border border-[#133c2a] shadow-sm">
      <div className="flex items-start sm:items-center gap-3.5">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c59b27] to-[#dfba56] flex items-center justify-center text-[#082218] shadow-md flex-shrink-0">
          <Tag className="w-6 h-6" />
        </div>
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-lg sm:text-xl font-bold font-serif tracking-wide text-white">
              Deals, Promos & Campaign Database
            </h1>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#133c2a] text-[#d4af37] border border-[#d4af37]/30">
              <ShieldCheck className="w-3 h-3 text-[#d4af37]" />
              Anti-Fraud & Rules Engine Active
            </span>
          </div>
          <p className="text-xs text-slate-300 mt-0.5">
            Centralized discount registry, coupon code lifecycle, campaign budget quotas, and conversion analytics
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2.5 flex-wrap">
        <button
          onClick={onOpenRulesEngine}
          className="px-3.5 py-2 rounded-xl bg-[#113a29] hover:bg-[#164834] text-slate-200 hover:text-white border border-[#1d4d38] text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
        >
          <Zap className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Rules & Guard</span>
        </button>

        <button
          onClick={onExportData}
          className="px-3.5 py-2 rounded-xl bg-[#113a29] hover:bg-[#164834] text-slate-200 hover:text-white border border-[#1d4d38] text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
        >
          <Download className="w-3.5 h-3.5 text-slate-400" />
          <span>Export (CSV/JSON)</span>
        </button>

        <button
          onClick={onCreateCampaign}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-amber-500 hover:from-amber-500 hover:to-[#d4af37] text-[#082218] font-bold text-xs flex items-center gap-1.5 shadow-md transition-all active:scale-[0.98]"
        >
          <Plus className="w-4 h-4" />
          <span>+ Create Promo Campaign</span>
        </button>
      </div>
    </div>
  );
};
