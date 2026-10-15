import React, { useState } from 'react';
import { ShieldCheck, Monitor, AlertTriangle, FileText, Lock, Smartphone, Trash2 } from 'lucide-react';
import { SecurityLoginSessionRecord, SecurityAuditLogRecord } from '../../../types/adminSettings';

interface AdminSettingsSecurityViewProps {
  sessions: SecurityLoginSessionRecord[];
  auditLogs: SecurityAuditLogRecord[];
}

export const AdminSettingsSecurityView: React.FC<AdminSettingsSecurityViewProps> = ({
  sessions,
  auditLogs
}) => {
  return (
    <div className="space-y-6">
      {/* 1. Active Login Sessions Table */}
      <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200/80 dark:border-neutral-700 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-neutral-200/80 dark:border-neutral-700 flex items-center justify-between bg-neutral-50/50 dark:bg-neutral-800/50">
          <div>
            <div className="flex items-center gap-2">
              <Monitor className="w-5 h-5 text-emerald-600" />
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                Active Devices & Login Sessions
              </h3>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              Devices currently signed into your Saudi Admin account.
            </p>
          </div>

          <button
            onClick={() => alert('Terminating all other sessions...')}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-rose-50 text-rose-600 hover:bg-rose-100 dark:bg-rose-950/40 dark:text-rose-300 transition-colors"
          >
            Revoke All Other Sessions
          </button>
        </div>

        <div className="overflow-x-auto no-scrollbar">
          <table className="min-w-full text-left text-xs divide-y divide-neutral-200/70 dark:divide-neutral-700">
            <thead className="bg-neutral-50 dark:bg-neutral-800/80 text-[11px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4">Device & OS</th>
                <th className="py-3 px-3">Browser</th>
                <th className="py-3 px-3">IP Address</th>
                <th className="py-3 px-3">Location</th>
                <th className="py-3 px-3">Last Active</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 dark:divide-neutral-700/60">
              {sessions.map((ses) => (
                <tr key={ses.id} className="hover:bg-neutral-50/80 dark:hover:bg-neutral-700/40 transition-colors">
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="font-semibold text-neutral-900 dark:text-white flex items-center gap-2">
                      <span>{ses.device}</span>
                      {ses.isCurrentSession && (
                        <span className="px-2 py-0.2 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                          This Device
                        </span>
                      )}
                    </div>
                  </td>

                  <td className="py-3.5 px-3 whitespace-nowrap text-neutral-700 dark:text-neutral-300 font-mono">
                    {ses.browser}
                  </td>

                  <td className="py-3.5 px-3 whitespace-nowrap font-mono text-neutral-500">
                    {ses.ipAddress}
                  </td>

                  <td className="py-3.5 px-3 whitespace-nowrap font-medium text-neutral-800 dark:text-neutral-200">
                    {ses.location}
                  </td>

                  <td className="py-3.5 px-3 whitespace-nowrap text-neutral-500">
                    {ses.lastActive}
                  </td>

                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    {!ses.isCurrentSession && (
                      <button className="text-rose-600 hover:text-rose-700 font-semibold text-xs">
                        Revoke
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Security Audit Logs Database */}
      <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200/80 dark:border-neutral-700 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-neutral-200/80 dark:border-neutral-700 flex items-center justify-between bg-neutral-50/50 dark:bg-neutral-800/50">
          <div>
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600" />
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                Admin Security Audit Logs Database
              </h3>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              Immutable audit trails of privileged admin operations.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto no-scrollbar">
          <table className="min-w-full text-left text-xs divide-y divide-neutral-200/70 dark:divide-neutral-700">
            <thead className="bg-neutral-50 dark:bg-neutral-800/80 text-[11px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4">Timestamp</th>
                <th className="py-3 px-3">Admin Operator</th>
                <th className="py-3 px-3">Action Executed</th>
                <th className="py-3 px-3">Resource Target</th>
                <th className="py-3 px-3">IP Address</th>
                <th className="py-3 px-4 text-right">Severity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 dark:divide-neutral-700/60">
              {auditLogs.map((log) => (
                <tr key={log.id} className="hover:bg-neutral-50/80 dark:hover:bg-neutral-700/40 transition-colors">
                  <td className="py-3.5 px-4 whitespace-nowrap font-mono text-neutral-500">
                    {log.timestamp}
                  </td>

                  <td className="py-3.5 px-3 whitespace-nowrap font-semibold text-neutral-900 dark:text-white">
                    {log.user}
                  </td>

                  <td className="py-3.5 px-3 whitespace-nowrap text-neutral-800 dark:text-neutral-200 font-medium">
                    {log.action}
                  </td>

                  <td className="py-3.5 px-3 whitespace-nowrap text-neutral-600 dark:text-neutral-300 font-mono text-[11px]">
                    {log.resource}
                  </td>

                  <td className="py-3.5 px-3 whitespace-nowrap font-mono text-neutral-500">
                    {log.ipAddress}
                  </td>

                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        log.severity === 'Critical'
                          ? 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'
                          : log.severity === 'Warning'
                          ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300'
                      }`}
                    >
                      {log.severity}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
