import React, { useState, useMemo } from 'react';
import { AdminUsersHeader } from './AdminUsersHeader';
import { AdminUsersKpiRow } from './AdminUsersKpiRow';
import { AdminUsersSegmentStrip } from './AdminUsersSegmentStrip';
import { AdminUsersFilterBar } from './AdminUsersFilterBar';
import { AdminUsersTable } from './AdminUsersTable';
import { AdminUsersRightSidebar } from './AdminUsersRightSidebar';
import { AdminUsersBottomRow } from './AdminUsersBottomRow';
import { ADMIN_USER_RECORDS } from '../../../data/adminUsersData';
import { AdminUserRecord } from '../../../types/adminUsers';

interface AdminUsersPageProps {
  onOpenActionModal?: (id: string, title: string) => void;
}

export const AdminUsersPage: React.FC<AdminUsersPageProps> = ({
  onOpenActionModal
}) => {
  const [activeSegment, setActiveSegment] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedUserType, setSelectedUserType] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedJoinedDate, setSelectedJoinedDate] = useState('all');

  // Filtered users list
  const filteredUsers = useMemo(() => {
    return ADMIN_USER_RECORDS.filter(user => {
      const matchesSearch = 
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.phone.includes(searchQuery) ||
        user.country.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSegment = 
        activeSegment === 'all' ||
        (activeSegment === 'customers' && user.userType === 'Customer') ||
        (activeSegment === 'premium' && user.userType === 'Premium') ||
        (activeSegment === 'umrah' && user.userType === 'Umrah Traveler') ||
        (activeSegment === 'corporate' && user.userType === 'Corporate') ||
        (activeSegment === 'agents' && user.userType === 'Agent') ||
        (activeSegment === 'blocked' && user.status === 'Blocked');

      const matchesStatus = selectedStatus === 'all' || user.status === selectedStatus;
      const matchesUserType = selectedUserType === 'all' || user.userType === selectedUserType;
      const matchesCountry = selectedCountry === 'all' || user.country === selectedCountry;

      return matchesSearch && matchesSegment && matchesStatus && matchesUserType && matchesCountry;
    });
  }, [searchQuery, activeSegment, selectedStatus, selectedUserType, selectedCountry]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveSegment('all');
    setSelectedStatus('all');
    setSelectedUserType('all');
    setSelectedCountry('all');
    setSelectedJoinedDate('all');
  };

  const handleSelectUser = (user: AdminUserRecord) => {
    if (onOpenActionModal) {
      onOpenActionModal(`admin-user-${user.id}`, `User Profile: ${user.name} (${user.username})`);
    }
  };

  const handleEditUser = (user: AdminUserRecord) => {
    if (onOpenActionModal) {
      onOpenActionModal(`admin-edit-user-${user.id}`, `Edit Account: ${user.name}`);
    }
  };

  const handleDeleteUser = (userId: string) => {
    if (window.confirm(`Are you sure you want to suspend / block user [${userId}]?`)) {
      alert(`User ${userId} suspended.`);
    }
  };

  return (
    <div className="space-y-4 sm:space-y-5 pb-10">
      {/* 1. Panoramic Mosque Skyline Header */}
      <AdminUsersHeader
        onAddUser={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-add-user', 'Create & Verify New SafarID User Account');
          }
        }}
      />

      {/* 2. 5 KPI Stat Metrics Row */}
      <AdminUsersKpiRow />

      {/* 3. 7 Segment Pill Tabs Strip */}
      <AdminUsersSegmentStrip
        activeSegment={activeSegment}
        onSelectSegment={(segId) => setActiveSegment(segId)}
      />

      {/* 4. Filter Toolbar & Search Bar */}
      <AdminUsersFilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        selectedUserType={selectedUserType}
        onUserTypeChange={setSelectedUserType}
        selectedCountry={selectedCountry}
        onCountryChange={setSelectedCountry}
        selectedJoinedDate={selectedJoinedDate}
        onJoinedDateChange={setSelectedJoinedDate}
        onResetFilters={handleResetFilters}
        onOpenMoreFilters={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-users-advanced-filter', 'Advanced User Segmentation & Filters');
          }
        }}
      />

      {/* 5. Main 2-Column Split Layout: Left Table + Right Sidebar Charts aligned evenly */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* Left Column: Full Users Database Inventory Table */}
        <div className="lg:col-span-8 xl:col-span-9 min-w-0 flex flex-col">
          <AdminUsersTable
            users={filteredUsers}
            onSelectUser={handleSelectUser}
            onEditUser={handleEditUser}
            onDeleteUser={handleDeleteUser}
          />
        </div>

        {/* Right Column: User Growth Chart, Donut Share & Country Distribution */}
        <div className="lg:col-span-4 xl:col-span-3 flex flex-col">
          <AdminUsersRightSidebar
            onViewAllCountries={() => {
              if (onOpenActionModal) {
                onOpenActionModal('admin-all-countries-users', 'Global User Demographics & Geographic Distribution');
              }
            }}
          />
        </div>
      </div>

      {/* 6. Bottom 4-Column Analytics Row (Seamless 4-column span with no gaps) */}
      <AdminUsersBottomRow
        onViewAllRegistrations={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-recent-registrations', 'All Recent User Registrations Log');
          }
        }}
        onViewAllTopBookings={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-top-users-bookings', 'Top Frequent Pilgrims & Bookers Leaderboard');
          }
        }}
        onViewAllTopSpending={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-top-users-spending', 'Top Spending VIP Clients & Corporate Accounts');
          }
        }}
        onViewAllActivity={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-user-activity-feed', 'Live Real-time User Activity & Session Stream');
          }
        }}
      />
    </div>
  );
};
