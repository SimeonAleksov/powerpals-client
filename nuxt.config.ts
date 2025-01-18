// nuxt.config.ts
export default defineNuxtConfig({
 ssr: true,
  srcDir: 'src',
  css: ['~/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_variables.scss" as *;'
        }
      }
    }
  },
  modules: [
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    classSuffix: '',
    preference: 'dark', // Set dark as default
    fallback: 'dark'
  },
  app: {
    head: {
      title: 'PowerPals',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Gaming services marketplace'
        }
      ]
    }
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8000/api',
      appEnv: process.env.NUXT_APP_ENV || 'development'
    }
  },

  devtools: { enabled: true },
  compatibilityDate: '2025-01-18'
})
