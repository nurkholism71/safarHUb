import React from 'react';
import { 
  Search, 
  RotateCcw, 
  Download, 
  ChevronDown 
} from 'lucide-react';

interface AdminMessagesFilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedStatus: string;
  onStatusChange: (status: string) => void;
  selectedType: string;
  onTypeChange: (type: string) => void;
  selectedDirection: string;
  onDirectionChange: (dir: string) => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  onResetFilters: () => void;
  onExportCSV: () => void;
  totalResults: number;
}

export const AdminMessagesFilterBar: React.FC<AdminMessagesFilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedStatus,
  onStatusChange,
  selectedType,
  onTypeChange,
  selectedDirection,
  onDirectionChange,
  selectedCategory,
  onCategoryChange,
  onResetFilters,
  onExportCSV,
  totalResults
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-3">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
        {/* Left Search Bar */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Cari ID pesan (#MSG-...), pengirim, penerima, atau kata kunci isi pesan..."
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0e5f2c]"
          />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 self-end lg:self-auto">
          <div className="text-xs text-slate-500 dark:text-slate-400 px-2.5 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg">
            <span className="font-bold text-slate-800 dark:text-slate-200">{totalResults}</span> messages
          </div>

          <button
            onClick={onResetFilters}
            className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            title="Reset Filters"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>

          <button
            onClick={onExportCSV}
            className="px-3 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold flex items-center gap-1.5 hover:bg-emerald-100/60 transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Row 2: Selectors */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 border-t border-slate-100 dark:border-slate-800/60">
        {/* Status Dropdown */}
        <div className="relative">
          <select
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value)}
            className="w-full appearance-none pl-3 pr-8 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 focus:outline-hidden focus:ring-1 focus:ring-[#0e5f2c] cursor-pointer"
          >
            <option value="all">Status: Semua Status</option>
            <option value="Read">✓✓ Read (Dibaca)</option>
            <option value="Delivered">✓✓ Delivered (Terkirim)</option>
            <option value="Sent">✓ Sent (Diproses)</option>
            <option value="Unread">● Unread (Belum Dibaca)</option>
            <option value="Starred">⭐ Starred (Prioritas)</option>
            <option value="Failed">✕ Failed</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Message Type / Media Dropdown */}
        <div className="relative">
          <select
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value)}
            className="w-full appearance-none pl-3 pr-8 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 focus:outline-hidden focus:ring-1 focus:ring-[#0e5f2c] cursor-pointer"
          >
            <option value="all">Tipe Media: Semua Tipe</option>
            <option value="Text">Pesan Teks</option>
            <option value="Document PDF">Dokumen PDF (Tiket/Visa)</option>
            <option value="Image">Gambar / Foto</option>
            <option value="System Notification">Notifikasi Sistem</option>
            <option value="Voice Note">Voice Note</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Direction Dropdown */}
        <div className="relative">
          <select
            value={selectedDirection}
            onChange={(e) => onDirectionChange(e.target.value)}
            className="w-full appearance-none pl-3 pr-8 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 focus:outline-hidden focus:ring-1 focus:ring-[#0e5f2c] cursor-pointer"
          >
            <option value="all">Arah Pesan: Semua Arah</option>
            <option value="Incoming">↓ Masuk (Incoming Customer)</option>
            <option value="Outgoing">↑ Keluar (Outgoing Admin)</option>
            <option value="Broadcast">📢 Broadcast Massal</option>
            <option value="System">⚙️ Sistem Otomatis</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Category Dropdown */}
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full appearance-none pl-3 pr-8 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 focus:outline-hidden focus:ring-1 focus:ring-[#0e5f2c] cursor-pointer"
          >
            <option value="all">Kategori: Semua Layanan</option>
            <option value="Umrah & Visa">Umrah & Visa</option>
            <option value="Hotel Reservation">Hotel Reservation</option>
            <option value="Flight & Airport">Flight & Airport</option>
            <option value="VIP Concierge">VIP Concierge</option>
            <option value="Partner B2B">Partner B2B</option>
            <option value="Payment & Invoicing">Payment & Invoicing</option>
            <option value="System Alert">System Alert</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
