import React from 'react';
import {
  X,
  Calendar,
  MapPin,
  Car,
  User,
  Phone,
  Download,
  Share2,
  CheckCircle2,
  QrCode,
  ShieldCheck,
  CreditCard
} from 'lucide-react';
import { TripItem } from '../../types';

interface TripDetailModalProps {
  trip: TripItem | null;
  onClose: () => void;
}

export const TripDetailModal: React.FC<TripDetailModalProps> = ({ trip, onClose }) => {
  if (!trip) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Background Photo */}
        <div className="relative h-44 w-full bg-slate-900">
          <img
            src={trip.image}
            alt={trip.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-md bg-amber-500 text-slate-950 uppercase tracking-wider">
              {trip.badge}
            </span>
            <h3 className="text-xl font-bold font-serif mt-1">{trip.title}</h3>
            <p className="text-xs text-emerald-200">{trip.subtitle}</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          {/* Status and Ref Row */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200">
            <div>
              <div className="text-[10px] font-bold uppercase text-emerald-800">Booking Reference</div>
              <div className="text-sm font-black text-emerald-950 font-mono">
                {trip.details?.bookingRef || 'SH-SAU-2026-991'}
              </div>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>{trip.status}</span>
            </div>
          </div>

          {/* Details list */}
          <div className="space-y-3 text-xs text-slate-700">
            <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
              <Calendar className="w-4 h-4 text-emerald-700 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-bold text-slate-900">Schedule & Dates</div>
                <div className="text-slate-600">{trip.date}</div>
              </div>
            </div>

            {trip.details?.location && (
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                <MapPin className="w-4 h-4 text-emerald-700 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-bold text-slate-900">Location</div>
                  <div className="text-slate-600">{trip.details.location}</div>
                </div>
              </div>
            )}

            {trip.details?.driverName && (
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                <Car className="w-4 h-4 text-emerald-700 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="font-bold text-slate-900">Assigned Driver & Vehicle</div>
                  <div className="text-slate-700">{trip.details.driverName}</div>
                  <div className="text-slate-500 text-[11px]">{trip.details.vehicleType} • {trip.details.driverPhone}</div>
                </div>
              </div>
            )}

            {trip.details?.items && (
              <div className="p-3 bg-slate-50 rounded-xl">
                <div className="font-bold text-slate-900 mb-1.5">Package Contents:</div>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  {trip.details.items.map((it, idx) => (
                    <li key={idx}>{it}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Total Price */}
            <div className="flex items-center justify-between p-3 bg-amber-50/60 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 font-bold text-amber-950">
                <CreditCard className="w-4 h-4 text-amber-600" />
                <span>Total Amount Paid</span>
              </div>
              <div className="text-base font-black text-amber-900 font-serif">
                {trip.details?.price || 'SAR 1,250'}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center gap-3 p-4 bg-slate-50 border-t border-slate-100">
          <button
            onClick={() => {
              alert('Downloading high-res official SafarHub Saudi e-voucher with QR code.');
              onClose();
            }}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#0e5f2c] hover:bg-[#09421e] text-white rounded-xl text-xs font-bold shadow-md transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download Voucher PDF</span>
          </button>
          <button
            onClick={() => {
              alert('Copied secure share link to clipboard!');
            }}
            className="p-2.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-xl transition-colors"
            title="Share Itinerary"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
