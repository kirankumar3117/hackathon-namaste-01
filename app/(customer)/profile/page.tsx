'use client';

import { Settings, LogOut, Package, MapPin, Bell, ChevronRight, User } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-6 fade-in h-full pb-20">
      {/* Profile Header */}
      <div className="bg-white p-6 rounded-3xl shadow-sm flex items-center gap-4">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center border-4 border-white shadow-md">
          <User size={32} className="text-green-600" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900">John Doe</h1>
          <p className="text-sm text-gray-500">+91 98765 43210</p>
          <span className="inline-block mt-2 bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">
            Customer
          </span>
        </div>
      </div>

      {/* Menu Options */}
      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
        <div className="p-4 bg-gray-50/50 border-b">
          <h2 className="font-semibold text-gray-700 text-sm uppercase tracking-wider">My Account</h2>
        </div>
        <div className="flex flex-col">
          <MenuLink icon={<Package />} title="My Reservations" subtitle="Active and past reservations" />
          <div className="h-[1px] bg-gray-100 mx-4" />
          <MenuLink icon={<MapPin />} title="Saved Addresses" subtitle="Manage your delivery locations" />
          <div className="h-[1px] bg-gray-100 mx-4" />
          <MenuLink icon={<Bell />} title="Notifications" subtitle="Offers and updates" />
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
        <div className="p-4 bg-gray-50/50 border-b">
          <h2 className="font-semibold text-gray-700 text-sm uppercase tracking-wider">Settings</h2>
        </div>
        <div className="flex flex-col">
          <MenuLink icon={<Settings />} title="App Settings" subtitle="Theme, language" />
          <div className="h-[1px] bg-gray-100 mx-4" />
          <button className="flex items-center gap-4 p-4 hover:bg-red-50 transition-colors text-left w-full group">
            <div className="w-10 h-10 bg-red-100 text-red-500 rounded-xl flex items-center justify-center">
              <LogOut size={20} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-red-600">Logout</h3>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function MenuLink({ icon, title, subtitle }: { icon: React.ReactNode, title: string, subtitle: string }) {
  return (
    <button className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors text-left w-full group">
      <div className="w-10 h-10 bg-gray-100 text-gray-600 group-hover:bg-green-100 group-hover:text-green-600 rounded-xl flex items-center justify-center transition-colors">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">{title}</h3>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
      <ChevronRight size={20} className="text-gray-300 group-hover:text-green-500 transition-colors" />
    </button>
  );
}
