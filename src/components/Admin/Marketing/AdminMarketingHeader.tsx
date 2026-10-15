import React from 'react';
import { Megaphone, Plus, ChevronDown, Calendar, Sparkles } from 'lucide-react';

interface AdminMarketingHeaderProps {
  onCreateCampaign?: () => void;
}

export const AdminMarketingHeader: React.FC<AdminMarketingHeaderProps> = ({ onCreateCampaign }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0c4e24] via-[#0e5f2c] to-[#1a7a3e] p-6 text-white shadow-lg">
      {/* Subtle Background Pattern & Glow */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1600&auto=format&fit=crop&q=80')`
        }}
      />
      <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />
      <div className="absolute right-1/3 -top-12 w-48 h-48 rounded-full bg-amber-400/10 blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-400/20 text-emerald-200 border border-emerald-400/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Marketing Hub
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-emerald-200/80">
              <Calendar className="w-3.5 h-3.5" />
              Q4 Campaign Season
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-2.5">
            Marketing Dashboard
            <Sparkles className="w-5 h-5 text-amber-300" />
          </h1>
          <p className="text-sm text-emerald-100/90 mt-1 max-w-2xl">
            Manage omnichannel campaigns, analyze reach & conversion performance, and optimize marketing ROI in real-time.
          </p>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <button
            onClick={onCreateCampaign}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#0e5f2c] font-semibold text-sm shadow-md hover:bg-emerald-50 hover:shadow-lg transition-all duration-200 active:scale-95"
          >
            <Plus className="w-4 h-4 text-[#0e5f2c]" />
            <span>Create Campaign</span>
            <ChevronDown className="w-3.5 h-3.5 text-emerald-700" />
          </button>
        </div>
      </div>
    </div>
  );
};
