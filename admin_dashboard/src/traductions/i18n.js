// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa archivos de traducción
import translationEn from '@/locales/en.json';
import translationEs from '@/locales/es.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },
    es: { translation: translationEs },
  },
  lng: 'en', // Idioma por defecto
  fallbackLng: 'en', // Idioma en caso de que falte traducción
  interpolation: { escapeValue: false }, // Evita el escape de caracteres HTML
});

export default i18n;