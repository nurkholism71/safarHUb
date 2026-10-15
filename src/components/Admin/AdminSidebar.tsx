import React from 'react';
import {
  Home,
  LayoutDashboard,
  CalendarCheck,
  Building2,
  Car,
  Plane,
  ShoppingBag,
  Luggage,
  Compass,
  MapPin,
  Tag,
  Users,
  CreditCard,
  MessageSquare,
  HelpCircle,
  Star,
  FileText,
  BarChart3,
  Megaphone,
  Settings,
  ChevronRight,
  ShieldCheck,
  LogOut,
  ExternalLink,
  X
} from 'lucide-react';

interface AdminSidebarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onSwitchToUserPortal?: () => void;
  onClose?: () => void;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({
  activeTab,
  onSelectTab,
  onSwitchToUserPortal,
  onClose
}) => {
  const handleItemClick = (tabId: string) => {
    onSelectTab(tabId);
    if (onClose) onClose();
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'bookings', label: 'Bookings', icon: CalendarCheck },
    { id: 'hotels', label: 'Hotels', icon: Building2, hasSubmenu: true },
    { id: 'transport', label: 'Transport', icon: Car, hasSubmenu: true },
    { id: 'airport', label: 'Airport Services', icon: Plane, hasSubmenu: true },
    { id: 'jastip', label: 'Jastip', icon: ShoppingBag, hasSubmenu: true },
    { id: 'umrah', label: 'Umrah Packages', icon: Luggage, hasSubmenu: true },
    { id: 'experiences', label: 'Experiences', icon: Compass, hasSubmenu: true },
    { id: 'city-guide', label: 'City Guide', icon: MapPin, hasSubmenu: true },
    { id: 'deals', label: 'Deals & Promo', icon: Tag, hasSubmenu: true },
    { id: 'users', label: 'Users', icon: Users, hasSubmenu: true },
    { id: 'payments', label: 'Payments', icon: CreditCard, hasSubmenu: true },
    { id: 'messages', label: 'Messages', icon: MessageSquare, hasSubmenu: true },
    { id: 'support', label: 'Support', icon: HelpCircle },
    { id: 'reviews', label: 'Reviews', icon: Star, hasSubmenu: true },
    { id: 'content', label: 'Content Management', icon: FileText, hasSubmenu: true },
    { id: 'analytics', label: 'Reports & Analytics', icon: BarChart3, hasSubmenu: true },
    { id: 'marketing', label: 'Marketing', icon: Megaphone, hasSubmenu: true },
    { id: 'settings', label: 'Settings', icon: Settings, hasSubmenu: true }
  ];

  return (
    <aside className="w-64 bg-[#082218] text-slate-200 flex flex-col flex-shrink-0 h-screen sticky top-0 z-40 border-r border-[#0d3324] select-none shadow-2xl lg:shadow-none">
      {/* Brand Header */}
      <div className="p-4 sm:p-5 border-b border-[#123829] flex items-center justify-between">
        <div 
          onClick={() => handleItemClick('dashboard')}
          className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity"
          title="Go to Dashboard Home"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#c59b27] to-[#dfba56] flex items-center justify-center text-[#082218] shadow-md flex-shrink-0">
            <ShieldCheck className="w-5 h-5 font-bold" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif font-bold text-lg text-white tracking-wide">SafarHub</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#d4af37] font-semibold -mt-1">
              SAUDI • ADMIN
            </div>
          </div>
        </div>

        {/* Mobile Close Button */}
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden p-1.5 text-slate-400 hover:text-white hover:bg-[#123829] rounded-lg transition-colors cursor-pointer"
            title="Close Menu"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Switch to Client Portal Pill */}
      {onSwitchToUserPortal && (
        <div className="px-4 pt-3 pb-1">
          <button
            onClick={onSwitchToUserPortal}
            className="w-full py-2 px-3 rounded-lg bg-[#113a29] hover:bg-[#164834] text-[#d4af37] text-xs font-medium flex items-center justify-between border border-[#1d4d38] transition-colors group shadow-sm"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5" />
              Switch to Client Portal
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      )}

      {/* Navigation Menu List */}
      <nav className="flex-1 px-3 py-3 space-y-1 overflow-y-auto no-scrollbar scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isHotelsActive = activeTab === 'hotels' || activeTab.startsWith('hotels-');
          const isTransportActive = activeTab === 'transport' || activeTab.startsWith('transport-');
          const isAirportActive = activeTab === 'airport' || activeTab.startsWith('airport-');
          const isJastipActive = activeTab === 'jastip' || activeTab.startsWith('jastip-');
          const isUmrahActive = activeTab === 'umrah' || activeTab.startsWith('umrah-');
          const isExperiencesActive = activeTab === 'experiences' || activeTab.startsWith('experiences-');
          const isCityGuideActive = activeTab === 'city-guide' || activeTab.startsWith('city-guide-');
          const isDealsActive = activeTab === 'deals' || activeTab.startsWith('deals-');
          const isUsersActive = activeTab === 'users' || activeTab.startsWith('users-');
          const isPaymentsActive = activeTab === 'payments' || activeTab.startsWith('payments-');
          const isMessagesActive = activeTab === 'messages' || activeTab.startsWith('messages-');
          const isReviewsActive = activeTab === 'reviews' || activeTab.startsWith('reviews-');
          const isContentActive = activeTab === 'content' || activeTab.startsWith('content-');
          const isAnalyticsActive = activeTab === 'analytics' || activeTab.startsWith('analytics-');
          const isMarketingActive = activeTab === 'marketing' || activeTab.startsWith('marketing-');
          const isSettingsActive = activeTab === 'settings' || activeTab.startsWith('settings-');
          const isActive =
            activeTab === item.id ||
            (item.id === 'hotels' && isHotelsActive) ||
            (item.id === 'transport' && isTransportActive) ||
            (item.id === 'airport' && isAirportActive) ||
            (item.id === 'jastip' && isJastipActive) ||
            (item.id === 'umrah' && isUmrahActive) ||
            (item.id === 'experiences' && isExperiencesActive) ||
            (item.id === 'city-guide' && isCityGuideActive) ||
            (item.id === 'deals' && isDealsActive) ||
            (item.id === 'users' && isUsersActive) ||
            (item.id === 'payments' && isPaymentsActive) ||
            (item.id === 'messages' && isMessagesActive) ||
            (item.id === 'reviews' && isReviewsActive) ||
            (item.id === 'content' && isContentActive) ||
            (item.id === 'analytics' && isAnalyticsActive) ||
            (item.id === 'marketing' && isMarketingActive) ||
            (item.id === 'settings' && isSettingsActive);

          const hotelSubmenu = [
            { id: 'hotels', label: '+ All Hotels' },
            { id: 'hotels-add', label: '+ Add Hotel' },
            { id: 'hotels-rooms', label: 'Room Management' },
            { id: 'hotels-rates', label: 'Availability & Rates' },
            { id: 'hotels-amenities', label: 'Amenities' },
            { id: 'hotels-reviews', label: 'Reviews' },
            { id: 'hotels-groups', label: 'Hotel Groups' },
            { id: 'hotels-categories', label: 'Categories' },
            { id: 'hotels-promos', label: 'Promotions' },
            { id: 'hotels-analytics', label: 'Hotel Analytics' },
          ];

          const transportSubmenu = [
            { id: 'transport', label: '+ Overview' },
            { id: 'transport-all', label: '+ All Transport' },
            { id: 'transport-flights', label: 'Flights' },
            { id: 'transport-buses', label: 'Buses' },
            { id: 'transport-cars', label: 'Private Cars' },
            { id: 'transport-trains', label: 'Trains' },
            { id: 'transport-airport', label: 'Airport Transfer' },
            { id: 'transport-rental', label: 'Car Rental' },
            { id: 'transport-routes', label: 'Routes & Schedules' },
            { id: 'transport-fleets', label: 'Fleets & Drivers' },
            { id: 'transport-pricing', label: 'Pricing & Rules' },
          ];

          const airportSubmenu = [
            { id: 'airport', label: '+ Overview' },
            { id: 'airport-all', label: '+ All Services' },
            { id: 'airport-meet-assist', label: 'Meet & Assist' },
            { id: 'airport-transfer', label: 'Airport Transfer' },
            { id: 'airport-lounge', label: 'Lounge Access' },
            { id: 'airport-fast-track', label: 'Fast Track' },
            { id: 'airport-baggage', label: 'Baggage Services' },
            { id: 'airport-rental', label: 'Car Rental' },
            { id: 'airport-flights', label: 'Flight Information' },
            { id: 'airport-vip', label: 'VIP Services' },
            { id: 'airport-immigration', label: 'Immigration Support' },
            { id: 'airport-special-assist', label: 'Special Assistance' },
            { id: 'airport-shop-dining', label: 'Shop & Dining' },
            { id: 'airport-parking', label: 'Parking' },
            { id: 'airport-hotels', label: 'Airport Hotels' },
            { id: 'airport-insurance', label: 'Insurance' },
            { id: 'airport-reviews', label: 'Reviews' },
          ];

          const jastipSubmenu = [
            { id: 'jastip', label: '+ Overview' },
            { id: 'jastip-create', label: '+ Create Jastip' },
            { id: 'jastip-orders', label: 'My Orders' },
            { id: 'jastip-requests', label: 'Requests from Others' },
            { id: 'jastip-shopping-list', label: 'Shopping List' },
            { id: 'jastip-calculator', label: 'Price Calculator' },
            { id: 'jastip-suppliers', label: 'Supplier & Store' },
            { id: 'jastip-delivery', label: 'Delivery & Pickup' },
            { id: 'jastip-tracking', label: 'Tracking' },
            { id: 'jastip-reviews', label: 'Reviews' },
          ];

          const umrahSubmenu = [
            { id: 'umrah', label: '+ Overview' },
            { id: 'umrah-all', label: '+ All Packages' },
            { id: 'umrah-types', label: 'Package Types' },
            { id: 'umrah-flights', label: 'Flight Options' },
            { id: 'umrah-hotels', label: 'Hotels & Facilities' },
            { id: 'umrah-visa', label: 'Visa & Documents' },
            { id: 'umrah-itinerary', label: 'Itinerary' },
            { id: 'umrah-calculator', label: 'Price Calculator' },
            { id: 'umrah-groups', label: 'Group Booking' },
            { id: 'umrah-bookings', label: 'My Bookings' },
            { id: 'umrah-reviews', label: 'Reviews' },
          ];

          const experiencesSubmenu = [
            { id: 'experiences', label: '+ Overview' },
            { id: 'experiences-all', label: '+ All Experiences' },
            { id: 'experiences-religious', label: 'Religious Tours' },
            { id: 'experiences-city', label: 'City Tours' },
            { id: 'experiences-historical', label: 'Historical & Heritage' },
            { id: 'experiences-desert', label: 'Desert & Nature' },
            { id: 'experiences-food', label: 'Food & Culinary' },
            { id: 'experiences-shopping', label: 'Shopping Tours' },
            { id: 'experiences-adventure', label: 'Adventure & Outdoor' },
            { id: 'experiences-family', label: 'Family Activities' },
            { id: 'experiences-events', label: 'Events & Tickets' },
            { id: 'experiences-cultural', label: 'Cultural Activities' },
            { id: 'experiences-custom', label: 'Custom Tours' },
            { id: 'experiences-pricing', label: 'Pricing & Availability' },
            { id: 'experiences-reviews', label: 'Reviews' },
          ];

          const cityGuideSubmenu = [
            { id: 'city-guide', label: '+ Overview' },
            { id: 'city-guide-all', label: '+ All Cities' },
            { id: 'city-guide-makkah', label: 'Makkah' },
            { id: 'city-guide-madinah', label: 'Madinah' },
            { id: 'city-guide-riyadh', label: 'Riyadh' },
            { id: 'city-guide-jeddah', label: 'Jeddah' },
            { id: 'city-guide-taif', label: 'Taif' },
            { id: 'city-guide-alula', label: 'AlUla' },
            { id: 'city-guide-dammam', label: 'Dammam' },
            { id: 'city-guide-abha', label: 'Abha' },
            { id: 'city-guide-neom', label: 'NEOM' },
            { id: 'city-guide-other', label: 'Other Cities' },
          ];

          const dealsSubmenu = [
            { id: 'deals', label: '+ Overview' },
            { id: 'deals-all', label: '+ All Deals' },
            { id: 'deals-flights', label: 'Flight Deals' },
            { id: 'deals-hotels', label: 'Hotel Deals' },
            { id: 'deals-umrah', label: 'Umrah Deals' },
            { id: 'deals-transport', label: 'Transport Deals' },
            { id: 'deals-experiences', label: 'Experience Deals' },
            { id: 'deals-jastip', label: 'Jastip Deals' },
            { id: 'deals-flash', label: 'Limited Time Offers' },
            { id: 'deals-promo', label: 'Promo Code' },
            { id: 'deals-partners', label: 'Partner Offers' },
            { id: 'deals-vouchers', label: 'My Vouchers' },
          ];

          const usersSubmenu = [
            { id: 'users', label: '+ Overview' },
            { id: 'users-all', label: '+ All Users' },
            { id: 'users-segments', label: '+ User Segments' },
            { id: 'users-verified', label: '+ Verified Users' },
            { id: 'users-membership', label: '+ Membership Plans' },
            { id: 'users-activity', label: '+ User Activity' },
            { id: 'users-reports', label: '+ User Reports' },
            { id: 'users-reviews', label: '+ Reviews by Users' },
            { id: 'users-support', label: '+ Support Tickets' },
          ];

          const paymentsSubmenu = [
            { id: 'payments', label: '+ Overview' },
            { id: 'payments-transactions', label: '+ Transactions' },
            { id: 'payments-payouts', label: '+ Payouts' },
            { id: 'payments-methods', label: '+ Payment Methods' },
            { id: 'payments-invoices', label: '+ Invoices' },
            { id: 'payments-refunds', label: '+ Refunds' },
            { id: 'payments-links', label: '+ Payment Links' },
            { id: 'payments-wallet', label: '+ Wallet & Balance' },
            { id: 'payments-reports', label: '+ Reports' },
          ];

          const messagesSubmenu = [
            { id: 'messages', label: '+ Overview' },
            { id: 'messages-all', label: '+ All Messages' },
            { id: 'messages-unread', label: '+ Unread' },
            { id: 'messages-starred', label: '+ Starred' },
            { id: 'messages-support', label: '+ Customer Support' },
            { id: 'messages-partners', label: '+ Partner Messages' },
            { id: 'messages-groups', label: '+ Group Chats' },
            { id: 'messages-system', label: '+ System Notifications' },
            { id: 'messages-archive', label: '+ Archive' },
            { id: 'messages-spam', label: '+ Spam' },
          ];

          const analyticsSubmenu = [
            { id: 'analytics', label: '+ Overview' },
            { id: 'analytics-bookings', label: '+ Booking Reports' },
            { id: 'analytics-sales', label: '+ Sales Reports' },
            { id: 'analytics-revenue', label: '+ Revenue Analytics' },
            { id: 'analytics-users', label: '+ User Analytics' },
            { id: 'analytics-services', label: '+ Service & Product' },
            { id: 'analytics-marketing', label: '+ Marketing Reports' },
            { id: 'analytics-insights', label: '+ Customer Insights' },
            { id: 'analytics-operations', label: '+ Operational Reports' },
            { id: 'analytics-financial', label: '+ Financial Reports' },
            { id: 'analytics-export', label: '+ Export & Schedule' },
          ];

          const marketingSubmenu = [
            { id: 'marketing', label: '+ Overview' },
            { id: 'marketing-campaigns', label: '+ Campaigns' },
            { id: 'marketing-content', label: '+ Content' },
            { id: 'marketing-social', label: '+ Social Media' },
            { id: 'marketing-email', label: '+ Email Marketing' },
            { id: 'marketing-ads', label: '+ Ads Manager' },
            { id: 'marketing-seo', label: '+ SEO Tools' },
            { id: 'marketing-influencer', label: '+ Influencers' },
            { id: 'marketing-loyalty', label: '+ Loyalty & Referral' },
            { id: 'marketing-automation', label: '+ Automations' },
            { id: 'marketing-reports', label: '+ Reports' },
          ];

          const reviewsSubmenu = [
            { id: 'reviews', label: '+ Overview & All' },
            { id: 'reviews-hotels', label: 'Hotels & Suites' },
            { id: 'reviews-umrah', label: 'Umrah Packages' },
            { id: 'reviews-transport', label: 'VIP Transport' },
            { id: 'reviews-airport', label: 'Airport Services' },
            { id: 'reviews-experiences', label: 'Experiences' },
            { id: 'reviews-disputed', label: 'Disputed & Flagged' },
          ];

          const contentSubmenu = [
            { id: 'content', label: '+ Articles & Blogs' },
            { id: 'content-guides', label: 'Pilgrim Guides' },
            { id: 'content-media', label: 'Media Library' },
            { id: 'content-banners', label: 'Promo Banners' },
            { id: 'content-faq', label: 'Interactive FAQs' },
          ];

          const settingsSubmenu = [
            { id: 'settings', label: '+ Overview' },
            { id: 'settings-account', label: '+ Account Settings' },
            { id: 'settings-business', label: '+ Business Profile' },
            { id: 'settings-team', label: '+ Users & Team' },
            { id: 'settings-booking', label: '+ Booking Settings' },
            { id: 'settings-payments', label: '+ Payment Settings' },
            { id: 'settings-notifications', label: '+ Notification Settings' },
            { id: 'settings-email-sms', label: '+ Email & SMS' },
            { id: 'settings-security', label: '+ Security & Privacy' },
            { id: 'settings-language', label: '+ Language & Region' },
            { id: 'settings-integrations', label: '+ Integrations' },
            { id: 'settings-system', label: '+ System Settings' },
            { id: 'settings-appearance', label: '+ Appearance' },
            { id: 'settings-help', label: '+ Help & Support' },
          ];

          return (
            <div key={item.id} className="space-y-1">
              <button
                onClick={() => onSelectTab(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[13px] font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0e5f2c] text-white shadow-md shadow-[#0e5f2c]/30 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-[#0f2e21]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#d4af37]' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.hasSubmenu && (
                  <ChevronRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isActive ? 'rotate-90 text-white' : 'text-slate-500'
                    }`}
                  />
                )}
              </button>

              {/* Nested Hotel Submenu */}
              {item.id === 'hotels' && isHotelsActive && (
                <div className="pl-4 pr-1 py-1 space-y-0.5 border-l border-emerald-800/60 ml-4 animate-in fade-in duration-200">
                  {hotelSubmenu.map((sub) => {
                    const isSubActive = activeTab === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => onSelectTab(sub.id)}
                        className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-colors cursor-pointer flex items-center justify-between ${
                          isSubActive
                            ? 'bg-emerald-50 text-[#0e5f2c] font-bold shadow-xs'
                            : 'text-slate-300 hover:text-white hover:bg-[#0f2e21]'
                        }`}
                      >
                        <span>{sub.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Nested Transport Submenu */}
              {item.id === 'transport' && isTransportActive && (
                <div className="pl-4 pr-1 py-1 space-y-0.5 border-l border-emerald-800/60 ml-4 animate-in fade-in duration-200">
                  {transportSubmenu.map((sub) => {
                    const isSubActive = activeTab === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => onSelectTab(sub.id)}
                        className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-colors cursor-pointer flex items-center justify-between ${
                          isSubActive
                            ? 'bg-emerald-50 text-[#0e5f2c] font-bold shadow-xs'
                            : 'text-slate-300 hover:text-white hover:bg-[#0f2e21]'
                        }`}
                      >
                        <span>{sub.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Nested Airport Services Submenu */}
              {item.id === 'airport' && isAirportActive && (
                <div className="pl-4 pr-1 py-1 space-y-0.5 border-l border-emerald-800/60 ml-4 animate-in fade-in duration-200">
                  {airportSubmenu.map((sub) => {
                    const isSubActive = activeTab === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => onSelectTab(sub.id)}
                        className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-colors cursor-pointer flex items-center justify-between ${
                          isSubActive
                            ? 'bg-emerald-50 text-[#0e5f2c] font-bold shadow-xs'
                            : 'text-slate-300 hover:text-white hover:bg-[#0f2e21]'
                        }`}
                      >
                        <span>{sub.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Nested Jastip Submenu */}
              {item.id === 'jastip' && isJastipActive && (
                <div className="pl-4 pr-1 py-1 space-y-0.5 border-l border-emerald-800/60 ml-4 animate-in fade-in duration-200">
                  {jastipSubmenu.map((sub) => {
                    const isSubActive = activeTab === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => onSelectTab(sub.id)}
                        className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-colors cursor-pointer flex items-center justify-between ${
                          isSubActive
                            ? 'bg-emerald-50 text-[#0e5f2c] font-bold shadow-xs'
                            : 'text-slate-300 hover:text-white hover:bg-[#0f2e21]'
                        }`}
                      >
                        <span>{sub.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Nested Umrah Packages Submenu */}
              {item.id === 'umrah' && isUmrahActive && (
                <div className="pl-4 pr-1 py-1 space-y-0.5 border-l border-emerald-800/60 ml-4 animate-in fade-in duration-200">
                  {umrahSubmenu.map((sub) => {
                    const isSubActive = activeTab === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => onSelectTab(sub.id)}
                        className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-colors cursor-pointer flex items-center justify-between ${
                          isSubActive
                            ? 'bg-emerald-50 text-[#0e5f2c] font-bold shadow-xs'
                            : 'text-slate-300 hover:text-white hover:bg-[#0f2e21]'
                        }`}
                      >
                        <span>{sub.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Nested Experiences Submenu */}
              {item.id === 'experiences' && isExperiencesActive && (
                <div className="pl-4 pr-1 py-1 space-y-0.5 border-l border-emerald-800/60 ml-4 animate-in fade-in duration-200">
                  {experiencesSubmenu.map((sub) => {
                    const isSubActive = activeTab === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => onSelectTab(sub.id)}
                        className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-colors cursor-pointer flex items-center justify-between ${
                          isSubActive
                            ? 'bg-emerald-50 text-[#0e5f2c] font-bold shadow-xs'
                            : 'text-slate-300 hover:text-white hover:bg-[#0f2e21]'
                        }`}
                      >
                        <span>{sub.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Nested City Guide Submenu */}
              {item.id === 'city-guide' && isCityGuideActive && (
                <div className="pl-4 pr-1 py-1 space-y-0.5 border-l border-emerald-800/60 ml-4 animate-in fade-in duration-200">
                  {cityGuideSubmenu.map((sub) => {
                    const isSubActive = activeTab === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => onSelectTab(sub.id)}
                        className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-colors cursor-pointer flex items-center justify-between ${
                          isSubActive
                            ? 'bg-emerald-50 text-[#0e5f2c] font-bold shadow-xs'
                            : 'text-slate-300 hover:text-white hover:bg-[#0f2e21]'
                        }`}
                      >
                        <span>{sub.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Nested Deals Submenu */}
              {item.id === 'deals' && isDealsActive && (
                <div className="pl-4 pr-1 py-1 space-y-0.5 border-l border-emerald-800/60 ml-4 animate-in fade-in duration-200">
                  {dealsSubmenu.map((sub) => {
                    const isSubActive = activeTab === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => onSelectTab(sub.id)}
                        className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-colors cursor-pointer flex items-center justify-between ${
                          isSubActive
                            ? 'bg-emerald-50 text-[#0e5f2c] font-bold shadow-xs'
                            : 'text-slate-300 hover:text-white hover:bg-[#0f2e21]'
                        }`}
                      >
                        <span>{sub.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Nested Users Submenu */}
              {item.id === 'users' && isUsersActive && (
                <div className="pl-4 pr-1 py-1 space-y-0.5 border-l border-emerald-800/60 ml-4 animate-in fade-in duration-200">
                  {usersSubmenu.map((sub) => {
                    const isSubActive = activeTab === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => onSelectTab(sub.id)}
                        className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-colors cursor-pointer flex items-center justify-between ${
                          isSubActive
                            ? 'bg-emerald-50 text-[#0e5f2c] font-bold shadow-xs'
                            : 'text-slate-300 hover:text-white hover:bg-[#0f2e21]'
                        }`}
                      >
                        <span>{sub.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Nested Payments Submenu */}
              {item.id === 'payments' && isPaymentsActive && (
                <div className="pl-4 pr-1 py-1 space-y-0.5 border-l border-emerald-800/60 ml-4 animate-in fade-in duration-200">
                  {paymentsSubmenu.map((sub) => {
                    const isSubActive = activeTab === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => onSelectTab(sub.id)}
                        className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-colors cursor-pointer flex items-center justify-between ${
                          isSubActive
                            ? 'bg-emerald-50 text-[#0e5f2c] font-bold shadow-xs'
                            : 'text-slate-300 hover:text-white hover:bg-[#0f2e21]'
                        }`}
                      >
                        <span>{sub.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Nested Messages Submenu */}
              {item.id === 'messages' && isMessagesActive && (
                <div className="pl-4 pr-1 py-1 space-y-0.5 border-l border-emerald-800/60 ml-4 animate-in fade-in duration-200">
                  {messagesSubmenu.map((sub) => {
                    const isSubActive = activeTab === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => onSelectTab(sub.id)}
                        className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-colors cursor-pointer flex items-center justify-between ${
                          isSubActive
                            ? 'bg-emerald-50 text-[#0e5f2c] font-bold shadow-xs'
                            : 'text-slate-300 hover:text-white hover:bg-[#0f2e21]'
                        }`}
                      >
                        <span>{sub.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Nested Reviews Submenu */}
              {item.id === 'reviews' && isReviewsActive && (
                <div className="pl-4 pr-1 py-1 space-y-0.5 border-l border-emerald-800/60 ml-4 animate-in fade-in duration-200">
                  {reviewsSubmenu.map((sub) => {
                    const isSubActive = activeTab === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => onSelectTab(sub.id)}
                        className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-colors cursor-pointer flex items-center justify-between ${
                          isSubActive
                            ? 'bg-emerald-50 text-[#0e5f2c] font-bold shadow-xs'
                            : 'text-slate-300 hover:text-white hover:bg-[#0f2e21]'
                        }`}
                      >
                        <span>{sub.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Nested Content Management Submenu */}
              {item.id === 'content' && isContentActive && (
                <div className="pl-4 pr-1 py-1 space-y-0.5 border-l border-emerald-800/60 ml-4 animate-in fade-in duration-200">
                  {contentSubmenu.map((sub) => {
                    const isSubActive = activeTab === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => onSelectTab(sub.id)}
                        className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-colors cursor-pointer flex items-center justify-between ${
                          isSubActive
                            ? 'bg-emerald-50 text-[#0e5f2c] font-bold shadow-xs'
                            : 'text-slate-300 hover:text-white hover:bg-[#0f2e21]'
                        }`}
                      >
                        <span>{sub.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Nested Reports & Analytics Submenu */}
              {item.id === 'analytics' && isAnalyticsActive && (
                <div className="pl-4 pr-1 py-1 space-y-0.5 border-l border-emerald-800/60 ml-4 animate-in fade-in duration-200">
                  {analyticsSubmenu.map((sub) => {
                    const isSubActive = activeTab === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => onSelectTab(sub.id)}
                        className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-colors cursor-pointer flex items-center justify-between ${
                          isSubActive
                            ? 'bg-emerald-50 text-[#0e5f2c] font-bold shadow-xs'
                            : 'text-slate-300 hover:text-white hover:bg-[#0f2e21]'
                        }`}
                      >
                        <span>{sub.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Nested Marketing Submenu */}
              {item.id === 'marketing' && isMarketingActive && (
                <div className="pl-4 pr-1 py-1 space-y-0.5 border-l border-emerald-800/60 ml-4 animate-in fade-in duration-200">
                  {marketingSubmenu.map((sub) => {
                    const isSubActive = activeTab === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => onSelectTab(sub.id)}
                        className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-colors cursor-pointer flex items-center justify-between ${
                          isSubActive
                            ? 'bg-emerald-50 text-[#0e5f2c] font-bold shadow-xs'
                            : 'text-slate-300 hover:text-white hover:bg-[#0f2e21]'
                        }`}
                      >
                        <span>{sub.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Nested Settings Submenu */}
              {item.id === 'settings' && isSettingsActive && (
                <div className="pl-4 pr-1 py-1 space-y-0.5 border-l border-emerald-800/60 ml-4 animate-in fade-in duration-200">
                  {settingsSubmenu.map((sub) => {
                    const isSubActive = activeTab === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => onSelectTab(sub.id)}
                        className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-colors cursor-pointer flex items-center justify-between ${
                          isSubActive
                            ? 'bg-emerald-50 text-[#0e5f2c] font-bold shadow-xs'
                            : 'text-slate-300 hover:text-white hover:bg-[#0f2e21]'
                        }`}
                      >
                        <span>{sub.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Bottom Panel Info */}
      <div className="p-4 border-t border-[#123829] bg-[#051710]/50 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-[#133c2a] flex items-center justify-center text-[#d4af37]">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">Admin Panel</div>
            <div className="text-[10px] text-slate-400">SafarHub Saudi</div>
          </div>
        </div>
        <div className="text-[10px] text-slate-500 font-mono">v1.0.0</div>
      </div>
    </aside>
  );
};
