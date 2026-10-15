import React, { useState } from 'react';
import {
  PlaneTakeoff,
  Bus,
  Car,
  Users,
  Calendar,
  Clock,
  MapPin,
  ArrowLeftRight,
  Search,
  UserCheck,
  ShieldCheck
} from 'lucide-react';

interface TransportHeroProps {
  onSearch: (params: any) => void;
}

export const TransportHero: React.FC<TransportHeroProps> = ({ onSearch }) => {
  const [activeTab, setActiveTab] = useState<'airport' | 'intercity' | 'private' | 'bus' | 'group' | 'taxi' | 'chauffeur'>('airport');
  const [pickup, setPickup] = useState('Jeddah Airport (JED)');
  const [destination, setDestination] = useState('Makkah');
  const [date, setDate] = useState('12 Oct 2026');
  const [time, setTime] = useState('09:00');
  const [passengers, setPassengers] = useState('4');

  const handleSwap = () => {
    const temp = pickup;
    setPickup(destination);
    setDestination(temp);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ activeTab, pickup, destination, date, time, passengers });
  };

  const tabs = [
    { id: 'airport', label: 'Airport Transfer', icon: PlaneTakeoff },
    { id: 'intercity', label: 'Intercity', icon: Bus },
    { id: 'private', label: 'Private Car', icon: Car },
    { id: 'bus', label: 'Bus/Coach', icon: Bus },
    { id: 'group', label: 'Group Transport', icon: Users },
    { id: 'taxi', label: 'Taxi', icon: Car },
    { id: 'chauffeur', label: 'Chauffeur', icon: UserCheck },
  ] as const;

  return (
    <div className="relative w-full overflow-hidden bg-[#eef3f0] border-b border-slate-200">
      {/* Background Panorama of Saudi Travel & Makkah Skyline */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2400&q=95"
          alt="Saudi VIP Transportation"
          className="object-cover object-right md:object-[center_35%] w-full h-full opacity-90 brightness-105 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 via-45% to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header Text */}
        <div className="max-w-2xl space-y-3 mb-8">
          <div className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#0e5f2c] font-sans bg-emerald-100/90 px-2.5 py-0.5 rounded-md border border-emerald-300/60 shadow-2xs">
            TRANSPORTATION IN SAUDI ARABIA
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-serif text-[#0c2e1f] leading-[1.12]">
            Travel Anywhere <br />
            in Saudi, Easily.
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed pt-1">
            Airport transfer, intercity transport, private car, bus, and more — comfortable, safe, and reliable for your journey.
          </p>
        </div>

        {/* Search & Filter Box */}
        <div className="p-4 sm:p-5 bg-white rounded-3xl shadow-xl border border-slate-200/90">
          {/* Tabs Row */}
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

          {/* Form Row */}
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-end">
            {/* Pickup Location */}
            <div className="lg:col-span-3">
              <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Pickup Location</label>
              <div className="flex items-center px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus-within:ring-2 focus-within:ring-emerald-600 focus-within:bg-white">
                <MapPin className="w-4 h-4 text-emerald-700 mr-2 flex-shrink-0" />
                <input
                  type="text"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  placeholder="Jeddah Airport (JED)"
                  className="w-full text-xs sm:text-sm font-semibold text-slate-800 bg-transparent outline-hidden"
                />
              </div>
            </div>

            {/* Swap Button (Mobile hidden or integrated) */}
            <div className="hidden lg:flex lg:col-span-1 justify-center items-center pb-1">
              <button
                type="button"
                onClick={handleSwap}
                className="p-2 bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-800 rounded-xl transition-colors"
                title="Swap Locations"
              >
                <ArrowLeftRight className="w-4 h-4" />
              </button>
            </div>

            {/* Destination */}
            <div className="lg:col-span-3">
              <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Destination</label>
              <div className="flex items-center px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus-within:ring-2 focus-within:ring-emerald-600 focus-within:bg-white">
                <MapPin className="w-4 h-4 text-emerald-700 mr-2 flex-shrink-0" />
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Makkah"
                  className="w-full text-xs sm:text-sm font-semibold text-slate-800 bg-transparent outline-hidden"
                />
              </div>
            </div>

            {/* Date */}
            <div className="lg:col-span-2">
              <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Date</label>
              <div className="flex items-center px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus-within:ring-2 focus-within:ring-emerald-600 focus-within:bg-white">
                <Calendar className="w-4 h-4 text-emerald-700 mr-2 flex-shrink-0" />
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="12 Oct 2026"
                  className="w-full text-xs sm:text-sm font-semibold text-slate-800 bg-transparent outline-hidden"
                />
              </div>
            </div>

            {/* Time */}
            <div className="lg:col-span-1">
              <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Time</label>
              <div className="flex items-center px-2.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus-within:ring-2 focus-within:ring-emerald-600 focus-within:bg-white">
                <Clock className="w-3.5 h-3.5 text-emerald-700 mr-1.5 flex-shrink-0" />
                <input
                  type="text"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  placeholder="09:00"
                  className="w-full text-xs sm:text-sm font-semibold text-slate-800 bg-transparent outline-hidden"
                />
              </div>
            </div>

            {/* Passengers */}
            <div className="lg:col-span-2">
              <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Passengers</label>
              <div className="flex items-center px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus-within:ring-2 focus-within:ring-emerald-600 focus-within:bg-white">
                <Users className="w-4 h-4 text-emerald-700 mr-2 flex-shrink-0" />
                <select
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  aria-label="Passengers"
                  className="w-full text-xs sm:text-sm font-semibold text-slate-800 bg-transparent outline-hidden cursor-pointer"
                >
                  <option value="1">1 Passenger</option>
                  <option value="2">2 Passengers</option>
                  <option value="4">4 Passengers</option>
                  <option value="7">7 (Family SUV)</option>
                  <option value="10">10 (VIP Van)</option>
                  <option value="20">20 (Coaster)</option>
                  <option value="50">50 (Pilgrim Bus)</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div className="sm:col-span-2 lg:col-span-12 pt-2">
              <button
                type="submit"
                className="flex items-center justify-center w-full py-3.5 px-6 font-bold text-white bg-[#0e5f2c] hover:bg-[#09421e] rounded-xl shadow-lg shadow-emerald-950/20 transition-all active:scale-95 text-sm gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Search Transport</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
