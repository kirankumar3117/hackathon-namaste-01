'use client';

import { Package, ClipboardList, TrendingUp, DollarSign, Plus } from 'lucide-react';
import Link from 'next/link';

export default function ShopDashboard() {
  return (
    <div className="flex flex-col gap-8 fade-in">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-500">Welcome back! Here&apos;s what&apos;s happening at your store.</p>
        </div>
        <Link href="/products/new" className="hidden md:flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors shadow-sm">
          <Plus size={18} /> Add Product
        </Link>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <StatCard title="Today's Reservations" value="12" icon={<ClipboardList className="text-blue-500" />} trend="+2 from yesterday" />
        <StatCard title="Pending Pickup" value="5" icon={<Package className="text-orange-500" />} trend="Requires action" isAlert />
        <StatCard title="Total Products" value="148" icon={<Package className="text-purple-500" />} trend="+12 this week" />
        <StatCard title="Revenue (Today)" value="₹4,250" icon={<DollarSign className="text-green-500" />} trend="+15% from yesterday" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Reservations */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h2 className="font-bold text-slate-900">Recent Reservations</h2>
            <Link href="/reservations" className="text-sm font-medium text-green-600 hover:text-green-700">View All</Link>
          </div>
          <div className="p-0">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                  <th className="p-4 font-medium">Order ID</th>
                  <th className="p-4 font-medium">Customer</th>
                  <th className="p-4 font-medium">Items</th>
                  <th className="p-4 font-medium">Amount</th>
                  <th className="p-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[1, 2, 3, 4].map(i => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 text-sm font-medium text-slate-900">#RES-00{i}</td>
                    <td className="p-4 text-sm text-slate-600">Customer {i}</td>
                    <td className="p-4 text-sm text-slate-600">{i + 1} items</td>
                    <td className="p-4 text-sm font-medium text-slate-900">₹{450 * i}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${i % 2 === 0 ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}>
                        {i % 2 === 0 ? 'PREPARING' : 'COMPLETED'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions & Alerts */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <h2 className="font-bold text-slate-900 mb-4">Low Stock Alerts</h2>
            <div className="space-y-4">
              {[1, 2].map(i => (
                <div key={i} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-xl">🍅</div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Tomato {i}kg</p>
                      <p className="text-xs text-red-500 font-medium">Only 2 left</p>
                    </div>
                  </div>
                  <button className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg hover:bg-slate-200">
                    Update
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-sm p-6 text-white relative overflow-hidden">
            <div className="relative z-10">
              <TrendingUp className="mb-2 opacity-80" size={24} />
              <h2 className="font-bold text-lg mb-1">Weekly Summary</h2>
              <p className="text-sm text-green-100 mb-4 opacity-90">Your store is doing great! You have 24% more reservations than last week.</p>
              <button className="bg-white text-green-700 px-4 py-2 rounded-lg text-sm font-bold shadow-sm w-full">
                View Full Report
              </button>
            </div>
            <div className="absolute right-0 bottom-0 opacity-20 w-32 h-32 bg-white rounded-full mix-blend-overlay blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, trend, isAlert }: any) {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-sm border ${isAlert ? 'border-orange-200' : 'border-slate-100'}`}>
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-slate-500 text-sm font-medium mb-1">{title}</h3>
        <div className="text-2xl font-bold text-slate-900 mb-2">{value}</div>
        <p className={`text-xs font-medium ${isAlert ? 'text-orange-500' : 'text-green-500'}`}>
          {trend}
        </p>
      </div>
    </div>
  );
}
