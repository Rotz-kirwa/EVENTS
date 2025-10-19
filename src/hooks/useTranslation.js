import { useTranslation as useI18nTranslation } from 'react-i18next';

export const useTranslation = (namespace = 'common') => {
  const { t, i18n } = useI18nTranslation(namespace);
  
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  
  const currentLanguage = i18n.language;
  
  return {
    t,
    i18n,
    changeLanguage,
    currentLanguage,
  };
};

export default useTranslation;
