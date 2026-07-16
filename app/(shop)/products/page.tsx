'use client';

import { useState } from 'react';
import { Search, Plus, Filter, Edit, Trash2 } from 'lucide-react';

export default function ShopProducts() {
  const [search, setSearch] = useState('');

  return (
    <div className="flex flex-col gap-6 fade-in h-full pb-10">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Products</h1>
          <p className="text-slate-500 text-sm mt-1">Manage your inventory and stock availability.</p>
        </div>
        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-green-700 transition-colors shadow-sm">
          <Plus size={18} /> <span className="hidden md:inline">Add Product</span>
        </button>
      </header>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col flex-1">
        <div className="p-4 border-b border-slate-100 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96 group">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-green-500 transition-colors" />
            </div>
            <input
              type="text"
              className="w-full bg-slate-50 border-0 py-2.5 pl-10 pr-4 rounded-xl text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-green-500 outline-none transition-all"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-slate-50 text-slate-600 rounded-xl hover:bg-slate-100 transition-colors border border-slate-200 text-sm font-medium">
              <Filter size={16} /> Filter
            </button>
            <select className="flex-1 md:flex-none px-4 py-2 bg-slate-50 text-slate-600 rounded-xl hover:bg-slate-100 transition-colors border border-slate-200 outline-none text-sm font-medium">
              <option>All Categories</option>
              <option>Groceries</option>
              <option>Dairy</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-medium rounded-tl-2xl">Product Info</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Price</th>
                <th className="p-4 font-medium">Stock</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium rounded-tr-2xl text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors group">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-lg border border-slate-100 flex items-center justify-center text-xl shadow-sm">
                        {i % 2 === 0 ? '🥛' : '🍅'}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Product Name {i}</p>
                        <p className="text-xs text-slate-500">Unit: {i % 2 === 0 ? '1L' : '1kg'}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-600">
                    <span className="bg-slate-100 px-2 py-1 rounded text-xs">{i % 2 === 0 ? 'Dairy' : 'Groceries'}</span>
                  </td>
                  <td className="p-4 text-sm font-semibold text-slate-900">₹{40 * i}</td>
                  <td className="p-4">
                    <span className={`text-sm font-semibold ${i === 3 ? 'text-red-500' : 'text-slate-900'}`}>
                      {i === 3 ? '2' : 45 * i}
                    </span>
                  </td>
                  <td className="p-4">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked={i !== 4} />
                      <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500"></div>
                    </label>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit size={16} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-slate-100 flex items-center justify-between mt-auto">
          <p className="text-xs text-slate-500">Showing 1 to 5 of 148 entries</p>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50 disabled:opacity-50">Prev</button>
            <button className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm font-medium shadow-sm">1</button>
            <button className="px-3 py-1 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50">2</button>
            <button className="px-3 py-1 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
