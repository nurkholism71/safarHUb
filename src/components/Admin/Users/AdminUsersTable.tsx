import React, { useState } from 'react';
import { 
  Users, 
  MoreHorizontal, 
  Eye, 
  Edit3, 
  Trash2, 
  ShieldCheck, 
  CheckSquare, 
  Square,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { AdminUserRecord } from '../../../types/adminUsers';

interface AdminUsersTableProps {
  users: AdminUserRecord[];
  onSelectUser?: (user: AdminUserRecord) => void;
  onEditUser?: (user: AdminUserRecord) => void;
  onDeleteUser?: (userId: string) => void;
}

export const AdminUsersTable: React.FC<AdminUsersTableProps> = ({
  users,
  onSelectUser,
  onEditUser,
  onDeleteUser
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(users.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedUsers = users.slice(startIndex, startIndex + itemsPerPage);

  const toggleSelectAll = () => {
    if (selectedIds.length === displayedUsers.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(displayedUsers.map(u => u.id));
    }
  };

  const toggleSelect = (id: string) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const getUserTypeBadge = (type: string) => {
    switch (type) {
      case 'Customer':
        return 'bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 border-blue-200/60 dark:border-blue-800/40';
      case 'Umrah Traveler':
        return 'bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400 border-purple-200/60 dark:border-purple-800/40';
      case 'Premium':
        return 'bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 border-amber-200/60 dark:border-amber-800/40';
      case 'Corporate':
        return 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400 border-indigo-200/60 dark:border-indigo-800/40';
      case 'Agent':
        return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
      default:
        return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-800/40';
      case 'Inactive':
        return 'bg-rose-50 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400 border-rose-200/60 dark:border-rose-800/40';
      case 'Pending':
        return 'bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 border-amber-200/60 dark:border-amber-800/40';
      case 'Blocked':
        return 'bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-400 border-slate-300 dark:border-slate-700';
      default:
        return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs overflow-hidden flex flex-col">
      {/* Table Batch Controls (if selected) */}
      {selectedIds.length > 0 && (
        <div className="px-5 py-3 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between bg-emerald-50/50 dark:bg-emerald-950/30">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
              {selectedIds.length} users selected
            </span>
            <button
              onClick={() => alert(`Sent notification email to ${selectedIds.length} users`)}
              className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition-all cursor-pointer"
            >
              Send Broadcast
            </button>
            <button
              onClick={() => alert(`Exported ${selectedIds.length} user records`)}
              className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-all cursor-pointer"
            >
              Export Selected
            </button>
          </div>
        </div>
      )}

      {/* Main Users Table with min-w-[1180px] to guarantee strict horizontal alignment */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1180px]">
          <thead>
            <tr className="border-b border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50 text-[11px] font-bold text-slate-500 dark:text-slate-400 select-none">
              <th className="py-3.5 px-4 w-10 text-center">
                <button
                  onClick={toggleSelectAll}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
                >
                  {selectedIds.length > 0 && selectedIds.length === displayedUsers.length ? (
                    <CheckSquare className="w-4 h-4 text-[#00A651]" />
                  ) : (
                    <Square className="w-4 h-4" />
                  )}
                </button>
              </th>
              <th className="py-3.5 px-4">User</th>
              <th className="py-3.5 px-4">Email / Phone</th>
              <th className="py-3.5 px-4">Country</th>
              <th className="py-3.5 px-4">User Type</th>
              <th className="py-3.5 px-4">Status</th>
              <th className="py-3.5 px-4">Total Bookings</th>
              <th className="py-3.5 px-4">Total Spending</th>
              <th className="py-3.5 px-4">Joined Date</th>
              <th className="py-3.5 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-xs">
            {displayedUsers.length === 0 ? (
              <tr>
                <td colSpan={10} className="py-14 text-center text-slate-400">
                  <div className="flex flex-col items-center justify-center">
                    <Users className="w-10 h-10 text-slate-300 dark:text-slate-600 mb-2" />
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-300">No Users Match Your Filters</p>
                    <p className="text-xs text-slate-400 mt-0.5">Try resetting search keywords or segment filters.</p>
                  </div>
                </td>
              </tr>
            ) : (
              displayedUsers.map((user) => {
                const isSelected = selectedIds.includes(user.id);

                return (
                  <tr
                    key={user.id}
                    className={`group transition-colors hover:bg-slate-50/80 dark:hover:bg-slate-800/40 ${
                      isSelected ? 'bg-emerald-50/30 dark:bg-emerald-950/20' : ''
                    }`}
                  >
                    {/* Checkbox */}
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => toggleSelect(user.id)}
                        className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
                      >
                        {isSelected ? (
                          <CheckSquare className="w-4 h-4 text-[#00A651]" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-slate-400" />
                        )}
                      </button>
                    </td>

                    {/* User */}
                    <td className="py-3 px-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0 border border-slate-200 dark:border-slate-700">
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>{user.name}</span>
                            {user.isVerified && (
                              <span title="Verified User">
                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-400">
                            {user.username}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Email / Phone */}
                    <td className="py-3 px-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="text-slate-800 dark:text-slate-200 font-medium">
                          {user.email}
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {user.phone}
                        </span>
                      </div>
                    </td>

                    {/* Country */}
                    <td className="py-3 px-4 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                        <span className="text-base">{user.countryFlag}</span>
                        <span>{user.country}</span>
                      </div>
                    </td>

                    {/* User Type */}
                    <td className="py-3 px-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-semibold border ${getUserTypeBadge(user.userType)}`}>
                        {user.userType}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="py-3 px-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-semibold border ${getStatusBadge(user.status)}`}>
                        {user.status}
                      </span>
                    </td>

                    {/* Total Bookings */}
                    <td className="py-3 px-4 whitespace-nowrap">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {user.totalBookings}
                      </span>
                    </td>

                    {/* Total Spending */}
                    <td className="py-3 px-4 whitespace-nowrap">
                      <span className="font-bold text-slate-900 dark:text-white font-sans">
                        {user.totalSpending}
                      </span>
                    </td>

                    {/* Joined Date */}
                    <td className="py-3 px-4 whitespace-nowrap text-slate-500 dark:text-slate-400">
                      {user.joinedDate}
                    </td>

                    {/* Actions */}
                    <td className="py-3 px-4 text-center whitespace-nowrap">
                      <button
                        onClick={() => onSelectUser?.(user)}
                        className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                        title="Actions"
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="px-5 py-3.5 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50 text-xs text-slate-500 dark:text-slate-400">
        <div>
          Showing <span className="font-semibold text-slate-700 dark:text-slate-200">{displayedUsers.length > 0 ? startIndex + 1 : 0}</span> to{' '}
          <span className="font-semibold text-slate-700 dark:text-slate-200">
            {Math.min(startIndex + itemsPerPage, users.length)}
          </span>{' '}
          of <span className="font-semibold text-slate-700 dark:text-slate-200">{users.length}</span> registered users
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="px-2 text-xs font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
