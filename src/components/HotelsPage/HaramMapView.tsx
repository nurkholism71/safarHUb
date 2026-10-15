import React, { useState } from 'react';
import {
  MapPin,
  Plus,
  Minus,
  Maximize2,
  ShieldCheck,
  Tag,
  CalendarCheck,
  Headphones,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { HotelItem } from '../../types/hotels';

interface HaramMapViewProps {
  onSelectHotelPin?: (hotelName: string) => void;
  onOpenLongStay?: () => void;
}

export const HaramMapView: React.FC<HaramMapViewProps> = ({
  onSelectHotelPin,
  onOpenLongStay,
}) => {
  const [mapMode, setMapMode] = useState<'map' | 'list'>('map');
  const [searchOnMove, setSearchOnMove] = useState(true);
  const [selectedPin, setSelectedPin] = useState<string | null>('Hilton Makkah');

  const hotelPins = [
    { name: 'Hilton Makkah', price: 'SAR 850', x: 45, y: 35 },
    { name: 'Swissôtel', price: 'SAR 620', x: 55, y: 38 },
    { name: 'Pullman Zamzam', price: 'SAR 920', x: 52, y: 48 },
    { name: 'Anjum Hotel', price: 'SAR 760', x: 38, y: 55 },
    { name: 'Voco Makkah', price: 'SAR 480', x: 68, y: 65 },
    { name: 'Fairmont Clock', price: 'SAR 1350', x: 48, y: 42 },
  ];

  return (
    <div className="space-y-6">
      {/* 1. Map View Box */}
      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xs p-4">
        {/* Switcher & Fullscreen Header */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
          <div className="flex items-center p-0.5 bg-slate-100 rounded-xl text-xs font-bold">
            <button
              onClick={() => setMapMode('map')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                mapMode === 'map'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Map View
            </button>
            <button
              onClick={() => setMapMode('list')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                mapMode === 'list'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              List View
            </button>
          </div>

          <button
            onClick={() => alert('Opening Fullscreen Interactive Haram Map')}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
            title="Fullscreen Map"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Interactive Map Graphic Canvas */}
        <div className="relative h-64 sm:h-72 w-full bg-gradient-to-b from-[#ebf5ee] via-[#dcf0e2] to-[#c8e6d2] rounded-2xl overflow-hidden border border-emerald-900/10">
          {/* Map Grid / Streets representation */}
          <svg className="absolute inset-0 w-full h-full opacity-60 pointer-events-none">
            {/* Street Rings around Haram */}
            <circle cx="50%" cy="45%" r="65" fill="#c0e6ce" stroke="#8ec8a5" strokeWidth="2" />
            <circle cx="50%" cy="45%" r="105" fill="none" stroke="#8ec8a5" strokeWidth="2" strokeDasharray="5,5" />
            {/* Main Roads: Ibrahim Al Khalil, King Abdulaziz, Ajyad */}
            <line x1="50%" y1="45%" x2="20%" y2="90%" stroke="#8ec8a5" strokeWidth="4" />
            <line x1="50%" y1="45%" x2="80%" y2="85%" stroke="#8ec8a5" strokeWidth="4" />
            <line x1="50%" y1="45%" x2="50%" y2="10%" stroke="#8ec8a5" strokeWidth="4" />
          </svg>

          {/* Center Kaaba / Masjid Al Haram Landmark Marker */}
          <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 z-10 text-center">
            <div className="flex items-center justify-center w-8 h-8 mx-auto rounded-lg bg-slate-950 text-amber-300 font-bold shadow-lg ring-2 ring-amber-400">
              🕋
            </div>
            <div className="mt-1 px-1.5 py-0.5 bg-white/95 rounded shadow-xs text-[9px] font-black text-slate-900 whitespace-nowrap">
              Masjid Al Haram
            </div>
          </div>

          {/* Hotel Price Pins */}
          {hotelPins.map((pin) => {
            const isSelected = selectedPin === pin.name;
            return (
              <div
                key={pin.name}
                style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                onClick={() => {
                  setSelectedPin(pin.name);
                  if (onSelectHotelPin) onSelectHotelPin(pin.name);
                }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer transition-transform hover:scale-110 ${
                  isSelected ? 'scale-110 z-30' : ''
                }`}
              >
                <div
                  className={`px-2 py-1 rounded-xl text-[10px] font-bold shadow-md whitespace-nowrap border flex items-center gap-1 ${
                    isSelected
                      ? 'bg-emerald-800 text-white border-emerald-900 ring-2 ring-amber-300'
                      : 'bg-white text-slate-900 border-slate-300 hover:bg-emerald-50'
                  }`}
                >
                  <MapPin className="w-3 h-3 text-amber-500" />
                  <span>{pin.price}</span>
                </div>
              </div>
            );
          })}

          {/* Map Zoom Controls */}
          <div className="absolute right-3 bottom-3 flex flex-col gap-1 bg-white/95 rounded-xl shadow-md p-1 border border-slate-200 z-30">
            <button className="p-1 hover:bg-slate-100 rounded text-slate-700" title="Zoom In">
              <Plus className="w-3.5 h-3.5" />
            </button>
            <button className="p-1 hover:bg-slate-100 rounded text-slate-700" title="Zoom Out">
              <Minus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Checkbox */}
        <label className="flex items-center gap-2 text-[11px] text-slate-600 font-medium mt-3 cursor-pointer">
          <input
            type="checkbox"
            checked={searchOnMove}
            onChange={(e) => setSearchOnMove(e.target.checked)}
            className="rounded text-emerald-700 focus:ring-emerald-600 w-3.5 h-3.5"
          />
          <span>Search when I move the map</span>
        </label>
      </div>

      {/* 2. Why Book with SafarHub? */}
      <div className="p-5 bg-white border border-slate-200 rounded-3xl shadow-xs space-y-4">
        <h4 className="text-sm font-bold text-slate-900 font-serif">Why Book with SafarHub?</h4>

        <div className="space-y-3 text-xs text-slate-700">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 flex-shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-slate-900">Verified Hotels</div>
              <div className="text-slate-500 text-[11px]">Trusted and verified Saudi licensed partners</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-600 flex-shrink-0">
              <Tag className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-slate-900">Best Price Guarantee</div>
              <div className="text-slate-500 text-[11px]">Get direct B2B rates and seasonal promo deals</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-blue-50 text-blue-600 flex-shrink-0">
              <CalendarCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-slate-900">Flexible Booking</div>
              <div className="text-slate-500 text-[11px]">Easy modification and instant voucher issuance</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-purple-50 text-purple-600 flex-shrink-0">
              <Headphones className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-slate-900">24/7 On-Ground Support</div>
              <div className="text-slate-500 text-[11px]">Dedicated concierge in Makkah & Madinah</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Promo Banner: Long Stay in Makkah */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 shadow-xl border border-emerald-950/40 p-6 text-white group">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80"
            alt="Long Stay Haram View"
            className="object-cover w-full h-full opacity-40 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061910] via-[#092b1d]/85 to-transparent"></div>
        </div>

        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-bold uppercase tracking-wider border border-amber-400/30">
            <Sparkles className="w-3 h-3" />
            <span>Seasonal Promo</span>
          </div>

          <h3 className="text-xl font-bold font-serif text-white">
            Long Stay in Makkah
          </h3>
          <p className="text-xs text-emerald-100/90 leading-relaxed">
            Special rates for long stay bookings (7 nights or more) with complimentary Haram shuttle.
          </p>

          <div className="pt-3">
            <button
              onClick={onOpenLongStay}
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold text-xs shadow-md transition-all active:scale-95 group/btn"
            >
              <span>View Long Stay Deals</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
