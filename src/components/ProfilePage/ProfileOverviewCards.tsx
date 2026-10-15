import React from 'react';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  FileCheck,
  Crown,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
  Building2,
  Bus,
  Globe2,
  Utensils
} from 'lucide-react';
import { USER_PROFILE } from '../../data/profileData';

interface ProfileOverviewCardsProps {
  onEditPersonalInfo?: () => void;
  onEditPreferences?: () => void;
  onViewAllBenefits?: () => void;
}

export const ProfileOverviewCards: React.FC<ProfileOverviewCardsProps> = ({
  onEditPersonalInfo,
  onEditPreferences,
  onViewAllBenefits
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Card 1: Personal Information */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3.5">
            <h3 className="text-sm font-bold text-slate-900">
              Personal Information
            </h3>
            <button
              onClick={onEditPersonalInfo}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline"
            >
              Edit
            </button>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex items-start gap-2.5">
              <User className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block">Full Name</span>
                <span className="font-bold text-slate-800">{USER_PROFILE.name}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block">Email Address</span>
                <span className="font-semibold text-slate-800">{USER_PROFILE.email}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block">Phone Number</span>
                <span className="font-semibold text-slate-800">{USER_PROFILE.phone}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block">Country</span>
                <span className="font-semibold text-slate-800">{USER_PROFILE.country}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Calendar className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block">Date of Birth</span>
                <span className="font-semibold text-slate-800">{USER_PROFILE.dob}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <FileCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block">Passport Number</span>
                <span className="font-semibold text-slate-800">{USER_PROFILE.passportNumber}</span>
                <span className="text-[10px] text-slate-400 block font-normal">(Valid until {USER_PROFILE.passportExpiry})</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2: Membership (Silver Member) */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3.5">
            <h3 className="text-sm font-bold text-slate-900">
              Membership
            </h3>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Tier Status</span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center shadow-xs">
              <Crown className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Silver Member
              </h4>
              <p className="text-[11px] text-slate-500">
                Travel more, get more benefits
              </p>
            </div>
          </div>

          {/* Points Progress */}
          <div className="space-y-1.5 mb-4">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-emerald-800">{USER_PROFILE.points} / 1,000 points</span>
              <span className="text-slate-400 font-medium">{USER_PROFILE.pointsToNextTier} points to Gold</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-amber-400"
                style={{ width: `${(USER_PROFILE.points / 1000) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Member Benefits Checklist */}
          <div className="space-y-2 text-xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Member Benefits</span>
            <div className="space-y-1.5 text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Exclusive member deals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Priority customer support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Faster booking process</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Special promo for Umrah packages</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Early access to new features</span>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={onViewAllBenefits}
          className="mt-4 text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline flex items-center gap-1"
        >
          <span>View All Benefits</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Card 3: Travel Preferences */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3.5">
            <h3 className="text-sm font-bold text-slate-900">
              Travel Preferences
            </h3>
            <button
              onClick={onEditPreferences}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline"
            >
              Edit
            </button>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block">Travel Purpose</span>
                <span className="font-semibold text-slate-800">Umrah, Holiday, Business</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Users className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block">Preferred Travelers</span>
                <span className="font-semibold text-slate-800">Family, Group</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Calendar className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block">Preferred Travel Dates</span>
                <span className="font-semibold text-slate-800">Flexible</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Building2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block">Accommodation Preference</span>
                <span className="font-semibold text-slate-800">4–5 star hotels, Near Haram</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Bus className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block">Transport Preference</span>
                <span className="font-semibold text-slate-800">Private car, Comfortable bus</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Globe2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block">Language</span>
                <span className="font-semibold text-slate-800">English, Bahasa Indonesia</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Utensils className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block">Food Preference</span>
                <span className="font-semibold text-slate-800">Halal food, Indonesian food</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
