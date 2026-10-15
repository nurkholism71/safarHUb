import React, { useState } from 'react';
import { Share2, Plus, CheckCircle2, RefreshCw, Key, ShieldCheck } from 'lucide-react';
import { ThirdPartyIntegrationRecord } from '../../../types/adminSettings';

interface AdminSettingsIntegrationsViewProps {
  integrations: ThirdPartyIntegrationRecord[];
  onAddIntegration?: () => void;
}

export const AdminSettingsIntegrationsView: React.FC<AdminSettingsIntegrationsViewProps> = ({
  integrations,
  onAddIntegration
}) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200/80 dark:border-neutral-700 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-neutral-200/80 dark:border-neutral-700 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-neutral-50/50 dark:bg-neutral-800/50">
        <div>
          <div className="flex items-center gap-2">
            <Share2 className="w-5 h-5 text-emerald-600" />
            <h2 className="text-base font-bold text-neutral-900 dark:text-white">
              Connected Third-Party APIs & Travel Engines
            </h2>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
            GDS flight inventory, Bedbanks, Haramain High-Speed Train, and Saudi Nusuk G2G platform.
          </p>
        </div>

        <button
          onClick={onAddIntegration}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#0e5f2c] text-white hover:bg-[#0c4e24] transition-colors shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Custom API Connection</span>
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto no-scrollbar">
        <table className="min-w-full text-left text-xs divide-y divide-neutral-200/70 dark:divide-neutral-700">
          <thead className="bg-neutral-50 dark:bg-neutral-800/80 text-[11px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
            <tr>
              <th className="py-3 px-4">Integration Name & Provider</th>
              <th className="py-3 px-3">API Category</th>
              <th className="py-3 px-3">API Version</th>
              <th className="py-3 px-3">Masked Secret Key</th>
              <th className="py-3 px-3">Monthly Requests</th>
              <th className="py-3 px-3">Last Sync</th>
              <th className="py-3 px-3">Status</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 dark:divide-neutral-700/60">
            {integrations.map((item) => (
              <tr key={item.id} className="hover:bg-neutral-50/80 dark:hover:bg-neutral-700/40 transition-colors">
                <td className="py-3.5 px-4 whitespace-nowrap">
                  <div className="font-semibold text-neutral-900 dark:text-white">{item.name}</div>
                  <div className="text-[10px] text-neutral-400">{item.provider}</div>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200">
                    {item.category}
                  </span>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap font-mono text-neutral-600 dark:text-neutral-300">
                  {item.apiVersion}
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap font-mono text-neutral-500 text-[11px]">
                  {item.apiKeyMasked}
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap font-bold text-neutral-900 dark:text-white">
                  {item.monthlyRequests.toLocaleString()} / mo
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap text-neutral-500">
                  {item.lastSync}
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                    {item.status}
                  </span>
                </td>

                <td className="py-3.5 px-4 text-right whitespace-nowrap">
                  <button
                    onClick={() => alert(`Syncing ${item.name}...`)}
                    className="p-1.5 rounded-lg text-neutral-500 hover:text-[#0e5f2c] hover:bg-emerald-50 dark:hover:bg-neutral-700 transition-colors"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
