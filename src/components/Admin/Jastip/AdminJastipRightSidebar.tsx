import React, { useState } from 'react';
import {
  Plus,
  Search,
  Store,
  ListPlus,
  Calculator,
  Truck,
  ArrowRight,
  Star
} from 'lucide-react';
import { ADMIN_JASTIP_TRUSTED_STORES } from '../../../data/adminJastipData';

interface AdminJastipRightSidebarProps {
  onQuickAction?: (actionId: string, title: string) => void;
  onTrackOrder?: (orderId: string) => void;
  onViewAllStores?: () => void;
}

export const AdminJastipRightSidebar: React.FC<AdminJastipRightSidebarProps> = ({
  onQuickAction,
  onTrackOrder,
  onViewAllStores
}) => {
  const [trackInput, setTrackInput] = useState('');

  const quickActions = [
    { id: 'create', title: 'Buat Jastip Baru', icon: Plus },
    { id: 'search-product', title: 'Cari Produk', icon: Search },
    { id: 'check-store-price', title: 'Cek Harga di Toko', icon: Store },
    { id: 'shopping-list', title: 'Tambah Shopping List', icon: ListPlus },
    { id: 'cost-calculator', title: 'Hitung Estimasi Biaya', icon: Calculator },
    { id: 'check-shipping', title: 'Cek Ongkir & Pengiriman', icon: Truck }
  ];

  return (
    <div className="space-y-3.5">
      {/* 1. Quick Actions Card */}
      <div className="bg-white rounded-xl p-3 sm:p-3.5 border border-slate-200/90 shadow-sm">
        <h3 className="text-xs font-bold text-slate-900 mb-2">
          Quick Actions
        </h3>

        <div className="space-y-1">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                onClick={() => onQuickAction && onQuickAction(action.id, action.title)}
                className="w-full flex items-center justify-between p-1.5 rounded-lg border border-slate-100 hover:border-emerald-200 bg-slate-50/70 hover:bg-emerald-50/50 text-slate-700 hover:text-emerald-900 text-[10.5px] font-semibold transition-all group cursor-pointer shadow-2xs"
              >
                <div className="flex items-center gap-2">
                  <div className="w-4.5 h-4.5 rounded bg-white border border-slate-200 flex items-center justify-center text-slate-600 group-hover:text-emerald-700 group-hover:border-emerald-300">
                    <Icon className="w-2.5 h-2.5" />
                  </div>
                  <span>{action.title}</span>
                </div>
                <Plus className="w-2.5 h-2.5 text-slate-400 group-hover:text-emerald-700" />
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Tracking Order Card */}
      <div className="bg-white rounded-xl p-3 border border-slate-200/90 shadow-sm">
        <h3 className="text-xs font-bold text-slate-900 mb-1.5">
          Tracking Order
        </h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (trackInput.trim() && onTrackOrder) {
              onTrackOrder(trackInput.trim());
            }
          }}
          className="flex items-center gap-1.5"
        >
          <input
            type="text"
            value={trackInput}
            onChange={(e) => setTrackInput(e.target.value)}
            placeholder="Masukkan Order ID..."
            className="flex-1 px-2 py-1 bg-slate-50 border border-slate-200 rounded-md text-[11px] text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-600"
          />
          <button
            type="submit"
            className="p-1.5 rounded-md bg-[#0e5f2c] hover:bg-[#0b4b23] text-white transition-colors cursor-pointer"
          >
            <Search className="w-3 h-3" />
          </button>
        </form>
      </div>

      {/* 3. Trusted Stores Card */}
      <div className="bg-white rounded-xl p-3 sm:p-3.5 border border-slate-200/90 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-bold text-slate-900">
            Trusted Stores
          </h3>
          <button
            onClick={onViewAllStores}
            className="text-[9.5px] font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-0.5 transition-colors cursor-pointer"
          >
            View All <ArrowRight className="w-2.5 h-2.5" />
          </button>
        </div>

        <div className="space-y-1.5">
          {ADMIN_JASTIP_TRUSTED_STORES.map((store) => (
            <div
              key={store.id}
              className="flex items-center justify-between p-1 rounded-md hover:bg-slate-50 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-2 min-w-0">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-6 h-6 rounded object-cover ring-1 ring-slate-200 flex-shrink-0"
                />
                <div className="min-w-0">
                  <div className="text-[10px] font-bold text-slate-800 truncate group-hover:text-emerald-800 leading-tight">
                    {store.name}
                  </div>
                  <div className="text-[8px] text-slate-400 truncate">
                    {store.location}, {store.category}
                  </div>
                </div>
              </div>

              <div className="text-[9.5px] text-amber-600 font-semibold flex items-center gap-0.5 flex-shrink-0">
                <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                <span>{store.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
