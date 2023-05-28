const path = require('path')

module.exports = {
    i18n: {
        locales: ['lv', 'ru', 'en'],
        defaultLocale: 'en',
        localeDetection: false,
    },
    localePath: path.join(__dirname, 'public/locales'),
}
