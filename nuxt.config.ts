export default defineNuxtConfig({
  ssr: false,

  typescript: { shim: false },

  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/css/ionic.css',
  ],

  modules: [
    'nuxt-icon',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/ionic',
  ],

  ionic: {
    integrations: { pwa: false },
    css: { utilities: true },
  },

  sourcemap: false,
})
