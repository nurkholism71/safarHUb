import React from 'react';
import {
  FileText,
  BadgeDollarSign,
  CreditCard,
  ShoppingBag,
  Truck,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const HowJastipWorks: React.FC = () => {
  const steps = [
    {
      num: 1,
      title: '1. Request Product',
      desc: 'Send product link, photo, or description of items you want.',
      icon: FileText,
      color: 'bg-emerald-50 text-emerald-800 border-emerald-200'
    },
    {
      num: 2,
      title: '2. Get Quotation',
      desc: 'We check availability in Saudi stores and provide a transparent quote.',
      icon: BadgeDollarSign,
      color: 'bg-emerald-50 text-emerald-800 border-emerald-200'
    },
    {
      num: 3,
      title: '3. Payment',
      desc: 'Pay securely via local bank transfer, QRIS, credit card, or SAR.',
      icon: CreditCard,
      color: 'bg-emerald-50 text-emerald-800 border-emerald-200'
    },
    {
      num: 4,
      title: '4. Shopping & Proof',
      desc: 'Our Saudi team purchases items and sends live photo/video proof.',
      icon: ShoppingBag,
      color: 'bg-emerald-50 text-emerald-800 border-emerald-200'
    },
    {
      num: 5,
      title: '5. Delivery',
      desc: 'We pack securely with shockproof bubble wrap & ship to your doorstep.',
      icon: Truck,
      color: 'bg-emerald-50 text-emerald-800 border-emerald-200'
    }
  ];

  return (
    <div className="my-10 p-6 sm:p-8 bg-white border border-slate-200/90 rounded-3xl shadow-xs">
      <div className="text-center max-w-xl mx-auto mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
          How Jastip Works
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Simple, transparent 5-step process from order request to doorstep delivery
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="relative flex flex-col items-center text-center p-4 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all group"
            >
              {/* Step Icon */}
              <div
                className={`w-12 h-12 rounded-2xl ${step.color} border flex items-center justify-center mb-3 shadow-2xs group-hover:scale-110 transition-transform`}
              >
                <Icon className="w-6 h-6" />
              </div>

              <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                {step.title}
              </h3>
              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                {step.desc}
              </p>

              {/* Arrow indicator between steps for large screens */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-8 z-10 w-6 h-6 items-center justify-center text-slate-300 pointer-events-none">
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
