import React, { useState, useEffect } from 'react';
import { AdminSettingsHeader } from './AdminSettingsHeader';
import { AdminSettingsPillTabs } from './AdminSettingsPillTabs';
import { AdminSettingsAccountView } from './AdminSettingsAccountView';
import { AdminSettingsBusinessView } from './AdminSettingsBusinessView';
import { AdminSettingsTeamView } from './AdminSettingsTeamView';
import { AdminSettingsBookingView } from './AdminSettingsBookingView';
import { AdminSettingsPaymentsView } from './AdminSettingsPaymentsView';
import { AdminSettingsNotificationsView } from './AdminSettingsNotificationsView';
import { AdminSettingsSecurityView } from './AdminSettingsSecurityView';
import { AdminSettingsIntegrationsView } from './AdminSettingsIntegrationsView';
import { AdminSettingsSystemView } from './AdminSettingsSystemView';
import { AdminSettingsAppearanceView } from './AdminSettingsAppearanceView';

import {
  DEFAULT_ADMIN_PROFILE,
  DEFAULT_BUSINESS_PROFILE,
  ADMIN_TEAM_MEMBERS_DB,
  BOOKING_SETTINGS_DB,
  PAYMENT_GATEWAYS_DB,
  NOTIFICATION_CHANNELS_DB,
  SECURITY_SESSIONS_DB,
  SECURITY_AUDIT_LOGS_DB,
  THIRD_PARTY_INTEGRATIONS_DB,
  SYSTEM_HEALTH_METRICS_DB
} from '../../../data/adminSettingsData';
import { SettingsTab } from '../../../types/adminSettings';

interface AdminSettingsPageProps {
  initialTab?: string;
  onOpenActionModal?: (id: string, title: string) => void;
}

export const AdminSettingsPage: React.FC<AdminSettingsPageProps> = ({
  initialTab = 'settings',
  onOpenActionModal
}) => {
  const mapRouteToTab = (route: string): SettingsTab => {
    if (route === 'settings-account') return 'account';
    if (route === 'settings-business') return 'business';
    if (route === 'settings-team' || route === 'settings-users') return 'team';
    if (route === 'settings-booking') return 'booking';
    if (route === 'settings-payments') return 'payments';
    if (route === 'settings-notifications' || route === 'settings-email-sms') return 'notifications';
    if (route === 'settings-security' || route === 'settings-privacy') return 'security';
    if (route === 'settings-integrations') return 'integrations';
    if (route === 'settings-appearance') return 'appearance';
    if (route === 'settings-language') return 'language';
    if (route === 'settings-system') return 'system';
    return 'account';
  };

  const [activeTab, setActiveTab] = useState<SettingsTab>(mapRouteToTab(initialTab));

  useEffect(() => {
    setActiveTab(mapRouteToTab(initialTab));
  }, [initialTab]);

  return (
    <div className="space-y-6 pb-12">
      {/* 1. Panoramic Header */}
      <AdminSettingsHeader />

      {/* 2. Top 10 Pill Navigation Tabs */}
      <AdminSettingsPillTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* 3. Tab Body Views */}
      {activeTab === 'account' ? (
        <AdminSettingsAccountView
          profile={DEFAULT_ADMIN_PROFILE}
          onChangePassword={() => alert('Change Password Modal opening...')}
          onOpenTwoFactor={() => setActiveTab('security')}
          onOpenSessions={() => setActiveTab('security')}
          onOpenLogs={() => setActiveTab('security')}
        />
      ) : activeTab === 'business' ? (
        <AdminSettingsBusinessView businessData={DEFAULT_BUSINESS_PROFILE} />
      ) : activeTab === 'team' ? (
        <AdminSettingsTeamView
          teamMembers={ADMIN_TEAM_MEMBERS_DB}
          onInviteMember={() => alert('Invite Team Member Modal')}
        />
      ) : activeTab === 'booking' ? (
        <AdminSettingsBookingView rules={BOOKING_SETTINGS_DB} />
      ) : activeTab === 'payments' ? (
        <AdminSettingsPaymentsView
          gateways={PAYMENT_GATEWAYS_DB}
          onAddGateway={() => alert('Add Payment Gateway Modal')}
        />
      ) : activeTab === 'notifications' ? (
        <AdminSettingsNotificationsView notifications={NOTIFICATION_CHANNELS_DB} />
      ) : activeTab === 'security' ? (
        <AdminSettingsSecurityView
          sessions={SECURITY_SESSIONS_DB}
          auditLogs={SECURITY_AUDIT_LOGS_DB}
        />
      ) : activeTab === 'integrations' ? (
        <AdminSettingsIntegrationsView
          integrations={THIRD_PARTY_INTEGRATIONS_DB}
          onAddIntegration={() => alert('Connect API Modal')}
        />
      ) : activeTab === 'appearance' ? (
        <AdminSettingsAppearanceView />
      ) : activeTab === 'system' ? (
        <AdminSettingsSystemView healthMetrics={SYSTEM_HEALTH_METRICS_DB} />
      ) : (
        <AdminSettingsAccountView profile={DEFAULT_ADMIN_PROFILE} />
      )}
    </div>
  );
};

export default AdminSettingsPage;
