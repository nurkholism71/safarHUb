import React, { useState } from 'react';
import { ProfileHero } from './ProfileHero';
import { ProfileMetricsGrid } from './ProfileMetricsGrid';
import { ProfileTabsBar } from './ProfileTabsBar';
import { ProfileOverviewCards } from './ProfileOverviewCards';
import { MyTravelersSection } from './MyTravelersSection';
import { MembershipUpgradeBanner } from './MembershipUpgradeBanner';
import { RecentTripsAndSavedRow } from './RecentTripsAndSavedRow';
import { ProfileBottomUtilitiesGrid } from './ProfileBottomUtilitiesGrid';
import { MyTripsSidebar } from '../MyTripsPage/MyTripsSidebar';

interface ProfilePageProps {
  onNavigateView?: (view: string) => void;
  onOpenActionModal?: (id: string, title: string) => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  onNavigateView,
  onOpenActionModal
}) => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleSidebarTabClick = (tabId: string) => {
    if (tabId === 'profile') return;
    if (tabId === 'messages') {
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

  return (
    <div className="w-full bg-[#f8fafc] pb-16">
      {/* 1. Full-Width Daylight Hero Section */}
      <ProfileHero
        onEditProfile={() => {
          if (onOpenActionModal) {
            onOpenActionModal('edit-profile', 'Edit Profile & Account Details');
          } else {
            alert('Opening Edit Profile Dialog...');
          }
        }}
        onAvatarUpload={() => {
          if (onOpenActionModal) {
            onOpenActionModal('upload-avatar', 'Change Profile Photo');
          } else {
            alert('Upload new avatar photo...');
          }
        }}
      />

      {/* 2. Main 2-Column Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Vertical Nav Sidebar (2.5 / 3 cols - Sticky) */}
          <div className="hidden lg:block lg:col-span-3 xl:col-span-2.5 lg:sticky lg:top-20 self-start">
            <MyTripsSidebar
              activeTab="profile"
              onSelectTab={handleSidebarTabClick}
              onPlanTrip={() => {
                if (onOpenActionModal) {
                  onOpenActionModal('update-profile', 'Update Profile Details');
                } else {
                  alert('Opening profile editor...');
                }
              }}
              promoTitle="Complete Your Profile"
              promoSubtitle="Get personalized recommendations, exclusive deals, and a smoother booking experience."
              promoButtonText="Update Profile"
            />
          </div>

          {/* Right Main Content Area (9.5 cols / 9 cols) */}
          <div className="lg:col-span-9 xl:col-span-9.5 space-y-6">
            {/* 1. 5 Key Metrics / Stats Row */}
            <ProfileMetricsGrid />

            {/* 2. 8 Navigation Tabs Bar */}
            <ProfileTabsBar
              activeTab={activeTab}
              onSelectTab={setActiveTab}
            />

            {/* 3. 3-Card Overview Row (Personal Info, Membership, Preferences) */}
            <ProfileOverviewCards
              onEditPersonalInfo={() => {
                if (onOpenActionModal) {
                  onOpenActionModal('edit-personal', 'Edit Personal Information');
                }
              }}
              onEditPreferences={() => {
                if (onOpenActionModal) {
                  onOpenActionModal('edit-preferences', 'Edit Travel Preferences');
                }
              }}
              onViewAllBenefits={() => {
                if (onOpenActionModal) {
                  onOpenActionModal('membership-benefits', 'SafarHub Silver & Gold Membership Benefits');
                }
              }}
            />

            {/* 4. My Travelers (7 cols) & Upgrade Banner (5 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
              <div className="lg:col-span-7 flex flex-col">
                <MyTravelersSection
                  onManageTravelers={() => {
                    if (onOpenActionModal) {
                      onOpenActionModal('manage-travelers', 'Manage Family & Group Travelers');
                    }
                  }}
                  onAddTraveler={() => {
                    if (onOpenActionModal) {
                      onOpenActionModal('add-traveler', 'Add New Passenger / Traveler');
                    }
                  }}
                  onSelectTraveler={(traveler) => {
                    if (onOpenActionModal) {
                      onOpenActionModal(`tr-${traveler.id}`, `Traveler: ${traveler.name} (${traveler.role})`);
                    }
                  }}
                />
              </div>

              <div className="lg:col-span-5 flex flex-col">
                <MembershipUpgradeBanner
                  onUpgrade={() => {
                    if (onOpenActionModal) {
                      onOpenActionModal('gold-upgrade', 'Upgrade to SafarHub Gold VIP Membership');
                    }
                  }}
                />
              </div>
            </div>

            {/* 5. Recent Trips & Saved Items Row */}
            <RecentTripsAndSavedRow
              onViewAllTrips={() => {
                if (onNavigateView) {
                  onNavigateView('my-trips');
                }
              }}
              onViewAllSaved={() => {
                if (onOpenActionModal) {
                  onOpenActionModal('saved-items', 'All Saved Wishlist Items');
                }
              }}
              onSelectTrip={(tripId, title) => {
                if (onOpenActionModal) {
                  onOpenActionModal(tripId, `Trip Details: ${title}`);
                }
              }}
              onSelectSavedItem={(item) => {
                if (onOpenActionModal) {
                  onOpenActionModal(`item-${item.id}`, `Wishlist: ${item.title}`);
                }
              }}
            />

            {/* 6. Bottom Utilities Grid (Payment Methods, Documents, Account Settings) */}
            <ProfileBottomUtilitiesGrid
              onManagePayments={() => {
                if (onNavigateView) {
                  onNavigateView('payments');
                }
              }}
              onAddPaymentMethod={() => {
                if (onOpenActionModal) {
                  onOpenActionModal('add-card', 'Add New Credit/Debit Card');
                }
              }}
              onManageDocuments={() => {
                if (onOpenActionModal) {
                  onOpenActionModal('manage-docs', 'Manage Travel Passports & Visas');
                }
              }}
              onUploadDocument={(docTitle) => {
                if (onOpenActionModal) {
                  onOpenActionModal('upload-doc', `Upload Document: ${docTitle}`);
                }
              }}
              onSettingClick={(key, title) => {
                if (onOpenActionModal) {
                  onOpenActionModal(`setting-${key}`, title);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
