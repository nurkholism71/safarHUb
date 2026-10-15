import React from 'react';
import {
  CreditCard,
  Plus,
  FileText,
  Clock,
  RotateCcw,
  ChevronRight
} from 'lucide-react';
import { USER_PAYMENT_METHODS } from '../../data/profileData';

interface PaymentMethodsSettingsCardProps {
  onAddCard?: () => void;
  onSelectOption?: (optionKey: string, title: string) => void;
}

export const PaymentMethodsSettingsCard: React.FC<PaymentMethodsSettingsCardProps> = ({
  onAddCard,
  onSelectOption
}) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 mb-3.5">
          <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
            <CreditCard className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Payment Methods
            </h3>
            <p className="text-[11px] text-slate-500">
              Manage your saved payment methods.
            </p>
          </div>
        </div>

        {/* Saved Cards Grid */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          {USER_PAYMENT_METHODS.map((pm) => (
            <div
              key={pm.id}
              className="p-3 rounded-2xl border border-slate-100 bg-slate-50/70 flex flex-col justify-between space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">
                  {pm.type === 'visa' ? 'VISA' : 'Mastercard'}
                </span>
                {pm.isDefault && (
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Default
                  </span>
                )}
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
          ))}
        </div>

        {/* Add Payment Method Button */}
        <button
          onClick={onAddCard}
          className="w-full py-2 px-3 rounded-xl border border-dashed border-slate-300 text-slate-700 hover:border-emerald-600 hover:text-emerald-800 hover:bg-emerald-50/50 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors mb-3"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Payment Method</span>
        </button>

        {/* Sub Links */}
        <div className="space-y-0.5 text-xs pt-2 border-t border-slate-100">
          <button
            onClick={() => onSelectOption?.('billing', 'Billing Information')}
            className="w-full flex items-center justify-between p-2 rounded-xl text-slate-700 hover:bg-slate-50 transition-colors group"
          >
            <span className="flex items-center gap-2.5 font-semibold">
              <FileText className="w-4 h-4 text-slate-400 group-hover:text-emerald-700" />
              <span>Billing Information</span>
            </span>
            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-700" />
          </button>

          <button
            onClick={() => onSelectOption?.('history', 'Payment History')}
            className="w-full flex items-center justify-between p-2 rounded-xl text-slate-700 hover:bg-slate-50 transition-colors group"
          >
            <span className="flex items-center gap-2.5 font-semibold">
              <Clock className="w-4 h-4 text-slate-400 group-hover:text-emerald-700" />
              <span>Payment History</span>
            </span>
            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-700" />
          </button>

          <button
            onClick={() => onSelectOption?.('refunds', 'Refund Settings')}
            className="w-full flex items-center justify-between p-2 rounded-xl text-slate-700 hover:bg-slate-50 transition-colors group"
          >
            <span className="flex items-center gap-2.5 font-semibold">
              <RotateCcw className="w-4 h-4 text-slate-400 group-hover:text-emerald-700" />
              <span>Refund Settings</span>
            </span>
            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-700" />
          </button>
        </div>
      </div>
    </div>
  );
};
