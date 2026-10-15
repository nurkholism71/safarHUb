import React, { useState } from 'react';
import {
  Search,
  ShoppingBag,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Camera,
  Globe2,
  ChevronDown,
  Sparkles,
  MapPin
} from 'lucide-react';

interface JastipHeroProps {
  onSearch: (query: string, category: string) => void;
  onRequestCustom: () => void;
}

export const JastipHero: React.FC<JastipHeroProps> = ({ onSearch, onRequestCustom }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery, selectedCategory);
  };

  return (
    <div className="relative w-full overflow-hidden bg-slate-100 border-b border-slate-200">
      {/* Background Graphic & Luxury Panorama Overlay (Bright & High Contrast) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/jastip/hero_banner.jpg"
          alt="Saudi Arabia Makkah Skyline & Luxury Goods"
          className="w-full h-full object-cover object-right sm:object-center brightness-105 contrast-105"
        />
        {/* Subtle gradient to keep left text readable while right image stays bright and vibrant */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:via-white/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
        {/* Title, Subtitle & Badges */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Official B2B & Personal Shopper Concierge</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-serif tracking-tight leading-tight">
            Jastip Saudi
          </h1>
          <p className="text-lg sm:text-xl font-bold text-slate-700 mt-1">
            Your Trusted Personal Shopper in Saudi Arabia.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl font-medium leading-relaxed">
            Buy your favorite products from Saudi, we shop, we pack, we deliver — safely to you.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 mt-5 text-[11px] font-semibold text-slate-700">
            <div className="flex items-center gap-1.5 bg-white/90 px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>Trusted Shopper in Saudi</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/90 px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
              <span>Original Products</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/90 px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
              <Lock className="w-3.5 h-3.5 text-emerald-700" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/90 px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
              <Camera className="w-3.5 h-3.5 text-emerald-700" />
              <span>Photo & Video Proof</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/90 px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
              <Globe2 className="w-3.5 h-3.5 text-emerald-700" />
              <span>International Shipping</span>
            </div>
          </div>
        </div>

        {/* Integrated Search Bar & Custom Request CTA */}
        <div className="bg-white p-2.5 sm:p-3 rounded-2xl shadow-lg border border-slate-200 flex flex-col lg:flex-row items-stretch lg:items-center gap-2.5">
          {/* Category Dropdown */}
          <div className="relative min-w-[160px]">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-800 pr-8 outline-hidden focus:ring-2 focus:ring-emerald-600 cursor-pointer"
            >
              <option value="all">All Categories</option>
              <option value="dates">Dates (Kurma)</option>
              <option value="perfume">Perfume & Oud</option>
              <option value="islamic">Islamic Products</option>
              <option value="abaya">Abaya & Clothing</option>
              <option value="thobe">Thobe & Accessories</option>
              <option value="food">Food & Beverages</option>
              <option value="souvenir">Souvenir & Gifts</option>
              <option value="electronics">Electronics</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Search Input */}
          <form onSubmit={handleSearch} className="relative flex-1 flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products (e.g. dates, perfume, abaya, zamzam, etc)"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-3.5 pr-12 py-2.5 text-xs font-semibold text-slate-800 placeholder-slate-400 outline-hidden focus:ring-2 focus:ring-emerald-600"
            />
            <button
              type="submit"
              className="absolute right-1 p-2 bg-[#0e5f2c] text-white rounded-lg hover:bg-[#09421e] transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Destination Selector Pill */}
          <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 whitespace-nowrap">
            <span className="text-[10px] text-slate-400 uppercase font-bold">Deliver to</span>
            <span className="flex items-center gap-1 font-bold text-slate-900">
              <span className="text-base">🇮🇩</span> Indonesia
            </span>
          </div>

          {/* Request Custom Item CTA Button */}
          <button
            onClick={onRequestCustom}
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0e5f2c] hover:bg-[#09421e] text-white font-bold text-xs rounded-xl shadow-xs transition-colors whitespace-nowrap"
          >
            <ShoppingBag className="w-4 h-4 text-amber-300" />
            <div className="text-left">
              <div className="leading-tight">Request Jastip</div>
              <div className="text-[9px] font-normal text-amber-200">Custom Item</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
