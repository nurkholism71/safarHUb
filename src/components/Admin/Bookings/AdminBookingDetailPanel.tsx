import React, { useState } from 'react';
import {
  X,
  Star,
  Calendar,
  BedDouble,
  User,
  Mail,
  Phone,
  FileText,
  CreditCard,
  Edit3,
  MessageSquare,
  Trash2,
  RotateCcw,
  CheckCircle2,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { AdminBookingItem } from '../../../types/adminBooking';

interface AdminBookingDetailPanelProps {
  booking: AdminBookingItem | null;
  onClose: () => void;
  onEditBooking?: (id: string) => void;
  onSendMessage?: (id: string) => void;
  onCancelBooking?: (id: string) => void;
  onIssueRefund?: (id: string) => void;
}

export const AdminBookingDetailPanel: React.FC<AdminBookingDetailPanelProps> = ({
  booking,
  onClose,
  onEditBooking,
  onSendMessage,
  onCancelBooking,
  onIssueRefund
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'customer' | 'timeline' | 'actions'>('overview');

  if (!booking) return null;

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col h-full overflow-hidden">
      {/* 1. Panel Header */}
      <div className="p-4 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <h2 className="text-base font-bold text-slate-900 font-serif">
            Booking {booking.id}
          </h2>
          <span
            className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
              booking.status === 'Confirmed'
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                : booking.status === 'Pending'
                ? 'bg-amber-50 text-amber-700 border border-amber-200'
                : booking.status === 'Cancelled'
                ? 'bg-rose-50 text-rose-700 border border-rose-200'
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}
          >
            {booking.status}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* 2. Detail Sub-Tabs */}
      <div className="flex items-center border-b border-slate-100 px-4 text-xs font-semibold text-slate-500 gap-4">
        <button
          onClick={() => setActiveTab('overview')}
          className={`py-2.5 border-b-2 transition-colors cursor-pointer ${
            activeTab === 'overview'
              ? 'border-[#0e5f2c] text-[#0e5f2c]'
              : 'border-transparent hover:text-slate-800'
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('customer')}
          className={`py-2.5 border-b-2 transition-colors cursor-pointer ${
            activeTab === 'customer'
              ? 'border-[#0e5f2c] text-[#0e5f2c]'
              : 'border-transparent hover:text-slate-800'
          }`}
        >
          Customer
        </button>
        <button
          onClick={() => setActiveTab('timeline')}
          className={`py-2.5 border-b-2 transition-colors cursor-pointer ${
            activeTab === 'timeline'
              ? 'border-[#0e5f2c] text-[#0e5f2c]'
              : 'border-transparent hover:text-slate-800'
          }`}
        >
          Timeline
        </button>
        <button
          onClick={() => setActiveTab('actions')}
          className={`py-2.5 border-b-2 transition-colors cursor-pointer ${
            activeTab === 'actions'
              ? 'border-[#0e5f2c] text-[#0e5f2c]'
              : 'border-transparent hover:text-slate-800'
          }`}
        >
          Actions
        </button>
      </div>

      {/* 3. Panel Scrollable Content Body */}
      <div className="p-4 space-y-4 overflow-y-auto flex-1 text-xs">
        {/* Service Hero Card */}
        <div className="flex gap-3 items-start bg-slate-50 p-2.5 rounded-xl border border-slate-100">
          <img
            src={booking.service.thumbnail || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=300&q=80'}
            alt={booking.details.title}
            className="w-16 h-16 rounded-lg object-cover ring-1 ring-slate-200 flex-shrink-0"
          />
          <div className="min-w-0 flex-1">
            <div className="text-[11px] font-semibold text-slate-500">
              {booking.service.sublabel}
            </div>
            <div className="text-sm font-bold text-slate-900 truncate">
              {booking.details.title}
            </div>
            <div className="flex items-center gap-1 text-[11px] text-amber-500 font-semibold mt-0.5">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{booking.service.rating || '4.8'}</span>
              <span className="text-slate-400 font-normal">
                ({booking.service.reviewCount || '1,240 reviews'})
              </span>
            </div>
          </div>
        </div>

        {/* Key Info Details Grid */}
        <div className="space-y-2.5 border-b border-slate-100 pb-3.5">
          <div className="flex items-center justify-between py-0.5">
            <span className="text-slate-500 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              Check In
            </span>
            <span className="font-semibold text-slate-800">
              {booking.details.checkIn || '7 Oct 2026 (14:00)'}
            </span>
          </div>

          <div className="flex items-center justify-between py-0.5">
            <span className="text-slate-500 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              Check Out
            </span>
            <span className="font-semibold text-slate-800">
              {booking.details.checkOut || '9 Oct 2026 (12:00)'}
            </span>
          </div>

          <div className="flex items-center justify-between py-0.5">
            <span className="text-slate-500 flex items-center gap-1.5">
              <BedDouble className="w-3.5 h-3.5 text-slate-400" />
              Rooms
            </span>
            <span className="font-semibold text-slate-800">
              {booking.details.rooms || '2 rooms (4 adults)'}
            </span>
          </div>

          <div className="flex items-center justify-between py-0.5">
            <span className="text-slate-500 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-slate-400" />
              Guest Name
            </span>
            <span className="font-semibold text-slate-800">
              {booking.details.guestName || booking.customer.name}
            </span>
          </div>

          <div className="flex items-center justify-between py-0.5">
            <span className="text-slate-500 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              Email
            </span>
            <span className="font-semibold text-slate-800">{booking.customer.email}</span>
          </div>

          <div className="flex items-center justify-between py-0.5">
            <span className="text-slate-500 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              Phone
            </span>
            <span className="font-semibold text-slate-800">
              {booking.customer.phone || '+966 50 123 4567'}
            </span>
          </div>

          <div className="flex items-start justify-between py-0.5 gap-2">
            <span className="text-slate-500 flex items-center gap-1.5 flex-shrink-0">
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              Special Request
            </span>
            <span className="font-medium text-slate-800 text-right">
              {booking.details.specialRequest || 'Near Haram, high floor'}
            </span>
          </div>
        </div>

        {/* Payment Information Section */}
        <div className="space-y-2 border-b border-slate-100 pb-3.5">
          <div className="font-bold text-slate-900 text-xs mb-2">
            Payment Information
          </div>

          <div className="flex items-center justify-between py-0.5">
            <span className="text-slate-500">Amount</span>
            <span className="font-bold text-slate-900 text-sm">{booking.amount}</span>
          </div>

          <div className="flex items-center justify-between py-0.5">
            <span className="text-slate-500">Payment Method</span>
            <span className="font-semibold text-slate-800 flex items-center gap-1">
              <span className="font-bold text-blue-700">{booking.payment.method || 'VISA'}</span>{' '}
              {booking.payment.method || 'Visa'} {booking.payment.cardLast4 ? `**** ${booking.payment.cardLast4}` : ''}
            </span>
          </div>

          <div className="flex items-center justify-between py-0.5">
            <span className="text-slate-500">Payment Status</span>
            <span
              className={`font-semibold ${
                booking.payment.status === 'Paid'
                  ? 'text-emerald-700'
                  : booking.payment.status === 'Refunded'
                  ? 'text-rose-600'
                  : 'text-amber-600'
              }`}
            >
              {booking.payment.status}
            </span>
          </div>

          <div className="flex items-center justify-between py-0.5">
            <span className="text-slate-500">Paid At</span>
            <span className="font-medium text-slate-600">{booking.payment.paidAt || '6 Oct 2026, 10:24'}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-1">
          <button
            onClick={() => onEditBooking && onEditBooking(booking.id)}
            className="w-full py-2.5 px-3 bg-[#0e5f2c] hover:bg-[#0a4620] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit Booking</span>
          </button>

          <button
            onClick={() => onSendMessage && onSendMessage(booking.id)}
            className="w-full py-2 px-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 shadow-2xs transition-colors cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Send Message</span>
          </button>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => onCancelBooking && onCancelBooking(booking.id)}
              className="py-2 px-2 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Cancel Booking</span>
            </button>

            <button
              onClick={() => onIssueRefund && onIssueRefund(booking.id)}
              className="py-2 px-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Issue Refund</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
