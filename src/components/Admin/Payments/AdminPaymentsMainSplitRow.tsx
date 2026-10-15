import React from 'react';
import { 
  ArrowRight, 
  MoreHorizontal, 
  Luggage, 
  Building2, 
  Plane, 
  ShoppingBag, 
  Compass, 
  Car,
  CreditCard,
  Building,
  Smartphone,
  Banknote
} from 'lucide-react';
import { 
  ADMIN_PAYMENT_TRANSACTIONS, 
  ADMIN_PARTNER_PAYOUTS 
} from '../../../data/adminPaymentsData';
import { AdminPaymentTransaction, AdminPartnerPayout } from '../../../types/adminPayments';

interface AdminPaymentsMainSplitRowProps {
  onViewAllTransactions?: () => void;
  onViewAllPayouts?: () => void;
  onSelectTransaction?: (txn: AdminPaymentTransaction) => void;
}

const serviceIconMap: Record<string, React.ElementType> = {
  Luggage,
  Building2,
  Plane,
  ShoppingBag,
  Compass,
  Car
};

export const AdminPaymentsMainSplitRow: React.FC<AdminPaymentsMainSplitRowProps> = ({
  onViewAllTransactions,
  onViewAllPayouts,
  onSelectTransaction
}) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-800/40';
      case 'Refunded':
        return 'bg-rose-50 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400 border-rose-200/60 dark:border-rose-800/40';
      case 'Pending':
        return 'bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 border-amber-200/60 dark:border-amber-800/40';
      default:
        return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

  const getPayoutStatusBadge = (status: string) => {
    switch (status) {
      case 'Sent':
        return 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-800/40';
      case 'Processing':
        return 'bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 border-amber-200/60 dark:border-amber-800/40';
      case 'Pending':
        return 'bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 border-amber-200/60 dark:border-amber-800/40';
      default:
        return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
      {/* 1. Left Side: Recent Transactions Table (lg:col-span-8 xl:col-span-9) */}
      <div className="lg:col-span-8 xl:col-span-9 bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-3">
            <h3 className="text-xs font-bold text-slate-900 dark:text-white">
              Recent Transactions
            </h3>
            <button
              onClick={onViewAllTransactions}
              className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View All</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b border-slate-100 dark:border-slate-800 text-[10px] font-bold text-slate-400 uppercase select-none">
                  <th className="py-2.5 px-3">Transaction ID</th>
                  <th className="py-2.5 px-3">Date & Time</th>
                  <th className="py-2.5 px-3">User</th>
                  <th className="py-2.5 px-3">Service</th>
                  <th className="py-2.5 px-3">Amount</th>
                  <th className="py-2.5 px-3">Payment Method</th>
                  <th className="py-2.5 px-3">Status</th>
                  <th className="py-2.5 px-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-xs">
                {ADMIN_PAYMENT_TRANSACTIONS.map((txn) => {
                  const ServiceIcon = serviceIconMap[txn.service.iconName] || Luggage;

                  return (
                    <tr
                      key={txn.id}
                      className="group hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                    >
                      {/* Transaction ID */}
                      <td className="py-2.5 px-3 whitespace-nowrap">
                        <span className="font-mono font-medium text-slate-800 dark:text-slate-200">
                          {txn.transactionId}
                        </span>
                      </td>

                      {/* Date & Time */}
                      <td className="py-2.5 px-3 whitespace-nowrap text-slate-500 dark:text-slate-400 text-[11px]">
                        {txn.dateTime}
                      </td>

                      {/* User */}
                      <td className="py-2.5 px-3 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0 border border-slate-200 dark:border-slate-700">
                            <img src={txn.user.avatar} alt={txn.user.name} className="w-full h-full object-cover" />
                          </div>
                          <span className="font-semibold text-slate-800 dark:text-slate-200">
                            {txn.user.name}
                          </span>
                        </div>
                      </td>

                      {/* Service */}
                      <td className="py-2.5 px-3 whitespace-nowrap">
                        <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                          <ServiceIcon className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                          <span>{txn.service.name}</span>
                        </div>
                      </td>

                      {/* Amount */}
                      <td className="py-2.5 px-3 whitespace-nowrap">
                        <span className="font-bold text-slate-900 dark:text-white font-sans">
                          {txn.amount}
                        </span>
                      </td>

                      {/* Payment Method */}
                      <td className="py-2.5 px-3 whitespace-nowrap text-[11px] text-slate-600 dark:text-slate-300">
                        <span className="font-medium">{txn.paymentMethod.name}</span>
                      </td>

                      {/* Status */}
                      <td className="py-2.5 px-3 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold border ${getStatusBadge(txn.status)}`}>
                          {txn.status}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="py-2.5 px-3 text-center whitespace-nowrap">
                        <button
                          onClick={() => onSelectTransaction?.(txn)}
                          className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
                        >
                          <MoreHorizontal className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 2. Right Side: Payouts to Partners Card (lg:col-span-4 xl:col-span-3) */}
      <div className="lg:col-span-4 xl:col-span-3 bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-3.5">
            <h3 className="text-xs font-bold text-slate-900 dark:text-white">
              Payouts to Partners
            </h3>
            <button
              onClick={onViewAllPayouts}
              className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View All</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="space-y-3">
            {ADMIN_PARTNER_PAYOUTS.map((payout) => (
              <div key={payout.id} className="flex items-center justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                    {payout.partner}
                  </div>
                  <div className="text-[11px] font-bold text-slate-900 dark:text-white font-sans mt-0.5">
                    {payout.amount}
                  </div>
                </div>
                <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold border flex-shrink-0 ${getPayoutStatusBadge(payout.status)}`}>
                  {payout.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
