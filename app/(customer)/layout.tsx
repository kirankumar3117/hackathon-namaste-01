import { DesktopNav, MobileNav } from '@/components/customer-nav';

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50/50 flex-col md:flex-row font-sans">
      <DesktopNav />

      {/* Main Content */}
      <main className="flex-1 pb-20 md:pb-0 overflow-y-auto w-full max-w-5xl mx-auto md:p-6 p-4">
        {children}
      </main>

      <MobileNav />
    </div>
  );
}
