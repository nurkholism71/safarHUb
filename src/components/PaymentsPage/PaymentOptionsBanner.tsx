import React from 'react';
import { ShieldCheck, Headphones, Receipt, Lock } from 'lucide-react';

export const PaymentOptionsBanner: React.FC = () => {
  return (
    <div className="space-y-4 my-6">
      {/* 1. Main Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0c3924] via-[#09261a] to-[#04130c] text-white p-6 sm:p-7 shadow-xl">
        <div className="absolute inset-0 opacity-15">
          <img
            src="/images/umrah/hero_banner.jpg"
            alt="Makkah Skyline"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-amber-100 leading-tight">
              Flexible Payment Options
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 mt-1">
              For a worry-free journey. Pay in SAR, IDR, USD, or EUR with zero hidden conversion fees.
            </p>
          </div>

          {/* Payment Method Badges / Logos */}
          <div className="flex flex-wrap items-center gap-2.5 bg-white/10 backdrop-blur-md p-2.5 rounded-2xl border border-white/15">
            <span className="px-3 py-1 bg-white text-blue-900 rounded-lg text-xs font-black tracking-wider shadow-2xs">
              VISA
            </span>
            <div className="px-3 py-1 bg-white rounded-lg flex items-center gap-0.5 shadow-2xs">
              <span className="w-3 h-3 rounded-full bg-red-600 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-400 inline-block -ml-1.5 opacity-90"></span>
            </div>
            <span className="px-2.5 py-1 bg-[#007a3d] text-white rounded-lg text-xs font-bold tracking-tight shadow-2xs">
              mada
            </span>
            <span className="px-2.5 py-1 bg-[#4f008c] text-white rounded-lg text-xs font-bold shadow-2xs">
              stc pay
            </span>
            <span className="px-2.5 py-1 bg-white text-slate-900 rounded-lg text-xs font-bold flex items-center gap-1 shadow-2xs">
              Pay
            </span>
            <span className="px-2.5 py-1 bg-white text-slate-800 rounded-lg text-xs font-bold shadow-2xs">
              G Pay
            </span>
          </div>
        </div>
      </div>

      {/* 2. 3 Trust Security Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex items-center gap-3 p-3.5 bg-white border border-slate-200/90 rounded-2xl shadow-2xs">
          <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0">
            <Lock className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs font-bold text-slate-900">Secure Payment</h5>
            <p className="text-[10px] text-slate-400">256-bit SSL Bank Encrypted</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3.5 bg-white border border-slate-200/90 rounded-2xl shadow-2xs">
          <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0">
            <Headphones className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs font-bold text-slate-900">24/7 Support</h5>
            <p className="text-[10px] text-slate-400">Payment & Billing Inquiries</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3.5 bg-white border border-slate-200/90 rounded-2xl shadow-2xs">
          <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0">
            <Receipt className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs font-bold text-slate-900">Instant Receipt</h5>
            <p className="text-[10px] text-slate-400">Official VAT Invoices Generated</p>
          </div>
        </div>
      </div>
    </div>
  );
};
