import React from 'react';
import {
  Plane,
  CalendarCheck,
  ShieldCheck,
  Users,
  CheckCircle2,
  Clock,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import {
  ADMIN_UMRAH_DEPARTURE_BATCHES,
  ADMIN_UMRAH_BOOKINGS
} from '../../../data/adminUmrahData';

interface AdminUmrahRightSidebarProps {
  onSelectBatch?: (batchId: string) => void;
  onViewAllBookings?: () => void;
}

export const AdminUmrahRightSidebar: React.FC<AdminUmrahRightSidebarProps> = ({
  onSelectBatch,
  onViewAllBookings
}) => {
  return (
    <div className="w-full space-y-5">
      {/* 1. Upcoming Departure Manifests */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-xs">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Plane className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                Upcoming Departures
              </h3>
              <p className="text-[10px] text-slate-400">Flight manifest queue</p>
            </div>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            3 Active
          </span>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800/60 mt-1">
          {ADMIN_UMRAH_DEPARTURE_BATCHES.map((batch) => (
            <div
              key={batch.id}
              onClick={() => onSelectBatch?.(batch.id)}
              className="py-2.5 space-y-1 group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/40 px-1 rounded-lg transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 transition-colors">
                  {batch.flightCode}
                </span>
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    batch.status === 'Boarding Ready'
                      ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300'
                      : batch.status === 'Finalizing Visas'
                      ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300'
                      : 'bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300'
                  }`}
                >
                  {batch.status}
                </span>
              </div>
              <p className="text-[10px] text-slate-500 truncate">
                {batch.departureDate} • {batch.departureCity}
              </p>
              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-0.5">
                <span>{batch.totalPilgrims}/{batch.capacity} Pilgrims</span>
                <span className="truncate max-w-[120px]">{batch.mutawwif}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Live Pilgrim Bookings Queue */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-xs">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-600">
              <CalendarCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                Pilgrim Bookings
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
          {ADMIN_UMRAH_BOOKINGS.map((bk) => (
            <div key={bk.id} className="py-2.5 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-slate-800 dark:text-slate-200 truncate max-w-[130px]">
                  {bk.leadName}
                </span>
                <span className="text-xs font-extrabold text-[#082218] dark:text-emerald-400">
                  {bk.currency} {bk.totalAmount.toLocaleString()}
                </span>
              </div>
              <p className="text-[10px] text-slate-400 truncate">
                {bk.packageTitle}
              </p>
              <div className="flex items-center justify-between text-[10px] text-slate-500 pt-0.5">
                <span className="flex items-center gap-1 font-mono">
                  Passport: {bk.passportNo} ({bk.groupSize} Pax)
                </span>
                <span
                  className={`font-bold px-1.5 py-0.5 rounded text-[9px] ${
                    bk.visaStatus === 'Approved'
                      ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300'
                      : 'bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300'
                  }`}
                >
                  Visa {bk.visaStatus}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Nusuk MoHU Compliance & Muassasah Card */}
      <div className="bg-[#082218] text-white rounded-2xl p-4 border border-[#1d4d38] shadow-sm">
        <div className="flex items-center gap-2 pb-2.5 border-b border-emerald-800/60">
          <div className="w-7 h-7 rounded-lg bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">MoHU Nusuk Integration</h4>
            <p className="text-[10px] text-emerald-300">Saudi Ministry of Hajj & Umrah</p>
          </div>
        </div>

        <div className="mt-3 space-y-2 text-xs">
          <div className="flex items-center justify-between text-slate-300">
            <span>Approved Visa Quotas</span>
            <span className="font-bold text-white">1,831 / 1,842</span>
          </div>
          <div className="flex items-center justify-between text-slate-300">
            <span>Makkah Room Blocks</span>
            <span className="font-bold text-emerald-400">96.4% Locked</span>
          </div>
          <div className="flex items-center justify-between text-slate-300">
            <span>Muassasah Tasreeh Clearances</span>
            <span className="font-bold text-emerald-400">100% Active</span>
          </div>
        </div>

        <button className="w-full mt-3.5 py-2 px-3 bg-[#113a29] hover:bg-[#164834] text-[#d4af37] border border-[#d4af37]/30 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5">
          <span>Manage Nusuk Portal Sync</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
