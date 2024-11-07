import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './locales/es.json';
import en from './locales/en.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es }
  },
  lng: 'es', // Idioma por defecto
  fallbackLng: 'es', // Idioma de respaldo
  interpolation: {
    escapeValue: false // React ya se encarga de la seguridad contra XSS
  }
});

export default i18n;