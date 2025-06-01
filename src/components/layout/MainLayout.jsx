'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const MainLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-grow ${pathname === '/' ? 'pt-0' : 'pt-24'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
