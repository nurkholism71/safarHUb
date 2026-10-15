import React, { useState } from 'react';
import {
  Home,
  Search,
  Bell,
  ChevronDown,
  Shield,
  Mail,
  User,
  LogOut,
  Settings,
  MoreVertical,
  ShieldCheck
} from 'lucide-react';
import { ADMIN_USER_PROFILE } from '../../data/adminData';

interface AdminHeaderProps {
  onSearch?: (query: string) => void;
  onOpenNotifications?: () => void;
  onOpenSettings?: () => void;
  onGoToDashboard?: () => void;
  onToggleSidebar?: () => void;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({
  onSearch,
  onOpenNotifications,
  onOpenSettings,
  onGoToDashboard,
  onToggleSidebar
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 px-3 sm:px-6 py-2.5 sm:py-3 shadow-sm">
      <div className="flex items-center justify-between gap-2 sm:gap-4 max-w-full">
        {/* Left: Mobile 3-Dots Popup Sidebar Button & Brand Logo */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          {onToggleSidebar && (
            <button
              onClick={onToggleSidebar}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 transition-all shadow-xs flex-shrink-0 cursor-pointer group"
              title="Open Admin Menu"
              aria-label="Toggle Admin Sidebar Menu"
            >
              <MoreVertical className="w-4 h-4 group-hover:scale-110 transition-transform text-emerald-950" />
            </button>
          )}

          {/* Mobile Admin Brand Logo */}
          <div
            onClick={onGoToDashboard}
            className="lg:hidden flex items-center gap-1.5 cursor-pointer select-none group min-w-0"
            title="Dashboard Home"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#c59b27] to-[#dfba56] flex items-center justify-center text-[#082218] shadow-xs flex-shrink-0">
              <ShieldCheck className="w-4 h-4 font-bold" />
            </div>
            <div className="min-w-0">
              <span className="font-serif font-bold text-sm text-slate-900 tracking-tight block truncate">
                SafarHub
              </span>
              <span className="text-[8px] uppercase tracking-wider text-[#d4af37] font-bold block -mt-1">
                ADMIN
              </span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="flex-1 max-w-xl min-w-0">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search bookings, users, hotels..."
              className="w-full pl-9 pr-3 py-1.5 sm:py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0e5f2c] focus:border-transparent transition-all truncate"
            />
          </div>
        </form>

        {/* Right Action Icons & Admin Profile */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Notifications Bell */}
          <button
            onClick={onOpenNotifications}
            className="relative p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            <Bell className="w-4 h-4" />
            {ADMIN_USER_PROFILE.unreadNotifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                {ADMIN_USER_PROFILE.unreadNotifications}
              </span>
            )}
          </button>

          {/* Admin User Profile Pill */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-3 pl-2 pr-3 py-1.5 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all text-left"
            >
              <div className="w-9 h-9 rounded-full bg-[#0e5f2c] text-white flex items-center justify-center font-bold text-xs shadow-sm ring-2 ring-[#0e5f2c]/20">
                AD
              </div>
              <div className="hidden sm:block">
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                  Admin
                  <Shield className="w-3 h-3 text-[#c59b27] fill-[#c59b27]" />
                </div>
                <div className="text-[11px] text-slate-500 font-medium">Super Admin</div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {/* Profile Dropdown */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-4 py-3 border-b border-slate-100">
                  <p className="text-xs text-slate-400 font-medium">Signed in as</p>
                  <p className="text-sm font-bold text-slate-900">{ADMIN_USER_PROFILE.name}</p>
                  <div className="flex items-center gap-1 text-xs text-emerald-700 font-medium mt-0.5">
                    <Mail className="w-3 h-3" />
                    <span>{ADMIN_USER_PROFILE.email}</span>
                  </div>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-semibold rounded-full border border-emerald-200">
                    {ADMIN_USER_PROFILE.role}
                  </span>
                </div>

                <div className="py-1">
                  {onGoToDashboard && (
                    <button
                      onClick={() => {
                        setShowProfileMenu(false);
                        onGoToDashboard();
                      }}
                      className="w-full flex items-center gap-2 px-4 py-2 text-xs text-slate-700 hover:bg-slate-50"
                    >
                      <Home className="w-4 h-4 text-emerald-600" />
                      Dashboard Home
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setShowProfileMenu(false);
                      if (onOpenSettings) onOpenSettings();
                    }}
                    className="w-full flex items-center gap-2 px-4 py-2 text-xs text-slate-700 hover:bg-slate-50"
                  >
                    <Settings className="w-4 h-4 text-slate-400" />
                    Admin Settings & Security
                  </button>
                  <button
                    onClick={() => setShowProfileMenu(false)}
                    className="w-full flex items-center gap-2 px-4 py-2 text-xs text-slate-700 hover:bg-slate-50"
                  >
                    <User className="w-4 h-4 text-slate-400" />
                    Account Profile
                  </button>
                </div>

                <div className="border-t border-slate-100 pt-1">
                  <button
                    onClick={() => setShowProfileMenu(false)}
                    className="w-full flex items-center gap-2 px-4 py-2 text-xs text-red-600 hover:bg-red-50 font-medium"
                  >
                    <LogOut className="w-4 h-4 text-red-500" />
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
