import React from 'react';
import {
  ShieldCheck,
  Bell,
  BarChart2,
  Download,
  Trash2,
  ChevronRight
} from 'lucide-react';

interface PrivacyDataSettingsCardProps {
  onSelectOption?: (optionKey: string, title: string) => void;
}

export const PrivacyDataSettingsCard: React.FC<PrivacyDataSettingsCardProps> = ({
  onSelectOption
}) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 mb-3.5">
          <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Privacy & Data
            </h3>
            <p className="text-[11px] text-slate-500">
              Control your data and privacy settings.
            </p>
          </div>
        </div>

        <div className="space-y-1 text-xs">
          <button
            onClick={() => onSelectOption?.('privacy-settings', 'Privacy Settings & Permissions')}
            className="w-full flex items-center justify-between p-2.5 rounded-2xl hover:bg-slate-50 transition-colors group text-left"
          >
            <span className="flex items-center gap-3 font-semibold text-slate-700 group-hover:text-emerald-900">
              <Bell className="w-4 h-4 text-slate-400 group-hover:text-emerald-700" />
              <span>Privacy Settings</span>
            </span>
            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all" />
          </button>

          <button
            onClick={() => onSelectOption?.('data-usage', 'Data Usage & Diagnostics')}
            className="w-full flex items-center justify-between p-2.5 rounded-2xl hover:bg-slate-50 transition-colors group text-left"
          >
            <span className="flex items-center gap-3 font-semibold text-slate-700 group-hover:text-emerald-900">
              <BarChart2 className="w-4 h-4 text-slate-400 group-hover:text-emerald-700" />
              <span>Data Usage</span>
            </span>
            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all" />
          </button>

          <button
            onClick={() => onSelectOption?.('download-data', 'Download My Personal Data')}
            className="w-full flex items-center justify-between p-2.5 rounded-2xl hover:bg-slate-50 transition-colors group text-left"
          >
            <span className="flex items-center gap-3 font-semibold text-slate-700 group-hover:text-emerald-900">
              <Download className="w-4 h-4 text-slate-400 group-hover:text-emerald-700" />
              <span>Download My Data</span>
            </span>
            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all" />
          </button>

          <button
            onClick={() => onSelectOption?.('delete-account', 'Delete Account Permanently')}
            className="w-full flex items-center justify-between p-2.5 rounded-2xl hover:bg-rose-50 transition-colors group text-left text-rose-600"
          >
            <span className="flex items-center gap-3 font-semibold">
              <Trash2 className="w-4 h-4 text-rose-500" />
              <span>Delete Account</span>
            </span>
            <ChevronRight className="w-4 h-4 text-rose-300 group-hover:text-rose-600 group-hover:translate-x-0.5 transition-all" />
          </button>
        </div>
      </div>
    </div>
  );
};
