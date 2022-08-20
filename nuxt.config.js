export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'fishing-frontend',

    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'mailru-domain', content: 'h54WiUpGl43Q0Qk9' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {src: 'assets/styles/index.css', lang: 'css'},
    {src: 'swiper/css/swiper.css', lang: 'css'},//node_modules/swiper/css
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/nuxt-swiper-plugin.js', mode:'client' },
    { src: '@/plugins/M-modal.js', mode: 'client'},
    { src: '@/plugins/M-gql.js', mode: 'client'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  primevue: {
    theme: 'saga-blue',
    ripple: true,
    components: ['InputText','Button', 'Toast', 'Paginator', 'ProgressSpinner'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/apollo',
    'primevue/nuxt',
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://diwos.ru/api/graphql',
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['primevue'],
  }
  
}

