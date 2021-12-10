module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'ouroinc.com', 'aray.guide', 'maps.googleapis.com'],
  },
  i18n: {
    locales: ['es-ES','en-US','zh-CN','fr-FR'],
    defaultLocale: 'es-ES',
    domains: [
      {
        domain: 'aray.guide',
        defaultLocale: 'es-ES',
      },
      {
        domain: 'en.aray.guide',
        defaultLocale: 'en-US',
      },
      {
        domain: 'cn.aray.guide',
        defaultLocale: 'zh-CN',
      },
      {
        domain: 'fr.aray.guide',
        defaultLocale: 'fr-FR',
        // an optional http field can also be used to test
        // locale domains locally with http instead of https
        http: true,
      },
    ],
  },
}
