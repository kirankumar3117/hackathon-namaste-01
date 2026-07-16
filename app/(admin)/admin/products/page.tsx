'use client';

export default function AdminProducts() {
  return (
    <div className="flex flex-col gap-6 fade-in h-full pb-10">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Products Overview</h1>
          <p className="text-gray-500 mt-1">Platform-wide product catalog and metrics.</p>
        </div>
      </header>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col flex-1 items-center justify-center text-gray-500">
        <p>Products management view is under construction for MVP.</p>
      </div>
    </div>
  );
}
