import React, { useState } from 'react';
import {
  Search,
  Bell,
  MessageSquare,
  Globe,
  MoreVertical,
  Menu,
  Check,
  ExternalLink,
  ChevronDown,
  UserCheck
} from 'lucide-react';

interface TopNavbarProps {
  onToggleSidebar: () => void;
  onSearch: (query: string) => void;
  onOpenNotifications: () => void;
  activeView: string;
  setActiveView: (view: string) => void;
  unreadCount?: number;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  onToggleSidebar,
  onSearch,
  onOpenNotifications,
  activeView,
  setActiveView,
  unreadCount = 6
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN');

  const navLinks = [
    { id: 'dashboard', label: 'Home' },
    { id: 'hotels', label: 'Hotels' },
    { id: 'transport', label: 'Transport' },
    { id: 'airport', label: 'Airport' },
    { id: 'jastip', label: 'Jastip' },
    { id: 'umrah', label: 'Umrah' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'city-guide', label: 'City Guide' },
    { id: 'deals', label: 'Deals & Promo' },
  ];

  const languages = [
    { code: 'EN', name: 'English', native: 'English' },
    { code: 'AR', name: 'Arabic', native: 'العربية' },
    { code: 'ID', name: 'Indonesian', native: 'Bahasa Indonesia' },
    { code: 'MS', name: 'Malay', native: 'Bahasa Melayu' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Primary Top Row */}
      <div className="flex items-center justify-between px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 max-w-full">
        {/* Left: 3-Dots / Menu Sidebar Trigger + Brand Logo */}
        <div className="flex items-center gap-2 sm:gap-3.5 min-w-0">
          {/* The 3-Dots / Menu Button to open Popup Sidebar */}
          <button
            onClick={onToggleSidebar}
            className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 transition-all shadow-xs flex-shrink-0"
            title="Open Menu / Sidebar"
            aria-label="Toggle Sidebar Menu"
          >
            <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5 transition-transform" />
          </button>

          {/* Brand Logo */}
          <div
            onClick={() => setActiveView('dashboard')}
            className="flex items-center gap-1.5 sm:gap-2.5 cursor-pointer select-none group min-w-0"
          >
            <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 shadow-md flex-shrink-0">
              <span className="text-base sm:text-lg font-bold text-emerald-950 font-serif">S</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5 min-w-0">
              <span className="text-sm sm:text-lg font-bold tracking-tight text-slate-900 font-serif group-hover:text-emerald-800 transition-colors truncate">
                SafarHub
              </span>
              <span className="hidden sm:inline-block text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-1.5 py-0.2 rounded border border-amber-300 flex-shrink-0">
                SAUDI
              </span>
            </div>
          </div>
        </div>

        {/* Center: Main Navigation Menu Links (Desktop) */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeView === link.id || (link.id === 'dashboard' && (activeView === 'home' || activeView === 'dashboard'));
            return (
              <button
                key={link.id}
                onClick={() => setActiveView(link.id)}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  isActive
                    ? 'text-emerald-900 bg-emerald-50 font-extrabold border-b-2 border-emerald-700'
                    : 'text-slate-600 hover:text-emerald-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Partner, Search, Lang, Sign In / Profile */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
          {/* Search Trigger */}
          <button
            onClick={() => {
              const query = prompt('Search hotels, packages, transport across Saudi Arabia:');
              if (query) onSearch(query);
            }}
            className="p-1.5 sm:p-2 text-slate-600 hover:text-emerald-800 hover:bg-slate-100 rounded-xl transition-colors flex-shrink-0"
            title="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1.5 text-xs font-semibold text-slate-700 rounded-xl hover:bg-slate-100 border border-slate-200 transition-colors flex-shrink-0"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-700" />
              <span className="text-[11px] sm:text-xs">{selectedLang}</span>
              <ChevronDown className="w-3 h-3 text-slate-400 hidden xs:inline" />
            </button>

            {showLanguageMenu && (
              <div className="absolute right-0 top-full mt-2 w-48 py-1.5 bg-white border border-slate-200 rounded-xl shadow-xl z-50 animate-in fade-in zoom-in-95">
                <div className="px-3 py-1 text-[10px] font-bold uppercase text-slate-400">Select Language</div>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang.code);
                      setShowLanguageMenu(false);
                    }}
                    className="flex items-center justify-between w-full px-3 py-2 text-xs text-left hover:bg-emerald-50 text-slate-700 hover:text-emerald-800"
                  >
                    <div>
                      <span className="font-semibold">{lang.name}</span>
                      <span className="ml-1 text-[11px] text-slate-400 font-arabic">({lang.native})</span>
                    </div>
                    {selectedLang === lang.code && <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Become a Partner Outline Button */}
          <button
            onClick={() => alert('Opening SafarHub Saudi B2B Partner Portal')}
            className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-emerald-900 border border-slate-300 hover:border-emerald-700 rounded-xl transition-all"
          >
            Become a Partner
          </button>

          {/* Sign In / User Profile Button */}
          <button
            onClick={() => setShowUserDropdown(!showUserDropdown)}
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 bg-[#0e5f2c] hover:bg-[#09421e] text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-950/20 transition-all active:scale-95 flex-shrink-0 whitespace-nowrap"
          >
            <span>Sign In</span>
          </button>

          {/* User Popover */}
          {showUserDropdown && (
            <div className="absolute right-3 sm:right-8 top-full mt-2 w-56 p-2 bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 animate-in fade-in zoom-in-95">
              <div className="px-3 py-2 bg-emerald-50/70 rounded-xl mb-2">
                <p className="text-xs font-bold text-emerald-950">Muhammad Al-Fatih</p>
                <p className="text-[11px] text-emerald-700 font-medium">VIP Tier • 1,420 Points</p>
              </div>

              <div className="space-y-0.5 text-xs text-slate-700">
                <button
                  onClick={() => {
                    setShowUserDropdown(false);
                    setActiveView('admin');
                  }}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-lg bg-emerald-50/70 hover:bg-emerald-100/70 text-emerald-900 font-bold border border-emerald-200/60"
                >
                  <span className="flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-emerald-700" />
                    Admin Dashboard
                  </span>
                  <span className="px-1.5 py-0.5 text-[9px] font-bold bg-[#0e5f2c] text-white rounded">Super Admin</span>
                </button>
                <button
                  onClick={() => {
                    setShowUserDropdown(false);
                    setActiveView('hotels');
                  }}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-slate-100"
                >
                  <span>Hotel Bookings</span>
                  <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-emerald-100 text-emerald-800 rounded">Active</span>
                </button>
                <button
                  onClick={() => setShowUserDropdown(false)}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-slate-100"
                >
                  <span>My Vouchers & Wallet</span>
                </button>
                <div className="my-1 border-t border-slate-100"></div>
                <button
                  onClick={() => {
                    setShowUserDropdown(false);
                    alert('Signed out successfully.');
                  }}
                  className="w-full px-3 py-2 text-left text-rose-600 rounded-lg hover:bg-rose-50 font-medium"
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile & Tablet Rooms Navigation Pill Bar (Scrolls horizontally, never overflows) */}
      <div className="xl:hidden border-t border-slate-100/90 bg-white/95 px-3 py-1.5 overflow-x-auto no-scrollbar scrollbar-none flex items-center gap-1.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]">
        {navLinks.map((link) => {
          const isActive = activeView === link.id || (link.id === 'dashboard' && (activeView === 'home' || activeView === 'dashboard'));
          return (
            <button
              key={link.id}
              onClick={() => setActiveView(link.id)}
              className={`px-3 py-1 text-xs font-semibold rounded-lg whitespace-nowrap transition-all flex-shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-[#0e5f2c] text-white shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 bg-slate-50/80 border border-slate-200/70'
              }`}
            >
              {link.label}
            </button>
          );
        })}
      </div>
    </header>
  );
};
