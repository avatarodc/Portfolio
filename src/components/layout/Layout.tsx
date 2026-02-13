// src/components/layout/Layout.tsx
import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from '../ui/ScrollToTop';
import { useTheme } from '@/hooks';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      {/* Subtle background texture */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.08),transparent)] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.12),transparent)] pointer-events-none" />

      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main className="relative">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};