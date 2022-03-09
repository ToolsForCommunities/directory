import path from 'path'

import vuetifyOptions from './plugins/vuetify.options'
import firebase from './plugins/firebase.config'
import i18n from './i18n'

export default {
  server: {
    host: '0' // default: localhost
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Community Tools',
    title: 'Community Tools',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // env: {
  //   baseUrl: process.env.VUE_APP_API_URL || 'http://lalala.com'
  // },
  publicRuntimeConfig: {
    ...process.env
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'material-design-icons-iconfont/dist/material-design-icons.css',
    'assets/globals.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/components',
    '@/plugins/nuxtClientInit',
    '@/plugins/settings'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/i18n',
    '@nuxtjs/firebase',
    '@nuxtjs/google-gtag',
    '@nuxtjs/recaptcha'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    ...vuetifyOptions,
    treeShake: false,
    customVariables: ['~/assets/variables.scss']
  },

  // i18n settings
  i18n,

  // Firebase config options
  firebase,

  // Analytics options
  'google-gtag': {
    id: process.env.VUE_APP_ANALYTICS_ID,
    debug: process.env.NODE_ENV !== 'production'
  },

  // Recaptcha
  recaptcha: {
    version: Number(process.env.RECAPTCHA_VERSION) || 3,
    siteKey: process.env.RECAPTCHA_KEY || ''
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config) {
      // To avoid vue and vuetify being loaded twice, just alias them ;)
      config.resolve.alias.vue$ = path.resolve('./node_modules/vue/dist/vue.runtime.esm.js')
      config.resolve.alias['^vuetify'] = path.resolve(__dirname, 'node_modules/vuetify')
      // console.log(config.resolve.alias);
    }
  }
}
