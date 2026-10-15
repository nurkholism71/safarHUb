import React from 'react';
import {
  Compass,
  CalendarCheck,
  Map,
  CreditCard,
  Users,
  MessageSquare,
  User,
  Bookmark,
  Tag,
  Star,
  HelpCircle,
  ArrowRight,
  Settings
} from 'lucide-react';

interface MyTripsSidebarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onPlanTrip?: () => void;
  promoTitle?: string;
  promoSubtitle?: string;
  promoButtonText?: string;
  showPromo?: boolean;
}

export const MyTripsSidebar: React.FC<MyTripsSidebarProps> = ({
  activeTab,
  onSelectTab,
  onPlanTrip,
  promoTitle = 'Plan a New Trip',
  promoSubtitle = 'Explore Umrah packages, hotels, transport and more.',
  promoButtonText = 'Book Now',
  showPromo = true
}) => {
  const navItems = [
    { id: 'trips', label: 'My Trips', icon: Compass },
    { id: 'bookings', label: 'Bookings', icon: CalendarCheck },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'saved', label: 'Saved Items', icon: Bookmark },
    { id: 'deals', label: 'Deals & Promo', icon: Tag },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'support', label: 'Support', icon: HelpCircle }
  ];

  return (
    <div className="space-y-5">
      {/* Navigation List */}
      <div className="bg-white border border-slate-200/90 rounded-3xl p-3 shadow-xs space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`flex items-center gap-3 w-full px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                isActive
                  ? 'bg-emerald-50 text-emerald-900 border border-emerald-200 shadow-2xs font-extrabold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Icon
                className={`w-4 h-4 ${
                  isActive ? 'text-emerald-700' : 'text-slate-400'
                }`}
              />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Single Promo Card */}
      {showPromo && (
        <div className="relative overflow-hidden rounded-3xl bg-[#09261a] text-white p-5 shadow-md flex flex-col justify-between min-h-[200px] border border-emerald-900/40">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/umrah/hero_banner.jpg"
              alt="Makkah Holy Mosque & Clock Tower"
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09261a] via-[#09261a]/80 to-transparent"></div>
          </div>

          <div className="relative z-10">
            <h4 className="text-base font-bold font-serif text-amber-100 leading-tight">
              {promoTitle}
            </h4>
            <p className="text-[11px] text-emerald-200/80 mt-1.5 leading-relaxed">
              {promoSubtitle}
            </p>
          </div>

          <div className="relative z-10 pt-4">
            <button
              onClick={onPlanTrip}
              className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold rounded-xl shadow-xs transition-colors"
            >
              <span>{promoButtonText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
