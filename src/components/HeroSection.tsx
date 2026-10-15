import React, { useState } from 'react';
import {
  Building2,
  Bus,
  PlaneTakeoff,
  ShoppingBag,
  MoonStar,
  Package,
  Calendar,
  Users,
  MapPin,
  Sun,
  Clock,
  ArrowRight,
} from 'lucide-react';

interface HeroSectionProps {
  onSearchSubmit: (tab: string, params: any) => void;
  onOpenCityGuide: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearchSubmit,
  onOpenCityGuide,
}) => {
  const [activeTab, setActiveTab] = useState<'hotels' | 'transport' | 'airport' | 'jastip' | 'umrah' | 'packages'>('hotels');
  const [destination, setDestination] = useState('Makkah');
  const [checkIn, setCheckIn] = useState('12 Oct 2026');
  const [checkOut, setCheckOut] = useState('15 Oct 2026');
  const [guests, setGuests] = useState('2 Guests');
  const [selectedCityInfo, setSelectedCityInfo] = useState<'Makkah' | 'Madinah' | 'Jeddah' | 'Riyadh'>('Makkah');

  const cityWeather = {
    Makkah: { temp: '28°C', condition: 'Sunny', icon: Sun, prayerFajr: '05:10', prayerDhuhr: '12:24', prayerAsr: '15:45', prayerMaghrib: '18:10', prayerIsha: '19:30' },
    Madinah: { temp: '26°C', condition: 'Clear', icon: Sun, prayerFajr: '05:12', prayerDhuhr: '12:25', prayerAsr: '15:46', prayerMaghrib: '18:11', prayerIsha: '19:31' },
    Jeddah: { temp: '29°C', condition: 'Breezy', icon: Sun, prayerFajr: '05:14', prayerDhuhr: '12:27', prayerAsr: '15:48', prayerMaghrib: '18:13', prayerIsha: '19:33' },
    Riyadh: { temp: '31°C', condition: 'Sunny', icon: Sun, prayerFajr: '04:52', prayerDhuhr: '12:05', prayerAsr: '15:26', prayerMaghrib: '17:50', prayerIsha: '19:10' },
  };

  const tabs = [
    { id: 'hotels', label: 'Hotels', icon: Building2 },
    { id: 'transport', label: 'Transport', icon: Bus },
    { id: 'airport', label: 'Airport', icon: PlaneTakeoff },
    { id: 'jastip', label: 'Jastip', icon: ShoppingBag },
    { id: 'umrah', label: 'Umrah', icon: MoonStar },
    { id: 'packages', label: 'Packages', icon: Package },
  ] as const;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit(activeTab, {
      destination,
      checkIn,
      checkOut,
      guests,
    });
  };

  const currentInfo = cityWeather[selectedCityInfo];

  return (
    <div className="relative w-full overflow-hidden bg-[#eef3f0] border-b border-slate-200">
      {/* Ultra-Bright & High Resolution Makkah Clock Tower & Holy Mosque Skyline */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=2400&q=95"
          alt="Makkah Royal Clock Tower Abraj Al Bait"
          className="object-cover object-right md:object-[center_35%] w-full h-full opacity-90 brightness-105 contrast-105"
        />
        {/* Soft daylight gradient on the left for crisp text contrast without washing out the photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 via-45% to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent"></div>
      </div>

      {/* Inner Container Aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Top Split: Left Headline & Right Quick Info Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          {/* Left Text */}
          <div className="lg:col-span-8 space-y-3 pt-2">
            <div className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#0e5f2c] font-sans bg-emerald-100/80 px-2.5 py-0.5 rounded-md border border-emerald-300/60 shadow-2xs">
              WELCOME TO SAFARHUB
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-serif text-[#0c2e1f] leading-[1.1]">
              Your Journey <br />
              in Saudi, <br />
              Handled.
            </h1>

            <p className="text-sm sm:text-base text-slate-800 font-semibold max-w-lg leading-relaxed pt-1 drop-shadow-xs">
              Hotels, Transport, Airport Handling, Jastip, Umrah and More — All in One Platform.
            </p>
          </div>

          {/* Right Quick Info Card */}
          <div className="lg:col-span-4">
            <div className="p-5 rounded-3xl bg-white/95 backdrop-blur-md text-slate-800 shadow-2xl border border-slate-200/90">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Quick Info</span>
                {/* City switch */}
                <select
                  value={selectedCityInfo}
                  onChange={(e) => setSelectedCityInfo(e.target.value as any)}
                  aria-label="Select City"
                  className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg px-2 py-1 outline-hidden cursor-pointer"
                >
                  <option value="Makkah">Makkah</option>
                  <option value="Madinah">Madinah</option>
                  <option value="Jeddah">Jeddah</option>
                  <option value="Riyadh">Riyadh</option>
                </select>
              </div>

              {/* Weather info */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200 text-amber-500 shadow-2xs">
                    <Sun className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{selectedCityInfo}</div>
                    <div className="text-xs text-slate-500">{currentInfo.condition}</div>
                  </div>
                </div>
                <div className="text-2xl font-black text-slate-900 font-serif">{currentInfo.temp}</div>
              </div>

              {/* Prayer Times widget */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                  <span>Prayer Time</span>
                  <Clock className="w-3.5 h-3.5 text-emerald-700" />
                </div>
                <div className="grid grid-cols-5 gap-1.5 text-center bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <div>
                    <div className="text-[10px] text-slate-400 font-semibold">Fajr</div>
                    <div className="text-[11px] font-bold text-slate-700">{currentInfo.prayerFajr}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-semibold">Dhuhr</div>
                    <div className="text-[11px] font-bold text-slate-700">{currentInfo.prayerDhuhr}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-semibold">Asr</div>
                    <div className="text-[11px] font-bold text-slate-700">{currentInfo.prayerAsr}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-semibold">Maghrib</div>
                    <div className="text-[11px] font-bold text-slate-700">{currentInfo.prayerMaghrib}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-semibold">Isha</div>
                    <div className="text-[11px] font-bold text-slate-700">{currentInfo.prayerIsha}</div>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenCityGuide}
                className="flex items-center justify-center w-full gap-1.5 py-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors group"
              >
                <span>View City Guide</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Booking Search Box (Full Width White Card Matching Photo 2) */}
        <div className="p-4 sm:p-5 bg-white rounded-3xl shadow-xl border border-slate-200/90">
          {/* Service Tabs */}
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100 overflow-x-auto custom-scrollbar">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap ${
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

          {/* Search Inputs Form */}
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-end">
            {/* Field 1: Destination */}
            <div className="lg:col-span-3">
              <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
                Destination
              </label>
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

            {/* Field 2: Check-in */}
            <div className="lg:col-span-3">
              <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
                Check-in
              </label>
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

            {/* Field 3: Check-out */}
            <div className="lg:col-span-3">
              <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
                Check-out
              </label>
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

            {/* Field 4: Guests */}
            <div className="lg:col-span-2">
              <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Guests</label>
              <div className="flex items-center px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus-within:ring-2 focus-within:ring-emerald-600 focus-within:bg-white">
                <Users className="w-4 h-4 text-emerald-700 mr-2 flex-shrink-0" />
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  aria-label="Guests"
                  className="w-full text-xs sm:text-sm font-semibold text-slate-800 bg-transparent outline-hidden cursor-pointer"
                >
                  <option value="1 Guest">1 Guest</option>
                  <option value="2 Guests">2 Guests</option>
                  <option value="3 Guests">3 Guests</option>
                  <option value="4 Guests">4 Guests</option>
                  <option value="5+ Guests">5+ Guests</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div className="lg:col-span-1">
              <button
                type="submit"
                className="flex items-center justify-center w-full py-3 px-4 font-bold text-white bg-[#0e5f2c] hover:bg-[#09421e] rounded-xl shadow-lg shadow-emerald-950/20 transition-all active:scale-95 text-xs sm:text-sm"
              >
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
