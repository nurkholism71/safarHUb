import React from 'react';
import { Users, Plus, ShieldCheck } from 'lucide-react';

interface AdminUsersHeaderProps {
  onAddUser?: () => void;
}

export const AdminUsersHeader: React.FC<AdminUsersHeaderProps> = ({ onAddUser }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-r from-[#061e14] via-[#0b2d1f] to-[#1c382b] text-white p-6 sm:p-7 shadow-sm">
      {/* Background Architectural & Mosque Skyline Overlay */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1600&q=80')`
        }}
      />
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#d4af37]/10 to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-bold font-serif tracking-wide text-white">
              Users
            </h1>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#d4af37]/20 text-[#dfba56] border border-[#d4af37]/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              SafarID Single Sign-On Active
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl font-light">
            Manage and understand your users. Track registrations, activty, bookings, and engagement across the SafarHub platform.
          </p>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={onAddUser}
            className="px-4 py-2.5 rounded-xl bg-[#0b291d] hover:bg-[#0f3827] text-white border border-[#1f523b] text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shadow-md active:scale-[0.98] cursor-pointer"
          >
            <Plus className="w-4 h-4 text-[#d4af37]" />
            <span>+ Add User</span>
          </button>
        </div>
      </div>
    </div>
  );
};
