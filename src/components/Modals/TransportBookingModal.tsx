import React, { useState } from 'react';
import {
  X,
  Car,
  Users,
  Briefcase,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Plane
} from 'lucide-react';
import { TransportVehicle } from '../../types/transport';

interface TransportBookingModalProps {
  vehicle: TransportVehicle | null;
  onClose: () => void;
  onConfirm: (vehicleName: string, price: number) => void;
}

export const TransportBookingModal: React.FC<TransportBookingModalProps> = ({
  vehicle,
  onClose,
  onConfirm,
}) => {
  const [flightNo, setFlightNo] = useState('SV 816');
  const [pickupLocation, setPickupLocation] = useState('Jeddah Airport (JED) Terminal 1');
  const [dropoffLocation, setDropoffLocation] = useState('Makkah Hilton Convention Hotel');

  if (!vehicle) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(vehicle.name, vehicle.price);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-44 w-full bg-slate-900 flex-shrink-0">
          <img
            src={vehicle.image}
            alt={vehicle.name}
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
              {vehicle.categoryLabel}
            </span>
            <h2 className="text-xl font-bold font-serif mt-1">{vehicle.name}</h2>
            <div className="flex items-center gap-3 text-xs text-emerald-200 mt-1">
              <span>{vehicle.seats} Seats</span>
              <span>•</span>
              <span>{vehicle.luggage} Luggage Capacity</span>
            </div>
          </div>
        </div>

        {/* Body Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[65vh] overflow-y-auto">
          <div>
            <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Flight Number (For Airport Pickup)</label>
            <div className="flex items-center px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl">
              <Plane className="w-4 h-4 text-emerald-700 mr-2" />
              <input
                type="text"
                value={flightNo}
                onChange={(e) => setFlightNo(e.target.value)}
                placeholder="e.g. SV 816, GA 980"
                className="w-full text-xs font-semibold text-slate-800 bg-transparent outline-hidden"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Pickup Point</label>
            <div className="flex items-center px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl">
              <MapPin className="w-4 h-4 text-emerald-700 mr-2" />
              <input
                type="text"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="w-full text-xs font-semibold text-slate-800 bg-transparent outline-hidden"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Dropoff Hotel / Address</label>
            <div className="flex items-center px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl">
              <MapPin className="w-4 h-4 text-emerald-700 mr-2" />
              <input
                type="text"
                value={dropoffLocation}
                onChange={(e) => setDropoffLocation(e.target.value)}
                className="w-full text-xs font-semibold text-slate-800 bg-transparent outline-hidden"
              />
            </div>
          </div>

          {/* Guarantee Badges */}
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Includes 60 mins free flight delay waiting time</span>
            </div>
          </div>

          {/* Price & Submit */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-200">
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Total Price</div>
              <div className="text-xl font-black text-slate-900 font-serif">
                SAR {vehicle.price}
              </div>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-[#0e5f2c] hover:bg-[#09421e] text-white rounded-xl text-xs font-bold shadow-md transition-all active:scale-95"
            >
              Confirm Vehicle Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
