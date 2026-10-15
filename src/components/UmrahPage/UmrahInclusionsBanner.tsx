import React from 'react';
import {
  Building2,
  FileCheck,
  PlaneTakeoff,
  Bus,
  Compass,
  Users2,
  Wrench,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface UmrahInclusionsBannerProps {
  onRequestCustom: () => void;
}

export const UmrahInclusionsBanner: React.FC<UmrahInclusionsBannerProps> = ({
  onRequestCustom
}) => {
  const inclusions = [
    {
      title: 'Hotel Accommodation',
      icon: Building2,
      color: 'bg-emerald-50 text-emerald-800 border-emerald-200'
    },
    {
      title: 'Visa Support',
      icon: FileCheck,
      color: 'bg-emerald-50 text-emerald-800 border-emerald-200'
    },
    {
      title: 'Airport Handling',
      icon: PlaneTakeoff,
      color: 'bg-emerald-50 text-emerald-800 border-emerald-200'
    },
    {
      title: 'Intercity Transport',
      icon: Bus,
      color: 'bg-emerald-50 text-emerald-800 border-emerald-200'
    },
    {
      title: 'Ziyarat Tours',
      icon: Compass,
      color: 'bg-emerald-50 text-emerald-800 border-emerald-200'
    },
    {
      title: 'Guide & Assistance',
      icon: Users2,
      color: 'bg-emerald-50 text-emerald-800 border-emerald-200'
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-8">
      {/* Left: Package Includes (7 cols) */}
      <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xs flex flex-col justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif mb-4">
            Package Includes
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {inclusions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center p-3 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-300 hover:bg-emerald-50/40 transition-colors"
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${item.color} border flex items-center justify-center mb-2 shadow-2xs`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right: Customize Your Umrah Package (5 cols) */}
      <div className="lg:col-span-5 bg-gradient-to-br from-amber-50/70 via-white to-emerald-50/40 border border-slate-200 rounded-3xl p-6 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0 shadow-2xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif">
                Customize Your Umrah Package
              </h3>
              <p className="text-xs text-slate-500">Flexible dates & bespoke itineraries</p>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed mt-2">
            Need a custom itinerary for your family or group? We can create a tailor-made package that fits your schedule, preferred hotels, and private transport.
          </p>
        </div>

        <div className="pt-5">
          <button
            onClick={onRequestCustom}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#0e5f2c] hover:bg-[#09421e] text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
          >
            <span>Request Custom Package</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </button>
        </div>
      </div>
    </div>
  );
};
