import React from 'react';
import {
  CalendarDays,
  Car,
  Compass,
  ShoppingBag,
  Headphones,
  ArrowRight,
  Download,
  Plane,
  Building2,
  Bus,
  FileText,
  ShieldCheck
} from 'lucide-react';
import { BOOKINGS_OVERVIEW, TRAVEL_DOCUMENTS } from '../../data/myTripsData';
import { BookingOverviewItem } from '../../types/myTrips';

interface MyTripsOverviewSectionProps {
  onQuickAction: (actionId: string) => void;
  onSelectBooking: (item: BookingOverviewItem) => void;
  onDownloadDoc: (docId: string) => void;
}

export const MyTripsOverviewSection: React.FC<MyTripsOverviewSectionProps> = ({
  onQuickAction,
  onSelectBooking,
  onDownloadDoc
}) => {
  const quickActions = [
    {
      id: 'modify',
      title: 'Modify Booking',
      desc: 'Change date or details',
      icon: CalendarDays,
      color: 'bg-emerald-50 text-emerald-800'
    },
    {
      id: 'transport',
      title: 'Add Transport',
      desc: 'Book car, bus or taxi',
      icon: Car,
      color: 'bg-emerald-50 text-emerald-800'
    },
    {
      id: 'activity',
      title: 'Add Activity',
      desc: 'Ziyarat, tour, etc.',
      icon: Compass,
      color: 'bg-emerald-50 text-emerald-800'
    },
    {
      id: 'jastip',
      title: 'Request Jastip',
      desc: 'Personal shopper',
      icon: ShoppingBag,
      color: 'bg-emerald-50 text-emerald-800'
    },
    {
      id: 'support',
      title: 'Contact Support',
      desc: 'Get help anytime',
      icon: Headphones,
      color: 'bg-emerald-50 text-emerald-800'
    }
  ];

  return (
    <div className="space-y-8 my-6">
      {/* 1. Quick Actions Row */}
      <div>
        <h3 className="text-base font-bold text-slate-900 font-serif mb-3">Quick Actions</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {quickActions.map((act) => {
            const Icon = act.icon;
            return (
              <button
                key={act.id}
                onClick={() => onQuickAction(act.id)}
                className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-2xl hover:border-emerald-500 hover:shadow-sm transition-all text-left group"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${act.color} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-900 leading-tight">
                    {act.title}
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">{act.desc}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Bookings Overview (4 Cards) */}
      <div>
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
          <h3 className="text-base font-bold text-slate-900 font-serif">Bookings Overview</h3>
          <button
            onClick={() => alert('Viewing full list of confirmed bookings')}
            className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors group"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BOOKINGS_OVERVIEW.map((b) => (
            <div
              key={b.id}
              onClick={() => onSelectBooking(b)}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-emerald-600 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-28 w-full overflow-hidden bg-slate-100">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-bold rounded-md bg-black/60 text-white backdrop-blur-xs">
                    {b.category} ({b.count})
                  </span>
                </div>

                <div className="p-3">
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-900 leading-tight">
                    {b.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5 truncate">
                    {b.dateRange}
                  </p>
                </div>
              </div>

              <div className="p-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span
                  className={`px-2 py-0.5 text-[10px] font-bold rounded-md ${
                    b.status === 'Confirmed'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {b.status}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 group-hover:text-emerald-950">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Travel Documents Row (5 Cards) */}
      <div>
        <h3 className="text-base font-bold text-slate-900 font-serif mb-3">Travel Documents</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {TRAVEL_DOCUMENTS.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-2xl hover:border-emerald-500 hover:shadow-xs transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0">
                  {doc.iconType === 'flight' && <Plane className="w-4 h-4" />}
                  {doc.iconType === 'hotel' && <Building2 className="w-4 h-4" />}
                  {doc.iconType === 'transport' && <Car className="w-4 h-4" />}
                  {doc.iconType === 'visa' && <FileText className="w-4 h-4" />}
                  {doc.iconType === 'insurance' && <ShieldCheck className="w-4 h-4" />}
                </div>

                <div className="truncate">
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-900 truncate">
                    {doc.title}
                  </h4>
                  <p className="text-[10px] text-slate-400 truncate">{doc.subTitle}</p>
                </div>
              </div>

              <button
                onClick={() => onDownloadDoc(doc.id)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-800 hover:bg-emerald-50 transition-colors"
                title="Download Document PDF"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
