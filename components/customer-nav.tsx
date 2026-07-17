"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, ShoppingCart, User, ShoppingBag } from 'lucide-react';
import { cn } from "@/lib/utils";

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Search', href: '/search', icon: Search },
  { name: 'Cart', href: '/cart', icon: ShoppingCart, badge: 2 },
  { name: 'Profile', href: '/profile', icon: User },
];

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-[260px] flex-col border-r border-gray-100 bg-white p-6 sticky top-0 h-screen">
      {/* Logo */}
      <div className="flex flex-col items-start gap-1 mb-12 px-2 pt-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-white shadow-sm">
            <ShoppingBag size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-green-700 tracking-tight uppercase">Kart Mithra</span>
            <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">Your Nearby Marketplace</span>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex flex-col gap-8 flex-1 px-4 mt-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.href} 
              href={item.href} 
              className={cn(
                "flex items-center gap-5 py-2 text-[15px] font-medium transition-all duration-200 group",
                isActive 
                  ? "text-green-600" 
                  : "text-gray-500 hover:text-green-600"
              )}
            >
              <Icon 
                size={24} 
                strokeWidth={isActive ? 2.5 : 2} 
                className={cn(
                  "transition-colors", 
                  isActive ? "text-green-600" : "text-gray-400 group-hover:text-green-600"
                )} 
              />
              <span>{item.name}</span>
              {item.badge && (
                <span className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-[11px] font-bold text-white">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-[0_-4px_20px_-15px_rgba(0,0,0,0.1)] flex justify-around p-2 pb-4 z-50">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;
        
        return (
          <Link 
            key={item.href} 
            href={item.href} 
            className={cn(
              "flex flex-col items-center gap-1.5 p-2 min-w-[64px] transition-colors duration-200",
              isActive 
                ? "text-green-600" 
                : "text-gray-400 hover:text-gray-600"
            )}
          >
            <div className="relative">
              <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              {item.badge && (
                <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-green-600 text-[9px] font-bold text-white border-2 border-white">
                  {item.badge}
                </span>
              )}
            </div>
            <span className={cn("text-[10px] font-medium", isActive && "font-semibold")}>
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
