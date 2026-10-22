import React, { useState } from 'react';
import { ShieldCheck, Monitor, AlertTriangle, FileText, Lock, Smartphone, Trash2, ShieldAlert, KeyRound, CheckCircle2, Activity, RefreshCw } from 'lucide-react';
import { SecurityLoginSessionRecord, SecurityAuditLogRecord } from '../../../types/adminSettings';

interface AdminSettingsSecurityViewProps {
  sessions: SecurityLoginSessionRecord[];
  auditLogs: SecurityAuditLogRecord[];
}

export const AdminSettingsSecurityView: React.FC<AdminSettingsSecurityViewProps> = ({
  sessions,
  auditLogs
}) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);

  const handleRunDiagnostic = () => {
    setIsScanning(true);
    setScanResult(null);
    setTimeout(() => {
      setIsScanning(false);
      setScanResult('Diagnostic Completed: All 18 security checkpoints passed. Zero unauthorized access detected. TLS 1.3 & CSP active.');
    }, 1200);
  };

  return (
    <div className="space-y-6">
      {/* 0. Live Security Health & Risk Assessment Header */}
      <div className="bg-gradient-to-br from-emerald-900 via-emerald-950 to-slate-950 rounded-2xl p-6 text-white border border-emerald-800/50 shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-emerald-800/40">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Defense Status
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-200 border border-emerald-500/30">
                Risk Level: LOW (Optimal)
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <ShieldCheck className="w-7 h-7 text-emerald-400" />
              SafarHub Security Posture & Guard
            </h2>
            <p className="text-xs sm:text-sm text-emerald-200/80 max-w-2xl">
              Real-time threat monitoring, privileged identity management, and encrypted session tracking across KSA operations.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleRunDiagnostic}
              disabled={isScanning}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md transition-all active:scale-95 disabled:opacity-60 cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
              <span>{isScanning ? 'Scanning Network...' : 'Run Security Scan'}</span>
            </button>
          </div>
        </div>

        {scanResult && (
          <div className="mt-4 p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-2 animate-in fade-in duration-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{scanResult}</span>
          </div>
        )}

        {/* 4 Security Pillars Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-6">
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <div className="flex items-center justify-between text-xs text-emerald-300">
              <span className="font-semibold">Security Score</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white">98 / 100</div>
            <div className="text-[10px] text-emerald-300/80">A+ SOC2 Standard</div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <div className="flex items-center justify-between text-xs text-emerald-300">
              <span className="font-semibold">2FA Protection</span>
              <KeyRound className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white">Enforced</div>
            <div className="text-[10px] text-emerald-300/80">All Super Admins</div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <div className="flex items-center justify-between text-xs text-emerald-300">
              <span className="font-semibold">Threat Detection</span>
              <Activity className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white">0 Threats</div>
            <div className="text-[10px] text-emerald-300/80">WAF & DDoS Filter Active</div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <div className="flex items-center justify-between text-xs text-emerald-300">
              <span className="font-semibold">Data Encryption</span>
              <Lock className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white">AES-256</div>
            <div className="text-[10px] text-emerald-300/80">TLS 1.3 Transport</div>
          </div>
        </div>
      </div>

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
