import React, { useState } from 'react';
import {
  Plus,
  Settings,
  Plane,
  Handshake,
  Tag,
  Briefcase,
  ChevronDown,
  Shield,
  FileCheck,
  Armchair,
  Utensils,
  ShoppingBag,
  CircleParking,
  Key,
  Compass
} from 'lucide-react';

interface AdminAirportRightSidebarProps {
  onQuickAction?: (actionId: string, title: string) => void;
  onFacilityClick?: (facilityName: string) => void;
}

export const AdminAirportRightSidebar: React.FC<AdminAirportRightSidebarProps> = ({
  onQuickAction,
  onFacilityClick
}) => {
  const [selectedAirport, setSelectedAirport] = useState('Riyadh (RUH)');
  const [activeTab, setActiveTab] = useState<'map' | 'facilities'>('map');

  const quickActions = [
    { id: 'new-booking', title: 'New Service Booking', icon: Plus, isPrimary: true },
    { id: 'manage-services', title: 'Manage Services', icon: Briefcase },
    { id: 'flight-status', title: 'Flight Status', icon: Plane },
    { id: 'pricing-rules', title: 'Set Pricing & Rules', icon: Settings },
    { id: 'manage-partners', title: 'Manage Airport Partners', icon: Handshake },
    { id: 'promo-packages', title: 'Promo & Packages', icon: Tag }
  ];

  const facilities = [
    { id: 'checkin', name: 'Check-in', icon: Briefcase, color: 'text-purple-600 bg-purple-50' },
    { id: 'security', name: 'Security', icon: Shield, color: 'text-amber-600 bg-amber-50' },
    { id: 'immigration', name: 'Immigration', icon: FileCheck, color: 'text-rose-600 bg-rose-50' },
    { id: 'lounge', name: 'Lounge', icon: Armchair, color: 'text-blue-600 bg-blue-50' },
    { id: 'dining', name: 'Dining', icon: Utensils, color: 'text-emerald-600 bg-emerald-50' },
    { id: 'shops', name: 'Shops', icon: ShoppingBag, color: 'text-pink-600 bg-pink-50' },
    { id: 'parking', name: 'Parking', icon: CircleParking, color: 'text-sky-600 bg-sky-50' },
    { id: 'rental', name: 'Car Rental', icon: Key, color: 'text-teal-600 bg-teal-50' },
    { id: 'prayer', name: 'Prayer Room', icon: Compass, color: 'text-indigo-600 bg-indigo-50' }
  ];

  return (
    <div className="space-y-4">
      {/* 1. Quick Actions Card */}
      <div className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/90 shadow-sm">
        <h3 className="text-xs font-bold text-slate-900 mb-2.5">
          Quick Actions
        </h3>

        <div className="space-y-1.5">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                onClick={() => onQuickAction && onQuickAction(action.id, action.title)}
                className="w-full flex items-center justify-between p-2 rounded-lg border border-slate-100 hover:border-emerald-200 bg-slate-50/70 hover:bg-emerald-50/50 text-slate-700 hover:text-emerald-900 text-[11px] font-semibold transition-all group cursor-pointer shadow-2xs"
              >
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-600 group-hover:text-emerald-700 group-hover:border-emerald-300">
                    <Icon className="w-3 h-3" />
                  </div>
                  <span>{action.title}</span>
                </div>
                <Plus className="w-3 h-3 text-slate-400 group-hover:text-emerald-700" />
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Airport Map & Facilities Card */}
      <div className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/90 shadow-sm overflow-hidden">
        {/* Header with Selector and Tabs */}
        <div className="space-y-2 mb-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-900 whitespace-nowrap">
              Airport Map & Facilities
            </h3>
            <div className="relative">
              <select
                value={selectedAirport}
                onChange={(e) => setSelectedAirport(e.target.value)}
                className="text-[9.5px] bg-slate-50 border border-slate-200 rounded-md pl-2 pr-5 py-0.5 text-slate-700 font-semibold focus:outline-none appearance-none cursor-pointer"
              >
                <option>Riyadh (RUH)</option>
                <option>Jeddah (JED)</option>
                <option>Madinah (MED)</option>
                <option>Dammam (DMM)</option>
              </select>
              <ChevronDown className="w-2.5 h-2.5 text-slate-400 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Map / Facilities Switcher */}
          <div className="flex items-center gap-1 p-0.5 bg-slate-100 rounded-lg">
            <button
              onClick={() => setActiveTab('map')}
              className={`flex-1 py-1 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                activeTab === 'map'
                  ? 'bg-[#0e5f2c] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Map
            </button>
            <button
              onClick={() => setActiveTab('facilities')}
              className={`flex-1 py-1 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                activeTab === 'facilities'
                  ? 'bg-[#0e5f2c] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Facilities
            </button>
          </div>
        </div>

        {/* Airport Aerial Terminal Map Widget */}
        <div className="relative h-44 rounded-xl overflow-hidden bg-slate-950 border border-slate-200 shadow-inner flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=80"
            alt="Airport Terminal View"
            className="w-full h-full object-cover opacity-60"
          />

          {/* SVG Visual Apron / Runway Overlay */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 260 160">
            {/* Runway / Taxiways */}
            <path
              d="M 10 140 L 250 140"
              stroke="#e2e8f0"
              strokeWidth="4"
              strokeDasharray="10 6"
              opacity="0.8"
            />
            <path
              d="M 40 40 Q 130 90, 220 40"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="3"
              opacity="0.7"
            />
            <path
              d="M 130 90 L 130 140"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeDasharray="4 4"
              opacity="0.7"
            />

            {/* Service Pins with Tooltip Rings */}
            {/* VIP Lounge Pin */}
            <g transform="translate(60, 45)">
              <circle cx="0" cy="0" r="8" fill="#ef4444" opacity="0.9" />
              <circle cx="0" cy="0" r="14" fill="#ef4444" opacity="0.2" className="animate-ping" />
              <text x="0" y="3" fontSize="7" fontWeight="bold" fill="#ffffff" textAnchor="middle">
                L
              </text>
            </g>

            {/* Meet & Assist Gate Pin */}
            <g transform="translate(130, 85)">
              <circle cx="0" cy="0" r="9" fill="#0284c7" opacity="0.9" />
              <text x="0" y="3" fontSize="7" fontWeight="bold" fill="#ffffff" textAnchor="middle">
                G1
              </text>
            </g>

            {/* Fast Track Immigration Pin */}
            <g transform="translate(200, 45)">
              <circle cx="0" cy="0" r="8" fill="#8b5cf6" opacity="0.9" />
              <text x="0" y="3" fontSize="7" fontWeight="bold" fill="#ffffff" textAnchor="middle">
                FT
              </text>
            </g>

            {/* Transfer / Valet Area */}
            <g transform="translate(180, 115)">
              <circle cx="0" cy="0" r="7" fill="#10b981" opacity="0.9" />
              <text x="0" y="2.5" fontSize="6.5" fontWeight="bold" fill="#ffffff" textAnchor="middle">
                P
              </text>
            </g>
          </svg>

          {/* Live Status Floating Tag */}
          <div className="absolute left-2.5 bottom-2.5 bg-slate-900/90 backdrop-blur-md px-2 py-0.5 rounded border border-slate-700 text-[8.5px] font-semibold text-emerald-400 flex items-center gap-1 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Terminal 5 • Active
          </div>
        </div>

        {/* 9 Facilities Badges Grid */}
        <div className="grid grid-cols-3 gap-1.5 pt-3 border-t border-slate-100 mt-3">
          {facilities.map((fac) => {
            const FacIcon = fac.icon;
            return (
              <button
                key={fac.id}
                onClick={() => onFacilityClick && onFacilityClick(fac.name)}
                className="flex items-center gap-1.5 p-1 rounded-md hover:bg-slate-50 transition-colors text-left group cursor-pointer"
              >
                <div
                  className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 ${fac.color} group-hover:scale-105 transition-transform`}
                >
                  <FacIcon className="w-3 h-3" />
                </div>
                <span className="text-[9px] font-medium text-slate-700 truncate group-hover:text-emerald-800">
                  {fac.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
