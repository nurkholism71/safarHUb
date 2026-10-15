import React from 'react';
import { Plus } from 'lucide-react';

interface AdminTransportHeaderProps {
  onAddTransport?: () => void;
}

export const AdminTransportHeader: React.FC<AdminTransportHeaderProps> = ({
  onAddTransport
}) => {
  return (
    <div className="space-y-4 mb-6">
      {/* Title & Action Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-serif">
            Transport
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage all transport services including flights, buses, trains, private cars, airport transfers, and car rentals.
          </p>
        </div>

        <button
          onClick={onAddTransport}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0e5f2c] hover:bg-[#0a4620] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-sm transition-all active:scale-95 flex-shrink-0 self-start sm:self-auto cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add Transport Service</span>
        </button>
      </div>

      {/* Panoramic Transport Fleet Header Banner */}
      <div className="relative h-32 sm:h-40 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
        <img
          src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80"
          alt="Transport Fleet Banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/40 to-transparent" />
        
        <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-center text-white max-w-lg">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#d4af37]">
            Comprehensive Saudi Transit Suite
          </span>
          <h2 className="text-base sm:text-xl font-bold font-serif text-white mt-0.5">
            Intercity Flights, High-Speed Rail & VIP Chauffeurs
          </h2>
          <p className="text-xs text-slate-200 mt-1 hidden sm:block">
            Real-time route coordination across 860 active fleets and regional transit corridors.
          </p>
        </div>
      </div>
    </div>
  );
};
