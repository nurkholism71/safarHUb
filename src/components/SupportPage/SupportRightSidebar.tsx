import React, { useState } from 'react';
import {
  BellRing,
  PhoneCall,
  Ticket,
  FileCheck2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { FAQ_LIST } from '../../data/supportData';

interface SupportRightSidebarProps {
  onCallEmergency?: () => void;
  onTrackTickets?: () => void;
  onViewAllFaqs?: () => void;
}

export const SupportRightSidebar: React.FC<SupportRightSidebarProps> = ({
  onCallEmergency,
  onTrackTickets,
  onViewAllFaqs
}) => {
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setExpandedFaqId(expandedFaqId === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* 1. Urgent Assistance Emergency Card */}
      <div className="bg-gradient-to-br from-amber-500/10 via-rose-500/5 to-white rounded-3xl border border-amber-200/80 p-5 shadow-xs">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 shadow-xs animate-bounce">
            <BellRing className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Urgent Assistance?
            </h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Need immediate help during your trip in Saudi? Our emergency support team is available 24/7.
            </p>
          </div>
        </div>

        <button
          onClick={onCallEmergency}
          className="mt-4 w-full py-2.5 px-4 rounded-xl bg-[#0e5f2c] hover:bg-[#09421e] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-950/20 active:scale-98"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Call Emergency Support</span>
        </button>
      </div>

      {/* 2. Track Support Requests Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
            <Ticket className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-slate-900">
              Track Your Support Requests
            </h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              View the status of your support tickets and past conversations.
            </p>
            <button
              onClick={onTrackTickets}
              className="mt-3.5 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 text-slate-800 text-xs font-bold transition-all border border-slate-200/70"
            >
              <span>My Tickets</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. Frequently Asked Questions Accordion */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs">
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
          <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-emerald-700" />
            <span>Frequently Asked Questions</span>
          </h4>
          <button
            onClick={onViewAllFaqs}
            className="text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline flex items-center gap-0.5"
          >
            <span>View All</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="space-y-2">
          {FAQ_LIST.map((faq) => {
            const isExpanded = expandedFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className="border border-slate-100 rounded-2xl overflow-hidden bg-slate-50/50 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-3 text-left text-xs font-bold text-slate-800 hover:text-emerald-900 transition-colors"
                >
                  <span className="pr-2">{faq.question}</span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-emerald-700 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {isExpanded && (
                  <div className="px-3 pb-3 text-xs text-slate-600 leading-relaxed border-t border-slate-100/80 pt-2 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
