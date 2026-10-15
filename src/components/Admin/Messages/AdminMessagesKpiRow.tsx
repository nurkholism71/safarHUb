import React from 'react';
import { 
  MessageSquare, 
  CheckCheck, 
  PhoneCall, 
  Inbox, 
  FileText,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { ADMIN_MESSAGE_KPIS } from '../../../data/adminMessagesData';

export const AdminMessagesKpiRow: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5" />;
      case 'CheckCheck':
        return <CheckCheck className="w-5 h-5" />;
      case 'PhoneCall':
        return <PhoneCall className="w-5 h-5" />;
      case 'Inbox':
        return <Inbox className="w-5 h-5" />;
      case 'FileText':
        return <FileText className="w-5 h-5" />;
      default:
        return <MessageSquare className="w-5 h-5" />;
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
      {ADMIN_MESSAGE_KPIS.map((kpi) => (
        <div
          key={kpi.id}
          className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
        >
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 line-clamp-1">
              {kpi.title}
            </span>
            <div className={`p-2 rounded-xl ${kpi.bgColorClass}`}>
              {getIcon(kpi.iconName)}
            </div>
          </div>

          <div className="mt-3">
            <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              {kpi.value}
            </div>
            <div className="mt-1 flex items-center gap-1.5 text-[11px]">
              <span
                className={`font-semibold flex items-center ${
                  kpi.isPositive ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'
                }`}
              >
                {kpi.isPositive ? (
                  <ArrowUpRight className="w-3 h-3 inline" />
                ) : (
                  <ArrowDownRight className="w-3 h-3 inline" />
                )}
                {kpi.change}
              </span>
              <span className="text-slate-400 dark:text-slate-500 truncate">
                {kpi.subtitle}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
