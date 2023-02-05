import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import { homeEN, homeLV, homeRU,
    headerEN, headerLV, headerRU
} from './translate';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: false,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                home: homeEN,
                header: headerEN
            },
            lv: {
                home: homeLV,
                header: headerLV
            },
            ru: {
                home: homeRU,
                header: headerRU
            },
        }
    });

export default i18n;
