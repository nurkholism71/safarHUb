import React, { useState } from 'react';
import { 
  Eye, 
  Copy, 
  Check, 
  Star, 
  Trash2, 
  FileText, 
  Image as ImageIcon, 
  Bot, 
  PhoneCall, 
  MessageCircle, 
  Inbox, 
  Crown, 
  Mail, 
  Smartphone,
  ArrowDownLeft,
  ArrowUpRight,
  Radio,
  CheckCheck,
  ChevronLeft,
  ChevronRight,
  Download
} from 'lucide-react';
import { AdminMessageItem } from '../../../types/adminMessages';

interface AdminMessagesTableProps {
  messages: AdminMessageItem[];
  onViewMessage: (msg: AdminMessageItem) => void;
  onToggleStar: (id: string) => void;
  onDeleteMessage: (id: string) => void;
}

export const AdminMessagesTable: React.FC<AdminMessagesTableProps> = ({
  messages,
  onViewMessage,
  onToggleStar,
  onDeleteMessage
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(messages.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedMessages = messages.slice(startIndex, startIndex + itemsPerPage);

  const toggleSelectAll = () => {
    if (selectedIds.length === displayedMessages.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(displayedMessages.map(m => m.id));
    }
  };

  const toggleSelect = (id: string) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const getChannelBadge = (channel: string) => {
    switch (channel) {
      case 'WhatsApp':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/40">
            <PhoneCall className="w-3 h-3 text-emerald-500" />
            WhatsApp
          </span>
        );
      case 'Live Portal':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-400 border border-teal-200/60 dark:border-teal-800/40">
            <MessageCircle className="w-3 h-3 text-teal-500" />
            Live Portal
          </span>
        );
      case 'In-App':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/40">
            <Inbox className="w-3 h-3 text-blue-500" />
            In-App
          </span>
        );
      case 'VIP Hotline':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/40">
            <Crown className="w-3 h-3 text-amber-500" />
            VIP Direct
          </span>
        );
      case 'Email':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-400 border border-purple-200/60 dark:border-purple-800/40">
            <Mail className="w-3 h-3 text-purple-500" />
            Email
          </span>
        );
      case 'SMS Gateway':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-orange-50 text-orange-700 dark:bg-orange-950/60 dark:text-orange-400 border border-orange-200/60 dark:border-orange-800/40">
            <Smartphone className="w-3 h-3 text-orange-500" />
            SMS Gateway
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
            <Bot className="w-3 h-3" />
            System
          </span>
        );
    }
  };

  const getDirectionBadge = (dir: string) => {
    switch (dir) {
      case 'Incoming':
        return (
          <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded-md text-[10px] font-bold bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
            <ArrowDownLeft className="w-2.5 h-2.5" /> Masuk
          </span>
        );
      case 'Outgoing':
        return (
          <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
            <ArrowUpRight className="w-2.5 h-2.5" /> Keluar
          </span>
        );
      case 'Broadcast':
        return (
          <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded-md text-[10px] font-bold bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400 border border-purple-200 dark:border-purple-800">
            <Radio className="w-2.5 h-2.5" /> Broadcast
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded-md text-[10px] font-bold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
            <Bot className="w-2.5 h-2.5" /> Auto
          </span>
        );
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Read':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
            <CheckCheck className="w-3.5 h-3.5 text-blue-500" />
            Read
          </span>
        );
      case 'Delivered':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 dark:text-slate-400">
            <CheckCheck className="w-3.5 h-3.5 text-slate-400" />
            Delivered
          </span>
        );
      case 'Sent':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500">
            <Check className="w-3.5 h-3.5 text-slate-400" />
            Sent
          </span>
        );
      case 'Unread':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-300">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            Unread
          </span>
        );
      case 'Starred':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#d4af37]/15 text-[#b08d1e] dark:text-[#f3cc52] border border-[#d4af37]/30">
            <Star className="w-3 h-3 fill-[#d4af37] text-[#d4af37]" />
            Starred
          </span>
        );
      default:
        return (
          <span className="text-[11px] font-medium text-slate-400">
            {status}
          </span>
        );
    }
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'VIP Gold':
        return 'bg-[#d4af37]/15 text-[#b08d1e] dark:text-[#f3cc52] border-[#d4af37]/30';
      case 'Customer':
        return 'bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 border-blue-200/60 dark:border-blue-800/40';
      case 'Admin Support':
        return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border-emerald-200/60';
      case 'Super Admin':
        return 'bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-400 border-purple-200/60';
      case 'Travel Agent':
        return 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-400 border-indigo-200/60';
      default:
        return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300';
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs overflow-hidden flex flex-col w-full">
      {/* Batch Select Controls */}
      {selectedIds.length > 0 && (
        <div className="px-5 py-3 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between bg-emerald-50/60 dark:bg-emerald-950/30">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
              {selectedIds.length} messages selected
            </span>
            <button
              onClick={() => alert(`Marked ${selectedIds.length} messages as read`)}
              className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition-all cursor-pointer"
            >
              Mark as Read
            </button>
            <button
              onClick={() => alert(`Exported ${selectedIds.length} selected message logs`)}
              className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-all cursor-pointer"
            >
              Export Selected
            </button>
            <button
              onClick={() => {
                if (confirm(`Hapus ${selectedIds.length} pesan terpilih?`)) {
                  selectedIds.forEach(id => onDeleteMessage(id));
                  setSelectedIds([]);
                }
              }}
              className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100 transition-all cursor-pointer"
            >
              Hapus Terpilih
            </button>
          </div>
          <button
            onClick={() => setSelectedIds([])}
            className="text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer"
          >
            Clear selection
          </button>
        </div>
      )}

      {/* Main Database Table */}
      <div className="overflow-x-auto w-full">
        <table className="w-full text-left border-collapse min-w-[1020px]">
          <thead>
            <tr className="bg-slate-50/80 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 text-[11px] font-semibold uppercase tracking-wider border-b border-slate-200/80 dark:border-slate-800">
              <th className="p-3.5 pl-5 w-10 text-center">
                <input
                  type="checkbox"
                  checked={displayedMessages.length > 0 && selectedIds.length === displayedMessages.length}
                  onChange={toggleSelectAll}
                  className="rounded-sm border-slate-300 text-[#0e5f2c] focus:ring-[#0e5f2c] cursor-pointer"
                />
              </th>
              <th className="py-3.5 px-3">ID Pesan & Arah</th>
              <th className="py-3.5 px-3">Pengirim (Sender)</th>
              <th className="py-3.5 px-3">Penerima (Recipient)</th>
              <th className="py-3.5 px-3">Isi Pesan (Message Content)</th>
              <th className="py-3.5 px-3">Tipe / Media</th>
              <th className="py-3.5 px-3">Channel / Platform</th>
              <th className="py-3.5 px-3">Waktu Kirim</th>
              <th className="py-3.5 px-3 text-center">Status</th>
              <th className="py-3.5 px-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
            {displayedMessages.length === 0 ? (
              <tr>
                <td colSpan={10} className="p-8 text-center text-slate-400">
                  Tidak ada data pesan yang sesuai dengan filter pencarian database.
                </td>
              </tr>
            ) : (
              displayedMessages.map((item) => {
                const isSelected = selectedIds.includes(item.id);

                return (
                  <tr
                    key={item.id}
                    onClick={() => onViewMessage(item)}
                    className={`transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-50/40 dark:bg-emerald-950/20'
                        : 'hover:bg-slate-50/80 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    {/* Checkbox */}
                    <td
                      className="p-3.5 pl-5 text-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSelect(item.id);
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => {}}
                        className="rounded-sm border-slate-300 text-[#0e5f2c] focus:ring-[#0e5f2c] cursor-pointer"
                      />
                    </td>

                    {/* ID & Direction */}
                    <td className="py-3 px-3">
                      <div className="font-bold text-slate-900 dark:text-white font-mono text-[11px]">
                        {item.id}
                      </div>
                      <div className="mt-1">{getDirectionBadge(item.direction)}</div>
                    </td>

                    {/* Sender */}
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-2">
                        <img
                          src={item.sender.avatar}
                          alt={item.sender.name}
                          className="w-7 h-7 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                        />
                        <div className="min-w-0">
                          <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1">
                            <span className="truncate max-w-[120px]">{item.sender.name}</span>
                            <span>{item.sender.flag}</span>
                          </div>
                          <span
                            className={`px-1.5 py-0.2 rounded-md text-[9px] font-bold border inline-block mt-0.5 ${getRoleBadge(
                              item.sender.role
                            )}`}
                          >
                            {item.sender.role}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Recipient */}
                    <td className="py-3 px-3">
                      <div className="font-medium text-slate-800 dark:text-slate-200 truncate max-w-[130px]">
                        {item.recipient.name}
                      </div>
                      <div className="text-[10px] text-slate-400">{item.recipient.role}</div>
                    </td>

                    {/* Content & Attachment preview */}
                    <td className="py-3 px-3 max-w-[280px]">
                      <div className="text-slate-700 dark:text-slate-300 font-normal leading-relaxed line-clamp-2">
                        {item.content}
                      </div>
                      {item.attachment && (
                        <div className="mt-1 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-600 dark:text-slate-300 font-mono border border-slate-200 dark:border-slate-700">
                          <FileText className="w-3 h-3 text-[#d4af37]" />
                          <span className="truncate max-w-[150px]">{item.attachment.name}</span>
                          <span className="text-slate-400">({item.attachment.size})</span>
                        </div>
                      )}
                    </td>

                    {/* Media Type */}
                    <td className="py-3 px-3">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {item.messageType}
                      </span>
                    </td>

                    {/* Channel */}
                    <td className="py-3 px-3">
                      {getChannelBadge(item.channel)}
                    </td>

                    {/* Timestamp */}
                    <td className="py-3 px-3 text-slate-500 dark:text-slate-400 text-[11px] whitespace-nowrap">
                      {item.timestamp}
                    </td>

                    {/* Delivery Status */}
                    <td className="py-3 px-3 text-center whitespace-nowrap">
                      {getStatusBadge(item.status)}
                    </td>

                    {/* Actions */}
                    <td
                      className="py-3 px-4 text-right"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => onViewMessage(item)}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors cursor-pointer"
                          title="Lihat Detail Pesan"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleCopy(item.content, item.id)}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors cursor-pointer"
                          title="Copy Isi Pesan"
                        >
                          {copiedId === item.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                        <button
                          onClick={() => onToggleStar(item.id)}
                          className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                            item.isStarred
                              ? 'text-[#d4af37] bg-amber-50 dark:bg-amber-950/40'
                              : 'text-slate-400 hover:text-[#d4af37] hover:bg-slate-100'
                          }`}
                          title="Star / Prioritaskan"
                        >
                          <Star className={`w-3.5 h-3.5 ${item.isStarred ? 'fill-[#d4af37]' : ''}`} />
                        </button>
                        <button
                          onClick={() => onDeleteMessage(item.id)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors cursor-pointer"
                          title="Hapus dari Database"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="p-3.5 px-5 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/30">
        <div>
          Menampilkan <span className="font-semibold text-slate-900 dark:text-white">{messages.length > 0 ? startIndex + 1 : 0}</span> -{' '}
          <span className="font-semibold text-slate-900 dark:text-white">
            {Math.min(startIndex + itemsPerPage, messages.length)}
          </span>{' '}
          dari <span className="font-semibold text-slate-900 dark:text-white">{messages.length}</span> baris pesan database
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <span className="px-2 font-medium">
            Hal {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages || totalPages === 0}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
