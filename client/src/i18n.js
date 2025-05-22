import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n

  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // detect user language
  .use(LanguageDetector)
  .use(HttpBackend)
  //init i18next
  .init({
    debug: false,
    fallbackLng: "en",
    backend: {
        loadPath: '/locales/{{lng}}/translation.json'
    },

    detection: {
        order:['navigator', 'htmlTag', 'cookie','localStorage', 'path', 'subdomain'],
        caches: ['localstorage', 'cookie'], //stores selected language for future visits
    },
    interpolation: {
        escapeValue: false,
    }
  });

export default i18n;
