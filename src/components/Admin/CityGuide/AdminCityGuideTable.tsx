import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Compass, 
  Landmark, 
  Plane, 
  Train, 
  Eye, 
  Edit3, 
  Trash2, 
  MoreVertical, 
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sun,
  ShieldCheck,
  Star,
  CheckSquare,
  Square
} from 'lucide-react';
import { AdminCityRecord } from '../../../types/adminCityGuide';

interface AdminCityGuideTableProps {
  cities: AdminCityRecord[];
  onSelectCity?: (city: AdminCityRecord) => void;
  onEditCity?: (city: AdminCityRecord) => void;
  onDeleteCity?: (cityId: string) => void;
}

export const AdminCityGuideTable: React.FC<AdminCityGuideTableProps> = ({
  cities,
  onSelectCity,
  onEditCity,
  onDeleteCity
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(cities.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedCities = cities.slice(startIndex, startIndex + itemsPerPage);

  const toggleSelectAll = () => {
    if (selectedIds.length === displayedCities.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(displayedCities.map(c => c.id));
    }
  };

  const toggleSelect = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const getTierBadge = (tier: string) => {
    switch (tier) {
      case 'Holy City':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Capital Metropolis':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Red Sea Hub':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
      case 'UNESCO Heritage':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'Megacity / SEZ':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'Mountain City':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      default:
        return 'bg-slate-700/50 text-slate-300 border-slate-600/30';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
      case 'In Review':
        return 'bg-amber-500/15 text-amber-400 border-amber-500/30';
      case 'Draft':
        return 'bg-blue-500/15 text-blue-400 border-blue-500/30';
      case 'Archived':
        return 'bg-slate-600/20 text-slate-400 border-slate-600/30';
      default:
        return 'bg-slate-700/50 text-slate-300 border-slate-600/30';
    }
  };

  return (
    <div className="bg-[#1e293b]/70 backdrop-blur-md rounded-2xl border border-slate-800 shadow-xl overflow-hidden flex flex-col">
      {/* Table Top Batch Bar */}
      <div className="px-6 py-4 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-4 bg-slate-900/40">
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSelectAll}
            className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            {selectedIds.length > 0 && selectedIds.length === displayedCities.length ? (
              <CheckSquare className="w-4 h-4 text-[#00A651]" />
            ) : (
              <Square className="w-4 h-4 text-slate-500" />
            )}
            <span>Select All ({selectedIds.length} chosen)</span>
          </button>
          {selectedIds.length > 0 && (
            <div className="flex items-center gap-2 pl-3 border-l border-slate-800">
              <button 
                onClick={() => alert(`Bulk activated ${selectedIds.length} cities`)}
                className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 transition-all"
              >
                Set Active
              </button>
              <button 
                onClick={() => alert(`Bulk exported ${selectedIds.length} city profiles`)}
                className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 transition-all"
              >
                Export Selected
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>STA Registry Compliant &middot; 84 Profiles Synced</span>
        </div>
      </div>

      {/* Main Database Table with min-w-[1180px] to ensure strict horizontal alignment */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1180px]">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/60 text-[11px] font-bold uppercase tracking-wider text-slate-400 select-none">
              <th className="py-3.5 px-4 w-10 text-center">
                <span className="sr-only">Select</span>
              </th>
              <th className="py-3.5 px-4">City Profile & Code</th>
              <th className="py-3.5 px-4">Province & Tier</th>
              <th className="py-3.5 px-4">Demographics & Lodging</th>
              <th className="py-3.5 px-4">POIs & UNESCO</th>
              <th className="py-3.5 px-4">Transit & Airport</th>
              <th className="py-3.5 px-4">Weather & Curator</th>
              <th className="py-3.5 px-4 text-center">Status</th>
              <th className="py-3.5 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-sm">
            {displayedCities.length === 0 ? (
              <tr>
                <td colSpan={9} className="py-16 text-center text-slate-400">
                  <div className="flex flex-col items-center justify-center">
                    <Building2 className="w-12 h-12 text-slate-600 mb-3" />
                    <p className="text-base font-medium text-slate-300">No City Profiles Match Your Filter</p>
                    <p className="text-xs text-slate-500 mt-1">Try clearing search parameters or adjusting province filters.</p>
                  </div>
                </td>
              </tr>
            ) : (
              displayedCities.map((city) => {
                const isSelected = selectedIds.includes(city.id);
                return (
                  <tr
                    key={city.id}
                    className={`group transition-colors hover:bg-slate-800/40 ${
                      isSelected ? 'bg-[#00A651]/5' : ''
                    }`}
                  >
                    {/* Checkbox */}
                    <td className="py-4 px-4 text-center">
                      <button
                        onClick={() => toggleSelect(city.id)}
                        className="text-slate-500 hover:text-white transition-colors"
                      >
                        {isSelected ? (
                          <CheckSquare className="w-4 h-4 text-[#00A651]" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-600 group-hover:text-slate-400" />
                        )}
                      </button>
                    </td>

                    {/* City Profile & Code */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-800 border border-slate-700/60 flex-shrink-0 shadow-inner">
                          <img
                            src={city.image}
                            alt={city.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {city.featured && (
                            <div className="absolute top-1 right-1 p-0.5 rounded-full bg-amber-500/90 text-slate-950" title="Featured Hub">
                              <Star className="w-2.5 h-2.5 fill-current" />
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-slate-100 group-hover:text-[#00A651] transition-colors">
                              {city.name}
                            </span>
                            <span className="text-[11px] font-arabic font-medium text-amber-400/90" dir="rtl">
                              {city.arabicName}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-400">
                            <span className="font-mono text-[11px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700/50">
                              {city.code}
                            </span>
                            <span>&middot;</span>
                            <span className="text-emerald-400 font-medium text-[11px]">{city.startingPrice}</span>
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Province & Tier */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 text-slate-200 font-medium text-xs">
                          <MapPin className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" />
                          <span>{city.province}</span>
                        </div>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold border w-fit ${getTierBadge(city.tier)}`}>
                          {city.tier}
                        </span>
                      </div>
                    </td>

                    {/* Demographics & Lodging */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="flex flex-col text-xs gap-0.5">
                        <div className="text-slate-200 font-medium">
                          Pop: <span className="text-slate-300">{city.population}</span>
                        </div>
                        <div className="text-slate-400 text-[11px] flex items-center gap-1">
                          <Building2 className="w-3 h-3 text-blue-400" />
                          <span>{city.hotelsCount} verified hotels</span>
                        </div>
                      </div>
                    </td>

                    {/* POIs & UNESCO */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="flex flex-col gap-1 text-xs">
                        <div className="flex items-center gap-1.5 font-semibold text-slate-200">
                          <Compass className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{city.attractionsCount} Attractions</span>
                        </div>
                        {city.unescoSitesCount > 0 ? (
                          <div className="flex items-center gap-1 text-[11px] font-medium text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20 w-fit">
                            <Landmark className="w-3 h-3" />
                            <span>{city.unescoSitesCount} UNESCO Sites</span>
                          </div>
                        ) : (
                          <span className="text-[11px] text-slate-500">No UNESCO listed</span>
                        )}
                      </div>
                    </td>

                    {/* Transit & Airport */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="flex flex-col text-xs gap-1 max-w-[220px]">
                        <div className="flex items-center gap-1.5 text-slate-300 truncate" title={city.primaryAirport}>
                          <Plane className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                          <span className="truncate">{city.primaryAirport}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-400 text-[11px] truncate" title={city.transitHub}>
                          <Train className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                          <span className="truncate">{city.transitHub}</span>
                        </div>
                      </div>
                    </td>

                    {/* Weather & Curator */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="flex flex-col text-xs gap-0.5">
                        <div className="flex items-center gap-1.5 text-amber-300 font-medium">
                          <Sun className="w-3.5 h-3.5" />
                          <span>{city.weather.temp} &middot; {city.weather.condition}</span>
                        </div>
                        <div className="text-[11px] text-slate-400">
                          Curator: <span className="text-slate-300">{city.curator}</span>
                        </div>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="py-4 px-4 text-center whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${getStatusBadge(city.status)}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 animate-pulse" />
                        {city.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => onSelectCity?.(city)}
                          title="View Profile Details"
                          className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onEditCity?.(city)}
                          title="Edit City Data"
                          className="p-1.5 text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-colors"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onDeleteCity?.(city.id)}
                          title="Archive / Remove"
                          className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
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

      {/* Pagination & Summary Footer */}
      <div className="px-6 py-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 bg-slate-900/40 text-xs text-slate-400">
        <div>
          Showing <span className="font-semibold text-slate-200">{displayedCities.length > 0 ? startIndex + 1 : 0}</span> to{' '}
          <span className="font-semibold text-slate-200">
            {Math.min(startIndex + itemsPerPage, cities.length)}
          </span>{' '}
          of <span className="font-semibold text-slate-200">{cities.length}</span> total city database records
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="flex items-center gap-1 px-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-7 h-7 rounded-lg text-xs font-semibold transition-all ${
                  currentPage === page
                    ? 'bg-[#00A651] text-white shadow-md shadow-[#00A651]/20'
                    : 'bg-slate-800/40 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
