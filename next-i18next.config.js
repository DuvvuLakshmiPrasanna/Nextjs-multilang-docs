const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr', 'de'],
    localeDetection: false,
  },
  ns: ['common', 'docs'],
  defaultNS: 'common',
  localePath: path.resolve('./public/locales'),
};
