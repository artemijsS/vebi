import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

// @ts-ignore
i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        interpolation: {
            escapeValue: true
        },
        detection: {
            order: ['querystring', 'cookie', 'header'],
            lookupCookie: 'lang',
            lookupQuerystring: 'lang',
            caches: ['cookie'] },
    });


export default i18n;
