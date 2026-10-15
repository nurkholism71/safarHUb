import React, { useState } from 'react';
import {
  X,
  Star,
  MapPin,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Sparkles,
  CheckCircle2,
  Plus,
  Minus
} from 'lucide-react';
import { JastipProduct } from '../../types/jastip';

interface JastipProductModalProps {
  product: JastipProduct | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirmOrder: (product: JastipProduct, qty: number) => void;
}

export const JastipProductModal: React.FC<JastipProductModalProps> = ({
  product,
  isOpen,
  onClose,
  onConfirmOrder
}) => {
  const [qty, setQty] = useState(1);
  const [isOrdered, setIsOrdered] = useState(false);

  if (!isOpen || !product) return null;

  const handleOrder = () => {
    setIsOrdered(true);
    setTimeout(() => {
      onConfirmOrder(product, qty);
      setIsOrdered(false);
      onClose();
    }, 1500);
  };

  const totalPrice = product.priceSAR * qty;
  const estIDR = (totalPrice * 4350).toLocaleString('id-ID');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/40 text-white hover:bg-black/60 flex items-center justify-center backdrop-blur-xs transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {isOrdered ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 font-serif">Item Added to Jastip Cart!</h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              {qty}× {product.name} has been added to your shopping request. Our concierge will prepare the order.
            </p>
          </div>
        ) : (
          <div>
            {/* Image Banner */}
            <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              {product.badge && (
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider rounded-md bg-amber-400 text-slate-900 shadow-sm">
                  {product.badge}
                </span>
              )}
              <div className="absolute bottom-3 left-4 text-white">
                <span className="text-xs font-bold text-amber-300 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {product.location}
                </span>
                <h3 className="text-xl font-bold font-serif">{product.name}</h3>
              </div>
            </div>

            {/* Product Body */}
            <div className="p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <p className="text-xs text-slate-500 font-medium">{product.subName}</p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-slate-900">{product.rating}</span>
                    <span>({product.reviewsCount} reviews)</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Package Spec</div>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    {product.weight}
                  </span>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                <span className="text-xs font-bold text-slate-700">Quantity</span>
                <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
                  <button
                    onClick={() => setQty((prev) => Math.max(1, prev - 1))}
                    className="w-6 h-6 flex items-center justify-center text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-100"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-sm font-black text-slate-900 min-w-[20px] text-center">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty((prev) => prev + 1)}
                    className="w-6 h-6 flex items-center justify-center text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-100"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Price Calculation */}
              <div className="flex items-center justify-between pt-2">
                <div>
                  <span className="text-[11px] text-slate-400 font-medium">Estimated Total:</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-bold text-emerald-800">SAR</span>
                    <span className="text-2xl font-black text-slate-900">{totalPrice}</span>
                    <span className="text-xs text-slate-500 font-semibold ml-1">
                      (≈ Rp {estIDR})
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleOrder}
                  className="px-6 py-3 bg-[#0e5f2c] hover:bg-[#09421e] text-white font-bold text-xs rounded-xl shadow-md transition-colors flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 text-amber-300" />
                  <span>Order Now</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
