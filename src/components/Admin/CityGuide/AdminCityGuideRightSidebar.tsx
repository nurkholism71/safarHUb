import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Map, 
  ChevronRight, 
  Sparkles, 
  RefreshCw, 
  CheckCircle2, 
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { 
  ADMIN_CITY_UPDATE_LOGS, 
  ADMIN_PROVINCE_SUMMARIES 
} from '../../../data/adminCityGuideData';

export const AdminCityGuideRightSidebar: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Provincial Knowledge Coverage */}
      <div className="bg-[#1e293b]/70 backdrop-blur-md rounded-2xl border border-slate-800 p-5 shadow-xl">
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Map className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">Provincial Coverage</h3>
              <p className="text-[11px] text-slate-400">13 Kingdom administrative zones</p>
            </div>
          </div>
          <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
            96.2% Avg
          </span>
        </div>

        <div className="space-y-3.5">
          {ADMIN_PROVINCE_SUMMARIES.map((prov) => (
            <div key={prov.id} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-200">{prov.province}</span>
                <span className="font-mono text-emerald-400 font-bold">{prov.coverage}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-[#00A651] to-emerald-400 transition-all duration-500"
                  style={{ width: `${prov.coverage}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-500">
                <span>{prov.citiesCount} Registered Cities</span>
                <span className="text-slate-400">Hub: {prov.topCity}</span>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => alert('Opening regional map auditor')}
          className="w-full mt-4 py-2.5 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white border border-slate-700/60 transition-all flex items-center justify-center gap-2 group"
        >
          <span>Audit Province Boundary GIS</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
        </button>
      </div>

      {/* Recent City Guide Activity Logs */}
      <div className="bg-[#1e293b]/70 backdrop-blur-md rounded-2xl border border-slate-800 p-5 shadow-xl">
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">Live Audit Trail</h3>
              <p className="text-[11px] text-slate-400">Recent curator modifications</p>
            </div>
          </div>
          <button 
            onClick={() => alert('Refreshing live audit stream')}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="space-y-4">
          {ADMIN_CITY_UPDATE_LOGS.map((log) => (
            <div key={log.id} className="relative pl-5 before:absolute before:left-1.5 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-800 last:before:hidden">
              <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-emerald-500/20 border-2 border-emerald-400" />
              <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800/80">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-bold text-slate-200 truncate">{log.cityName}</span>
                  <span className="text-[10px] font-medium text-slate-500 whitespace-nowrap">{log.timestamp}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{log.action}</p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/60 text-[10px]">
                  <span className="text-slate-400">By {log.editor}</span>
                  <span className="font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {log.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STA & UNESCO Official Certification Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#00A651]/20 via-slate-900 to-slate-900 border border-[#00A651]/30 p-5 shadow-xl">
        <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-[#00A651]/10 rounded-full blur-xl pointer-events-none" />
        
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2.5 rounded-xl bg-[#00A651] text-white shadow-lg shadow-[#00A651]/30">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">STA & UNESCO Validated</h4>
            <p className="text-[11px] text-emerald-300/90 font-medium">Saudi Tourism Authority API v2.4</p>
          </div>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed mb-4">
          All 84 Saudi city profiles, heritage sites, and transport hubs are continuously verified against the Saudi National Tourism Geographic Database.
        </p>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            <span>Real-time weather station feeds</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            <span>Hajj & Umrah crowd density sync</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            <span>Automated multilingual metadata</span>
          </div>
        </div>

        <button 
          onClick={() => alert('Starting live STA registry synchronization...')}
          className="w-full mt-4 py-2.5 px-4 rounded-xl bg-[#00A651] hover:bg-[#008f45] text-white text-xs font-bold transition-all shadow-md shadow-[#00A651]/25 flex items-center justify-center gap-2"
        >
          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
          <span>Synchronize STA Data Pipeline</span>
        </button>
      </div>
    </div>
  );
};
