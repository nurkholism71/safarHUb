import React, { useState } from 'react';
import {
  MoreVertical,
  ArrowRight,
  Eye,
  Download,
  PhoneCall,
  Calendar,
  XCircle,
  Share2
} from 'lucide-react';
import { UPCOMING_TRIPS } from '../data/mockData';
import { TripItem } from '../types';

interface UpcomingTripsProps {
  onSelectTrip: (trip: TripItem) => void;
  onViewAll?: () => void;
}

export const UpcomingTrips: React.FC<UpcomingTripsProps> = ({
  onSelectTrip,
  onViewAll,
}) => {
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  const getStatusStyle = (status: TripItem['status']) => {
    switch (status) {
      case 'Upcoming':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Confirmed':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Scheduled':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Processing':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  const getBadgeStyle = (type: TripItem['type']) => {
    switch (type) {
      case 'hotel':
        return 'text-amber-700';
      case 'airport':
        return 'text-emerald-700';
      case 'transport':
        return 'text-blue-700';
      case 'jastip':
        return 'text-purple-700';
      default:
        return 'text-slate-600';
    }
  };

  return (
    <div className="flex flex-col h-full p-4 sm:p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
        <div>
          <h2 className="text-base font-bold text-slate-900 font-serif">Upcoming Trips</h2>
          <p className="text-[11px] text-slate-500">Your scheduled Saudi itinerary</p>
        </div>
        <button
          onClick={onViewAll}
          className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors group"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Trips List */}
      <div className="space-y-3 flex-1 overflow-y-auto pr-1">
        {UPCOMING_TRIPS.map((trip) => {
          return (
            <div
              key={trip.id}
              className="relative flex items-center gap-3 p-2.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-200 group"
            >
              {/* Trip Image Thumbnail */}
              <div
                onClick={() => onSelectTrip(trip)}
                className="relative flex-shrink-0 w-12 h-12 overflow-hidden rounded-xl bg-slate-200 cursor-pointer"
              >
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Trip Details */}
              <div
                onClick={() => onSelectTrip(trip)}
                className="flex-1 min-w-0 cursor-pointer"
              >
                <div className={`text-[10px] font-bold uppercase tracking-wider ${getBadgeStyle(trip.type)} mb-0.5`}>
                  {trip.badge}
                </div>
                <h3 className="text-xs font-bold text-slate-800 truncate group-hover:text-emerald-900">
                  {trip.title}
                </h3>
                <p className="text-[11px] text-slate-500 truncate mt-0.5">
                  {trip.subtitle}
                </p>
              </div>

              {/* Status Badge & 3-Dots Menu Trigger */}
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <span
                  className={`px-2 py-0.5 text-[10px] font-bold rounded-lg border ${getStatusStyle(
                    trip.status
                  )}`}
                >
                  {trip.status}
                </span>

                {/* 3-Dots Click Trigger */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveMenuId(activeMenuId === trip.id ? null : trip.id);
                    }}
                    className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-200/80 rounded-lg transition-colors"
                    title="Trip Actions"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>

                  {/* 3-Dots Action Pop Up */}
                  {activeMenuId === trip.id && (
                    <div className="absolute right-0 top-8 z-50 w-48 p-1.5 bg-white border border-slate-200 rounded-xl shadow-2xl animate-in fade-in zoom-in-95 text-xs text-slate-700">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMenuId(null);
                          onSelectTrip(trip);
                        }}
                        className="flex items-center w-full px-2.5 py-1.5 rounded-lg hover:bg-emerald-50 hover:text-emerald-900 gap-2 text-left"
                      >
                        <Eye className="w-3.5 h-3.5 text-emerald-700" />
                        <span>View Details</span>
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMenuId(null);
                          alert(`Downloading official e-voucher for ${trip.title}`);
                        }}
                        className="flex items-center w-full px-2.5 py-1.5 rounded-lg hover:bg-slate-100 gap-2 text-left"
                      >
                        <Download className="w-3.5 h-3.5 text-blue-600" />
                        <span>Download Voucher</span>
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMenuId(null);
                          alert(`Contacting 24/7 dedicated support & driver for ${trip.title}`);
                        }}
                        className="flex items-center w-full px-2.5 py-1.5 rounded-lg hover:bg-slate-100 gap-2 text-left"
                      >
                        <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
                        <span>Contact Handler</span>
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMenuId(null);
                          alert(`Sharing trip itinerary with companion...`);
                        }}
                        className="flex items-center w-full px-2.5 py-1.5 rounded-lg hover:bg-slate-100 gap-2 text-left"
                      >
                        <Share2 className="w-3.5 h-3.5 text-purple-600" />
                        <span>Share Itinerary</span>
                      </button>

                      <div className="my-1 border-t border-slate-100"></div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMenuId(null);
                          alert(`Request cancellation for ${trip.title}`);
                        }}
                        className="flex items-center w-full px-2.5 py-1.5 rounded-lg hover:bg-rose-50 text-rose-600 gap-2 text-left font-medium"
                      >
                        <XCircle className="w-3.5 h-3.5" />
                        <span>Cancel Booking</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
