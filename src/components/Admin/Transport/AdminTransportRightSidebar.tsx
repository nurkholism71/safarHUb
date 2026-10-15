import React from 'react';
import {
  Plus,
  ArrowRight,
  Plane,
  Bus,
  Car,
  Train,
  PlaneTakeoff,
  MapPin
} from 'lucide-react';
import { ADMIN_TRANSPORT_DESTINATIONS } from '../../../data/adminTransportData';

interface AdminTransportRightSidebarProps {
  onQuickAction?: (actionId: string, title: string) => void;
  onViewAllDestinations?: () => void;
  onViewAllMap?: () => void;
}

export const AdminTransportRightSidebar: React.FC<AdminTransportRightSidebarProps> = ({
  onQuickAction,
  onViewAllDestinations,
  onViewAllMap
}) => {
  const quickActions = [
    { id: 'flight', title: 'Add Flight Route', icon: Plane },
    { id: 'bus', title: 'Add Bus Route', icon: Bus },
    { id: 'car', title: 'Add Private Car', icon: Car },
    { id: 'train', title: 'Add Train Route', icon: Train },
    { id: 'airport', title: 'Add Airport Transfer', icon: PlaneTakeoff },
    { id: 'rental', title: 'Add Car Rental', icon: Car }
  ];

  return (
    <div className="space-y-5">
      {/* 1. Quick Actions Card */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm">
        <h3 className="text-sm font-bold text-slate-900 mb-3">
          Quick Actions
        </h3>

        <div className="space-y-2">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                onClick={() => onQuickAction && onQuickAction(action.id, action.title)}
                className="w-full flex items-center justify-between p-2.5 rounded-lg border border-slate-100 hover:border-emerald-200 bg-slate-50/70 hover:bg-emerald-50/50 text-slate-700 hover:text-emerald-900 text-xs font-semibold transition-all group cursor-pointer shadow-2xs"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-600 group-hover:text-emerald-700 group-hover:border-emerald-300">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span>{action.title}</span>
                </div>
                <Plus className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700" />
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Top Destinations Card */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-slate-900">
            Top Destinations
          </h3>
          <button
            onClick={onViewAllDestinations}
            className="text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 transition-colors cursor-pointer"
          >
            View All <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="space-y-2.5">
          {ADMIN_TRANSPORT_DESTINATIONS.map((dest, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-1.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-9 h-9 rounded-lg object-cover ring-1 ring-slate-200 flex-shrink-0"
                />
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-900 truncate group-hover:text-emerald-800 transition-colors">
                    {dest.name}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate">
                    {dest.bookings}
                  </div>
                </div>
              </div>

              <span className="text-xs font-bold text-slate-800 flex-shrink-0">
                {dest.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Transport Interactive Map Widget */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-slate-900">
            Transport Map
          </h3>
          <button
            onClick={onViewAllMap}
            className="text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 transition-colors cursor-pointer"
          >
            View All <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Map Visual Box */}
        <div className="relative h-44 rounded-xl overflow-hidden bg-[#eaf4fb] border border-slate-200 flex items-center justify-center p-2">
          {/* Subtle Map SVG Background */}
          <svg className="w-full h-full" viewBox="0 0 260 160">
            {/* Background coast line */}
            <path
              d="M 20 10 Q 50 80, 80 150 L 10 150 L 10 10 Z"
              fill="#d4eaf7"
              opacity="0.6"
            />

            {/* Connecting Route Lines */}
            {/* Madinah to Makkah (Train/Bus) */}
            <line x1="70" y1="35" x2="80" y2="120" stroke="#10b981" strokeWidth="2.5" strokeDasharray="3 3" />
            {/* Jeddah to Makkah */}
            <line x1="50" y1="100" x2="80" y2="120" stroke="#f59e0b" strokeWidth="2" />
            {/* Riyadh to Jeddah (Flight) */}
            <line x1="200" y1="75" x2="50" y2="100" stroke="#0284c7" strokeWidth="2" strokeDasharray="4 2" />
            {/* Riyadh to Makkah */}
            <line x1="200" y1="75" x2="80" y2="120" stroke="#8b5cf6" strokeWidth="1.5" />

            {/* City Nodes */}
            {/* Madinah */}
            <circle cx="70" cy="35" r="5" fill="#10b981" stroke="#fff" strokeWidth="1.5" />
            <text x="78" y="38" fontSize="9" fontWeight="bold" fill="#0f172a">Madinah</text>

            {/* Riyadh */}
            <circle cx="200" cy="75" r="6" fill="#0284c7" stroke="#fff" strokeWidth="1.5" />
            <text x="180" y="65" fontSize="9" fontWeight="bold" fill="#0f172a">Riyadh</text>

            {/* Jeddah */}
            <circle cx="50" cy="100" r="5" fill="#f59e0b" stroke="#fff" strokeWidth="1.5" />
            <text x="18" y="103" fontSize="9" fontWeight="bold" fill="#0f172a">Jeddah</text>

            {/* Makkah */}
            <circle cx="80" cy="120" r="6" fill="#ef4444" stroke="#fff" strokeWidth="1.5" />
            <text x="88" y="125" fontSize="9" fontWeight="bold" fill="#0f172a">Makkah</text>
          </svg>

          {/* Map Transit Type Legend Floating Overlay */}
          <div className="absolute right-2 top-2 bg-white/90 backdrop-blur-xs p-1.5 rounded-lg border border-slate-200 shadow-xs space-y-1 text-[10px] font-semibold text-slate-700">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
              <span>Flight</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10b981]" />
              <span>Bus</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
              <span>Car</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#8b5cf6]" />
              <span>Train</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
