import React, { useState } from 'react';
import { Heart, ShoppingBag, Star, ArrowRight, Check } from 'lucide-react';
import { JastipProduct } from '../../types/jastip';

interface FeaturedJastipProductsProps {
  products: JastipProduct[];
  onSelectProduct: (product: JastipProduct) => void;
  onAddToCart: (product: JastipProduct) => void;
  onViewAll: () => void;
}

export const FeaturedJastipProducts: React.FC<FeaturedJastipProductsProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  onViewAll
}) => {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [addedItems, setAddedItems] = useState<string[]>([]);

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAdd = (product: JastipProduct, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedItems((prev) => [...prev, product.id]);
    setTimeout(() => {
      setAddedItems((prev) => prev.filter((id) => id !== product.id));
    }, 1800);
  };

  return (
    <div className="my-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
            Featured Products
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Authentic, high-demand items handpicked from Saudi Arabia's finest markets
          </p>
        </div>

        <button
          onClick={onViewAll}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 group transition-colors"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Grid of Product Cards (4 columns on lg, 2 on sm) */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {products.map((prod) => {
          const isWishlisted = wishlist.includes(prod.id);
          const isAdded = addedItems.includes(prod.id);

          return (
            <div
              key={prod.id}
              onClick={() => onSelectProduct(prod)}
              className="group bg-white rounded-3xl border border-slate-200 hover:border-emerald-600/60 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
            >
              {/* Image Container with Wishlist & Badge */}
              <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Wishlist Button */}
                <button
                  onClick={(e) => toggleWishlist(prod.id, e)}
                  className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
                    isWishlisted
                      ? 'bg-rose-50 text-rose-600 shadow-sm'
                      : 'bg-white/80 hover:bg-white text-slate-600 hover:text-rose-500'
                  }`}
                  aria-label="Add to wishlist"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-600' : ''}`} />
                </button>

                {/* Optional Badge */}
                {prod.badge && (
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider rounded-md bg-amber-400 text-slate-900 shadow-2xs">
                    {prod.badge}
                  </span>
                )}

                {/* Origin/Weight tag */}
                <span className="absolute bottom-2 left-2 px-2 py-0.5 text-[9px] font-bold rounded-md bg-black/60 text-white backdrop-blur-xs">
                  {prod.weight}
                </span>
              </div>

              {/* Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-900 transition-colors leading-snug">
                    {prod.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium truncate mt-0.5">
                    {prod.subName}
                  </p>
                </div>

                {/* Price, Rating & Add-to-cart in anti-collision flex layout */}
                <div>
                  {/* Rating */}
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 mb-2">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-slate-800">{prod.rating}</span>
                    <span>({prod.reviewsCount})</span>
                  </div>

                  {/* Price & Action Button */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">Price</div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs font-bold text-emerald-800">SAR</span>
                        <span className="text-lg font-black text-slate-900">{prod.priceSAR}</span>
                      </div>
                    </div>

                    <button
                      onClick={(e) => handleAdd(prod, e)}
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                        isAdded
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-[#0e5f2c] hover:bg-[#09421e] text-white shadow-2xs'
                      }`}
                      title="Add to Jastip Order"
                    >
                      {isAdded ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
