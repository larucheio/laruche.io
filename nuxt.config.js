module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'laruche - Swiss Web Agency',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Swiss Web Agency' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ffb700' },
  /*
  ** Router configuration
  */
  router: {
    middleware: 'i18n',
    linkActiveClass: 'gold'
  },
  /*
  ** CSS configuration
  */
  css: [
    { src: '~assets/css/main.css', lang: 'scss' }
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'vue-i18n'
    ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    { src: '~plugins/i18n.js', injectAs: 'i18n' }
  ],
  generate: {
    routes: ['/', '/about', '/services', '/process', '/fr', '/fr/services', '/fr/processus', '/fr/a-propos']
  }
}
