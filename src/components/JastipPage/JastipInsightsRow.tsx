import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Truck,
  ShieldCheck,
  Camera,
  CreditCard,
  Globe2,
  Headphones,
  PackageCheck,
  Check
} from 'lucide-react';
import { JASTIP_RECENT_ORDERS } from '../../data/jastipData';

export const JastipInsightsRow: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-8">
      {/* Column 1: Recent Orders (4 cols) */}
      <div className="lg:col-span-4 bg-white border border-slate-200/90 rounded-3xl p-5 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <div>
              <h3 className="text-base font-bold text-slate-900 font-serif">Recent Orders</h3>
              <p className="text-[11px] text-slate-500">Live order status and processing</p>
            </div>
            <button
              onClick={() => alert('Opening full live order list')}
              className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors group"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="space-y-3">
            {JASTIP_RECENT_ORDERS.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-2.5 rounded-2xl bg-slate-50/70 border border-slate-100 hover:bg-emerald-50/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-200 flex-shrink-0">
                    <img
                      src={order.image}
                      alt={order.itemTitle}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{order.itemTitle}</h4>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {order.orderDate}
                    </span>
                  </div>
                </div>

                <span
                  className={`px-2.5 py-0.5 text-[10px] font-bold rounded-md border ${order.statusColor}`}
                >
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Column 2: Order Tracking Card (4 cols) */}
      <div className="lg:col-span-4 bg-white border border-slate-200/90 rounded-3xl p-5 shadow-xs flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="pb-3 mb-3 border-b border-slate-100">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 font-serif">Order Tracking</h3>
              <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-md bg-blue-100 text-blue-800 border border-blue-200">
                Shipped
              </span>
            </div>
            <div className="flex items-center justify-between mt-1 text-[11px]">
              <span className="font-bold text-slate-800">#JSP-102938</span>
              <span className="text-slate-500">Est. Arrival: 18 Oct 2026</span>
            </div>
          </div>

          {/* Item thumbnail previews */}
          <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 mb-4">
            <div className="w-9 h-9 rounded-lg overflow-hidden bg-slate-200">
              <img
                src="/images/jastip/abaya_luxury.jpg"
                alt="Abaya"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-9 h-9 rounded-lg overflow-hidden bg-slate-200">
              <img
                src="/images/jastip/ajwa_dates.jpg"
                alt="Dates"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-[11px] font-bold text-slate-700 ml-1">
              2 items (Abaya Premium + Ajwa Dates)
            </div>
          </div>

          {/* Tracking Step Milestone Flow */}
          <div className="space-y-3 relative pl-4 border-l-2 border-emerald-600 ml-2">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -left-[23px] top-0.5 w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[9px]">
                <Check className="w-2.5 h-2.5" />
              </div>
              <div className="text-[11px] font-bold text-slate-900">Request Received</div>
              <div className="text-[10px] text-slate-400">12 Oct 2026, 09:20</div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -left-[23px] top-0.5 w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[9px]">
                <Check className="w-2.5 h-2.5" />
              </div>
              <div className="text-[11px] font-bold text-slate-900">Product Purchased</div>
              <div className="text-[10px] text-slate-400">13 Oct 2026, 14:30</div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -left-[23px] top-0.5 w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[9px]">
                <Check className="w-2.5 h-2.5" />
              </div>
              <div className="text-[11px] font-bold text-slate-900">Packed & Ready</div>
              <div className="text-[10px] text-slate-400">14 Oct 2026, 10:15</div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="absolute -left-[23px] top-0.5 w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[9px]">
                <Check className="w-2.5 h-2.5" />
              </div>
              <div className="text-[11px] font-bold text-slate-900">Shipped to Indonesia</div>
              <div className="text-[10px] text-slate-400">15 Oct 2026, 22:40</div>
            </div>

            {/* Step 5 */}
            <div className="relative">
              <div className="absolute -left-[23px] top-0.5 w-4 h-4 rounded-full bg-slate-300 text-white flex items-center justify-center text-[9px]">
                <Clock className="w-2.5 h-2.5" />
              </div>
              <div className="text-[11px] font-bold text-slate-500">Arrived</div>
              <div className="text-[10px] text-slate-400">18 Oct 2026 (est.)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Column 3: Why Choose SafarHub Jastip? (4 cols) */}
      <div className="lg:col-span-4 bg-white border border-slate-200/90 rounded-3xl p-5 shadow-xs flex flex-col justify-between">
        <div>
          <div className="pb-3 mb-3 border-b border-slate-100">
            <h3 className="text-base font-bold text-slate-900 font-serif">
              Why Choose SafarHub Jastip?
            </h3>
            <p className="text-[11px] text-slate-500">Your trusted concierge in the Holy Land</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Trusted Shopper in Saudi</h4>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Our team is permanently based in Makkah, Madinah & Riyadh.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Original & High Quality</h4>
                <p className="text-[11px] text-slate-500 leading-tight">
                  We buy directly from official boutiques and verified souqs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                <Camera className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Photo & Video Verification</h4>
                <p className="text-[11px] text-slate-500 leading-tight">
                  You'll get real-time media proof before packing and dispatch.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                <CreditCard className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Safe & Secure Payment</h4>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Multiple payment methods via IDR banks, QRIS, credit card & SAR.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                <Globe2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Worldwide Delivery</h4>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Express air cargo to Indonesia, Malaysia, and 40+ countries.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                <Headphones className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Responsive Support</h4>
                <p className="text-[11px] text-slate-500 leading-tight">
                  24/7 personal shopper concierge via WhatsApp & in-app chat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
