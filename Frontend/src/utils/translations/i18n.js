import i18n from 'i18next';
import {initReactI18next, useTranslation} from 'react-i18next';

import {en, kr} from './locales';

const resources = {
    en,
    kr,
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'en', // if you're using a language detector, do not define the lng option
        fallbackLng: 'en',
    });

/*
 * Pass a translation key and receive a translated string, optionally passing a template value.
 * eg.
 * t('act') // Act
 * t('monthlyEmissionNumber', { co2: '100kg' }) // Your emissions this month 100kg
 **/
function t(key, values) {
    return values ? i18n.t(key, values) : i18n.t(key);
}

export {i18n, t};
