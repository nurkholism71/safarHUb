import React, { useState } from 'react';
import { Server, Database, Activity, RefreshCw, AlertTriangle, ShieldCheck, Power } from 'lucide-react';
import { SystemHealthMetric } from '../../../types/adminSettings';

interface AdminSettingsSystemViewProps {
  healthMetrics: SystemHealthMetric[];
}

export const AdminSettingsSystemView: React.FC<AdminSettingsSystemViewProps> = ({
  healthMetrics
}) => {
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  return (
    <div className="space-y-6">
      {/* 1. System Health & Infrastructure Overview */}
      <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200/80 dark:border-neutral-700 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Server className="w-5 h-5 text-emerald-600" />
            <h3 className="text-base font-bold text-neutral-900 dark:text-white">
              Cloud Infrastructure & Server Health
            </h3>
          </div>
          <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            All Services Operational
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {healthMetrics.map((h) => (
            <div
              key={h.id}
              className="p-4 rounded-xl border border-neutral-100 dark:border-neutral-700/60 bg-neutral-50/50 dark:bg-neutral-900/30"
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs font-bold text-neutral-900 dark:text-white">
                  {h.metric}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                  {h.value}
                </span>
              </div>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1">
                {h.details}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. System Maintenance & Cache Control */}
      <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200/80 dark:border-neutral-700 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-neutral-900 dark:text-white">
          Maintenance & Storage Management
        </h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4 p-4 rounded-xl border border-neutral-100 dark:border-neutral-700/60">
            <div>
              <h4 className="text-xs font-bold text-neutral-900 dark:text-white">
                Platform Maintenance Mode
              </h4>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                When enabled, client portal visitors will see a scheduled maintenance notice.
              </p>
            </div>
            <button
              onClick={() => setMaintenanceMode(!maintenanceMode)}
              className={`w-11 h-6 rounded-full p-0.5 transition-colors shrink-0 ${
                maintenanceMode ? 'bg-amber-600' : 'bg-neutral-300 dark:bg-neutral-600'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  maintenanceMode ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between gap-4 p-4 rounded-xl border border-neutral-100 dark:border-neutral-700/60">
            <div>
              <h4 className="text-xs font-bold text-neutral-900 dark:text-white">
                Purge Redis Application Cache
              </h4>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                Clear all cached hotel rate cards, transportation schedules, and flight routes.
              </p>
            </div>
            <button
              onClick={() => alert('Application cache purged successfully!')}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 text-neutral-800 dark:text-white transition-colors shrink-0"
            >
              Purge Cache
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
