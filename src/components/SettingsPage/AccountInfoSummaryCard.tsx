import React from 'react';
import { Camera, Edit, Mail, Phone, Calendar, Crown } from 'lucide-react';
import { USER_PROFILE } from '../../data/profileData';

interface AccountInfoSummaryCardProps {
  onEditAccount?: () => void;
  onAvatarUpload?: () => void;
}

export const AccountInfoSummaryCard: React.FC<AccountInfoSummaryCardProps> = ({
  onEditAccount,
  onAvatarUpload
}) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
        <div>
          <h3 className="text-sm font-bold text-slate-900">
            Account Information
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Update your basic information and profile details.
          </p>
        </div>

        <button
          onClick={onEditAccount}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 text-slate-700 text-xs font-bold transition-all border border-slate-200/80 shadow-2xs"
        >
          <Edit className="w-3.5 h-3.5" />
          <span>Edit</span>
        </button>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="w-16 h-16 rounded-full bg-[#062416] text-white flex items-center justify-center font-bold text-xl shadow-md border-2 border-emerald-500">
            {USER_PROFILE.initials}
          </div>
          <button
            onClick={onAvatarUpload}
            title="Upload photo"
            className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center border-2 border-white shadow-2xs hover:bg-emerald-800"
          >
            <Camera className="w-2.5 h-2.5" />
          </button>
        </div>

        {/* Info */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h4 className="text-base font-extrabold text-slate-900">
              {USER_PROFILE.name}
            </h4>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-300">
              <Crown className="w-3 h-3 text-amber-500" />
              <span>{USER_PROFILE.membershipTier}</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 font-medium pt-0.5">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-emerald-600" />
              <span>{USER_PROFILE.email}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>{USER_PROFILE.phone}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-600" />
              <span>Member since {USER_PROFILE.memberSince}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
