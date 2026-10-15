import React, { useState } from 'react';
import { CreditCard, Plus, ShieldCheck, CheckCircle2, Edit3, Lock } from 'lucide-react';
import { PaymentGatewayRecord } from '../../../types/adminSettings';

interface AdminSettingsPaymentsViewProps {
  gateways: PaymentGatewayRecord[];
  onAddGateway?: () => void;
}

export const AdminSettingsPaymentsView: React.FC<AdminSettingsPaymentsViewProps> = ({
  gateways,
  onAddGateway
}) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200/80 dark:border-neutral-700 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-neutral-200/80 dark:border-neutral-700 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-neutral-50/50 dark:bg-neutral-800/50">
        <div>
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-emerald-600" />
            <h2 className="text-base font-bold text-neutral-900 dark:text-white">
              Payment Gateways & Saudi Fintech Providers
            </h2>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
            Manage Mada debit, Apple Pay, STC Pay, international cards, and BNPL installment partners.
          </p>
        </div>

        <button
          onClick={onAddGateway}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#0e5f2c] text-white hover:bg-[#0c4e24] transition-colors shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Connect New Provider</span>
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto no-scrollbar">
        <table className="min-w-full text-left text-xs divide-y divide-neutral-200/70 dark:divide-neutral-700">
          <thead className="bg-neutral-50 dark:bg-neutral-800/80 text-[11px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
            <tr>
              <th className="py-3 px-4">Gateway & Provider</th>
              <th className="py-3 px-3">Type</th>
              <th className="py-3 px-3">Transaction Fee</th>
              <th className="py-3 px-3">Settlement Window</th>
              <th className="py-3 px-3">Daily Volume Limit</th>
              <th className="py-3 px-3">Currencies</th>
              <th className="py-3 px-3">Status</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 dark:divide-neutral-700/60">
            {gateways.map((gw) => (
              <tr key={gw.id} className="hover:bg-neutral-50/80 dark:hover:bg-neutral-700/40 transition-colors">
                <td className="py-3.5 px-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <span className="text-xl shrink-0">{gw.logo}</span>
                    <div>
                      <div className="font-semibold text-neutral-900 dark:text-white">{gw.name}</div>
                      <div className="text-[10px] text-neutral-400 font-mono">{gw.code}</div>
                    </div>
                  </div>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200">
                    {gw.type}
                  </span>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <div className="font-bold text-neutral-900 dark:text-white">{gw.feePercentage}</div>
                  <div className="text-[10px] text-neutral-400">+ {gw.fixedFee} fixed</div>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap font-medium text-neutral-700 dark:text-neutral-300">
                  {gw.settlementPeriod}
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap font-bold text-neutral-900 dark:text-white">
                  {gw.dailyVolumeLimit}
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap font-mono text-emerald-600 font-bold">
                  {gw.currency}
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                    {gw.status}
                  </span>
                </td>

                <td className="py-3.5 px-4 text-right whitespace-nowrap">
                  <button className="p-1.5 rounded-lg text-neutral-500 hover:text-[#0e5f2c] hover:bg-emerald-50 dark:hover:bg-neutral-700">
                    <Edit3 className="w-4 h-4" />
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
