import React, { useState } from 'react';
import { Building2, Save, FileCheck, Landmark, Globe, Mail, Phone, MapPin } from 'lucide-react';
import { BusinessProfileData } from '../../../types/adminSettings';

interface AdminSettingsBusinessViewProps {
  businessData: BusinessProfileData;
  onSave?: (updated: BusinessProfileData) => void;
}

export const AdminSettingsBusinessView: React.FC<AdminSettingsBusinessViewProps> = ({
  businessData,
  onSave
}) => {
  const [data, setData] = useState(businessData);
  const [savedMessage, setSavedMessage] = useState(false);

  const handleChange = (field: keyof BusinessProfileData, val: any) => {
    setData((prev) => ({ ...prev, [field]: val }));
  };

  const handleSave = () => {
    onSave?.(data);
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200/80 dark:border-neutral-700 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-5 border-b border-neutral-100 dark:border-neutral-700">
        <div>
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg font-bold text-neutral-900 dark:text-white">
              Saudi Business & Legal Entity Profile
            </h2>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
            Registered commercial registration, VAT tax number, and official tourism licensing.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#0e5f2c] text-white hover:bg-[#0c4e24] transition-colors shadow-xs"
        >
          <Save className="w-4 h-4" />
          <span>{savedMessage ? 'Saved Successfully!' : 'Save Business Profile'}</span>
        </button>
      </div>

      {/* Grid: Legal & Registration */}
      <div>
        <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">
          Legal Registration & Licensing
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-medium text-neutral-500 mb-1.5">
              Registered Company Name
            </label>
            <input
              type="text"
              value={data.companyName}
              onChange={(e) => handleChange('companyName', e.target.value)}
              className="w-full px-3.5 py-2 text-xs rounded-xl bg-neutral-50/60 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0e5f2c]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-500 mb-1.5">
              Legal Entity Type
            </label>
            <input
              type="text"
              value={data.legalEntity}
              onChange={(e) => handleChange('legalEntity', e.target.value)}
              className="w-full px-3.5 py-2 text-xs rounded-xl bg-neutral-50/60 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-500 mb-1.5">
              Saudi Commercial Registration (CR)
            </label>
            <input
              type="text"
              value={data.commercialRegistrationNumber}
              onChange={(e) => handleChange('commercialRegistrationNumber', e.target.value)}
              className="w-full px-3.5 py-2 text-xs font-mono rounded-xl bg-neutral-50/60 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-500 mb-1.5">
              VAT / Tax ID Number
            </label>
            <input
              type="text"
              value={data.vatNumber}
              onChange={(e) => handleChange('vatNumber', e.target.value)}
              className="w-full px-3.5 py-2 text-xs font-mono rounded-xl bg-neutral-50/60 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-500 mb-1.5">
              Ministry of Tourism License No.
            </label>
            <input
              type="text"
              value={data.tourismLicenseNumber}
              onChange={(e) => handleChange('tourismLicenseNumber', e.target.value)}
              className="w-full px-3.5 py-2 text-xs font-mono rounded-xl bg-neutral-50/60 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-emerald-600 font-bold focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-500 mb-1.5">
              Established Year
            </label>
            <input
              type="number"
              value={data.establishedYear}
              onChange={(e) => handleChange('establishedYear', Number(e.target.value))}
              className="w-full px-3.5 py-2 text-xs rounded-xl bg-neutral-50/60 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Grid: Headquarters & Contact */}
      <div className="pt-4 border-t border-neutral-100 dark:border-neutral-700">
        <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">
          Headquarters & Official Contact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-neutral-500 mb-1.5">
              Headquarters Street Address
            </label>
            <input
              type="text"
              value={data.headquartersAddress}
              onChange={(e) => handleChange('headquartersAddress', e.target.value)}
              className="w-full px-3.5 py-2 text-xs rounded-xl bg-neutral-50/60 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-500 mb-1.5">
              City & Postal Code
            </label>
            <input
              type="text"
              value={`${data.city}, ${data.postalCode}`}
              onChange={(e) => handleChange('city', e.target.value)}
              className="w-full px-3.5 py-2 text-xs rounded-xl bg-neutral-50/60 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-500 mb-1.5">
              Official Contact Email
            </label>
            <input
              type="email"
              value={data.officialEmail}
              onChange={(e) => handleChange('officialEmail', e.target.value)}
              className="w-full px-3.5 py-2 text-xs rounded-xl bg-neutral-50/60 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-500 mb-1.5">
              Corporate Phone Number
            </label>
            <input
              type="text"
              value={data.officialPhone}
              onChange={(e) => handleChange('officialPhone', e.target.value)}
              className="w-full px-3.5 py-2 text-xs rounded-xl bg-neutral-50/60 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-500 mb-1.5">
              Official Domain Website
            </label>
            <input
              type="text"
              value={data.website}
              onChange={(e) => handleChange('website', e.target.value)}
              className="w-full px-3.5 py-2 text-xs rounded-xl bg-neutral-50/60 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Grid: Corporate Bank Account */}
      <div className="pt-4 border-t border-neutral-100 dark:border-neutral-700">
        <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">
          Corporate Banking & Settlement Account
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-medium text-neutral-500 mb-1.5">
              Principal Bank
            </label>
            <input
              type="text"
              value={data.bankName}
              onChange={(e) => handleChange('bankName', e.target.value)}
              className="w-full px-3.5 py-2 text-xs rounded-xl bg-neutral-50/60 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-500 mb-1.5">
              Corporate IBAN Number
            </label>
            <input
              type="text"
              value={data.ibanNumber}
              onChange={(e) => handleChange('ibanNumber', e.target.value)}
              className="w-full px-3.5 py-2 text-xs font-mono rounded-xl bg-neutral-50/60 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-500 mb-1.5">
              SWIFT / BIC Code
            </label>
            <input
              type="text"
              value={data.swiftCode}
              onChange={(e) => handleChange('swiftCode', e.target.value)}
              className="w-full px-3.5 py-2 text-xs font-mono rounded-xl bg-neutral-50/60 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
