'use client';

import { useState } from 'react';
import { Search, Filter, CheckCircle, XCircle, Clock, PackageCheck } from 'lucide-react';

export default function ShopReservations() {
  const [activeTab, setActiveTab] = useState('pending');

  const tabs = [
    { id: 'pending', label: 'Pending', count: 5 },
    { id: 'preparing', label: 'Preparing', count: 3 },
    { id: 'ready', label: 'Ready for Pickup', count: 2 },
    { id: 'completed', label: 'Completed', count: 12 },
  ];

  return (
    <div className="flex flex-col gap-6 fade-in h-full pb-10">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Reservations</h1>
          <p className="text-slate-500 text-sm mt-1">Manage incoming orders from customers.</p>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === tab.id 
              ? 'bg-slate-900 text-white shadow-md' 
              : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            {tab.label}
            <span className={`px-2 py-0.5 rounded-md text-xs ${
              activeTab === tab.id ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-500'
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
            <div className="p-4 border-b border-slate-100 flex justify-between items-start bg-slate-50/50">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-slate-900 bg-white px-2 py-1 rounded shadow-sm border border-slate-100">#RES-00{i}</span>
                  <span className="text-xs text-slate-500">10 mins ago</span>
                </div>
                <h3 className="font-bold text-slate-900 mt-2">Customer Name</h3>
                <p className="text-xs text-slate-500">+91 98765 43210</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-green-600">₹{450 * i}</p>
                <p className="text-xs text-slate-500">{i + 1} items</p>
              </div>
            </div>
            
            <div className="p-4 flex-1">
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Order Items</h4>
              <ul className="space-y-2">
                {[1, 2].map(j => (
                  <li key={j} className="flex justify-between items-center text-sm">
                    <span className="text-slate-700"><span className="font-semibold text-slate-900">{j}x</span> Product Name {j}</span>
                    <span className="text-slate-500 font-medium">₹{40 * j}</span>
                  </li>
                ))}
                {i > 2 && (
                  <li className="text-xs text-slate-400 font-medium pt-1">+ {i - 1} more items</li>
                )}
              </ul>
            </div>

            <div className="p-4 border-t border-slate-100 bg-slate-50/50">
              {activeTab === 'pending' && (
                <div className="flex gap-3">
                  <button className="flex-1 bg-white border-2 border-red-100 text-red-600 font-bold py-2.5 rounded-xl hover:bg-red-50 transition-colors flex justify-center items-center gap-2 text-sm">
                    <XCircle size={18} /> Reject
                  </button>
                  <button className="flex-1 bg-green-600 text-white font-bold py-2.5 rounded-xl hover:bg-green-700 shadow-sm transition-colors flex justify-center items-center gap-2 text-sm">
                    <CheckCircle size={18} /> Accept
                  </button>
                </div>
              )}
              {activeTab === 'preparing' && (
                <button className="w-full bg-blue-600 text-white font-bold py-2.5 rounded-xl hover:bg-blue-700 shadow-sm transition-colors flex justify-center items-center gap-2 text-sm">
                  <PackageCheck size={18} /> Mark as Ready
                </button>
              )}
              {activeTab === 'ready' && (
                <button className="w-full bg-slate-900 text-white font-bold py-2.5 rounded-xl hover:bg-slate-800 shadow-sm transition-colors flex justify-center items-center gap-2 text-sm">
                  <CheckCircle size={18} /> Handed Over
                </button>
              )}
              {activeTab === 'completed' && (
                <div className="text-center py-2 text-sm font-bold text-green-600 bg-green-50 rounded-xl">
                  Completed Successfully
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
