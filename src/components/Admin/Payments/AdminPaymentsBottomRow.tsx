import React from 'react';
import { ArrowRight, Luggage, Building2, Compass } from 'lucide-react';
import { 
  ADMIN_REFUND_REQUESTS, 
  ADMIN_PAYMENT_LINKS, 
  ADMIN_INVOICES 
} from '../../../data/adminPaymentsData';

interface AdminPaymentsBottomRowProps {
  onViewAllRefunds?: () => void;
  onViewAllLinks?: () => void;
  onViewAllInvoices?: () => void;
}

const linkIconMap: Record<string, React.ElementType> = {
  Luggage,
  Building2,
  Compass
};

export const AdminPaymentsBottomRow: React.FC<AdminPaymentsBottomRowProps> = ({
  onViewAllRefunds,
  onViewAllLinks,
  onViewAllInvoices
}) => {
  const getRefundBadge = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-800/40';
      case 'Processing':
        return 'bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 border-amber-200/60 dark:border-amber-800/40';
      case 'Rejected':
        return 'bg-rose-50 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400 border-rose-200/60 dark:border-rose-800/40';
      default:
        return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

  const getInvoiceBadge = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-800/40';
      case 'Unpaid':
        return 'bg-rose-50 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400 border-rose-200/60 dark:border-rose-800/40';
      default:
        return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
      {/* 1. Refund Requests */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-3.5">
            <h3 className="text-xs font-bold text-slate-900 dark:text-white">
              Refund Requests
            </h3>
            <button
              onClick={onViewAllRefunds}
              className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View All</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="space-y-3">
            {ADMIN_REFUND_REQUESTS.map((ref) => (
              <div key={ref.id} className="flex items-center justify-between gap-2 text-xs">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-medium text-slate-800 dark:text-slate-200 text-[11px]">
                      {ref.requestId}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {ref.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-5 h-5 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0">
                      <img src={ref.user.avatar} alt={ref.user.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium truncate">
                      {ref.user.name}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                  <span className="font-bold text-slate-900 dark:text-white font-sans text-xs">
                    {ref.amount}
                  </span>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold border ${getRefundBadge(ref.status)}`}>
                    {ref.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Payment Links */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-3.5">
            <h3 className="text-xs font-bold text-slate-900 dark:text-white">
              Payment Links
            </h3>
            <button
              onClick={onViewAllLinks}
              className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View All</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="space-y-3">
            {ADMIN_PAYMENT_LINKS.map((link) => {
              const ServiceIcon = linkIconMap[link.serviceIcon] || Luggage;

              return (
                <div key={link.id} className="flex items-center justify-between gap-2 text-xs">
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-slate-800 dark:text-slate-200 truncate">
                      {link.name}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-1">
                      <ServiceIcon className="w-3 h-3" />
                      <span>{link.service}</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 dark:text-white font-sans text-xs">
                        {link.amount}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {link.usage}
                      </span>
                    </div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold border bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-800/40">
                      {link.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Invoices */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-3.5">
            <h3 className="text-xs font-bold text-slate-900 dark:text-white">
              Invoices
            </h3>
            <button
              onClick={onViewAllInvoices}
              className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View All</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="space-y-3">
            {ADMIN_INVOICES.map((inv) => (
              <div key={inv.id} className="flex items-center justify-between gap-2 text-xs">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-medium text-slate-800 dark:text-slate-200 text-[11px]">
                      {inv.invoiceId}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {inv.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-5 h-5 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0">
                      <img src={inv.user.avatar} alt={inv.user.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium truncate">
                      {inv.user.name}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                  <span className="font-bold text-slate-900 dark:text-white font-sans text-xs">
                    {inv.amount}
                  </span>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold border ${getInvoiceBadge(inv.status)}`}>
                    {inv.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
