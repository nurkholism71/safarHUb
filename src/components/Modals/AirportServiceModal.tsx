import React, { useState } from 'react';
import {
  X,
  Plane,
  Clock,
  Calendar,
  Users,
  CheckCircle2,
  ShieldCheck,
  MapPin
} from 'lucide-react';
import { FeaturedAirportPackage, AirportServiceItem } from '../../types/airport';

interface AirportServiceModalProps {
  service: FeaturedAirportPackage | AirportServiceItem | null;
  onClose: () => void;
  onConfirm: (serviceTitle: string, price: number) => void;
}

export const AirportServiceModal: React.FC<AirportServiceModalProps> = ({
  service,
  onClose,
  onConfirm,
}) => {
  const [flightNo, setFlightNo] = useState('SV 816');
  const [passengerName, setPassengerName] = useState('Muhammad Rizky');
  const [selectedAirport, setSelectedAirport] = useState('Jeddah Airport (JED) Terminal 1');

  if (!service) return null;

  const title = (service as any).title || (service as any).name;
  const price = (service as any).price || 250;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(title, price);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Photo */}
        <div className="relative h-40 w-full bg-slate-900 flex-shrink-0">
          <img
            src={service.image}
            alt={title}
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-emerald-600 text-white uppercase">
              Airport Handling
            </span>
            <h2 className="text-xl font-bold font-serif mt-1">{title}</h2>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[65vh] overflow-y-auto">
          <div>
            <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Primary Passenger Name</label>
            <div className="flex items-center px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl">
              <input
                type="text"
                value={passengerName}
                onChange={(e) => setPassengerName(e.target.value)}
                className="w-full text-xs font-semibold text-slate-800 bg-transparent outline-hidden"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Flight Number & Airline</label>
            <div className="flex items-center px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl">
              <Plane className="w-4 h-4 text-emerald-700 mr-2" />
              <input
                type="text"
                value={flightNo}
                onChange={(e) => setFlightNo(e.target.value)}
                className="w-full text-xs font-semibold text-slate-800 bg-transparent outline-hidden"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Airport Terminal</label>
            <div className="flex items-center px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl">
              <MapPin className="w-4 h-4 text-emerald-700 mr-2" />
              <input
                type="text"
                value={selectedAirport}
                onChange={(e) => setSelectedAirport(e.target.value)}
                className="w-full text-xs font-semibold text-slate-800 bg-transparent outline-hidden"
              />
            </div>
          </div>

          {/* Guarantee */}
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Includes meet at gate with custom name board</span>
            </div>
          </div>

          {/* Price & Submit */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-200">
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Package Price</div>
              <div className="text-xl font-black text-slate-900 font-serif">
                SAR {price}
              </div>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-[#0e5f2c] hover:bg-[#09421e] text-white rounded-xl text-xs font-bold shadow-md transition-all active:scale-95"
            >
              Confirm Airport Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
