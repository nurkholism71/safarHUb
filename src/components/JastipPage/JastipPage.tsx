import React, { useState, useMemo } from 'react';
import { JastipHero } from './JastipHero';
import { JastipCategoryRow } from './JastipCategoryRow';
import { JastipPromoBanners } from './JastipPromoBanners';
import { FeaturedJastipProducts } from './FeaturedJastipProducts';
import { HowJastipWorks } from './HowJastipWorks';
import { PopularPlacesWeShop } from './PopularPlacesWeShop';
import { JastipInsightsRow } from './JastipInsightsRow';
import { CustomJastipModal } from '../Modals/CustomJastipModal';
import { JastipProductModal } from '../Modals/JastipProductModal';
import { JASTIP_PRODUCTS } from '../../data/jastipData';
import { JastipProduct } from '../../types/jastip';

export const JastipPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<JastipProduct | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return JASTIP_PRODUCTS.filter((prod) => {
      const matchCategory =
        selectedCategory === 'all' || prod.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchQuery =
        !searchQuery ||
        prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.subName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenProduct = (product: JastipProduct) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleAddToCart = (product: JastipProduct) => {
    setCartCount((prev) => prev + 1);
  };

  const handleConfirmOrder = (product: JastipProduct, qty: number) => {
    setCartCount((prev) => prev + qty);
  };

  const handleSearch = (query: string, category: string) => {
    setSearchQuery(query);
    setSelectedCategory(category);
  };

  return (
    <div className="w-full bg-[#f8fafc] pb-16">
      {/* 1. Full-Width Hero */}
      <JastipHero
        onSearch={handleSearch}
        onRequestCustom={() => setIsCustomModalOpen(true)}
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-2">
        {/* 2. Category Carousel */}
        <JastipCategoryRow
          selectedCategory={selectedCategory}
          onSelectCategory={(catId) => setSelectedCategory(catId)}
        />

        {/* 3. Split Promo Banners */}
        <JastipPromoBanners
          onViewPopular={() => setSelectedCategory('all')}
          onRequestCustom={() => setIsCustomModalOpen(true)}
        />

        {/* 4. Featured Products Grid */}
        <FeaturedJastipProducts
          products={filteredProducts}
          onSelectProduct={handleOpenProduct}
          onAddToCart={handleAddToCart}
          onViewAll={() => {
            setSelectedCategory('all');
            setSearchQuery('');
          }}
        />

        {/* 5. How Jastip Works Step Flow */}
        <HowJastipWorks />

        {/* 6. Popular Places We Shop */}
        <PopularPlacesWeShop
          onSelectPlace={(place) => {
            setSearchQuery(place.city);
          }}
        />

        {/* 7. Bottom 3-Column Insights (Recent Orders, Tracking, Why Choose) */}
        <JastipInsightsRow />
      </div>

      {/* Modals */}
      <CustomJastipModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
        onSubmit={(data) => {
          setCartCount((prev) => prev + 1);
        }}
      />

      <JastipProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        onConfirmOrder={handleConfirmOrder}
      />
    </div>
  );
};
