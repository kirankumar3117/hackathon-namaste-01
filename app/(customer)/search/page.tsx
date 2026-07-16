'use client';

import { useState } from 'react';
import { Search, Filter, SlidersHorizontal, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className="flex flex-col gap-6 fade-in h-full">
      <header className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm sticky top-0 z-10">
        <div className="relative flex-1 group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
          </div>
          <input
            type="text"
            className="w-full bg-gray-50 border-0 py-3 pl-12 pr-4 rounded-xl text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-green-500 outline-none"
            placeholder="Search products, stores..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
        </div>
        <button className="p-3 bg-gray-50 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors">
          <SlidersHorizontal size={20} />
        </button>
      </header>

      <div className="flex gap-2 px-1">
        <button 
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeTab === 'products' ? 'bg-green-600 text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
          onClick={() => setActiveTab('products')}
        >
          Products
        </button>
        <button 
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeTab === 'stores' ? 'bg-green-600 text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
          onClick={() => setActiveTab('stores')}
        >
          Stores
        </button>
      </div>

      <div className="flex-1 bg-white rounded-3xl p-4 shadow-sm min-h-[50vh]">
        {query.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-gray-400 py-12">
            <Search size={48} className="mb-4 opacity-20" />
            <p>Start typing to search for {activeTab}</p>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider px-2">
              Results for "{query}"
            </h3>
            
            {/* Mock Results */}
            {activeTab === 'products' ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="bg-gray-50 p-3 rounded-2xl">
                    <div className="aspect-square bg-white rounded-xl mb-3 flex items-center justify-center text-4xl shadow-sm border border-gray-100">
                      {i % 2 === 0 ? '🥛' : '🍅'}
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm truncate">Fresh Item {i}</h4>
                    <p className="text-xs text-gray-500 mb-2">Sri Lakshmi Market</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-bold text-gray-900">₹{40 * i}</span>
                      <button className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-green-700 shadow-sm">
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {[1, 2].map(i => (
                  <div key={i} className="flex items-center gap-4 bg-gray-50 p-3 rounded-2xl">
                     <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm border border-gray-100">
                      🏬
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900">Local Store {i}</h4>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                        <MapPin size={12} /> {i}.{i} km away
                      </p>
                    </div>
                    <Link href={`/store/${i}`} className="bg-white text-green-600 px-4 py-2 rounded-xl text-sm font-bold border border-gray-200 hover:bg-gray-50 shadow-sm">
                      Visit
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
