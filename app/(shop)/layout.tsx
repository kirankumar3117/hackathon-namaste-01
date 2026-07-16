'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Package, ClipboardList, Users, BarChart3, Settings, LogOut, Store } from 'lucide-react';

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Products', href: '/products', icon: <Package size={20} /> },
    { name: 'Reservations', href: '/reservations', icon: <ClipboardList size={20} /> },
    { name: 'Customers', href: '/customers', icon: <Users size={20} /> },
    { name: 'Analytics', href: '/analytics', icon: <BarChart3 size={20} /> },
    { name: 'Settings', href: '/shop-settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-gray-50 flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-slate-900 text-slate-300 flex flex-col transition-all flex-shrink-0 md:h-screen md:sticky md:top-0">
        <div className="p-6 flex items-center gap-3 border-b border-slate-800">
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white">
            <Store size={20} />
          </div>
          <div>
            <h1 className="text-white font-bold text-lg leading-tight">Partner Portal</h1>
            <p className="text-xs text-slate-400">Sri Lakshmi Market</p>
          </div>
        </div>
        
        <nav className="flex-1 py-6 px-4 flex flex-col gap-2 overflow-y-auto">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-3">Menu</div>
          {navItems.map((item) => {
            const isActive = pathname === item.href || (pathname === '/shop' && item.href === '/dashboard');
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                  isActive 
                  ? 'bg-green-500/10 text-green-400' 
                  : 'hover:bg-slate-800 hover:text-white'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button className="flex items-center gap-3 px-3 py-3 w-full rounded-xl hover:bg-red-500/10 text-red-400 transition-colors">
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto w-full p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
