import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // Store language preference in localStorage
    localStorage.setItem('preferredLanguage', lng);
  };

  return (
    <div className="flex space-x-2">
      <button 
        onClick={() => changeLanguage('en')} 
        className={`px-2 py-1 text-sm rounded ${i18n.language === 'en' ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-800'}`}
      >
        EN
      </button>
      <button 
        onClick={() => changeLanguage('ro')} 
        className={`px-2 py-1 text-sm rounded ${i18n.language === 'ro' ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-800'}`}
      >
        RO
      </button>
      <button 
        onClick={() => changeLanguage('de')} 
        className={`px-2 py-1 text-sm rounded ${i18n.language === 'de' ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-800'}`}
      >
        DE
      </button>
    </div>
  );
};

export default LanguageSwitcher;