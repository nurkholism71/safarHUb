import React from 'react';
import {
  MapPin,
  TrendingUp,
  CalendarCheck,
  ShieldCheck,
  Users,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';
import {
  ADMIN_EXPERIENCE_DESTINATIONS,
  ADMIN_EXPERIENCE_BOOKINGS
} from '../../../data/adminExperienceData';
import { AdminExperienceBooking } from '../../../types/adminExperience';

interface AdminExperienceRightSidebarProps {
  onSelectDestination?: (destId: string) => void;
  onViewAllBookings?: () => void;
}

export const AdminExperienceRightSidebar: React.FC<AdminExperienceRightSidebarProps> = ({
  onSelectDestination,
  onViewAllBookings
}) => {
  return (
    <div className="w-full space-y-5">
      {/* 1. Destination Performance Hubs */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-xs">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                Destination Operations
              </h3>
              <p className="text-[10px] text-slate-400">Regional tour coverage</p>
            </div>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            6 Hubs
          </span>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800/60 mt-1">
          {ADMIN_EXPERIENCE_DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination?.(dest.id)}
              className="py-2.5 flex items-center justify-between group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/40 px-1 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <img
                  src={dest.image}
                  alt={dest.city}
                  className="w-8 h-8 rounded-lg object-cover flex-shrink-0"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 transition-colors">
                    {dest.city}
                  </h4>
                  <p className="text-[10px] text-slate-400">
                    {dest.activeExperiences} tours • {dest.monthlyRevenue}
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
                <TrendingUp className="w-3 h-3" />
                {dest.growth}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Recent Experience Bookings Queue */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-xs">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-600">
              <CalendarCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                Live Tour Bookings
              </h3>
              <p className="text-[10px] text-slate-400">Incoming reservations</p>
            </div>
          </div>
          <button
            onClick={onViewAllBookings}
            className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-0.5"
          >
            All <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800/60 mt-2 space-y-0.5">
          {ADMIN_EXPERIENCE_BOOKINGS.map((bk) => (
            <div key={bk.id} className="py-2.5 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-slate-800 dark:text-slate-200 truncate max-w-[130px]">
                  {bk.customerName}
                </span>
                <span className="text-xs font-extrabold text-[#082218] dark:text-emerald-400">
                  {bk.currency} {bk.totalAmount}
                </span>
              </div>
              <p className="text-[10px] text-slate-400 truncate">
                {bk.experienceTitle}
              </p>
              <div className="flex items-center justify-between text-[10px] text-slate-500 pt-0.5">
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3 text-slate-400" />
                  {bk.paxCount} Pax • {bk.customerCountry}
                </span>
                <span
                  className={`font-bold px-1.5 py-0.5 rounded text-[9px] ${
                    bk.status === 'Confirmed'
                      ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300'
                      : bk.status === 'Completed'
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300'
                      : 'bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300'
                  }`}
                >
                  {bk.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Guide & Compliance Operations Card */}
      <div className="bg-[#082218] text-white rounded-2xl p-4 border border-[#1d4d38] shadow-sm">
        <div className="flex items-center gap-2 pb-2.5 border-b border-emerald-800/60">
          <div className="w-7 h-7 rounded-lg bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">Guide Compliance</h4>
            <p className="text-[10px] text-emerald-300">Saudi Tourism Authority</p>
          </div>
        </div>

        <div className="mt-3 space-y-2 text-xs">
          <div className="flex items-center justify-between text-slate-300">
            <span>Active Licensed Guides</span>
            <span className="font-bold text-white">186</span>
          </div>
          <div className="flex items-center justify-between text-slate-300">
            <span>On-Duty in Makkah / Madinah</span>
            <span className="font-bold text-emerald-400">94</span>
          </div>
          <div className="flex items-center justify-between text-slate-300">
            <span>License Renewal Pending</span>
            <span className="font-bold text-amber-400">12</span>
          </div>
        </div>

        <button className="w-full mt-3.5 py-2 px-3 bg-[#113a29] hover:bg-[#164834] text-[#d4af37] border border-[#d4af37]/30 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5">
          <span>Manage Guide License Registry</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
