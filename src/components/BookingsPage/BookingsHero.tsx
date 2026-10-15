import React from 'react';
import {
  Building2,
  Bus,
  PlaneTakeoff,
  ShoppingBag,
  MoonStar,
  Compass,
  LayoutGrid,
  Plus,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface BookingsHeroProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onNewBooking: () => void;
}

export const BookingsHero: React.FC<BookingsHeroProps> = ({
  selectedCategory,
  onSelectCategory,
  onNewBooking
}) => {
  const categoryChips = [
    { id: 'hotel', label: 'Hotels', icon: Building2 },
    { id: 'transport', label: 'Transport', icon: Bus },
    { id: 'airport', label: 'Airport Services', icon: PlaneTakeoff },
    { id: 'jastip', label: 'Jastip', icon: ShoppingBag },
    { id: 'umrah', label: 'Umrah Packages', icon: MoonStar },
    { id: 'activity', label: 'Activities', icon: Compass },
    { id: 'all', label: 'All Bookings', icon: LayoutGrid }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-slate-900 text-white border-b border-slate-200">
      {/* Background Graphic & Daylight Makkah Panorama */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/umrah/hero_banner.jpg"
          alt="Makkah Holy Mosque & Clock Tower"
          className="w-full h-full object-cover object-center brightness-95 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        {/* Title & Subtitle */}
        <div className="max-w-3xl mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-2.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Unified Travel Management</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white drop-shadow-md">
            Bookings
          </h1>
          <p className="text-sm sm:text-base text-slate-200/90 mt-1.5 max-w-2xl font-medium leading-relaxed drop-shadow-xs">
            Manage all your travel bookings in one place — hotels, transport, airport services, jastip, umrah packages, and more.
          </p>
        </div>

        {/* Category Quick Chips Floating Bar */}
        <div className="bg-white/95 backdrop-blur-md p-2 rounded-2xl border border-slate-200 shadow-xl flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {categoryChips.map((chip) => {
              const Icon = chip.icon;
              const isActive = selectedCategory === chip.id;
              return (
                <button
                  key={chip.id}
                  onClick={() => onSelectCategory(chip.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#0e5f2c] text-white shadow-xs'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-300' : 'text-slate-500'}`} />
                  <span>{chip.label}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={onNewBooking}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#0e5f2c] hover:bg-[#09421e] text-white text-xs font-bold rounded-xl shadow-xs transition-colors whitespace-nowrap ml-auto"
          >
            <Plus className="w-4 h-4" />
            <span>New Booking</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
