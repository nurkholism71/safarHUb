import React from 'react';
import {
  Building2,
  CreditCard,
  PlaneTakeoff,
  MoonStar,
  ArrowRight,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { RECENT_SUPPORT_TICKETS } from '../../data/supportData';
import { SupportTicketItem } from '../../types/support';

interface RecentTicketsTableProps {
  onViewTicket?: (ticket: SupportTicketItem) => void;
  onViewAllTickets?: () => void;
}

export const RecentTicketsTable: React.FC<RecentTicketsTableProps> = ({
  onViewTicket,
  onViewAllTickets
}) => {
  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'Hotels':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Payments':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Airport Services':
        return 'bg-sky-50 text-sky-700 border-sky-200';
      case 'Umrah Packages':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'In Progress':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Resolved':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Pending':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getTicketIcon = (categoryKey: string) => {
    switch (categoryKey) {
      case 'hotels':
        return <Building2 className="w-4 h-4 text-blue-600" />;
      case 'payments':
        return <CreditCard className="w-4 h-4 text-emerald-600" />;
      case 'airport':
        return <PlaneTakeoff className="w-4 h-4 text-sky-600" />;
      case 'umrah':
        return <MoonStar className="w-4 h-4 text-emerald-600" />;
      default:
        return <Building2 className="w-4 h-4 text-slate-600" />;
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Recent Support Tickets
          </h3>
          <p className="text-xs text-slate-500">
            Monitor resolution progress and official concierge updates
          </p>
        </div>
        <button
          onClick={onViewAllTickets}
          className="text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline flex items-center gap-1"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-100 text-[11px] uppercase tracking-wider text-slate-400 font-bold">
              <th className="py-2.5 px-3">Ticket ID</th>
              <th className="py-2.5 px-3">Subject</th>
              <th className="py-2.5 px-3">Category</th>
              <th className="py-2.5 px-3">Status</th>
              <th className="py-2.5 px-3">Last Update</th>
              <th className="py-2.5 px-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
            {RECENT_SUPPORT_TICKETS.map((ticket) => (
              <tr
                key={ticket.id}
                className="hover:bg-emerald-50/40 transition-colors group cursor-pointer"
                onClick={() => onViewTicket?.(ticket)}
              >
                {/* Ticket ID */}
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-slate-100 group-hover:bg-white flex items-center justify-center shrink-0 border border-slate-200/60">
                      {getTicketIcon(ticket.categoryKey)}
                    </div>
                    <span className="font-bold text-slate-900 group-hover:text-emerald-900">
                      {ticket.ticketId}
                    </span>
                  </div>
                </td>

                {/* Subject */}
                <td className="py-3 px-3 font-semibold text-slate-800 group-hover:text-emerald-900">
                  {ticket.subject}
                </td>

                {/* Category */}
                <td className="py-3 px-3">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${getCategoryBadge(
                      ticket.category
                    )}`}
                  >
                    {ticket.category}
                  </span>
                </td>

                {/* Status */}
                <td className="py-3 px-3">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${getStatusBadge(
                      ticket.status
                    )}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        ticket.status === 'In Progress'
                          ? 'bg-blue-500 animate-pulse'
                          : ticket.status === 'Resolved'
                          ? 'bg-emerald-500'
                          : 'bg-amber-500'
                      }`}
                    ></span>
                    {ticket.status}
                  </span>
                </td>

                {/* Last Update */}
                <td className="py-3 px-3 text-slate-500 text-[11px]">
                  {ticket.lastUpdate}
                </td>

                {/* Action */}
                <td className="py-3 px-3 text-right">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onViewTicket?.(ticket);
                    }}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline inline-flex items-center gap-0.5"
                  >
                    <span>View</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
