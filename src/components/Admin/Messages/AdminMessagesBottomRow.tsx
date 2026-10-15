import React from 'react';
import { 
  BarChart3, 
  PieChart, 
  Activity, 
  PhoneCall, 
  MessageCircle, 
  Crown, 
  Mail, 
  Smartphone, 
  Bot,
  Inbox,
  CheckCircle2
} from 'lucide-react';
import { 
  ADMIN_MESSAGE_TRAFFIC_SHARES, 
  ADMIN_MESSAGE_HOURLY_VOLUME, 
  ADMIN_MESSAGE_AUDIT_LOGS 
} from '../../../data/adminMessagesData';

export const AdminMessagesBottomRow: React.FC = () => {
  const getChannelIcon = (iconName: string) => {
    switch (iconName) {
      case 'PhoneCall':
        return <PhoneCall className="w-3.5 h-3.5 text-emerald-500" />;
      case 'MessageCircle':
        return <MessageCircle className="w-3.5 h-3.5 text-teal-500" />;
      case 'Inbox':
        return <Inbox className="w-3.5 h-3.5 text-blue-500" />;
      case 'Crown':
        return <Crown className="w-3.5 h-3.5 text-amber-500" />;
      case 'Mail':
        return <Mail className="w-3.5 h-3.5 text-purple-500" />;
      case 'Smartphone':
        return <Smartphone className="w-3.5 h-3.5 text-orange-500" />;
      default:
        return <Bot className="w-3.5 h-3.5 text-slate-400" />;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 w-full">
      {/* 1. Channel Traffic Distribution (4 cols) */}
      <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <PieChart className="w-4 h-4 text-[#0e5f2c]" />
              Traffic by Platform Channel
            </h3>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full">
              7 Channels
            </span>
          </div>

          <div className="space-y-2.5">
            {ADMIN_MESSAGE_TRAFFIC_SHARES.map((ch) => (
              <div key={ch.channel} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                    {getChannelIcon(ch.iconName)}
                    <span className="truncate max-w-[150px]">{ch.channel}</span>
                  </div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    {ch.percentage}% <span className="text-[10px] font-normal text-slate-400">({ch.count.toLocaleString()})</span>
                  </div>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${ch.percentage}%`,
                      backgroundColor: ch.color
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Dominant: <strong>WhatsApp Gateway</strong></span>
          <span className="text-[#0e5f2c] font-bold">57.8% Volume</span>
        </div>
      </div>

      {/* 2. 24H Message Inflow & Outflow (4 cols) */}
      <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-emerald-600" />
              24-Hour Message Throughput
            </h3>
            <div className="flex items-center gap-2 text-[10px]">
              <span className="flex items-center gap-1 text-emerald-600"><span className="w-2 h-2 rounded-xs bg-[#0e5f2c]" /> Sent</span>
              <span className="flex items-center gap-1 text-teal-500"><span className="w-2 h-2 rounded-xs bg-teal-400" /> In</span>
            </div>
          </div>

          <div className="h-44 flex items-end justify-between gap-2 pt-6 px-1">
            {ADMIN_MESSAGE_HOURLY_VOLUME.map((v) => {
              const maxVal = 2500;
              const sentPercent = (v.sent / maxVal) * 100;
              const rcvPercent = (v.received / maxVal) * 100;

              return (
                <div key={v.hour} className="flex-1 flex flex-col items-center gap-1 h-full justify-end group">
                  <div className="w-full flex items-end justify-center gap-1 h-full">
                    <div
                      className="w-1/2 bg-[#0e5f2c] rounded-t-sm transition-all group-hover:brightness-125"
                      style={{ height: `${sentPercent}%` }}
                      title={`Sent: ${v.sent}`}
                    />
                    <div
                      className="w-1/2 bg-teal-400 rounded-t-sm transition-all group-hover:brightness-125"
                      style={{ height: `${rcvPercent}%` }}
                      title={`Received: ${v.received}`}
                    />
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">
                    {v.hour}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Peak Throughput: <strong>16:00 AST</strong></span>
          <span className="text-emerald-600 font-bold">4,630 msgs/hr</span>
        </div>
      </div>

      {/* 3. Dispatch & Audit Log Feed (4 cols) */}
      <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#d4af37]" />
              Real-time Message Dispatch Log
            </h3>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          </div>

          <div className="space-y-3">
            {ADMIN_MESSAGE_AUDIT_LOGS.map((log) => (
              <div
                key={log.id}
                className="p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 flex items-start gap-2.5"
              >
                <div className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between text-[11px] mb-0.5">
                    <span className="font-bold text-slate-800 dark:text-slate-200 truncate">
                      {log.action}
                    </span>
                    <span className="text-[10px] text-slate-400">{log.timestamp}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug line-clamp-2">
                    {log.details}
                  </p>
                  <div className="text-[9px] text-slate-400 font-mono mt-1">
                    by {log.operator} • {log.messageId}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 text-center">
          Delivery success rate: <strong className="text-emerald-600">99.8%</strong> across all gateways
        </div>
      </div>
    </div>
  );
};
