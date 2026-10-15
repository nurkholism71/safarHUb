import React from 'react';
import { ArrowRight, ShoppingBag, Send, FileText, CheckCircle, Truck, Sparkles } from 'lucide-react';

interface JastipPromoBannersProps {
  onViewPopular: () => void;
  onRequestCustom: () => void;
}

export const JastipPromoBanners: React.FC<JastipPromoBannersProps> = ({
  onViewPopular,
  onRequestCustom
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-6">
      {/* Left Promo Card: Popular from Saudi (5 cols) */}
      <div className="lg:col-span-5 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c3924] via-[#09261a] to-[#04130c] text-white p-6 sm:p-7 shadow-md flex flex-col justify-between min-h-[220px]">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1598155523122-3842334d2c17?auto=format&fit=crop&w=800&q=80"
            alt="Saudi Dates & Oud"
            className="w-full h-full object-cover object-right opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c3924] via-[#0c3924]/80 to-transparent"></div>
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-bold uppercase tracking-wider mb-2 border border-amber-400/30">
            <Sparkles className="w-3 h-3 text-amber-300" />
            Curated Best Sellers
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-serif text-amber-100 leading-tight">
            Popular from Saudi Arabia
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100/80 mt-1 max-w-sm">
            Original products, best quality, trusted shoppers directly from Haramain markets.
          </p>
        </div>

        <div className="relative z-10 pt-4">
          <button
            onClick={onViewPopular}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold border border-white/20 backdrop-blur-xs transition-colors group"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Right Banner: Request Custom Jastip (7 cols) */}
      <div className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-amber-50/60 via-white to-emerald-50/40 border border-slate-200 p-6 sm:p-7 shadow-xs flex flex-col justify-between">
        <div>
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-slate-500">Can't find the product?</p>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif">
                  Request Custom Jastip
                </h3>
              </div>
            </div>

            <button
              onClick={onRequestCustom}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#0e5f2c] hover:bg-[#09421e] text-white text-xs font-bold rounded-xl shadow-2xs transition-colors whitespace-nowrap self-start sm:self-auto"
            >
              <span>Request Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 4 Mini Steps */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            <div className="flex flex-col items-start space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-800 text-white text-[10px] font-bold flex items-center justify-center">
                  1
                </span>
                <span className="text-xs font-bold text-slate-900">Send Request</span>
              </div>
              <p className="text-[10px] text-slate-500 leading-tight">
                Tell us what you need with photo/link
              </p>
            </div>

            <div className="flex flex-col items-start space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-800 text-white text-[10px] font-bold flex items-center justify-center">
                  2
                </span>
                <span className="text-xs font-bold text-slate-900">Get Quotation</span>
              </div>
              <p className="text-[10px] text-slate-500 leading-tight">
                We'll check availability & give price
              </p>
            </div>

            <div className="flex flex-col items-start space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-800 text-white text-[10px] font-bold flex items-center justify-center">
                  3
                </span>
                <span className="text-xs font-bold text-slate-900">We Shop & Verify</span>
              </div>
              <p className="text-[10px] text-slate-500 leading-tight">
                We buy item & send live photo proof
              </p>
            </div>

            <div className="flex flex-col items-start space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-800 text-white text-[10px] font-bold flex items-center justify-center">
                  4
                </span>
                <span className="text-xs font-bold text-slate-900">Deliver to You</span>
              </div>
              <p className="text-[10px] text-slate-500 leading-tight">
                Domestic Saudi or International direct
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
