import React from 'react';
import {
  CreditCard,
  Building2,
  Bus,
  Plane,
  ShoppingBag,
  MoonStar,
  LayoutGrid,
  ArrowRight,
  Plus,
  ChevronDown,
  ShieldCheck
} from 'lucide-react';
import { SPENDING_BREAKDOWN, SAVED_PAYMENT_METHODS } from '../../data/paymentsData';

interface PaymentsRightSidebarProps {
  onAddPaymentMethod: () => void;
  onQuickPay: (service: string) => void;
  onViewReport: () => void;
}

export const PaymentsRightSidebar: React.FC<PaymentsRightSidebarProps> = ({
  onAddPaymentMethod,
  onQuickPay,
  onViewReport
}) => {
  const quickServices = [
    { id: 'hotel', label: 'Pay Hotel', icon: Building2 },
    { id: 'transport', label: 'Pay Transport', icon: Bus },
    { id: 'umrah', label: 'Pay Umrah', icon: MoonStar },
    { id: 'airport', label: 'Pay Airport Service', icon: Plane },
    { id: 'jastip', label: 'Pay Jastip', icon: ShoppingBag },
    { id: 'other', label: 'Pay Other Service', icon: LayoutGrid }
  ];

  return (
    <div className="space-y-5">
      {/* 1. Payment Summary Card */}
      <div className="bg-white border border-slate-200/90 rounded-3xl p-5 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
          <h3 className="text-base font-bold text-slate-900 font-serif">Payment Summary</h3>
          <div className="relative">
            <select className="text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 pr-6 appearance-none outline-hidden cursor-pointer">
              <option>This Month</option>
              <option>Last 3 Months</option>
              <option>Year 2026</option>
            </select>
            <ChevronDown className="w-3 h-3 text-slate-400 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Donut Chart & Total */}
        <div className="flex items-center justify-center py-2">
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* SVG Donut Ring */}
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              {/* Background */}
              <circle
                cx="18"
                cy="18"
                r="15.9155"
                fill="none"
                stroke="#f1f5f9"
                strokeWidth="4"
              />
              {/* Umrah (49%) - Emerald */}
              <circle
                cx="18"
                cy="18"
                r="15.9155"
                fill="none"
                stroke="#0e5f2c"
                strokeWidth="4"
                strokeDasharray="49, 100"
                strokeDashoffset="0"
              />
              {/* Hotels (36%) - Sky */}
              <circle
                cx="18"
                cy="18"
                r="15.9155"
                fill="none"
                stroke="#0284c7"
                strokeWidth="4"
                strokeDasharray="36, 100"
                strokeDashoffset="-49"
              />
              {/* Transport (6%) - Amber */}
              <circle
                cx="18"
                cy="18"
                r="15.9155"
                fill="none"
                stroke="#d97706"
                strokeWidth="4"
                strokeDasharray="6, 100"
                strokeDashoffset="-85"
              />
              {/* Jastip (5%) - Orange */}
              <circle
                cx="18"
                cy="18"
                r="15.9155"
                fill="none"
                stroke="#ea580c"
                strokeWidth="4"
                strokeDasharray="5, 100"
                strokeDashoffset="-91"
              />
              {/* Airport (4%) - Rose */}
              <circle
                cx="18"
                cy="18"
                r="15.9155"
                fill="none"
                stroke="#e11d48"
                strokeWidth="4"
                strokeDasharray="4, 100"
                strokeDashoffset="-96"
              />
            </svg>

            {/* Center Label */}
            <div className="absolute text-center flex flex-col items-center">
              <span className="text-[10px] text-slate-400 font-bold uppercase">SAR</span>
              <span className="text-lg font-black text-slate-900 leading-none">
                {SPENDING_BREAKDOWN.totalSpentSAR.toLocaleString()}
              </span>
              <span className="text-[9px] text-slate-500 font-semibold mt-0.5">Total Spent</span>
            </div>
          </div>
        </div>

        {/* Breakdown Legend Table */}
        <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs font-semibold">
          <div className="flex items-center justify-between text-slate-700">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0284c7]"></span>
              <span>Hotels</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-400">{SPENDING_BREAKDOWN.hotelsPercent}%</span>
              <span className="font-bold text-slate-900">
                {SPENDING_BREAKDOWN.hotelsSAR.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-slate-700">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0e5f2c]"></span>
              <span>Umrah Packages</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-400">{SPENDING_BREAKDOWN.umrahPercent}%</span>
              <span className="font-bold text-slate-900">
                {SPENDING_BREAKDOWN.umrahSAR.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-slate-700">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d97706]"></span>
              <span>Transport</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-400">{SPENDING_BREAKDOWN.transportPercent}%</span>
              <span className="font-bold text-slate-900">
                {SPENDING_BREAKDOWN.transportSAR.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-slate-700">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e11d48]"></span>
              <span>Airport Services</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-400">{SPENDING_BREAKDOWN.airportPercent}%</span>
              <span className="font-bold text-slate-900">
                {SPENDING_BREAKDOWN.airportSAR.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-slate-700">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ea580c]"></span>
              <span>Jastip</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-400">{SPENDING_BREAKDOWN.jastipPercent}%</span>
              <span className="font-bold text-slate-900">
                {SPENDING_BREAKDOWN.jastipSAR.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={onViewReport}
          className="w-full mt-4 py-2 text-xs font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100/70 rounded-xl transition-colors flex items-center justify-center gap-1"
        >
          <span>View Spending Report</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 2. Saved Payment Methods Card */}
      <div className="bg-white border border-slate-200/90 rounded-3xl p-5 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 font-serif">Saved Payment Methods</h3>
          <button
            onClick={() => alert('Managing payment methods & billing address')}
            className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1"
          >
            <span>Manage</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* List of Cards */}
        <div className="space-y-2">
          {/* Visa */}
          <div className="flex items-center justify-between p-2.5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2.5">
              <div className="px-2 py-1 bg-white border border-slate-200 rounded font-black text-blue-800 text-[10px] tracking-wider">
                VISA
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-900">Visa **** 4587</h5>
                <span className="text-[10px] text-slate-400 font-medium">Exp 12/2028</span>
              </div>
            </div>
            <span className="px-2 py-0.5 text-[9px] font-bold bg-emerald-100 text-emerald-800 rounded">
              Default
            </span>
          </div>

          {/* Mastercard */}
          <div className="flex items-center justify-between p-2.5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2.5">
              <div className="px-2 py-1 bg-white border border-slate-200 rounded flex items-center gap-0.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block -ml-1.5 opacity-80"></span>
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-900">Mastercard **** 2233</h5>
                <span className="text-[10px] text-slate-400 font-medium">Exp 09/2027</span>
              </div>
            </div>
          </div>

          {/* stc Pay */}
          <div className="flex items-center justify-between p-2.5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2.5">
              <div className="px-1.5 py-0.5 bg-[#4f008c] text-white rounded font-bold text-[9px]">
                stc pay
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-900">stc Pay</h5>
                <span className="text-[10px] text-slate-400 font-medium">+966 5XX XXX 123</span>
              </div>
            </div>
          </div>

          {/* Mada */}
          <div className="flex items-center justify-between p-2.5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2.5">
              <div className="px-1.5 py-0.5 bg-[#007a3d] text-white rounded font-bold text-[9px]">
                mada
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-900">Mada</h5>
                <span className="text-[10px] text-slate-400 font-medium">**** 9901</span>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={onAddPaymentMethod}
          className="w-full py-2.5 border-2 border-dashed border-slate-300 hover:border-emerald-600 text-slate-700 hover:text-emerald-900 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Payment Method</span>
        </button>
      </div>

      {/* 3. Quick Payment 6-Grid Box */}
      <div className="bg-white border border-slate-200/90 rounded-3xl p-4 shadow-xs space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">
          Quick Payment
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {quickServices.map((srv) => {
            const Icon = srv.icon;
            return (
              <button
                key={srv.id}
                onClick={() => onQuickPay(srv.id)}
                className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 transition-colors text-center group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold leading-tight">{srv.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
