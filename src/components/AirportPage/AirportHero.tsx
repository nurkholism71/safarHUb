import React, { useState } from 'react';
import {
  PlaneTakeoff,
  PlaneLanding,
  Users,
  Clock,
  Calendar,
  Briefcase,
  Sparkles,
  Search,
  ShieldCheck,
  Headphones,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface AirportHeroProps {
  onSearch: (params: any) => void;
}

export const AirportHero: React.FC<AirportHeroProps> = ({ onSearch }) => {
  const [activeTab, setActiveTab] = useState<'pickup' | 'dropoff' | 'meet' | 'tracking' | 'baggage' | 'fasttrack' | 'vip'>('pickup');
  const [airport, setAirport] = useState('Jeddah Airport (JED)');
  const [serviceType, setServiceType] = useState('Pickup');
  const [date, setDate] = useState('12 Oct 2026');
  const [time, setTime] = useState('09:00');
  const [passengers, setPassengers] = useState('4');

  const tabs = [
    { id: 'pickup', label: 'Airport Pickup', icon: PlaneLanding },
    { id: 'dropoff', label: 'Airport Drop-off', icon: PlaneTakeoff },
    { id: 'meet', label: 'Meet & Greet', icon: Users },
    { id: 'tracking', label: 'Flight Monitoring', icon: Clock },
    { id: 'baggage', label: 'Baggage Assistance', icon: Briefcase },
    { id: 'fasttrack', label: 'Fast Track', icon: Sparkles },
    { id: 'vip', label: 'VIP Service', icon: ShieldCheck },
  ] as const;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ activeTab, airport, serviceType, date, time, passengers });
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#eef3f0] border-b border-slate-200">
      {/* Background with Airport Terminal & Modern Saudia Aircraft */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=2400&q=95"
          alt="Saudi International Airport"
          className="object-cover object-right md:object-[center_35%] w-full h-full opacity-85 brightness-105 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 via-45% to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Top Split: Headline & Terminal Sign */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          {/* Left Text */}
          <div className="lg:col-span-8 space-y-3 pt-2">
            <div className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#0e5f2c] font-sans bg-emerald-100/90 px-2.5 py-0.5 rounded-md border border-emerald-300/60 shadow-2xs">
              AIRPORT SERVICES IN SAUDI ARABIA
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-serif text-[#0c2e1f] leading-[1.1]">
              Smooth Airport <br />
              Experience <br />
              in Saudi.
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold max-w-lg leading-relaxed pt-1">
              Meet & greet, pickup, transfer, baggage assistance and more — for a comfortable and stress-free journey.
            </p>

            {/* 6 Feature Badges below headline */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-3 max-w-xl">
              <div className="flex items-center gap-2 p-2 bg-white/90 backdrop-blur-xs rounded-xl border border-slate-200 shadow-2xs text-[11px] font-bold text-slate-800">
                <Users className="w-3.5 h-3.5 text-emerald-700" />
                <span>Professional Meet & Greet</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-white/90 backdrop-blur-xs rounded-xl border border-slate-200 shadow-2xs text-[11px] font-bold text-slate-800">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>Flight Monitoring</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-white/90 backdrop-blur-xs rounded-xl border border-slate-200 shadow-2xs text-[11px] font-bold text-slate-800">
                <Briefcase className="w-3.5 h-3.5 text-amber-600" />
                <span>Baggage Assistance</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-white/90 backdrop-blur-xs rounded-xl border border-slate-200 shadow-2xs text-[11px] font-bold text-slate-800">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
                <span>Reliable Transport</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-white/90 backdrop-blur-xs rounded-xl border border-slate-200 shadow-2xs text-[11px] font-bold text-slate-800">
                <Headphones className="w-3.5 h-3.5 text-teal-600" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-white/90 backdrop-blur-xs rounded-xl border border-slate-200 shadow-2xs text-[11px] font-bold text-slate-800">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>VIP Service</span>
              </div>
            </div>
          </div>

          {/* Right Terminal Sign Board */}
          <div className="lg:col-span-4">
            <div className="p-5 rounded-3xl bg-[#09261a] text-white shadow-2xl border border-emerald-800/50">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-emerald-800/60">
                <PlaneTakeoff className="w-5 h-5 text-amber-400" />
                <div>
                  <h3 className="text-sm font-bold font-serif">Welcome to Saudi Arabia</h3>
                  <p className="text-[10px] text-emerald-400">Terminal 1 Wayfinding & Services</p>
                </div>
              </div>

              <div className="space-y-2 text-xs font-semibold">
                <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-950/80 border border-emerald-800/40 hover:border-amber-400/60 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">➔</span>
                    <span>Arrivals</span>
                  </div>
                  <span className="text-emerald-400 font-arabic">الوصول</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-950/80 border border-emerald-800/40 hover:border-amber-400/60 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">➔</span>
                    <span>Departures</span>
                  </div>
                  <span className="text-emerald-400 font-arabic">المغادرة</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-950/80 border border-emerald-800/40 hover:border-amber-400/60 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">➔</span>
                    <span>Transfers</span>
                  </div>
                  <span className="text-emerald-400 font-arabic">التحويل</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-950/80 border border-emerald-800/40 hover:border-amber-400/60 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">➔</span>
                    <span>Baggage Claim</span>
                  </div>
                  <span className="text-emerald-400 font-arabic">استلام الأمتعة</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-950/80 border border-emerald-800/40 hover:border-amber-400/60 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">➔</span>
                    <span>Ground Transport</span>
                  </div>
                  <span className="text-emerald-400 font-arabic">المواصلات البرية</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-950/80 border border-emerald-800/40 hover:border-amber-400/60 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">➔</span>
                    <span>Prayer Room</span>
                  </div>
                  <span className="text-emerald-400 font-arabic">مصلى</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Booking Search Box */}
        <div className="p-4 sm:p-5 bg-white rounded-3xl shadow-xl border border-slate-200/90">
          {/* Service Tabs */}
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#0e5f2c] text-white shadow-md shadow-emerald-900/20'
                      : 'text-slate-600 hover:text-emerald-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Form */}
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-end">
            <div className="lg:col-span-3">
              <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Airport</label>
              <select
                value={airport}
                onChange={(e) => setAirport(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 outline-hidden cursor-pointer"
              >
                <option value="Jeddah Airport (JED)">Jeddah Airport (JED)</option>
                <option value="Riyadh Airport (RUH)">Riyadh Airport (RUH)</option>
                <option value="Madinah Airport (MED)">Madinah Airport (MED)</option>
                <option value="Dammam Airport (DMM)">Dammam Airport (DMM)</option>
              </select>
            </div>

            <div className="lg:col-span-3">
              <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Service Type</label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 outline-hidden cursor-pointer"
              >
                <option value="Pickup">Pickup & Gate Meet</option>
                <option value="Drop-off">Drop-off to Departure</option>
                <option value="Meet & Greet">Full Meet & Greet Service</option>
                <option value="Fast Track">Fast Track Immigration</option>
              </select>
            </div>

            <div className="lg:col-span-2">
              <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Date</label>
              <div className="flex items-center px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                <Calendar className="w-4 h-4 text-emerald-700 mr-2" />
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full text-xs font-semibold text-slate-800 bg-transparent outline-hidden"
                />
              </div>
            </div>

            <div className="lg:col-span-2">
              <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Time</label>
              <div className="flex items-center px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                <Clock className="w-4 h-4 text-emerald-700 mr-2" />
                <input
                  type="text"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full text-xs font-semibold text-slate-800 bg-transparent outline-hidden"
                />
              </div>
            </div>

            <div className="lg:col-span-2">
              <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Passengers</label>
              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 outline-hidden cursor-pointer"
              >
                <option value="1">1 Passenger</option>
                <option value="2">2 Passengers</option>
                <option value="4">4 Passengers</option>
                <option value="7">7+ Group</option>
              </select>
            </div>

            <div className="sm:col-span-2 lg:col-span-12 pt-2">
              <button
                type="submit"
                className="flex items-center justify-center w-full py-3.5 px-6 font-bold text-white bg-[#0e5f2c] hover:bg-[#09421e] rounded-xl shadow-lg shadow-emerald-950/20 transition-all active:scale-95 text-sm gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Search Service</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
