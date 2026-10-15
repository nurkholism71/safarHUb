import React, { useState } from 'react';
import {
  X,
  Building2,
  Bus,
  PlaneTakeoff,
  ShoppingBag,
  MoonStar,
  MapPin,
  Calendar,
  Users,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface QuickActionModalProps {
  actionId: string | null;
  title: string | null;
  onClose: () => void;
}

export const QuickActionModal: React.FC<QuickActionModalProps> = ({
  actionId,
  title,
  onClose,
}) => {
  const [step, setStep] = useState(1);
  const [selectedCity, setSelectedCity] = useState('Makkah');
  const [date, setDate] = useState('2026-10-15');
  const [success, setSuccess] = useState(false);

  if (!actionId) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
      <div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-200 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-serif">Request Confirmed!</h3>
            <p className="text-xs text-slate-500 max-w-xs mx-auto">
              Your booking for <span className="font-bold text-emerald-800">{title}</span> has been dispatched to SafarHub Saudi operations team.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-serif">{title || 'Service Booking'}</h3>
                <p className="text-xs text-slate-500">Quick reservations with instant verification</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Destination / City</label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-emerald-600 outline-hidden"
                >
                  <option value="Makkah">Makkah Al-Mukarramah (مكة المكرمة)</option>
                  <option value="Madinah">Madinah Al-Munawwarah (المدينة المنورة)</option>
                  <option value="Jeddah">Jeddah Airport & City (جدة)</option>
                  <option value="Riyadh">Riyadh Capital Hub (الرياض)</option>
                  <option value="Taif">Taif Mountains (الطائف)</option>
                  <option value="AlUla">AlUla Historic Tour (العلا)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Target Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-emerald-600 outline-hidden"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">Package Class / VIP Options</label>
                <select className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-emerald-600 outline-hidden">
                  <option>Royal VIP Delegation (GMC Yukon / Pullman Bus / 5-Star Suite)</option>
                  <option>Executive Family Package</option>
                  <option>Economy Standard Express</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="flex items-center justify-center w-full gap-2 py-3 bg-[#0e5f2c] hover:bg-[#0a4620] text-white rounded-xl text-xs font-bold shadow-lg shadow-emerald-950/20 transition-all active:scale-95"
                >
                  <span>Confirm & Check Availability</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
