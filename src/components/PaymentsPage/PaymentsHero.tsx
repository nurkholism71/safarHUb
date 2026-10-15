import React from 'react';
import {
  Building2,
  Bus,
  PlaneTakeoff,
  ShoppingBag,
  MoonStar,
  FileCheck2,
  Compass,
  CreditCard,
  Plus,
  ArrowRight,
  ShieldCheck,
  Lock,
  Receipt
} from 'lucide-react';

interface PaymentsHeroProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onMakePayment: () => void;
}

export const PaymentsHero: React.FC<PaymentsHeroProps> = ({
  selectedCategory,
  onSelectCategory,
  onMakePayment
}) => {
  const categoryChips = [
    { id: 'hotel', label: 'Hotels', icon: Building2 },
    { id: 'transport', label: 'Transport', icon: Bus },
    { id: 'airport', label: 'Airport Services', icon: PlaneTakeoff },
    { id: 'jastip', label: 'Jastip', icon: ShoppingBag },
    { id: 'umrah', label: 'Umrah Packages', icon: MoonStar },
    { id: 'visa', label: 'Visa & Services', icon: FileCheck2 },
    { id: 'activity', label: 'Activities', icon: Compass }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-slate-900 text-white border-b border-slate-200">
      {/* Background Graphic & Daylight Makkah Panorama */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/umrah/hero_banner.jpg"
          alt="Makkah Holy Mosque & Clock Tower"
          className="w-full h-full object-cover object-center brightness-95 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        {/* Title & Trust Badges */}
        <div className="max-w-3xl mb-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white drop-shadow-md">
            Payments
          </h1>
          <p className="text-sm sm:text-base text-slate-200/90 mt-1 max-w-2xl font-medium leading-relaxed drop-shadow-xs">
            Secure and easy payments for all your travel needs in Saudi.
          </p>

          {/* 3 Trust Badges */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-4 text-[11px] font-semibold text-slate-200">
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <div>
                <span className="font-bold text-white">Secure & Encrypted</span>
                <span className="block text-[9px] text-slate-300">Your payments are protected</span>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15">
              <CreditCard className="w-3.5 h-3.5 text-amber-300" />
              <div>
                <span className="font-bold text-white">Multiple Payment Methods</span>
                <span className="block text-[9px] text-slate-300">Local & international options</span>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15">
              <Receipt className="w-3.5 h-3.5 text-blue-400" />
              <div>
                <span className="font-bold text-white">Transparent Transactions</span>
                <span className="block text-[9px] text-slate-300">Clear details and receipts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Quick Chips Floating Bar */}
        <div className="bg-white/95 backdrop-blur-md p-2 rounded-2xl border border-slate-200 shadow-xl flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {categoryChips.map((chip) => {
              const Icon = chip.icon;
              const isActive = selectedCategory === chip.id;
              return (
                <button
                  key={chip.id}
                  onClick={() => onSelectCategory(chip.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#0e5f2c] text-white shadow-xs'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-300' : 'text-slate-500'}`} />
                  <span>{chip.label}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={onMakePayment}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#0e5f2c] hover:bg-[#09421e] text-white text-xs font-bold rounded-xl shadow-xs transition-colors whitespace-nowrap ml-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Make a Payment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
