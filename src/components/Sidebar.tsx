import React, { useState } from 'react';
import {
  LayoutDashboard,
  Building2,
  Bus,
  PlaneTakeoff,
  ShoppingBag,
  MoonStar,
  Compass,
  CalendarDays,
  CreditCard,
  MessageSquare,
  HelpCircle,
  MapPin,
  Sparkles,
  Tag,
  User,
  Settings,
  MoreVertical,
  X,
  LogOut,
  Shield,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
  onOpenActionModal?: (action: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  activeNav,
  setActiveNav,
  onOpenActionModal
}) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [activeItemMenu, setActiveItemMenu] = useState<string | null>(null);

  const mainNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'hotels', label: 'Hotels', icon: Building2 },
    { id: 'transport', label: 'Transport', icon: Bus },
    { id: 'airport', label: 'Airport Services', icon: PlaneTakeoff },
    { id: 'jastip', label: 'Jastip Saudi', icon: ShoppingBag },
    { id: 'umrah', label: 'Umrah Packages', icon: MoonStar },
    { id: 'my-trips', label: 'My Trips', icon: Compass },
    { id: 'bookings', label: 'Bookings', icon: CalendarDays },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'messages', label: 'Messages', icon: MessageSquare, badge: '3' },
    { id: 'support', label: 'Support', icon: HelpCircle },
  ];

  const exploreNavItems = [
    { id: 'city-guide', label: 'City Guide', icon: MapPin },
    { id: 'experiences', label: 'Experiences', icon: Sparkles },
    { id: 'deals', label: 'Deals & Promo', icon: Tag },
  ];

  const accountNavItems = [
    { id: 'admin', label: 'Admin Portal', icon: Shield, badge: 'PRO' },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleNavClick = (id: string) => {
    setActiveNav(id);
    onClose();
    const directViews = ['admin', 'dashboard', 'hotels', 'transport', 'airport', 'jastip', 'umrah', 'my-trips', 'trips', 'bookings', 'payments', 'messages', 'support', 'city-guide', 'guide', 'experiences', 'deals', 'promo', 'profile', 'settings'];
    if (onOpenActionModal && !directViews.includes(id)) {
      onOpenActionModal(id);
    }
  };

  return (
    <>
      {/* Backdrop for Pop-up Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
          onClick={onClose}
        />
      )}

      {/* Pop-up Slide-in Sidebar Drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col w-72 sm:w-80 bg-[#09261a] text-slate-200 shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Header & Close Button */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-emerald-900/60 bg-[#071f15]">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('dashboard')}>
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 shadow-lg shadow-amber-900/30">
              <span className="text-xl font-bold text-emerald-950 font-serif">S</span>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-[#09261a]"></div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-bold tracking-tight text-white font-serif">SafarHub</span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/30">SAUDI</span>
              </div>
              <p className="text-[11px] text-emerald-400/80 font-medium">B2B & VIP Travel Suite</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-emerald-900/60 transition-colors"
            aria-label="Close Sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation List */}
        <div className="flex-1 px-4 py-4 space-y-6 overflow-y-auto no-scrollbar">
          {/* Main Navigation */}
          <div className="space-y-1">
            {mainNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.id;
              return (
                <div key={item.id} className="relative group">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between w-full px-3.5 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'bg-[#15803d]/40 text-white border border-[#22c55e]/50 shadow-inner font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-emerald-950/70'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-400 group-hover:text-emerald-300'}`} />
                      <span>{item.label}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {item.badge && (
                        <span className="flex items-center justify-center w-5 h-5 text-[11px] font-bold text-white bg-rose-600 rounded-full shadow-sm">
                          {item.badge}
                        </span>
                      )}
                      {/* 3-dots trigger button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveItemMenu(activeItemMenu === item.id ? null : item.id);
                        }}
                        className="p-1 text-slate-400 hover:text-white hover:bg-emerald-800/60 rounded transition-opacity"
                        title="More options"
                      >
                        <MoreVertical className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </button>

                  {/* 3-Dots Item Popup Menu */}
                  {activeItemMenu === item.id && (
                    <div className="absolute right-2 top-10 z-50 w-48 py-1.5 bg-slate-900 border border-emerald-700/50 rounded-xl shadow-2xl text-xs text-slate-200 animate-in fade-in zoom-in-95">
                      <button
                        onClick={() => {
                          setActiveItemMenu(null);
                          handleNavClick(item.id);
                        }}
                        className="flex items-center w-full px-3 py-2 hover:bg-emerald-800/50 text-left gap-2"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                        <span>Open {item.label}</span>
                      </button>
                      <button
                        onClick={() => {
                          setActiveItemMenu(null);
                          alert(`Added ${item.label} to quick favorites!`);
                        }}
                        className="flex items-center w-full px-3 py-2 hover:bg-emerald-800/50 text-left gap-2 text-slate-300"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Add to Favorites</span>
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Explore Section */}
          <div>
            <div className="px-3 mb-2 text-[11px] font-bold uppercase tracking-wider text-emerald-400/70">
              Explore
            </div>
            <div className="space-y-1">
              {exploreNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeNav === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-3 w-full px-3.5 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                      isActive
                        ? 'bg-[#15803d]/40 text-white border border-[#22c55e]/50'
                        : 'text-slate-300 hover:text-white hover:bg-emerald-950/70'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-slate-400 group-hover:text-emerald-300" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Account Section */}
          <div>
            <div className="px-3 mb-2 text-[11px] font-bold uppercase tracking-wider text-emerald-400/70">
              Account
            </div>
            <div className="space-y-1">
              {accountNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeNav === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-3 w-full px-3.5 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                      isActive
                        ? 'bg-[#15803d]/40 text-white border border-[#22c55e]/50'
                        : 'text-slate-300 hover:text-white hover:bg-emerald-950/70'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-slate-400 group-hover:text-emerald-300" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom User Profile Section with 3-Dots Popup */}
        <div className="relative p-4 border-t border-emerald-900/60 bg-[#061c13]">
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-800/40">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="relative flex-shrink-0 w-9 h-9 overflow-hidden rounded-full ring-2 ring-amber-400/60">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                  alt="Muhammad Profile"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="truncate">
                <p className="text-xs font-semibold text-white truncate">Muhammad Rizky</p>
                <p className="text-[11px] text-amber-400/90 truncate font-medium">VIP Customer • ID 849</p>
              </div>
            </div>

            {/* 3-Dots Click Trigger */}
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-emerald-800/60 rounded-lg transition-colors"
              title="Profile menu"
            >
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>

          {/* Profile 3-Dots Pop Up Modal */}
          {showProfileMenu && (
            <div className="absolute left-4 right-4 bottom-24 z-50 p-2 bg-slate-900 border border-emerald-600/40 rounded-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-3">
              <div className="px-3 py-2 border-b border-slate-800">
                <p className="text-xs font-semibold text-white">Muhammad Rizky</p>
                <p className="text-[11px] text-slate-400">muhammad.rizky@safarhub.sa</p>
              </div>
              <div className="py-1 space-y-0.5 text-xs text-slate-300">
                <button
                  onClick={() => {
                    setShowProfileMenu(false);
                    handleNavClick('profile');
                  }}
                  className="flex items-center w-full px-3 py-2 rounded-lg hover:bg-emerald-900/50 hover:text-white gap-2.5"
                >
                  <User className="w-4 h-4 text-emerald-400" />
                  <span>View Account Profile</span>
                </button>
                <button
                  onClick={() => {
                    setShowProfileMenu(false);
                    handleNavClick('settings');
                  }}
                  className="flex items-center w-full px-3 py-2 rounded-lg hover:bg-emerald-900/50 hover:text-white gap-2.5"
                >
                  <Settings className="w-4 h-4 text-amber-400" />
                  <span>Preferences & Security</span>
                </button>
                <button
                  onClick={() => {
                    setShowProfileMenu(false);
                    alert('Verified VIP SafarPass Active!');
                  }}
                  className="flex items-center w-full px-3 py-2 rounded-lg hover:bg-emerald-900/50 hover:text-white gap-2.5"
                >
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span>SafarHub VIP Badge</span>
                </button>
                <div className="my-1 border-t border-slate-800"></div>
                <button
                  onClick={() => {
                    setShowProfileMenu(false);
                    alert('Signed out safely.');
                  }}
                  className="flex items-center w-full px-3 py-2 text-rose-400 rounded-lg hover:bg-rose-950/40 hover:text-rose-300 gap-2.5"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};
