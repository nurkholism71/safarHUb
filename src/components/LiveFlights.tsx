import React, { useState } from 'react';
import {
  Plane,
  ArrowRight,
  MoreVertical,
  Clock,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  Send,
  Bell
} from 'lucide-react';
import { LIVE_FLIGHTS } from '../data/mockData';
import { FlightItem } from '../types';

interface LiveFlightsProps {
  onSelectFlight?: (flight: FlightItem) => void;
  onViewAll?: () => void;
}

export const LiveFlights: React.FC<LiveFlightsProps> = ({
  onSelectFlight,
  onViewAll,
}) => {
  const [flightTab, setFlightTab] = useState<'arrivals' | 'departures'>('arrivals');
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  const getStatusBadge = (status: FlightItem['status']) => {
    switch (status) {
      case 'Arrived':
        return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'On Time':
        return 'text-blue-700 bg-blue-50 border-blue-200';
      case 'Delayed':
        return 'text-rose-700 bg-rose-50 border-rose-200';
      case 'Boarding':
        return 'text-amber-700 bg-amber-50 border-amber-200';
      default:
        return 'text-slate-700 bg-slate-50 border-slate-200';
    }
  };

  return (
    <div className="flex flex-col h-full p-4 sm:p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs">
      {/* Header & Tabs */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
        <div>
          <h2 className="text-base font-bold text-slate-900 font-serif">Live Flights</h2>
          <p className="text-[11px] text-slate-500">Saudi International Airports (JED/MED/RUH)</p>
        </div>
        <button
          onClick={onViewAll}
          className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors group"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Arrivals / Departures Switch */}
      <div className="flex items-center p-1 mb-3 bg-slate-100 rounded-xl">
        <button
          onClick={() => setFlightTab('arrivals')}
          className={`flex-1 py-1 text-xs font-bold rounded-lg transition-all ${
            flightTab === 'arrivals'
              ? 'bg-white text-emerald-900 shadow-xs'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Arrivals
        </button>
        <button
          onClick={() => setFlightTab('departures')}
          className={`flex-1 py-1 text-xs font-bold rounded-lg transition-all ${
            flightTab === 'departures'
              ? 'bg-white text-emerald-900 shadow-xs'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Departures
        </button>
      </div>

      {/* Flight Table */}
      <div className="flex-1 overflow-y-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
              <th className="pb-2 font-semibold">Flight</th>
              <th className="pb-2 font-semibold">{flightTab === 'arrivals' ? 'From' : 'To'}</th>
              <th className="pb-2 font-semibold">Time</th>
              <th className="pb-2 font-semibold text-right">Status</th>
              <th className="pb-2 font-semibold text-right"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {LIVE_FLIGHTS.map((flight) => {
              const location = flightTab === 'arrivals' ? flight.from.split('(')[0] : flight.to.split('(')[0];
              return (
                <tr
                  key={flight.id}
                  className="hover:bg-slate-50/80 transition-colors group cursor-pointer"
                  onClick={() => onSelectFlight && onSelectFlight(flight)}
                >
                  {/* Flight No */}
                  <td className="py-2.5 font-bold text-slate-800 whitespace-nowrap group-hover:text-emerald-900">
                    <div className="flex items-center gap-1.5">
                      <Plane className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{flight.flightNo}</span>
                    </div>
                  </td>

                  {/* Origin / Destination */}
                  <td className="py-2.5 text-slate-600 font-medium truncate max-w-[100px]">
                    {location}
                  </td>

                  {/* Time */}
                  <td className="py-2.5 font-semibold text-slate-700 whitespace-nowrap">
                    {flight.time}
                  </td>

                  {/* Status Badge */}
                  <td className="py-2.5 text-right whitespace-nowrap">
                    <span
                      className={`inline-block px-2 py-0.5 text-[10px] font-bold rounded-md border ${getStatusBadge(
                        flight.status
                      )}`}
                    >
                      {flight.status}
                    </span>
                  </td>

                  {/* 3-Dots Action Menu */}
                  <td className="py-2.5 text-right relative">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveMenuId(activeMenuId === flight.id ? null : flight.id);
                      }}
                      className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-200/80 rounded transition-colors"
                      title="Flight Options"
                    >
                      <MoreVertical className="w-3.5 h-3.5" />
                    </button>

                    {/* Pop up action */}
                    {activeMenuId === flight.id && (
                      <div className="absolute right-0 top-8 z-50 w-44 p-1.5 bg-white border border-slate-200 rounded-xl shadow-2xl animate-in fade-in zoom-in-95 text-xs text-slate-700 text-left">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveMenuId(null);
                            alert(`Radar tracking activated for ${flight.flightNo} from ${flight.from}`);
                          }}
                          className="flex items-center w-full px-2.5 py-1.5 rounded-lg hover:bg-emerald-50 hover:text-emerald-900 gap-2"
                        >
                          <Plane className="w-3.5 h-3.5 text-emerald-700" />
                          <span>Track Radar</span>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveMenuId(null);
                            alert(`Gate Alert Notification enabled for Gate ${flight.gate}, Terminal ${flight.terminal}`);
                          }}
                          className="flex items-center w-full px-2.5 py-1.5 rounded-lg hover:bg-slate-100 gap-2"
                        >
                          <Bell className="w-3.5 h-3.5 text-amber-600" />
                          <span>Gate Alert (Gate {flight.gate})</span>
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
