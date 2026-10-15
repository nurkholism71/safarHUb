import React, { useState } from 'react';
import { X, Upload, ShoppingBag, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

interface CustomJastipModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export const CustomJastipModal: React.FC<CustomJastipModalProps> = ({
  isOpen,
  onClose,
  onSubmit
}) => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('Dates');
  const [city, setCity] = useState('Makkah');
  const [storeName, setStoreName] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [budgetSAR, setBudgetSAR] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      onSubmit({
        productName,
        category,
        city,
        storeName,
        quantity,
        budgetSAR,
        notes
      });
      setIsSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-gradient-to-r from-emerald-900 to-emerald-950 text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-300/40 text-amber-300 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold font-serif leading-tight">Request Custom Jastip</h3>
              <p className="text-[11px] text-emerald-200/80">Tell us what you want to buy from Saudi</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-emerald-200 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content / Form */}
        {isSuccess ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 font-serif">Request Submitted!</h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              Our Saudi personal shopper concierge is checking the store availability and will provide you with a price quote within 15 minutes.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 space-y-4 max-h-[80vh] overflow-y-auto no-scrollbar">
            {/* Product Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Product Name / Description *
              </label>
              <input
                type="text"
                required
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="e.g. Al-Rehab Oud Roll-on, Bin Dawood Dates, Abaya Hitam"
                className="w-full text-xs font-semibold px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-hidden"
              />
            </div>

            {/* Category & City */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full text-xs font-bold px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-hidden cursor-pointer"
                >
                  <option value="Dates">Dates & Food</option>
                  <option value="Perfume">Perfume & Oud</option>
                  <option value="Islamic">Islamic Products</option>
                  <option value="Abaya">Abaya & Thobe</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Other">Other Goods</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Target City</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full text-xs font-bold px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-hidden cursor-pointer"
                >
                  <option value="Makkah">Makkah Al-Mukarramah</option>
                  <option value="Madinah">Madinah Al-Munawwarah</option>
                  <option value="Jeddah">Jeddah</option>
                  <option value="Riyadh">Riyadh</option>
                  <option value="Taif">Taif</option>
                </select>
              </div>
            </div>

            {/* Store & Budget */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Store / Market</label>
                <input
                  type="text"
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  placeholder="e.g. Bin Dawood, Taiba Mall"
                  className="w-full text-xs font-semibold px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Est. Budget (SAR)</label>
                <input
                  type="number"
                  value={budgetSAR}
                  onChange={(e) => setBudgetSAR(e.target.value)}
                  placeholder="e.g. 200"
                  className="w-full text-xs font-semibold px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-hidden"
                />
              </div>
            </div>

            {/* Photo Upload Area */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Upload Photo / Screenshot (Optional)
              </label>
              <div className="p-4 border-2 border-dashed border-slate-200 hover:border-emerald-500 rounded-2xl text-center bg-slate-50/50 cursor-pointer transition-colors">
                <Upload className="w-6 h-6 text-slate-400 mx-auto mb-1" />
                <span className="text-xs font-bold text-slate-700">Click or drag image here</span>
                <p className="text-[10px] text-slate-400">JPG, PNG up to 10MB</p>
              </div>
            </div>

            {/* Special Instructions */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Special Notes / Size / Color
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Size L, Color Black, Vacuum pack preferred"
                className="w-full text-xs font-semibold p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-hidden"
              ></textarea>
            </div>

            {/* Footer Submit */}
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
                <span>Submit Jastip Request</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
