import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-white font-sans overflow-x-hidden selection:bg-brand-pink/10 selection:text-brand-pink">
      <Navbar />
      <main className="">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
