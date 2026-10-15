import React from 'react';
import {
  Building2,
  Bus,
  Plane,
  ShoppingBag,
  MoonStar,
  Compass,
  Headphones,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { BOOKING_SUMMARY_STATS } from '../../data/bookingsData';

interface BookingsRightSidebarProps {
  onQuickAction: (actionId: string) => void;
  onViewItinerary: () => void;
  onContactSupport: () => void;
}

export const BookingsRightSidebar: React.FC<BookingsRightSidebarProps> = ({
  onQuickAction,
  onViewItinerary,
  onContactSupport
}) => {
  const quickActions = [
    { id: 'hotels', label: 'Book Hotel', icon: Building2 },
    { id: 'transport', label: 'Book Transport', icon: Bus },
    { id: 'airport', label: 'Airport Service', icon: Plane },
    { id: 'jastip', label: 'Order Jastip', icon: ShoppingBag },
    { id: 'umrah', label: 'Umrah Package', icon: MoonStar },
    { id: 'activity', label: 'Add Activity', icon: Compass }
  ];

  return (
    <div className="space-y-5">
      {/* 1. Booking Summary Donut Card */}
      <div className="bg-white border border-slate-200/90 rounded-3xl p-5 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 font-serif mb-4">Booking Summary</h3>

        {/* Circular Donut Graphic & Stats */}
        <div className="flex items-center gap-4">
          <div className="relative w-24 h-24 flex items-center justify-center flex-shrink-0">
            {/* SVG Ring */}
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-slate-100"
                strokeWidth="4"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              {/* Upcoming (5/8 = 62.5%) */}
              <path
                className="text-sky-500"
                strokeDasharray="62.5, 100"
                strokeWidth="4"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              {/* Completed (2/8 = 25%) */}
              <path
                className="text-emerald-600"
                strokeDasharray="25, 100"
                strokeDashoffset="-62.5"
                strokeWidth="4"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              {/* Processing (1/8 = 12.5%) */}
              <path
                className="text-amber-500"
                strokeDasharray="12.5, 100"
                strokeDashoffset="-87.5"
                strokeWidth="4"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-xl font-black text-slate-900 leading-none">
                {BOOKING_SUMMARY_STATS.total}
              </span>
              <span className="text-[9px] font-bold text-slate-400 uppercase mt-0.5">
                Bookings
              </span>
            </div>
          </div>

          {/* Legend Items */}
          <div className="space-y-1.5 flex-1 text-xs font-semibold">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-slate-700">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
                <span>Upcoming</span>
              </div>
              <span className="font-bold text-slate-900">{BOOKING_SUMMARY_STATS.upcoming}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-slate-700">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                <span>Completed</span>
              </div>
              <span className="font-bold text-slate-900">{BOOKING_SUMMARY_STATS.completed}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-slate-700">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span>Processing</span>
              </div>
              <span className="font-bold text-slate-900">{BOOKING_SUMMARY_STATS.processing}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-slate-700">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                <span>Cancelled</span>
              </div>
              <span className="font-bold text-slate-900">{BOOKING_SUMMARY_STATS.cancelled}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Upcoming Trip Widget Card */}
      <div className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-xs">
        <div className="p-4 pb-3">
          <h3 className="text-base font-bold text-slate-900 font-serif">Upcoming Trip</h3>
        </div>

        <div className="relative h-28 w-full overflow-hidden bg-slate-100">
          <img
            src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=600&q=80"
            alt="Umrah Trip Kaaba"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4 space-y-3">
          <div>
            <h4 className="text-sm font-bold text-slate-900 font-serif">Umrah Trip</h4>
            <p className="text-xs text-slate-500 font-medium">12 – 19 Oct 2026</p>
            <p className="text-[11px] text-slate-400 font-semibold mt-0.5">
              5 bookings • 4 passengers
            </p>
          </div>

          {/* 4 Milestone Checkpoints */}
          <div className="grid grid-cols-4 gap-1.5 pt-2 border-t border-slate-100 text-center">
            <div className="flex flex-col items-center">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <span className="text-[9px] font-bold text-slate-800">Flight</span>
              <span className="text-[8px] text-slate-400">12 Oct</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <span className="text-[9px] font-bold text-slate-800">Hotel</span>
              <span className="text-[8px] text-slate-400">12 Oct</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <span className="text-[9px] font-bold text-slate-800">Transport</span>
              <span className="text-[8px] text-slate-400">12 Oct</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center mb-1">
                <Compass className="w-3.5 h-3.5" />
              </div>
              <span className="text-[9px] font-bold text-slate-800">Activities</span>
              <span className="text-[8px] text-slate-400">13-19 Oct</span>
            </div>
          </div>

          <button
            onClick={onViewItinerary}
            className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-[#0e5f2c] hover:bg-[#09421e] text-white text-xs font-bold rounded-xl transition-colors mt-2"
          >
            <span>View Full Itinerary</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 3. Quick Actions List */}
      <div className="bg-white border border-slate-200/90 rounded-3xl p-4 shadow-xs space-y-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">
          Quick Actions
        </h3>
        <div className="space-y-1">
          {quickActions.map((act) => {
            const Icon = act.icon;
            return (
              <button
                key={act.id}
                onClick={() => onQuickAction(act.id)}
                className="flex items-center gap-3 w-full p-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-900 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span>{act.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Need Help? Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-4 text-center space-y-2">
        <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
          <Headphones className="w-5 h-5" />
        </div>
        <h4 className="text-xs font-bold text-slate-900 font-serif">Need Help?</h4>
        <p className="text-[11px] text-slate-500 leading-tight">
          Our team is ready to assist you with your bookings.
        </p>
        <button
          onClick={onContactSupport}
          className="w-full py-2 bg-white border border-slate-300 hover:border-emerald-600 text-slate-800 hover:text-emerald-900 text-xs font-bold rounded-xl transition-colors shadow-2xs"
        >
          Contact Support
        </button>
      </div>
    </div>
  );
};
