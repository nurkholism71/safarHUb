import React from 'react';
import { Download, FileText, ArrowRight, Building2, Bus, MoonStar, ShoppingBag } from 'lucide-react';
import { RECENT_INVOICES } from '../../data/paymentsData';

interface RecentInvoicesRowProps {
  onDownloadInvoice: (id: string) => void;
}

export const RecentInvoicesRow: React.FC<RecentInvoicesRowProps> = ({ onDownloadInvoice }) => {
  return (
    <div className="my-8">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
        <div>
          <h3 className="text-lg font-bold text-slate-900 font-serif">
            Recent Invoices & Receipts
          </h3>
          <p className="text-xs text-slate-500">Official VAT tax invoices and receipts for expense filing</p>
        </div>

        <button
          onClick={() => alert('Viewing all official tax invoices & receipts')}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 group transition-colors"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* 4 Invoices Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {RECENT_INVOICES.map((inv) => (
          <div
            key={inv.id}
            className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-2xl hover:border-emerald-500 hover:shadow-xs transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0">
                {inv.category.includes('Hotel') && <Building2 className="w-5 h-5" />}
                {inv.category.includes('Transport') && <Bus className="w-5 h-5" />}
                {inv.category.includes('Umrah') && <MoonStar className="w-5 h-5" />}
                {inv.category.includes('Jastip') && <ShoppingBag className="w-5 h-5" />}
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-900">
                  {inv.title}
                </h4>
                <p className="text-[10px] font-mono text-slate-400">{inv.invoiceCode}</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-[10px] text-slate-400 font-bold">SAR</span>
                  <span className="text-xs font-black text-slate-900">{inv.priceSAR.toLocaleString()}</span>
                  <span className="text-[10px] text-slate-400 ml-1">• {inv.date}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onDownloadInvoice(inv.id)}
              className="p-2 text-slate-400 hover:text-emerald-800 hover:bg-emerald-50 rounded-xl transition-colors"
              title="Download Tax Invoice PDF"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
