'use client';

import { useState } from 'react';
import { Search, MapPin, Store, MoreVertical, CheckCircle2, XCircle } from 'lucide-react';

export default function AdminStores() {
  const [search, setSearch] = useState('');

  return (
    <div className="flex flex-col gap-6 fade-in h-full pb-10">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Stores Management</h1>
          <p className="text-gray-500 mt-1">Monitor and manage all onboarded marketplace stores.</p>
        </div>
      </header>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col flex-1 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex flex-col md:flex-row gap-4 justify-between items-center bg-gray-50/30">
          <div className="relative w-full md:w-96 group">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
            </div>
            <input
              type="text"
              className="w-full bg-white border border-gray-200 py-2.5 pl-10 pr-4 rounded-xl text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
              placeholder="Search stores by name, location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <select className="flex-1 md:flex-none px-4 py-2.5 bg-white text-gray-700 rounded-xl hover:bg-gray-50 transition-colors border border-gray-200 outline-none text-sm font-semibold">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-50/80 text-gray-500 text-xs uppercase tracking-widest">
                <th className="p-4 font-bold">Store Details</th>
                <th className="p-4 font-bold">Owner</th>
                <th className="p-4 font-bold">Products</th>
                <th className="p-4 font-bold">Status</th>
                <th className="p-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-indigo-600 shadow-sm border border-gray-200">
                        <Store size={24} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Sri Lakshmi Market {i}</p>
                        <p className="text-xs text-gray-500 font-medium flex items-center gap-1 mt-0.5">
                          <MapPin size={12} /> Vijayawada, AP
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <p className="text-sm font-bold text-gray-900">Owner Name {i}</p>
                    <p className="text-xs text-gray-500">+91 98765 4321{i}</p>
                  </td>
                  <td className="p-4 text-sm font-bold text-indigo-600 bg-indigo-50/50 rounded-lg inline-block my-3 px-3 py-1 ml-4 border border-indigo-100">
                    {i * 120} items
                  </td>
                  <td className="p-4">
                    <span className={`flex items-center gap-1.5 text-sm font-semibold ${i === 4 ? 'text-red-500' : 'text-emerald-600'}`}>
                      <span className={`w-2 h-2 rounded-full ${i === 4 ? 'bg-red-500' : 'bg-emerald-500'}`}></span>
                      {i === 4 ? 'Inactive' : 'Active'}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between mt-auto bg-gray-50/30">
          <p className="text-xs font-semibold text-gray-500">Showing 1 to 5 of 84 stores</p>
          <div className="flex gap-1">
            <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:bg-white disabled:opacity-50 transition-colors">Prev</button>
            <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-sm font-bold shadow-sm">1</button>
            <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:bg-white transition-colors">2</button>
            <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:bg-white transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
