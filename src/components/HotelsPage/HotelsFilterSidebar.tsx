import React, { useState } from 'react';
import {
  Star,
  Wifi,
  Coffee,
  Bus,
  Users,
  Car,
  Utensils,
  Clock,
  Accessibility,
  Waves,
  Dumbbell,
  Building,
  Home,
  RotateCcw
} from 'lucide-react';

interface HotelsFilterSidebarProps {
  onFilterChange?: (filters: any) => void;
}

export const HotelsFilterSidebar: React.FC<HotelsFilterSidebarProps> = ({ onFilterChange }) => {
  const [maxPrice, setMaxPrice] = useState(2000);
  const [selectedStars, setSelectedStars] = useState<number[]>([5, 4]);
  const [selectedDistance, setSelectedDistance] = useState<string[]>(['< 1 km']);
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>(['Free WiFi', 'Breakfast Included']);
  const [selectedTypes, setSelectedTypes] = useState<string[]>(['Hotel']);

  const handleReset = () => {
    setMaxPrice(2000);
    setSelectedStars([]);
    setSelectedDistance([]);
    setSelectedFacilities([]);
    setSelectedTypes([]);
  };

  const toggleStar = (star: number) => {
    setSelectedStars((prev) =>
      prev.includes(star) ? prev.filter((s) => s !== star) : [...prev, star]
    );
  };

  const toggleDistance = (d: string) => {
    setSelectedDistance((prev) =>
      prev.includes(d) ? prev.filter((item) => item !== d) : [...prev, d]
    );
  };

  const toggleFacility = (f: string) => {
    setSelectedFacilities((prev) =>
      prev.includes(f) ? prev.filter((item) => item !== f) : [...prev, f]
    );
  };

  const toggleType = (t: string) => {
    setSelectedTypes((prev) =>
      prev.includes(t) ? prev.filter((item) => item !== t) : [...prev, t]
    );
  };

  return (
    <div className="p-5 bg-white border border-slate-200 rounded-3xl shadow-xs space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <h3 className="text-base font-bold text-slate-900 font-serif">Filter Hotels</h3>
        <button
          onClick={handleReset}
          className="text-xs font-bold text-emerald-700 hover:text-emerald-950 flex items-center gap-1"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* 1. Price Range */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-slate-800">Price Range</span>
          <span className="text-[11px] text-slate-500 font-medium">(per night)</span>
        </div>
        <div className="text-xs font-bold text-emerald-800 mb-2 font-mono">
          SAR 0 – SAR {maxPrice >= 2000 ? '2,000+' : maxPrice}
        </div>
        <input
          type="range"
          min="100"
          max="2000"
          step="50"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-emerald-700 cursor-pointer"
        />
      </div>

      {/* 2. Star Rating */}
      <div className="pt-2 border-t border-slate-100">
        <h4 className="text-xs font-bold text-slate-800 mb-3">Star Rating</h4>
        <div className="space-y-2">
          {[
            { stars: 5, count: 420 },
            { stars: 4, count: 680 },
            { stars: 3, count: 620 },
            { stars: 2, count: 210 },
            { stars: 1, count: 90 },
          ].map((item) => (
            <label
              key={item.stars}
              className="flex items-center justify-between text-xs text-slate-700 cursor-pointer hover:text-emerald-900"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedStars.includes(item.stars)}
                  onChange={() => toggleStar(item.stars)}
                  className="rounded text-emerald-700 focus:ring-emerald-600 w-3.5 h-3.5"
                />
                <div className="flex items-center gap-0.5 text-amber-400">
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <span className="font-semibold">{item.stars} Stars</span>
              </div>
              <span className="text-[10px] text-slate-400">({item.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* 3. Distance from Center */}
      <div className="pt-2 border-t border-slate-100">
        <h4 className="text-xs font-bold text-slate-800 mb-3">Distance from Center</h4>
        <div className="space-y-2">
          {[
            { label: '< 1 km', count: 320 },
            { label: '1 – 3 km', count: 740 },
            { label: '3 – 5 km', count: 520 },
            { label: '> 5 km', count: 340 },
          ].map((dist) => (
            <label
              key={dist.label}
              className="flex items-center justify-between text-xs text-slate-700 cursor-pointer hover:text-emerald-900"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedDistance.includes(dist.label)}
                  onChange={() => toggleDistance(dist.label)}
                  className="rounded text-emerald-700 focus:ring-emerald-600 w-3.5 h-3.5"
                />
                <span className="font-medium">{dist.label}</span>
              </div>
              <span className="text-[10px] text-slate-400">({dist.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* 4. Facilities */}
      <div className="pt-2 border-t border-slate-100">
        <h4 className="text-xs font-bold text-slate-800 mb-3">Facilities</h4>
        <div className="space-y-2">
          {[
            { label: 'Free WiFi', icon: Wifi, count: 1240 },
            { label: 'Breakfast Included', icon: Coffee, count: 980 },
            { label: 'Shuttle Service', icon: Bus, count: 620 },
            { label: 'Family Room', icon: Users, count: 520 },
            { label: 'Parking', icon: Car, count: 480 },
            { label: 'Restaurant', icon: Utensils, count: 760 },
            { label: '24/7 Reception', icon: Clock, count: 1100 },
            { label: 'Accessible', icon: Accessibility, count: 210 },
            { label: 'Pool', icon: Waves, count: 320 },
            { label: 'Gym', icon: Dumbbell, count: 380 },
          ].map((fac) => {
            const Icon = fac.icon;
            return (
              <label
                key={fac.label}
                className="flex items-center justify-between text-xs text-slate-700 cursor-pointer hover:text-emerald-900"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedFacilities.includes(fac.label)}
                    onChange={() => toggleFacility(fac.label)}
                    className="rounded text-emerald-700 focus:ring-emerald-600 w-3.5 h-3.5"
                  />
                  <Icon className="w-3.5 h-3.5 text-slate-400" />
                  <span className="font-medium">{fac.label}</span>
                </div>
                <span className="text-[10px] text-slate-400">({fac.count})</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 5. Property Type */}
      <div className="pt-2 border-t border-slate-100">
        <h4 className="text-xs font-bold text-slate-800 mb-3">Property Type</h4>
        <div className="space-y-2">
          {[
            { label: 'Hotel', icon: Building, count: 1250 },
            { label: 'Apartment', icon: Home, count: 420 },
            { label: 'Villa', icon: Home, count: 180 },
            { label: 'Guest House', icon: Home, count: 120 },
          ].map((prop) => (
            <label
              key={prop.label}
              className="flex items-center justify-between text-xs text-slate-700 cursor-pointer hover:text-emerald-900"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(prop.label)}
                  onChange={() => toggleType(prop.label)}
                  className="rounded text-emerald-700 focus:ring-emerald-600 w-3.5 h-3.5"
                />
                <span className="font-medium">{prop.label}</span>
              </div>
              <span className="text-[10px] text-slate-400">({prop.count})</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
