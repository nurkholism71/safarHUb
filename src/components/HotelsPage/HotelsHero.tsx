import React, { useState } from 'react';
import {
  Building2,
  Bus,
  CalendarDays,
  Users,
  MapPin,
  Search,
  Sparkles,
  Calendar,
  Layers
} from 'lucide-react';

interface HotelsHeroProps {
  onSearch: (params: any) => void;
}

export const HotelsHero: React.FC<HotelsHeroProps> = ({ onSearch }) => {
  const [activeTab, setActiveTab] = useState<'hotels' | 'combo' | 'longstay' | 'group'>('hotels');
  const [destination, setDestination] = useState('Makkah');
  const [checkIn, setCheckIn] = useState('12 Oct 2026');
  const [checkOut, setCheckOut] = useState('15 Oct 2026');
  const [guestsRooms, setGuestsRooms] = useState('2 Guests, 1 Room');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ destination, checkIn, checkOut, guestsRooms, tab: activeTab });
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#eef3f0] border-b border-slate-200">
      {/* Background Panorama */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=2400&q=95"
          alt="Makkah Clock Tower & Holy Mosque"
          className="object-cover object-right md:object-[center_30%] w-full h-full opacity-90 brightness-105 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 via-45% to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header Text */}
        <div className="max-w-2xl space-y-3 mb-8">
          <div className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#0e5f2c] font-sans bg-emerald-100/90 px-2.5 py-0.5 rounded-md border border-emerald-300/60 shadow-2xs">
            HOTELS IN SAUDI ARABIA
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-serif text-[#0c2e1f] leading-[1.12]">
            Find the Perfect Stay <br />
            for Your Journey
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed pt-1">
            From luxury to budget, find the best hotels in Makkah, Madinah, Jeddah, Riyadh and more — with trusted partners and guaranteed comfort.
          </p>
        </div>

        {/* Search & Filter Box */}
        <div className="p-4 sm:p-5 bg-white rounded-3xl shadow-xl border border-slate-200/90">
          {/* Tabs Row */}
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100 overflow-x-auto custom-scrollbar">
            <button
              onClick={() => setActiveTab('hotels')}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap ${
                activeTab === 'hotels'
                  ? 'bg-[#0e5f2c] text-white shadow-md shadow-emerald-900/20'
                  : 'text-slate-600 hover:text-emerald-900 hover:bg-slate-50'
              }`}
            >
              <Building2 className={`w-4 h-4 ${activeTab === 'hotels' ? 'text-amber-300' : 'text-slate-400'}`} />
              <span>Hotels</span>
            </button>

            <button
              onClick={() => setActiveTab('combo')}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap ${
                activeTab === 'combo'
                  ? 'bg-[#0e5f2c] text-white shadow-md shadow-emerald-900/20'
                  : 'text-slate-600 hover:text-emerald-900 hover:bg-slate-50'
              }`}
            >
              <Bus className={`w-4 h-4 ${activeTab === 'combo' ? 'text-amber-300' : 'text-slate-400'}`} />
              <span>Hotel + Transport</span>
            </button>

            <button
              onClick={() => setActiveTab('longstay')}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap ${
                activeTab === 'longstay'
                  ? 'bg-[#0e5f2c] text-white shadow-md shadow-emerald-900/20'
                  : 'text-slate-600 hover:text-emerald-900 hover:bg-slate-50'
              }`}
            >
              <CalendarDays className={`w-4 h-4 ${activeTab === 'longstay' ? 'text-amber-300' : 'text-slate-400'}`} />
              <span>Long Stay</span>
            </button>

            <button
              onClick={() => setActiveTab('group')}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap ${
                activeTab === 'group'
                  ? 'bg-[#0e5f2c] text-white shadow-md shadow-emerald-900/20'
                  : 'text-slate-600 hover:text-emerald-900 hover:bg-slate-50'
              }`}
            >
              <Users className={`w-4 h-4 ${activeTab === 'group' ? 'text-amber-300' : 'text-slate-400'}`} />
              <span>Group Booking</span>
            </button>
          </div>

          {/* Form Row */}
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-end">
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

            {/* Check-in */}
            <div className="lg:col-span-3">
              <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Check-in</label>
              <div className="flex items-center px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus-within:ring-2 focus-within:ring-emerald-600 focus-within:bg-white">
                <Calendar className="w-4 h-4 text-emerald-700 mr-2 flex-shrink-0" />
                <input
                  type="text"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  placeholder="12 Oct 2026"
                  className="w-full text-xs sm:text-sm font-semibold text-slate-800 bg-transparent outline-hidden"
                />
              </div>
            </div>

            {/* Check-out */}
            <div className="lg:col-span-3">
              <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Check-out</label>
              <div className="flex items-center px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus-within:ring-2 focus-within:ring-emerald-600 focus-within:bg-white">
                <Calendar className="w-4 h-4 text-emerald-700 mr-2 flex-shrink-0" />
                <input
                  type="text"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  placeholder="15 Oct 2026"
                  className="w-full text-xs sm:text-sm font-semibold text-slate-800 bg-transparent outline-hidden"
                />
              </div>
            </div>

            {/* Guests & Rooms */}
            <div className="lg:col-span-3">
              <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Guests & Rooms</label>
              <div className="flex items-center px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus-within:ring-2 focus-within:ring-emerald-600 focus-within:bg-white">
                <Users className="w-4 h-4 text-emerald-700 mr-2 flex-shrink-0" />
                <select
                  value={guestsRooms}
                  onChange={(e) => setGuestsRooms(e.target.value)}
                  aria-label="Guests & Rooms"
                  className="w-full text-xs sm:text-sm font-semibold text-slate-800 bg-transparent outline-hidden cursor-pointer"
                >
                  <option value="1 Guest, 1 Room">1 Guest, 1 Room</option>
                  <option value="2 Guests, 1 Room">2 Guests, 1 Room</option>
                  <option value="3 Guests, 1 Room">3 Guests, 1 Room</option>
                  <option value="4 Guests, 2 Rooms">4 Guests, 2 Rooms</option>
                  <option value="Family Suite (5+ Guests)">Family Suite (5+ Guests)</option>
                </select>
              </div>
            </div>

            {/* Search Button (Full row on small, or button) */}
            <div className="sm:col-span-2 lg:col-span-12 pt-2">
              <button
                type="submit"
                className="flex items-center justify-center w-full py-3.5 px-6 font-bold text-white bg-[#0e5f2c] hover:bg-[#09421e] rounded-xl shadow-lg shadow-emerald-950/20 transition-all active:scale-95 text-sm gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Search Hotels</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
