import React, { useState } from 'react';
import { AdminJastipHeader } from './AdminJastipHeader';
import { AdminJastipKpiRow } from './AdminJastipKpiRow';
import { AdminJastipCityStrip } from './AdminJastipCityStrip';
import { AdminJastipCategoryPills } from './AdminJastipCategoryPills';
import { AdminJastipOrdersTable } from './AdminJastipOrdersTable';
import { AdminJastipPopularItemsCard } from './AdminJastipPopularItemsCard';
import { AdminJastipRightSidebar } from './AdminJastipRightSidebar';
import { AdminJastipBottomAnalytics } from './AdminJastipBottomAnalytics';
import { ADMIN_JASTIP_ORDERS } from '../../../data/adminJastipData';

interface AdminJastipPageProps {
  onOpenActionModal?: (id: string, title: string) => void;
}

export const AdminJastipPage: React.FC<AdminJastipPageProps> = ({
  onOpenActionModal
}) => {
  const [selectedCity, setSelectedCity] = useState('makkah');
  const [selectedCategory, setSelectedCategory] = useState('parfum');

  return (
    <div className="space-y-5">
      {/* 1. Header with Title, Button & Hero Banner */}
      <AdminJastipHeader
        onNewJastip={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-new-jastip', 'Buat Permintaan Titip Belanja (Jastip) Baru');
          }
        }}
      />

      {/* 2. Top 5 KPI Metrics Strip */}
      <AdminJastipKpiRow
        onSelectKpi={(kpiId) => {
          if (onOpenActionModal) {
            onOpenActionModal(`admin-jastip-kpi-${kpiId}`, `Jastip Metric: ${kpiId.toUpperCase()}`);
          }
        }}
      />

      {/* 3. 5-City Quick Selector Strip */}
      <AdminJastipCityStrip
        selectedCity={selectedCity}
        onSelectCity={setSelectedCity}
      />

      {/* 4. 12 Product Category Pills */}
      <AdminJastipCategoryPills
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* 5. Middle 3-Column Section matching reference image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Column 1: Recent Jastip Orders Table (6 / 12 = 50%) */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col">
          <AdminJastipOrdersTable
            orders={ADMIN_JASTIP_ORDERS}
            onOpenActionModal={onOpenActionModal}
            onViewAll={() => {
              if (onOpenActionModal) {
                onOpenActionModal('admin-all-jastip-orders', 'Semua Daftar Pesanan Jastip Arab Saudi');
              }
            }}
          />
        </div>

        {/* Column 2: Popular Items Card (3 / 12 = 25%) */}
        <div className="lg:col-span-3 xl:col-span-3 flex flex-col">
          <AdminJastipPopularItemsCard
            onViewAll={() => {
              if (onOpenActionModal) {
                onOpenActionModal('admin-jastip-all-popular', 'Katalog Produk Populer Jastip Saudi');
              }
            }}
            onSelectItem={(rank, name) => {
              if (onOpenActionModal) {
                onOpenActionModal(`admin-jastip-item-${rank}`, `Detail Produk Populer: ${name}`);
              }
            }}
          />
        </div>

        {/* Column 3: Quick Actions, Tracking & Trusted Stores (3 / 12 = 25%) */}
        <div className="lg:col-span-3 xl:col-span-3 flex flex-col">
          <AdminJastipRightSidebar
            onQuickAction={(actionId, title) => {
              if (onOpenActionModal) {
                onOpenActionModal(`admin-jastip-action-${actionId}`, title);
              }
            }}
            onTrackOrder={(orderId) => {
              if (onOpenActionModal) {
                onOpenActionModal(`admin-track-${orderId}`, `Live Tracking Pesanan Jastip: ${orderId}`);
              }
            }}
            onViewAllStores={() => {
              if (onOpenActionModal) {
                onOpenActionModal('admin-jastip-all-stores', 'Daftar Toko & Supermarket Rekanan Terverifikasi');
              }
            }}
          />
        </div>
      </div>

      {/* 6. Bottom 3 Analytics Cards Row (Orders by Location | Orders Trend | Top Categories) */}
      <AdminJastipBottomAnalytics
        onViewAllCategories={() => {
          if (onOpenActionModal) {
            onOpenActionModal('admin-jastip-all-categories', 'Statistik Kategori Jastip Lengkap');
          }
        }}
      />
    </div>
  );
};
