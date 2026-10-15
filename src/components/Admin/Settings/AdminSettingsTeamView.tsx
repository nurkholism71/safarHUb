import React, { useState } from 'react';
import { Search, Plus, Users, Shield, ShieldCheck, Mail, Eye, Edit3, Lock, CheckCircle2 } from 'lucide-react';
import { AdminTeamMemberRecord } from '../../../types/adminSettings';

interface AdminSettingsTeamViewProps {
  teamMembers: AdminTeamMemberRecord[];
  onInviteMember?: () => void;
}

export const AdminSettingsTeamView: React.FC<AdminSettingsTeamViewProps> = ({
  teamMembers,
  onInviteMember
}) => {
  const [search, setSearch] = useState('');

  const filtered = teamMembers.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase()) ||
      m.role.toLowerCase().includes(search.toLowerCase()) ||
      m.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200/80 dark:border-neutral-700 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-neutral-200/80 dark:border-neutral-700 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-neutral-50/50 dark:bg-neutral-800/50">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search staff name, email, role, department..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#0e5f2c]"
          />
        </div>

        <button
          onClick={onInviteMember}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#0e5f2c] text-white hover:bg-[#0c4e24] transition-colors shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Invite Team Member</span>
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto no-scrollbar">
        <table className="min-w-full text-left text-xs divide-y divide-neutral-200/70 dark:divide-neutral-700">
          <thead className="bg-neutral-50 dark:bg-neutral-800/80 text-[11px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
            <tr>
              <th className="py-3 px-4">Member Name & Email</th>
              <th className="py-3 px-3">Role & Department</th>
              <th className="py-3 px-3">Access Level</th>
              <th className="py-3 px-3">2FA Status</th>
              <th className="py-3 px-3">Last Active</th>
              <th className="py-3 px-3">Status</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 dark:divide-neutral-700/60">
            {filtered.map((member) => (
              <tr key={member.id} className="hover:bg-neutral-50/80 dark:hover:bg-neutral-700/40 transition-colors">
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-9 h-9 rounded-full object-cover shrink-0 shadow-xs"
                    />
                    <div className="min-w-0">
                      <div className="font-semibold text-neutral-900 dark:text-white truncate">
                        {member.name}
                      </div>
                      <div className="text-[11px] text-neutral-400 truncate">{member.email}</div>
                    </div>
                  </div>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <div className="font-semibold text-neutral-900 dark:text-white">{member.role}</div>
                  <div className="text-[10px] text-neutral-400">{member.department}</div>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      member.accessLevel === 'Full Access'
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300'
                    }`}
                  >
                    {member.accessLevel}
                  </span>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <div className="flex items-center gap-1 text-xs">
                    <ShieldCheck
                      className={`w-3.5 h-3.5 ${
                        member.twoFactorStatus === 'Enabled' ? 'text-emerald-500' : 'text-neutral-400'
                      }`}
                    />
                    <span
                      className={
                        member.twoFactorStatus === 'Enabled'
                          ? 'text-emerald-600 font-semibold'
                          : 'text-neutral-400'
                      }
                    >
                      {member.twoFactorStatus}
                    </span>
                  </div>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap text-neutral-500 font-mono">
                  {member.lastActive}
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                    {member.status}
                  </span>
                </td>

                <td className="py-3.5 px-4 text-right whitespace-nowrap">
                  <button className="p-1.5 rounded-lg text-neutral-500 hover:text-[#0e5f2c] hover:bg-emerald-50 dark:hover:bg-neutral-700">
                    <Edit3 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
