import React, { useState } from 'react';
import { SettingsHero } from './SettingsHero';
import { SettingsTabsBar } from './SettingsTabsBar';
import { AccountInfoSummaryCard } from './AccountInfoSummaryCard';
import { SecuritySettingsCard } from './SecuritySettingsCard';
import { NotificationSettingsCard } from './NotificationSettingsCard';
import { TravelPreferencesCard } from './TravelPreferencesCard';
import { PaymentMethodsSettingsCard } from './PaymentMethodsSettingsCard';
import { LanguageRegionSettingsCard } from './LanguageRegionSettingsCard';
import { PrivacyDataSettingsCard } from './PrivacyDataSettingsCard';
import { MyTripsSidebar } from '../MyTripsPage/MyTripsSidebar';

interface SettingsPageProps {
  onNavigateView?: (view: string) => void;
  onOpenActionModal?: (id: string, title: string) => void;
}

export const SettingsPage: React.FC<SettingsPageProps> = ({
  onNavigateView,
  onOpenActionModal
}) => {
  const [activeTab, setActiveTab] = useState('account');

  const handleSidebarTabClick = (tabId: string) => {
    if (tabId === 'settings') return;
    if (tabId === 'profile') {
      onNavigateView?.('profile');
    } else if (tabId === 'messages') {
      onNavigateView?.('messages');
    } else if (tabId === 'bookings') {
      onNavigateView?.('bookings');
    } else if (tabId === 'payments') {
      onNavigateView?.('payments');
    } else if (tabId === 'deals') {
      onNavigateView?.('deals');
    } else if (tabId === 'support') {
      onNavigateView?.('support');
    } else {
      onNavigateView?.('my-trips');
    }
  };

  const handleOpenAction = (id: string, title: string) => {
    if (onOpenActionModal) {
      onOpenActionModal(id, title);
    } else {
      alert(`Opening ${title}...`);
    }
  };

  return (
    <div className="w-full bg-[#f8fafc] pb-16">
      {/* 1. Full-Width Daylight Hero Section */}
      <SettingsHero />

      {/* 2. Main 2-Column Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Vertical Nav Sidebar (2.5 / 3 cols - Sticky) */}
          <div className="hidden lg:block lg:col-span-3 xl:col-span-2.5 lg:sticky lg:top-20 self-start">
            <MyTripsSidebar
              activeTab="settings"
              onSelectTab={handleSidebarTabClick}
              onPlanTrip={() => onNavigateView?.('profile')}
              promoTitle="Customize Your Experience"
              promoSubtitle="Set your preferences to get better recommendations and exclusive deals."
              promoButtonText="Go to Profile"
            />
          </div>

          {/* Right Main Content Area (9.5 cols / 9 cols) */}
          <div className="lg:col-span-9 xl:col-span-9.5 space-y-6">
            {/* 1. Settings Navigation Tabs Bar */}
            <SettingsTabsBar
              activeTab={activeTab}
              onSelectTab={setActiveTab}
            />

            {/* 2. Account Information Summary Card (Full Width) */}
            <AccountInfoSummaryCard
              onEditAccount={() => handleOpenAction('edit-account', 'Edit Account Credentials')}
              onAvatarUpload={() => handleOpenAction('upload-photo', 'Change Profile Photo')}
            />

            {/* 3. 2x3 Grid of 6 Setting Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
              {/* Row 1 - Left: Security Settings */}
              <SecuritySettingsCard
                onSelectSecurityItem={(id, title) => handleOpenAction(`sec-${id}`, title)}
              />

              {/* Row 1 - Right: Notification Settings */}
              <NotificationSettingsCard />

              {/* Row 2 - Left: Travel Preferences */}
              <TravelPreferencesCard
                onSelectPreference={(id, label) => handleOpenAction(`pref-${id}`, `Edit: ${label}`)}
              />

              {/* Row 2 - Right: Payment Methods */}
              <PaymentMethodsSettingsCard
                onAddCard={() => handleOpenAction('add-payment', 'Add New Payment Method')}
                onSelectOption={(key, title) => handleOpenAction(`pay-${key}`, title)}
              />

              {/* Row 3 - Left: Language & Region */}
              <LanguageRegionSettingsCard
                onSelectOption={(id, title) => handleOpenAction(`lang-${id}`, `Configure: ${title}`)}
              />

              {/* Row 3 - Right: Privacy & Data */}
              <PrivacyDataSettingsCard
                onSelectOption={(key, title) => handleOpenAction(`priv-${key}`, title)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
