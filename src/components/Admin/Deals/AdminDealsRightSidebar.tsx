import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  PieChart, 
  RefreshCw, 
  CheckCircle2, 
  ArrowUpRight,
  Zap,
  Lock
} from 'lucide-react';
import { 
  ADMIN_DEAL_REDEMPTION_LOGS, 
  ADMIN_DEAL_BUDGET_SUMMARIES 
} from '../../../data/adminDealsData';

export const AdminDealsRightSidebar: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Campaign Budget Utilization */}
      <div className="bg-[#1e293b]/70 backdrop-blur-md rounded-2xl border border-slate-800 p-5 shadow-xl">
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <PieChart className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">Budget Utilization</h3>
              <p className="text-[11px] text-slate-400">Monthly promotional burn rate</p>
            </div>
          </div>
          <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
            77.4% Avg
          </span>
        </div>

        <div className="space-y-3.5">
          {ADMIN_DEAL_BUDGET_SUMMARIES.map((item) => (
            <div key={item.id} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-200">{item.category}</span>
                <span className="font-mono text-emerald-400 font-bold">{item.burnRate}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${
                    item.burnRate > 85 ? 'bg-gradient-to-r from-amber-500 to-rose-400' : 'bg-gradient-to-r from-[#00A651] to-emerald-400'
                  }`}
                  style={{ width: `${item.burnRate}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-500">
                <span>{item.budgetUsed} / {item.budgetAllocated}</span>
                <span className="text-slate-400">{item.redemptions.toLocaleString()} uses</span>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => alert('Opening campaign budget allocator')}
          className="w-full mt-4 py-2.5 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white border border-slate-700/60 transition-all flex items-center justify-center gap-2 group"
        >
          <span>Adjust Vertical Subsidies</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
        </button>
      </div>

      {/* Live Promo Redemptions Stream */}
      <div className="bg-[#1e293b]/70 backdrop-blur-md rounded-2xl border border-slate-800 p-5 shadow-xl">
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">Live Redemptions</h3>
              <p className="text-[11px] text-slate-400">Real-time coupon checkouts</p>
            </div>
          </div>
          <button 
            onClick={() => alert('Refreshing live redemptions stream')}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="space-y-4">
          {ADMIN_DEAL_REDEMPTION_LOGS.map((log) => (
            <div key={log.id} className="relative pl-5 before:absolute before:left-1.5 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-800 last:before:hidden">
              <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-emerald-500/20 border-2 border-emerald-400" />
              <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800/80">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-emerald-300">{log.promoCode}</span>
                  <span className="text-[10px] font-medium text-slate-500 whitespace-nowrap">{log.timestamp}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="truncate">{log.userEmail}</span>
                  <span className="font-bold text-slate-100">{log.savedAmount}</span>
                </div>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/60 text-[10px]">
                  <span className="text-slate-400">Ref: {log.orderRef}</span>
                  <span className="font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {log.serviceType}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Anti-Fraud & Voucher Abuse Protection Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#00A651]/20 via-slate-900 to-slate-900 border border-[#00A651]/30 p-5 shadow-xl">
        <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-[#00A651]/10 rounded-full blur-xl pointer-events-none" />
        
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2.5 rounded-xl bg-[#00A651] text-white shadow-lg shadow-[#00A651]/30">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Voucher Guard & Anti-Abuse</h4>
            <p className="text-[11px] text-emerald-300/90 font-medium">Device Fingerprint & IP Verification</p>
          </div>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed mb-4">
          All high-value discount campaigns are automatically protected against duplicate accounts, bot farming, and stacked redemption exploits.
        </p>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            <span>1-Use Per Device ID Enforcement</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            <span>Blacklist Geo-Fencing & Proxy Filter</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            <span>Minimum Basket Value Verification</span>
          </div>
        </div>

        <button 
          onClick={() => alert('Opening Anti-Abuse Rules Manager...')}
          className="w-full mt-4 py-2.5 px-4 rounded-xl bg-[#00A651] hover:bg-[#008f45] text-white text-xs font-bold transition-all shadow-md shadow-[#00A651]/25 flex items-center justify-center gap-2"
        >
          <Zap className="w-3.5 h-3.5" />
          <span>Configure Fraud Thresholds</span>
        </button>
      </div>
    </div>
  );
};
