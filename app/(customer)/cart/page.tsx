'use client';

import { useState } from 'react';
import { ShoppingBag, ArrowLeft, Trash2, MapPin, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const [items, setItems] = useState([
    { id: 1, name: 'Aashirvaad Atta', price: 240, qty: 1, icon: '🌾' },
    { id: 2, name: 'Amul Milk 1L', price: 60, qty: 2, icon: '🥛' },
  ]);
  const [isReserved, setIsReserved] = useState(false);

  const total = items.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const handleReserve = () => {
    setIsReserved(true);
    setTimeout(() => setItems([]), 1500); // clear cart on success
  };

  if (isReserved) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh] fade-in text-center px-4">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={48} className="text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Reservation Confirmed!</h2>
        <p className="text-gray-500 mb-8 max-w-sm">
          Your items have been reserved at Sri Lakshmi Super Market. Please pick them up within 2 hours.
        </p>
        <Link href="/profile" className="bg-green-600 text-white px-8 py-3 rounded-xl font-bold shadow-md hover:bg-green-700 transition-colors">
          View My Reservations
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 fade-in pb-24">
      <header className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
        <Link href="/" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="font-bold text-gray-900 text-lg flex items-center gap-2">
          <ShoppingBag size={20} className="text-orange-500" /> My Cart
        </h1>
      </header>

      {items.length === 0 ? (
        <div className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-sm py-20">
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
            <ShoppingBag size={32} className="text-gray-300" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Looks like you haven't added anything to reserve yet.</p>
          <Link href="/" className="bg-green-600 text-white font-bold py-3 px-8 rounded-xl shadow-md hover:bg-green-700">
            Start Shopping
          </Link>
        </div>
      ) : (
        <>
          {/* Store Info */}
          <div className="bg-white p-5 rounded-3xl shadow-sm">
            <div className="flex justify-between items-start mb-4 border-b pb-4">
              <div>
                <span className="text-[10px] font-bold bg-orange-100 text-orange-700 px-2 py-1 rounded uppercase tracking-wider mb-2 inline-block">Reserving from</span>
                <h2 className="font-bold text-gray-900 text-lg">Sri Lakshmi Super Market</h2>
                <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                  <MapPin size={12} /> Benz Circle, Vijayawada (1.2 km away)
                </p>
              </div>
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl border border-gray-100">
                🏬
              </div>
            </div>

            {/* Items */}
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex gap-4 items-center">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl border border-gray-100">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm">{item.name}</h3>
                    <p className="font-bold text-green-600 mt-1">₹{item.price}</p>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-1">
                    <button 
                      className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-gray-600 shadow-sm border border-gray-100"
                      onClick={() => setItems(items.map(i => i.id === item.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i))}
                    >
                      -
                    </button>
                    <span className="font-semibold text-sm w-4 text-center">{item.qty}</span>
                    <button 
                      className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-gray-600 shadow-sm border border-gray-100"
                      onClick={() => setItems(items.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i))}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              className="mt-6 w-full py-3 flex items-center justify-center gap-2 text-red-500 font-medium text-sm bg-red-50 rounded-xl hover:bg-red-100 transition-colors"
              onClick={() => setItems([])}
            >
              <Trash2 size={16} /> Clear Cart
            </button>
          </div>

          {/* Bill Summary */}
          <div className="bg-white p-5 rounded-3xl shadow-sm space-y-3">
            <h3 className="font-bold text-gray-900 mb-2">Bill Summary</h3>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Item Total</span>
              <span>₹{total}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Platform Fee</span>
              <span>₹0 (Free)</span>
            </div>
            <div className="border-t pt-3 mt-3 flex justify-between font-bold text-lg text-gray-900">
              <span>To Pay at Store</span>
              <span className="text-green-600">₹{total}</span>
            </div>
          </div>
        </>
      )}

      {/* Floating Checkout Button */}
      {items.length > 0 && (
        <div className="fixed bottom-[72px] md:bottom-6 left-0 right-0 md:left-auto md:right-8 md:w-80 px-4 md:px-0 z-40">
          <button 
            onClick={handleReserve}
            className="w-full bg-green-600 text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-green-700 transition-all flex items-center justify-between px-6"
          >
            <div className="flex flex-col text-left">
              <span className="text-xs font-normal opacity-90">{items.length} items</span>
              <span>₹{total}</span>
            </div>
            <span className="flex items-center gap-2">Reserve Now <ArrowLeft size={16} className="rotate-180" /></span>
          </button>
        </div>
      )}
    </div>
  );
}
