'use client';

import { 
  Package, MapPin, Bell, ChevronRight, User, Heart, 
  Wallet, Shield, CreditCard, Gift, Pencil, ShoppingBag, 
  XCircle
} from 'lucide-react';
import Image from 'next/image';

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-6 fade-in h-full pb-24 md:pb-6">
      <h1 className="text-2xl font-bold text-gray-900 hidden md:block px-2">My Profile</h1>

      {/* Profile Header */}
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left w-full">
          <div className="relative">
            <div className="w-24 h-24 md:w-28 md:h-28 bg-green-50 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-md">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 text-gray-600 hover:text-green-600 transition-colors">
              <Pencil size={14} />
            </button>
          </div>
          <div className="flex flex-col gap-1.5 mt-2 md:mt-1 flex-1">
            <h2 className="text-2xl font-bold text-gray-900">Kiran Kumar</h2>
            <p className="text-gray-600 font-medium">+91 98765 43210</p>
            <p className="text-gray-500 text-sm">kiran.kumar@example.com</p>
            <div className="flex items-center gap-1.5 text-gray-500 text-sm justify-center md:justify-start mt-1">
              <MapPin size={14} />
              <span>Vijayawada, Andhra Pradesh, India</span>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50/80 px-5 py-4 rounded-2xl flex flex-col gap-1 w-full md:w-auto text-center md:text-left">
          <span className="text-xs font-semibold text-green-800 uppercase tracking-wider">Member Since</span>
          <span className="text-sm font-bold text-green-900">June 2024</span>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={<Package size={20} />} value="32" label="Total Orders" />
        <StatCard icon={<Heart size={20} />} value="12" label="Favorites" />
        <StatCard icon={<MapPin size={20} />} value="3" label="Saved Addresses" />
        <StatCard icon={<Wallet size={20} />} value="₹4,250" label="Total Spent" />
      </div>

      {/* Main Content: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left Column: Account Settings */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4 px-2">Account Settings</h2>
          <div className="bg-white rounded-3xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] overflow-hidden flex flex-col py-2">
            <MenuLink icon={<User />} title="Edit Profile" subtitle="Update your personal information" />
            <div className="h-[1px] bg-gray-100 mx-6" />
            <MenuLink icon={<MapPin />} title="Addresses" subtitle="Manage your saved addresses" />
            <div className="h-[1px] bg-gray-100 mx-6" />
            <MenuLink icon={<CreditCard />} title="Payment Methods" subtitle="Manage your payment options" />
            <div className="h-[1px] bg-gray-100 mx-6" />
            <MenuLink icon={<Bell />} title="Notifications" subtitle="Manage your notification preferences" />
            <div className="h-[1px] bg-gray-100 mx-6" />
            <MenuLink icon={<Shield />} title="Privacy & Security" subtitle="Manage your privacy and security" />
          </div>
        </div>

        {/* Right Column: Recent Orders */}
        <div>
          <div className="flex justify-between items-center mb-4 px-2">
            <h2 className="text-lg font-bold text-gray-900">Recent Orders</h2>
            <button className="text-sm font-bold text-green-600 hover:text-green-700">View All</button>
          </div>
          <div className="bg-white rounded-3xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] p-2">
            <div className="flex flex-col divide-y divide-gray-50">
              <OrderCard 
                id="#KM12345" 
                title="Fresh Vegetables & Fruits" 
                date="16 Jul 2026" 
                status="Completed" 
                icon={<ShoppingBag size={20} />} 
                isSuccess={true} 
              />
              <OrderCard 
                id="#KM12344" 
                title="Grocery Essentials" 
                date="10 Jul 2026" 
                status="Completed" 
                icon={<Package size={20} />} 
                isSuccess={true} 
              />
              <OrderCard 
                id="#KM12343" 
                title="Snacks & Beverages" 
                date="05 Jul 2026" 
                status="Cancelled" 
                icon={<XCircle size={20} />} 
                isSuccess={false} 
              />
            </div>
          </div>
        </div>
        
      </div>

      {/* Bottom Banner */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-green-100 shadow-sm mt-2">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-500/20 rotate-[-5deg]">
            <Gift size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-green-950 mb-1 text-center md:text-left">Refer & Earn</h3>
            <p className="text-green-800 text-sm font-medium text-center md:text-left">Invite your friends and earn exciting rewards!</p>
          </div>
        </div>
        <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-md hover:shadow-lg w-full md:w-auto">
          Refer Now
        </button>
      </div>

    </div>
  );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) {
  return (
    <div className="bg-white rounded-3xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] p-5 flex items-center gap-4 flex-col lg:flex-row text-center lg:text-left">
      <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-bold text-gray-900">{value}</h4>
        <p className="text-xs font-medium text-gray-500 mt-0.5">{label}</p>
      </div>
    </div>
  );
}

function MenuLink({ icon, title, subtitle }: { icon: React.ReactNode, title: string, subtitle: string }) {
  return (
    <button className="flex items-center gap-5 p-4 md:px-6 hover:bg-gray-50 transition-colors text-left w-full group">
      <div className="w-10 h-10 bg-green-50/50 text-green-600 group-hover:bg-green-100 group-hover:text-green-700 rounded-xl flex items-center justify-center transition-colors shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-gray-800 group-hover:text-green-700 transition-colors text-sm">{title}</h3>
        <p className="text-xs text-gray-500 font-medium mt-0.5">{subtitle}</p>
      </div>
      <ChevronRight size={18} className="text-gray-300 group-hover:text-green-500 transition-colors" />
    </button>
  );
}

function OrderCard({ id, title, date, status, icon, isSuccess }: { id: string, title: string, date: string, status: string, icon: React.ReactNode, isSuccess: boolean }) {
  return (
    <div className="flex items-center gap-4 p-4 hover:bg-gray-50/80 rounded-2xl transition-colors cursor-pointer group">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isSuccess ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'}`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-1">
          <h4 className="font-bold text-gray-900 text-sm truncate pr-2">Order {id}</h4>
          <span className="text-[11px] font-semibold text-gray-500 shrink-0 mt-0.5">{date}</span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xs font-medium text-gray-500 truncate pr-4">{title}</p>
          <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wide uppercase shrink-0 ${
            isSuccess ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
          }`}>
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}
