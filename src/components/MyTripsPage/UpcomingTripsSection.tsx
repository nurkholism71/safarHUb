import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  XCircle,
  MoreVertical,
  Plane,
  Building2,
  Bus,
  Compass,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { TripSummaryItem } from '../../types/myTrips';

interface UpcomingTripsSectionProps {
  trips: TripSummaryItem[];
  onSelectTrip: (trip: TripSummaryItem) => void;
  onManageTrip: (trip: TripSummaryItem) => void;
}

export const UpcomingTripsSection: React.FC<UpcomingTripsSectionProps> = ({
  trips,
  onSelectTrip,
  onManageTrip
}) => {
  const [activeTab, setActiveTab] = useState<'Upcoming' | 'Past' | 'Cancelled'>('Upcoming');
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  const filteredTrips = trips.filter((t) => t.status === activeTab);

  return (
    <div className="space-y-4">
      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        <button
          onClick={() => setActiveTab('Upcoming')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'Upcoming'
              ? 'bg-emerald-50 text-emerald-900 border border-emerald-300 shadow-2xs'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Calendar className="w-3.5 h-3.5 text-emerald-700" />
          <span>Upcoming Trips (2)</span>
        </button>

        <button
          onClick={() => setActiveTab('Past')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'Past'
              ? 'bg-emerald-50 text-emerald-900 border border-emerald-300 shadow-2xs'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Clock className="w-3.5 h-3.5 text-slate-500" />
          <span>Past Trips (3)</span>
        </button>

        <button
          onClick={() => setActiveTab('Cancelled')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'Cancelled'
              ? 'bg-emerald-50 text-emerald-900 border border-emerald-300 shadow-2xs'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <XCircle className="w-3.5 h-3.5 text-slate-500" />
          <span>Cancelled (0)</span>
        </button>
      </div>

      {/* Trip Cards Grid (2 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTrips.map((trip) => (
          <div
            key={trip.id}
            className="group bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-xs hover:border-emerald-600/60 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Image Banner */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold rounded-lg bg-[#0e5f2c] text-white shadow-2xs">
                  {trip.status}
                </span>

                {/* 3-Dots Menu */}
                <div className="absolute top-3 right-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveMenuId(activeMenuId === trip.id ? null : trip.id);
                    }}
                    className="w-8 h-8 rounded-full bg-white/80 hover:bg-white text-slate-700 flex items-center justify-center backdrop-blur-xs shadow-2xs transition-colors"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>

                  {activeMenuId === trip.id && (
                    <div className="absolute right-0 mt-1 w-44 bg-white border border-slate-200 rounded-xl shadow-xl py-1 z-30 text-xs font-medium text-slate-700 animate-in fade-in zoom-in-95">
                      <button
                        onClick={() => {
                          setActiveMenuId(null);
                          onSelectTrip(trip);
                        }}
                        className="w-full text-left px-3 py-1.5 hover:bg-emerald-50 text-slate-800"
                      >
                        View Full Summary
                      </button>
                      <button
                        onClick={() => {
                          setActiveMenuId(null);
                          alert(`Exporting e-tickets and vouchers for ${trip.title}`);
                        }}
                        className="w-full text-left px-3 py-1.5 hover:bg-emerald-50 text-slate-800"
                      >
                        Download PDF Pass
                      </button>
                      <button
                        onClick={() => {
                          setActiveMenuId(null);
                          alert(`Sharing trip with family/group`);
                        }}
                        className="w-full text-left px-3 py-1.5 hover:bg-emerald-50 text-slate-800"
                      >
                        Share Trip
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-serif">{trip.title}</h3>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">{trip.dateRange}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5 font-medium truncate">
                    📍 {trip.route}
                  </p>
                </div>

                {/* 4 Feature Badges */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-[11px] font-semibold text-slate-700">
                  {trip.flightsCount && (
                    <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-lg">
                      <Plane className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Flight (Confirmed)</span>
                    </div>
                  )}
                  {trip.hotelsCount && (
                    <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-lg">
                      <Building2 className="w-3.5 h-3.5 text-emerald-700" />
                      <span>
                        Hotels ({trip.hotelsCount} Booking{trip.hotelsCount > 1 ? 's' : ''})
                      </span>
                    </div>
                  )}
                  {trip.transportsCount && (
                    <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-lg">
                      <Bus className="w-3.5 h-3.5 text-emerald-700" />
                      <span>
                        Transport ({trip.transportsCount} Booking{trip.transportsCount > 1 ? 's' : ''})
                      </span>
                    </div>
                  )}
                  {trip.activitiesCount && (
                    <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-lg">
                      <Compass className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Activities ({trip.activityName})</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-4 pt-2 flex items-center gap-2 border-t border-slate-100">
              <button
                onClick={() => onSelectTrip(trip)}
                className="flex-1 py-2.5 bg-[#0e5f2c] hover:bg-[#09421e] text-white text-xs font-bold rounded-xl transition-colors text-center"
              >
                View Details
              </button>
              <button
                onClick={() => onManageTrip(trip)}
                className="flex-1 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl transition-colors text-center"
              >
                Manage Trip
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
