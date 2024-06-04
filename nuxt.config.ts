export default defineNuxtConfig({
  ssr: false,

  devtools: { enabled: false },

  app: {
    pageTransition: false,
    layoutTransition: false,
  },

  spaLoadingTemplate: false,

  css: ["~/assets/css/ionic.css"],

  modules: [
    "@nuxt/eslint",
    "@vueuse/nuxt",
    "@nuxtjs/ionic",
    "@nuxtjs/tailwindcss",
  ],

  eslint: { config: { standalone: false } },

  ionic: {
    css: { utilities: true },
    config: { hardwareBackButton: true },
  },

  tailwindcss: { viewer: false },
})
