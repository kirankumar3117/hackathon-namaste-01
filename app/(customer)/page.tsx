'use client';

import { useState } from 'react';
import { Search, MapPin, Sparkles, Image as ImageIcon, ChevronRight, ShoppingBag, Check, ChevronsUpDown, ScanLine } from 'lucide-react';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const locations = [
  { value: "vijayawada", label: "Vijayawada, Andhra Pradesh" },
  { value: "kanchikacherla", label: "Kanchikacherla, Andhra Pradesh" },
];

export default function CustomerHome() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openLocation, setOpenLocation] = useState(false);
  const [locationValue, setLocationValue] = useState("vijayawada");

  return (
    <div className="flex flex-col gap-8 fade-in">
      <header className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm">
        <div className="flex-1">
          <p className="text-xs text-gray-500 flex items-center gap-1 mb-1">
            <MapPin size={14} className="text-green-600" /> Delivering to
          </p>
          <div className="relative">
            <Popover open={openLocation} onOpenChange={setOpenLocation}>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  role="combobox"
                  aria-expanded={openLocation}
                  className="w-full justify-between p-0 h-auto font-semibold text-gray-900 bg-transparent hover:bg-transparent hover:text-green-700"
                >
                  <span className="truncate">
                    {locationValue
                      ? locations.find((loc) => loc.value === locationValue)?.label
                      : "Select location..."}
                  </span>
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[300px] p-0" align="start">
                <Command>
                  <CommandInput placeholder="Search location..." />
                  <CommandList>
                    <CommandEmpty>No location found.</CommandEmpty>
                    <CommandGroup>
                      {locations.map((loc) => (
                        <CommandItem
                          key={loc.value}
                          value={loc.value}
                          onSelect={(currentValue) => {
                            setLocationValue(currentValue === locationValue ? "" : currentValue)
                            setOpenLocation(false)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4 shrink-0",
                              locationValue === loc.value ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {loc.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </header>

      {/* Hero Section / AI Scanner */}
      <section className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-6 md:p-10 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 md:w-2/3">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">No More Writing Lists!</h1>
          <p className="text-green-50 mb-6 text-sm md:text-lg opacity-90 max-w-lg">
            Upload your handwritten grocery list and let AI find everything from nearby stores in seconds.
          </p>
          <Link href="/scan" className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-full font-bold hover:bg-green-50 transition-colors shadow-md">
            <Sparkles size={18} className="text-orange-500" /> Try AI Scanner
          </Link>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute right-0 bottom-0 opacity-20 md:opacity-100 md:right-10 md:-bottom-10 w-48 h-48 md:w-80 md:h-80 bg-white rounded-full mix-blend-overlay blur-3xl"></div>
      </section>

      {/* Search Bar */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
        </div>
        <input
          type="text"
          className="w-full bg-white border-0 py-4 pl-12 pr-14 rounded-2xl shadow-sm text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-green-500 outline-none transition-all"
          placeholder="Search for groceries, medicines..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="absolute inset-y-0 right-2 flex items-center">
          <Link href="/scan" className="p-2 bg-green-50 text-green-600 rounded-xl hover:bg-green-100 transition-colors">
            <ScanLine className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Categories */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-xl font-bold text-gray-900">Shop by Category</h2>
          <Link href="/categories" className="text-sm font-medium text-green-600 hover:text-green-700">View All</Link>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3 md:gap-4">
          {categories.map((cat, i) => (
            <Link href={`/search?category=${cat.id}`} key={i} className="flex flex-col items-center gap-2 group">
              <div className="w-full aspect-square bg-white rounded-2xl shadow-sm flex items-center justify-center p-3 group-hover:shadow-md group-hover:ring-2 ring-green-500/20 transition-all">
                <span className="text-3xl">{cat.icon}</span>
              </div>
              <span className="text-xs font-medium text-gray-700 text-center">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Nearby Stores */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-xl font-bold text-gray-900">Nearby Stores</h2>
          <Link href="/stores" className="text-sm font-medium text-green-600 hover:text-green-700">View All</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stores.map((store, i) => (
            <Link href={`/store/${store.id}`} key={i} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex-shrink-0 flex items-center justify-center text-2xl border border-gray-100">
                {store.emoji}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900">{store.name}</h3>
                <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                  <MapPin size={12} /> {store.distance}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-1 rounded">OPEN</span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">⭐ {store.rating}</span>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-300" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

// Mock Data for MVP design
const categories = [
  { id: 1, name: 'Groceries', icon: '🛒' },
  { id: 2, name: 'Medicines', icon: '💊' },
  { id: 3, name: 'Electronics', icon: '🎧' },
  { id: 4, name: 'Fashion', icon: '👕' },
  { id: 5, name: 'Bakery', icon: '🥐' },
  { id: 6, name: 'Hardware', icon: '🔨' },
  { id: 7, name: 'Stationery', icon: '📚' },
  { id: 8, name: 'Pets', icon: '🐕' },
];

const stores = [
  { id: 1, name: 'Sri Lakshmi Super Market', distance: '1.2 km', rating: 4.8, emoji: '🏬' },
  { id: 2, name: 'Annapurna Medicals', distance: '1.8 km', rating: 4.9, emoji: '🏥' },
  { id: 3, name: 'Ravi Electronics', distance: '2.4 km', rating: 4.6, emoji: '⚡' },
];


