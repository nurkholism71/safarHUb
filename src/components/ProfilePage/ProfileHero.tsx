import React from 'react';
import { Camera, Edit, Mail, Phone, Calendar, Crown, Sparkles } from 'lucide-react';
import { USER_PROFILE } from '../../data/profileData';

interface ProfileHeroProps {
  onEditProfile?: () => void;
  onAvatarUpload?: () => void;
}

export const ProfileHero: React.FC<ProfileHeroProps> = ({
  onEditProfile,
  onAvatarUpload
}) => {
  return (
    <div className="relative w-full bg-slate-900 text-white border-b border-slate-200">
      {/* Background Graphic & Daylight Makkah Panorama */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/umrah/hero_banner.jpg"
          alt="Makkah Holy Mosque & Clock Tower"
          className="w-full h-full object-cover object-center brightness-95 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-serif tracking-tight text-white drop-shadow-md">
              My Profile
            </h1>
            <p className="text-xs sm:text-sm text-slate-200/90 mt-1 max-w-xl font-medium leading-relaxed">
              Manage your information, preferences, and travel settings for a better journey with SafarHub Saudi.
            </p>
          </div>

          <button
            onClick={onEditProfile}
            className="self-start sm:self-center inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-slate-800 hover:bg-slate-100 text-xs font-bold transition-all shadow-md active:scale-95"
          >
            <Edit className="w-3.5 h-3.5 text-slate-600" />
            <span>Edit Profile</span>
          </button>
        </div>

        {/* Floating Profile Info Card */}
        <div className="mt-8 bg-white/95 backdrop-blur-md text-slate-800 rounded-3xl p-5 shadow-2xl border border-white/60">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* Avatar Circle with Camera Badge */}
              <div className="relative">
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#062416] text-white flex items-center justify-center font-bold text-xl sm:text-2xl shadow-md border-2 border-emerald-500">
                  {USER_PROFILE.initials}
                </div>
                <button
                  onClick={onAvatarUpload}
                  title="Upload profile photo"
                  className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center border-2 border-white shadow-xs hover:bg-emerald-800 transition-colors"
                >
                  <Camera className="w-3 h-3" />
                </button>
              </div>

              {/* Name & Tier */}
              <div>
                <div className="flex items-center gap-2.5">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {USER_PROFILE.name}
                  </h2>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-300 shadow-2xs">
                    <Crown className="w-3 h-3 text-amber-500" />
                    <span>{USER_PROFILE.membershipTier}</span>
                  </span>
                </div>

                {/* Contact Row */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 mt-1.5 font-medium">
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
        </div>
      </div>
    </div>
  );
};
