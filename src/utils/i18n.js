import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import translationEN from '../locales/en/translation.json';
import translationRO from '../locales/ro/translation.json';
import translationDE from '../locales/de/translation.json';

// Translation resources
const resources = {
  en: {
    translation: translationEN
  },
  ro: {
    translation: translationRO
  },
  de: {
    translation: translationDE
  }
};

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false, // Not needed for React
    }
  });

export default i18n;