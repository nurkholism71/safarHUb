import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Calendar, MapPin, Users, Building } from 'lucide-react';

interface CustomUmrahModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export const CustomUmrahModal: React.FC<CustomUmrahModalProps> = ({
  isOpen,
  onClose,
  onSubmit
}) => {
  const [groupType, setGroupType] = useState('Family');
  const [passengers, setPassengers] = useState(4);
  const [duration, setDuration] = useState('10 Days');
  const [hotelTier, setHotelTier] = useState('5-Star Luxury (Front View)');
  const [vehiclePreference, setVehiclePreference] = useState('Private GMC Yukon');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      onSubmit({ groupType, passengers, duration, hotelTier, vehiclePreference, notes });
      setIsSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-gradient-to-r from-emerald-900 to-emerald-950 text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-300/40 text-amber-300 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold font-serif leading-tight">
                Request Custom Umrah Package
              </h3>
              <p className="text-[11px] text-emerald-200/80">Tailored to your family or corporate group</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-emerald-200 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {isSuccess ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 font-serif">Custom Proposal Requested!</h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              Our Umrah Specialist is assembling your customized itinerary with negotiated corporate hotel & vehicle rates. We will share the full PDF quotation within 30 minutes.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 space-y-4 max-h-[80vh] overflow-y-auto no-scrollbar">
            {/* Group Type & Number of Travelers */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Group Type</label>
                <select
                  value={groupType}
                  onChange={(e) => setGroupType(e.target.value)}
                  className="w-full text-xs font-bold px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-hidden"
                >
                  <option value="Family">Family Trip</option>
                  <option value="Private VIP">Private VIP / Couple</option>
                  <option value="Group / Travel Agent">Group / Travel Agent</option>
                  <option value="Corporate / Embassy">Corporate / Embassy</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Travelers Count</label>
                <input
                  type="number"
                  min={1}
                  max={500}
                  value={passengers}
                  onChange={(e) => setPassengers(Number(e.target.value))}
                  className="w-full text-xs font-bold px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-hidden"
                />
              </div>
            </div>

            {/* Duration & Preferred Hotel Tier */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Duration</label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full text-xs font-bold px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-hidden"
                >
                  <option value="7 Days">7 Days (4N Makkah, 2N Madinah)</option>
                  <option value="9 Days">9 Days (5N Makkah, 3N Madinah)</option>
                  <option value="10 Days">10 Days (5N Makkah, 4N Madinah)</option>
                  <option value="12 Days">12 Days (6N Makkah, 5N Madinah)</option>
                  <option value="14 Days">14 Days (7N Makkah, 6N Madinah)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Hotel Category</label>
                <select
                  value={hotelTier}
                  onChange={(e) => setHotelTier(e.target.value)}
                  className="w-full text-xs font-bold px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-hidden"
                >
                  <option value="5-Star Luxury (Front View)">5★ Luxury (Front Kaaba View)</option>
                  <option value="5-Star Premium (Walking Distance)">5★ Premium (Clock Tower/Dar Al-Tawhid)</option>
                  <option value="4-Star Standard (Near Haram)">4★ Standard (Near Haram)</option>
                  <option value="3-Star Economy (Shuttle)">3★ Economy (Convenient Shuttle)</option>
                </select>
              </div>
            </div>

            {/* Vehicle Preference */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Vehicle & Chauffeur Preference
              </label>
              <select
                value={vehiclePreference}
                onChange={(e) => setVehiclePreference(e.target.value)}
                className="w-full text-xs font-bold px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-hidden"
              >
                <option value="Private GMC Yukon">Private GMC Yukon / Ford Expedition (Luxury SUV)</option>
                <option value="Private HiAce VIP">Private Toyota HiAce VIP (7-9 Seater)</option>
                <option value="Private Coaster">Private Toyota Coaster (18-20 Seater)</option>
                <option value="Mercedes Travego 50-Seater">VIP Mercedes Travego Bus (50 Seater)</option>
                <option value="Haramain High Speed Train">Haramain High Speed Bullet Train (Business Class)</option>
              </select>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Special Requests / Dates / Wheelchair / Meal Preferences
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Need 2 adjoining rooms, Indonesian muthawwif guide, wheelchair handling at airport"
                className="w-full text-xs font-semibold p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-hidden"
              ></textarea>
            </div>

            {/* Submit Buttons */}
            <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#0e5f2c] hover:bg-[#09421e] text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Submit Custom Inquiry</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
