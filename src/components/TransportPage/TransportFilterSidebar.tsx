import React, { useState } from 'react';
import {
  RotateCcw,
  Car,
  Bus,
  Users,
  PlaneTakeoff,
  Clock,
  Shield,
  Briefcase,
  Baby,
  Accessibility,
  Languages,
  MapPin
} from 'lucide-react';

export const TransportFilterSidebar: React.FC = () => {
  const [maxPrice, setMaxPrice] = useState(5000);
  const [selectedTypes, setSelectedTypes] = useState<string[]>(['All Types', 'Private Car']);
  const [selectedPickup, setSelectedPickup] = useState<string[]>(['Jeddah Airport (JED)']);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['Meet & Greet', 'Flight Monitoring']);
  const [selectedCapacity, setSelectedCapacity] = useState<string[]>(['4 – 6 passengers']);

  const handleReset = () => {
    setMaxPrice(5000);
    setSelectedTypes(['All Types']);
    setSelectedPickup([]);
    setSelectedFeatures([]);
    setSelectedCapacity([]);
  };

  const toggleType = (t: string) => {
    setSelectedTypes((prev) =>
      prev.includes(t) ? prev.filter((item) => item !== t) : [...prev, t]
    );
  };

  const togglePickup = (p: string) => {
    setSelectedPickup((prev) =>
      prev.includes(p) ? prev.filter((item) => item !== p) : [...prev, p]
    );
  };

  const toggleFeature = (f: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(f) ? prev.filter((item) => item !== f) : [...prev, f]
    );
  };

  const toggleCapacity = (c: string) => {
    setSelectedCapacity((prev) =>
      prev.includes(c) ? prev.filter((item) => item !== c) : [...prev, c]
    );
  };

  return (
    <div className="p-5 bg-white border border-slate-200 rounded-3xl shadow-xs space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <h3 className="text-base font-bold text-slate-900 font-serif">Filter Transport</h3>
        <button
          onClick={handleReset}
          className="text-xs font-bold text-emerald-700 hover:text-emerald-950 flex items-center gap-1"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* 1. Transport Type */}
      <div>
        <h4 className="text-xs font-bold text-slate-800 mb-3">Transport Type</h4>
        <div className="space-y-2">
          {[
            { label: 'All Types', icon: Car, count: 320 },
            { label: 'Private Car', icon: Car, count: 120 },
            { label: 'Van', icon: Car, count: 85 },
            { label: 'Bus', icon: Bus, count: 60 },
            { label: 'Coaster', icon: Bus, count: 45 },
            { label: 'Luxury Car', icon: Car, count: 30 },
            { label: 'Group Transport', icon: Users, count: 40 },
            { label: 'Taxi', icon: Car, count: 25 },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <label
                key={item.label}
                className="flex items-center justify-between text-xs text-slate-700 cursor-pointer hover:text-emerald-900"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(item.label)}
                    onChange={() => toggleType(item.label)}
                    className="rounded text-emerald-700 focus:ring-emerald-600 w-3.5 h-3.5"
                  />
                  <Icon className="w-3.5 h-3.5 text-slate-400" />
                  <span className="font-medium">{item.label}</span>
                </div>
                <span className="text-[10px] text-slate-400">({item.count})</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 2. Price Range */}
      <div className="pt-2 border-t border-slate-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-slate-800">Price Range</span>
          <span className="text-[11px] text-slate-500 font-medium">(per vehicle)</span>
        </div>
        <div className="text-xs font-bold text-emerald-800 mb-2 font-mono">
          SAR 50 – SAR {maxPrice >= 5000 ? '5,000+' : maxPrice}
        </div>
        <input
          type="range"
          min="50"
          max="5000"
          step="50"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-emerald-700 cursor-pointer"
        />
      </div>

      {/* 3. Pickup Location */}
      <div className="pt-2 border-t border-slate-100">
        <h4 className="text-xs font-bold text-slate-800 mb-3">Pickup Location</h4>
        <div className="space-y-2">
          {[
            { label: 'Jeddah Airport (JED)', count: 320 },
            { label: 'Makkah', count: 210 },
            { label: 'Madinah', count: 180 },
            { label: 'Riyadh', count: 160 },
            { label: 'Dammam', count: 90 },
            { label: 'Taif', count: 70 },
            { label: 'Abha', count: 60 },
          ].map((loc) => (
            <label
              key={loc.label}
              className="flex items-center justify-between text-xs text-slate-700 cursor-pointer hover:text-emerald-900"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedPickup.includes(loc.label)}
                  onChange={() => togglePickup(loc.label)}
                  className="rounded text-emerald-700 focus:ring-emerald-600 w-3.5 h-3.5"
                />
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-medium">{loc.label}</span>
              </div>
              <span className="text-[10px] text-slate-400">({loc.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* 4. Features */}
      <div className="pt-2 border-t border-slate-100">
        <h4 className="text-xs font-bold text-slate-800 mb-3">Features</h4>
        <div className="space-y-2">
          {[
            { label: 'Meet & Greet', icon: Users, count: 240 },
            { label: 'Flight Monitoring', icon: PlaneTakeoff, count: 220 },
            { label: 'Luggage Assistance', icon: Briefcase, count: 200 },
            { label: 'Child Seat', icon: Baby, count: 90 },
            { label: 'Wheelchair Friendly', icon: Accessibility, count: 60 },
            { label: 'English Speaking Driver', icon: Languages, count: 180 },
          ].map((f) => {
            const Icon = f.icon;
            return (
              <label
                key={f.label}
                className="flex items-center justify-between text-xs text-slate-700 cursor-pointer hover:text-emerald-900"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedFeatures.includes(f.label)}
                    onChange={() => toggleFeature(f.label)}
                    className="rounded text-emerald-700 focus:ring-emerald-600 w-3.5 h-3.5"
                  />
                  <Icon className="w-3.5 h-3.5 text-slate-400" />
                  <span className="font-medium">{f.label}</span>
                </div>
                <span className="text-[10px] text-slate-400">({f.count})</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 5. Vehicle Capacity */}
      <div className="pt-2 border-t border-slate-100">
        <h4 className="text-xs font-bold text-slate-800 mb-3">Vehicle Capacity</h4>
        <div className="space-y-2">
          {[
            { label: '1 – 3 passengers', count: 140 },
            { label: '4 – 6 passengers', count: 120 },
            { label: '7 – 12 passengers', count: 80 },
            { label: '13 – 24 passengers', count: 50 },
            { label: '25+ passengers', count: 30 },
          ].map((cap) => (
            <label
              key={cap.label}
              className="flex items-center justify-between text-xs text-slate-700 cursor-pointer hover:text-emerald-900"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedCapacity.includes(cap.label)}
                  onChange={() => toggleCapacity(cap.label)}
                  className="rounded text-emerald-700 focus:ring-emerald-600 w-3.5 h-3.5"
                />
                <span className="font-medium">{cap.label}</span>
              </div>
              <span className="text-[10px] text-slate-400">({cap.count})</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
