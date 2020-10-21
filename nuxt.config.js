const resolve = require('path').resolve

export default {
  /*
  ** Fuck off
  */
  telemetry: false,
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'theme-color', name: 'theme-color', content: '#fcaebb' },
      { hid: 'twitter:card', name: 'twitter:card', content: "summary_large_image" },
      { hid: 'twitter:site', name: 'twitter:site', content: "@AriaSalvatrice" },
      { hid: 'twitter:title', name: 'twitter:title', content: "Aria Salvatrice's Synthesizer Modules compatible with VCV Rack" },
      { hid: 'twitter:description', name: 'twitter:description', content: "Aria Salvatrice Signature Series: VCV Rack compatible modules for live aleatoric music." },
      { hid: 'twitter:image', name: 'twitter:image', content: "https://aria.dog/modules/card.png" },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/modules/favicon-96x96.png' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/vue-observe-visibility.client.js'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-stylus-resources-loader', [
      resolve(__dirname, 'assets/css/global.styl'),
    ]],
    '@nuxtjs/markdownit'
  ],
  /*
  ** https://github.com/markdown-it/markdown-it
  */
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-div',
      'markdown-it-attrs'
    ]
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-nested': {},
        'postcss-url': {},
        'postcss-short': {}
      }
    },
    publicPath: 'https://aria.dog/modules/'
  },
  /*
  ** Set default directory to modules
  */
  router: {
    base: '/modules/'
  }
}
