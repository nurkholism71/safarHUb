import React from 'react';
import { ArrowRight, Plus, PhoneCall } from 'lucide-react';
import { UMRAH_ADDONS } from '../../data/umrahData';

interface UmrahAddonServicesProps {
  onSelectAddon?: (addon: any) => void;
  onContactTeam: () => void;
}

export const UmrahAddonServices: React.FC<UmrahAddonServicesProps> = ({
  onSelectAddon,
  onContactTeam
}) => {
  return (
    <div className="my-8 space-y-8">
      {/* 1. Add-On Services Row */}
      <div>
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
              Add-On Services
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Customize your package with optional VIP upgrades & essentials
            </p>
          </div>

          <button
            onClick={() => alert('Viewing all available Umrah VIP add-on services')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 group transition-colors"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 8 Add-On Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {UMRAH_ADDONS.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectAddon && onSelectAddon(item)}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-emerald-600 hover:shadow-md transition-all cursor-pointer flex flex-col"
            >
              <div className="relative h-20 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-2.5 flex-1 flex flex-col justify-between">
                <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-900 truncate leading-tight">
                  {item.title}
                </h4>
                <div className="mt-2 pt-1 border-t border-slate-100 flex items-baseline gap-1 text-[11px]">
                  <span className="text-[10px] text-slate-400">From</span>
                  <span className="font-bold text-emerald-800">SAR {item.priceSAR}</span>
                  {item.unit && <span className="text-[10px] text-slate-400">{item.unit}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Plan Your Umrah with Confidence Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0c3924] via-[#09261a] to-[#04130c] text-white p-6 sm:p-8 shadow-xl">
        <div className="absolute inset-0 opacity-15">
          <img
            src="/images/umrah/hero_banner.jpg"
            alt="Umrah Skyline"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-amber-100 leading-tight">
              Plan Your Umrah with Confidence
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 mt-1.5 leading-relaxed">
              From visa to hotel, transport to ziyarat — we handle everything for a smooth and blessed journey.
            </p>
          </div>

          <button
            onClick={onContactTeam}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-colors whitespace-nowrap self-start md:self-auto"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Contact Our Team</span>
          </button>
        </div>
      </div>
    </div>
  );
};
