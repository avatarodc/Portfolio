import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from '../ui/ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, darkMode, setDarkMode }) => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    <main>{children}</main>
    <Footer />
    <ScrollToTop />
  </div>
);