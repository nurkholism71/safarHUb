import React from 'react';
import {
  FileText,
  Download,
  Calendar,
  Users,
  Building2,
  Bus,
  ShieldCheck,
  PhoneCall,
  CalendarClock,
  UserCheck,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { SHARED_FILES_LIST } from '../../data/messagesData';

interface ChatContextSidebarProps {
  onViewBookingDetails?: () => void;
}

export const ChatContextSidebar: React.FC<ChatContextSidebarProps> = ({
  onViewBookingDetails
}) => {
  return (
    <div className="flex flex-col justify-between h-[760px] gap-3">
      {/* 1. Booking Reference Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-3.5 hover:shadow-sm transition-shadow">
        <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
          <div>
            <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
              Booking Reference
            </div>
            <div className="text-xs font-bold text-slate-800 flex items-center gap-1 mt-0.5">
              <span>#UBK-102941</span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Confirmed
          </span>
        </div>

        {/* Package summary preview */}
        <div className="mt-2.5 space-y-2">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="text-xs font-bold text-slate-800 leading-tight">
                Essential Umrah – 7 Days
              </h4>
              <p className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-slate-400" />
                12 Oct – 19 Oct 2026
              </p>
            </div>
            <div className="text-right">
              <span className="text-[9px] text-slate-400 font-medium block">Total</span>
              <span className="text-xs font-bold text-emerald-700">SAR 14,800</span>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-2 border border-slate-100 space-y-1 text-[11px] text-slate-600">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Users className="w-3 h-3 text-emerald-600 shrink-0" />
                2 Adults, 1 Child
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-3 h-3 text-emerald-600 shrink-0" />
                Makkah & Madinah
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Bus className="w-3 h-3 text-emerald-600 shrink-0" />
                VIP GMC Yukon
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                Fast-Track VIP
              </span>
            </div>
          </div>

          <button
            onClick={onViewBookingDetails}
            className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-emerald-800 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
          >
            <span>View Full Booking</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 2. Quick Actions */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-3.5">
        <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-amber-500" />
          <span>Quick Concierge Actions</span>
        </h4>
        <div className="space-y-1">
          <button className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors border border-transparent hover:border-emerald-100">
            <span className="flex items-center gap-2">
              <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
              Request Callback
            </span>
            <ChevronRight className="w-3 h-3 text-slate-300" />
          </button>
          <button className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors border border-transparent hover:border-emerald-100">
            <span className="flex items-center gap-2">
              <CalendarClock className="w-3.5 h-3.5 text-emerald-600" />
              Modify Itinerary
            </span>
            <ChevronRight className="w-3.5 h-3 text-slate-300" />
          </button>
          <button className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors border border-transparent hover:border-emerald-100">
            <span className="flex items-center gap-2">
              <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
              Contact Muthawwif Direct
            </span>
            <ChevronRight className="w-3.5 h-3 text-slate-300" />
          </button>
          <button className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors border border-transparent hover:border-emerald-100">
            <span className="flex items-center gap-2">
              <Download className="w-3.5 h-3.5 text-emerald-600" />
              Download All Vouchers (ZIP)
            </span>
            <ChevronRight className="w-3.5 h-3 text-slate-300" />
          </button>
        </div>
      </div>

      {/* 3. Shared Files List */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-3.5">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <FileText className="w-3 h-3 text-emerald-600" />
            <span>Shared Files ({SHARED_FILES_LIST.length})</span>
          </h4>
          <span className="text-[10px] text-emerald-700 font-semibold cursor-pointer hover:underline">
            All files
          </span>
        </div>

        <div className="space-y-1.5">
          {SHARED_FILES_LIST.map((file) => (
            <div
              key={file.id}
              className="flex items-center justify-between px-2 py-1.5 rounded-xl bg-slate-50 hover:bg-emerald-50/70 border border-slate-100 hover:border-emerald-200 transition-all group"
            >
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-6 h-6 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                  <FileText className="w-3 h-3" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-slate-800 truncate group-hover:text-emerald-900">
                    {file.title}
                  </p>
                  <p className="text-[9px] text-slate-400">
                    {file.size} • {file.date}
                  </p>
                </div>
              </div>
              <button
                title="Download file"
                className="w-6 h-6 rounded-lg text-slate-400 hover:text-emerald-700 hover:bg-white flex items-center justify-center transition-colors shrink-0"
              >
                <Download className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
