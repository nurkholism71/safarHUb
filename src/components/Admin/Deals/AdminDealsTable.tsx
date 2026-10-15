import React, { useState } from 'react';
import { 
  Tag, 
  Copy, 
  Check, 
  TrendingUp, 
  Users, 
  Calendar, 
  Eye, 
  Edit3, 
  Trash2, 
  PauseCircle, 
  PlayCircle,
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  Star,
  CheckSquare,
  Square,
  Sparkles,
  Layers
} from 'lucide-react';
import { AdminDealRecord } from '../../../types/adminDeals';

interface AdminDealsTableProps {
  deals: AdminDealRecord[];
  onSelectDeal?: (deal: AdminDealRecord) => void;
  onEditDeal?: (deal: AdminDealRecord) => void;
  onDeleteDeal?: (dealId: string) => void;
  onToggleStatus?: (dealId: string) => void;
}

export const AdminDealsTable: React.FC<AdminDealsTableProps> = ({
  deals,
  onSelectDeal,
  onEditDeal,
  onDeleteDeal,
  onToggleStatus
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(deals.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedDeals = deals.slice(startIndex, startIndex + itemsPerPage);

  const toggleSelectAll = () => {
    if (selectedIds.length === displayedDeals.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(displayedDeals.map(d => d.id));
    }
  };

  const toggleSelect = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'Flash Deals':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'Umrah Packages':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Hotels & Suites':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Flights & Airlines':
        return 'bg-sky-500/10 text-sky-400 border-sky-500/20';
      case 'Transport & Rail':
        return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      case 'Experiences & Tours':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'Jastip & Shopping':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      default:
        return 'bg-slate-700/50 text-slate-300 border-slate-600/30';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
      case 'Scheduled':
        return 'bg-blue-500/15 text-blue-400 border-blue-500/30';
      case 'Paused':
        return 'bg-amber-500/15 text-amber-400 border-amber-500/30';
      case 'Expired':
        return 'bg-rose-500/15 text-rose-400 border-rose-500/30';
      case 'Draft':
        return 'bg-slate-600/20 text-slate-400 border-slate-600/30';
      default:
        return 'bg-slate-700/50 text-slate-300 border-slate-600/30';
    }
  };

  return (
    <div className="bg-[#1e293b]/70 backdrop-blur-md rounded-2xl border border-slate-800 shadow-xl overflow-hidden flex flex-col">
      {/* Table Batch & Control Bar */}
      <div className="px-6 py-4 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-4 bg-slate-900/40">
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSelectAll}
            className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            {selectedIds.length > 0 && selectedIds.length === displayedDeals.length ? (
              <CheckSquare className="w-4 h-4 text-[#00A651]" />
            ) : (
              <Square className="w-4 h-4 text-slate-500" />
            )}
            <span>Select All ({selectedIds.length} chosen)</span>
          </button>
          {selectedIds.length > 0 && (
            <div className="flex items-center gap-2 pl-3 border-l border-slate-800">
              <button 
                onClick={() => alert(`Bulk activated ${selectedIds.length} campaigns`)}
                className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 transition-all"
              >
                Set Active
              </button>
              <button 
                onClick={() => alert(`Bulk paused ${selectedIds.length} campaigns`)}
                className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30 transition-all"
              >
                Pause Selected
              </button>
              <button 
                onClick={() => alert(`Bulk exported ${selectedIds.length} vouchers`)}
                className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 transition-all"
              >
                Export Selected
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Rules Engine & Fraud Shield Active &middot; 42 Campaigns</span>
        </div>
      </div>

      {/* Main Table with min-w-[1180px] to ensure strict horizontal alignment without wrapping */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1180px]">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/60 text-[11px] font-bold uppercase tracking-wider text-slate-400 select-none">
              <th className="py-3.5 px-4 w-10 text-center">
                <span className="sr-only">Select</span>
              </th>
              <th className="py-3.5 px-4">Promo Code & Campaign</th>
              <th className="py-3.5 px-4">Category & Audience</th>
              <th className="py-3.5 px-4">Discount & Pricing Impact</th>
              <th className="py-3.5 px-4">Redemption Quota</th>
              <th className="py-3.5 px-4">Budget & Burn Rate</th>
              <th className="py-3.5 px-4">Validity Window</th>
              <th className="py-3.5 px-4 text-center">Status</th>
              <th className="py-3.5 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-sm">
            {displayedDeals.length === 0 ? (
              <tr>
                <td colSpan={9} className="py-16 text-center text-slate-400">
                  <div className="flex flex-col items-center justify-center">
                    <Tag className="w-12 h-12 text-slate-600 mb-3" />
                    <p className="text-base font-medium text-slate-300">No Deals or Promo Campaigns Match Your Filter</p>
                    <p className="text-xs text-slate-500 mt-1">Try clearing search parameters or adjusting category filters.</p>
                  </div>
                </td>
              </tr>
            ) : (
              displayedDeals.map((deal) => {
                const isSelected = selectedIds.includes(deal.id);
                const quotaPercent = Math.min(Math.round((deal.usageCount / deal.usageLimit) * 100), 100);

                return (
                  <tr
                    key={deal.id}
                    className={`group transition-colors hover:bg-slate-800/40 ${
                      isSelected ? 'bg-[#00A651]/5' : ''
                    }`}
                  >
                    {/* Checkbox */}
                    <td className="py-4 px-4 text-center">
                      <button
                        onClick={() => toggleSelect(deal.id)}
                        className="text-slate-500 hover:text-white transition-colors"
                      >
                        {isSelected ? (
                          <CheckSquare className="w-4 h-4 text-[#00A651]" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-600 group-hover:text-slate-400" />
                        )}
                      </button>
                    </td>

                    {/* Promo Code & Campaign */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-800 border border-slate-700/60 flex-shrink-0 shadow-inner">
                          <img
                            src={deal.image}
                            alt={deal.campaignName}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {deal.featured && (
                            <div className="absolute top-1 right-1 p-0.5 rounded-full bg-amber-500/90 text-slate-950" title="Featured Campaign">
                              <Star className="w-2.5 h-2.5 fill-current" />
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleCopyCode(deal.code)}
                              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 font-mono font-bold text-xs border border-emerald-500/30 transition-colors"
                              title="Click to copy promo code"
                            >
                              <span>{deal.code}</span>
                              {copiedCode === deal.code ? (
                                <Check className="w-3 h-3 text-emerald-400" />
                              ) : (
                                <Copy className="w-3 h-3 text-emerald-400 opacity-70" />
                              )}
                            </button>
                            <span className="text-[11px] font-arabic text-amber-400/90" dir="rtl">
                              {deal.arabicName}
                            </span>
                          </div>
                          <div className="font-semibold text-slate-100 group-hover:text-[#00A651] transition-colors mt-1 text-xs">
                            {deal.campaignName}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Category & Audience */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="flex flex-col gap-1">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold border w-fit ${getCategoryBadge(deal.category)}`}>
                          {deal.category}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] text-slate-400">
                          <Users className="w-3 h-3 text-slate-500" />
                          <span>{deal.targetAudience}</span>
                        </div>
                      </div>
                    </td>

                    {/* Discount & Pricing Impact */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="flex flex-col gap-0.5 text-xs">
                        <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                          <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-xs">
                            {deal.discountValue}
                          </span>
                          <span className="text-slate-400 line-through text-[11px]">{deal.originalPrice}</span>
                          <span className="text-slate-100">{deal.promoPrice}</span>
                        </div>
                        <div className="text-[10px] text-slate-400">
                          Min: <span className="text-slate-300">{deal.minPurchase}</span> &middot; Cap: <span className="text-slate-300">{deal.maxDiscountCap}</span>
                        </div>
                      </div>
                    </td>

                    {/* Redemption Quota */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="flex flex-col gap-1.5 w-32">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-200">{deal.usageCount.toLocaleString()}</span>
                          <span className="text-slate-400 text-[11px]">/ {deal.usageLimit.toLocaleString()}</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all duration-500 ${
                              quotaPercent > 80 ? 'bg-amber-400' : 'bg-emerald-400'
                            }`}
                            style={{ width: `${quotaPercent}%` }}
                          />
                        </div>
                        <span className="text-[10px] text-slate-500">{quotaPercent}% Redeemed</span>
                      </div>
                    </td>

                    {/* Budget & Burn Rate */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="flex flex-col gap-0.5 text-xs">
                        <div className="font-semibold text-slate-200">{deal.budgetAllocated}</div>
                        <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                          <span className="font-mono text-emerald-400 font-bold">{deal.burnRate}%</span>
                          <span>subsidies spent</span>
                        </div>
                      </div>
                    </td>

                    {/* Validity Window */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="flex flex-col gap-0.5 text-xs">
                        <div className="flex items-center gap-1 text-slate-300">
                          <Calendar className="w-3.5 h-3.5 text-sky-400" />
                          <span>{deal.startDate} &rarr; {deal.endDate}</span>
                        </div>
                        <div className="text-[11px] text-slate-400">
                          {deal.daysRemaining > 0 ? (
                            <span className="text-emerald-400 font-medium">{deal.daysRemaining} days remaining</span>
                          ) : (
                            <span className="text-rose-400 font-medium">Campaign Concluded</span>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="py-4 px-4 text-center whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${getStatusBadge(deal.status)}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 animate-pulse" />
                        {deal.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => onSelectDeal?.(deal)}
                          title="View Campaign Analytics"
                          className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onEditDeal?.(deal)}
                          title="Edit Campaign & Rules"
                          className="p-1.5 text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-colors"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onToggleStatus?.(deal.id)}
                          title={deal.status === 'Active' ? 'Pause Campaign' : 'Activate Campaign'}
                          className="p-1.5 text-slate-400 hover:text-amber-400 hover:bg-amber-500/10 rounded-lg transition-colors"
                        >
                          {deal.status === 'Active' ? (
                            <PauseCircle className="w-4 h-4" />
                          ) : (
                            <PlayCircle className="w-4 h-4" />
                          )}
                        </button>
                        <button
                          onClick={() => onDeleteDeal?.(deal.id)}
                          title="Archive / Remove"
                          className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination & Summary Footer */}
      <div className="px-6 py-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 bg-slate-900/40 text-xs text-slate-400">
        <div>
          Showing <span className="font-semibold text-slate-200">{displayedDeals.length > 0 ? startIndex + 1 : 0}</span> to{' '}
          <span className="font-semibold text-slate-200">
            {Math.min(startIndex + itemsPerPage, deals.length)}
          </span>{' '}
          of <span className="font-semibold text-slate-200">{deals.length}</span> total promo campaign records
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="flex items-center gap-1 px-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-7 h-7 rounded-lg text-xs font-semibold transition-all ${
                  currentPage === page
                    ? 'bg-[#00A651] text-white shadow-md shadow-[#00A651]/20'
                    : 'bg-slate-800/40 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
