import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import { homeEN, homeLV, homeRU,
    headerEN, headerLV, headerRU,
    aboutEN, aboutLV, aboutRU,
    servicesEN, servicesLV, servicesRU,
    infoEN, infoLV, infoRU,
    advantagesEN, advantagesLV, advantagesRU,
    contactsEN, contactsLV, contactsRU
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
                header: headerEN,
                about: aboutEN,
                services: servicesEN,
                info: infoEN,
                advantages: advantagesEN,
                contacts: contactsEN
            },
            lv: {
                home: homeLV,
                header: headerLV,
                about: aboutLV,
                services: servicesLV,
                info: infoLV,
                advantages: advantagesLV,
                contacts: contactsLV
            },
            ru: {
                home: homeRU,
                header: headerRU,
                about: aboutRU,
                services: servicesRU,
                info: infoRU,
                advantages: advantagesRU,
                contacts: contactsRU
            },
        }
    });

export default i18n;
