import React, { useState } from 'react';
import {
  X,
  Calendar,
  MapPin,
  Building2,
  Bus,
  User,
  Plane,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  PhoneCall
} from 'lucide-react';
import { UmrahPackage } from '../../types/umrah';

interface UmrahDetailModalProps {
  pkg: UmrahPackage | null;
  isOpen: boolean;
  onClose: () => void;
  onBook: (pkg: UmrahPackage, travelers: number) => void;
}

export const UmrahDetailModal: React.FC<UmrahDetailModalProps> = ({
  pkg,
  isOpen,
  onClose,
  onBook
}) => {
  const [adults, setAdults] = useState(2);
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen || !pkg) return null;

  const totalSAR = pkg.priceSAR * adults;
  const totalIDR = (totalSAR * 4350).toLocaleString('id-ID');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
    setTimeout(() => {
      onBook(pkg, adults);
      setIsBooked(false);
      onClose();
    }, 1600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        {/* Header with Image */}
        <div className="relative h-56 w-full overflow-hidden bg-slate-900">
          <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span
              className={`inline-block px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider rounded-md mb-1.5 ${
                pkg.badgeColor || 'bg-emerald-600 text-white'
              }`}
            >
              {pkg.badge || 'Official Package'}
            </span>
            <h3 className="text-2xl font-bold font-serif">{pkg.name}</h3>
            <p className="text-xs text-slate-200">{pkg.subTitle} • {pkg.duration}</p>
          </div>
        </div>

        {/* Modal Body */}
        {isBooked ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 font-serif">Umrah Booking Requested!</h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              Alhamdulillah! Our Umrah concierge specialist has received your booking for {pkg.name} ({adults} Persons) and will contact you via WhatsApp with the visa & travel voucher.
            </p>
          </div>
        ) : (
          <div className="p-6 overflow-y-auto no-scrollbar space-y-5">
            {/* Package Details Overview */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Makkah Hotel</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">{pkg.hotelDesc}</p>
                <span className="text-[10px] text-slate-400 font-semibold">{pkg.makkahNights} Nights</span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Madinah Hotel</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">{pkg.hotelDesc}</p>
                <span className="text-[10px] text-slate-400 font-semibold">{pkg.madinahNights} Nights</span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                  <Bus className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Transportation</span>
                </div>
                <p className="text-xs text-slate-600 mt-1 truncate">{pkg.transportType}</p>
                <span className="text-[10px] text-slate-400 font-semibold">AC & Dedicated</span>
              </div>
            </div>

            {/* Inclusions checklist */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                What's Included in this Package:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Official Umrah E-Visa with full health insurance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Full-board / Daily breakfast at Haramain hotels</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>{pkg.airportHandling}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>{pkg.guideType}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Historical Ziyarat Makkah & Madinah (Quba, Uhud)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>5L Official Saudi Zamzam Water Jerrycan</span>
                </div>
              </div>
            </div>

            {/* Price & Booking Footer */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-400">
                    Travelers
                  </label>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="bg-slate-100 border border-slate-200 text-xs font-bold rounded-xl px-3 py-1.5 focus:ring-2 focus:ring-emerald-600 outline-hidden"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} Person{num > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Total Price</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-bold text-emerald-800">SAR</span>
                    <span className="text-xl font-black text-slate-900">{totalSAR.toLocaleString()}</span>
                    <span className="text-[11px] text-slate-500 ml-1">(≈ Rp {totalIDR})</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleBooking}
                className="px-6 py-3 bg-[#0e5f2c] hover:bg-[#09421e] text-white font-bold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Book This Package</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
