import React from 'react';
import { Plus } from 'lucide-react';

interface AdminBookingsHeaderProps {
  onNewBooking?: () => void;
}

export const AdminBookingsHeader: React.FC<AdminBookingsHeaderProps> = ({ onNewBooking }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-serif">
          Bookings
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Manage all customer bookings across hotels, transport, airport services, umrah packages, and experiences:
        </p>
      </div>

      <button
        onClick={onNewBooking}
        className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0e5f2c] hover:bg-[#0a4620] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-sm transition-all active:scale-95 flex-shrink-0 self-start sm:self-auto cursor-pointer"
      >
        <Plus className="w-4 h-4" />
        <span>New Booking</span>
      </button>
    </div>
  );
};
