import React, { useState } from 'react';
import {
  MapPin,
  Maximize2,
  Navigation,
  Clock,
  Road,
  ShieldCheck,
  PlaneTakeoff,
  Car,
  Headphones,
  CheckCircle2
} from 'lucide-react';

export const TransportRouteMap: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'map' | 'info'>('map');

  return (
    <div className="space-y-6">
      {/* 1. Map View Box */}
      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xs p-4">
        {/* Switcher & Fullscreen Header */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
          <div className="flex items-center p-0.5 bg-slate-100 rounded-xl text-xs font-bold">
            <button
              onClick={() => setActiveTab('map')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'map'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Map View
            </button>
            <button
              onClick={() => setActiveTab('info')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'info'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Route Info
            </button>
          </div>

          <button
            onClick={() => alert('Opening full route navigation')}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
            title="Fullscreen Map"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Visual Map Canvas showing Highway between Jeddah and Makkah */}
        <div className="relative h-64 sm:h-72 w-full bg-gradient-to-b from-[#e8f4ec] via-[#d7ede0] to-[#c7e8d3] rounded-2xl overflow-hidden border border-emerald-900/10">
          {/* Red Sea Coast & Highway Path */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Coastline */}
            <path d="M 0,0 L 50,0 Q 80,120 70,300 L 0,300 Z" fill="#bce0ea" opacity="0.6" />
            {/* Highway Route line: Jeddah Airport (x: 55%, y: 22%) to Makkah (x: 75%, y: 78%) */}
            <path
              d="M 170,55 C 190,110 200,160 225,215"
              fill="none"
              stroke="#0e5f2c"
              strokeWidth="5"
              strokeLinecap="round"
              className="drop-shadow-sm"
            />
            <path
              d="M 170,55 C 190,110 200,160 225,215"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="2.5"
              strokeDasharray="6,4"
              className="animate-pulse"
            />
          </svg>

          {/* Pickup Point: Jeddah Airport */}
          <div className="absolute left-[55%] top-[18%] -translate-x-1/2 z-20">
            <div className="flex items-center gap-1.5 px-2 py-1 bg-blue-600 text-white rounded-lg shadow-md text-[10px] font-bold whitespace-nowrap">
              <PlaneTakeoff className="w-3.5 h-3.5" />
              <span>Jeddah Airport (JED)</span>
            </div>
          </div>

          {/* Destination Point: Makkah */}
          <div className="absolute left-[78%] top-[72%] -translate-x-1/2 z-20">
            <div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-800 text-white rounded-lg shadow-md text-[10px] font-bold whitespace-nowrap">
              <span>🕋</span>
              <span>Makkah</span>
            </div>
          </div>

          {/* Center Badge: 85 km, 1h 10m */}
          <div className="absolute left-[65%] top-[45%] -translate-x-1/2 z-20 bg-white/95 backdrop-blur-xs p-1.5 px-2.5 rounded-xl shadow-lg border border-emerald-900/20 text-center">
            <div className="text-[11px] font-black text-slate-900 leading-none">85 km</div>
            <div className="text-[9px] font-bold text-emerald-800">1h 10m</div>
          </div>
        </div>
      </div>

      {/* 2. Route Information Box */}
      <div className="p-5 bg-white border border-slate-200 rounded-3xl shadow-xs space-y-3">
        <h4 className="text-sm font-bold text-slate-900 font-serif pb-2 border-b border-slate-100">
          Route Information
        </h4>

        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between text-slate-600">
            <span>Distance</span>
            <span className="font-bold text-slate-900">85 km</span>
          </div>
          <div className="flex items-center justify-between text-slate-600">
            <span>Estimated Time</span>
            <span className="font-bold text-slate-900">1h 10m</span>
          </div>
          <div className="flex items-center justify-between text-slate-600">
            <span>Popular Route</span>
            <span className="font-bold text-slate-900">Jeddah Airport → Makkah</span>
          </div>
          <div className="flex items-center justify-between text-slate-600">
            <span>Best Time</span>
            <span className="font-bold text-slate-900">Any time (24/7)</span>
          </div>
          <div className="flex items-center justify-between text-slate-600">
            <span>Road Type</span>
            <span className="font-bold text-emerald-800">Highway (safe & fast)</span>
          </div>
        </div>
      </div>

      {/* 3. Why Book with SafarHub? */}
      <div className="p-5 bg-white border border-slate-200 rounded-3xl shadow-xs space-y-4">
        <h4 className="text-sm font-bold text-slate-900 font-serif pb-2 border-b border-slate-100">
          Why Book with SafarHub?
        </h4>

        <div className="space-y-3 text-xs text-slate-700">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 flex-shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-slate-900">Verified Drivers</div>
              <div className="text-slate-500 text-[11px]">Licensed and trusted Saudi transport operators</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-blue-50 text-blue-600 flex-shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-slate-900">Safe & Reliable</div>
              <div className="text-slate-500 text-[11px]">24/7 GPS fleet monitoring and roadside assistance</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-600 flex-shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-slate-900">Easy Booking</div>
              <div className="text-slate-500 text-[11px]">Fast and secure payment with instant booking voucher</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-purple-50 text-purple-600 flex-shrink-0">
              <PlaneTakeoff className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-slate-900">Flight Monitoring</div>
              <div className="text-slate-500 text-[11px]">We track your flight in real time — free waiting time</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-teal-50 text-teal-600 flex-shrink-0">
              <Car className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-slate-900">Multiple Vehicle Options</div>
              <div className="text-slate-500 text-[11px]">From taxi to luxury car, GMC Yukon, and 50-seat bus</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
