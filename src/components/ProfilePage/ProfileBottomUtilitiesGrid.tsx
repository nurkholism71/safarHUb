import React from 'react';
import {
  CreditCard,
  Plus,
  FileCheck2,
  Upload,
  Bell,
  Lock,
  Globe,
  Trash2,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { USER_PAYMENT_METHODS, USER_DOCUMENTS } from '../../data/profileData';

interface ProfileBottomUtilitiesGridProps {
  onManagePayments?: () => void;
  onAddPaymentMethod?: () => void;
  onManageDocuments?: () => void;
  onUploadDocument?: (docTitle: string) => void;
  onSettingClick?: (settingKey: string, title: string) => void;
}

export const ProfileBottomUtilitiesGrid: React.FC<ProfileBottomUtilitiesGridProps> = ({
  onManagePayments,
  onAddPaymentMethod,
  onManageDocuments,
  onUploadDocument,
  onSettingClick
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* 1. Payment Methods */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3.5">
            <h3 className="text-sm font-bold text-slate-900">
              Payment Methods
            </h3>
            <button
              onClick={onManagePayments}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline"
            >
              Manage
            </button>
          </div>

          <div className="space-y-2.5 mb-4">
            {USER_PAYMENT_METHODS.map((pm) => (
              <div
                key={pm.id}
                className="flex items-center justify-between p-3 rounded-2xl border border-slate-100 bg-slate-50/60"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-6 rounded bg-slate-800 text-white flex items-center justify-center text-[10px] font-bold">
                    {pm.type.toUpperCase()}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">
                      •••• {pm.last4}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Expiry {pm.expiry}
                    </span>
                  </div>
                </div>
                {pm.isDefault && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Default
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={onAddPaymentMethod}
          className="w-full py-2.5 px-3 rounded-xl border border-dashed border-slate-300 text-slate-700 hover:border-emerald-600 hover:text-emerald-800 hover:bg-emerald-50/50 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Payment Method</span>
        </button>
      </div>

      {/* 2. Documents */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3.5">
            <h3 className="text-sm font-bold text-slate-900">
              Documents
            </h3>
            <button
              onClick={onManageDocuments}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline"
            >
              Manage
            </button>
          </div>

          <div className="space-y-2.5">
            {USER_DOCUMENTS.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between p-2.5 rounded-2xl border border-slate-100 bg-slate-50/60"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <FileCheck2 className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-xs font-bold text-slate-800 truncate">
                      {doc.title}
                    </h5>
                    <p className="text-[10px] text-slate-400 truncate">
                      {doc.description}
                    </p>
                  </div>
                </div>

                {doc.status === 'Verified' ? (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                    Verified
                  </span>
                ) : (
                  <button
                    onClick={() => onUploadDocument?.(doc.title)}
                    className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shrink-0 flex items-center gap-1 shadow-2xs"
                  >
                    <Upload className="w-3 h-3" />
                    <span>Upload</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Account Settings */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs flex flex-col justify-between">
        <div>
          <div className="pb-3 border-b border-slate-100 mb-3.5">
            <h3 className="text-sm font-bold text-slate-900">
              Account Settings
            </h3>
          </div>

          <div className="space-y-1 text-xs">
            <button
              onClick={() => onSettingClick?.('notifications', 'Notification Settings')}
              className="w-full flex items-center justify-between p-2 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-emerald-900 transition-colors group"
            >
              <span className="flex items-center gap-2.5 font-semibold">
                <Bell className="w-4 h-4 text-slate-400 group-hover:text-emerald-700" />
                <span>Notification Settings</span>
              </span>
              <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-700" />
            </button>

            <button
              onClick={() => onSettingClick?.('security', 'Privacy & Security')}
              className="w-full flex items-center justify-between p-2 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-emerald-900 transition-colors group"
            >
              <span className="flex items-center gap-2.5 font-semibold">
                <Lock className="w-4 h-4 text-slate-400 group-hover:text-emerald-700" />
                <span>Privacy & Security</span>
              </span>
              <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-700" />
            </button>

            <button
              onClick={() => onSettingClick?.('language', 'Language & Region')}
              className="w-full flex items-center justify-between p-2 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-emerald-900 transition-colors group"
            >
              <span className="flex items-center gap-2.5 font-semibold">
                <Globe className="w-4 h-4 text-slate-400 group-hover:text-emerald-700" />
                <span>Language & Region</span>
              </span>
              <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-700" />
            </button>

            <button
              onClick={() => onSettingClick?.('delete', 'Delete Account Confirmation')}
              className="w-full flex items-center justify-between p-2 rounded-xl text-rose-600 hover:bg-rose-50 transition-colors group"
            >
              <span className="flex items-center gap-2.5 font-semibold">
                <Trash2 className="w-4 h-4 text-rose-500" />
                <span>Delete Account</span>
              </span>
              <ChevronRight className="w-4 h-4 text-rose-300 group-hover:text-rose-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
