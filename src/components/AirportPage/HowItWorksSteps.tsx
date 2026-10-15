import React from 'react';
import {
  Plane,
  Building2,
  Bus,
  ArrowRight,
  CheckCircle2,
  CalendarCheck,
  Radar,
  UserCheck,
  Smile
} from 'lucide-react';

interface HowItWorksStepsProps {
  onOpenComboModal?: () => void;
}

export const HowItWorksSteps: React.FC<HowItWorksStepsProps> = ({ onOpenComboModal }) => {
  const steps = [
    {
      num: 1,
      title: 'Book Your Service',
      desc: 'Choose airport, date, time and service type.',
      icon: CalendarCheck,
    },
    {
      num: 2,
      title: 'Get Confirmation',
      desc: 'Receive booking details via email or WhatsApp.',
      icon: CheckCircle2,
    },
    {
      num: 3,
      title: 'We Track Your Flight',
      desc: 'Our team monitors your flight in real-time.',
      icon: Radar,
    },
    {
      num: 4,
      title: 'Meet at Airport',
      desc: 'Driver or assistant will be ready at the arrival gate.',
      icon: UserCheck,
    },
    {
      num: 5,
      title: 'Enjoy Your Journey',
      desc: 'Safe and comfortable transfer to your destination.',
      icon: Smile,
    },
  ];

  return (
    <div className="space-y-8 my-10">
      {/* 1. Combo Promo Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 shadow-xl border border-emerald-950/40 p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 group">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1600&q=80"
            alt="Makkah Skyline and Pilgrimage"
            className="object-cover w-full h-full opacity-40 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#062015] via-[#093222]/85 to-transparent"></div>
        </div>

        <div className="relative z-10 space-y-1.5 max-w-xl">
          <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
            Make Your Journey in Saudi Easier
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            Combine airport service with hotel booking and transportation for the complete VIP package.
          </p>
        </div>

        {/* Combo Pill Button */}
        <div className="relative z-10 flex-shrink-0">
          <button
            onClick={onOpenComboModal}
            className="flex items-center gap-3 px-5 py-3 bg-white hover:bg-slate-50 text-slate-900 rounded-2xl font-bold text-xs sm:text-sm shadow-xl transition-all active:scale-95"
          >
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-emerald-800"><Plane className="w-4 h-4" /> Airport</span>
              <span className="text-slate-400">+</span>
              <span className="flex items-center gap-1 text-blue-700"><Building2 className="w-4 h-4" /> Hotel</span>
              <span className="text-slate-400">+</span>
              <span className="flex items-center gap-1 text-purple-700"><Bus className="w-4 h-4" /> Transport</span>
            </div>
            <div className="w-6 h-6 rounded-full bg-[#0e5f2c] text-white flex items-center justify-center ml-2">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>

      {/* 2. How It Works 5-Step Process */}
      <div className="py-6 border-t border-slate-200">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif mb-6">
          How It Works
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative p-4 bg-white border border-slate-200/90 rounded-2xl shadow-2xs space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-black text-xs font-mono">
                    {step.num}
                  </div>
                  <Icon className="w-4 h-4 text-slate-400" />
                </div>

                <h4 className="text-xs font-bold text-slate-900">{step.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
