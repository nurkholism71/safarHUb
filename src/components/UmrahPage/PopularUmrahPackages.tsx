import React, { useState } from 'react';
import {
  Heart,
  Moon,
  MapPin,
  Plane,
  Building2,
  Bus,
  User,
  Sparkles,
  ArrowRight,
  Star
} from 'lucide-react';
import { UmrahPackage } from '../../types/umrah';

interface PopularUmrahPackagesProps {
  packages: UmrahPackage[];
  onSelectPackage: (pkg: UmrahPackage) => void;
  onViewAll: () => void;
}

export const PopularUmrahPackages: React.FC<PopularUmrahPackagesProps> = ({
  packages,
  onSelectPackage,
  onViewAll
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'makkah' | 'madinah' | 'multi' | 'ramadan'>('multi');
  const [wishlist, setWishlist] = useState<string[]>([]);

  const filterTabs = [
    { id: 'makkah', label: 'Makkah Focus' },
    { id: 'madinah', label: 'Madinah Focus' },
    { id: 'multi', label: 'Multi-City' },
    { id: 'ramadan', label: 'Ramadan Special' },
  ];

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredPackages = packages.filter((pkg) => {
    if (activeTab === 'all' || activeTab === 'multi') return true;
    return pkg.focusType === activeTab;
  });

  return (
    <div className="my-8">
      {/* Header & Tabs */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-4 mb-5 border-b border-slate-200 gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
            Popular Umrah Packages
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Curated all-inclusive spiritual itineraries with verified Haramain hotels & transport
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center p-1 bg-slate-100 rounded-xl text-xs font-bold">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#0e5f2c] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            onClick={onViewAll}
            className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors group ml-2"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* 4 Packages Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredPackages.map((pkg) => {
          const isWishlisted = wishlist.includes(pkg.id);

          return (
            <div
              key={pkg.id}
              onClick={() => onSelectPackage(pkg)}
              className="group bg-white rounded-3xl border border-slate-200 hover:border-emerald-600 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Badge */}
                  {pkg.badge && (
                    <span
                      className={`absolute top-3 left-3 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider rounded-lg shadow-sm ${pkg.badgeColor}`}
                    >
                      {pkg.badge}
                    </span>
                  )}

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => toggleWishlist(pkg.id, e)}
                    className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
                      isWishlisted
                        ? 'bg-rose-50 text-rose-600 shadow-sm'
                        : 'bg-white/80 hover:bg-white text-slate-600 hover:text-rose-500'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-600' : ''}`} />
                  </button>
                </div>

                {/* Body Content */}
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-900 font-serif leading-snug">
                      {pkg.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium">{pkg.subTitle}</p>
                  </div>

                  {/* Spec Bullet List */}
                  <div className="space-y-1.5 text-xs text-slate-600 font-medium pt-1">
                    <div className="flex items-center gap-2">
                      <Moon className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                      <span className="font-bold text-slate-800">{pkg.duration}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                      <span>
                        Makkah ({pkg.makkahNights}N) • Madinah ({pkg.madinahNights}N)
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Plane className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                      <span className="truncate">{pkg.airportHandling}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Building2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                      <span className="truncate font-semibold text-slate-800">{pkg.hotelDesc}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Bus className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                      <span className="truncate">{pkg.transportType}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                      <span className="truncate">{pkg.guideType}</span>
                    </div>

                    {pkg.extraServices && pkg.extraServices.length > 0 && (
                      <div className="flex items-center gap-2 text-amber-700 font-bold">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                        <span className="truncate">{pkg.extraServices.join(', ')}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Price & Action Button */}
              <div className="p-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">From</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-bold text-emerald-800">SAR</span>
                    <span className="text-lg font-black text-slate-900">
                      {pkg.priceSAR.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400">per person</div>
                </div>

                <button
                  onClick={() => onSelectPackage(pkg)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#0e5f2c] hover:bg-[#09421e] text-white text-xs font-bold rounded-xl shadow-xs transition-colors group-hover:shadow-md"
                >
                  <span>View Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
