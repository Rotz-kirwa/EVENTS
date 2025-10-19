import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enCommon from '../locales/en/common.json';
import swCommon from '../locales/sw/common.json';

const resources = {
  en: {
    common: enCommon,
  },
  sw: {
    common: swCommon,
  },
};

// Detect browser language or use stored preference
const getBrowserLanguage = () => {
  const stored = localStorage.getItem('language');
  if (stored) return stored;
  
  const browserLang = navigator.language.split('-')[0];
  return ['en', 'sw'].includes(browserLang) ? browserLang : 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getBrowserLanguage(),
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

// Save language preference when it changes
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
  document.documentElement.lang = lng;
});

export default i18n;
