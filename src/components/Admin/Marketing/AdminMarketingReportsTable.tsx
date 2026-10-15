import React, { useState } from 'react';
import { Search, Plus, FileText, Download, Share2, Calendar, FileSpreadsheet } from 'lucide-react';
import { MarketingReportRecord } from '../../../types/adminMarketing';

interface AdminMarketingReportsTableProps {
  reports: MarketingReportRecord[];
  onGenerateReport?: () => void;
}

export const AdminMarketingReportsTable: React.FC<AdminMarketingReportsTableProps> = ({
  reports,
  onGenerateReport
}) => {
  const [search, setSearch] = useState('');

  const filtered = reports.filter(
    (r) =>
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.reportType.toLowerCase().includes(search.toLowerCase()) ||
      r.generatedBy.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200/80 dark:border-neutral-700 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-neutral-200/80 dark:border-neutral-700 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-neutral-50/50 dark:bg-neutral-800/50">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search generated report title, period, creator..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#0e5f2c]"
          />
        </div>

        <button
          onClick={onGenerateReport}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#0e5f2c] text-white hover:bg-[#0c4e24] transition-colors shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Generate Custom Report</span>
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto no-scrollbar">
        <table className="min-w-full text-left text-xs divide-y divide-neutral-200/70 dark:divide-neutral-700">
          <thead className="bg-neutral-50 dark:bg-neutral-800/80 text-[11px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
            <tr>
              <th className="py-3 px-4">Report Title</th>
              <th className="py-3 px-3">Report Type</th>
              <th className="py-3 px-3">Coverage Period</th>
              <th className="py-3 px-3">Format & Size</th>
              <th className="py-3 px-3">Generated At / By</th>
              <th className="py-3 px-3">Status</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 dark:divide-neutral-700/60">
            {filtered.map((item) => (
              <tr key={item.id} className="hover:bg-neutral-50/80 dark:hover:bg-neutral-700/40 transition-colors">
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-2.5">
                    {item.fileFormat === 'PDF' ? (
                      <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 dark:bg-red-950/40 flex items-center justify-center shrink-0">
                        <FileText className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 flex items-center justify-center shrink-0">
                        <FileSpreadsheet className="w-4 h-4" />
                      </div>
                    )}
                    <div className="min-w-0">
                      <div className="font-semibold text-neutral-900 dark:text-white truncate max-w-[280px]">
                        {item.title}
                      </div>
                      <div className="text-[10px] text-neutral-400 font-mono">{item.id}</div>
                    </div>
                  </div>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200">
                    {item.reportType}
                  </span>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap text-neutral-600 dark:text-neutral-300 font-medium">
                  {item.period}
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <span className="font-bold text-neutral-900 dark:text-white">{item.fileFormat}</span>
                  <span className="text-[10px] text-neutral-400 ml-1.5">({item.fileSize})</span>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <div className="font-medium text-neutral-900 dark:text-white">{item.generatedBy}</div>
                  <div className="text-[10px] text-neutral-400 font-mono">{item.generatedDate}</div>
                </td>

                <td className="py-3.5 px-3 whitespace-nowrap">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                    {item.status}
                  </span>
                </td>

                <td className="py-3.5 px-4 text-right whitespace-nowrap">
                  <div className="flex items-center justify-end gap-1.5">
                    <button
                      onClick={() => alert(`Downloading ${item.title} (${item.fileFormat})`)}
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-[#0e5f2c] text-white hover:bg-[#0c4e24] transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
