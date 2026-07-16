import Link from 'next/link';
import { Home, Search, ShoppingCart, User } from 'lucide-react';

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50/50 flex-col md:flex-row">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r bg-white p-4 sticky top-0 h-screen">
        <div className="flex items-center gap-2 mb-8 px-2">
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">K</span>
          </div>
          <span className="text-xl font-bold text-green-900">Kart Mithra</span>
        </div>
        
        <nav className="flex flex-col gap-2 flex-1">
          <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-green-50 text-green-700 font-medium">
            <Home size={20} />
            Home
          </Link>
          <Link href="/search" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 font-medium">
            <Search size={20} />
            Search
          </Link>
          <Link href="/cart" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 font-medium">
            <ShoppingCart size={20} />
            Cart
          </Link>
          <Link href="/profile" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 font-medium">
            <User size={20} />
            Profile
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 pb-16 md:pb-0 overflow-y-auto w-full max-w-5xl mx-auto md:p-6 p-4">
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-3 z-50">
        <Link href="/" className="flex flex-col items-center gap-1 text-green-600">
          <Home size={24} />
          <span className="text-xs font-medium">Home</span>
        </Link>
        <Link href="/search" className="flex flex-col items-center gap-1 text-gray-500">
          <Search size={24} />
          <span className="text-xs font-medium">Search</span>
        </Link>
        <Link href="/cart" className="flex flex-col items-center gap-1 text-gray-500 relative">
          <ShoppingCart size={24} />
          <span className="absolute top-0 right-0 w-4 h-4 bg-orange-500 text-white text-[10px] rounded-full flex items-center justify-center">2</span>
          <span className="text-xs font-medium">Cart</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center gap-1 text-gray-500">
          <User size={24} />
          <span className="text-xs font-medium">Profile</span>
        </Link>
      </nav>
    </div>
  );
}
