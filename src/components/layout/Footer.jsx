import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-800 text-amber-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Wet Little Noses</h3>
            <p className="text-amber-200 max-w-md">
              {t('footer.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-3">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-amber-200 hover:text-white">{t('navigation.home')}</Link></li>
                <li><Link to="/dogs" className="text-amber-200 hover:text-white">{t('navigation.dogs')}</Link></li>
                <li><Link to="/about" className="text-amber-200 hover:text-white">{t('navigation.about')}</Link></li>
                <li><Link to="/donate" className="text-amber-200 hover:text-white">{t('navigation.donate')}</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">{t('footer.contact')}</h4>
              <ul className="space-y-2">
                <li className="text-amber-200">Email: info@wetlittlenoses.ro</li>
                <li className="text-amber-200">Phone: (555) 123-4567</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-700 mt-8 pt-6 text-center">
          <p>&copy; {currentYear} Wet Little Noses / Năsuțuri Umede. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;