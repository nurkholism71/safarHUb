import React, { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';

export const DealsNewsletterRow: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Left text with icon */}
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Get the Latest Deals & Promo
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Subscribe and be the first to know about exclusive offers, new packages, and special discounts.
            </p>
          </div>
        </div>

        {/* Right Input Form */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 max-w-md w-full">
          {subscribed ? (
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-4 py-2.5 rounded-xl border border-emerald-200 w-full">
              <CheckCircle2 className="w-4 h-4" />
              <span>Thank you! You're now subscribed to SafarHub VIP Deals.</span>
            </div>
          ) : (
            <>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full text-xs font-semibold text-slate-800 px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-hidden placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#0e5f2c] hover:bg-[#09421e] text-white text-xs font-bold rounded-xl shadow-xs transition-colors shrink-0 flex items-center gap-1.5"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};
