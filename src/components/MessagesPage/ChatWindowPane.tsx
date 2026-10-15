import React, { useState } from 'react';
import {
  Search,
  MoreVertical,
  Paperclip,
  Smile,
  Send,
  Download,
  FileText,
  Building2,
  CheckCheck,
  Headphones,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { INITIAL_CHAT_MESSAGES } from '../../data/messagesData';
import { ChatMessage, MessageThreadItem } from '../../types/messages';

interface ChatWindowPaneProps {
  activeThread: MessageThreadItem;
  onOpenCardDetails?: () => void;
}

export const ChatWindowPane: React.FC<ChatWindowPaneProps> = ({
  activeThread,
  onOpenCardDetails
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_CHAT_MESSAGES);
  const [inputText, setInputText] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputText('');

    // Simulate auto-reply from concierge
    setTimeout(() => {
      const replyMsg: ChatMessage = {
        id: `msg-reply-${Date.now()}`,
        sender: 'support',
        text: 'Thank you for your message. Our Saudi concierge is taking care of this immediately! 🙏',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, replyMsg]);
    }, 1200);
  };

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl shadow-xs flex flex-col h-[760px] overflow-hidden">
      {/* 1. Chat Header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 bg-slate-50/70">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <Headphones className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 leading-tight">
              {activeThread.name}
            </h3>
            <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Online
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => alert('Search in this conversation')}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={() => alert('Opening conversation settings')}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Scrollable Messages Body */}
      <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 bg-[#f8fafc]/50">
        {messages.map((msg) => {
          const isUser = msg.sender === 'user';

          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
            >
              {/* Text Bubble */}
              {msg.text && (
                <div
                  className={`max-w-[85%] sm:max-w-[75%] p-3.5 rounded-2xl text-xs font-medium leading-relaxed shadow-2xs ${
                    isUser
                      ? 'bg-[#0e5f2c] text-white rounded-br-xs'
                      : 'bg-white border border-slate-200/90 text-slate-800 rounded-bl-xs'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>
              )}

              {/* Embedded Package Card */}
              {msg.embeddedCard && (
                <div className="mt-2 max-w-[85%] sm:max-w-[75%] bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                  <div className="relative h-28 w-full bg-slate-100">
                    <img
                      src={msg.embeddedCard.image}
                      alt={msg.embeddedCard.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <span className="text-[10px] text-emerald-800 font-bold uppercase">
                      Umrah Package
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 font-serif">
                      {msg.embeddedCard.title}
                    </h4>
                    <p className="text-[11px] text-slate-500">{msg.embeddedCard.subTitle}</p>
                    <button
                      onClick={onOpenCardDetails}
                      className="w-full mt-2.5 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-xs font-bold rounded-lg transition-colors text-center border border-emerald-200"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              )}

              {/* Embedded Attachments (Vouchers) */}
              {msg.attachments && (
                <div className="mt-2 space-y-2 max-w-[85%] sm:max-w-[75%] w-full">
                  {msg.attachments.map((att, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-2xl shadow-2xs group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-black text-[9px]">
                          PDF
                        </div>
                        <div>
                          <h5 className="text-xs font-bold text-slate-900 line-clamp-1">
                            {att.name}
                          </h5>
                          <span className="text-[10px] text-slate-400">{att.size}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => alert(`Downloading ${att.name}`)}
                        className="p-1.5 text-slate-400 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition-colors"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Timestamp & checkmarks */}
              <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-1 px-1">
                <span>{msg.time}</span>
                {isUser && <CheckCheck className="w-3 h-3 text-emerald-600" />}
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Input Message Form */}
      <form
        onSubmit={handleSend}
        className="p-3 border-t border-slate-200 bg-white flex items-center gap-2"
      >
        <button
          type="button"
          onClick={() => alert('Attach file or screenshot')}
          className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
        >
          <Paperclip className="w-4 h-4" />
        </button>

        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 text-xs font-semibold px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-hidden"
        />

        <button
          type="button"
          onClick={() => alert('Select Emoji')}
          className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
        >
          <Smile className="w-4 h-4" />
        </button>

        <button
          type="submit"
          className="p-2.5 bg-[#0e5f2c] hover:bg-[#09421e] text-white rounded-xl shadow-xs transition-colors"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
