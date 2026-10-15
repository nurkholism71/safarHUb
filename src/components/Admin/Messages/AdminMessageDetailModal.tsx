import React from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Download, 
  FileText, 
  PhoneCall, 
  MessageCircle, 
  Inbox, 
  Mail, 
  Crown,
  Smartphone,
  CheckCheck,
  Send,
  Trash2,
  Share2
} from 'lucide-react';
import { AdminMessageItem } from '../../../types/adminMessages';

interface AdminMessageDetailModalProps {
  message: AdminMessageItem | null;
  onClose: () => void;
  onDelete: (id: string) => void;
}

export const AdminMessageDetailModal: React.FC<AdminMessageDetailModalProps> = ({
  message,
  onClose,
  onDelete
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!message) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-xl w-full border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="p-4 px-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/70 dark:bg-slate-800/50">
          <div className="flex items-center gap-2.5">
            <span className="font-mono font-bold text-sm text-slate-900 dark:text-white">
              {message.id}
            </span>
            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
              {message.channel}
            </span>
            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
              {message.direction}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Sender & Recipient Card */}
          <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700">
            {/* Sender */}
            <div className="space-y-1">
              <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Pengirim (Sender)</div>
              <div className="flex items-center gap-2">
                <img
                  src={message.sender.avatar}
                  alt={message.sender.name}
                  className="w-8 h-8 rounded-full object-cover border border-slate-200"
                />
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                    {message.sender.name} {message.sender.flag}
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono">{message.sender.phone}</div>
                </div>
              </div>
            </div>

            {/* Recipient */}
            <div className="space-y-1">
              <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Penerima (Recipient)</div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  {message.recipient.name}
                </div>
                <div className="text-[10px] text-slate-500">{message.recipient.role}</div>
              </div>
            </div>
          </div>

          {/* Full Message Content Box */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
              <span>Isi Pesan Lengkap</span>
              <button
                onClick={handleCopy}
                className="text-[11px] text-[#0e5f2c] hover:underline flex items-center gap-1 cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                {copied ? 'Tersalin!' : 'Salin Teks'}
              </button>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 leading-relaxed select-text font-normal">
              {message.content}
            </div>
          </div>

          {/* Attachment Box (if any) */}
          {message.attachment && (
            <div className="p-3.5 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">{message.attachment.name}</div>
                  <div className="text-[10px] text-slate-400">{message.attachment.type} • {message.attachment.size}</div>
                </div>
              </div>
              <button
                onClick={() => alert(`Downloading attachment: ${message.attachment?.name}`)}
                className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold flex items-center gap-1 hover:bg-emerald-700 cursor-pointer"
              >
                <Download className="w-3 h-3" /> Unduh
              </button>
            </div>
          )}

          {/* Meta Info Grid */}
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div className="text-[10px] text-slate-400">Kategori</div>
              <div className="font-semibold text-slate-800 dark:text-slate-200">{message.category}</div>
            </div>
            <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div className="text-[10px] text-slate-400">Waktu Kirim</div>
              <div className="font-semibold text-slate-800 dark:text-slate-200">{message.timestamp}</div>
            </div>
            <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div className="text-[10px] text-slate-400">Status Pengiriman</div>
              <div className="font-bold text-emerald-600">{message.status}</div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 px-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/30">
          <button
            onClick={() => {
              if (confirm('Hapus pesan ini dari database?')) {
                onDelete(message.id);
                onClose();
              }
            }}
            className="px-3 py-1.5 rounded-lg text-rose-600 hover:bg-rose-50 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Hapus Pesan
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 cursor-pointer"
            >
              Tutup
            </button>
            <button
              onClick={() => {
                alert(`Direct reply initiated to ${message.sender.name}`);
                onClose();
              }}
              className="px-4 py-1.5 rounded-xl bg-[#0e5f2c] text-white text-xs font-bold hover:bg-[#0c4e24] flex items-center gap-1.5 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" /> Balas Pesan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
