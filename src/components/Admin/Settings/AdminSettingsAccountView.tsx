import React, { useState } from 'react';
import {
  Camera,
  Lock,
  Upload,
  Trash2,
  Crown,
  CheckCircle2,
  Circle,
  Shield,
  Monitor,
  FileText,
  ChevronRight,
  Sun,
  Globe,
  Clock,
  Calendar,
  DollarSign,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';
import { AdminAccountProfile } from '../../../types/adminSettings';

interface AdminSettingsAccountViewProps {
  profile: AdminAccountProfile;
  onUpdateProfile?: (updated: Partial<AdminAccountProfile>) => void;
  onChangePassword?: () => void;
  onOpenTwoFactor?: () => void;
  onOpenSessions?: () => void;
  onOpenLogs?: () => void;
}

export const AdminSettingsAccountView: React.FC<AdminSettingsAccountViewProps> = ({
  profile,
  onUpdateProfile,
  onChangePassword,
  onOpenTwoFactor,
  onOpenSessions,
  onOpenLogs
}) => {
  const [formData, setFormData] = useState(profile);
  const [twoFactor, setTwoFactor] = useState(profile.twoFactorEnabled);
  const [loginNotifs, setLoginNotifs] = useState(profile.loginNotificationsEnabled);

  const handleChange = (field: keyof AdminAccountProfile, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    onUpdateProfile?.({ [field]: value });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
      {/* LEFT COLUMN: Main Account Settings & Forms (8 cols) */}
      <div className="lg:col-span-8 space-y-5 sm:space-y-6">
        {/* Section Header & Main Profile Card */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-5 sm:p-6 border border-neutral-200/80 dark:border-neutral-700 shadow-sm overflow-hidden">
          <div className="mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
              Account Settings
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              Manage your personal information, profile, and access details.
            </p>
          </div>

          {/* Profile Overview Banner */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 rounded-xl bg-neutral-50/80 dark:bg-neutral-900/50 border border-neutral-200/60 dark:border-neutral-700">
            <div className="flex items-center gap-3.5 min-w-0 flex-1">
              <div className="relative shrink-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#082218] text-emerald-400 text-lg sm:text-xl font-bold flex items-center justify-center border-2 border-emerald-500 shadow-sm">
                  {formData.avatarInitials}
                </div>
                <button className="absolute bottom-0 right-0 p-1.5 rounded-full bg-white dark:bg-neutral-800 shadow-md border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:text-emerald-600 transition-colors">
                  <Camera className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </button>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white truncate">
                    {formData.fullName}
                  </h3>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 shrink-0">
                    {formData.roleBadge}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  <span className="flex items-center gap-1 truncate max-w-[180px]">
                    <Mail className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <span className="truncate">{formData.email}</span>
                  </span>
                  <span className="text-neutral-300 dark:text-neutral-600">•</span>
                  <span className="flex items-center gap-1 whitespace-nowrap">
                    <Phone className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <span>{formData.phone}</span>
                  </span>
                  <span className="text-neutral-300 dark:text-neutral-600">•</span>
                  <span className="flex items-center gap-1 whitespace-nowrap">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <span>{formData.country}</span>
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={onChangePassword}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors shadow-xs shrink-0 whitespace-nowrap self-stretch sm:self-auto justify-center"
            >
              <Lock className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
              <span>Change Password</span>
            </button>
          </div>

          {/* Form: Personal Information */}
          <div className="mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-700">
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white mb-4">
              Personal Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-neutral-50/60 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0e5f2c]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-neutral-50/60 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0e5f2c]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1.5">
                  Phone Number
                </label>
                <div className="flex items-center">
                  <span className="inline-flex items-center px-2.5 py-2 text-xs font-bold rounded-l-xl bg-neutral-100 dark:bg-neutral-800 border border-r-0 border-neutral-200 dark:border-neutral-700 text-emerald-700 dark:text-emerald-400 shrink-0">
                    SA +966
                  </span>
                  <input
                    type="text"
                    value={formData.phone.replace('+966 ', '')}
                    onChange={(e) => handleChange('phone', `+966 ${e.target.value.replace('+966 ', '')}`)}
                    className="w-full px-3 py-2 text-xs rounded-r-xl bg-neutral-50/60 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0e5f2c]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1.5">
                  Language
                </label>
                <select
                  value={formData.language}
                  onChange={(e) => handleChange('language', e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-neutral-50/60 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 focus:outline-none"
                >
                  <option value="English">English</option>
                  <option value="Arabic">العربية (Arabic)</option>
                  <option value="Indonesian">Bahasa Indonesia</option>
                  <option value="Malay">Bahasa Melayu</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1.5">
                  Timezone
                </label>
                <select
                  value={formData.timezone}
                  onChange={(e) => handleChange('timezone', e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-neutral-50/60 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 focus:outline-none truncate"
                >
                  <option value="(GMT+3) Riyadh">(GMT+3) Riyadh, Saudi Arabia</option>
                  <option value="(GMT+7) Jakarta">(GMT+7) Jakarta, Indonesia</option>
                  <option value="(GMT+8) Kuala Lumpur">(GMT+8) Kuala Lumpur, Malaysia</option>
                  <option value="(GMT+0) London">(GMT+0) London, UK</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1.5">
                  Date Format
                </label>
                <select
                  value={formData.dateFormat}
                  onChange={(e) => handleChange('dateFormat', e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-neutral-50/60 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 focus:outline-none"
                >
                  <option value="DD MMM YYYY">DD MMM YYYY (e.g. 09 Oct 2026)</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD (e.g. 2026-10-09)</option>
                  <option value="MM/DD/YYYY">MM/DD/YYYY (e.g. 10/09/2026)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section: Profile Picture */}
          <div className="mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-700">
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white mb-3">
              Profile Picture
            </h3>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#082218] text-emerald-400 text-lg font-bold flex items-center justify-center shrink-0 border border-emerald-600">
                {formData.avatarInitials}
              </div>
              <div>
                <div className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                  Upload a new profile picture
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  JPG, PNG or WebP. Max size 2MB.
                </div>
                <div className="flex items-center gap-2 mt-2.5">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50 text-[#0e5f2c] hover:bg-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-300 transition-colors">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Image</span>
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-rose-50 text-rose-600 hover:bg-rose-100 dark:bg-rose-950/40 dark:text-rose-300 transition-colors">
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Account Preferences */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-5 sm:p-6 border border-neutral-200/80 dark:border-neutral-700 shadow-sm space-y-4 overflow-hidden">
          <div>
            <h3 className="text-base font-bold text-neutral-900 dark:text-white">
              Account Preferences
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              Customize how your admin workspace behaves and displays data.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {/* Theme */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-xl hover:bg-neutral-50/80 dark:hover:bg-neutral-700/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-600 flex items-center justify-center shrink-0">
                  <Sun className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-900 dark:text-white">Theme</div>
                  <div className="text-[11px] text-neutral-400">Choose your preferred appearance.</div>
                </div>
              </div>
              <select
                value={formData.theme}
                onChange={(e) => handleChange('theme', e.target.value)}
                className="px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-medium focus:outline-none"
              >
                <option value="Light">☀️ Light</option>
                <option value="Dark">🌙 Dark</option>
                <option value="System">🖥 System Default</option>
              </select>
            </div>

            {/* Language */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-xl hover:bg-neutral-50/80 dark:hover:bg-neutral-700/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-900 dark:text-white">Language</div>
                  <div className="text-[11px] text-neutral-400">Set your default interface language.</div>
                </div>
              </div>
              <select
                value={formData.language}
                onChange={(e) => handleChange('language', e.target.value)}
                className="px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-medium focus:outline-none"
              >
                <option value="English">English</option>
                <option value="Arabic">العربية</option>
                <option value="Indonesian">Bahasa Indonesia</option>
              </select>
            </div>

            {/* Timezone */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-xl hover:bg-neutral-50/80 dark:hover:bg-neutral-700/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-600 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-900 dark:text-white">Timezone</div>
                  <div className="text-[11px] text-neutral-400">Set your local timezone.</div>
                </div>
              </div>
              <select
                value={formData.timezone}
                onChange={(e) => handleChange('timezone', e.target.value)}
                className="px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-medium focus:outline-none"
              >
                <option value="(GMT+3) Riyadh">(GMT+3) Riyadh</option>
                <option value="(GMT+7) Jakarta">(GMT+7) Jakarta</option>
              </select>
            </div>

            {/* Date Format */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-xl hover:bg-neutral-50/80 dark:hover:bg-neutral-700/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/40 text-teal-600 flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-900 dark:text-white">Date Format</div>
                  <div className="text-[11px] text-neutral-400">Choose how dates are displayed.</div>
                </div>
              </div>
              <select
                value={formData.dateFormat}
                onChange={(e) => handleChange('dateFormat', e.target.value)}
                className="px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-medium focus:outline-none"
              >
                <option value="DD MMM YYYY">DD MMM YYYY (ex: 20 Oct 2026)</option>
                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
              </select>
            </div>

            {/* Currency */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-xl hover:bg-neutral-50/80 dark:hover:bg-neutral-700/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center shrink-0">
                  <DollarSign className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-900 dark:text-white">Currency</div>
                  <div className="text-[11px] text-neutral-400">Set your default currency.</div>
                </div>
              </div>
              <select
                value={formData.currency}
                onChange={(e) => handleChange('currency', e.target.value)}
                className="px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-medium focus:outline-none"
              >
                <option value="SAR (Saudi Riyal)">SAR (Saudi Riyal)</option>
                <option value="USD (US Dollar)">USD (US Dollar)</option>
                <option value="IDR (Indonesian Rupiah)">IDR (Indonesian Rupiah)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Account Status, Profile Completion, Quick Actions & Security (4 cols) */}
      <div className="lg:col-span-4 space-y-5">
        {/* Card 1: Account Status */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-5 border border-neutral-200/80 dark:border-neutral-700 shadow-sm">
          <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">
            Account Status
          </div>
          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300 flex items-center justify-center shrink-0">
              <Crown className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-neutral-900 dark:text-white">
                Super Admin
              </div>
              <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                Full access to all features and settings.
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Profile Completion */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-5 border border-neutral-200/80 dark:border-neutral-700 shadow-sm">
          <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">
            Profile Completion
          </div>

          <div className="flex items-center gap-4 mb-4">
            {/* Circular Gauge Ring */}
            <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-neutral-100 dark:text-neutral-700"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-emerald-500"
                  strokeDasharray="85, 100"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center font-bold text-base text-neutral-900 dark:text-white">
                85%
              </div>
            </div>

            {/* Checklist */}
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-1.5 text-neutral-800 dark:text-neutral-200 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Personal Information</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-800 dark:text-neutral-200 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Email Verification</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-800 dark:text-neutral-200 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Phone Verification</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-800 dark:text-neutral-200 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Business Profile</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-400 font-medium">
                <Circle className="w-3.5 h-3.5 text-neutral-300 dark:text-neutral-600 shrink-0" />
                <span>Add Profile Photo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Quick Actions */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-5 border border-neutral-200/80 dark:border-neutral-700 shadow-sm">
          <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">
            Quick Actions
          </div>
          <div className="grid grid-cols-4 gap-2 text-center">
            <button
              onClick={onChangePassword}
              className="flex flex-col items-center justify-center p-2 rounded-xl border border-neutral-100 dark:border-neutral-700/60 hover:bg-neutral-50 dark:hover:bg-neutral-700/40 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                <Lock className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-semibold text-neutral-700 dark:text-neutral-300 leading-tight line-clamp-2">
                Change Password
              </span>
            </button>

            <button
              onClick={onOpenTwoFactor}
              className="flex flex-col items-center justify-center p-2 rounded-xl border border-neutral-100 dark:border-neutral-700/60 hover:bg-neutral-50 dark:hover:bg-neutral-700/40 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-semibold text-neutral-700 dark:text-neutral-300 leading-tight line-clamp-2">
                Two-Factor Auth
              </span>
            </button>

            <button
              onClick={onOpenSessions}
              className="flex flex-col items-center justify-center p-2 rounded-xl border border-neutral-100 dark:border-neutral-700/60 hover:bg-neutral-50 dark:hover:bg-neutral-700/40 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-600 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                <Monitor className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-semibold text-neutral-700 dark:text-neutral-300 leading-tight line-clamp-2">
                Login Sessions
              </span>
            </button>

            <button
              onClick={onOpenLogs}
              className="flex flex-col items-center justify-center p-2 rounded-xl border border-neutral-100 dark:border-neutral-700/60 hover:bg-neutral-50 dark:hover:bg-neutral-700/40 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-600 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                <FileText className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-semibold text-neutral-700 dark:text-neutral-300 leading-tight line-clamp-2">
                Activity Log
              </span>
            </button>
          </div>
        </div>

        {/* Card 4: Login & Security */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-5 border border-neutral-200/80 dark:border-neutral-700 shadow-sm space-y-3.5">
          <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
            Login & Security
          </div>

          {/* Toggle: 2FA */}
          <div className="flex items-center justify-between gap-2 pt-1">
            <div className="flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-neutral-900 dark:text-white">
                  Two-Factor Authentication
                </div>
                <div className="text-[11px] text-neutral-400">
                  Add an extra layer of security to your account.
                </div>
              </div>
            </div>
            <button
              onClick={() => setTwoFactor(!twoFactor)}
              className={`w-10 h-5.5 rounded-full p-0.5 transition-colors shrink-0 ${
                twoFactor ? 'bg-emerald-600' : 'bg-neutral-300 dark:bg-neutral-600'
              }`}
            >
              <div
                className={`w-4.5 h-4.5 rounded-full bg-white transition-transform ${
                  twoFactor ? 'translate-x-4.5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Toggle: Login Notifications */}
          <div className="flex items-center justify-between gap-2 pt-2 border-t border-neutral-100 dark:border-neutral-700/60">
            <div className="flex items-start gap-2.5">
              <FileText className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-neutral-900 dark:text-white">
                  Login Notifications
                </div>
                <div className="text-[11px] text-neutral-400">
                  Get notified of new login activity.
                </div>
              </div>
            </div>
            <button
              onClick={() => setLoginNotifs(!loginNotifs)}
              className={`w-10 h-5.5 rounded-full p-0.5 transition-colors shrink-0 ${
                loginNotifs ? 'bg-emerald-600' : 'bg-neutral-300 dark:bg-neutral-600'
              }`}
            >
              <div
                className={`w-4.5 h-4.5 rounded-full bg-white transition-transform ${
                  loginNotifs ? 'translate-x-4.5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Links */}
          <div className="space-y-1.5 pt-2 border-t border-neutral-100 dark:border-neutral-700/60">
            <button
              onClick={onOpenSessions}
              className="w-full flex items-center justify-between py-2 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Monitor className="w-3.5 h-3.5 text-neutral-400" />
                <span>Active Sessions</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            </button>

            <button
              onClick={onChangePassword}
              className="w-full flex items-center justify-between py-2 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-neutral-400" />
                <span>Password</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            </button>

            <button
              onClick={onOpenLogs}
              className="w-full flex items-center justify-between py-2 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 transition-colors"
            >
              <div className="flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-neutral-400" />
                <span>Security Log</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
