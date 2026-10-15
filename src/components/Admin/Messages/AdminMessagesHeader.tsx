import React from 'react';
import { 
  MessageSquare, 
  Send, 
  PlusCircle, 
  ShieldCheck, 
  Download,
  Bot
} from 'lucide-react';

interface AdminMessagesHeaderProps {
  onNewMessage?: () => void;
  onBroadcast?: () => void;
  onExportAll?: () => void;
}

export const AdminMessagesHeader: React.FC<AdminMessagesHeaderProps> = ({
  onNewMessage,
  onBroadcast,
  onExportAll
}) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#072418] via-[#0e5f2c] to-[#0a3822] p-5 sm:p-6 lg:p-7 text-white shadow-lg shadow-emerald-950/20 border border-emerald-800/40">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-[#d4af37]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 -mb-12 w-60 h-60 rounded-full bg-emerald-400/10 blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="space-y-1.5 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold backdrop-blur-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Master Communications & Messaging Database</span>
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white flex items-center gap-2.5">
            <MessageSquare className="w-7 h-7 text-[#d4af37]" />
            All Messages Database
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
            Pusat database seluruh riwayat pesan masuk, pesan keluar, lampiran dokumen tiket/visa, WhatsApp API Gateway, SMS OTP, dan log notifikasi broadcast SafarHub Saudi.
          </p>
        </div>

        {/* Header Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 sm:self-auto">
          <button
            onClick={onExportAll || (() => alert('Exporting complete messages database...'))}
            className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 text-xs font-semibold backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4 text-emerald-300" />
            <span>Export Database</span>
          </button>

          <button
            onClick={onBroadcast || (() => alert('Open Broadcast Composer'))}
            className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 text-xs font-semibold backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <Send className="w-4 h-4 text-[#d4af37]" />
            <span>Broadcast Push</span>
          </button>

          <button
            onClick={onNewMessage || (() => alert('Compose & Dispatch New Message'))}
            className="px-4 py-2 rounded-xl bg-[#d4af37] hover:bg-[#c49f2e] text-[#072418] font-bold text-xs shadow-md shadow-[#d4af37]/20 transition-all flex items-center gap-2 cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" />
            <span>+ Send / Dispatch Message</span>
          </button>
        </div>
      </div>
    </div>
  );
};
