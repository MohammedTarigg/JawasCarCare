import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationsEN from './translations/en.json';
import translationsAR from './translations/ar.json';

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .init({
        // debug: true,
        resources: {
            en: {
                translation: translationsEN
            },
            ar: {
                translation: translationsAR
            },
            react: {
                wait: true,
            }
        }, // resources are important to load translations for the languages.
        lng: localStorage.getItem("lang") || "ar", // It acts as default language. When the site loads, content is shown in this language.  
        fallbackLng: "en", // use de if selected language is not available
        interpolation: {
            escapeValue: false
        },
        //ns: "translation", // namespaces help to divide huge translations into multiple small files.
        //defaultNS: "translation"
    });

export default i18n;