'use client';

import { Users, Store, Package, ClipboardList, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-8 fade-in">
      <header>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Platform Overview</h1>
        <p className="text-gray-500 mt-2">Kart Mithra MVP overall performance and statistics.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Users" value="1,248" icon={<Users className="text-indigo-600" />} trend="+12% this month" />
        <StatCard title="Active Stores" value="84" icon={<Store className="text-emerald-600" />} trend="+5 new this week" />
        <StatCard title="Total Products" value="12,450" icon={<Package className="text-amber-600" />} trend="Across all stores" />
        <StatCard title="Total Reservations" value="4,821" icon={<ClipboardList className="text-blue-600" />} trend="₹1.2M GMV" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Stores */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="font-bold text-gray-900 text-lg">Recently Onboarded Stores</h2>
            <Link href="/admin/stores" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">View All</Link>
          </div>
          <div className="divide-y divide-gray-100">
            {[1, 2, 3].map(i => (
              <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-xl">🏪</div>
                  <div>
                    <h3 className="font-bold text-gray-900">New Store {i}</h3>
                    <p className="text-xs text-gray-500">Joined 2 days ago • Hyderabad</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">ACTIVE</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Users */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="font-bold text-gray-900 text-lg">Recent User Signups</h2>
            <Link href="/admin/users" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">View All</Link>
          </div>
          <div className="divide-y divide-gray-100">
            {[1, 2, 3].map(i => (
              <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                    U{i}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">User Name {i}</h3>
                    <p className="text-xs text-gray-500">user{i}@example.com</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-gray-400">Today</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, trend }: any) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:scale-110 transition-transform">
          {icon}
        </div>
      </div>
      <div className="relative z-10">
        <h3 className="text-gray-500 text-sm font-semibold mb-1">{title}</h3>
        <div className="text-3xl font-black text-gray-900 mb-2 tracking-tight">{value}</div>
        <p className="text-xs font-medium text-emerald-600 flex items-center gap-1">
          <TrendingUp size={14} /> {trend}
        </p>
      </div>
      {/* Decorative background blob */}
      <div className="absolute -right-6 -top-6 w-24 h-24 bg-gray-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>
    </div>
  );
}
