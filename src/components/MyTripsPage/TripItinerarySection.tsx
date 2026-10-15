import React, { useState } from 'react';
import {
  ArrowRight,
  Plane,
  Car,
  Building2,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Clock,
  MapPin
} from 'lucide-react';
import { DAY1_ITINERARY } from '../../data/myTripsData';

export const TripItinerarySection: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState('day1');
  const [activeMapTab, setActiveMapTab] = useState<'map' | 'guide'>('map');

  const days = [
    { id: 'day1', label: 'Day 1', date: '12 Oct' },
    { id: 'day2', label: 'Day 2-4', date: '13-15 Oct' },
    { id: 'day3', label: 'Day 5-6', date: '16-17 Oct' },
    { id: 'day4', label: 'Day 7', date: '18 Oct' },
    { id: 'day5', label: 'Day 8', date: '19 Oct' },
  ];

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xs my-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
        <div>
          <h3 className="text-lg font-bold text-slate-900 font-serif">Trip Itinerary</h3>
          <p className="text-xs text-slate-500">Real-time schedule for your Umrah journey</p>
        </div>

        <button
          onClick={() => alert('Opening full expanded 8-day itinerary and guide')}
          className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors group"
        >
          <span>View Full Itinerary</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Day Tabs & Timeline (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Day Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {days.map((d) => {
              const isActive = selectedDay === d.id;
              return (
                <button
                  key={d.id}
                  onClick={() => setSelectedDay(d.id)}
                  className={`flex flex-col items-center py-2 px-3 rounded-2xl text-center min-w-[70px] transition-all ${
                    isActive
                      ? 'bg-[#0e5f2c] text-white shadow-xs font-bold'
                      : 'bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-xs font-bold leading-tight">{d.label}</span>
                  <span className={`text-[10px] ${isActive ? 'text-emerald-200' : 'text-slate-400'}`}>
                    {d.date}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Timeline Items */}
          <div className="space-y-3">
            {DAY1_ITINERARY.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-300 hover:bg-emerald-50/20 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="text-center min-w-[46px]">
                    <span className="block text-xs font-black text-slate-800">{item.time}</span>
                    <span className="block text-[10px] text-slate-400 font-semibold">
                      {item.date}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-9 h-9 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center flex-shrink-0">
                    {item.type === 'flight' && <Plane className="w-4 h-4" />}
                    {item.type === 'transport' && <Car className="w-4 h-4" />}
                    {item.type === 'hotel' && <Building2 className="w-4 h-4" />}
                    {item.type === 'activity' && <Sparkles className="w-4 h-4 text-amber-600" />}
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-900">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 line-clamp-1">{item.subTitle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`px-2.5 py-0.5 text-[10px] font-bold rounded-md ${
                      item.status === 'Confirmed'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                        : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {item.status}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Interactive Route Map (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          {/* Map / City Guide Tabs */}
          <div className="flex items-center gap-3 pb-2 border-b border-slate-100 mb-3 text-xs font-bold">
            <button
              onClick={() => setActiveMapTab('map')}
              className={`pb-1 border-b-2 transition-all ${
                activeMapTab === 'map'
                  ? 'border-emerald-700 text-emerald-900 font-extrabold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Trip Map
            </button>
            <button
              onClick={() => setActiveMapTab('guide')}
              className={`pb-1 border-b-2 transition-all ${
                activeMapTab === 'guide'
                  ? 'border-emerald-700 text-emerald-900 font-extrabold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              City Guide
            </button>
          </div>

          {/* Map Graphic Box */}
          <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-200 bg-gradient-to-br from-[#f8f6f0] via-[#ede6d8] to-[#e4dbc8] p-3 shadow-inner flex flex-col justify-between">
            {/* SVG Flight and Highway Paths */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-75">
              {/* Route connecting Jeddah - Makkah - Madinah */}
              <path
                d="M 190,195 L 140,185 L 110,65"
                fill="none"
                stroke="#0e5f2c"
                strokeWidth="3"
                strokeDasharray="5,4"
              />
              {/* Airplane Icon */}
              <circle cx="150" cy="125" r="4" fill="#c59b27" />
            </svg>

            {/* Madinah Pin Top */}
            <div className="relative z-10 self-start flex items-center gap-2 bg-white/95 p-1.5 rounded-xl border border-slate-200 shadow-sm max-w-[140px]">
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-slate-200 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=100&q=80"
                  alt="Madinah"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="truncate">
                <h5 className="text-[11px] font-bold text-slate-900 leading-tight">Madinah</h5>
                <span className="text-[9px] text-slate-500 font-semibold">16-17 Oct</span>
              </div>
            </div>

            {/* Makkah & Jeddah Pins Bottom */}
            <div className="relative z-10 flex items-center justify-between gap-2 mt-auto">
              {/* Makkah Pin */}
              <div className="flex items-center gap-2 bg-white/95 p-1.5 rounded-xl border border-slate-200 shadow-sm max-w-[140px]">
                <div className="w-8 h-8 rounded-lg overflow-hidden bg-slate-200 flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=100&q=80"
                    alt="Makkah"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="truncate">
                  <h5 className="text-[11px] font-bold text-slate-900 leading-tight">Makkah</h5>
                  <span className="text-[9px] text-slate-500 font-semibold">13-15 Oct</span>
                </div>
              </div>

              {/* Jeddah Pin */}
              <div className="flex items-center gap-2 bg-white/95 p-1.5 rounded-xl border border-slate-200 shadow-sm max-w-[140px]">
                <div className="w-8 h-8 rounded-lg overflow-hidden bg-slate-200 flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=100&q=80"
                    alt="Jeddah"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="truncate">
                  <h5 className="text-[11px] font-bold text-slate-900 leading-tight">Jeddah</h5>
                  <span className="text-[9px] text-slate-500 font-semibold">12 & 19 Oct</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
