import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-amber-800 text-amber-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Site Name */}
          <Link to="/" className="text-xl font-bold flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" />
            </svg>
            <span>Wet Little Noses</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-amber-200">{t('navigation.home')}</Link>
            <Link to="/dogs" className="hover:text-amber-200">{t('navigation.dogs')}</Link>
            <Link to="/about" className="hover:text-amber-200">{t('navigation.about')}</Link>
            <Link to="/donate" className="hover:text-amber-200">{t('navigation.donate')}</Link>
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-amber-50" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-3">
            <Link to="/" className="hover:text-amber-200">{t('navigation.home')}</Link>
            <Link to="/dogs" className="hover:text-amber-200">{t('navigation.dogs')}</Link>
            <Link to="/about" className="hover:text-amber-200">{t('navigation.about')}</Link>
            <Link to="/donate" className="hover:text-amber-200">{t('navigation.donate')}</Link>
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;